/**
 * EJERCICIOS INTERMEDIOS DE TYPESCRIPT
 * 
 * Estos ejercicios combinan múltiples conceptos de TypeScript para crear
 * soluciones más complejas y realistas.
 */

// ===== EJERCICIO 1: Sistema de Gestión de Usuarios =====

/**
 * EJERCICIO 1.1: Definir Tipos de Usuario
 * 
 * Crea un tipo union que represente diferentes tipos de usuarios:
 * - Usuario regular con: id, nombre, email, activo
 * - Usuario admin con: id, nombre, email, activo, permisos (array de strings)
 * - Usuario invitado con: nombre, sesion (number)
 */
type UsuarioRegular = { tipo: "regular"; id: number; nombre: string; email: string; activo: boolean };
type UsuarioAdmin = { tipo: "admin"; id: number; nombre: string; email: string; activo: boolean; permisos: string[] };
type UsuarioInvitado = { tipo: "invitado"; nombre: string; sesion: number };

type Usuario = UsuarioRegular | UsuarioAdmin | UsuarioInvitado;

/**
 * EJERCICIO 1.2: Función de Información de Usuario
 * 
 * Crea una función que reciba un usuario y retorne información específica según su tipo.
 * - Regular: "Usuario [id]: [nombre] ([email])"
 * - Admin: "Admin [id]: [nombre] - Permisos: [permisos]"
 * - Invitado: "Invitado: [nombre] - Sesión: [sesion]"
 */
function obtenerInformacionUsuario(usuario: Usuario): string {
  // TODO: Implementa la función usando discriminated union
  switch (usuario.tipo) {
    case "regular":
      return `Usuario ${usuario.id}: ${usuario.nombre} (${usuario.email})`;
    case "admin":
      return `Admin ${usuario.id}: ${usuario.nombre} - Permisos: ${usuario.permisos.join(", ")}`;
    case "invitado":
      return `Invitado: ${usuario.nombre} - Sesión: ${usuario.sesion}`;
  }
}

/**
 * EJERCICIO 1.3: Función de Verificación de Permisos
 * 
 * Crea una función que reciba un usuario y un permiso, y retorne true si el usuario tiene ese permiso.
 * - Regular: no tiene permisos especiales (solo acceso básico)
 * - Admin: tiene todos los permisos
 * - Invitado: no tiene permisos
 */
function tienePermiso(usuario: Usuario, permiso: string): boolean {
  // TODO: Implementa la función
  switch (usuario.tipo) {
    case "regular":
      return permiso === "acceso_basico";
    case "admin":
      return true; // Los admins tienen todos los permisos
    case "invitado":
      return false; // Los invitados no tienen permisos
  }
}

// ===== EJERCICIO 2: Sistema de Configuración =====

/**
 * EJERCICIO 2.1: Configuración de Base de Datos
 * 
 * Crea un tipo que represente la configuración de base de datos con:
 * - host: string
 * - puerto: number
 * - nombre: string
 * - usuario: string
 * - password: string
 * - ssl: boolean (opcional, por defecto false)
 */
type ConfiguracionDB = {
  host: string;
  puerto: number;
  nombre: string;
  usuario: string;
  password: string;
  ssl?: boolean;
};

/**
 * EJERCICIO 2.2: Función de Validación de Configuración
 * 
 * Crea una función que valide una configuración de base de datos y retorne:
 * - true si es válida
 * - false si es inválida
 * 
 * Reglas de validación:
 * - host no puede estar vacío
 * - puerto debe estar entre 1 y 65535
 * - nombre no puede estar vacío
 * - usuario no puede estar vacío
 * - password no puede estar vacío
 */
function validarConfiguracionDB(config: ConfiguracionDB): boolean {
  // TODO: Implementa la validación
  return (
    config.host.length > 0 &&
    config.puerto >= 1 && config.puerto <= 65535 &&
    config.nombre.length > 0 &&
    config.usuario.length > 0 &&
    config.password.length > 0
  );
}

/**
 * EJERCICIO 2.3: Función de Conexión
 * 
 * Crea una función que reciba una configuración y retorne un string con la URL de conexión.
 * Formato: "tipo://usuario:password@host:puerto/nombre?ssl=true/false"
 */
function generarUrlConexion(config: ConfiguracionDB): string {
  // TODO: Implementa la función
  const ssl = config.ssl ? "true" : "false";
  return `postgresql://${config.usuario}:${config.password}@${config.host}:${config.puerto}/${config.nombre}?ssl=${ssl}`;
}

// ===== EJERCICIO 3: Sistema de Eventos =====

/**
 * EJERCICIO 3.1: Tipos de Eventos
 * 
 * Crea tipos para diferentes eventos:
 * - EventoClick: tipo "click", x, y, boton ("izquierdo" | "derecho" | "medio")
 * - EventoTeclado: tipo "keydown" | "keyup", tecla, ctrlKey, shiftKey, altKey
 * - EventoScroll: tipo "scroll", posicion, direccion ("arriba" | "abajo")
 */
type EventoClick = { tipo: "click"; x: number; y: number; boton: "izquierdo" | "derecho" | "medio" };
type EventoTeclado = { tipo: "keydown" | "keyup"; tecla: string; ctrlKey: boolean; shiftKey: boolean; altKey: boolean };
type EventoScroll = { tipo: "scroll"; posicion: number; direccion: "arriba" | "abajo" };

type Evento = EventoClick | EventoTeclado | EventoScroll;

/**
 * EJERCICIO 3.2: Función de Procesamiento de Eventos
 * 
 * Crea una función que procese diferentes tipos de eventos y retorne un string descriptivo.
 */
function procesarEvento(evento: Evento): string {
  // TODO: Implementa la función usando discriminated union
  switch (evento.tipo) {
    case "click":
      return `Click ${evento.boton} en posición (${evento.x}, ${evento.y})`;
    case "keydown":
    case "keyup":
      const modificadores = [];
      if (evento.ctrlKey) modificadores.push("Ctrl");
      if (evento.shiftKey) modificadores.push("Shift");
      if (evento.altKey) modificadores.push("Alt");
      const mods = modificadores.length > 0 ? ` + ${modificadores.join("+")}` : "";
      return `Tecla ${evento.tipo}: ${evento.tecla}${mods}`;
    case "scroll":
      return `Scroll hacia ${evento.direccion} - Posición: ${evento.posicion}`;
  }
}

// ===== EJERCICIO 4: Sistema de Validación de Formularios =====

/**
 * EJERCICIO 4.1: Tipos de Campos
 * 
 * Crea tipos para diferentes campos de formulario:
 * - CampoTexto: tipo "texto", nombre, valor, requerido, minLength (opcional), maxLength (opcional)
 * - CampoEmail: tipo "email", nombre, valor, requerido
 * - CampoNumero: tipo "numero", nombre, valor, requerido, min (opcional), max (opcional)
 */
type CampoTexto = { tipo: "texto"; nombre: string; valor: string; requerido: boolean; minLength?: number; maxLength?: number };
type CampoEmail = { tipo: "email"; nombre: string; valor: string; requerido: boolean };
type CampoNumero = { tipo: "numero"; nombre: string; valor: number; requerido: boolean; min?: number; max?: number };

type CampoFormulario = CampoTexto | CampoEmail | CampoNumero;

/**
 * EJERCICIO 4.2: Resultado de Validación
 * 
 * Crea un tipo union para el resultado de validación:
 * - ValidacionExito: valido true, campo, valor
 * - ValidacionError: valido false, campo, error, valorRecibido
 */
type ValidacionExito = { valido: true; campo: string; valor: any };
type ValidacionError = { valido: false; campo: string; error: string; valorRecibido: any };

type ResultadoValidacion = ValidacionExito | ValidacionError;

/**
 * EJERCICIO 4.3: Función de Validación
 * 
 * Crea una función que valide un campo de formulario y retorne el resultado de validación.
 */
function validarCampo(campo: CampoFormulario): ResultadoValidacion {
  // TODO: Implementa la validación
  // Verificar si es requerido y está vacío
  if (campo.requerido && esValorVacio(campo)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Campo requerido",
      valorRecibido: campo.valor
    };
  }
  
  // Si no es requerido y está vacío, es válido
  if (!campo.requerido && esValorVacio(campo)) {
    return {
      valido: true,
      campo: campo.nombre,
      valor: campo.valor
    };
  }
  
  // Validaciones específicas por tipo
  switch (campo.tipo) {
    case "texto":
      return validarCampoTexto(campo);
    case "email":
      return validarCampoEmail(campo);
    case "numero":
      return validarCampoNumero(campo);
  }
}

// Función auxiliar para verificar si un valor está vacío
function esValorVacio(campo: CampoFormulario): boolean {
  if (campo.tipo === "texto" || campo.tipo === "email") {
    return campo.valor === "" || campo.valor === null || campo.valor === undefined;
  } else {
    return campo.valor === null || campo.valor === undefined || isNaN(campo.valor);
  }
}

// Función auxiliar para validar campo de texto
function validarCampoTexto(campo: CampoTexto): ResultadoValidacion {
  const valor = campo.valor;
  
  if (campo.minLength && valor.length < campo.minLength) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Mínimo ${campo.minLength} caracteres`,
      valorRecibido: valor
    };
  }
  
  if (campo.maxLength && valor.length > campo.maxLength) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Máximo ${campo.maxLength} caracteres`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

// Función auxiliar para validar campo de email
function validarCampoEmail(campo: CampoEmail): ResultadoValidacion {
  const valor = campo.valor;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(valor)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Email inválido",
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

// Función auxiliar para validar campo de número
function validarCampoNumero(campo: CampoNumero): ResultadoValidacion {
  const valor = campo.valor;
  
  if (campo.min !== undefined && valor < campo.min) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Mínimo ${campo.min}`,
      valorRecibido: valor
    };
  }
  
  if (campo.max !== undefined && valor > campo.max) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Máximo ${campo.max}`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

// ===== EJERCICIO 5: Sistema de Respuestas de API =====

/**
 * EJERCICIO 5.1: Tipos de Respuesta
 * 
 * Crea tipos para diferentes respuestas de API:
 * - RespuestaExito: success true, data, timestamp
 * - RespuestaError: success false, error, codigo, timestamp
 */
type RespuestaExito<T> = { success: true; data: T; timestamp: number };
type RespuestaError = { success: false; error: string; codigo: number; timestamp: number };

type RespuestaAPI<T> = RespuestaExito<T> | RespuestaError;

/**
 * EJERCICIO 5.2: Función de Procesamiento de Respuesta
 * 
 * Crea una función que procese una respuesta de API y retorne un string descriptivo.
 */
function procesarRespuestaAPI<T>(respuesta: RespuestaAPI<T>): string {
  // TODO: Implementa la función
  if (respuesta.success) {
    return `✅ Éxito: ${JSON.stringify(respuesta.data)} - ${new Date(respuesta.timestamp).toLocaleTimeString()}`;
  } else {
    return `❌ Error (${respuesta.codigo}): ${respuesta.error} - ${new Date(respuesta.timestamp).toLocaleTimeString()}`;
  }
}

// ===== EJERCICIO 6: Sistema de Estados =====

/**
 * EJERCICIO 6.1: Estados de Carga
 * 
 * Crea tipos para diferentes estados de carga:
 * - EstadoInicial: estado "inicial"
 * - EstadoCargando: estado "cargando", progreso (number), mensaje (string)
 * - EstadoExito: estado "exito", datos (any), timestamp (number)
 * - EstadoError: estado "error", error (string), codigo (number)
 */
type EstadoInicial = { estado: "inicial" };
type EstadoCargando = { estado: "cargando"; progreso: number; mensaje: string };
type EstadoExito<T> = { estado: "exito"; datos: T; timestamp: number };
type EstadoError = { estado: "error"; error: string; codigo: number };

type EstadoCarga<T> = EstadoInicial | EstadoCargando | EstadoExito<T> | EstadoError;

/**
 * EJERCICIO 6.2: Función de Renderizado de Estado
 * 
 * Crea una función que renderice diferentes estados y retorne un string descriptivo.
 */
function renderizarEstado<T>(estado: EstadoCarga<T>): string {
  // TODO: Implementa la función
  switch (estado.estado) {
    case "inicial":
      return "Presiona para cargar datos";
    case "cargando":
      return `Cargando: ${estado.mensaje} (${estado.progreso}%)`;
    case "exito":
      return `✅ Datos cargados: ${JSON.stringify(estado.datos)} - ${new Date(estado.timestamp).toLocaleTimeString()}`;
    case "error":
      return `❌ Error (${estado.codigo}): ${estado.error}`;
  }
}

// ===== EJERCICIOS DE PRUEBA =====

console.log("=== EJERCICIOS INTERMEDIOS DE TYPESCRIPT ===");

// Prueba Ejercicio 1: Sistema de Gestión de Usuarios
console.log("\n--- Ejercicio 1: Sistema de Gestión de Usuarios ---");
const usuarios: Usuario[] = [
  { tipo: "regular", id: 1, nombre: "Juan", email: "juan@email.com", activo: true },
  { tipo: "admin", id: 2, nombre: "Ana", email: "ana@email.com", activo: true, permisos: ["read", "write", "delete"] },
  { tipo: "invitado", nombre: "Pedro", sesion: 12345 }
];

usuarios.forEach(usuario => {
  console.log(obtenerInformacionUsuario(usuario));
  console.log(`Tiene permiso 'read': ${tienePermiso(usuario, "read")}`);
  console.log(`Tiene permiso 'acceso_basico': ${tienePermiso(usuario, "acceso_basico")}`);
  console.log("---");
});

// Prueba Ejercicio 2: Sistema de Configuración
console.log("\n--- Ejercicio 2: Sistema de Configuración ---");
const configuraciones: ConfiguracionDB[] = [
  { host: "localhost", puerto: 5432, nombre: "mi_db", usuario: "admin", password: "secret123" },
  { host: "", puerto: 5432, nombre: "mi_db", usuario: "admin", password: "secret123" }, // host vacío
  { host: "localhost", puerto: 70000, nombre: "mi_db", usuario: "admin", password: "secret123" }, // puerto inválido
  { host: "localhost", puerto: 5432, nombre: "mi_db", usuario: "admin", password: "secret123", ssl: true }
];

configuraciones.forEach((config, index) => {
  console.log(`Configuración ${index + 1}:`);
  console.log(`  Válida: ${validarConfiguracionDB(config)}`);
  if (validarConfiguracionDB(config)) {
    console.log(`  URL: ${generarUrlConexion(config)}`);
  }
  console.log("---");
});

// Prueba Ejercicio 3: Sistema de Eventos
console.log("\n--- Ejercicio 3: Sistema de Eventos ---");
const eventos: Evento[] = [
  { tipo: "click", x: 100, y: 200, boton: "izquierdo" },
  { tipo: "keydown", tecla: "Enter", ctrlKey: true, shiftKey: false, altKey: false },
  { tipo: "scroll", posicion: 150, direccion: "abajo" }
];

eventos.forEach(evento => {
  console.log(procesarEvento(evento));
});

// Prueba Ejercicio 4: Sistema de Validación de Formularios
console.log("\n--- Ejercicio 4: Sistema de Validación de Formularios ---");
const campos: CampoFormulario[] = [
  { tipo: "texto", nombre: "nombre", valor: "Juan", requerido: true, minLength: 2, maxLength: 50 },
  { tipo: "email", nombre: "email", valor: "juan@email.com", requerido: true },
  { tipo: "numero", nombre: "edad", valor: 25, requerido: true, min: 18, max: 100 },
  { tipo: "texto", nombre: "descripcion", valor: "", requerido: false },
  { tipo: "email", nombre: "email_invalido", valor: "email-malo", requerido: true },
  { tipo: "numero", nombre: "edad_invalida", valor: 15, requerido: true, min: 18, max: 100 }
];

campos.forEach(campo => {
  const resultado = validarCampo(campo);
  if (resultado.valido) {
    console.log(`✅ ${resultado.campo}: ${resultado.valor}`);
  } else {
    console.log(`❌ ${resultado.campo}: ${resultado.error} (recibido: ${resultado.valorRecibido})`);
  }
});

// Prueba Ejercicio 5: Sistema de Respuestas de API
console.log("\n--- Ejercicio 5: Sistema de Respuestas de API ---");
const respuestas: RespuestaAPI<any>[] = [
  { success: true, data: { usuarios: 150, productos: 300 }, timestamp: Date.now() },
  { success: false, error: "No autorizado", codigo: 401, timestamp: Date.now() },
  { success: true, data: "Operación exitosa", timestamp: Date.now() }
];

respuestas.forEach(respuesta => {
  console.log(procesarRespuestaAPI(respuesta));
});

// Prueba Ejercicio 6: Sistema de Estados
console.log("\n--- Ejercicio 6: Sistema de Estados ---");
const estados: EstadoCarga<any>[] = [
  { estado: "inicial" },
  { estado: "cargando", progreso: 75, mensaje: "Descargando archivos" },
  { estado: "exito", datos: { usuarios: 150 }, timestamp: Date.now() },
  { estado: "error", error: "Error de conexión", codigo: 404 }
];

estados.forEach(estado => {
  console.log(renderizarEstado(estado));
});

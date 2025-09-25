/**
 * Ejemplos de Discriminated Unions (Uniones Discriminadas)
 * 
 * Las discriminated unions son un patrón poderoso que combina narrowing con tipos específicos.
 * Utilizan una propiedad común (discriminante) para distinguir entre diferentes tipos.
 */

// ===== EJEMPLO 1: Formas Geométricas Básicas =====

interface Circulo {
  tipo: "circulo";
  radio: number;
}

interface Cuadrado {
  tipo: "cuadrado";
  lado: number;
}

interface Rectangulo {
  tipo: "rectangulo";
  ancho: number;
  alto: number;
}

type Forma = Circulo | Cuadrado | Rectangulo;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      // TypeScript sabe que forma es Circulo
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      // TypeScript sabe que forma es Cuadrado
      return forma.lado ** 2;
    case "rectangulo":
      // TypeScript sabe que forma es Rectangulo
      return forma.ancho * forma.alto;
  }
}

function calcularPerimetro(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return 2 * Math.PI * forma.radio;
    case "cuadrado":
      return 4 * forma.lado;
    case "rectangulo":
      return 2 * (forma.ancho + forma.alto);
  }
}

// ===== EJEMPLO 2: Sistema de Mensajes =====

interface MensajeExito {
  tipo: "exito";
  datos: any;
  timestamp: number;
  codigo: number;
}

interface MensajeError {
  tipo: "error";
  mensaje: string;
  codigo: number;
  detalles?: string;
}

interface MensajeCarga {
  tipo: "carga";
  progreso: number;
  mensaje: string;
}

interface MensajeInfo {
  tipo: "info";
  mensaje: string;
  timestamp: number;
}

type Mensaje = MensajeExito | MensajeError | MensajeCarga | MensajeInfo;

function procesarMensaje(mensaje: Mensaje): string {
  switch (mensaje.tipo) {
    case "exito":
      return `✅ Éxito (${mensaje.codigo}): Datos recibidos a las ${new Date(mensaje.timestamp).toLocaleTimeString()}`;
    case "error":
      const detalles = mensaje.detalles ? ` - ${mensaje.detalles}` : "";
      return `❌ Error (${mensaje.codigo}): ${mensaje.mensaje}${detalles}`;
    case "carga":
      return `⏳ Cargando: ${mensaje.mensaje} (${mensaje.progreso}%)`;
    case "info":
      return `ℹ️ Info: ${mensaje.mensaje} - ${new Date(mensaje.timestamp).toLocaleTimeString()}`;
  }
}

// ===== EJEMPLO 3: Estados de Componente =====

interface EstadoInicial {
  estado: "inicial";
}

interface EstadoCargando {
  estado: "cargando";
  mensaje: string;
}

interface EstadoExito<T> {
  estado: "exito";
  datos: T;
  timestamp: number;
}

interface EstadoError {
  estado: "error";
  error: string;
  codigo?: number;
  reintentos: number;
}

type EstadoComponente<T> = 
  | EstadoInicial 
  | EstadoCargando 
  | EstadoExito<T> 
  | EstadoError;

function renderizarComponente<T>(estado: EstadoComponente<T>): string {
  switch (estado.estado) {
    case "inicial":
      return "Presiona para cargar datos";
    case "cargando":
      return `Cargando: ${estado.mensaje}`;
    case "exito":
      return `Datos cargados: ${JSON.stringify(estado.datos)}`;
    case "error":
      const codigo = estado.codigo ? ` (${estado.codigo})` : "";
      return `Error${codigo}: ${estado.error} - Reintentos: ${estado.reintentos}`;
  }
}

// ===== EJEMPLO 4: Sistema de Autenticación =====

interface UsuarioNoAutenticado {
  autenticado: false;
}

interface UsuarioAutenticado {
  autenticado: true;
  usuario: {
    id: number;
    nombre: string;
    email: string;
    rol: "usuario" | "admin";
  };
  token: string;
  expiracion: number;
}

type EstadoAutenticacion = UsuarioNoAutenticado | UsuarioAutenticado;

function obtenerInformacionUsuario(estado: EstadoAutenticacion): string {
  if (estado.autenticado) {
    // TypeScript sabe que estado es UsuarioAutenticado
    const tiempoRestante = Math.max(0, estado.expiracion - Date.now());
    return `Usuario: ${estado.usuario.nombre} (${estado.usuario.rol}) - Token expira en ${Math.round(tiempoRestante / 1000)}s`;
  } else {
    // TypeScript sabe que estado es UsuarioNoAutenticado
    return "Usuario no autenticado";
  }
}

function puedeAcceder(estado: EstadoAutenticacion, recurso: string): boolean {
  if (!estado.autenticado) {
    return false;
  }
  
  // TypeScript sabe que estado es UsuarioAutenticado
  if (estado.usuario.rol === "admin") {
    return true;
  }
  
  // Solo usuarios autenticados pueden acceder a recursos básicos
  return ["perfil", "configuracion"].includes(recurso);
}

// ===== EJEMPLO 5: Sistema de Eventos =====

interface EventoClick {
  tipo: "click";
  x: number;
  y: number;
  boton: "izquierdo" | "derecho" | "medio";
}

interface EventoTeclado {
  tipo: "keydown" | "keyup";
  tecla: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
}

interface EventoScroll {
  tipo: "scroll";
  posicion: number;
  direccion: "arriba" | "abajo";
}

interface EventoResize {
  tipo: "resize";
  ancho: number;
  alto: number;
}

type Evento = EventoClick | EventoTeclado | EventoScroll | EventoResize;

function manejarEvento(evento: Evento): string {
  switch (evento.tipo) {
    case "click":
      return `Click ${evento.boton} en (${evento.x}, ${evento.y})`;
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
    case "resize":
      return `Ventana redimensionada: ${evento.ancho}x${evento.alto}`;
  }
}

// ===== EJEMPLO 6: Sistema de Validación =====

interface ValidacionExito {
  valido: true;
  valor: any;
  transformado?: any;
}

interface ValidacionError {
  valido: false;
  error: string;
  campo: string;
  valorRecibido: any;
}

type ResultadoValidacion = ValidacionExito | ValidacionError;

function procesarValidacion(resultado: ResultadoValidacion): string {
  if (resultado.valido) {
    // TypeScript sabe que resultado es ValidacionExito
    const transformado = resultado.transformado ? ` (transformado: ${resultado.transformado})` : "";
    return `✅ Validación exitosa: ${resultado.valor}${transformado}`;
  } else {
    // TypeScript sabe que resultado es ValidacionError
    const error = resultado as ValidacionError;
    return `❌ Error en ${error.campo}: ${error.error} (recibido: ${error.valorRecibido})`;
  }
}

// ===== EJEMPLO 7: Sistema de Navegación =====

interface RutaInicio {
  ruta: "/";
  titulo: "Inicio";
}

interface RutaPerfil {
  ruta: "/perfil";
  titulo: "Perfil";
  usuarioId: number;
}

interface RutaConfiguracion {
  ruta: "/configuracion";
  titulo: "Configuración";
  seccion?: string;
}

interface Ruta404 {
  ruta: "404";
  titulo: "Página no encontrada";
  rutaOriginal: string;
}

type Ruta = RutaInicio | RutaPerfil | RutaConfiguracion | Ruta404;

function renderizarNavegacion(ruta: Ruta): string {
  switch (ruta.ruta) {
    case "/":
      return `🏠 ${ruta.titulo}`;
    case "/perfil":
      return `👤 ${ruta.titulo} - Usuario ${ruta.usuarioId}`;
    case "/configuracion":
      const seccion = ruta.seccion ? ` - ${ruta.seccion}` : "";
      return `⚙️ ${ruta.titulo}${seccion}`;
    case "404":
      return `❌ ${ruta.titulo} - Ruta original: ${ruta.rutaOriginal}`;
  }
}

// ===== EJEMPLO 8: Verificación Exhaustiva con 'never' =====

function procesarFormaExhaustivo(forma: Forma): string {
  switch (forma.tipo) {
    case "circulo":
      return `Círculo con radio ${forma.radio}`;
    case "cuadrado":
      return `Cuadrado con lado ${forma.lado}`;
    case "rectangulo":
      return `Rectángulo ${forma.ancho}x${forma.alto}`;
    default:
      // Si agregamos un nuevo tipo a Forma, TypeScript nos avisará
      const _exhaustiveCheck: never = forma;
      throw new Error(`Forma no manejada: ${_exhaustiveCheck}`);
  }
}

// ===== EJEMPLOS DE USO =====

console.log("=== Ejemplos de Discriminated Unions ===");

// Ejemplo 1: Formas
const circulo: Circulo = { tipo: "circulo", radio: 5 };
const cuadrado: Cuadrado = { tipo: "cuadrado", lado: 4 };
const rectangulo: Rectangulo = { tipo: "rectangulo", ancho: 6, alto: 3 };

console.log(`Área del círculo: ${calcularArea(circulo).toFixed(2)}`); // 78.54
console.log(`Área del cuadrado: ${calcularArea(cuadrado)}`); // 16
console.log(`Área del rectángulo: ${calcularArea(rectangulo)}`); // 18

console.log(`Perímetro del círculo: ${calcularPerimetro(circulo).toFixed(2)}`); // 31.42
console.log(`Perímetro del cuadrado: ${calcularPerimetro(cuadrado)}`); // 16
console.log(`Perímetro del rectángulo: ${calcularPerimetro(rectangulo)}`); // 18

// Ejemplo 2: Mensajes
const mensajes: Mensaje[] = [
  { tipo: "exito", datos: { id: 1, nombre: "Juan" }, timestamp: Date.now(), codigo: 200 },
  { tipo: "error", mensaje: "No se pudo conectar", codigo: 500, detalles: "Timeout" },
  { tipo: "carga", progreso: 75, mensaje: "Descargando archivos" },
  { tipo: "info", mensaje: "Operación completada", timestamp: Date.now() }
];

mensajes.forEach(mensaje => {
  console.log(procesarMensaje(mensaje));
});

// Ejemplo 3: Estados de componente
const estados: EstadoComponente<any>[] = [
  { estado: "inicial" },
  { estado: "cargando", mensaje: "Obteniendo datos..." },
  { estado: "exito", datos: { usuarios: 150 }, timestamp: Date.now() },
  { estado: "error", error: "Error de conexión", codigo: 404, reintentos: 3 }
];

estados.forEach(estado => {
  console.log(renderizarComponente(estado));
});

// Ejemplo 4: Autenticación
const estadosAuth: EstadoAutenticacion[] = [
  { autenticado: false },
  { 
    autenticado: true, 
    usuario: { id: 1, nombre: "Ana", email: "ana@email.com", rol: "admin" },
    token: "abc123",
    expiracion: Date.now() + 3600000
  }
];

estadosAuth.forEach(estado => {
  console.log(obtenerInformacionUsuario(estado));
  console.log(`Puede acceder a admin: ${puedeAcceder(estado, "admin")}`);
});

// Ejemplo 5: Eventos
const eventos: Evento[] = [
  { tipo: "click", x: 100, y: 200, boton: "izquierdo" },
  { tipo: "keydown", tecla: "Enter", ctrlKey: true, shiftKey: false, altKey: false },
  { tipo: "scroll", posicion: 150, direccion: "abajo" },
  { tipo: "resize", ancho: 1920, alto: 1080 }
];

eventos.forEach(evento => {
  console.log(manejarEvento(evento));
});

// Ejemplo 6: Validación
const validaciones: ResultadoValidacion[] = [
  { valido: true, valor: "usuario@email.com", transformado: "usuario@email.com" },
  { valido: false, error: "Email inválido", campo: "email", valorRecibido: "email-invalido" }
];

validaciones.forEach(validacion => {
  console.log(procesarValidacion(validacion));
});

// Ejemplo 7: Navegación
const rutas: Ruta[] = [
  { ruta: "/", titulo: "Inicio" },
  { ruta: "/perfil", titulo: "Perfil", usuarioId: 123 },
  { ruta: "/configuracion", titulo: "Configuración", seccion: "privacidad" },
  { ruta: "404", titulo: "Página no encontrada", rutaOriginal: "/ruta-inexistente" }
];

rutas.forEach(ruta => {
  console.log(renderizarNavegacion(ruta));
});

// Ejemplo 8: Verificación exhaustiva
console.log(procesarFormaExhaustivo(circulo)); // "Círculo con radio 5"
console.log(procesarFormaExhaustivo(cuadrado)); // "Cuadrado con lado 4"
console.log(procesarFormaExhaustivo(rectangulo)); // "Rectángulo 6x3"

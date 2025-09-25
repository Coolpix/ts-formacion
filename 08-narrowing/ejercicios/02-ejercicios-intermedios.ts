/**
 * EJERCICIOS INTERMEDIOS DE NARROWING
 * 
 * Estos ejercicios te ayudarán a practicar conceptos más avanzados de narrowing,
 * incluyendo discriminated unions, type predicates y assertion functions.
 */

// ===== EJERCICIO 1: Discriminated Unions =====

/**
 * EJERCICIO 1.1: Sistema de Notificaciones
 * 
 * Crea una discriminated union para diferentes tipos de notificaciones y
 * una función que las procese según su tipo.
 */

// TODO: Define las interfaces para cada tipo de notificación
interface NotificacionExito {
  tipo: "exito";
  mensaje: string;
  timestamp: number;
}

interface NotificacionError {
  tipo: "error";
  mensaje: string;
  codigo: number;
  detalles?: string;
}

interface NotificacionInfo {
  tipo: "info";
  mensaje: string;
  icono: string;
}

interface NotificacionAdvertencia {
  tipo: "advertencia";
  mensaje: string;
  accionRequerida: boolean;
}

// TODO: Define el tipo union
type Notificacion = NotificacionExito | NotificacionError | NotificacionInfo | NotificacionAdvertencia;

/**
 * TODO: Implementa la función que procese cada tipo de notificación
 * - exito: Retorna "✅ [mensaje] - [timestamp]"
 * - error: Retorna "❌ [mensaje] (Código: [codigo])" + detalles si existen
 * - info: Retorna "ℹ️ [icono] [mensaje]"
 * - advertencia: Retorna "⚠️ [mensaje]" + " - Acción requerida" si es true
 */
function procesarNotificacion(notificacion: Notificacion): string {
  switch (notificacion.tipo) {
    case "exito":
      return `✅ ${notificacion.mensaje} - ${new Date(notificacion.timestamp).toLocaleTimeString()}`;
    case "error":
      const detalles = notificacion.detalles ? ` - ${notificacion.detalles}` : "";
      return `❌ ${notificacion.mensaje} (Código: ${notificacion.codigo})${detalles}`;
    case "info":
      return `ℹ️ ${notificacion.icono} ${notificacion.mensaje}`;
    case "advertencia":
      const accion = notificacion.accionRequerida ? " - Acción requerida" : "";
      return `⚠️ ${notificacion.mensaje}${accion}`;
  }
}

// ===== EJERCICIO 2: Type Predicates =====

/**
 * EJERCICIO 2.1: Validación de Usuario
 * 
 * Crea type predicates para validar diferentes tipos de usuarios.
 */

interface UsuarioBasico {
  id: number;
  nombre: string;
}

interface UsuarioCompleto extends UsuarioBasico {
  email: string;
  telefono: string;
  activo: boolean;
}

interface UsuarioAdmin extends UsuarioCompleto {
  permisos: string[];
  nivel: number;
}

/**
 * TODO: Implementa el type predicate para UsuarioBasico
 */
function esUsuarioBasico(valor: unknown): valor is UsuarioBasico {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "id" in valor &&
    "nombre" in valor &&
    typeof (valor as any).id === "number" &&
    typeof (valor as any).nombre === "string"
  );
}

/**
 * TODO: Implementa el type predicate para UsuarioCompleto
 */
function esUsuarioCompleto(valor: unknown): valor is UsuarioCompleto {
  return (
    esUsuarioBasico(valor) &&
    "email" in valor &&
    "telefono" in valor &&
    "activo" in valor &&
    typeof (valor as any).email === "string" &&
    typeof (valor as any).telefono === "string" &&
    typeof (valor as any).activo === "boolean"
  );
}

/**
 * TODO: Implementa el type predicate para UsuarioAdmin
 */
function esUsuarioAdmin(valor: unknown): valor is UsuarioAdmin {
  return (
    esUsuarioCompleto(valor) &&
    "permisos" in valor &&
    "nivel" in valor &&
    Array.isArray((valor as any).permisos) &&
    typeof (valor as any).nivel === "number"
  );
}

/**
 * TODO: Implementa la función que procese usuarios según su tipo
 */
function procesarUsuario(usuario: unknown): string {
  if (esUsuarioAdmin(usuario)) {
    return `Admin: ${usuario.nombre} (Nivel ${usuario.nivel}) - Permisos: ${usuario.permisos.join(", ")}`;
  } else if (esUsuarioCompleto(usuario)) {
    return `Usuario completo: ${usuario.nombre} (${usuario.email}) - ${usuario.activo ? "Activo" : "Inactivo"}`;
  } else if (esUsuarioBasico(usuario)) {
    return `Usuario básico: ${usuario.nombre} (ID: ${usuario.id})`;
  } else {
    return "Usuario no válido";
  }
}

// ===== EJERCICIO 3: Sistema de Estados =====

/**
 * EJERCICIO 3.1: Estados de Carga con Datos
 * 
 * Crea un sistema de estados que maneje diferentes fases de carga de datos.
 */

// TODO: Define las interfaces para cada estado
interface EstadoInicial {
  estado: "inicial";
}

interface EstadoCargando {
  estado: "cargando";
  progreso: number;
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
  codigo: number;
  reintentos: number;
}

// TODO: Define el tipo union genérico
type EstadoCarga<T> = EstadoInicial | EstadoCargando | EstadoExito<T> | EstadoError;

/**
 * TODO: Implementa la función que renderice cada estado
 */
function renderizarEstado<T>(estado: EstadoCarga<T>): string {
  switch (estado.estado) {
    case "inicial":
      return "Presiona para cargar datos";
    case "cargando":
      return `Cargando: ${estado.mensaje} (${estado.progreso}%)`;
    case "exito":
      return `✅ Datos cargados: ${JSON.stringify(estado.datos)} - ${new Date(estado.timestamp).toLocaleTimeString()}`;
    case "error":
      return `❌ Error (${estado.codigo}): ${estado.error} - Reintentos: ${estado.reintentos}`;
  }
}

// ===== EJERCICIO 4: Assertion Functions =====

/**
 * EJERCICIO 4.1: Validación de Configuración
 * 
 * Crea assertion functions para validar configuraciones de aplicación.
 */

interface ConfiguracionApp {
  nombre: string;
  version: string;
  puerto: number;
  debug: boolean;
  baseDatos: {
    host: string;
    puerto: number;
    nombre: string;
  };
}

/**
 * TODO: Implementa la assertion function para validar ConfiguracionApp
 */
function assertEsConfiguracionApp(valor: unknown): asserts valor is ConfiguracionApp {
  if (typeof valor !== "object" || valor === null) {
    throw new Error("Configuración debe ser un objeto");
  }
  
  const config = valor as any;
  
  if (typeof config.nombre !== "string" || config.nombre.length === 0) {
    throw new Error("Configuración.nombre debe ser un string no vacío");
  }
  
  if (typeof config.version !== "string" || config.version.length === 0) {
    throw new Error("Configuración.version debe ser un string no vacío");
  }
  
  if (typeof config.puerto !== "number" || config.puerto <= 0 || config.puerto > 65535) {
    throw new Error("Configuración.puerto debe ser un número entre 1 y 65535");
  }
  
  if (typeof config.debug !== "boolean") {
    throw new Error("Configuración.debug debe ser boolean");
  }
  
  if (typeof config.baseDatos !== "object" || config.baseDatos === null) {
    throw new Error("Configuración.baseDatos debe ser un objeto");
  }
  
  const db = config.baseDatos;
  
  if (typeof db.host !== "string" || db.host.length === 0) {
    throw new Error("Configuración.baseDatos.host debe ser un string no vacío");
  }
  
  if (typeof db.puerto !== "number" || db.puerto <= 0 || db.puerto > 65535) {
    throw new Error("Configuración.baseDatos.puerto debe ser un número entre 1 y 65535");
  }
  
  if (typeof db.nombre !== "string" || db.nombre.length === 0) {
    throw new Error("Configuración.baseDatos.nombre debe ser un string no vacío");
  }
}

/**
 * TODO: Implementa la función que inicialice la app con validación
 */
function inicializarApp(config: unknown): string {
  try {
    assertEsConfiguracionApp(config);
    // Después de la aserción, TypeScript sabe que config es ConfiguracionApp
    return `App '${config.nombre}' v${config.version} iniciada en puerto ${config.puerto} (Debug: ${config.debug}) - DB: ${config.baseDatos.host}:${config.baseDatos.puerto}/${config.baseDatos.nombre}`;
  } catch (error) {
    return `Error de configuración: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJERCICIO 5: Sistema de Eventos =====

/**
 * EJERCICIO 5.1: Sistema de Eventos del DOM
 * 
 * Crea un sistema que maneje diferentes tipos de eventos del DOM.
 */

// TODO: Define las interfaces para cada tipo de evento
interface EventoClick {
  tipo: "click";
  x: number;
  y: number;
  boton: "izquierdo" | "derecho" | "medio";
  elemento: string;
}

interface EventoTeclado {
  tipo: "keydown" | "keyup";
  tecla: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

interface EventoScroll {
  tipo: "scroll";
  posicionX: number;
  posicionY: number;
  direccion: "arriba" | "abajo" | "izquierda" | "derecha";
}

interface EventoResize {
  tipo: "resize";
  ancho: number;
  alto: number;
  anchoAnterior: number;
  altoAnterior: number;
}

// TODO: Define el tipo union
type EventoDOM = EventoClick | EventoTeclado | EventoScroll | EventoResize;

/**
 * TODO: Implementa la función que maneje cada tipo de evento
 */
function manejarEventoDOM(evento: EventoDOM): string {
  switch (evento.tipo) {
    case "click":
      return `Click ${evento.boton} en ${evento.elemento} en posición (${evento.x}, ${evento.y})`;
    case "keydown":
    case "keyup":
      const modificadores = [];
      if (evento.ctrlKey) modificadores.push("Ctrl");
      if (evento.shiftKey) modificadores.push("Shift");
      if (evento.altKey) modificadores.push("Alt");
      if (evento.metaKey) modificadores.push("Meta");
      const mods = modificadores.length > 0 ? ` + ${modificadores.join("+")}` : "";
      return `Tecla ${evento.tipo}: ${evento.tecla}${mods}`;
    case "scroll":
      return `Scroll hacia ${evento.direccion} - Posición: (${evento.posicionX}, ${evento.posicionY})`;
    case "resize":
      return `Ventana redimensionada: ${evento.anchoAnterior}x${evento.altoAnterior} → ${evento.ancho}x${evento.alto}`;
  }
}

// ===== EJERCICIO 6: Verificación Exhaustiva =====

/**
 * EJERCICIO 6.1: Sistema de Comandos
 * 
 * Crea un sistema de comandos con verificación exhaustiva usando 'never'.
 */

// TODO: Define las interfaces para cada comando
interface ComandoCrear {
  tipo: "crear";
  nombre: string;
  datos: any;
}

interface ComandoActualizar {
  tipo: "actualizar";
  id: number;
  cambios: Record<string, any>;
}

interface ComandoEliminar {
  tipo: "eliminar";
  id: number;
  confirmar: boolean;
}

interface ComandoListar {
  tipo: "listar";
  filtros?: Record<string, any>;
  limite?: number;
}

// TODO: Define el tipo union
type Comando = ComandoCrear | ComandoActualizar | ComandoEliminar | ComandoListar;

/**
 * TODO: Implementa la función que procese cada comando con verificación exhaustiva
 */
function procesarComando(comando: Comando): string {
  switch (comando.tipo) {
    case "crear":
      return `Creando: ${comando.nombre} con datos: ${JSON.stringify(comando.datos)}`;
    case "actualizar":
      return `Actualizando ID ${comando.id} con cambios: ${JSON.stringify(comando.cambios)}`;
    case "eliminar":
      return `Eliminando ID ${comando.id}${comando.confirmar ? " (confirmado)" : " (pendiente confirmación)"}`;
    case "listar":
      const filtros = comando.filtros ? ` con filtros: ${JSON.stringify(comando.filtros)}` : "";
      const limite = comando.limite ? ` (límite: ${comando.limite})` : "";
      return `Listando elementos${filtros}${limite}`;
    default:
      // Verificación exhaustiva con 'never'
      const _exhaustiveCheck: never = comando;
      throw new Error(`Comando no manejado: ${_exhaustiveCheck}`);
  }
}

// ===== EJERCICIOS DE PRUEBA =====

console.log("=== EJERCICIOS INTERMEDIOS DE NARROWING ===");

// Prueba Ejercicio 1.1: Notificaciones
console.log("\n--- Ejercicio 1.1: Sistema de Notificaciones ---");
const notificaciones: Notificacion[] = [
  { tipo: "exito", mensaje: "Datos guardados correctamente", timestamp: Date.now() },
  { tipo: "error", mensaje: "Error de conexión", codigo: 500, detalles: "Timeout después de 30s" },
  { tipo: "info", mensaje: "Nueva actualización disponible", icono: "🔄" },
  { tipo: "advertencia", mensaje: "Espacio en disco bajo", accionRequerida: true }
];

notificaciones.forEach(notif => {
  console.log(procesarNotificacion(notif));
});

// Prueba Ejercicio 2.1: Usuarios
console.log("\n--- Ejercicio 2.1: Sistema de Usuarios ---");
const usuarios: unknown[] = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana", email: "ana@email.com", telefono: "123-456-7890", activo: true },
  { id: 3, nombre: "Admin", email: "admin@email.com", telefono: "098-765-4321", activo: true, permisos: ["read", "write", "delete"], nivel: 5 },
  { id: "4", nombre: "Usuario inválido" }
];

usuarios.forEach(usuario => {
  console.log(procesarUsuario(usuario));
});

// Prueba Ejercicio 3.1: Estados de carga
console.log("\n--- Ejercicio 3.1: Estados de Carga ---");
const estados: EstadoCarga<any>[] = [
  { estado: "inicial" },
  { estado: "cargando", progreso: 75, mensaje: "Descargando archivos" },
  { estado: "exito", datos: { usuarios: 150, productos: 300 }, timestamp: Date.now() },
  { estado: "error", error: "Error de red", codigo: 404, reintentos: 3 }
];

estados.forEach(estado => {
  console.log(renderizarEstado(estado));
});

// Prueba Ejercicio 4.1: Configuración
console.log("\n--- Ejercicio 4.1: Configuración de App ---");
const configuraciones: unknown[] = [
  {
    nombre: "Mi App",
    version: "1.0.0",
    puerto: 3000,
    debug: true,
    baseDatos: {
      host: "localhost",
      puerto: 5432,
      nombre: "mi_db"
    }
  },
  {
    nombre: "",
    version: "1.0.0",
    puerto: 3000,
    debug: true,
    baseDatos: {
      host: "localhost",
      puerto: 5432,
      nombre: "mi_db"
    }
  },
  {
    nombre: "Mi App",
    version: "1.0.0",
    puerto: 70000, // Puerto inválido
    debug: true,
    baseDatos: {
      host: "localhost",
      puerto: 5432,
      nombre: "mi_db"
    }
  }
];

configuraciones.forEach(config => {
  console.log(inicializarApp(config));
});

// Prueba Ejercicio 5.1: Eventos DOM
console.log("\n--- Ejercicio 5.1: Eventos DOM ---");
const eventos: EventoDOM[] = [
  { tipo: "click", x: 100, y: 200, boton: "izquierdo", elemento: "button" },
  { tipo: "keydown", tecla: "Enter", ctrlKey: true, shiftKey: false, altKey: false, metaKey: false },
  { tipo: "scroll", posicionX: 0, posicionY: 150, direccion: "abajo" },
  { tipo: "resize", ancho: 1920, alto: 1080, anchoAnterior: 1366, altoAnterior: 768 }
];

eventos.forEach(evento => {
  console.log(manejarEventoDOM(evento));
});

// Prueba Ejercicio 6.1: Comandos
console.log("\n--- Ejercicio 6.1: Sistema de Comandos ---");
const comandos: Comando[] = [
  { tipo: "crear", nombre: "Usuario", datos: { nombre: "Juan", email: "juan@email.com" } },
  { tipo: "actualizar", id: 123, cambios: { nombre: "Juan Carlos" } },
  { tipo: "eliminar", id: 456, confirmar: true },
  { tipo: "listar", filtros: { activo: true }, limite: 10 }
];

comandos.forEach(comando => {
  console.log(procesarComando(comando));
});

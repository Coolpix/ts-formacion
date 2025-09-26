// ========================================
// EJEMPLOS - TYPE ALIASES EN TYPESCRIPT
// ========================================

// 1. ALIASES BÁSICOS PARA TIPOS PRIMITIVOS
// ========================================

// Alias para tipos primitivos
type IDs = string;
type Edad = number;
type Activo = boolean;

// Uso de los aliases
let usuarioId: IDs = "user123";
let edadUsuario: Edad = 25;
let usuarioActivo: Activo = true;

console.log("=== ALIASES BÁSICOS ===");
console.log("Usuario ID:", usuarioId);
console.log("Edad:", edadUsuario);
console.log("Activo:", usuarioActivo);

// 2. ALIASES PARA UNION TYPES
// ========================================

// Union type simple
type Estado = "pendiente" | "procesando" | "completado" | "error";

// Union type con tipos primitivos
type Identificador = string | number;
type Valor = string | number | boolean;

// Uso
let estadoActual: Estado = "pendiente";
let identificador: Identificador = "abc123";
identificador = 456; // También válido

console.log("\n=== ALIASES PARA UNION TYPES ===");
console.log("Estado actual:", estadoActual);
console.log("Identificador:", identificador);

// 3. ALIASES PARA TIPOS DE FUNCIÓN
// ========================================

// Alias para función simple
type EventHandler = (event: Event) => void;

// Alias para función con parámetros y retorno
type Comparador<T> = (a: T, b: T) => number;
type Transformador<T, U> = (valor: T) => U;

// Uso
let manejadorClick: EventHandler = (event) => {
    console.log("Click detectado");
};

let compararNumeros: Comparador<number> = (a, b) => a - b;
let convertirAString: Transformador<number, string> = (num) => num.toString();

console.log("\n=== ALIASES PARA TIPOS DE FUNCIÓN ===");
console.log("Comparar 5 y 3:", compararNumeros(5, 3));
console.log("Convertir 42 a string:", convertirAString(42));

// 4. ALIASES PARA TIPOS DE OBJETO
// ========================================

// Alias para objeto simple
type Coordenada = {
    x: number;
    y: number;
};

// Alias para objeto complejo
type Usuario = {
    id: string;
    nombre: string;
    email: string;
    activo: boolean;
    coordenadas?: Coordenada;
};

// Uso
let punto: Coordenada = { x: 10, y: 20 };
let usuario: Usuario = {
    id: "user1",
    nombre: "Juan",
    email: "juan@email.com",
    activo: true,
    coordenadas: punto
};

console.log("\n=== ALIASES PARA TIPOS DE OBJETO ===");
console.log("Punto:", punto);
console.log("Usuario:", usuario);

// 5. ALIASES CON GENERICS
// ========================================

// Alias genérico simple
type Contenedor<T> = {
    valor: T;
    timestamp: Date;
};

// Alias genérico con múltiples parámetros
type Par<T, U> = {
    primero: T;
    segundo: U;
};

// Alias genérico con restricciones
type ClaveValor<K extends string, V> = {
    [key in K]: V;
};

// Uso
let contenedorString: Contenedor<string> = {
    valor: "Hola",
    timestamp: new Date()
};

let par: Par<string, number> = {
    primero: "edad",
    segundo: 25
};

let configuracion: ClaveValor<"servidor" | "puerto", string | number> = {
    servidor: "localhost",
    puerto: 3000
};

console.log("\n=== ALIASES CON GENERICS ===");
console.log("Contenedor string:", contenedorString);
console.log("Par:", par);
console.log("Configuración:", configuracion);

// 6. ALIASES PARA TIPOS COMPLEJOS
// ========================================

// Alias para array
type ListaNumeros = number[];
type ListaStrings = string[];

// Alias para array con generics
type Lista<T> = T[];

// Alias para función que retorna array
type GeneradorArray<T> = (cantidad: number) => T[];

// Uso
let numeros: ListaNumeros = [1, 2, 3, 4, 5];
let strings: ListaStrings = ["a", "b", "c"];
let generico: Lista<string> = ["x", "y", "z"];

let generador: GeneradorArray<number> = (cantidad) => 
    Array.from({ length: cantidad }, (_, i) => i + 1);

console.log("\n=== ALIASES PARA TIPOS COMPLEJOS ===");
console.log("Números:", numeros);
console.log("Strings:", strings);
console.log("Genérico:", generico);
console.log("Generador(5):", generador(5));

// 7. ALIASES PARA TIPOS DE CONFIGURACIÓN
// ========================================

// Alias para configuración de base de datos
type ConfigDB = {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    ssl: boolean;
};

// Alias para configuración de aplicación
type ConfigApp = {
    nombre: string;
    version: string;
    entorno: "desarrollo" | "produccion" | "testing";
    debug: boolean;
    baseDeDatos: ConfigDB;
};

// Uso
let config: ConfigApp = {
    nombre: "Mi App",
    version: "1.0.0",
    entorno: "desarrollo",
    debug: true,
    baseDeDatos: {
        host: "localhost",
        port: 5432,
        database: "miapp",
        username: "admin",
        password: "secret",
        ssl: false
    }
};

console.log("\n=== ALIASES PARA TIPOS DE CONFIGURACIÓN ===");
console.log("Configuración:", config);

// 9. ALIASES PARA TIPOS DE EVENTOS
// ========================================

// Alias para eventos del DOM
type EventoClick = {
    tipo: "click";
    x: number;
    y: number;
    boton: number;
};

type EventoTeclado = {
    tipo: "keydown" | "keyup";
    tecla: string;
    codigo: string;
    ctrlKey: boolean;
    shiftKey: boolean;
};

type EventoScroll = {
    tipo: "scroll";
    posicionX: number;
    posicionY: number;
};

// Union type para todos los eventos
type Evento = EventoClick | EventoTeclado | EventoScroll;

// Función para manejar eventos
function manejarEvento(evento: Evento): void {
    switch (evento.tipo) {
        case "click":
            console.log(`Click en (${evento.x}, ${evento.y})`);
            break;
        case "keydown":
        case "keyup":
            console.log(`Tecla ${evento.tecla} ${evento.tipo}`);
            break;
        case "scroll":
            console.log(`Scroll a (${evento.posicionX}, ${evento.posicionY})`);
            break;
    }
}

console.log("\n=== ALIASES PARA TIPOS DE EVENTOS ===");
let eventoClick: Evento = { tipo: "click", x: 100, y: 200, boton: 1 };
let eventoTeclado: Evento = { 
    tipo: "keydown", 
    tecla: "Enter", 
    codigo: "Enter", 
    ctrlKey: false, 
    shiftKey: false 
};
let eventoScroll: Evento = { tipo: "scroll", posicionX: 0, posicionY: 100 };

manejarEvento(eventoClick);
manejarEvento(eventoTeclado);
manejarEvento(eventoScroll);

// 10. ALIASES PARA TIPOS DE UTILIDAD
// ========================================

// Alias para tipos opcionales
type Opcional<T> = T | undefined;
type Nullable<T> = T | null;

// Alias para tipos de solo lectura
type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

// Alias para tipos parciales
type Parcial<T> = {
    [K in keyof T]?: T[K];
};

// Alias para tipos requeridos
type Requerido<T> = {
    [K in keyof T]-?: T[K];
};

// Uso
interface UsuarioBase {
    id: string;
    nombre: string;
    email?: string;
}

let usuarioOpcional: Opcional<UsuarioBase> = undefined;
let usuarioNulo: Nullable<UsuarioBase> = null;
let usuarioSoloLectura: SoloLectura<UsuarioBase> = {
    id: "1",
    nombre: "Juan"
};
// usuarioSoloLectura.id = "2"; // ❌ Error: solo lectura

let usuarioParcial: Parcial<UsuarioBase> = { nombre: "Ana" };
let usuarioRequerido: Requerido<UsuarioBase> = {
    id: "1",
    nombre: "Luis",
    email: "luis@email.com" // email es requerido
};

console.log("\n=== ALIASES PARA TIPOS DE UTILIDAD ===");
console.log("Usuario opcional:", usuarioOpcional);
console.log("Usuario nulo:", usuarioNulo);
console.log("Usuario solo lectura:", usuarioSoloLectura);
console.log("Usuario parcial:", usuarioParcial);
console.log("Usuario requerido:", usuarioRequerido);

// 11. ALIASES PARA TIPOS DE VALIDACIÓN
// ========================================

// Alias para validadores
type Validador<T> = (valor: T) => boolean;
type Transformador2<T, U> = (valor: T) => U;

// Alias para reglas de validación
type ReglaValidacion<T> = {
    campo: keyof T;
    validador: Validador<T[keyof T]>;
    mensaje: string;
};

// Uso
let validadorEmail: Validador<string> = (email) => 
    email.includes("@") && email.includes(".");

let transformadorMayusculas: Transformador2<string, string> = (texto) => 
    texto.toUpperCase();

let reglaEmail: ReglaValidacion<UsuarioBase> = {
    campo: "email",
    validador: validadorEmail,
    mensaje: "Email inválido"
};

console.log("\n=== ALIASES PARA TIPOS DE VALIDACIÓN ===");
console.log("¿Email válido?", validadorEmail("test@email.com"));
console.log("Transformar a mayúsculas:", transformadorMayusculas("hola mundo"));
console.log("Regla de validación:", reglaEmail);

// 12. EJEMPLOS PRÁCTICOS
// ========================================

// Sistema de autenticación
type Token = string;
type RefreshToken = string;
type UsuarioID = string;

type Credenciales = {
    email: string;
    password: string;
};

type Sesion = {
    token: Token;
    refreshToken: RefreshToken;
    usuarioId: UsuarioID;
    expiraEn: Date;
};

type ResultadoAuth = 
    | { exito: true; sesion: Sesion }
    | { exito: false; error: string };

// Sistema de notificaciones
type TipoNotificacion = "info" | "warning" | "error" | "success";
type Prioridad = "baja" | "media" | "alta";

type Notificacion = {
    id: string;
    tipo: TipoNotificacion;
    titulo: string;
    mensaje: string;
    prioridad: Prioridad;
    timestamp: Date;
    leida: boolean;
};

type FiltroNotificaciones = {
    tipo?: TipoNotificacion;
    prioridad?: Prioridad;
    leida?: boolean;
};

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Crear notificación
let notificacion: Notificacion = {
    id: "notif1",
    tipo: "info",
    titulo: "Bienvenido",
    mensaje: "Has iniciado sesión correctamente",
    prioridad: "media",
    timestamp: new Date(),
    leida: false
};

console.log("Notificación:", notificacion);

// Filtro de notificaciones
let filtro: FiltroNotificaciones = {
    tipo: "info",
    leida: false
};

console.log("Filtro:", filtro);

// 13. ALIASES PARA TIPOS DE BASE DE DATOS
// ========================================

type ID = string | number;
type Timestamp = Date;

type EntidadBase = {
    id: ID;
    createdAt: Timestamp;
    updatedAt: Timestamp;
};

type UsuarioDB = EntidadBase & {
    nombre: string;
    email: string;
    activo: boolean;
};

type ProductoDB = EntidadBase & {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;
};

type OrdenDB = EntidadBase & {
    usuarioId: ID;
    productos: Array<{
        productoId: ID;
        cantidad: number;
        precio: number;
    }>;
    total: number;
    estado: "pendiente" | "procesando" | "enviado" | "entregado";
};

console.log("\n=== ALIASES PARA TIPOS DE BASE DE DATOS ===");
let usuarioDB: UsuarioDB = {
    id: "user1",
    nombre: "Ana García",
    email: "ana@email.com",
    activo: true,
    createdAt: new Date(),
    updatedAt: new Date()
};

let productoDB: ProductoDB = {
    id: "prod1",
    nombre: "Laptop",
    precio: 999.99,
    categoria: "Electrónicos",
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date()
};

console.log("Usuario DB:", usuarioDB);
console.log("Producto DB:", productoDB);

// 14. ALIASES PARA TIPOS DE FORMULARIOS
// ========================================

type CampoFormulario = 
    | { tipo: "texto"; valor: string; placeholder?: string }
    | { tipo: "numero"; valor: number; min?: number; max?: number }
    | { tipo: "email"; valor: string }
    | { tipo: "password"; valor: string }
    | { tipo: "checkbox"; valor: boolean; etiqueta: string }
    | { tipo: "select"; valor: string; opciones: string[] };

type Formulario = {
    nombre: string;
    campos: CampoFormulario[];
    valido: boolean;
};

console.log("\n=== ALIASES PARA TIPOS DE FORMULARIOS ===");
let formulario: Formulario = {
    nombre: "Registro de Usuario",
    campos: [
        { tipo: "texto", valor: "", placeholder: "Nombre completo" },
        { tipo: "email", valor: "" },
        { tipo: "password", valor: "" },
        { tipo: "checkbox", valor: false, etiqueta: "Acepto términos y condiciones" }
    ],
    valido: false
};

console.log("Formulario:", formulario);

// 15. ALIASES PARA TIPOS DE ESTADO
// ========================================

type EstadoCarga = "inicial" | "cargando" | "exitoso" | "error";
type EstadoFormulario = "edicion" | "validacion" | "envio" | "exitoso" | "error";

type EstadoAplicacion = {
    carga: EstadoCarga;
    formulario: EstadoFormulario;
    usuario: UsuarioDB | null;
    notificaciones: Notificacion[];
};

console.log("\n=== ALIASES PARA TIPOS DE ESTADO ===");
let estadoApp: EstadoAplicacion = {
    carga: "inicial",
    formulario: "edicion",
    usuario: null,
    notificaciones: []
};

console.log("Estado de aplicación:", estadoApp);

console.log("\n=== FIN DE EJEMPLOS DE TYPE ALIASES ===");

// ========================================
// EJEMPLOS - LITERAL TYPES EN TYPESCRIPT
// ========================================

// 1. TIPOS LITERALES BÁSICOS
// ========================================

// String Literals
let color: "rojo" = "rojo";
// color = "azul"; // ❌ Error: no es "rojo"

// Variable que puede ser uno de varios valores
let estado: "pendiente" | "procesando" | "completado" = "pendiente";

// Number Literals
let numero: 42 = 42;
// numero = 43; // ❌ Error: no es 42

// Variable que puede ser uno de varios números
let codigo: 200 | 404 | 500 = 200;

// Boolean Literals
let activo: true = true;
// activo = false; // ❌ Error: no es true

// Variable que puede ser true o false
let visible: true | false = true;

console.log("=== TIPOS LITERALES BÁSICOS ===");
console.log("Color:", color);
console.log("Estado:", estado);
console.log("Número:", numero);
console.log("Código:", codigo);
console.log("Activo:", activo);
console.log("Visible:", visible);

// 2. UNION TYPES CON LITERAL TYPES
// ========================================

// Union de string literals
type Color = "rojo" | "verde" | "azul";
type Tamaño = "pequeño" | "mediano" | "grande";

let color: Color = "rojo";
let tamaño: Tamaño = "mediano";

// Union de number literals
type CodigoHTTP = 200 | 201 | 400 | 401 | 404 | 500;
let codigo: CodigoHTTP = 200;

// Union mixta
type Valor = "texto" | 42 | true;
let valor: Valor = "texto";

console.log("\n=== UNION TYPES CON LITERAL TYPES ===");
console.log("Color:", color);
console.log("Tamaño:", tamaño);
console.log("Código HTTP:", codigo);
console.log("Valor:", valor);

// 3. LITERAL TYPES EN FUNCIONES
// ========================================

// Parámetros con literal types
function cambiarColor(color: "rojo" | "verde" | "azul"): void {
    console.log(`Color cambiado a: ${color}`);
}

// Retorno con literal types
function obtenerEstado(): "activo" | "inactivo" {
    return Math.random() > 0.5 ? "activo" : "inactivo";
}

// Función con múltiples parámetros literales
function configurar(
    modo: "desarrollo" | "produccion",
    nivel: "debug" | "info" | "warn" | "error"
): void {
    console.log(`Modo: ${modo}, Nivel: ${nivel}`);
}

console.log("\n=== LITERAL TYPES EN FUNCIONES ===");
cambiarColor("rojo");
cambiarColor("verde");
console.log("Estado obtenido:", obtenerEstado());
configurar("desarrollo", "debug");

// 4. LITERAL TYPES EN INTERFACES
// ========================================

interface Configuracion {
    entorno: "desarrollo" | "produccion" | "testing";
    nivel: "debug" | "info" | "warn" | "error";
    ssl: true | false;
}

let config: Configuracion = {
    entorno: "desarrollo",
    nivel: "debug",
    ssl: false
};

console.log("\n=== LITERAL TYPES EN INTERFACES ===");
console.log("Configuración:", config);

// 5. LITERAL TYPES CON CONST ASSERTIONS
// ========================================

// Sin const assertion
let colores = ["rojo", "verde", "azul"];
// colores es de tipo string[]

// Con const assertion
let coloresConst = ["rojo", "verde", "azul"] as const;
// coloresConst es de tipo readonly ["rojo", "verde", "azul"]

// Objeto con const assertion
let configConst = {
    servidor: "localhost",
    puerto: 3000,
    ssl: false
} as const;
// configConst es de tipo { readonly servidor: "localhost"; readonly puerto: 3000; readonly ssl: false; }

console.log("\n=== LITERAL TYPES CON CONST ASSERTIONS ===");
console.log("Colores:", colores);
console.log("Colores const:", coloresConst);
console.log("Config const:", configConst);

// 6. TEMPLATE LITERAL TYPES
// ========================================

// Template literal types básicos
type Evento = `on${string}`;
let evento: Evento = "onClick"; // ✅ Válido
let evento2: Evento = "onMouseOver"; // ✅ Válido

// Template literal types más específicos
type EventoMouse = `onMouse${"Down" | "Up" | "Move"}`;
let eventoMouse: EventoMouse = "onMouseDown"; // ✅ Válido
// let eventoMouse2: EventoMouse = "onClick"; // ❌ Error

// Template literal types con union types
type CSSProperty = `margin${"Top" | "Right" | "Bottom" | "Left"}`;
let cssProp: CSSProperty = "marginTop"; // ✅ Válido

console.log("\n=== TEMPLATE LITERAL TYPES ===");
console.log("Evento:", evento);
console.log("Evento 2:", evento2);
console.log("Evento mouse:", eventoMouse);
console.log("CSS property:", cssProp);

// 7. LITERAL TYPES EN CLASES
// ========================================

class Estado {
    private estado: "inicial" | "cargando" | "exitoso" | "error" = "inicial";
    
    cambiarEstado(nuevoEstado: "inicial" | "cargando" | "exitoso" | "error"): void {
        this.estado = nuevoEstado;
    }
    
    obtenerEstado(): "inicial" | "cargando" | "exitoso" | "error" {
        return this.estado;
    }
}

let estado = new Estado();
console.log("\n=== LITERAL TYPES EN CLASES ===");
console.log("Estado inicial:", estado.obtenerEstado());
estado.cambiarEstado("cargando");
console.log("Estado después de cambiar:", estado.obtenerEstado());

// 8. LITERAL TYPES EN ENUMS
// ========================================

// Enum con string literals
enum Color {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

// Enum con number literals
enum Codigo {
    Exito = 200,
    NoEncontrado = 404,
    ErrorServidor = 500
}

// Uso
let color: Color = Color.Rojo;
let codigo: Codigo = Codigo.Exito;

console.log("\n=== LITERAL TYPES EN ENUMS ===");
console.log("Color enum:", color);
console.log("Código enum:", codigo);

// 9. LITERAL TYPES CON GENERICS
// ========================================

// Función genérica con literal types
function crearEvento<T extends string>(tipo: T): `on${T}` {
    return `on${tipo}` as `on${T}`;
}

// Uso
let eventoClick = crearEvento("Click"); // Tipo: "onClick"
let eventoHover = crearEvento("Hover"); // Tipo: "onHover"

// Función genérica con múltiples literal types
function combinar<T extends string, U extends string>(a: T, b: U): `${T}${U}` {
    return `${a}${b}` as `${T}${U}`;
}

// Uso
let combinado = combinar("on", "Click"); // Tipo: "onClick"

console.log("\n=== LITERAL TYPES CON GENERICS ===");
console.log("Evento click:", eventoClick);
console.log("Evento hover:", eventoHover);
console.log("Combinado:", combinado);

// 10. LITERAL TYPES EN APIs
// ========================================

// API response con literal types
interface ApiResponse<T> {
    success: true;
    data: T;
    message?: string;
}

interface ApiError {
    success: false;
    error: string;
    code: 400 | 401 | 404 | 500;
}

type ApiResult<T> = ApiResponse<T> | ApiError;

// Función que usa literal types
async function simularFetchData(): Promise<ApiResult<{ usuarios: string[] }>> {
    // Simular llamada a API
    const exito = Math.random() > 0.3;
    
    if (exito) {
        return {
            success: true,
            data: { usuarios: ["Ana", "Luis"] },
            message: "Datos obtenidos correctamente"
        };
    } else {
        return {
            success: false,
            error: "Error al obtener datos",
            code: 500
        };
    }
}

console.log("\n=== LITERAL TYPES EN APIs ===");
simularFetchData().then(resultado => {
    if (resultado.success) {
        console.log("API Response éxito:", resultado.data);
    } else {
        console.log("API Response error:", resultado.error, "Código:", resultado.code);
    }
});

// 11. LITERAL TYPES EN FORMULARIOS
// ========================================

// Tipos para campos de formulario
type TipoCampo = "texto" | "numero" | "email" | "password" | "checkbox" | "select";
type Validacion = "requerido" | "opcional" | "condicional";

interface CampoFormulario {
    tipo: TipoCampo;
    nombre: string;
    validacion: Validacion;
    valor?: string | number | boolean;
}

// Función para crear campos
function crearCampo(
    tipo: TipoCampo,
    nombre: string,
    validacion: Validacion = "opcional"
): CampoFormulario {
    return {
        tipo,
        nombre,
        validacion
    };
}

// Uso
let campoNombre = crearCampo("texto", "nombre", "requerido");
let campoEmail = crearCampo("email", "email", "requerido");
let campoEdad = crearCampo("numero", "edad", "opcional");

console.log("\n=== LITERAL TYPES EN FORMULARIOS ===");
console.log("Campo nombre:", campoNombre);
console.log("Campo email:", campoEmail);
console.log("Campo edad:", campoEdad);

// 12. LITERAL TYPES EN EVENTOS
// ========================================

// Tipos para eventos del sistema
type TipoEvento = "usuario_creado" | "usuario_actualizado" | "usuario_eliminado";
type NivelEvento = "info" | "warning" | "error" | "success";

interface Evento {
    tipo: TipoEvento;
    nivel: NivelEvento;
    timestamp: Date;
    datos: any;
}

// Función para crear eventos
function crearEvento(
    tipo: TipoEvento,
    nivel: NivelEvento,
    datos: any
): Evento {
    return {
        tipo,
        nivel,
        timestamp: new Date(),
        datos
    };
}

// Uso
let evento = crearEvento("usuario_creado", "info", { id: 1, nombre: "Juan" });

console.log("\n=== LITERAL TYPES EN EVENTOS ===");
console.log("Evento creado:", evento);

// 13. LITERAL TYPES EN CONFIGURACIÓN
// ========================================

// Tipos para configuración de aplicación
type Entorno = "desarrollo" | "produccion" | "testing";
type NivelLog = "debug" | "info" | "warn" | "error";
type TipoBaseDatos = "mysql" | "postgresql" | "mongodb";

interface Configuracion {
    entorno: Entorno;
    nivelLog: NivelLog;
    baseDatos: {
        tipo: TipoBaseDatos;
        host: string;
        puerto: number;
    };
    ssl: true | false;
}

// Función para validar configuración
function validarConfiguracion(config: any): config is Configuracion {
    return (
        config &&
        typeof config.entorno === 'string' &&
        ["desarrollo", "produccion", "testing"].includes(config.entorno) &&
        typeof config.nivelLog === 'string' &&
        ["debug", "info", "warn", "error"].includes(config.nivelLog)
    );
}

let config: Configuracion = {
    entorno: "desarrollo",
    nivelLog: "debug",
    baseDatos: {
        tipo: "postgresql",
        host: "localhost",
        puerto: 5432
    },
    ssl: false
};

console.log("\n=== LITERAL TYPES EN CONFIGURACIÓN ===");
console.log("Configuración:", config);
console.log("¿Configuración válida?", validarConfiguracion(config));

// 14. SISTEMA DE NOTIFICACIONES
// ========================================

type TipoNotificacion = "info" | "warning" | "error" | "success";
type Prioridad = "baja" | "media" | "alta";

interface Notificacion {
    id: string;
    tipo: TipoNotificacion;
    prioridad: Prioridad;
    titulo: string;
    mensaje: string;
    timestamp: Date;
}

class SistemaNotificaciones {
    private notificaciones: Notificacion[] = [];
    
    agregar(
        tipo: TipoNotificacion,
        prioridad: Prioridad,
        titulo: string,
        mensaje: string
    ): void {
        const notificacion: Notificacion = {
            id: Math.random().toString(36).substr(2, 9),
            tipo,
            prioridad,
            titulo,
            mensaje,
            timestamp: new Date()
        };
        
        this.notificaciones.push(notificacion);
    }
    
    obtenerPorTipo(tipo: TipoNotificacion): Notificacion[] {
        return this.notificaciones.filter(n => n.tipo === tipo);
    }
    
    obtenerPorPrioridad(prioridad: Prioridad): Notificacion[] {
        return this.notificaciones.filter(n => n.prioridad === prioridad);
    }
    
    obtenerTodas(): Notificacion[] {
        return this.notificaciones;
    }
}

console.log("\n=== SISTEMA DE NOTIFICACIONES ===");
let sistema = new SistemaNotificaciones();
sistema.agregar("info", "media", "Bienvenido", "Has iniciado sesión correctamente");
sistema.agregar("warning", "alta", "Memoria baja", "El sistema está usando mucha memoria");
sistema.agregar("error", "alta", "Error de conexión", "No se pudo conectar con el servidor");
sistema.agregar("success", "baja", "Operación exitosa", "Los datos se guardaron correctamente");

console.log("Todas las notificaciones:", sistema.obtenerTodas());
console.log("Notificaciones de error:", sistema.obtenerPorTipo("error"));
console.log("Notificaciones de alta prioridad:", sistema.obtenerPorPrioridad("alta"));

// 15. SISTEMA DE ESTADOS
// ========================================

type EstadoTarea = "pendiente" | "en_proceso" | "completada" | "cancelada";
type PrioridadTarea = "baja" | "media" | "alta" | "critica";

interface Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
    prioridad: PrioridadTarea;
    fechaCreacion: Date;
    fechaCompletada?: Date;
}

class GestorTareas {
    private tareas: Tarea[] = [];
    
    crearTarea(
        titulo: string,
        descripcion: string,
        prioridad: PrioridadTarea = "media"
    ): Tarea {
        const tarea: Tarea = {
            id: Math.random().toString(36).substr(2, 9),
            titulo,
            descripcion,
            estado: "pendiente",
            prioridad,
            fechaCreacion: new Date()
        };
        
        this.tareas.push(tarea);
        return tarea;
    }
    
    cambiarEstado(id: string, nuevoEstado: EstadoTarea): boolean {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.estado = nuevoEstado;
            if (nuevoEstado === "completada") {
                tarea.fechaCompletada = new Date();
            }
            return true;
        }
        return false;
    }
    
    obtenerPorEstado(estado: EstadoTarea): Tarea[] {
        return this.tareas.filter(t => t.estado === estado);
    }
    
    obtenerPorPrioridad(prioridad: PrioridadTarea): Tarea[] {
        return this.tareas.filter(t => t.prioridad === prioridad);
    }
}

console.log("\n=== SISTEMA DE ESTADOS ===");
let gestor = new GestorTareas();
let tarea1 = gestor.crearTarea("Implementar login", "Crear sistema de autenticación", "alta");
let tarea2 = gestor.crearTarea("Diseñar UI", "Crear interfaz de usuario", "media");
let tarea3 = gestor.crearTarea("Escribir tests", "Crear pruebas unitarias", "baja");

console.log("Tarea creada:", tarea1);
gestor.cambiarEstado(tarea1.id, "en_proceso");
console.log("Tareas en proceso:", gestor.obtenerPorEstado("en_proceso"));
console.log("Tareas de alta prioridad:", gestor.obtenerPorPrioridad("alta"));

console.log("\n=== FIN DE EJEMPLOS DE LITERAL TYPES ===");

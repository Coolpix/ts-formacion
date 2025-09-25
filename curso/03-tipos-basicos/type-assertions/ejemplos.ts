// ========================================
// EJEMPLOS - TYPE ASSERTIONS EN TYPESCRIPT
// ========================================

// 1. SINTAXIS BÁSICA
// ========================================

// Sintaxis con 'as'
let valor: any = "Hola mundo";
let longitud: number = (valor as string).length;

// Sintaxis con '<>' (solo en archivos .tsx)
let valor2: any = "Hola mundo";
let longitud2: number = (<string>valor2).length;

console.log("=== SINTAXIS BÁSICA ===");
console.log("Longitud con 'as':", longitud);
console.log("Longitud con '<>':", longitud2);

// 2. TRABAJO CON DOM
// ========================================

// Obtener elemento del DOM
let elemento = document.getElementById("miElemento");
// elemento.innerHTML = "Hola"; // ❌ Error: elemento puede ser null

// Con type assertion
let elementoTipado = document.getElementById("miElemento") as HTMLElement;
// elementoTipado.innerHTML = "Hola"; // ✅ Funciona (si el elemento existe)

// O más específico
let input = document.getElementById("miInput") as HTMLInputElement;
// let valor = input.value; // ✅ Funciona (si el elemento existe)

console.log("\n=== TRABAJO CON DOM ===");
console.log("Elemento tipado:", elementoTipado);
console.log("Input tipado:", input);

// 3. TRABAJO CON APIs EXTERNAS
// ========================================

// Respuesta de API sin tipos definidos
let respuesta: any = {
    usuarios: [
        { id: 1, nombre: "Ana", email: "ana@email.com" },
        { id: 2, nombre: "Luis", email: "luis@email.com" }
    ],
    total: 2
};

// Con type assertion
interface DatosAPI {
    usuarios: Array<{
        id: number;
        nombre: string;
        email: string;
    }>;
    total: number;
}

let datos: DatosAPI = respuesta as DatosAPI;
console.log("\n=== TRABAJO CON APIs EXTERNAS ===");
console.log("Datos API:", datos);
console.log("Número de usuarios:", datos.usuarios.length);

// 4. TRABAJO CON LIBRERÍAS DE TERCEROS
// ========================================

// Librería sin tipos definidos
let libreria: any = {
    metodo1: () => "resultado del método 1",
    metodo2: (param: number) => param > 0
};

// Con type assertion
interface LibreriaAPI {
    metodo1(): string;
    metodo2(param: number): boolean;
}

let libreriaTipada: LibreriaAPI = libreria as LibreriaAPI;
let resultado = libreriaTipada.metodo1();
let esPositivo = libreriaTipada.metodo2(5);

console.log("\n=== TRABAJO CON LIBRERÍAS DE TERCEROS ===");
console.log("Resultado método 1:", resultado);
console.log("¿5 es positivo?", esPositivo);

// 5. TYPE ASSERTIONS CON UNION TYPES
// ========================================

// Union type
let valor: string | number = "123";

// Assertion a string
let longitud: number = (valor as string).length;

// Assertion a number
let numero: number = (valor as number) + 10;

console.log("\n=== TYPE ASSERTIONS CON UNION TYPES ===");
console.log("Valor original:", valor);
console.log("Longitud (como string):", longitud);
console.log("Número + 10 (como number):", numero);

// 6. TYPE ASSERTIONS CON GENERICS
// ========================================

// Función genérica
function obtenerPrimero<T>(array: any[]): T {
    return array[0] as T;
}

// Uso
let numeros = [1, 2, 3, 4, 5];
let primerNumero: number = obtenerPrimero<number>(numeros);

let strings = ["a", "b", "c"];
let primerString: string = obtenerPrimero<string>(strings);

console.log("\n=== TYPE ASSERTIONS CON GENERICS ===");
console.log("Primer número:", primerNumero);
console.log("Primer string:", primerString);

// 7. TYPE ASSERTIONS CON INTERFACES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Datos sin tipo
let datos: any = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

// Con type assertion
let usuario: Usuario = datos as Usuario;
console.log("\n=== TYPE ASSERTIONS CON INTERFACES ===");
console.log("Usuario:", usuario);
console.log("Nombre del usuario:", usuario.nombre);

// 8. TYPE ASSERTIONS CON ARRAYS
// ========================================

// Array sin tipo
let array: any[] = [1, 2, 3, 4, 5];

// Con type assertion
let numeros: number[] = array as number[];
let suma: number = numeros.reduce((a, b) => a + b, 0);

// O más específico
let numerosEspecificos: [number, number, number] = array as [number, number, number];

console.log("\n=== TYPE ASSERTIONS CON ARRAYS ===");
console.log("Array original:", array);
console.log("Números:", numeros);
console.log("Suma:", suma);
console.log("Números específicos:", numerosEspecificos);

// 9. TYPE ASSERTIONS CON FUNCIONES
// ========================================

// Función sin tipo
let funcion: any = (a: number, b: number) => a + b;

// Con type assertion
let sumar: (a: number, b: number) => number = funcion as (a: number, b: number) => number;
let resultado: number = sumar(5, 3);

console.log("\n=== TYPE ASSERTIONS CON FUNCIONES ===");
console.log("Resultado de sumar:", resultado);

// 10. TYPE ASSERTIONS CON CLASES
// ========================================

class Usuario {
    constructor(public nombre: string, public email: string) {}
    
    obtenerInfo(): string {
        return `${this.nombre} (${this.email})`;
    }
}

// Objeto sin tipo
let objeto: any = {
    nombre: "Ana",
    email: "ana@email.com"
};

// Con type assertion
let usuario: Usuario = objeto as Usuario;
console.log("\n=== TYPE ASSERTIONS CON CLASES ===");
console.log("Usuario:", usuario);
console.log("Nombre:", usuario.nombre);
// usuario.obtenerInfo(); // ❌ Error en runtime: no tiene el método

// 11. TYPE ASSERTIONS CON UNKNOWN
// ========================================

// unknown es más seguro que any
let valor: unknown = "Hola mundo";

// Con type assertion
let texto: string = valor as string;
let longitud: number = texto.length;

// O con verificación previa
if (typeof valor === 'string') {
    let longitudSegura: number = valor.length; // ✅ Seguro
    console.log("Longitud segura:", longitudSegura);
}

console.log("\n=== TYPE ASSERTIONS CON UNKNOWN ===");
console.log("Texto:", texto);
console.log("Longitud:", longitud);

// 12. TYPE ASSERTIONS CON CONST
// ========================================

// Const assertion
let config = {
    servidor: "localhost",
    puerto: 3000
} as const;

// Ahora es readonly
// config.servidor = "otro"; // ❌ Error

// O con type assertion
let config2 = {
    servidor: "localhost",
    puerto: 3000
} as {
    readonly servidor: "localhost";
    readonly puerto: 3000;
};

console.log("\n=== TYPE ASSERTIONS CON CONST ===");
console.log("Config:", config);
console.log("Config2:", config2);

// 13. TYPE ASSERTIONS CON NEVER
// ========================================

// Función que nunca retorna
function errorFatal(): never {
    throw new Error("Error crítico");
}

// Con type assertion
// let resultado: never = errorFatal() as never;
// ⚠️ Cuidado: esto nunca se ejecutará

console.log("\n=== TYPE ASSERTIONS CON NEVER ===");
console.log("Función errorFatal definida");

// 14. TYPE ASSERTIONS CON VOID
// ========================================

// Función que no retorna nada
function mostrarMensaje(): void {
    console.log("Hola");
}

// Con type assertion
let resultado: void = mostrarMensaje() as void;

console.log("\n=== TYPE ASSERTIONS CON VOID ===");
console.log("Resultado void:", resultado);

// 15. CASOS DE USO ESPECÍFICOS
// ========================================

// Trabajo con Web APIs
// Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        let coords = position.coords as GeolocationCoordinates;
        console.log("Latitud:", coords.latitude);
        console.log("Longitud:", coords.longitude);
    });
}

// Trabajo con Canvas
let canvas = document.getElementById("miCanvas") as HTMLCanvasElement;
if (canvas) {
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (ctx) {
        ctx.fillRect(0, 0, 100, 100);
    }
}

// Trabajo con Web Workers
let worker = new Worker("worker.js") as Worker;
worker.postMessage({ tipo: "calcular", datos: [1, 2, 3] });

// Trabajo con IndexedDB
let request = indexedDB.open("miDB", 1);
request.onsuccess = (event) => {
    let db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
    console.log("Base de datos abierta:", db.name);
};

console.log("\n=== CASOS DE USO ESPECÍFICOS ===");
console.log("APIs web configuradas");

// 16. ALTERNATIVAS A TYPE ASSERTIONS
// ========================================

// Type Guards
function esString(valor: any): valor is string {
    return typeof valor === 'string';
}

function esNumber(valor: any): valor is number {
    return typeof valor === 'number';
}

function esUsuario(valor: any): valor is Usuario {
    return valor && typeof valor.nombre === 'string' && typeof valor.email === 'string';
}

// Uso de type guards
let valorDesconocido: any = "Hola";

if (esString(valorDesconocido)) {
    console.log("Es string:", valorDesconocido.length);
}

if (esUsuario(datos)) {
    console.log("Es usuario:", datos.nombre);
}

// Validación de datos
function validarUsuario(datos: any): Usuario {
    if (!datos || typeof datos.nombre !== 'string' || typeof datos.email !== 'string') {
        throw new Error("Datos de usuario inválidos");
    }
    return datos as Usuario;
}

console.log("\n=== ALTERNATIVAS A TYPE ASSERTIONS ===");
console.log("Type guards y validación definidos");

// 17. EJEMPLOS PRÁCTICOS
// ========================================

// Sistema de autenticación
interface Credenciales {
    email: string;
    password: string;
}

interface Sesion {
    token: string;
    usuarioId: number;
    expiraEn: Date;
}

// Función que simula login
async function simularLogin(credenciales: Credenciales): Promise<Sesion> {
    // Simular respuesta de API
    let respuesta: any = {
        token: "abc123",
        usuarioId: 1,
        expiraEn: new Date(Date.now() + 3600000)
    };
    
    return respuesta as Sesion;
}

// Uso
let credenciales: Credenciales = {
    email: "usuario@email.com",
    password: "password123"
};

simularLogin(credenciales).then(sesion => {
    console.log("\n=== EJEMPLOS PRÁCTICOS ===");
    console.log("Sesión creada:", sesion);
    console.log("Token:", sesion.token);
    console.log("Usuario ID:", sesion.usuarioId);
});

// 18. TRABAJO CON FORMULARIOS
// ========================================

interface Formulario {
    nombre: string;
    email: string;
    edad: number;
}

// Función para procesar formulario
function procesarFormulario(datos: any): Formulario {
    // Validar datos básicos
    if (!datos || typeof datos !== 'object') {
        throw new Error("Datos de formulario inválidos");
    }
    
    // Type assertion con validación
    let formulario = datos as Formulario;
    
    // Validar campos requeridos
    if (!formulario.nombre || !formulario.email || !formulario.edad) {
        throw new Error("Campos requeridos faltantes");
    }
    
    return formulario;
}

// Uso
let datosFormulario: any = {
    nombre: "María",
    email: "maria@email.com",
    edad: 25
};

try {
    let formulario = procesarFormulario(datosFormulario);
    console.log("Formulario procesado:", formulario);
} catch (error) {
    console.error("Error:", error.message);
}

// 19. TRABAJO CON CONFIGURACIÓN
// ========================================

interface Configuracion {
    servidor: {
        host: string;
        puerto: number;
        ssl: boolean;
    };
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
    };
}

// Función para cargar configuración
function cargarConfiguracion(datos: any): Configuracion {
    // Validar estructura básica
    if (!datos || typeof datos !== 'object') {
        throw new Error("Configuración inválida");
    }
    
    return datos as Configuracion;
}

// Uso
let configRaw: any = {
    servidor: {
        host: "localhost",
        puerto: 3000,
        ssl: false
    },
    baseDeDatos: {
        host: "localhost",
        puerto: 5432,
        nombre: "miapp"
    }
};

let config = cargarConfiguracion(configRaw);
console.log("Configuración cargada:", config);

// 20. TRABAJO CON EVENTOS
// ========================================

interface EventoPersonalizado {
    tipo: string;
    datos: any;
    timestamp: Date;
}

// Función para procesar eventos
function procesarEvento(evento: any): EventoPersonalizado {
    if (!evento || typeof evento.tipo !== 'string') {
        throw new Error("Evento inválido");
    }
    
    return evento as EventoPersonalizado;
}

// Uso
let eventoRaw: any = {
    tipo: "usuario_creado",
    datos: { id: 1, nombre: "Juan" },
    timestamp: new Date()
};

let evento = procesarEvento(eventoRaw);
console.log("Evento procesado:", evento);

console.log("\n=== FIN DE EJEMPLOS DE TYPE ASSERTIONS ===");

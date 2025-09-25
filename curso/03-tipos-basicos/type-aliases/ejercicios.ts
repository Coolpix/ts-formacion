// ========================================
// EJERCICIOS - TYPE ALIASES EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Aliases básicos
// ========================================
// Crea aliases para los siguientes tipos:
// - ID (string)
// - Edad (number)
// - Activo (boolean)
// - Nombre (string)
// Crea una variable que use estos aliases

// TODO: Escribe tu código aquí
// type ID = 
// type Edad = 
// type Activo = 
// type Nombre = 

// let usuario: { id: ID; nombre: Nombre; edad: Edad; activo: Activo } = 

// EJERCICIO 2: Aliases para union types
// ========================================
// Crea aliases para los siguientes union types:
// - Estado: "pendiente" | "procesando" | "completado" | "error"
// - Prioridad: "baja" | "media" | "alta"
// - ID: string | number
// Crea una función que use estos aliases

// TODO: Escribe tu código aquí
// type Estado = 
// type Prioridad = 
// type ID = 

// function procesarTarea(id: ID, estado: Estado, prioridad: Prioridad): string {
//     // Tu código aquí
// }

// EJERCICIO 3: Aliases para tipos de función
// ========================================
// Crea aliases para los siguientes tipos de función:
// - EventHandler: función que recibe un Event y no retorna nada
// - Comparador: función que recibe dos números y retorna un número
// - Transformador: función que recibe un string y retorna un string
// Crea variables que usen estos aliases

// TODO: Escribe tu código aquí
// type EventHandler = 
// type Comparador = 
// type Transformador = 

// let manejador: EventHandler = 
// let comparar: Comparador = 
// let transformar: Transformador = 

// EJERCICIO 4: Aliases para tipos de objeto
// ========================================
// Crea aliases para los siguientes tipos de objeto:
// - Coordenada: { x: number; y: number }
// - Usuario: { id: string; nombre: string; email: string }
// - Producto: { id: string; nombre: string; precio: number; stock: number }
// Crea objetos que usen estos aliases

// TODO: Escribe tu código aquí
// type Coordenada = 
// type Usuario = 
// type Producto = 

// let punto: Coordenada = 
// let usuario: Usuario = 
// let producto: Producto = 

// EJERCICIO 5: Aliases con generics
// ========================================
// Crea aliases genéricos para:
// - Contenedor<T>: { valor: T; timestamp: Date }
// - Par<T, U>: { primero: T; segundo: U }
// - Lista<T>: T[]
// Crea variables que usen estos aliases

// TODO: Escribe tu código aquí
// type Contenedor<T> = 
// type Par<T, U> = 
// type Lista<T> = 

// let contenedor: Contenedor<string> = 
// let par: Par<string, number> = 
// let lista: Lista<number> = 

// EJERCICIO 6: Aliases para tipos de API
// ========================================
// Crea aliases para tipos de API:
// - ApiResponse<T>: { success: boolean; data: T; message?: string }
// - ApiError: { success: false; error: string; code: number }
// - ResultadoOperacion<T>: ApiResponse<T> | ApiError
// Crea una función que procese estos tipos

// TODO: Escribe tu código aquí
// type ApiResponse<T> = 
// type ApiError = 
// type ResultadoOperacion<T> = 

// function procesarResultado<T>(resultado: ResultadoOperacion<T>): string {
//     // Tu código aquí
// }

// EJERCICIO 7: Aliases para tipos de configuración
// ========================================
// Crea aliases para configuración:
// - ConfigDB: { host: string; port: number; database: string }
// - ConfigApp: { nombre: string; version: string; entorno: "desarrollo" | "produccion" }
// - ConfigCompleta: ConfigApp & { baseDeDatos: ConfigDB }
// Crea una configuración que use estos aliases

// TODO: Escribe tu código aquí
// type ConfigDB = 
// type ConfigApp = 
// type ConfigCompleta = 

// let config: ConfigCompleta = 

// EJERCICIO 8: Aliases para tipos de utilidad
// ========================================
// Crea aliases para tipos de utilidad:
// - Opcional<T>: T | undefined
// - Nullable<T>: T | null
// - Parcial<T>: { [K in keyof T]?: T[K] }
// Crea variables que usen estos aliases

// TODO: Escribe tu código aquí
// type Opcional<T> = 
// type Nullable<T> = 
// type Parcial<T> = 

// interface Usuario {
//     id: string;
//     nombre: string;
//     email?: string;
// }

// let usuarioOpcional: Opcional<Usuario> = 
// let usuarioNulo: Nullable<Usuario> = 
// let usuarioParcial: Parcial<Usuario> = 

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Aliases básicos
type ID = string;
type Edad = number;
type Activo = boolean;
type Nombre = string;

let usuario: { id: ID; nombre: Nombre; edad: Edad; activo: Activo } = {
    id: "user1",
    nombre: "Juan Pérez",
    edad: 25,
    activo: true
};

console.log("1. Aliases básicos:");
console.log("Usuario:", usuario);

// SOLUCIÓN 2: Aliases para union types
type Estado = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";
type ID = string | number;

function procesarTarea(id: ID, estado: Estado, prioridad: Prioridad): string {
    return `Tarea ${id}: ${estado} (${prioridad})`;
}

console.log("\n2. Aliases para union types:");
console.log("Procesar tarea:", procesarTarea("task1", "pendiente", "alta"));
console.log("Procesar tarea:", procesarTarea(123, "completado", "media"));

// SOLUCIÓN 3: Aliases para tipos de función
type EventHandler = (event: Event) => void;
type Comparador = (a: number, b: number) => number;
type Transformador = (valor: string) => string;

let manejador: EventHandler = (event) => {
    console.log("Evento manejado");
};

let comparar: Comparador = (a, b) => a - b;
let transformar: Transformador = (texto) => texto.toUpperCase();

console.log("\n3. Aliases para tipos de función:");
console.log("Comparar 5 y 3:", comparar(5, 3));
console.log("Transformar 'hola':", transformar("hola"));

// SOLUCIÓN 4: Aliases para tipos de objeto
type Coordenada = {
    x: number;
    y: number;
};

type Usuario = {
    id: string;
    nombre: string;
    email: string;
};

type Producto = {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
};

let punto: Coordenada = { x: 10, y: 20 };
let usuario: Usuario = {
    id: "user1",
    nombre: "Ana García",
    email: "ana@email.com"
};
let producto: Producto = {
    id: "prod1",
    nombre: "Laptop",
    precio: 999.99,
    stock: 5
};

console.log("\n4. Aliases para tipos de objeto:");
console.log("Punto:", punto);
console.log("Usuario:", usuario);
console.log("Producto:", producto);

// SOLUCIÓN 5: Aliases con generics
type Contenedor<T> = {
    valor: T;
    timestamp: Date;
};

type Par<T, U> = {
    primero: T;
    segundo: U;
};

type Lista<T> = T[];

let contenedor: Contenedor<string> = {
    valor: "Hola mundo",
    timestamp: new Date()
};

let par: Par<string, number> = {
    primero: "edad",
    segundo: 25
};

let lista: Lista<number> = [1, 2, 3, 4, 5];

console.log("\n5. Aliases con generics:");
console.log("Contenedor:", contenedor);
console.log("Par:", par);
console.log("Lista:", lista);

// SOLUCIÓN 6: Aliases para tipos de API
type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
};

type ApiError = {
    success: false;
    error: string;
    code: number;
};

type ResultadoOperacion<T> = ApiResponse<T> | ApiError;

function procesarResultado<T>(resultado: ResultadoOperacion<T>): string {
    if (resultado.success) {
        return `Éxito: ${JSON.stringify(resultado.data)}`;
    } else {
        return `Error ${resultado.code}: ${resultado.error}`;
    }
}

console.log("\n6. Aliases para tipos de API:");
let respuestaExito: ApiResponse<{ usuarios: string[] }> = {
    success: true,
    data: { usuarios: ["Ana", "Luis"] },
    message: "Usuarios obtenidos"
};

let respuestaError: ApiError = {
    success: false,
    error: "No se pudo conectar",
    code: 500
};

console.log("Respuesta éxito:", procesarResultado(respuestaExito));
console.log("Respuesta error:", procesarResultado(respuestaError));

// SOLUCIÓN 7: Aliases para tipos de configuración
type ConfigDB = {
    host: string;
    port: number;
    database: string;
};

type ConfigApp = {
    nombre: string;
    version: string;
    entorno: "desarrollo" | "produccion";
};

type ConfigCompleta = ConfigApp & { baseDeDatos: ConfigDB };

let config: ConfigCompleta = {
    nombre: "Mi App",
    version: "1.0.0",
    entorno: "desarrollo",
    baseDeDatos: {
        host: "localhost",
        port: 5432,
        database: "miapp"
    }
};

console.log("\n7. Aliases para tipos de configuración:");
console.log("Configuración:", config);

// SOLUCIÓN 8: Aliases para tipos de utilidad
type Opcional<T> = T | undefined;
type Nullable<T> = T | null;
type Parcial<T> = {
    [K in keyof T]?: T[K];
};

interface Usuario {
    id: string;
    nombre: string;
    email?: string;
}

let usuarioOpcional: Opcional<Usuario> = undefined;
let usuarioNulo: Nullable<Usuario> = null;
let usuarioParcial: Parcial<Usuario> = { nombre: "Ana" };

console.log("\n8. Aliases para tipos de utilidad:");
console.log("Usuario opcional:", usuarioOpcional);
console.log("Usuario nulo:", usuarioNulo);
console.log("Usuario parcial:", usuarioParcial);

console.log("\n¡Ejercicios de Type Aliases completados!");

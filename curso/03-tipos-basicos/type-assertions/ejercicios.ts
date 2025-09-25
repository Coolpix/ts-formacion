// ========================================
// EJERCICIOS - TYPE ASSERTIONS EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Type assertions básicas
// ========================================
// Crea una variable 'valor' de tipo any con el valor "123"
// Usa type assertion para convertirlo a string y obtener su longitud
// Usa type assertion para convertirlo a number y sumarle 10

// TODO: Escribe tu código aquí
// let valor: any = "123";
// let longitud: number = 
// let numero: number = 

// EJERCICIO 2: Type assertions con DOM
// ========================================
// Crea una función 'obtenerElemento' que reciba un id (string) y retorne un HTMLElement
// Usa type assertion para convertir el resultado de getElementById
// Crea una función 'obtenerInput' que reciba un id y retorne un HTMLInputElement

// TODO: Escribe tu código aquí
// function obtenerElemento(id: string): HTMLElement {
//     // Tu código aquí
// }

// function obtenerInput(id: string): HTMLInputElement {
//     // Tu código aquí
// }

// EJERCICIO 3: Type assertions con APIs
// ========================================
// Crea una interfaz 'RespuestaAPI' con propiedades: success (boolean), data (any), message (string)
// Crea una función 'procesarRespuesta' que reciba un parámetro any y lo convierta a RespuestaAPI
// La función debe retornar la respuesta tipada

// TODO: Escribe tu código aquí
// interface RespuestaAPI {
//     // Tu código aquí
// }

// function procesarRespuesta(respuesta: any): RespuestaAPI {
//     // Tu código aquí
// }

// EJERCICIO 4: Type assertions con generics
// ========================================
// Crea una función 'obtenerPrimero' que reciba un array any[] y retorne el primer elemento como tipo T
// Crea una función 'convertirArray' que reciba un array any[] y lo convierta a T[]
// Usa type assertions con generics

// TODO: Escribe tu código aquí
// function obtenerPrimero<T>(array: any[]): T {
//     // Tu código aquí
// }

// function convertirArray<T>(array: any[]): T[] {
//     // Tu código aquí
// }

// EJERCICIO 5: Type assertions con union types
// ========================================
// Crea una variable 'valor' de tipo string | number con valor "123"
// Usa type assertion para convertirlo a string y obtener su longitud
// Usa type assertion para convertirlo a number y multiplicarlo por 2

// TODO: Escribe tu código aquí
// let valor: string | number = "123";
// let longitud: number = 
// let doble: number = 

// EJERCICIO 6: Type assertions con interfaces
// ========================================
// Crea una interfaz 'Usuario' con propiedades: id (number), nombre (string), email (string)
// Crea una función 'crearUsuario' que reciba un objeto any y lo convierta a Usuario
// La función debe retornar el usuario tipado

// TODO: Escribe tu código aquí
// interface Usuario {
//     // Tu código aquí
// }

// function crearUsuario(datos: any): Usuario {
//     // Tu código aquí
// }

// EJERCICIO 7: Type assertions con funciones
// ========================================
// Crea una función 'procesarFuncion' que reciba un parámetro any
// Usa type assertion para convertirlo a función que recibe (a: number, b: number) => number
// Llama a la función con los parámetros 5 y 3

// TODO: Escribe tu código aquí
// function procesarFuncion(funcion: any): number {
//     // Tu código aquí
// }

// EJERCICIO 8: Type assertions con arrays
// ========================================
// Crea una función 'procesarArray' que reciba un array any[]
// Usa type assertion para convertirlo a number[]
// Calcula la suma de todos los elementos

// TODO: Escribe tu código aquí
// function procesarArray(array: any[]): number {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Type assertions básicas
let valor: any = "123";
let longitud: number = (valor as string).length;
let numero: number = (valor as number) + 10;

console.log("1. Type assertions básicas:");
console.log("Valor original:", valor);
console.log("Longitud (como string):", longitud);
console.log("Número + 10 (como number):", numero);

// SOLUCIÓN 2: Type assertions con DOM
function obtenerElemento(id: string): HTMLElement {
    return document.getElementById(id) as HTMLElement;
}

function obtenerInput(id: string): HTMLInputElement {
    return document.getElementById(id) as HTMLInputElement;
}

console.log("\n2. Type assertions con DOM:");
console.log("Función obtenerElemento definida");
console.log("Función obtenerInput definida");

// SOLUCIÓN 3: Type assertions con APIs
interface RespuestaAPI {
    success: boolean;
    data: any;
    message: string;
}

function procesarRespuesta(respuesta: any): RespuestaAPI {
    return respuesta as RespuestaAPI;
}

let respuestaRaw: any = {
    success: true,
    data: { usuarios: ["Ana", "Luis"] },
    message: "Usuarios obtenidos"
};

let respuesta = procesarRespuesta(respuestaRaw);
console.log("\n3. Type assertions con APIs:");
console.log("Respuesta procesada:", respuesta);

// SOLUCIÓN 4: Type assertions con generics
function obtenerPrimero<T>(array: any[]): T {
    return array[0] as T;
}

function convertirArray<T>(array: any[]): T[] {
    return array as T[];
}

let arrayNumeros = [1, 2, 3, 4, 5];
let primerNumero = obtenerPrimero<number>(arrayNumeros);
let arrayConvertido = convertirArray<number>(arrayNumeros);

console.log("\n4. Type assertions con generics:");
console.log("Primer número:", primerNumero);
console.log("Array convertido:", arrayConvertido);

// SOLUCIÓN 5: Type assertions con union types
let valor: string | number = "123";
let longitud: number = (valor as string).length;
let doble: number = (valor as number) * 2;

console.log("\n5. Type assertions con union types:");
console.log("Valor original:", valor);
console.log("Longitud (como string):", longitud);
console.log("Doble (como number):", doble);

// SOLUCIÓN 6: Type assertions con interfaces
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

function crearUsuario(datos: any): Usuario {
    return datos as Usuario;
}

let datosUsuario: any = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

let usuario = crearUsuario(datosUsuario);
console.log("\n6. Type assertions con interfaces:");
console.log("Usuario creado:", usuario);

// SOLUCIÓN 7: Type assertions con funciones
function procesarFuncion(funcion: any): number {
    let funcionTipada = funcion as (a: number, b: number) => number;
    return funcionTipada(5, 3);
}

let funcionSuma: any = (a: number, b: number) => a + b;
let resultado = procesarFuncion(funcionSuma);

console.log("\n7. Type assertions con funciones:");
console.log("Resultado de la función:", resultado);

// SOLUCIÓN 8: Type assertions con arrays
function procesarArray(array: any[]): number {
    let arrayNumeros = array as number[];
    return arrayNumeros.reduce((suma, numero) => suma + numero, 0);
}

let arrayMixto: any[] = [1, 2, 3, 4, 5];
let suma = procesarArray(arrayMixto);

console.log("\n8. Type assertions con arrays:");
console.log("Array original:", arrayMixto);
console.log("Suma:", suma);

console.log("\n¡Ejercicios de Type Assertions completados!");

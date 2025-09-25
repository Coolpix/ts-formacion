// ========================================
// EJERCICIOS - ARRAYS EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Declaración de Arrays
// ========================================
// Declara los siguientes arrays con sus tipos correspondientes:
// - Un array de strings con los nombres de 5 países
// - Un array de numbers con las poblaciones de esos países (en millones)
// - Un array de booleanos que indique si cada país es europeo
// - Un array de objetos con información de ciudades (nombre, país, población)

// TODO: Escribe tu código aquí
// let paises: 
// let poblaciones: 
// let esEuropeo: 
// let ciudades: 

// EJERCICIO 2: Métodos de Array
// ========================================
// Crea una función 'sumarNumeros' que reciba un array de números y retorne la suma
// Crea una función 'encontrarMayor' que reciba un array de números y retorne el mayor
// Crea una función 'filtrarPares' que reciba un array de números y retorne solo los pares

// TODO: Escribe tu código aquí
// function sumarNumeros(numeros: number[]): number {
//     // Tu código aquí
// }

// function encontrarMayor(numeros: number[]): number {
//     // Tu código aquí
// }

// function filtrarPares(numeros: number[]): number[] {
//     // Tu código aquí
// }

// EJERCICIO 3: Transformación de Arrays
// ========================================
// Crea una función 'duplicarNumeros' que reciba un array de números y retorne cada número duplicado
// Crea una función 'convertirAMayusculas' que reciba un array de strings y retorne todos en mayúsculas
// Crea una función 'calcularCuadrados' que reciba un array de números y retorne sus cuadrados

// TODO: Escribe tu código aquí
// function duplicarNumeros(numeros: number[]): number[] {
//     // Tu código aquí
// }

// function convertirAMayusculas(textos: string[]): string[] {
//     // Tu código aquí
// }

// function calcularCuadrados(numeros: number[]): number[] {
//     // Tu código aquí
// }

// EJERCICIO 4: Búsqueda en Arrays
// ========================================
// Crea una función 'buscarPorNombre' que reciba un array de strings y un nombre, y retorne true si existe
// Crea una función 'encontrarIndice' que reciba un array de números y un número, y retorne su índice
// Crea una función 'buscarPrimerPar' que reciba un array de números y retorne el primer número par

// TODO: Escribe tu código aquí
// function buscarPorNombre(nombres: string[], nombre: string): boolean {
//     // Tu código aquí
// }

// function encontrarIndice(numeros: number[], numero: number): number {
//     // Tu código aquí
// }

// function buscarPrimerPar(numeros: number[]): number | undefined {
//     // Tu código aquí
// }

// EJERCICIO 5: Tuplas
// ========================================
// Crea una tupla 'coordenada' que contenga [latitud, longitud] como números
// Crea una tupla 'usuario' que contenga [nombre, edad, activo] como [string, number, boolean]
// Crea una tupla 'configuracion' que contenga [servidor, puerto] donde puerto es opcional

// TODO: Escribe tu código aquí
// let coordenada: 
// let usuario: 
// let configuracion: 

// EJERCICIO 6: Destructuring
// ========================================
// Crea una función 'intercambiarPrimeros' que reciba un array de números
// y retorne un nuevo array con los dos primeros elementos intercambiados
// Crea una función 'obtenerPrimeroYUltimo' que reciba un array y retorne [primero, ultimo]

// TODO: Escribe tu código aquí
// function intercambiarPrimeros(numeros: number[]): number[] {
//     // Tu código aquí
// }

// function obtenerPrimeroYUltimo<T>(array: T[]): [T, T] {
//     // Tu código aquí
// }

// EJERCICIO 7: Arrays Multidimensionales
// ========================================
// Crea una matriz 3x3 de números
// Crea una función 'sumarMatriz' que reciba una matriz y retorne la suma de todos sus elementos
// Crea una función 'obtenerDiagonal' que reciba una matriz cuadrada y retorne su diagonal principal

// TODO: Escribe tu código aquí
// let matriz: 
// function sumarMatriz(matriz: number[][]): number {
//     // Tu código aquí
// }

// function obtenerDiagonal(matriz: number[][]): number[] {
//     // Tu código aquí
// }

// EJERCICIO 8: Arrays de Objetos
// ========================================
// Crea una interfaz 'Estudiante' con propiedades: nombre, edad, calificaciones (array de números)
// Crea un array de estudiantes
// Crea una función 'calcularPromedio' que reciba un estudiante y retorne su promedio
// Crea una función 'estudiantesAprobados' que reciba un array de estudiantes y retorne los que tienen promedio >= 6

// TODO: Escribe tu código aquí
// interface Estudiante {
//     // Tu código aquí
// }

// let estudiantes: Estudiante[] = [
//     // Tu código aquí
// ];

// function calcularPromedio(estudiante: Estudiante): number {
//     // Tu código aquí
// }

// function estudiantesAprobados(estudiantes: Estudiante[]): Estudiante[] {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Declaración de Arrays
let paises: string[] = ["España", "Francia", "Alemania", "Italia", "Portugal"];
let poblaciones: number[] = [47, 67, 83, 60, 10];
let esEuropeo: boolean[] = [true, true, true, true, true];

interface Ciudad {
    nombre: string;
    pais: string;
    poblacion: number;
}

let ciudades: Ciudad[] = [
    { nombre: "Madrid", pais: "España", poblacion: 3.3 },
    { nombre: "París", pais: "Francia", poblacion: 2.1 },
    { nombre: "Berlín", pais: "Alemania", poblacion: 3.7 },
    { nombre: "Roma", pais: "Italia", poblacion: 2.8 },
    { nombre: "Lisboa", pais: "Portugal", poblacion: 0.5 }
];

console.log("1. Arrays declarados:");
console.log("Países:", paises);
console.log("Poblaciones:", poblaciones);
console.log("Es europeo:", esEuropeo);
console.log("Ciudades:", ciudades);

// SOLUCIÓN 2: Métodos de Array
function sumarNumeros(numeros: number[]): number {
    return numeros.reduce((suma, numero) => suma + numero, 0);
}

function encontrarMayor(numeros: number[]): number {
    return Math.max(...numeros);
}

function filtrarPares(numeros: number[]): number[] {
    return numeros.filter(numero => numero % 2 === 0);
}

console.log("\n2. Métodos de array:");
let numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números:", numerosEjemplo);
console.log("Suma:", sumarNumeros(numerosEjemplo));
console.log("Mayor:", encontrarMayor(numerosEjemplo));
console.log("Pares:", filtrarPares(numerosEjemplo));

// SOLUCIÓN 3: Transformación de Arrays
function duplicarNumeros(numeros: number[]): number[] {
    return numeros.map(numero => numero * 2);
}

function convertirAMayusculas(textos: string[]): string[] {
    return textos.map(texto => texto.toUpperCase());
}

function calcularCuadrados(numeros: number[]): number[] {
    return numeros.map(numero => numero * numero);
}

console.log("\n3. Transformación de arrays:");
console.log("Duplicados:", duplicarNumeros([1, 2, 3, 4, 5]));
console.log("Mayúsculas:", convertirAMayusculas(["hola", "mundo", "typescript"]));
console.log("Cuadrados:", calcularCuadrados([1, 2, 3, 4, 5]));

// SOLUCIÓN 4: Búsqueda en Arrays
function buscarPorNombre(nombres: string[], nombre: string): boolean {
    return nombres.includes(nombre);
}

function encontrarIndice(numeros: number[], numero: number): number {
    return numeros.indexOf(numero);
}

function buscarPrimerPar(numeros: number[]): number | undefined {
    return numeros.find(numero => numero % 2 === 0);
}

console.log("\n4. Búsqueda en arrays:");
let nombresEjemplo = ["Ana", "Luis", "María", "Pedro"];
let numerosBusqueda = [1, 3, 5, 2, 7, 4];
console.log("¿Existe 'María'?", buscarPorNombre(nombresEjemplo, "María"));
console.log("¿Existe 'Juan'?", buscarPorNombre(nombresEjemplo, "Juan"));
console.log("Índice de 2:", encontrarIndice(numerosBusqueda, 2));
console.log("Primer par:", buscarPrimerPar(numerosBusqueda));

// SOLUCIÓN 5: Tuplas
let coordenada: [number, number] = [40.4168, -3.7038];
let usuario: [string, number, boolean] = ["Juan", 25, true];
let configuracion: [string, number?] = ["servidor", 8080];

console.log("\n5. Tuplas:");
console.log("Coordenada:", coordenada);
console.log("Usuario:", usuario);
console.log("Configuración:", configuracion);

// SOLUCIÓN 6: Destructuring
function intercambiarPrimeros(numeros: number[]): number[] {
    if (numeros.length < 2) return numeros;
    let [primero, segundo, ...resto] = numeros;
    return [segundo, primero, ...resto];
}

function obtenerPrimeroYUltimo<T>(array: T[]): [T, T] {
    return [array[0], array[array.length - 1]];
}

console.log("\n6. Destructuring:");
console.log("Intercambiar primeros:", intercambiarPrimeros([1, 2, 3, 4, 5]));
console.log("Primero y último:", obtenerPrimeroYUltimo(["a", "b", "c", "d"]));

// SOLUCIÓN 7: Arrays Multidimensionales
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumarMatriz(matriz: number[][]): number {
    return matriz.flat().reduce((suma, numero) => suma + numero, 0);
}

function obtenerDiagonal(matriz: number[][]): number[] {
    return matriz.map((fila, indice) => fila[indice]);
}

console.log("\n7. Arrays multidimensionales:");
console.log("Matriz:", matriz);
console.log("Suma de matriz:", sumarMatriz(matriz));
console.log("Diagonal:", obtenerDiagonal(matriz));

// SOLUCIÓN 8: Arrays de Objetos
interface Estudiante {
    nombre: string;
    edad: number;
    calificaciones: number[];
}

let estudiantes: Estudiante[] = [
    { nombre: "Ana", edad: 20, calificaciones: [8, 7, 9, 6] },
    { nombre: "Luis", edad: 22, calificaciones: [5, 6, 4, 7] },
    { nombre: "María", edad: 21, calificaciones: [9, 8, 9, 8] },
    { nombre: "Pedro", edad: 23, calificaciones: [6, 7, 8, 7] }
];

function calcularPromedio(estudiante: Estudiante): number {
    return estudiante.calificaciones.reduce((suma, cal) => suma + cal, 0) / estudiante.calificaciones.length;
}

function estudiantesAprobados(estudiantes: Estudiante[]): Estudiante[] {
    return estudiantes.filter(estudiante => calcularPromedio(estudiante) >= 6);
}

console.log("\n8. Arrays de objetos:");
console.log("Estudiantes:", estudiantes);
console.log("Promedio de Ana:", calcularPromedio(estudiantes[0]).toFixed(2));
console.log("Estudiantes aprobados:", estudiantesAprobados(estudiantes).map(e => e.nombre));

console.log("\n¡Ejercicios de arrays completados!");

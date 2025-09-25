// ========================================
// EJERCICIOS - TIPOS PRIMITIVOS
// ========================================

// EJERCICIO 1: Declaración de Variables
// ========================================
// Declara las siguientes variables con sus tipos correspondientes:
// - Una variable 'nombre' que contenga tu nombre completo
// - Una variable 'edad' que contenga tu edad
// - Una variable 'altura' que contenga tu altura en metros (con decimales)
// - Una variable 'esEstudiante' que indique si eres estudiante
// - Una variable 'telefono' que pueda ser null (no tienes teléfono)

// TODO: Escribe tu código aquí
// let nombre: 
// let edad: 
// let altura: 
// let esEstudiante: 
// let telefono: 

// EJERCICIO 2: Operaciones con Strings
// ========================================
// Crea una función 'formatearNombre' que reciba nombre y apellido
// y retorne el nombre completo en formato "Apellido, Nombre"
// Crea una función 'contarCaracteres' que reciba un texto y retorne su longitud

// TODO: Escribe tu código aquí
// function formatearNombre(nombre: string, apellido: string): string {
//     // Tu código aquí
// }

// function contarCaracteres(texto: string): number {
//     // Tu código aquí
// }

// EJERCICIO 3: Operaciones con Numbers
// ========================================
// Crea una función 'calcularIMC' que reciba peso (kg) y altura (m)
// y retorne el índice de masa corporal
// Crea una función 'esPar' que reciba un número y retorne true si es par

// TODO: Escribe tu código aquí
// function calcularIMC(peso: number, altura: number): number {
//     // Tu código aquí
// }

// function esPar(numero: number): boolean {
//     // Tu código aquí
// }

// EJERCICIO 4: Validaciones Booleanas
// ========================================
// Crea una función 'puedeVotar' que reciba edad y nacionalidad
// y retorne true si puede votar (mayor de 18 y español)
// Crea una función 'puedeConducir' que reciba edad y tieneCarnet
// y retorne true si puede conducir (mayor de 18 y tiene carnet)

// TODO: Escribe tu código aquí
// function puedeVotar(edad: number, nacionalidad: string): boolean {
//     // Tu código aquí
// }

// function puedeConducir(edad: number, tieneCarnet: boolean): boolean {
//     // Tu código aquí
// }

// EJERCICIO 5: Manejo de null y undefined
// ========================================
// Crea una función 'obtenerValor' que reciba un valor que puede ser string o null
// y retorne el valor o "Sin valor" si es null
// Crea una función 'inicializarVariable' que reciba una variable undefined
// y le asigne un valor por defecto

// TODO: Escribe tu código aquí
// function obtenerValor(valor: string | null): string {
//     // Tu código aquí
// }

// function inicializarVariable(variable: undefined): string {
//     // Tu código aquí
// }

// EJERCICIO 6: Funciones void y never
// ========================================
// Crea una función 'mostrarBienvenida' que no retorne nada pero muestre un mensaje
// Crea una función 'lanzarError' que siempre lance un error y nunca retorne

// TODO: Escribe tu código aquí
// function mostrarBienvenida(nombre: string): void {
//     // Tu código aquí
// }

// function lanzarError(mensaje: string): never {
//     // Tu código aquí
// }

// EJERCICIO 7: Inferencia de Tipos
// ========================================
// Declara variables sin especificar el tipo y deja que TypeScript infiera:
// - Una variable con tu ciudad favorita
// - Una variable con el año actual
// - Una variable que indique si te gusta TypeScript
// - Una variable con un array de tus hobbies

// TODO: Escribe tu código aquí
// let ciudadFavorita = 
// let añoActual = 
// let meGustaTypeScript = 
// let hobbies = 

// EJERCICIO 8: Conversiones y Type Assertions
// ========================================
// Crea una función 'convertirANumero' que reciba un any y lo convierta a number
// Crea una función 'convertirAString' que reciba un any y lo convierta a string

// TODO: Escribe tu código aquí
// function convertirANumero(valor: any): number {
//     // Tu código aquí
// }

// function convertirAString(valor: any): string {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Declaración de Variables
let nombre: string = "María García López";
let edad: number = 28;
let altura: number = 1.65;
let esEstudiante: boolean = true;
let telefono: string | null = null;

console.log("1. Variables declaradas:");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Altura: ${altura}m`);
console.log(`Es estudiante: ${esEstudiante}`);
console.log(`Teléfono: ${telefono}`);

// SOLUCIÓN 2: Operaciones con Strings
function formatearNombre(nombre: string, apellido: string): string {
    return `${apellido}, ${nombre}`;
}

function contarCaracteres(texto: string): number {
    return texto.length;
}

console.log("\n2. Operaciones con strings:");
console.log("Nombre formateado:", formatearNombre("Juan", "Pérez"));
console.log("Caracteres en 'Hola':", contarCaracteres("Hola"));

// SOLUCIÓN 3: Operaciones con Numbers
function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function esPar(numero: number): boolean {
    return numero % 2 === 0;
}

console.log("\n3. Operaciones con numbers:");
console.log("IMC (70kg, 1.75m):", calcularIMC(70, 1.75).toFixed(2));
console.log("¿8 es par?", esPar(8));
console.log("¿7 es par?", esPar(7));

// SOLUCIÓN 4: Validaciones Booleanas
function puedeVotar(edad: number, nacionalidad: string): boolean {
    return edad >= 18 && nacionalidad.toLowerCase() === "español";
}

function puedeConducir(edad: number, tieneCarnet: boolean): boolean {
    return edad >= 18 && tieneCarnet;
}

console.log("\n4. Validaciones booleanas:");
console.log("¿Puede votar (25, 'español')?", puedeVotar(25, "español"));
console.log("¿Puede votar (16, 'español')?", puedeVotar(16, "español"));
console.log("¿Puede conducir (20, true)?", puedeConducir(20, true));
console.log("¿Puede conducir (20, false)?", puedeConducir(20, false));

// SOLUCIÓN 5: Manejo de null y undefined
function obtenerValor(valor: string | null): string {
    return valor || "Sin valor";
}

function inicializarVariable(variable: undefined): string {
    return "Valor por defecto";
}

console.log("\n5. Manejo de null y undefined:");
console.log("Valor con texto:", obtenerValor("Hola"));
console.log("Valor null:", obtenerValor(null));
console.log("Variable inicializada:", inicializarVariable(undefined));

// SOLUCIÓN 6: Funciones void y never
function mostrarBienvenida(nombre: string): void {
    console.log(`¡Bienvenido/a, ${nombre}!`);
}

function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

console.log("\n6. Funciones void y never:");
mostrarBienvenida("Ana");
// lanzarError("Error de prueba"); // Descomenta para ver el error

// SOLUCIÓN 7: Inferencia de Tipos
let ciudadFavorita = "Barcelona"; // infiere: string
let añoActual = 2024; // infiere: number
let meGustaTypeScript = true; // infiere: boolean
let hobbies = ["leer", "programar", "viajar"]; // infiere: string[]

console.log("\n7. Inferencia de tipos:");
console.log("Ciudad favorita:", ciudadFavorita, "Tipo:", typeof ciudadFavorita);
console.log("Año actual:", añoActual, "Tipo:", typeof añoActual);
console.log("Me gusta TypeScript:", meGustaTypeScript, "Tipo:", typeof meGustaTypeScript);
console.log("Hobbies:", hobbies, "Tipo:", typeof hobbies);

// SOLUCIÓN 8: Conversiones y Type Assertions
function convertirANumero(valor: any): number {
    return valor as number;
}

function convertirAString(valor: any): string {
    return valor as string;
}

console.log("\n8. Conversiones y type assertions:");
console.log("Convertir a número:", convertirANumero(123));
console.log("Convertir a string:", convertirAString("texto"));

console.log("\n¡Ejercicios de tipos primitivos completados!");

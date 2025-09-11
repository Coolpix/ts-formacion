// Solución del Ejercicio 2: Detección de Errores

// Código con errores intencionales (comentado para que compile)
// Descomenta las líneas para ver los errores de TypeScript

// 1. Error: Asignar string a variable tipada como number
// let numero: number = "esto es un string"; // ❌ Error

// Código corregido:
let numero: number = 42; // ✅ Correcto

// 2. Error: Llamar función con parámetros de tipo incorrecto
function multiplicar(a: number, b: number): number {
    return a * b;
}

// let resultado = multiplicar("5", 10); // ❌ Error
// Código corregido:
let resultado = multiplicar(5, 10); // ✅ Correcto

// 3. Error: Acceder a propiedad que no existe
interface Usuario {
    nombre: string;
    edad: number;
}

let usuario: Usuario = {
    nombre: "Juan",
    edad: 30
};

// console.log(usuario.email); // ❌ Error: Property 'email' does not exist
// Código corregido:
console.log(usuario.nombre); // ✅ Correcto

// 4. Error: Usar variable no declarada
// console.log(variableNoDeclarada); // ❌ Error: Cannot find name 'variableNoDeclarada'

// Código corregido:
let variableDeclarada: string = "Hola";
console.log(variableDeclarada); // ✅ Correcto

// Ejemplos adicionales de errores comunes:

// Error: Función sin return en función que debe devolver algo
function obtenerNombre(): string {
    // return "Juan"; // ❌ Error si no hay return
    return "Juan"; // ✅ Correcto
}

// Error: Parámetro faltante
function crearPerfil(nombre: string, email: string, edad: number): void {
    console.log(`Perfil: ${nombre}, ${email}, ${edad} años`);
}

// crearPerfil("Juan"); // ❌ Error: Expected 3 arguments, but got 1
// Código corregido:
crearPerfil("Juan", "juan@email.com", 30); // ✅ Correcto

// Error: Asignar null a variable no nullable
let texto: string = null; // ❌ Error si strictNullChecks está habilitado
// Código corregido:
let textoOpcional: string | null = null; // ✅ Correcto

console.log("Todos los errores han sido corregidos y el código compila correctamente.");

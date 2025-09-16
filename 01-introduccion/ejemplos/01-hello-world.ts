// Ejemplo básico: Hola Mundo en TypeScript

// En JavaScript normal:
// let mensaje = "Hola Mundo";
// console.log(mensaje);

// En TypeScript con tipado explícito:
let mensaje: string = "Hola Mundo";
console.log(mensaje);

// TypeScript puede inferir tipos automáticamente:
let mensajeInferido = "Hola TypeScript"; // TypeScript sabe que es string
console.log(mensajeInferido);

// Ejemplo de detección de errores en tiempo de compilación:
// let numero: number = "esto es un string"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Ejemplo de función con tipos:
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

// Uso de la función:
console.log(saludar("Juan")); // ✅ Correcto
// console.log(saludar(123)); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'

// Ejemplo de objeto con tipos:
type Persona = {
    nombre: string;
    edad: number;
    activo: boolean;
}

let usuario: Persona = {
    nombre: "María",
    edad: 30,
    activo: true
};

console.log(usuario);

// Ejemplo de array tipado:
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Carlos", "Elena"];

// Ejemplo de union types:
let id: string | number = "abc123";
id = 456; // También válido

console.log("ID:", id);

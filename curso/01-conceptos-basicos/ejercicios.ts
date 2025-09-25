// ========================================
// EJERCICIOS - CONCEPTOS BÁSICOS
// ========================================

// EJERCICIO 1: Tipos Primitivos
// ========================================
// Declara las siguientes variables con sus tipos correspondientes:
// - Una variable 'nombre' que contenga tu nombre
// - Una variable 'edad' que contenga tu edad
// - Una variable 'esDesarrollador' que indique si eres desarrollador
// - Una variable 'salario' que contenga un valor decimal

// TODO: Escribe tu código aquí
// let nombre: 
// let edad: 
// let esDesarrollador: 
// let salario: 

// EJERCICIO 2: Arrays
// ========================================
// Crea un array de strings con los nombres de 5 lenguajes de programación
// Crea un array de numbers con los años de lanzamiento de esos lenguajes

// TODO: Escribe tu código aquí
// let lenguajes: 
// let añosLanzamiento: 

// EJERCICIO 3: Objetos
// ========================================
// Crea un objeto 'libro' con las siguientes propiedades:
// - titulo (string)
// - autor (string)
// - añoPublicacion (number)
// - estaDisponible (boolean)

// TODO: Escribe tu código aquí
// let libro: 

// EJERCICIO 4: Funciones
// ========================================
// Crea una función 'calcularArea' que reciba dos parámetros (ancho y alto)
// y retorne el área de un rectángulo
// Crea una función 'esMayorDeEdad' que reciba una edad y retorne true si es >= 18

// TODO: Escribe tu código aquí
// function calcularArea(ancho: number, alto: number): number {
//     // Tu código aquí
// }

// function esMayorDeEdad(edad: number): boolean {
//     // Tu código aquí
// }

// EJERCICIO 5: Union Types
// ========================================
// Crea una función 'formatearId' que reciba un parámetro que puede ser
// string o number y retorne un string con el formato "ID: [valor]"

// TODO: Escribe tu código aquí
// function formatearId(id: string | number): string {
//     // Tu código aquí
// }

// EJERCICIO 6: Enums
// ========================================
// Crea un enum 'DiaSemana' con los días de la semana
// Crea una variable que use ese enum

// TODO: Escribe tu código aquí
// enum DiaSemana {
//     // Tu código aquí
// }
// let diaActual: DiaSemana = 

// EJERCICIO 7: Interfaces
// ========================================
// Crea una interfaz 'Producto' con las propiedades:
// - id (number)
// - nombre (string)
// - precio (number)
// - categoria (string)
// - enStock (boolean opcional)
// Crea un objeto que implemente esta interfaz

// TODO: Escribe tu código aquí
// interface Producto {
//     // Tu código aquí
// }
// let producto: Producto = 

// EJERCICIO 8: Type Aliases
// ========================================
// Crea un type alias 'Coordenada' para un objeto con x e y (ambos number)
// Crea un type alias 'Estado' para union type: "pendiente" | "procesando" | "completado"
// Crea variables que usen estos type aliases

// TODO: Escribe tu código aquí
// type Coordenada = 
// type Estado = 
// let punto: Coordenada = 
// let estadoActual: Estado = 

// EJERCICIO 9: Funciones con parámetros opcionales
// ========================================
// Crea una función 'crearPerfil' que reciba:
// - nombre (string, obligatorio)
// - email (string, opcional)
// - telefono (string, opcional)
// La función debe retornar un string con la información disponible

// TODO: Escribe tu código aquí
// function crearPerfil(nombre: string, email?: string, telefono?: string): string {
//     // Tu código aquí
// }

// EJERCICIO 10: Type Assertions
// ========================================
// Crea una variable 'dato' de tipo any con el valor "123"
// Usa type assertion para convertirlo a number y sumarle 10

// TODO: Escribe tu código aquí
// let dato: any = "123";
// let resultado: number = 

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Tipos Primitivos
let nombre: string = "Juan Pérez";
let edad: number = 28;
let esDesarrollador: boolean = true;
let salario: number = 45000.50;

console.log("1. Tipos primitivos:");
console.log(`Nombre: ${nombre}, Edad: ${edad}, Desarrollador: ${esDesarrollador}, Salario: ${salario}`);

// SOLUCIÓN 2: Arrays
let lenguajes: string[] = ["JavaScript", "TypeScript", "Python", "Java", "C#"];
let añosLanzamiento: number[] = [1995, 2012, 1991, 1995, 2000];

console.log("\n2. Arrays:");
console.log("Lenguajes:", lenguajes);
console.log("Años:", añosLanzamiento);

// SOLUCIÓN 3: Objetos
let libro: {
    titulo: string;
    autor: string;
    añoPublicacion: number;
    estaDisponible: boolean;
} = {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    añoPublicacion: 2008,
    estaDisponible: true
};

console.log("\n3. Objetos:");
console.log("Libro:", libro);

// SOLUCIÓN 4: Funciones
function calcularArea(ancho: number, alto: number): number {
    return ancho * alto;
}

function esMayorDeEdad(edad: number): boolean {
    return edad >= 18;
}

console.log("\n4. Funciones:");
console.log("Área (5x3):", calcularArea(5, 3));
console.log("¿Es mayor de edad (20)?", esMayorDeEdad(20));
console.log("¿Es mayor de edad (16)?", esMayorDeEdad(16));

// SOLUCIÓN 5: Union Types
function formatearId(id: string | number): string {
    return `ID: ${id}`;
}

console.log("\n5. Union Types:");
console.log(formatearId("user123"));
console.log(formatearId(456));

// SOLUCIÓN 6: Enums
enum DiaSemana {
    Lunes = "LUNES",
    Martes = "MARTES",
    Miercoles = "MIÉRCOLES",
    Jueves = "JUEVES",
    Viernes = "VIERNES",
    Sabado = "SÁBADO",
    Domingo = "DOMINGO"
}

let diaActual: DiaSemana = DiaSemana.Lunes;

console.log("\n6. Enums:");
console.log("Día actual:", diaActual);

// SOLUCIÓN 7: Interfaces
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    enStock?: boolean;
}

let producto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    categoria: "Electrónicos",
    enStock: true
};

console.log("\n7. Interfaces:");
console.log("Producto:", producto);

// SOLUCIÓN 8: Type Aliases
type Coordenada = {
    x: number;
    y: number;
};

type Estado = "pendiente" | "procesando" | "completado";

let punto: Coordenada = { x: 10, y: 20 };
let estadoActual: Estado = "pendiente";

console.log("\n8. Type Aliases:");
console.log("Punto:", punto);
console.log("Estado actual:", estadoActual);

// SOLUCIÓN 9: Función con parámetros opcionales
function crearPerfil(nombre: string, email?: string, telefono?: string): string {
    let perfil = `Perfil: ${nombre}`;
    if (email) {
        perfil += `, Email: ${email}`;
    }
    if (telefono) {
        perfil += `, Teléfono: ${telefono}`;
    }
    return perfil;
}

console.log("\n9. Parámetros opcionales:");
console.log(crearPerfil("Ana García"));
console.log(crearPerfil("Luis Martín", "luis@email.com"));
console.log(crearPerfil("María López", "maria@email.com", "123-456-789"));

// SOLUCIÓN 10: Type Assertions
let dato: any = "123";
let resultado: number = (dato as number) + 10;

console.log("\n10. Type Assertions:");
console.log("Resultado:", resultado);

console.log("\n¡Ejercicios completados!");
console.log("💡 Tip: Usa 'tsc --noEmit' para verificar tipos sin compilar");

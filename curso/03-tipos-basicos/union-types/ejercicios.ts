// ========================================
// EJERCICIOS - UNION TYPES EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Union Types básicos
// ========================================
// Crea una variable 'identificador' que pueda ser string o number
// Asigna diferentes valores y muestra el tipo usando typeof
// Crea una función 'formatearId' que reciba un identificador y retorne un string

// TODO: Escribe tu código aquí
// let identificador: 
// console.log("String:", typeof identificador);
// identificador = 
// console.log("Number:", typeof identificador);

// function formatearId(id: string | number): string {
//     // Tu código aquí
// }

// EJERCICIO 2: Type guards
// ========================================
// Crea una función 'procesarValor' que reciba un parámetro que puede ser string, number o boolean
// Usa type guards para procesar cada tipo de manera diferente:
// - String: convertir a mayúsculas
// - Number: multiplicar por 2
// - Boolean: invertir el valor

// TODO: Escribe tu código aquí
// function procesarValor(valor: string | number | boolean): string | number | boolean {
//     // Tu código aquí
// }

// EJERCICIO 3: Union types con null/undefined
// ========================================
// Crea una función 'obtenerNombre' que retorne string | null
// La función debe retornar un nombre aleatorio o null
// Crea una función 'procesarNombre' que reciba string | null y maneje ambos casos

// TODO: Escribe tu código aquí
// function obtenerNombre(): string | null {
//     // Tu código aquí
// }

// function procesarNombre(nombre: string | null): string {
//     // Tu código aquí
// }

// EJERCICIO 4: Union types con arrays
// ========================================
// Crea una función 'procesarArray' que reciba un array que puede contener strings o numbers
// La función debe retornar la suma si todos son numbers, o concatenar si todos son strings
// Si es mixto, debe retornar "Array mixto no soportado"

// TODO: Escribe tu código aquí
// function procesarArray(array: (string | number)[]): string | number {
//     // Tu código aquí
// }

// EJERCICIO 5: Discriminated unions
// ========================================
// Crea un tipo 'Respuesta' que sea una discriminated union:
// - { tipo: "exito", datos: any }
// - { tipo: "error", mensaje: string }
// Crea una función 'procesarRespuesta' que maneje ambos casos

// TODO: Escribe tu código aquí
// type Respuesta = 
//     | { tipo: "exito"; datos: any }
//     | { tipo: "error"; mensaje: string };

// function procesarRespuesta(respuesta: Respuesta): string {
//     // Tu código aquí
// }

// EJERCICIO 6: Union types con objetos
// ========================================
// Crea interfaces 'Estudiante' y 'Profesor' con propiedades diferentes
// Crea un union type 'Persona' que pueda ser Estudiante o Profesor
// Crea una función 'obtenerInfo' que reciba Persona y retorne información específica

// TODO: Escribe tu código aquí
// interface Estudiante {
//     // Tu código aquí
// }

// interface Profesor {
//     // Tu código aquí
// }

// type Persona = Estudiante | Profesor;

// function obtenerInfo(persona: Persona): string {
//     // Tu código aquí
// }

// EJERCICIO 7: Literal types con union
// ========================================
// Crea un tipo 'Estado' con valores literales: "pendiente", "procesando", "completado", "error"
// Crea un tipo 'Prioridad' con valores: "baja", "media", "alta"
// Crea una interfaz 'Tarea' que use estos tipos

// TODO: Escribe tu código aquí
// type Estado = 
// type Prioridad = 

// interface Tarea {
//     // Tu código aquí
// }

// EJERCICIO 8: Función con retorno union type
// ========================================
// Crea una función 'buscarUsuario' que reciba un id (string | number) y un array de usuarios
// La función debe retornar el usuario encontrado o null si no existe
// Crea una función 'validarUsuario' que reciba el resultado y valide si es válido

// TODO: Escribe tu código aquí
// interface Usuario {
//     id: string | number;
//     nombre: string;
//     email: string;
// }

// function buscarUsuario(id: string | number, usuarios: Usuario[]): Usuario | null {
//     // Tu código aquí
// }

// function validarUsuario(usuario: Usuario | null): boolean {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Union Types básicos
let identificador: string | number = "user123";
console.log("String:", typeof identificador);
identificador = 456;
console.log("Number:", typeof identificador);

function formatearId(id: string | number): string {
    return `ID: ${id}`;
}

console.log("\n1. Union Types básicos:");
console.log("Formatear string:", formatearId("abc123"));
console.log("Formatear number:", formatearId(789));

// SOLUCIÓN 2: Type guards
function procesarValor(valor: string | number | boolean): string | number | boolean {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    } else if (typeof valor === 'number') {
        return valor * 2;
    } else {
        return !valor;
    }
}

console.log("\n2. Type guards:");
console.log("Procesar string:", procesarValor("hola"));
console.log("Procesar number:", procesarValor(5));
console.log("Procesar boolean:", procesarValor(true));

// SOLUCIÓN 3: Union types con null/undefined
function obtenerNombre(): string | null {
    return Math.random() > 0.5 ? "Juan" : null;
}

function procesarNombre(nombre: string | null): string {
    if (nombre === null) {
        return "Nombre no disponible";
    } else {
        return `Hola, ${nombre}`;
    }
}

console.log("\n3. Union types con null/undefined:");
let nombre = obtenerNombre();
console.log("Nombre obtenido:", nombre);
console.log("Procesar nombre:", procesarNombre(nombre));

// SOLUCIÓN 4: Union types con arrays
function procesarArray(array: (string | number)[]): string | number {
    // Verificar si todos son números
    if (array.every(item => typeof item === 'number')) {
        return array.reduce((sum, item) => sum + (item as number), 0);
    }
    // Verificar si todos son strings
    else if (array.every(item => typeof item === 'string')) {
        return array.join('');
    }
    // Array mixto
    else {
        return "Array mixto no soportado";
    }
}

console.log("\n4. Union types con arrays:");
console.log("Array de números:", procesarArray([1, 2, 3, 4, 5]));
console.log("Array de strings:", procesarArray(["Hola", " ", "Mundo"]));
console.log("Array mixto:", procesarArray([1, "texto", 3]));

// SOLUCIÓN 5: Discriminated unions
type Respuesta = 
    | { tipo: "exito"; datos: any }
    | { tipo: "error"; mensaje: string };

function procesarRespuesta(respuesta: Respuesta): string {
    switch (respuesta.tipo) {
        case "exito":
            return `Éxito: ${JSON.stringify(respuesta.datos)}`;
        case "error":
            return `Error: ${respuesta.mensaje}`;
    }
}

console.log("\n5. Discriminated unions:");
let respuestaExito: Respuesta = { tipo: "exito", datos: { id: 1, nombre: "test" } };
let respuestaError: Respuesta = { tipo: "error", mensaje: "Algo salió mal" };

console.log("Respuesta éxito:", procesarRespuesta(respuestaExito));
console.log("Respuesta error:", procesarRespuesta(respuestaError));

// SOLUCIÓN 6: Union types con objetos
interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
}

interface Profesor {
    nombre: string;
    edad: number;
    materia: string;
}

type Persona = Estudiante | Profesor;

function obtenerInfo(persona: Persona): string {
    if ('curso' in persona) {
        // Es Estudiante
        return `Estudiante: ${persona.nombre}, Curso: ${persona.curso}`;
    } else {
        // Es Profesor
        return `Profesor: ${persona.nombre}, Materia: ${persona.materia}`;
    }
}

console.log("\n6. Union types con objetos:");
let estudiante: Estudiante = { nombre: "Ana", edad: 20, curso: "Informática" };
let profesor: Profesor = { nombre: "Luis", edad: 35, materia: "Matemáticas" };

console.log("Info estudiante:", obtenerInfo(estudiante));
console.log("Info profesor:", obtenerInfo(profesor));

// SOLUCIÓN 7: Literal types con union
type Estado = "pendiente" | "procesando" | "completado" | "error";
type Prioridad = "baja" | "media" | "alta";

interface Tarea {
    id: number;
    titulo: string;
    estado: Estado;
    prioridad: Prioridad;
    descripcion?: string;
}

console.log("\n7. Literal types con union:");
let tarea: Tarea = {
    id: 1,
    titulo: "Implementar login",
    estado: "pendiente",
    prioridad: "alta",
    descripcion: "Crear sistema de autenticación"
};

console.log("Tarea:", tarea);

// SOLUCIÓN 8: Función con retorno union type
interface Usuario {
    id: string | number;
    nombre: string;
    email: string;
}

function buscarUsuario(id: string | number, usuarios: Usuario[]): Usuario | null {
    return usuarios.find(usuario => usuario.id === id) || null;
}

function validarUsuario(usuario: Usuario | null): boolean {
    return usuario !== null && 
           typeof usuario.nombre === 'string' && 
           usuario.nombre.length > 0 &&
           typeof usuario.email === 'string' &&
           usuario.email.includes('@');
}

console.log("\n8. Función con retorno union type:");
let usuarios: Usuario[] = [
    { id: 1, nombre: "Ana", email: "ana@email.com" },
    { id: "user2", nombre: "Luis", email: "luis@email.com" },
    { id: 3, nombre: "María", email: "maria@email.com" }
];

let usuarioEncontrado = buscarUsuario(1, usuarios);
console.log("Usuario encontrado:", usuarioEncontrado);
console.log("¿Usuario válido?", validarUsuario(usuarioEncontrado));

let usuarioNoEncontrado = buscarUsuario(999, usuarios);
console.log("Usuario no encontrado:", usuarioNoEncontrado);
console.log("¿Usuario válido?", validarUsuario(usuarioNoEncontrado));

console.log("\n¡Ejercicios de Union Types completados!");

// ========================================
// EJERCICIOS - TIPO ANY EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Uso básico de any
// ========================================
// Crea una variable 'datos' de tipo any y asígnale diferentes tipos de valores:
// - Un string
// - Un número
// - Un boolean
// - Un objeto
// - Un array
// Muestra el tipo de cada valor usando typeof

// TODO: Escribe tu código aquí
// let datos: any = 
// console.log("String:", typeof datos);
// datos = 
// console.log("Number:", typeof datos);
// datos = 
// console.log("Boolean:", typeof datos);
// datos = 
// console.log("Object:", typeof datos);
// datos = 
// console.log("Array:", typeof datos);

// EJERCICIO 2: Acceso a propiedades con any
// ========================================
// Crea un objeto 'usuario' de tipo any con las propiedades: nombre, edad, email
// Accede a cada propiedad y también intenta acceder a una propiedad que no existe
// Muestra los resultados

// TODO: Escribe tu código aquí
// let usuario: any = 
// console.log("Nombre:", usuario.nombre);
// console.log("Edad:", usuario.edad);
// console.log("Email:", usuario.email);
// console.log("Propiedad inexistente:", usuario.telefono);

// EJERCICIO 3: Llamadas a métodos con any
// ========================================
// Crea una variable 'valor' de tipo any y asígnale un string
// Llama a los métodos toUpperCase(), length, charAt(0)
// Luego cambia el valor a un array y llama a push(), length, join('-')
// Muestra los resultados

// TODO: Escribe tu código aquí
// let valor: any = 
// console.log("toUpperCase():", valor.toUpperCase());
// console.log("length:", valor.length);
// console.log("charAt(0):", valor.charAt(0));
// valor = 
// console.log("push(4):", valor.push(4));
// console.log("length:", valor.length);
// console.log("join('-'):", valor.join('-'));

// EJERCICIO 4: Problemas con any
// ========================================
// Crea una función 'procesarDatos' que reciba un parámetro de tipo any
// La función debe intentar sumar todos los elementos si es un array de números
// Si no es un array de números, debe retornar "No es un array de números"
// Prueba con diferentes tipos de datos

// TODO: Escribe tu código aquí
// function procesarDatos(datos: any): string | number {
//     // Tu código aquí
// }

// EJERCICIO 5: Type guards con any
// ========================================
// Crea funciones type guard para verificar tipos:
// - esString(valor: any): valor is string
// - esNumber(valor: any): valor is number
// - esArray(valor: any): valor is any[]
// - esObject(valor: any): valor is object
// Prueba cada función con diferentes valores

// TODO: Escribe tu código aquí
// function esString(valor: any): valor is string {
//     // Tu código aquí
// }

// function esNumber(valor: any): valor is number {
//     // Tu código aquí
// }

// function esArray(valor: any): valor is any[] {
//     // Tu código aquí
// }

// function esObject(valor: any): valor is object {
//     // Tu código aquí
// }

// EJERCICIO 6: Alternativas a any
// ========================================
// Crea una función 'procesarValor' que reciba un parámetro de tipo unknown
// La función debe verificar el tipo y procesarlo de manera segura:
// - Si es string: retornar en mayúsculas
// - Si es number: retornar el doble
// - Si es boolean: retornar el opuesto
// - Si es array: retornar la longitud
// - Si es object: retornar las claves como string
// - Si es otro tipo: retornar "Tipo no soportado"

// TODO: Escribe tu código aquí
// function procesarValor(valor: unknown): string | number {
//     // Tu código aquí
// }

// EJERCICIO 7: Migración gradual
// ========================================
// Crea un objeto 'datosLegados' de tipo any con la siguiente estructura:
// {
//   configuracion: { servidor: "localhost", puerto: 3000 },
//   usuarios: [{ nombre: "admin", activo: true }]
// }
// Luego crea interfaces para tipar gradualmente este objeto

// TODO: Escribe tu código aquí
// let datosLegados: any = 
// 
// // Interfaces para migración gradual
// interface Configuracion {
//     // Tu código aquí
// }
// 
// interface Usuario {
//     // Tu código aquí
// }
// 
// interface DatosLegados {
//     // Tu código aquí
// }

// EJERCICIO 8: Validación de datos
// ========================================
// Crea una función 'validarDatos' que reciba un parámetro de tipo any
// La función debe validar si el parámetro tiene la estructura:
// { id: number, nombre: string, activo: boolean }
// Si es válido, retornar true, si no, retornar false

// TODO: Escribe tu código aquí
// function validarDatos(datos: any): boolean {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Uso básico de any
let datos: any = "Hola Mundo";
console.log("String:", typeof datos);
datos = 42;
console.log("Number:", typeof datos);
datos = true;
console.log("Boolean:", typeof datos);
datos = { nombre: "Juan", edad: 25 };
console.log("Object:", typeof datos);
datos = [1, 2, 3, 4, 5];
console.log("Array:", typeof datos);

// SOLUCIÓN 2: Acceso a propiedades con any
let usuario: any = {
    nombre: "María García",
    edad: 28,
    email: "maria@email.com"
};

console.log("\n2. Acceso a propiedades:");
console.log("Nombre:", usuario.nombre);
console.log("Edad:", usuario.edad);
console.log("Email:", usuario.email);
console.log("Propiedad inexistente:", usuario.telefono);

// SOLUCIÓN 3: Llamadas a métodos con any
let valor: any = "Hola TypeScript";
console.log("\n3. Llamadas a métodos:");
console.log("toUpperCase():", valor.toUpperCase());
console.log("length:", valor.length);
console.log("charAt(0):", valor.charAt(0));

valor = [1, 2, 3];
console.log("push(4):", valor.push(4));
console.log("Array después de push:", valor);
console.log("length:", valor.length);
console.log("join('-'):", valor.join('-'));

// SOLUCIÓN 4: Problemas con any
function procesarDatos(datos: any): string | number {
    if (Array.isArray(datos)) {
        // Verificar si todos los elementos son números
        if (datos.every((item: any) => typeof item === 'number')) {
            return datos.reduce((sum: number, num: number) => sum + num, 0);
        }
    }
    return "No es un array de números";
}

console.log("\n4. Problemas con any:");
console.log("Array de números:", procesarDatos([1, 2, 3, 4, 5]));
console.log("Array mixto:", procesarDatos([1, "2", 3]));
console.log("String:", procesarDatos("texto"));
console.log("Número:", procesarDatos(42));

// SOLUCIÓN 5: Type guards con any
function esString(valor: any): valor is string {
    return typeof valor === 'string';
}

function esNumber(valor: any): valor is number {
    return typeof valor === 'number';
}

function esArray(valor: any): valor is any[] {
    return Array.isArray(valor);
}

function esObject(valor: any): valor is object {
    return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

console.log("\n5. Type guards:");
console.log("¿'texto' es string?", esString("texto"));
console.log("¿42 es string?", esString(42));
console.log("¿42 es number?", esNumber(42));
console.log("¿[1,2,3] es array?", esArray([1, 2, 3]));
console.log("¿{a:1} es object?", esObject({ a: 1 }));

// SOLUCIÓN 6: Alternativas a any
function procesarValor(valor: unknown): string | number | boolean {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    } else if (typeof valor === 'number') {
        return valor * 2;
    } else if (typeof valor === 'boolean') {
        return !valor;
    } else if (Array.isArray(valor)) {
        return valor.length;
    } else if (typeof valor === 'object' && valor !== null) {
        return Object.keys(valor).join(', ');
    } else {
        return "Tipo no soportado";
    }
}

console.log("\n6. Alternativas a any:");
console.log("String 'hola':", procesarValor("hola"));
console.log("Number 5:", procesarValor(5));
console.log("Boolean true:", procesarValor(true));
console.log("Array [1,2,3]:", procesarValor([1, 2, 3]));
console.log("Object {a:1}:", procesarValor({ a: 1 }));
console.log("Null:", procesarValor(null));

// SOLUCIÓN 7: Migración gradual
let datosLegados: any = {
    configuracion: { servidor: "localhost", puerto: 3000 },
    usuarios: [{ nombre: "admin", activo: true }]
};

// Interfaces para migración gradual
interface Configuracion {
    servidor: string;
    puerto: number;
}

interface Usuario {
    nombre: string;
    activo: boolean;
}

interface DatosLegados {
    configuracion: Configuracion;
    usuarios: Usuario[];
}

console.log("\n7. Migración gradual:");
console.log("Datos legados:", datosLegados);

// Ahora con tipos específicos
let datosTipados: DatosLegados = {
    configuracion: { servidor: "localhost", puerto: 3000 },
    usuarios: [{ nombre: "admin", activo: true }]
};

console.log("Datos tipados:", datosTipados);

// SOLUCIÓN 8: Validación de datos
function validarDatos(datos: any): boolean {
    return (
        typeof datos === 'object' &&
        datos !== null &&
        typeof datos.id === 'number' &&
        typeof datos.nombre === 'string' &&
        typeof datos.activo === 'boolean'
    );
}

console.log("\n8. Validación de datos:");
console.log("Datos válidos:", validarDatos({ id: 1, nombre: "Juan", activo: true }));
console.log("Datos inválidos (falta id):", validarDatos({ nombre: "Juan", activo: true }));
console.log("Datos inválidos (id string):", validarDatos({ id: "1", nombre: "Juan", activo: true }));
console.log("Datos inválidos (null):", validarDatos(null));
console.log("Datos inválidos (string):", validarDatos("texto"));

console.log("\n¡Ejercicios de any completados!");
console.log("⚠️  Recuerda: any debe usarse con precaución y solo cuando sea necesario");

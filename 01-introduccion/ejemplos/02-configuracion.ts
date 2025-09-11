// Ejemplo de configuración y compilación de TypeScript

// 1. Tipos básicos
let nombre: string = "TypeScript";
let version: number = 4.9;
let esActivo: boolean = true;

// 2. Arrays
let lenguajes: string[] = ["JavaScript", "TypeScript", "Python"];
let versiones: number[] = [1, 2, 3, 4];

// 3. Objetos con tipos explícitos
let configuracion: {
    puerto: number;
    host: string;
    ssl: boolean;
} = {
    puerto: 3000,
    host: "localhost",
    ssl: false
};

// 4. Funciones con tipos
function calcularArea(ancho: number, alto: number): number {
    return ancho * alto;
}

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

// 5. Parámetros opcionales
function crearUsuario(nombre: string, email?: string): void {
    console.log(`Usuario: ${nombre}`);
    if (email) {
        console.log(`Email: ${email}`);
    }
}

// 6. Parámetros con valores por defecto
function saludar(nombre: string = "Usuario"): string {
    return `Hola, ${nombre}!`;
}

// 7. Ejemplo de error que TypeScript detecta:
// function sumar(a: number, b: number): number {
//     return a + b;
// }
// 
// let resultado = sumar("5", 10); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'

// 8. Ejemplo de uso correcto:
function sumar(a: number, b: number): number {
    return a + b;
}

let resultado = sumar(5, 10); // ✅ Correcto
console.log("Resultado:", resultado);

// 9. Ejemplo de interfaz básica
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
}

let producto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    disponible: true
};

console.log("Producto:", producto);

// 10. Ejemplo de enum
enum EstadoPedido {
    Pendiente = "pendiente",
    Procesando = "procesando",
    Enviado = "enviado",
    Entregado = "entregado"
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
console.log("Estado del pedido:", estado);

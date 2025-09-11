// Solución del Ejercicio 3: Comparación JavaScript vs TypeScript

// Versión TypeScript con tipos explícitos
function calcularTotal(precio: number, cantidad: number, descuento: number): number {
    let subtotal: number = precio * cantidad;
    let total: number = subtotal - (subtotal * descuento);
    return total;
}

let resultado: number = calcularTotal(100, 2, 0.1);
console.log("Total calculado:", resultado);

// Ejemplo de cómo TypeScript previene errores:

// En JavaScript esto funcionaría pero daría resultados incorrectos:
// calcularTotal("100", 2, 0.1); // "100" se convertiría a número, pero es propenso a errores

// En TypeScript esto genera un error de compilación:
// let resultadoIncorrecto = calcularTotal("100", 2, 0.1); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Versión mejorada con validaciones adicionales:
function calcularTotalSeguro(precio: number, cantidad: number, descuento: number): number {
    // Validaciones que TypeScript nos ayuda a implementar
    if (precio < 0 || cantidad < 0 || descuento < 0 || descuento > 1) {
        throw new Error("Parámetros inválidos");
    }
    
    let subtotal: number = precio * cantidad;
    let total: number = subtotal - (subtotal * descuento);
    return Math.round(total * 100) / 100; // Redondear a 2 decimales
}

// Ejemplo de uso con diferentes tipos de datos:
interface Producto {
    nombre: string;
    precio: number;
    stock: number;
}

function calcularTotalProducto(producto: Producto, cantidad: number, descuento: number = 0): number {
    if (cantidad > producto.stock) {
        throw new Error("Cantidad excede el stock disponible");
    }
    
    return calcularTotalSeguro(producto.precio, cantidad, descuento);
}

// Uso de la función mejorada:
let laptop: Producto = {
    nombre: "Laptop Gaming",
    precio: 999.99,
    stock: 5
};

let totalLaptop = calcularTotalProducto(laptop, 2, 0.15); // 15% de descuento
console.log(`Total para ${laptop.nombre}: $${totalLaptop}`);

// Ejemplo de función que demuestra la ventaja del tipado:
function procesarPedido(productos: Producto[], descuento: number): { total: number; productos: number } {
    let total: number = 0;
    let cantidadProductos: number = 0;
    
    for (let producto of productos) {
        total += calcularTotalProducto(producto, 1, descuento);
        cantidadProductos++;
    }
    
    return { total, productos: cantidadProductos };
}

// Uso de la función de procesamiento:
let productos: Producto[] = [
    { nombre: "Mouse", precio: 25.99, stock: 10 },
    { nombre: "Teclado", precio: 75.50, stock: 8 },
    { nombre: "Monitor", precio: 299.99, stock: 3 }
];

let pedido = procesarPedido(productos, 0.1); // 10% de descuento
console.log(`Pedido procesado: ${pedido.productos} productos, total: $${pedido.total.toFixed(2)}`);

// Ventajas observadas:
// 1. Detección de errores en tiempo de compilación
// 2. Autocompletado inteligente
// 3. Refactoring seguro
// 4. Documentación automática a través de tipos
// 5. Mejor mantenibilidad del código

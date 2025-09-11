// Solución del Ejercicio 1: Tipos Primitivos y Arrays

// 1. Variables con tipos explícitos
let nombre: string = "Juan Pérez";
let edad: number = 28;
let esEstudiante: boolean = true;
let hobbies: string[] = ["programación", "lectura", "música", "deportes"];
let calificaciones: number[] = [8.5, 9.0, 7.5, 8.8, 9.2];

// 2. Tupla para coordenada GPS
let coordenada: [number, number] = [40.4168, -3.7038]; // Madrid, España

// 3. Tupla para información de producto
let producto: [string, number, boolean] = ["Laptop Gaming", 1299.99, true];

// 4. Función para calcular promedio de calificaciones
function calcularPromedio(calificaciones: number[]): number {
    if (calificaciones.length === 0) {
        return 0;
    }
    
    let suma: number = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return suma / calificaciones.length;
}

// 5. Función para mostrar hobbies en mayúsculas
function mostrarHobbiesMayusculas(hobbies: string[]): string[] {
    return hobbies.map(hobby => hobby.toUpperCase());
}

// 6. Función para verificar si un producto está disponible
function verificarDisponibilidad(producto: [string, number, boolean]): string {
    const [nombre, precio, disponible] = producto;
    
    if (disponible) {
        return `El producto "${nombre}" está disponible por $${precio}`;
    } else {
        return `El producto "${nombre}" no está disponible`;
    }
}

// 7. Función para mostrar información de coordenada
function mostrarCoordenada(coordenada: [number, number]): string {
    const [latitud, longitud] = coordenada;
    return `Coordenadas: Latitud ${latitud}, Longitud ${longitud}`;
}

// Ejemplos de uso
console.log("=== INFORMACIÓN PERSONAL ===");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("Hobbies:", hobbies);
console.log("Calificaciones:", calificaciones);

console.log("\n=== CÁLCULOS ===");
console.log("Promedio de calificaciones:", calcularPromedio(calificaciones).toFixed(2));
console.log("Hobbies en mayúsculas:", mostrarHobbiesMayusculas(hobbies));

console.log("\n=== COORDENADA ===");
console.log(mostrarCoordenada(coordenada));

console.log("\n=== PRODUCTO ===");
console.log(verificarDisponibilidad(producto));

// Ejemplo adicional: Función que trabaja con múltiples tipos
function procesarDatos(
    nombre: string, 
    edad: number, 
    hobbies: string[], 
    calificaciones: number[]
): void {
    console.log(`\n=== PROCESAMIENTO DE DATOS ===`);
    console.log(`Usuario: ${nombre} (${edad} años)`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
    console.log(`Promedio: ${calcularPromedio(calificaciones).toFixed(2)}`);
    
    // Análisis de calificaciones
    let calificacionMaxima: number = Math.max(...calificaciones);
    let calificacionMinima: number = Math.min(...calificaciones);
    
    console.log(`Calificación más alta: ${calificacionMaxima}`);
    console.log(`Calificación más baja: ${calificacionMinima}`);
}

// Uso de la función de procesamiento
procesarDatos(nombre, edad, hobbies, calificaciones);

// Ejemplo adicional: Trabajando con tuplas de manera más avanzada
function crearProducto(nombre: string, precio: number, disponible: boolean): [string, number, boolean] {
    return [nombre, precio, disponible];
}

function actualizarPrecio(producto: [string, number, boolean], nuevoPrecio: number): [string, number, boolean] {
    const [nombre, , disponible] = producto;
    return [nombre, nuevoPrecio, disponible];
}

// Crear y actualizar productos
let nuevoProducto = crearProducto("Smartphone", 599.99, true);
console.log("\n=== GESTIÓN DE PRODUCTOS ===");
console.log("Producto original:", verificarDisponibilidad(nuevoProducto));

let productoActualizado = actualizarPrecio(nuevoProducto, 549.99);
console.log("Producto actualizado:", verificarDisponibilidad(productoActualizado));

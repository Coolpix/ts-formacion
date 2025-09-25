// ========================================
// EJEMPLOS - ARRAYS EN TYPESCRIPT
// ========================================

// 1. DECLARACIÓN BÁSICA DE ARRAYS
// ========================================

// Arrays con tipos específicos
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Luis", "María", "Pedro"];
let activos: boolean[] = [true, false, true, false];

// Sintaxis alternativa con Array<T>
let colores: Array<string> = ["rojo", "verde", "azul", "amarillo"];
let temperaturas: Array<number> = [20, 25, 30, 15, 22];

console.log("=== DECLARACIÓN BÁSICA ===");
console.log("Números:", numeros);
console.log("Nombres:", nombres);
console.log("Activos:", activos);
console.log("Colores:", colores);
console.log("Temperaturas:", temperaturas);

// 2. ARRAYS MULTIDIMENSIONALES
// ========================================

// Array bidimensional
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array tridimensional
let cubo: number[][][] = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];

console.log("\n=== ARRAYS MULTIDIMENSIONALES ===");
console.log("Matriz:", matriz);
console.log("Elemento [1][1]:", matriz[1][1]);
console.log("Cubo:", cubo);
console.log("Elemento [0][1][0]:", cubo[0][1][0]);

// 3. ARRAYS DE OBJETOS
// ========================================

interface Persona {
    nombre: string;
    edad: number;
    activo: boolean;
}

let personas: Persona[] = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "María", edad: 30, activo: false },
    { nombre: "Pedro", edad: 35, activo: true },
    { nombre: "Ana", edad: 28, activo: true }
];

console.log("\n=== ARRAYS DE OBJETOS ===");
console.log("Personas:", personas);
console.log("Primera persona:", personas[0]);

// 4. ARRAYS CON UNION TYPES
// ========================================

// Array que puede contener strings o números
let mixto: (string | number)[] = ["texto", 123, "otro texto", 456];

// Array que puede contener diferentes tipos
let elementos: (string | number | boolean)[] = ["hola", 42, true, "mundo", false, 100];

console.log("\n=== UNION TYPES ===");
console.log("Array mixto:", mixto);
console.log("Elementos variados:", elementos);

// 5. ARRAYS READONLY
// ========================================

// Array de solo lectura
let coloresReadonly: readonly string[] = ["rojo", "verde", "azul"];
// coloresReadonly.push("amarillo"); // Error: no se puede modificar

// Sintaxis alternativa
let coloresReadonly2: ReadonlyArray<string> = ["amarillo", "naranja", "rosa"];

console.log("\n=== ARRAYS READONLY ===");
console.log("Colores readonly:", coloresReadonly);
console.log("Colores readonly 2:", coloresReadonly2);

// 6. TUPLAS (TUPLES)
// ========================================

// Tupla básica
let coordenada: [number, number] = [10, 20];
let punto3D: [number, number, number] = [1, 2, 3];

// Tupla con diferentes tipos
let persona: [string, number, boolean] = ["Juan", 25, true];
let configuracion: [string, number, boolean] = ["servidor", 8080, true];

// Tupla con elementos opcionales
let configuracionOpcional: [string, number?] = ["servidor"];
let configuracionCompleta: [string, number?] = ["servidor", 3000];

// Tupla con elementos rest
let numeros: [string, ...number[]] = ["suma", 1, 2, 3, 4, 5];
let datos: [string, string, ...number[]] = ["usuario", "admin", 1, 2, 3];

console.log("\n=== TUPLAS ===");
console.log("Coordenada:", coordenada);
console.log("Punto 3D:", punto3D);
console.log("Persona:", persona);
console.log("Configuración opcional:", configuracionOpcional);
console.log("Configuración completa:", configuracionCompleta);
console.log("Números:", numeros);
console.log("Datos:", datos);

// 7. MÉTODOS BÁSICOS DE ARRAY
// ========================================

let numerosArray: number[] = [1, 2, 3, 4, 5];

// push - añadir al final
numerosArray.push(6);
console.log("Después de push(6):", numerosArray);

// pop - eliminar del final
let ultimo = numerosArray.pop();
console.log("Último elemento:", ultimo);
console.log("Después de pop:", numerosArray);

// shift - eliminar del inicio
let primero = numerosArray.shift();
console.log("Primer elemento:", primero);
console.log("Después de shift:", numerosArray);

// unshift - añadir al inicio
numerosArray.unshift(0);
console.log("Después de unshift(0):", numerosArray);

// length - longitud del array
let longitud = numerosArray.length;
console.log("Longitud:", longitud);

// 8. MÉTODOS DE TRANSFORMACIÓN
// ========================================

let numerosTransformacion: number[] = [1, 2, 3, 4, 5];

// map - transformar elementos
let cuadrados: number[] = numerosTransformacion.map(n => n * n);
let dobles: number[] = numerosTransformacion.map(n => n * 2);

// filter - filtrar elementos
let pares: number[] = numerosTransformacion.filter(n => n % 2 === 0);
let mayoresQue2: number[] = numerosTransformacion.filter(n => n > 2);

// reduce - reducir a un valor
let suma: number = numerosTransformacion.reduce((acc, n) => acc + n, 0);
let producto: number = numerosTransformacion.reduce((acc, n) => acc * n, 1);

console.log("\n=== MÉTODOS DE TRANSFORMACIÓN ===");
console.log("Números originales:", numerosTransformacion);
console.log("Cuadrados:", cuadrados);
console.log("Dobles:", dobles);
console.log("Pares:", pares);
console.log("Mayores que 2:", mayoresQue2);
console.log("Suma:", suma);
console.log("Producto:", producto);

// 9. MÉTODOS DE BÚSQUEDA
// ========================================

let nombresBusqueda: string[] = ["Ana", "Luis", "María", "Pedro", "Ana"];

// find - encontrar primer elemento
let encontrado = nombresBusqueda.find(nombre => nombre.startsWith("M"));
let encontrado2 = nombresBusqueda.find(nombre => nombre.length > 3);

// findIndex - encontrar índice
let indice = nombresBusqueda.findIndex(nombre => nombre === "María");
let indice2 = nombresBusqueda.findIndex(nombre => nombre.length === 3);

// includes - verificar si contiene
let contiene = nombresBusqueda.includes("Ana");
let contiene2 = nombresBusqueda.includes("Juan");

// indexOf - encontrar índice (primera ocurrencia)
let indiceAna = nombresBusqueda.indexOf("Ana");
let indiceJuan = nombresBusqueda.indexOf("Juan");

console.log("\n=== MÉTODOS DE BÚSQUEDA ===");
console.log("Nombres:", nombresBusqueda);
console.log("Encontrado (empieza con M):", encontrado);
console.log("Encontrado (longitud > 3):", encontrado2);
console.log("Índice de María:", indice);
console.log("Índice de nombre de 3 letras:", indice2);
console.log("¿Contiene Ana?", contiene);
console.log("¿Contiene Juan?", contiene2);
console.log("Índice de Ana:", indiceAna);
console.log("Índice de Juan:", indiceJuan);

// 10. DESTRUCTURING DE ARRAYS
// ========================================

let coloresDestructuring: string[] = ["rojo", "verde", "azul"];

// Destructuring básico
let [primero, segundo, tercero] = coloresDestructuring;

// Destructuring con valores por defecto
let [color1, color2, color3 = "amarillo"] = ["rojo", "verde"];

// Destructuring con rest
let [primero2, ...resto] = coloresDestructuring;

// Destructuring ignorando elementos
let [primerColor, , tercerColor] = coloresDestructuring;

console.log("\n=== DESTRUCTURING ===");
console.log("Colores:", coloresDestructuring);
console.log("Primero:", primero, "Segundo:", segundo, "Tercero:", tercero);
console.log("Con valores por defecto:", color1, color2, color3);
console.log("Primero:", primero2, "Resto:", resto);
console.log("Primero y tercero:", primerColor, tercerColor);

// 11. SPREAD OPERATOR
// ========================================

let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

// Combinar arrays
let combinado: number[] = [...array1, ...array2];

// Añadir elementos
let conNuevos: number[] = [...array1, 7, 8, 9];

// Copiar array
let copia: number[] = [...array1];

// Insertar en el medio
let conInsercion: number[] = [...array1, 10, ...array2];

console.log("\n=== SPREAD OPERATOR ===");
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Combinado:", combinado);
console.log("Con nuevos elementos:", conNuevos);
console.log("Copia:", copia);
console.log("Con inserción:", conInsercion);

// 12. ARRAYS GENÉRICOS
// ========================================

// Función genérica para arrays
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

function obtenerUltimo<T>(array: T[]): T | undefined {
    return array[array.length - 1];
}

function invertirArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

// Uso con diferentes tipos
let primerNumero = obtenerPrimero([1, 2, 3]);
let primerString = obtenerPrimero(["a", "b", "c"]);
let ultimoNumero = obtenerUltimo([1, 2, 3]);
let arrayInvertido = invertirArray(["a", "b", "c"]);

console.log("\n=== ARRAYS GENÉRICOS ===");
console.log("Primer número:", primerNumero);
console.log("Primer string:", primerString);
console.log("Último número:", ultimoNumero);
console.log("Array invertido:", arrayInvertido);

// 13. VALIDACIÓN DE ARRAYS
// ========================================

// Función para validar si es array
function esArray(valor: any): valor is any[] {
    return Array.isArray(valor);
}

// Función para validar array de números
function esArrayDeNumeros(valor: any): valor is number[] {
    return Array.isArray(valor) && valor.every(item => typeof item === 'number');
}

// Función para validar array de strings
function esArrayDeStrings(valor: any): valor is string[] {
    return Array.isArray(valor) && valor.every(item => typeof item === 'string');
}

console.log("\n=== VALIDACIÓN DE ARRAYS ===");
console.log("¿[1,2,3] es array?", esArray([1, 2, 3]));
console.log("¿'texto' es array?", esArray("texto"));
console.log("¿[1,2,3] es array de números?", esArrayDeNumeros([1, 2, 3]));
console.log("¿['a','b'] es array de números?", esArrayDeNumeros(["a", "b"]));
console.log("¿['a','b'] es array de strings?", esArrayDeStrings(["a", "b"]));

// 14. EJEMPLOS PRÁCTICOS
// ========================================

// Gestión de inventario
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

let inventario: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 999, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 20 },
    { id: 3, nombre: "Teclado", precio: 75, stock: 3 },
    { id: 4, nombre: "Monitor", precio: 200, stock: 8 }
];

// Filtrar productos con stock bajo
let stockBajo = inventario.filter(p => p.stock < 10);

// Calcular valor total del inventario
let valorTotal = inventario.reduce((total, p) => total + (p.precio * p.stock), 0);

// Obtener productos más caros que 100
let productosCaros = inventario.filter(p => p.precio > 100);

// Calcular precio promedio
let precioPromedio = inventario.reduce((sum, p) => sum + p.precio, 0) / inventario.length;

console.log("\n=== EJEMPLOS PRÁCTICOS ===");
console.log("Inventario:", inventario);
console.log("Stock bajo:", stockBajo);
console.log("Valor total:", valorTotal);
console.log("Productos caros:", productosCaros);
console.log("Precio promedio:", precioPromedio.toFixed(2));

// Procesamiento de datos
let datos: number[] = [10, 20, 30, 40, 50, 15, 25, 35];

// Estadísticas básicas
let promedio = datos.reduce((sum, n) => sum + n, 0) / datos.length;
let maximo = Math.max(...datos);
let minimo = Math.min(...datos);
let sumaTotal = datos.reduce((sum, n) => sum + n, 0);

console.log("\nEstadísticas de datos:", datos);
console.log("Promedio:", promedio.toFixed(2));
console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);
console.log("Suma total:", sumaTotal);

console.log("\n=== FIN DE EJEMPLOS DE ARRAYS ===");

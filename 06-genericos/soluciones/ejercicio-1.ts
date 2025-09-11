// Solución del Ejercicio 1: Funciones Genéricas

// 1. Funciones genéricas básicas
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

function obtenerUltimo<T>(array: T[]): T | undefined {
    return array[array.length - 1];
}

function invertirArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

function eliminarDuplicados<T>(array: T[]): T[] {
    return [...new Set(array)];
}

function combinarArrays<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
}

// 2. Funciones genéricas con restricciones
function obtenerPropiedades<T, K extends keyof T>(objeto: T, claves: K[]): Pick<T, K> {
    const resultado = {} as Pick<T, K>;
    for (const clave of claves) {
        resultado[clave] = objeto[clave];
    }
    return resultado;
}

function actualizarPropiedades<T, K extends keyof T>(objeto: T, actualizaciones: Partial<Pick<T, K>>): T {
    return { ...objeto, ...actualizaciones };
}

function validarTipo<T>(valor: unknown, tipo: string): valor is T {
    return typeof valor === tipo;
}

// 3. Funciones genéricas con tipos condicionales
function procesarValor<T>(valor: T): any {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else if (typeof valor === "number") {
        return (valor * 2) as any;
    } else {
        return valor;
    }
}

function esArray<T>(valor: T): T extends any[] ? true : false {
    return Array.isArray(valor) as any;
}

// 4. Funciones genéricas para arrays
function filtrarArray<T>(array: T[], predicado: (elemento: T) => boolean): T[] {
    return array.filter(predicado);
}

function mapearArray<T, U>(array: T[], transformador: (elemento: T) => U): U[] {
    return array.map(transformador);
}

function reducirArray<T, U>(array: T[], reductor: (acumulador: U, elemento: T) => U, valorInicial: U): U {
    return array.reduce(reductor, valorInicial);
}

function agruparArray<T, K extends string | number | symbol>(array: T[], agrupador: (elemento: T) => K): Record<K, T[]> {
    return array.reduce((grupos, elemento) => {
        const clave = agrupador(elemento);
        if (!grupos[clave]) {
            grupos[clave] = [];
        }
        grupos[clave].push(elemento);
        return grupos;
    }, {} as Record<K, T[]>);
}

// 5. Funciones genéricas adicionales
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

function obtenerElementoAleatorio<T>(array: T[]): T | undefined {
    if (array.length === 0) return undefined;
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

function buscarElemento<T>(array: T[], predicado: (elemento: T) => boolean): T | undefined {
    return array.find(predicado);
}

function contarElementos<T>(array: T[], predicado: (elemento: T) => boolean): number {
    return array.filter(predicado).length;
}

function dividirArray<T>(array: T[], indice: number): [T[], T[]] {
    return [array.slice(0, indice), array.slice(indice)];
}

// Ejemplos de uso
console.log("=== FUNCIONES GENÉRICAS ===\n");

// 1. Uso de funciones genéricas básicas
console.log("=== FUNCIONES BÁSICAS ===");
let numeros = [1, 2, 3, 4, 5];
let textos = ["a", "b", "c", "d", "e"];
let booleans = [true, false, true, false];

console.log("Primer número:", obtenerPrimero(numeros));
console.log("Primer texto:", obtenerPrimero(textos));
console.log("Último número:", obtenerUltimo(numeros));
console.log("Último texto:", obtenerUltimo(textos));
console.log("Array invertido:", invertirArray(numeros));
console.log("Array sin duplicados:", eliminarDuplicados([1, 2, 2, 3, 3, 4]));
console.log("Arrays combinados:", combinarArrays(numeros, [6, 7, 8]));

// 2. Uso de funciones genéricas con restricciones
console.log("\n=== RESTRICCIONES ===");
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};

let propiedadesSeleccionadas = obtenerPropiedades(usuario, ["nombre", "email"]);
console.log("Propiedades seleccionadas:", propiedadesSeleccionadas);

let usuarioActualizado = actualizarPropiedades(usuario, { nombre: "María", activo: false });
console.log("Usuario actualizado:", usuarioActualizado);

console.log("¿Es string?:", validarTipo<string>("hola", "string"));
console.log("¿Es number?:", validarTipo<number>(42, "number"));
console.log("¿Es boolean?:", validarTipo<boolean>(true, "boolean"));

// 3. Uso de funciones genéricas con tipos condicionales
console.log("\n=== TIPOS CONDICIONALES ===");
console.log("Procesar string:", procesarValor("hola"));
console.log("Procesar number:", procesarValor(5));
console.log("Procesar boolean:", procesarValor(true));

console.log("¿Es array?:", esArray([1, 2, 3]));
console.log("¿Es array?:", esArray("hola"));

// 4. Uso de funciones genéricas para arrays
console.log("\n=== FUNCIONES PARA ARRAYS ===");
let numerosParaFiltrar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let textosParaFiltrar = ["hola", "mundo", "typescript", "javascript", "python"];

console.log("Números pares:", filtrarArray(numerosParaFiltrar, n => n % 2 === 0));
console.log("Textos largos:", filtrarArray(textosParaFiltrar, s => s.length > 5));

console.log("Números al cuadrado:", mapearArray(numerosParaFiltrar, n => n * n));
console.log("Textos en mayúsculas:", mapearArray(textosParaFiltrar, s => s.toUpperCase()));

console.log("Suma de números:", reducirArray(numerosParaFiltrar, (acc, n) => acc + n, 0));
console.log("Concatenación de textos:", reducirArray(textosParaFiltrar, (acc, s) => acc + " " + s, ""));

// Agrupar por longitud
let textosParaAgrupar = ["a", "ab", "abc", "abcd", "abcde"];
let gruposPorLongitud = agruparArray(textosParaAgrupar, s => s.length);
console.log("Grupos por longitud:", gruposPorLongitud);

// 5. Uso de funciones genéricas adicionales
console.log("\n=== FUNCIONES ADICIONALES ===");
let arrayCreado = crearArray(1, 2, 3, 4, 5);
console.log("Array creado:", arrayCreado);

let elementoAleatorio = obtenerElementoAleatorio(numeros);
console.log("Elemento aleatorio:", elementoAleatorio);

let elementoEncontrado = buscarElemento(numeros, n => n > 3);
console.log("Elemento encontrado:", elementoEncontrado);

let cantidadPares = contarElementos(numeros, n => n % 2 === 0);
console.log("Cantidad de números pares:", cantidadPares);

let arraysDivididos = dividirArray(numeros, 3);
console.log("Arrays divididos:", arraysDivididos);

// 6. Ejemplos con diferentes tipos
console.log("\n=== EJEMPLOS CON DIFERENTES TIPOS ===");

// Con objetos
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
}

let productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 999.99, categoria: "Electrónicos" },
    { id: 2, nombre: "Mouse", precio: 25.99, categoria: "Accesorios" },
    { id: 3, nombre: "Teclado", precio: 75.99, categoria: "Accesorios" },
    { id: 4, nombre: "Monitor", precio: 299.99, categoria: "Electrónicos" }
];

console.log("Primer producto:", obtenerPrimero(productos));
console.log("Productos caros:", filtrarArray(productos, p => p.precio > 100));
console.log("Nombres de productos:", mapearArray(productos, p => p.nombre));
console.log("Precio total:", reducirArray(productos, (acc, p) => acc + p.precio, 0));

// Agrupar por categoría
let gruposPorCategoria = agruparArray(productos, p => p.categoria);
console.log("Grupos por categoría:", gruposPorCategoria);

// 7. Ejemplos con tipos de unión
console.log("\n=== TIPOS DE UNIÓN ===");
let datosMixtos: (string | number | boolean)[] = ["hola", 42, true, "mundo", 100, false];
console.log("Datos mixtos:", datosMixtos);
console.log("Primer elemento:", obtenerPrimero(datosMixtos));
console.log("Último elemento:", obtenerUltimo(datosMixtos));
console.log("Sin duplicados:", eliminarDuplicados(datosMixtos));

// 8. Ejemplos con arrays anidados
console.log("\n=== ARRAYS ANIDADOS ===");
let arraysAnidados: number[][] = [[1, 2], [3, 4], [5, 6]];
console.log("Arrays anidados:", arraysAnidados);
console.log("Primer array:", obtenerPrimero(arraysAnidados));
console.log("Último array:", obtenerUltimo(arraysAnidados));
console.log("Arrays invertidos:", invertirArray(arraysAnidados));

// 9. Ejemplos con funciones de callback
console.log("\n=== FUNCIONES DE CALLBACK ===");
let numerosParaProcesar = [1, 2, 3, 4, 5];

// Función de transformación personalizada
let transformarNumero = (n: number) => n * n + 1;
console.log("Números transformados:", mapearArray(numerosParaProcesar, transformarNumero));

// Función de filtrado personalizada
let esNumeroImpar = (n: number) => n % 2 === 1;
console.log("Números impares:", filtrarArray(numerosParaProcesar, esNumeroImpar));

// Función de reducción personalizada
let multiplicarNumeros = (acc: number, n: number) => acc * n;
console.log("Producto de números:", reducirArray(numerosParaProcesar, multiplicarNumeros, 1));

// 10. Ejemplos con casos edge
console.log("\n=== CASOS EDGE ===");
console.log("Array vacío - primer elemento:", obtenerPrimero([]));
console.log("Array vacío - último elemento:", obtenerUltimo([]));
console.log("Array vacío - filtrar:", filtrarArray([], n => n > 0));
console.log("Array vacío - mapear:", mapearArray([], n => n * 2));
console.log("Array vacío - reducir:", reducirArray([], (acc, n) => acc + n, 0));

console.log("Array con un elemento:", obtenerPrimero([42]));
console.log("Array con un elemento - último:", obtenerUltimo([42]));
console.log("Array con un elemento - invertir:", invertirArray([42]));

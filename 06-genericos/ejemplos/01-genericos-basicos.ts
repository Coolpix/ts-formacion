// Ejemplos de genéricos básicos en TypeScript

// 1. Funciones genéricas básicas
function identidad<T>(valor: T): T {
    return valor;
}

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

// Uso de funciones genéricas básicas
console.log("=== FUNCIONES GENÉRICAS BÁSICAS ===");
console.log("Identidad number:", identidad<number>(42));
console.log("Identidad string:", identidad<string>("hola"));
console.log("Identidad boolean:", identidad<boolean>(true));

let numeros = [1, 2, 3, 4, 5];
let textos = ["a", "b", "c", "d", "e"];
let booleans = [true, false, true, false];

console.log("Primer número:", obtenerPrimero(numeros));
console.log("Primer texto:", obtenerPrimero(textos));
console.log("Último número:", obtenerUltimo(numeros));
console.log("Último texto:", obtenerUltimo(textos));
console.log("Array invertido:", invertirArray(numeros));
console.log("Array sin duplicados:", eliminarDuplicados([1, 2, 2, 3, 3, 4]));

// 2. Funciones genéricas con múltiples parámetros de tipo
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

function crearPar<T, U>(primero: T, segundo: U): { primero: T; segundo: U } {
    return { primero, segundo };
}

function intercambiar<T, U>(par: [T, U]): [U, T] {
    return [par[1], par[0]];
}

function mapear<T, U>(array: T[], transformador: (item: T) => U): U[] {
    return array.map(transformador);
}

function filtrar<T>(array: T[], predicado: (item: T) => boolean): T[] {
    return array.filter(predicado);
}

function reducir<T, U>(array: T[], reductor: (acumulador: U, item: T) => U, valorInicial: U): U {
    return array.reduce(reductor, valorInicial);
}

// Uso de funciones genéricas con múltiples parámetros
console.log("\n=== MÚLTIPLES PARÁMETROS DE TIPO ===");
console.log("Combinar:", combinar("hola", 42));
console.log("Crear par:", crearPar(true, "mundo"));
console.log("Intercambiar:", intercambiar(["a", 1]));

let numerosParaMapear = [1, 2, 3, 4, 5];
let textosParaMapear = ["hola", "mundo", "typescript"];

console.log("Mapear números:", mapear(numerosParaMapear, n => n * 2));
console.log("Mapear textos:", mapear(textosParaMapear, s => s.toUpperCase()));
console.log("Filtrar números pares:", filtrar(numerosParaMapear, n => n % 2 === 0));
console.log("Filtrar textos largos:", filtrar(textosParaMapear, s => s.length > 4));
console.log("Reducir números:", reducir(numerosParaMapear, (acc, n) => acc + n, 0));
console.log("Reducir textos:", reducir(textosParaMapear, (acc, s) => acc + s, ""));

// 3. Funciones genéricas con restricciones
interface Longitud {
    length: number;
}

function obtenerLongitud<T extends Longitud>(item: T): number {
    return item.length;
}

function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

function establecerPropiedad<T, K extends keyof T>(objeto: T, clave: K, valor: T[K]): void {
    objeto[clave] = valor;
}

function crearObjeto<T extends Record<string, any>>(datos: T): T {
    return { ...datos };
}

// Uso de funciones genéricas con restricciones
console.log("\n=== RESTRICCIONES ===");
console.log("Longitud de string:", obtenerLongitud("hola mundo"));
console.log("Longitud de array:", obtenerLongitud([1, 2, 3, 4, 5]));

let usuario = { nombre: "Juan", edad: 30, activo: true };
console.log("Propiedad nombre:", obtenerPropiedad(usuario, "nombre"));
console.log("Propiedad edad:", obtenerPropiedad(usuario, "edad"));

establecerPropiedad(usuario, "nombre", "María");
establecerPropiedad(usuario, "edad", 25);
console.log("Usuario actualizado:", usuario);

let nuevoObjeto = crearObjeto({ id: 1, nombre: "Test", valor: 100 });
console.log("Nuevo objeto:", nuevoObjeto);

// 4. Funciones genéricas con parámetros rest
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

function combinarArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

function crearObjetoDesdePares<K extends string, V>(...pares: [K, V][]): Record<K, V> {
    const objeto = {} as Record<K, V>;
    for (const [clave, valor] of pares) {
        objeto[clave] = valor;
    }
    return objeto;
}

function procesarElementos<T>(...elementos: T[]): T[] {
    return elementos.filter((elemento, index) => elementos.indexOf(elemento) === index);
}

// Uso de funciones genéricas con parámetros rest
console.log("\n=== PARÁMETROS REST ===");
console.log("Crear array de números:", crearArray(1, 2, 3, 4, 5));
console.log("Crear array de strings:", crearArray("a", "b", "c", "d", "e"));
console.log("Combinar arrays:", combinarArrays([1, 2], [3, 4], [5, 6]));
console.log("Crear objeto desde pares:", crearObjetoDesdePares(["nombre", "Juan"], ["apellido", "Pérez"], ["ciudad", "Madrid"]));
console.log("Procesar elementos únicos:", procesarElementos(1, 2, 2, 3, 3, 4, 4, 5));

// 5. Funciones genéricas con tipos condicionales
type EsString<T> = T extends string ? true : false;
type EsNumber<T> = T extends number ? true : false;
type EsArray<T> = T extends any[] ? true : false;

function procesarValor<T>(valor: T): any {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else if (typeof valor === "number") {
        return (valor * 2) as any;
    } else {
        return valor;
    }
}

function esTipo<T>(valor: unknown, tipo: string): valor is T {
    return typeof valor === tipo;
}

function convertirTipo<T>(valor: unknown): T | null {
    try {
        return valor as T;
    } catch {
        return null;
    }
}

// Uso de funciones genéricas con tipos condicionales
console.log("\n=== TIPOS CONDICIONALES ===");
console.log("Procesar string:", procesarValor("hola"));
console.log("Procesar number:", procesarValor(5));
console.log("Procesar boolean:", procesarValor(true));

console.log("¿Es string?:", esTipo<string>("hola", "string"));
console.log("¿Es number?:", esTipo<number>(42, "number"));
console.log("¿Es boolean?:", esTipo<boolean>(true, "boolean"));

console.log("Convertir a string:", convertirTipo<string>("test"));
console.log("Convertir a number:", convertirTipo<number>(123));

// 6. Funciones genéricas con inferencia
function crearContenedor<T>(valor: T) {
    return {
        contenido: valor,
        obtener: () => valor,
        establecer: (nuevoValor: T) => { valor = nuevoValor; }
    };
}

function crearFuncion<T, U>(funcion: (valor: T) => U) {
    return {
        ejecutar: funcion,
        tipo: "función"
    };
}

function crearValidador<T>(predicado: (valor: T) => boolean) {
    return {
        validar: predicado,
        tipo: "validador"
    };
}

// Uso de funciones genéricas con inferencia
console.log("\n=== INFERENCIA ===");
let contenedorString = crearContenedor("hola");
let contenedorNumber = crearContenedor(42);
let contenedorBoolean = crearContenedor(true);

console.log("Contenedor string:", contenedorString.obtener());
console.log("Contenedor number:", contenedorNumber.obtener());
console.log("Contenedor boolean:", contenedorBoolean.obtener());

let funcionString = crearFuncion((s: string) => s.toUpperCase());
let funcionNumber = crearFuncion((n: number) => n * 2);

console.log("Función string:", funcionString.ejecutar("hola"));
console.log("Función number:", funcionNumber.ejecutar(5));

let validadorString = crearValidador((s: string) => s.length > 0);
let validadorNumber = crearValidador((n: number) => n > 0);

console.log("Validador string:", validadorString.validar("hola"));
console.log("Validador number:", validadorNumber.validar(5));

// 7. Funciones genéricas con utilidades de tipos
function crearObjetoParcial<T>(datos: Partial<T>): T {
    return datos as T;
}

function crearObjetoRequerido<T>(datos: Required<T>): T {
    return datos;
}

function crearObjetoSoloLectura<T>(datos: T): Readonly<T> {
    return datos;
}

function seleccionarPropiedades<T, K extends keyof T>(objeto: T, claves: K[]): Pick<T, K> {
    const resultado = {} as Pick<T, K>;
    for (const clave of claves) {
        resultado[clave] = objeto[clave];
    }
    return resultado;
}

function omitirPropiedades<T, K extends keyof T>(objeto: T, claves: K[]): Omit<T, K> {
    const resultado = { ...objeto };
    for (const clave of claves) {
        delete resultado[clave];
    }
    return resultado;
}

// Uso de funciones genéricas con utilidades de tipos
console.log("\n=== UTILIDADES DE TIPOS ===");
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

let usuarioParcial = crearObjetoParcial<Usuario>({ nombre: "Juan", email: "juan@email.com" });
let usuarioRequerido = crearObjetoRequerido<Usuario>({ id: 1, nombre: "María", email: "maria@email.com", activo: true });
let usuarioSoloLectura = crearObjetoSoloLectura<Usuario>({ id: 2, nombre: "Carlos", email: "carlos@email.com", activo: false });

console.log("Usuario parcial:", usuarioParcial);
console.log("Usuario requerido:", usuarioRequerido);
console.log("Usuario solo lectura:", usuarioSoloLectura);

let usuarioCompleto: Usuario = { id: 3, nombre: "Ana", email: "ana@email.com", activo: true };
let usuarioBasico = seleccionarPropiedades(usuarioCompleto, ["nombre", "email"]);
let usuarioSinId = omitirPropiedades(usuarioCompleto, ["id"]);

console.log("Usuario básico:", usuarioBasico);
console.log("Usuario sin ID:", usuarioSinId);

// 8. Funciones genéricas con tipos de unión
function procesarUnion<T extends string | number | boolean>(valor: T): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor.toString();
    } else {
        return valor ? "verdadero" : "falso";
    }
}

function crearUnion<T extends string | number>(valor: T): T {
    return valor;
}

function validarUnion<T extends string | number>(valor: unknown): valor is T {
    return typeof valor === "string" || typeof valor === "number";
}

// Uso de funciones genéricas con tipos de unión
console.log("\n=== TIPOS DE UNIÓN ===");
console.log("Procesar union string:", procesarUnion("hola"));
console.log("Procesar union number:", procesarUnion(42));
console.log("Procesar union boolean:", procesarUnion(true));

console.log("Crear union string:", crearUnion("mundo"));
console.log("Crear union number:", crearUnion(100));

console.log("Validar union string:", validarUnion("test"));
console.log("Validar union number:", validarUnion(123));
console.log("Validar union boolean:", validarUnion(true));

// Ejemplos de clases genéricas en TypeScript

// 1. Clase genérica básica
class Contenedor<T> {
    private contenido: T;
    
    constructor(contenido: T) {
        this.contenido = contenido;
    }
    
    public obtener(): T {
        return this.contenido;
    }
    
    public establecer(valor: T): void {
        this.contenido = valor;
    }
    
    public estaVacio(): boolean {
        return this.contenido === null || this.contenido === undefined;
    }
    
    public obtenerTipo(): string {
        return typeof this.contenido;
    }
}

// Uso de la clase genérica
let contenedorString = new Contenedor<string>("Hola");
let contenedorNumber = new Contenedor<number>(42);
let contenedorBoolean = new Contenedor<boolean>(true);

console.log("=== CLASE GENÉRICA BÁSICA ===");
console.log("Contenedor string:", contenedorString.obtener());
console.log("Contenedor number:", contenedorNumber.obtener());
console.log("Contenedor boolean:", contenedorBoolean.obtener());
console.log("Tipo del contenedor string:", contenedorString.obtenerTipo());

// 2. Clase genérica con múltiples parámetros de tipo
class Par<T, U> {
    private primero: T;
    private segundo: U;
    
    constructor(primero: T, segundo: U) {
        this.primero = primero;
        this.segundo = segundo;
    }
    
    public obtenerPrimero(): T {
        return this.primero;
    }
    
    public obtenerSegundo(): U {
        return this.segundo;
    }
    
    public establecerPrimero(valor: T): void {
        this.primero = valor;
    }
    
    public establecerSegundo(valor: U): void {
        this.segundo = valor;
    }
    
    public intercambiar(): Par<U, T> {
        return new Par(this.segundo, this.primero);
    }
    
    public obtenerInfo(): string {
        return `Par(${this.primero}, ${this.segundo})`;
    }
}

// Uso de la clase genérica con múltiples parámetros
let parStringNumber = new Par<string, number>("Hola", 42);
let parBooleanString = new Par<boolean, string>(true, "Mundo");

console.log("\n=== CLASE GENÉRICA CON MÚLTIPLES PARÁMETROS ===");
console.log("Par string-number:", parStringNumber.obtenerInfo());
console.log("Par boolean-string:", parBooleanString.obtenerInfo());
console.log("Par intercambiado:", parStringNumber.intercambiar().obtenerInfo());

// 3. Clase genérica con restricciones
interface Comparable<T> {
    comparar(otro: T): number;
}

class ListaOrdenada<T extends Comparable<T>> {
    private elementos: T[] = [];
    
    public agregar(elemento: T): void {
        this.elementos.push(elemento);
        this.ordenar();
    }
    
    public obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    public obtenerPrimero(): T | undefined {
        return this.elementos[0];
    }
    
    public obtenerUltimo(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    
    public eliminar(elemento: T): boolean {
        const indice = this.elementos.indexOf(elemento);
        if (indice > -1) {
            this.elementos.splice(indice, 1);
            return true;
        }
        return false;
    }
    
    public obtenerTamaño(): number {
        return this.elementos.length;
    }
    
    private ordenar(): void {
        this.elementos.sort((a, b) => a.comparar(b));
    }
}

// Clase que implementa la interface Comparable
class Numero implements Comparable<Numero> {
    constructor(public valor: number) {}
    
    public comparar(otro: Numero): number {
        return this.valor - otro.valor;
    }
    
    public toString(): string {
        return this.valor.toString();
    }
}

// Clase que implementa la interface Comparable
class StringComparable implements Comparable<StringComparable> {
    constructor(public valor: string) {}
    
    public comparar(otro: StringComparable): number {
        return this.valor.localeCompare(otro.valor);
    }
    
    public toString(): string {
        return this.valor;
    }
}

// Uso de la clase genérica con restricciones
let listaNumeros = new ListaOrdenada<Numero>();
listaNumeros.agregar(new Numero(5));
listaNumeros.agregar(new Numero(2));
listaNumeros.agregar(new Numero(8));
listaNumeros.agregar(new Numero(1));

console.log("\n=== CLASE GENÉRICA CON RESTRICCIONES ===");
console.log("Lista de números ordenada:", listaNumeros.obtenerTodos());
console.log("Primer número:", listaNumeros.obtenerPrimero());
console.log("Último número:", listaNumeros.obtenerUltimo());

let listaStrings = new ListaOrdenada<StringComparable>();
listaStrings.agregar(new StringComparable("Zebra"));
listaStrings.agregar(new StringComparable("Apple"));
listaStrings.agregar(new StringComparable("Banana"));

console.log("Lista de strings ordenada:", listaStrings.obtenerTodos());

// 4. Clase genérica con tipos condicionales
class Procesador<T> {
    private datos: T;
    
    constructor(datos: T) {
        this.datos = datos;
    }
    
    public procesar(): any {
        if (typeof this.datos === "string") {
            return (this.datos as any).toUpperCase();
        } else if (typeof this.datos === "number") {
            return (this.datos as any) * 2;
        } else {
            return this.datos;
        }
    }
    
    public obtenerDatos(): T {
        return this.datos;
    }
    
    public establecerDatos(datos: T): void {
        this.datos = datos;
    }
}

// Uso de la clase genérica con tipos condicionales
let procesadorString = new Procesador<string>("hola");
let procesadorNumber = new Procesador<number>(5);
let procesadorBoolean = new Procesador<boolean>(true);

console.log("\n=== CLASE GENÉRICA CON TIPOS CONDICIONALES ===");
console.log("Procesador string:", procesadorString.procesar());
console.log("Procesador number:", procesadorNumber.procesar());
console.log("Procesador boolean:", procesadorBoolean.procesar());

// 5. Clase genérica con métodos estáticos
class UtilidadesGenericas {
    // Método estático genérico
    static crearArray<T>(...elementos: T[]): T[] {
        return elementos;
    }
    
    static obtenerPrimero<T>(array: T[]): T | undefined {
        return array[0];
    }
    
    static obtenerUltimo<T>(array: T[]): T | undefined {
        return array[array.length - 1];
    }
    
    static invertirArray<T>(array: T[]): T[] {
        return [...array].reverse();
    }
    
    static eliminarDuplicados<T>(array: T[]): T[] {
        return [...new Set(array)];
    }
    
    static filtrarArray<T>(array: T[], predicado: (elemento: T) => boolean): T[] {
        return array.filter(predicado);
    }
    
    static mapearArray<T, U>(array: T[], transformador: (elemento: T) => U): U[] {
        return array.map(transformador);
    }
    
    static reducirArray<T, U>(array: T[], reductor: (acumulador: U, elemento: T) => U, valorInicial: U): U {
        return array.reduce(reductor, valorInicial);
    }
}

// Uso de métodos estáticos genéricos
console.log("\n=== MÉTODOS ESTÁTICOS GENÉRICOS ===");
let arrayNumeros = UtilidadesGenericas.crearArray(1, 2, 3, 4, 5);
let arrayStrings = UtilidadesGenericas.crearArray("a", "b", "c", "d", "e");

console.log("Array de números:", arrayNumeros);
console.log("Array de strings:", arrayStrings);
console.log("Primer elemento:", UtilidadesGenericas.obtenerPrimero(arrayNumeros));
console.log("Último elemento:", UtilidadesGenericas.obtenerUltimo(arrayStrings));
console.log("Array invertido:", UtilidadesGenericas.invertirArray(arrayNumeros));
console.log("Array sin duplicados:", UtilidadesGenericas.eliminarDuplicados([1, 2, 2, 3, 3, 4]));

let numerosPares = UtilidadesGenericas.filtrarArray(arrayNumeros, n => n % 2 === 0);
let stringsMayusculas = UtilidadesGenericas.mapearArray(arrayStrings, s => s.toUpperCase());
let suma = UtilidadesGenericas.reducirArray(arrayNumeros, (acc, n) => acc + n, 0);

console.log("Números pares:", numerosPares);
console.log("Strings en mayúsculas:", stringsMayusculas);
console.log("Suma de números:", suma);

// 6. Clase genérica con interfaces
interface Almacenable<T> {
    almacenar(valor: T): void;
    recuperar(): T | undefined;
    estaVacio(): boolean;
}

class Almacen<T> implements Almacenable<T> {
    private elementos: T[] = [];
    
    public almacenar(valor: T): void {
        this.elementos.push(valor);
    }
    
    public recuperar(): T | undefined {
        return this.elementos.pop();
    }
    
    public estaVacio(): boolean {
        return this.elementos.length === 0;
    }
    
    public obtenerTamaño(): number {
        return this.elementos.length;
    }
    
    public obtenerTodos(): T[] {
        return [...this.elementos];
    }
}

// Uso de la clase genérica que implementa una interface
let almacenStrings = new Almacen<string>();
let almacenNumbers = new Almacen<number>();

console.log("\n=== CLASE GENÉRICA CON INTERFACES ===");
almacenStrings.almacenar("Primer elemento");
almacenStrings.almacenar("Segundo elemento");
almacenStrings.almacenar("Tercer elemento");

almacenNumbers.almacenar(10);
almacenNumbers.almacenar(20);
almacenNumbers.almacenar(30);

console.log("Almacén de strings - Tamaño:", almacenStrings.obtenerTamaño());
console.log("Almacén de strings - Todos:", almacenStrings.obtenerTodos());
console.log("Recuperar del almacén de strings:", almacenStrings.recuperar());
console.log("Almacén de strings - Tamaño después:", almacenStrings.obtenerTamaño());

console.log("Almacén de numbers - Tamaño:", almacenNumbers.obtenerTamaño());
console.log("Almacén de numbers - Todos:", almacenNumbers.obtenerTodos());
console.log("Recuperar del almacén de numbers:", almacenNumbers.recuperar());

// 7. Clase genérica con tipos de unión
class UnionContainer<T extends string | number | boolean> {
    private valor: T;
    
    constructor(valor: T) {
        this.valor = valor;
    }
    
    public obtener(): T {
        return this.valor;
    }
    
    public establecer(valor: T): void {
        this.valor = valor;
    }
    
    public procesar(): string {
        if (typeof this.valor === "string") {
            return this.valor.toUpperCase();
        } else if (typeof this.valor === "number") {
            return this.valor.toString();
        } else {
            return this.valor ? "verdadero" : "falso";
        }
    }
    
    public obtenerTipo(): string {
        return typeof this.valor;
    }
}

// Uso de la clase genérica con tipos de unión
let unionString = new UnionContainer<string>("hola");
let unionNumber = new UnionContainer<number>(42);
let unionBoolean = new UnionContainer<boolean>(true);

console.log("\n=== CLASE GENÉRICA CON TIPOS DE UNIÓN ===");
console.log("Union string:", unionString.obtener(), "- Procesado:", unionString.procesar());
console.log("Union number:", unionNumber.obtener(), "- Procesado:", unionNumber.procesar());
console.log("Union boolean:", unionBoolean.obtener(), "- Procesado:", unionBoolean.procesar());

// 8. Clase genérica con tipos de array
class ArrayContainer<T> {
    private elementos: T[];
    
    constructor(elementos: T[] = []) {
        this.elementos = elementos;
    }
    
    public agregar(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    public obtener(indice: number): T | undefined {
        return this.elementos[indice];
    }
    
    public establecer(indice: number, elemento: T): void {
        this.elementos[indice] = elemento;
    }
    
    public obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    public obtenerTamaño(): number {
        return this.elementos.length;
    }
    
    public estaVacio(): boolean {
        return this.elementos.length === 0;
    }
    
    public limpiar(): void {
        this.elementos = [];
    }
    
    public buscar(elemento: T): number {
        return this.elementos.indexOf(elemento);
    }
    
    public eliminar(indice: number): T | undefined {
        return this.elementos.splice(indice, 1)[0];
    }
}

// Uso de la clase genérica con tipos de array
let arrayContainer = new ArrayContainer<number>();
arrayContainer.agregar(1);
arrayContainer.agregar(2);
arrayContainer.agregar(3);

console.log("\n=== CLASE GENÉRICA CON TIPOS DE ARRAY ===");
console.log("Array container - Todos:", arrayContainer.obtenerTodos());
console.log("Array container - Tamaño:", arrayContainer.obtenerTamaño());
console.log("Array container - Elemento en índice 1:", arrayContainer.obtener(1));
console.log("Array container - Buscar 2:", arrayContainer.buscar(2));
console.log("Array container - Eliminar índice 1:", arrayContainer.eliminar(1));
console.log("Array container - Después de eliminar:", arrayContainer.obtenerTodos());

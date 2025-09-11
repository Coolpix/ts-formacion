// Ejemplos de interfaces genéricas en TypeScript

// 1. Interface genérica básica
interface Contenedor<T> {
    contenido: T;
    obtener(): T;
    establecer(valor: T): void;
    estaVacio(): boolean;
}

// Implementación de interface genérica
class Caja<T> implements Contenedor<T> {
    constructor(public contenido: T) {}
    
    obtener(): T {
        return this.contenido;
    }
    
    establecer(valor: T): void {
        this.contenido = valor;
    }
    
    estaVacio(): boolean {
        return this.contenido === null || this.contenido === undefined;
    }
}

// Uso de la interface genérica
let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);
let cajaBoolean = new Caja<boolean>(true);

console.log("=== INTERFACES GENÉRICAS BÁSICAS ===");
console.log("Caja string:", cajaString.obtener());
console.log("Caja number:", cajaNumber.obtener());
console.log("Caja boolean:", cajaBoolean.obtener());
console.log("¿Caja string vacía?:", cajaString.estaVacio());

// 2. Interface genérica con múltiples parámetros
interface Par<T, U> {
    primero: T;
    segundo: U;
    obtenerPrimero(): T;
    obtenerSegundo(): U;
    establecerPrimero(valor: T): void;
    establecerSegundo(valor: U): void;
    intercambiar(): Par<U, T>;
}

// Implementación de interface genérica con múltiples parámetros
class ParImpl<T, U> implements Par<T, U> {
    constructor(public primero: T, public segundo: U) {}
    
    obtenerPrimero(): T {
        return this.primero;
    }
    
    obtenerSegundo(): U {
        return this.segundo;
    }
    
    establecerPrimero(valor: T): void {
        this.primero = valor;
    }
    
    establecerSegundo(valor: U): void {
        this.segundo = valor;
    }
    
    intercambiar(): Par<U, T> {
        return new ParImpl(this.segundo, this.primero);
    }
}

// Uso de la interface genérica con múltiples parámetros
let parStringNumber = new ParImpl<string, number>("Hola", 42);
let parBooleanString = new ParImpl<boolean, string>(true, "Mundo");

console.log("\n=== MÚLTIPLES PARÁMETROS ===");
console.log("Par string-number:", parStringNumber.obtenerPrimero(), parStringNumber.obtenerSegundo());
console.log("Par boolean-string:", parBooleanString.obtenerPrimero(), parBooleanString.obtenerSegundo());
console.log("Par intercambiado:", parStringNumber.intercambiar().obtenerPrimero(), parStringNumber.intercambiar().obtenerSegundo());

// 3. Interface genérica con restricciones
interface Comparable<T> {
    comparar(otro: T): number;
}

interface ListaOrdenada<T extends Comparable<T>> {
    agregar(elemento: T): void;
    obtenerTodos(): T[];
    obtenerPrimero(): T | undefined;
    obtenerUltimo(): T | undefined;
    eliminar(elemento: T): boolean;
    obtenerTamaño(): number;
    ordenar(): void;
}

// Implementación de interface genérica con restricciones
class ListaOrdenadaImpl<T extends Comparable<T>> implements ListaOrdenada<T> {
    private elementos: T[] = [];
    
    agregar(elemento: T): void {
        this.elementos.push(elemento);
        this.ordenar();
    }
    
    obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    obtenerPrimero(): T | undefined {
        return this.elementos[0];
    }
    
    obtenerUltimo(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    
    eliminar(elemento: T): boolean {
        const indice = this.elementos.indexOf(elemento);
        if (indice > -1) {
            this.elementos.splice(indice, 1);
            return true;
        }
        return false;
    }
    
    obtenerTamaño(): number {
        return this.elementos.length;
    }
    
    ordenar(): void {
        this.elementos.sort((a, b) => a.comparar(b));
    }
}

// Clases que implementan la interface Comparable
class Numero implements Comparable<Numero> {
    constructor(public valor: number) {}
    
    comparar(otro: Numero): number {
        return this.valor - otro.valor;
    }
    
    toString(): string {
        return this.valor.toString();
    }
}

class StringComparable implements Comparable<StringComparable> {
    constructor(public valor: string) {}
    
    comparar(otro: StringComparable): number {
        return this.valor.localeCompare(otro.valor);
    }
    
    toString(): string {
        return this.valor;
    }
}

// Uso de la interface genérica con restricciones
let listaNumeros = new ListaOrdenadaImpl<Numero>();
listaNumeros.agregar(new Numero(5));
listaNumeros.agregar(new Numero(2));
listaNumeros.agregar(new Numero(8));
listaNumeros.agregar(new Numero(1));

console.log("\n=== RESTRICCIONES ===");
console.log("Lista de números ordenada:", listaNumeros.obtenerTodos());
console.log("Primer número:", listaNumeros.obtenerPrimero());
console.log("Último número:", listaNumeros.obtenerUltimo());
console.log("Tamaño de la lista:", listaNumeros.obtenerTamaño());

let listaStrings = new ListaOrdenadaImpl<StringComparable>();
listaStrings.agregar(new StringComparable("Zebra"));
listaStrings.agregar(new StringComparable("Apple"));
listaStrings.agregar(new StringComparable("Banana"));

console.log("Lista de strings ordenada:", listaStrings.obtenerTodos());

// 4. Interface genérica con tipos condicionales
interface Procesador<T> {
    procesar(valor: T): any;
    obtenerTipo(): string;
    validar(valor: T): boolean;
}

// Implementación de interface genérica con tipos condicionales
class ProcesadorImpl<T> implements Procesador<T> {
    procesar(valor: T): any {
        if (typeof valor === "string") {
            return valor.toUpperCase() as any;
        } else if (typeof valor === "number") {
            return (valor * 2) as any;
        } else {
            return valor;
        }
    }
    
    obtenerTipo(): string {
        return "procesador";
    }
    
    validar(valor: T): boolean {
        return valor !== null && valor !== undefined;
    }
}

// Uso de la interface genérica con tipos condicionales
let procesadorString = new ProcesadorImpl<string>();
let procesadorNumber = new ProcesadorImpl<number>();
let procesadorBoolean = new ProcesadorImpl<boolean>();

console.log("\n=== TIPOS CONDICIONALES ===");
console.log("Procesador string:", procesadorString.procesar("hola"));
console.log("Procesador number:", procesadorNumber.procesar(5));
console.log("Procesador boolean:", procesadorBoolean.procesar(true));

// 5. Interface genérica con métodos estáticos
interface Utilidades<T> {
    crearArray(...elementos: T[]): T[];
    obtenerPrimero(array: T[]): T | undefined;
    obtenerUltimo(array: T[]): T | undefined;
    invertirArray(array: T[]): T[];
    eliminarDuplicados(array: T[]): T[];
}

// Implementación de interface genérica con métodos estáticos
class UtilidadesImpl<T> implements Utilidades<T> {
    crearArray(...elementos: T[]): T[] {
        return elementos;
    }
    
    obtenerPrimero(array: T[]): T | undefined {
        return array[0];
    }
    
    obtenerUltimo(array: T[]): T | undefined {
        return array[array.length - 1];
    }
    
    invertirArray(array: T[]): T[] {
        return [...array].reverse();
    }
    
    eliminarDuplicados(array: T[]): T[] {
        return [...new Set(array)];
    }
}

// Uso de la interface genérica con métodos estáticos
let utilidadesString = new UtilidadesImpl<string>();
let utilidadesNumber = new UtilidadesImpl<number>();

console.log("\n=== MÉTODOS ESTÁTICOS ===");
console.log("Array de strings:", utilidadesString.crearArray("a", "b", "c"));
console.log("Array de números:", utilidadesNumber.crearArray(1, 2, 3));
console.log("Primer elemento:", utilidadesString.obtenerPrimero(["a", "b", "c"]));
console.log("Último elemento:", utilidadesNumber.obtenerUltimo([1, 2, 3]));
console.log("Array invertido:", utilidadesString.invertirArray(["a", "b", "c"]));
console.log("Array sin duplicados:", utilidadesNumber.eliminarDuplicados([1, 2, 2, 3, 3, 4]));

// 6. Interface genérica con tipos de unión
interface UnionContainer<T extends string | number | boolean> {
    valor: T;
    obtener(): T;
    establecer(valor: T): void;
    procesar(): string;
    obtenerTipo(): string;
}

// Implementación de interface genérica con tipos de unión
class UnionContainerImpl<T extends string | number | boolean> implements UnionContainer<T> {
    constructor(public valor: T) {}
    
    obtener(): T {
        return this.valor;
    }
    
    establecer(valor: T): void {
        this.valor = valor;
    }
    
    procesar(): string {
        if (typeof this.valor === "string") {
            return this.valor.toUpperCase();
        } else if (typeof this.valor === "number") {
            return this.valor.toString();
        } else {
            return this.valor ? "verdadero" : "falso";
        }
    }
    
    obtenerTipo(): string {
        return typeof this.valor;
    }
}

// Uso de la interface genérica con tipos de unión
let unionString = new UnionContainerImpl<string>("hola");
let unionNumber = new UnionContainerImpl<number>(42);
let unionBoolean = new UnionContainerImpl<boolean>(true);

console.log("\n=== TIPOS DE UNIÓN ===");
console.log("Union string:", unionString.obtener(), "- Procesado:", unionString.procesar());
console.log("Union number:", unionNumber.obtener(), "- Procesado:", unionNumber.procesar());
console.log("Union boolean:", unionBoolean.obtener(), "- Procesado:", unionBoolean.procesar());

// 7. Interface genérica con tipos de array
interface ArrayContainer<T> {
    elementos: T[];
    agregar(elemento: T): void;
    obtener(indice: number): T | undefined;
    establecer(indice: number, elemento: T): void;
    obtenerTodos(): T[];
    obtenerTamaño(): number;
    estaVacio(): boolean;
    limpiar(): void;
    buscar(elemento: T): number;
    eliminar(indice: number): T | undefined;
}

// Implementación de interface genérica con tipos de array
class ArrayContainerImpl<T> implements ArrayContainer<T> {
    constructor(public elementos: T[] = []) {}
    
    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    obtener(indice: number): T | undefined {
        return this.elementos[indice];
    }
    
    establecer(indice: number, elemento: T): void {
        this.elementos[indice] = elemento;
    }
    
    obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    obtenerTamaño(): number {
        return this.elementos.length;
    }
    
    estaVacio(): boolean {
        return this.elementos.length === 0;
    }
    
    limpiar(): void {
        this.elementos = [];
    }
    
    buscar(elemento: T): number {
        return this.elementos.indexOf(elemento);
    }
    
    eliminar(indice: number): T | undefined {
        return this.elementos.splice(indice, 1)[0];
    }
}

// Uso de la interface genérica con tipos de array
let arrayContainer = new ArrayContainerImpl<number>();
arrayContainer.agregar(1);
arrayContainer.agregar(2);
arrayContainer.agregar(3);

console.log("\n=== TIPOS DE ARRAY ===");
console.log("Array container - Todos:", arrayContainer.obtenerTodos());
console.log("Array container - Tamaño:", arrayContainer.obtenerTamaño());
console.log("Array container - Elemento en índice 1:", arrayContainer.obtener(1));
console.log("Array container - Buscar 2:", arrayContainer.buscar(2));
console.log("Array container - Eliminar índice 1:", arrayContainer.eliminar(1));
console.log("Array container - Después de eliminar:", arrayContainer.obtenerTodos());

// 8. Interface genérica con tipos de objeto
interface ObjetoContainer<T extends Record<string, any>> {
    objeto: T;
    obtenerPropiedad<K extends keyof T>(clave: K): T[K];
    establecerPropiedad<K extends keyof T>(clave: K, valor: T[K]): void;
    obtenerTodasLasPropiedades(): T;
    obtenerClaves(): (keyof T)[];
    obtenerValores(): T[keyof T][];
    clonar(): T;
    fusionar(otro: Partial<T>): T;
}

// Implementación de interface genérica con tipos de objeto
class ObjetoContainerImpl<T extends Record<string, any>> implements ObjetoContainer<T> {
    constructor(public objeto: T) {}
    
    obtenerPropiedad<K extends keyof T>(clave: K): T[K] {
        return this.objeto[clave];
    }
    
    establecerPropiedad<K extends keyof T>(clave: K, valor: T[K]): void {
        this.objeto[clave] = valor;
    }
    
    obtenerTodasLasPropiedades(): T {
        return { ...this.objeto };
    }
    
    obtenerClaves(): (keyof T)[] {
        return Object.keys(this.objeto) as (keyof T)[];
    }
    
    obtenerValores(): T[keyof T][] {
        return Object.values(this.objeto);
    }
    
    clonar(): T {
        return { ...this.objeto };
    }
    
    fusionar(otro: Partial<T>): T {
        return { ...this.objeto, ...otro };
    }
}

// Uso de la interface genérica con tipos de objeto
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

let usuarioContainer = new ObjetoContainerImpl<Usuario>({
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
});

console.log("\n=== TIPOS DE OBJETO ===");
console.log("Usuario container - Propiedad nombre:", usuarioContainer.obtenerPropiedad("nombre"));
console.log("Usuario container - Propiedad email:", usuarioContainer.obtenerPropiedad("email"));
console.log("Usuario container - Todas las propiedades:", usuarioContainer.obtenerTodasLasPropiedades());
console.log("Usuario container - Claves:", usuarioContainer.obtenerClaves());
console.log("Usuario container - Valores:", usuarioContainer.obtenerValores());
console.log("Usuario container - Clonado:", usuarioContainer.clonar());
console.log("Usuario container - Fusionado:", usuarioContainer.fusionar({ activo: false }));

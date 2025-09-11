// Ejemplos de Type Guards en TypeScript

// 1. Type Guard básico con typeof
function mostrarTipo(valor: string | number | boolean): void {
    if (typeof valor === "string") {
        console.log("Es string:", valor.toUpperCase());
    } else if (typeof valor === "number") {
        console.log("Es number:", valor.toFixed(2));
    } else {
        console.log("Es boolean:", valor);
    }
}

// Ejemplos de uso
mostrarTipo("hola mundo");
mostrarTipo(3.14159);
mostrarTipo(true);

// 2. Type Guard personalizado
function esString(valor: string | number): valor is string {
    return typeof valor === "string";
}

function esNumber(valor: string | number): valor is number {
    return typeof valor === "number";
}

function procesarValor(valor: string | number): string {
    if (esString(valor)) {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else {
        // TypeScript sabe que valor es number aquí
        return valor.toString();
    }
}

console.log("Procesar string:", procesarValor("typescript"));
console.log("Procesar number:", procesarValor(42));

// 3. Type Guard para objetos
interface Usuario {
    nombre: string;
    edad: number;
}

interface Admin {
    nombre: string;
    permisos: string[];
}

function esUsuario(obj: Usuario | Admin): obj is Usuario {
    return 'edad' in obj;
}

function esAdmin(obj: Usuario | Admin): obj is Admin {
    return 'permisos' in obj;
}

function procesarPersona(persona: Usuario | Admin): void {
    if (esUsuario(persona)) {
        console.log(`Usuario: ${persona.nombre}, edad: ${persona.edad}`);
    } else if (esAdmin(persona)) {
        console.log(`Admin: ${persona.nombre}, permisos: ${persona.permisos.join(', ')}`);
    }
}

// Ejemplos de uso
let usuario: Usuario = { nombre: "Juan", edad: 30 };
let admin: Admin = { nombre: "María", permisos: ["read", "write", "delete"] };

procesarPersona(usuario);
procesarPersona(admin);

// 4. Type Guard con instanceof
class Animal {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class Perro extends Animal {
    raza: string;
    constructor(nombre: string, raza: string) {
        super(nombre);
        this.raza = raza;
    }
}

class Gato extends Animal {
    color: string;
    constructor(nombre: string, color: string) {
        super(nombre);
        this.color = color;
    }
}

function describirAnimal(animal: Animal): void {
    if (animal instanceof Perro) {
        console.log(`Perro: ${animal.nombre}, raza: ${animal.raza}`);
    } else if (animal instanceof Gato) {
        console.log(`Gato: ${animal.nombre}, color: ${animal.color}`);
    } else {
        console.log(`Animal: ${animal.nombre}`);
    }
}

// Ejemplos de uso
let perro = new Perro("Max", "Labrador");
let gato = new Gato("Mimi", "Negro");
let animal = new Animal("Genérico");

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(animal);

// 5. Type Guard con in operator
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

interface Servicio {
    id: number;
    nombre: string;
    duracion: number;
}

function esProducto(item: Producto | Servicio): item is Producto {
    return 'precio' in item;
}

function esServicio(item: Producto | Servicio): item is Servicio {
    return 'duracion' in item;
}

function procesarItem(item: Producto | Servicio): void {
    if (esProducto(item)) {
        console.log(`Producto: ${item.nombre}, precio: $${item.precio}`);
    } else if (esServicio(item)) {
        console.log(`Servicio: ${item.nombre}, duración: ${item.duracion} horas`);
    }
}

// Ejemplos de uso
let producto: Producto = { id: 1, nombre: "Laptop", precio: 999.99 };
let servicio: Servicio = { id: 2, nombre: "Consultoría", duracion: 8 };

procesarItem(producto);
procesarItem(servicio);

// 6. Type Guard con arrays
function esArrayDeStrings(valor: unknown): valor is string[] {
    return Array.isArray(valor) && valor.every(item => typeof item === "string");
}

function esArrayDeNumbers(valor: unknown): valor is number[] {
    return Array.isArray(valor) && valor.every(item => typeof item === "number");
}

function procesarArray(valor: unknown): void {
    if (esArrayDeStrings(valor)) {
        console.log("Array de strings:", valor.join(", "));
    } else if (esArrayDeNumbers(valor)) {
        console.log("Array de numbers, suma:", valor.reduce((a, b) => a + b, 0));
    } else {
        console.log("No es un array válido");
    }
}

// Ejemplos de uso
procesarArray(["a", "b", "c"]);
procesarArray([1, 2, 3, 4, 5]);
procesarArray("no es array");

// 7. Type Guard complejo con validación
interface DatosValidos {
    email: string;
    telefono: string;
    edad: number;
}

function esDatosValidos(datos: unknown): datos is DatosValidos {
    return (
        typeof datos === "object" &&
        datos !== null &&
        "email" in datos &&
        "telefono" in datos &&
        "edad" in datos &&
        typeof (datos as any).email === "string" &&
        typeof (datos as any).telefono === "string" &&
        typeof (datos as any).edad === "number"
    );
}

function procesarDatos(datos: unknown): void {
    if (esDatosValidos(datos)) {
        console.log(`Email: ${datos.email}, Teléfono: ${datos.telefono}, Edad: ${datos.edad}`);
    } else {
        console.log("Datos inválidos");
    }
}

// Ejemplos de uso
procesarDatos({
    email: "juan@email.com",
    telefono: "123-456-7890",
    edad: 30
});

procesarDatos({
    email: "maria@email.com",
    telefono: "098-765-4321",
    edad: "25" // Error: edad debería ser number
});

// 8. Type Guard con funciones
type FuncionString = (valor: string) => string;
type FuncionNumber = (valor: number) => number;

function esFuncionString(func: FuncionString | FuncionNumber): func is FuncionString {
    // Verificación simple - en la práctica podrías hacer validaciones más complejas
    return func.length === 1;
}

function ejecutarFuncion(func: FuncionString | FuncionNumber, valor: string | number): string | number {
    if (esFuncionString(func)) {
        return func(valor as string);
    } else {
        return func(valor as number);
    }
}

// Ejemplos de uso
let funcionString: FuncionString = (s) => s.toUpperCase();
let funcionNumber: FuncionNumber = (n) => n * 2;

console.log("Función string:", ejecutarFuncion(funcionString, "hola"));
console.log("Función number:", ejecutarFuncion(funcionNumber, 5));

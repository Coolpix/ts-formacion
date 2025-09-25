// ========================================
// CONCEPTOS BÁSICOS DE TYPESCRIPT
// ========================================

// 1. TIPOS PRIMITIVOS BÁSICOS
// ========================================

// String
let nombre: string = "Juan Pérez";
let saludo: string = `Hola, mi nombre es ${nombre}`;

// Number
let edad: number = 25;
let precio: number = 19.99;
let temperatura: number = -5;

// Boolean
let esEstudiante: boolean = true;

// Null y Undefined
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

console.log("=== TIPOS PRIMITIVOS ===");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);
console.log("NULL", valorNulo);
console.log("undefined", valorIndefinido);

// 2. INFERENCIA DE TIPOS
// ========================================

// TypeScript infiere automáticamente los tipos
let ciudad = "Madrid"; // TypeScript infiere: string
let poblacion = 3200000; // TypeScript infiere: number
let esCapital = true; // TypeScript infiere: boolean

console.log("\n=== INFERENCIA DE TIPOS ===");
console.log("Ciudad:", ciudad, "Tipo:", typeof ciudad);
console.log("Población:", poblacion, "Tipo:", typeof poblacion);
console.log("esCapital:", esCapital, "Tipo:", typeof esCapital);


// 3. TIPOS ESPECIALES
// ========================================

// Any (evitar su uso)
let variableAny: any = "Puede ser cualquier cosa";
variableAny = 42;
variableAny = true;
variableAny = { nombre: "test" };

// Void (para funciones que no retornan nada)
function mostrarMensaje(): void {
    console.log("Esta función no retorna nada");
}

// Never (para funciones que nunca terminan)
function errorInfinito(): never {
    throw new Error("Error fatal");
}

// Ejemplo de uso del tipo unknown
let datoDesconocido: unknown;

datoDesconocido = 10;
datoDesconocido = "Hola mundo";
datoDesconocido = { clave: "valor" };

// Para usar un valor unknown, primero hay que hacer una comprobación de tipo
if (typeof datoDesconocido === "string") {
    console.log("datoDesconocido es un string de longitud:", datoDesconocido.length);
} else if (typeof datoDesconocido === "number") {
    console.log("datoDesconocido es un número:", datoDesconocido);
} else {
    console.log("datoDesconocido es de un tipo diferente:", datoDesconocido);
}

console.log("\n=== TIPOS ESPECIALES ===");

// 4. ARRAYS
// ========================================

// Arrays con tipos específicos
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Luis", "María"];
let activos: boolean[] = [true, false, true];

// Sintaxis alternativa con Array<T>
let colores: Array<string> = ["rojo", "verde", "azul"];

console.log("\n=== ARRAYS ===");
console.log("Números:", numeros);
console.log("Nombres:", nombres);
console.log("Colores:", colores);
console.log("Activos:", activos);

// 5. OBJETOS BÁSICOS
// ========================================

// Objeto con propiedades tipadas
let persona: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "Carlos",
    edad: 30,
    activo: true
};

console.log("\n=== OBJETOS ===");
console.log("Persona:", persona);

// 6. FUNCIONES BÁSICAS
// ========================================

// Función con parámetros y retorno tipados
function sumar(a: number, b: number): number {
    return a + b;
}

// Función sin retorno (void)
function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}!`);
}

// Función con parámetro opcional
function crearUsuario(nombre: string, email?: string): string {
    if (email) {
        return `Usuario: ${nombre}, Email: ${email}`;
    }
    return `Usuario: ${nombre}`;
}

console.log("\n=== FUNCIONES ===");
console.log("Suma:", sumar(5, 3));
saludar("María");
console.log(crearUsuario("Pedro"));
console.log(crearUsuario("Ana", "ana@email.com"));

// 7. UNION TYPES (Tipos de unión)
// ========================================

// Variable que puede ser string o number
let id: string | number = "abc123";
id = 456; // También válido

// Función que acepta string o number
function procesarId(identificador: string | number): string {
    return `ID procesado: ${identificador}`;
}

console.log("\n=== UNION TYPES ===");
console.log(procesarId("user123"));
console.log(procesarId(789));

// 8. TYPE ASSERTIONS (Aserciones de tipo)
// ========================================

// Cuando sabemos más sobre el tipo que TypeScript
let valor: any = "Este es un string";
let longitud: number = (valor as string).length;

// Sintaxis alternativa con <>
let longitud2: number = (<string>valor).length;

console.log("\n=== TYPE ASSERTIONS ===");
console.log("Longitud:", longitud);
console.log("Longitud2:", longitud2);

// 9. ENUMS (Enumeraciones)
// ========================================

enum EstadoPedido {
    Pendiente = "PENDIENTE",
    Enviado = "ENVIADO",
    Entregado = "ENTREGADO"
}

let miPedido: EstadoPedido = EstadoPedido.Pendiente;

console.log("\n=== ENUMS ===");
console.log("Estado del pedido:", miPedido);

// 10. INTERFACES BÁSICAS
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo?: boolean; // Propiedad opcional
}

let usuario: Usuario = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    activo: true
};

console.log("\n=== INTERFACES ===");
console.log("Usuario:", usuario);

// 11. TYPES
// ========================================

type ID = string | number;
type Estado = "activo" | "inactivo" | "pendiente";

let usuarioId: ID = "user123";
let estadoUsuario: Estado = "activo";

console.log("\n=== TYPE ALIASES ===");
console.log("ID de usuario:", usuarioId);
console.log("Estado:", estadoUsuario);


// Ejemplos de tipos primitivos en TypeScript

// 1. Tipos básicos de JavaScript
console.log("=== TIPOS BÁSICOS ===");

// Boolean
let esActivo: boolean = true;
let estaCompletado: boolean = false;
console.log("Boolean - Activo:", esActivo, "Completado:", estaCompletado);

// Number - incluye enteros, decimales, hexadecimal, binario, octal
let edad: number = 25;
let precio: number = 99.99;
let hexadecimal: number = 0xf00d;  // 61453
let binario: number = 0b1010;      // 10
let octal: number = 0o744;         // 484
console.log("Numbers - Edad:", edad, "Precio:", precio);
console.log("Hexadecimal:", hexadecimal, "Binario:", binario, "Octal:", octal);

// String
let nombre: string = "Juan";
let apellido: string = 'García';
let mensaje: string = `Hola, ${nombre} ${apellido}!`;
console.log("Strings - Nombre:", nombre, "Mensaje:", mensaje);

// Null y Undefined
let nulo: null = null;
let indefinido: undefined = undefined;
console.log("Null:", nulo, "Undefined:", indefinido);

// 2. Tipos específicos de TypeScript
console.log("\n=== TIPOS TYPESCRIPT ===");

// Any - Evita la verificación de tipos (usar con precaución)
let variableCualquiera: any = 42;
console.log("Any inicial:", variableCualquiera, typeof variableCualquiera);
variableCualquiera = "ahora es string";
console.log("Any después:", variableCualquiera, typeof variableCualquiera);
variableCualquiera = true;
console.log("Any final:", variableCualquiera, typeof variableCualquiera);

// Void - Para funciones que no devuelven nada
function mostrarMensaje(): void {
    console.log("Función void - Hola mundo");
}
mostrarMensaje();

// Never - Para funciones que nunca terminan
function errorInfinito(): never {
    throw new Error("Error fatal - función never");
}

// Comentado para evitar que termine el programa
// errorInfinito();

// 3. Arrays
console.log("\n=== ARRAYS ===");

// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);

// Array de strings (sintaxis alternativa)
let nombres: Array<string> = ["Ana", "Carlos", "Elena"];
console.log("Array de strings:", nombres);

// Array mixto usando union types
let mixto: (string | number)[] = ["texto", 42, "otro texto", 100];
console.log("Array mixto:", mixto);

// Array vacío
let vacio: number[] = [];
console.log("Array vacío:", vacio);

// Métodos de array con tipos
let duplicados: number[] = numeros.map(n => n * 2);
let pares: number[] = numeros.filter(n => n % 2 === 0);
let suma: number = numeros.reduce((acc, n) => acc + n, 0);
console.log("Duplicados:", duplicados);
console.log("Pares:", pares);
console.log("Suma:", suma);

// 4. Tuplas
console.log("\n=== TUPLAS ===");

// Tupla básica
let coordenada: [number, number] = [10, 20];
console.log("Coordenada:", coordenada);

// Tupla con diferentes tipos
let persona: [string, number, boolean] = ["Juan", 30, true];
console.log("Persona tupla:", persona);

// Tupla con elementos opcionales
let configuracion: [string, number?] = ["localhost"];
let configuracionCompleta: [string, number?] = ["localhost", 3000];
console.log("Configuración básica:", configuracion);
console.log("Configuración completa:", configuracionCompleta);

// Tupla con elementos rest
let numerosRest: [number, ...number[]] = [1, 2, 3, 4, 5];
console.log("Tupla con rest:", numerosRest);

// 5. Enums
console.log("\n=== ENUMS ===");

// Enum numérico
enum Direccion {
    Arriba,    // 0
    Abajo,     // 1
    Izquierda, // 2
    Derecha    // 3
}

let direccion: Direccion = Direccion.Arriba;
console.log("Dirección:", direccion, "Valor:", Direccion[direccion]);

// Enum con valores específicos
enum EstadoPedido {
    Pendiente = "pendiente",
    Procesando = "procesando",
    Enviado = "enviado",
    Entregado = "entregado"
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
console.log("Estado del pedido:", estado);

// Enum con valores numéricos específicos
enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

let prioridad: Prioridad = Prioridad.Alta;
console.log("Prioridad:", prioridad);

// 6. Union Types
console.log("\n=== UNION TYPES ===");

// Union de tipos básicos
let id: string | number = "abc123";
console.log("ID string:", id);
id = 456;
console.log("ID number:", id);

// Union con null y undefined
let nombreOpcional: string | null = null;
let edadOpcional: number | undefined = undefined;
console.log("Nombre opcional:", nombreOpcional);
console.log("Edad opcional:", edadOpcional);

// Union con arrays
let datos: string[] | number[] = ["a", "b", "c"];
console.log("Datos string array:", datos);
datos = [1, 2, 3];
console.log("Datos number array:", datos);

// 7. Literal Types
console.log("\n=== LITERAL TYPES ===");

// String literal types
let color: "rojo" | "verde" | "azul" = "rojo";
console.log("Color:", color);

// Number literal types
let tamaño: 1 | 2 | 3 | 4 = 2;
console.log("Tamaño:", tamaño);

// Boolean literal types
let estadoLiteral: true | false = true;
console.log("Estado literal:", estadoLiteral);

// 8. Type Aliases
console.log("\n=== TYPE ALIASES ===");

// Alias para tipos básicos
type ID = string | number;
type Estado = "activo" | "inactivo" | "pendiente";

// Alias para funciones
type Procesador = (valor: number) => number;

// Alias para objetos
type Usuario = {
    id: ID;
    nombre: string;
    estado: Estado;
};

// Uso de aliases
let usuario: Usuario = {
    id: "123",
    nombre: "Juan",
    estado: "activo"
};
console.log("Usuario:", usuario);

let procesar: Procesador = (x) => x * 2;
console.log("Procesar 5:", procesar(5));

// 9. Inferencia de Tipos
console.log("\n=== INFERENCIA DE TIPOS ===");

// Inferencia automática
let nombreInferido = "Juan";        // TypeScript infiere: string
let edadInferida = 30;              // TypeScript infiere: number
let esActivoInferido = true;        // TypeScript infiere: boolean
console.log("Inferidos - Nombre:", nombreInferido, "Edad:", edadInferida, "Activo:", esActivoInferido);

// Inferencia en arrays
let numerosInferidos = [1, 2, 3];    // TypeScript infiere: number[]
let mixtoInferido = [1, "texto"];   // TypeScript infiere: (string | number)[]
console.log("Arrays inferidos - Números:", numerosInferidos, "Mixto:", mixtoInferido);

// Inferencia en objetos
let personaInferida = {
    nombre: "María",
    edad: 25,
    activa: true
}; // TypeScript infiere: { nombre: string; edad: number; activa: boolean }
console.log("Persona inferida:", personaInferida);

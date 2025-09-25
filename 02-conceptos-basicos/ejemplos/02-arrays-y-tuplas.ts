/**
 * Ejemplos de Arrays y Tuplas en TypeScript
 * 
 * Los arrays permiten almacenar múltiples valores del mismo tipo,
 * mientras que las tuplas permiten almacenar un número fijo de elementos
 * donde cada elemento puede tener un tipo diferente.
 */

// ===== EJEMPLO 1: Arrays Básicos =====

// Declaración explícita de arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ana", "Juan", "María", "Carlos"];
let activos: boolean[] = [true, false, true, true];

// Sintaxis alternativa con Array<T>
let numeros2: Array<number> = [1, 2, 3, 4, 5];
let nombres2: Array<string> = ["Ana", "Juan", "María", "Carlos"];

// Arrays vacíos
let arrayVacio: number[] = [];
let arrayVacio2: Array<string> = [];

console.log("=== Ejemplos de Arrays Básicos ===");
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(nombres); // ["Ana", "Juan", "María", "Carlos"]
console.log(activos); // [true, false, true, true]

// ===== EJEMPLO 2: Operaciones con Arrays =====

// Acceso a elementos
console.log("\n=== Operaciones con Arrays ===");
console.log(numeros[0]); // 1 (primer elemento)
console.log(nombres[1]); // "Juan" (segundo elemento)
console.log(numeros[numeros.length - 1]); // 5 (último elemento)

// Modificación de elementos
numeros[0] = 10;
nombres[1] = "Pedro";
console.log(numeros); // [10, 2, 3, 4, 5]
console.log(nombres); // ["Ana", "Pedro", "María", "Carlos"]

// Métodos de array
console.log(numeros.length); // 5
console.log(nombres.includes("María")); // true
console.log(nombres.indexOf("Carlos")); // 3

// ===== EJEMPLO 3: Arrays con Union Types =====

// Array que puede contener strings o números
let mixto: (string | number)[] = ["hola", 42, "mundo", 3.14];
let mixto2: Array<string | number> = ["hola", 42, "mundo", 3.14];

// Array que puede contener diferentes tipos
let variado: (string | number | boolean)[] = ["texto", 123, true, "otro", false];

console.log("\n=== Arrays con Union Types ===");
console.log(mixto); // ["hola", 42, "mundo", 3.14]
console.log(variado); // ["texto", 123, true, "otro", false]

// Procesamiento de arrays mixtos
function procesarArrayMixto(arr: (string | number)[]): string[] {
  return arr.map(item => {
    if (typeof item === "string") {
      return item.toUpperCase();
    } else {
      return item.toString();
    }
  });
}

console.log(procesarArrayMixto(mixto)); // ["HOLA", "42", "MUNDO", "3.14"]

// ===== EJEMPLO 4: Arrays de Objetos =====

// Definir tipo para objetos en el array
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

let usuarios: Usuario[] = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Juan", activo: false },
  { id: 3, nombre: "María", activo: true }
];

// Array de objetos con tipos inline
let productos: { nombre: string; precio: number; stock: boolean }[] = [
  { nombre: "Laptop", precio: 999.99, stock: true },
  { nombre: "Mouse", precio: 29.99, stock: false },
  { nombre: "Teclado", precio: 79.99, stock: true }
];

console.log("\n=== Arrays de Objetos ===");
console.log(usuarios);
console.log(productos);

// Operaciones con arrays de objetos
let usuariosActivos = usuarios.filter(usuario => usuario.activo);
let nombresUsuarios = usuarios.map(usuario => usuario.nombre);
let totalPrecios = productos.reduce((sum, producto) => sum + producto.precio, 0);

console.log("Usuarios activos:", usuariosActivos);
console.log("Nombres de usuarios:", nombresUsuarios);
console.log("Total de precios:", totalPrecios);

// ===== EJEMPLO 5: Arrays Multidimensionales =====

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

console.log("\n=== Arrays Multidimensionales ===");
console.log(matriz);
console.log(matriz[0][1]); // 2
console.log(cubo[0][1][0]); // 3

// ===== EJEMPLO 6: Tuplas Básicas =====

// Tupla básica: [string, number]
let persona: [string, number] = ["Juan", 25];
let coordenada: [number, number] = [10, 20];

// Tupla con más elementos
let configuracion: [string, number, boolean] = ["localhost", 3000, true];

// Tupla con elementos opcionales (usando ?)
let configuracionOpcional: [string, number?] = ["localhost"]; // El segundo elemento es opcional

console.log("\n=== Tuplas Básicas ===");
console.log(persona); // ["Juan", 25]
console.log(coordenada); // [10, 20]
console.log(configuracion); // ["localhost", 3000, true]
console.log(configuracionOpcional); // ["localhost"]

// Acceso a elementos de tupla
console.log(persona[0]); // "Juan"
console.log(persona[1]); // 25
console.log(coordenada[0] + coordenada[1]); // 30

// ===== EJEMPLO 7: Tuplas con Diferentes Tipos =====

// Tupla con tipos mixtos
let resultado: [boolean, string, number] = [true, "Operación exitosa", 200];
let error: [boolean, string, number] = [false, "Error de conexión", 500];

// Tupla para coordenadas 3D
let punto3D: [number, number, number] = [10, 20, 30];

// Tupla para información de usuario
let infoUsuario: [number, string, string, boolean] = [1, "Juan", "juan@email.com", true];

console.log("\n=== Tuplas con Diferentes Tipos ===");
console.log(resultado); // [true, "Operación exitosa", 200]
console.log(error); // [false, "Error de conexión", 500]
console.log(punto3D); // [10, 20, 30]
console.log(infoUsuario); // [1, "Juan", "juan@email.com", true]

// ===== EJEMPLO 8: Tuplas con Rest Elements =====

// Tupla con elementos rest
let numerosConRest: [string, ...number[]] = ["números", 1, 2, 3, 4, 5];
let configuracionConRest: [string, number, ...string[]] = ["servidor", 3000, "debug", "verbose"];

console.log("\n=== Tuplas con Rest Elements ===");
console.log(numerosConRest); // ["números", 1, 2, 3, 4, 5]
console.log(configuracionConRest); // ["servidor", 3000, "debug", "verbose"]

// ===== EJEMPLO 9: Tuplas Readonly =====

// Tupla de solo lectura
let configuracionReadonly: readonly [string, number, boolean] = ["localhost", 3000, true];

// Intentar modificar una tupla readonly causará error
// configuracionReadonly[0] = "nuevo"; // Error: Cannot assign to '0' because it is a read-only property

console.log("\n=== Tuplas Readonly ===");
console.log(configuracionReadonly); // ["localhost", 3000, true]

// ===== EJEMPLO 10: Casos de Uso Prácticos =====

// Función que retorna múltiples valores
function dividirConResto(dividendo: number, divisor: number): [number, number] {
  const cociente = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;
  return [cociente, resto];
}

// Función para procesar coordenadas
function calcularDistancia(punto1: [number, number], punto2: [number, number]): number {
  const dx = punto2[0] - punto1[0];
  const dy = punto2[1] - punto1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

// Función para validar configuración
function validarConfiguracion(config: [string, number, boolean]): boolean {
  const [host, puerto, debug] = config;
  return host.length > 0 && puerto > 0 && puerto < 65536;
}

console.log("\n=== Casos de Uso Prácticos ===");
console.log(dividirConResto(17, 5)); // [3, 2]
console.log(calcularDistancia([0, 0], [3, 4])); // 5
console.log(validarConfiguracion(["localhost", 3000, true])); // true
console.log(validarConfiguracion(["", 3000, true])); // false

// ===== EJEMPLO 11: Destructuring con Tuplas =====

// Destructuring de tuplas
let [nombre, edad] = persona;
let [x, y] = coordenada;
let [host, puerto, debug] = configuracion;

console.log("\n=== Destructuring con Tuplas ===");
console.log(`Nombre: ${nombre}, Edad: ${edad}`); // "Nombre: Juan, Edad: 25"
console.log(`Coordenadas: (${x}, ${y})`); // "Coordenadas: (10, 20)"
console.log(`Host: ${host}, Puerto: ${puerto}, Debug: ${debug}`); // "Host: localhost, Puerto: 3000, Debug: true"

// Destructuring con valores por defecto
let [servidor, puerto2 = 8080] = ["localhost"]; // puerto2 tendrá valor por defecto 8080
console.log(`Servidor: ${servidor}, Puerto: ${puerto2}`); // "Servidor: localhost, Puerto: 8080"

// ===== EJEMPLO 12: Métodos de Array Comunes =====

let numerosEjemplo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\n=== Métodos de Array Comunes ===");

// Métodos de transformación
console.log("Map:", numerosEjemplo.map(n => n * 2)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log("Filter:", numerosEjemplo.filter(n => n % 2 === 0)); // [2, 4, 6, 8, 10]
console.log("Reduce:", numerosEjemplo.reduce((sum, n) => sum + n, 0)); // 55

// Métodos de búsqueda
console.log("Find:", numerosEjemplo.find(n => n > 5)); // 6
console.log("FindIndex:", numerosEjemplo.findIndex(n => n > 5)); // 5
console.log("Some:", numerosEjemplo.some(n => n > 8)); // true
console.log("Every:", numerosEjemplo.every(n => n > 0)); // true

// Métodos de modificación
let numerosCopia = [...numerosEjemplo]; // Copia del array
numerosCopia.push(11);
console.log("Push:", numerosCopia); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

numerosCopia.pop();
console.log("Pop:", numerosCopia); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numerosCopia.unshift(0);
console.log("Unshift:", numerosCopia); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numerosCopia.shift();
console.log("Shift:", numerosCopia); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ===== EJEMPLO 13: Mejores Prácticas =====

// ✅ Bueno: Usar tipos específicos para arrays
let usuariosEspecificos: Usuario[] = [
  { id: 1, nombre: "Ana", activo: true }
];

// ✅ Bueno: Usar tuplas para valores relacionados
function obtenerCoordenadas(): [number, number] {
  return [10, 20];
}

// ✅ Bueno: Usar readonly para arrays que no deben modificarse
let configuracionConstante: readonly string[] = ["localhost", "3000", "development"];

// ✅ Bueno: Usar destructuring para trabajar con tuplas
function procesarResultado(resultado: [boolean, string, number]): void {
  const [exito, mensaje, codigo] = resultado;
  if (exito) {
    console.log(`✅ ${mensaje} (${codigo})`);
  } else {
    console.log(`❌ ${mensaje} (${codigo})`);
  }
}

// ❌ Malo: Usar any para arrays
let arrayMalo: any[] = ["texto", 123, true]; // Pierde los beneficios de TypeScript

// ❌ Malo: No especificar tipos en arrays complejos
let arraySinTipo = [["a", 1], ["b", 2]]; // TypeScript infiere (string | number)[][]

console.log("\n=== Mejores Prácticas ===");
procesarResultado([true, "Operación exitosa", 200]);
procesarResultado([false, "Error de conexión", 500]);

// ===== EJEMPLO 14: Casos Avanzados =====

// Array de tuplas
let coordenadas: [number, number][] = [
  [0, 0],
  [10, 20],
  [30, 40]
];

// Tupla de arrays
let configuracionCompleja: [string[], number[], boolean[]] = [
  ["localhost", "127.0.0.1"],
  [3000, 8080],
  [true, false]
];

// Función que retorna array de tuplas
function generarPares(n: number): [number, number][] {
  const pares: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    pares.push([i, i * 2]);
  }
  return pares;
}

console.log("\n=== Casos Avanzados ===");
console.log("Coordenadas:", coordenadas);
console.log("Configuración compleja:", configuracionCompleja);
console.log("Pares generados:", generarPares(5)); // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 8]]

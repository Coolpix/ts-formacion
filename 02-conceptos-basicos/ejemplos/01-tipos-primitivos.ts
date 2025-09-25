/**
 * Ejemplos de Tipos Primitivos en TypeScript
 * 
 * Los tipos primitivos son los tipos básicos que TypeScript hereda de JavaScript.
 * Incluyen string, number, boolean, null, undefined, symbol y bigint.
 */

// ===== EJEMPLO 1: Tipos String =====

// Declaración explícita de tipo string
let nombre: string = "Juan";
let apellido: string = 'Pérez';
let mensaje: string = `Hola ${nombre} ${apellido}`;

// Inferencia de tipos (TypeScript infiere automáticamente que es string)
let ciudad = "Madrid";
let pais = 'España';
let direccion = `Calle Mayor, ${ciudad}, ${pais}`;

// Métodos de string disponibles
console.log("=== Ejemplos de String ===");
console.log(nombre.toUpperCase()); // "JUAN"
console.log(apellido.toLowerCase()); // "pérez"
console.log(mensaje.length); // Longitud del string
console.log(ciudad.charAt(0)); // "M" (primer carácter)
console.log(pais.includes("pa")); // true

// ===== EJEMPLO 2: Tipos Number =====

// Diferentes formas de declarar números
let edad: number = 25;
let precio: number = 19.99;
let hexadecimal: number = 0xf00d; // 61453 en decimal
let binario: number = 0b1010; // 10 en decimal
let octal: number = 0o744; // 484 en decimal
let notacionCientifica: number = 1.5e3; // 1500

// Inferencia de tipos
let cantidad = 100;
let porcentaje = 15.5;
let temperatura = -5.2;

// Operaciones matemáticas
console.log("\n=== Ejemplos de Number ===");
console.log(edad + 5); // 30
console.log(precio * 1.21); // 24.0879 (con IVA)
console.log(Math.round(porcentaje)); // 16
console.log(Math.max(edad, cantidad)); // 100
console.log(Math.min(precio, temperatura)); // -5.2

// Verificación de números
console.log(Number.isInteger(edad)); // true
console.log(Number.isInteger(precio)); // false
console.log(isNaN(temperatura)); // false
console.log(isFinite(notacionCientifica)); // true

// ===== EJEMPLO 3: Tipos Boolean =====

// Declaración explícita
let esActivo: boolean = true;
let esVisible: boolean = false;
let tienePermisos: boolean = true;

// Inferencia de tipos
let usuarioLogueado = true;
let modoDebug = false;
let configuracionCompleta = true;

// Operaciones booleanas
console.log("\n=== Ejemplos de Boolean ===");
console.log(esActivo && esVisible); // false (AND lógico)
console.log(esActivo || esVisible); // true (OR lógico)
console.log(!esVisible); // true (NOT lógico)
console.log(esActivo === true); // true (comparación estricta)

// Conversiones a boolean
console.log(Boolean("hola")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(42)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// ===== EJEMPLO 4: Null y Undefined =====

// Declaración explícita
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

// En modo estricto, null y undefined no son asignables a otros tipos
let nombreOpcional: string | null = null;
let emailOpcional: string | undefined = undefined;
let telefonoOpcional: string | null | undefined = null;

// Verificación de null y undefined
console.log("\n=== Ejemplos de Null y Undefined ===");
console.log(valorNulo === null); // true
console.log(valorIndefinido === undefined); // true
console.log(nombreOpcional == null); // true (verifica tanto null como undefined)
console.log(emailOpcional == null); // true

// Uso práctico con verificación
function procesarValor(valor: string | null | undefined): string {
  if (valor === null) {
    return "Valor es null";
  }
  if (valor === undefined) {
    return "Valor es undefined";
  }
  return `Valor: ${valor}`;
}

console.log(procesarValor("hola")); // "Valor: hola"
console.log(procesarValor(null)); // "Valor es null"
console.log(procesarValor(undefined)); // "Valor es undefined"

// ===== EJEMPLO 5: Symbol =====

// Creación de símbolos
let simbolo1: symbol = Symbol("descripcion");
let simbolo2: symbol = Symbol("descripcion");
let simbolo3: symbol = Symbol();

// Los símbolos son únicos
console.log("\n=== Ejemplos de Symbol ===");
console.log(simbolo1 === simbolo2); // false (aunque tengan la misma descripción)
console.log(simbolo1 === simbolo1); // true
console.log(simbolo1.toString()); // "Symbol(descripcion)"
console.log(simbolo3.toString()); // "Symbol()"

// Uso de símbolos como claves de objeto
let objetoConSimbolos = {
  [simbolo1]: "valor1",
  [simbolo2]: "valor2",
  nombre: "objeto"
};

console.log(objetoConSimbolos[simbolo1]); // "valor1"
console.log(objetoConSimbolos.nombre); // "objeto"

// ===== EJEMPLO 6: BigInt =====

// Creación de BigInt
let numeroGrande: bigint = 123456789012345678901234567890n;
let otroBigInt: bigint = BigInt("987654321098765432109876543210");

// Operaciones con BigInt
console.log("\n=== Ejemplos de BigInt ===");
console.log(numeroGrande + 1n); // Suma
console.log(numeroGrande * 2n); // Multiplicación
console.log(numeroGrande > otroBigInt); // Comparación
console.log(numeroGrande.toString()); // Conversión a string

// No se pueden mezclar BigInt con Number directamente
// console.log(numeroGrande + 1); // Error: Cannot mix BigInt and other types
console.log(numeroGrande + BigInt(1)); // ✅ Correcto

// ===== EJEMPLO 7: Inferencia de Tipos =====

// TypeScript infiere automáticamente los tipos
let texto = "Hola mundo"; // TypeScript infiere: string
let numero = 42; // TypeScript infiere: number
let booleano = true; // TypeScript infiere: boolean
let nulo = null; // TypeScript infiere: null
let indefinido = undefined; // TypeScript infiere: undefined

console.log("\n=== Ejemplos de Inferencia de Tipos ===");
console.log(typeof texto); // "string"
console.log(typeof numero); // "number"
console.log(typeof booleano); // "boolean"
console.log(typeof nulo); // "object" (comportamiento de JavaScript)
console.log(typeof indefinido); // "undefined"

// ===== EJEMPLO 8: Verificación de Tipos en Tiempo de Compilación =====

function procesarDatos(datos: string | number | boolean): string {
  if (typeof datos === "string") {
    // TypeScript sabe que datos es string aquí
    return datos.toUpperCase();
  } else if (typeof datos === "number") {
    // TypeScript sabe que datos es number aquí
    return datos.toFixed(2);
  } else {
    // TypeScript sabe que datos es boolean aquí
    return datos ? "Verdadero" : "Falso";
  }
}

console.log("\n=== Ejemplos de Verificación de Tipos ===");
console.log(procesarDatos("hola")); // "HOLA"
console.log(procesarDatos(3.14159)); // "3.14"
console.log(procesarDatos(true)); // "Verdadero"

// ===== EJEMPLO 9: Conversiones de Tipo =====

// Conversión explícita
let numeroComoString: string = String(42);
let stringComoNumero: number = Number("123");
let stringComoBoolean: boolean = Boolean("true");

// Conversión con parseInt y parseFloat
let numeroEntero: number = parseInt("123.45");
let numeroDecimal: number = parseFloat("123.45");

console.log("\n=== Ejemplos de Conversiones ===");
console.log(numeroComoString); // "42"
console.log(stringComoNumero); // 123
console.log(stringComoBoolean); // true
console.log(numeroEntero); // 123
console.log(numeroDecimal); // 123.45

// ===== EJEMPLO 10: Casos Especiales =====

// NaN (Not a Number)
let noEsNumero: number = NaN;
console.log("\n=== Casos Especiales ===");
console.log(noEsNumero); // NaN
console.log(isNaN(noEsNumero)); // true
console.log(Number.isNaN(noEsNumero)); // true

// Infinity
let infinito: number = Infinity;
let menosInfinito: number = -Infinity;
console.log(infinito); // Infinity
console.log(menosInfinito); // -Infinity
console.log(isFinite(infinito)); // false

// Verificación de tipos con typeof
function verificarTipo(valor: any): string {
  if (typeof valor === "string") {
    return `Es un string: "${valor}"`;
  } else if (typeof valor === "number") {
    if (isNaN(valor)) {
      return "Es NaN";
    } else if (!isFinite(valor)) {
      return valor > 0 ? "Es +Infinity" : "Es -Infinity";
    }
    return `Es un número: ${valor}`;
  } else if (typeof valor === "boolean") {
    return `Es un boolean: ${valor}`;
  } else if (typeof valor === "undefined") {
    return "Es undefined";
  } else if (valor === null) {
    return "Es null";
  } else if (typeof valor === "symbol") {
    return "Es un symbol";
  } else if (typeof valor === "bigint") {
    return `Es un BigInt: ${valor}`;
  } else {
    return `Es un objeto: ${typeof valor}`;
  }
}

// Pruebas de verificación de tipos
console.log(verificarTipo("hola")); // "Es un string: "hola""
console.log(verificarTipo(42)); // "Es un número: 42"
console.log(verificarTipo(true)); // "Es un boolean: true"
console.log(verificarTipo(null)); // "Es null"
console.log(verificarTipo(undefined)); // "Es undefined"
console.log(verificarTipo(Symbol("test"))); // "Es un symbol"
console.log(verificarTipo(123n)); // "Es un BigInt: 123"
console.log(verificarTipo(NaN)); // "Es NaN"
console.log(verificarTipo(Infinity)); // "Es +Infinity"
console.log(verificarTipo({})); // "Es un objeto: object"

// ===== EJEMPLO 11: Mejores Prácticas =====

// ✅ Bueno: Usar tipos explícitos cuando sea necesario
function calcularArea(radio: number): number {
  return Math.PI * radio * radio;
}

// ✅ Bueno: Dejar que TypeScript infiera cuando sea obvio
let nombreInferido = "Juan"; // TypeScript infiere string
let edadInferida = 25; // TypeScript infiere number

// ✅ Bueno: Usar union types para flexibilidad
function formatearId(id: string | number): string {
  return id.toString();
}

// ✅ Bueno: Verificar tipos antes de usar
function procesarEntrada(entrada: string | null): string {
  if (entrada === null) {
    return "Entrada vacía";
  }
  return entrada.toUpperCase();
}

// ❌ Malo: Usar any innecesariamente
function procesarCualquierCosa(datos: any): any {
  return datos;
}

// ❌ Malo: No verificar null/undefined
function obtenerLongitud(texto: string | null): number {
  // return texto.length; // Error si texto es null
  return texto?.length ?? 0; // ✅ Correcto con optional chaining
}

console.log("\n=== Mejores Prácticas ===");
console.log(calcularArea(5)); // 78.53981633974483
console.log(formatearId("abc123")); // "abc123"
console.log(formatearId(123)); // "123"
console.log(procesarEntrada("hola")); // "HOLA"
console.log(procesarEntrada(null)); // "Entrada vacía"
console.log(obtenerLongitud("test")); // 4
console.log(obtenerLongitud(null)); // 0

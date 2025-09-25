/**
 * EJERCICIOS BÁSICOS DE NARROWING
 * 
 * Estos ejercicios te ayudarán a practicar los conceptos básicos de narrowing en TypeScript.
 * Completa cada función según las instrucciones y verifica que TypeScript infiera correctamente los tipos.
 */

// ===== EJERCICIO 1: Type Guards con typeof =====

/**
 * EJERCICIO 1.1: Función que procesa diferentes tipos de valores
 * 
 * Completa la función para que:
 * - Si el valor es string, retorne el string en mayúsculas
 * - Si el valor es number, retorne el número multiplicado por 2
 * - Si el valor es boolean, retorne "Verdadero" o "Falso"
 * - Para cualquier otro tipo, retorne "Tipo no soportado"
 */
function procesarValor(valor: string | number | boolean | null | undefined): string {
  // TODO: Implementar usando type guards con typeof
  // Pista: Usa typeof para verificar el tipo y hacer narrowing
  
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else if (typeof valor === "number") {
    return (valor * 2).toString();
  } else if (typeof valor === "boolean") {
    return valor ? "Verdadero" : "Falso";
  } else {
    return "Tipo no soportado";
  }
}

/**
 * EJERCICIO 1.2: Función que valida si un valor es un string no vacío
 * 
 * Completa la función para que retorne true solo si el valor es un string con contenido
 */
function esStringNoVacio(valor: unknown): boolean {
  // TODO: Implementar verificación de string no vacío
  // Pista: Verifica que sea string Y que tenga longitud > 0
  
  return typeof valor === "string" && valor.length > 0;
}

/**
 * EJERCICIO 1.3: Función que suma números o concatena strings
 * 
 * Completa la función para que:
 * - Si ambos valores son números, los sume
 * - Si ambos valores son strings, los concatene
 * - Para cualquier otro caso, retorne "Operación no válida"
 */
function combinarValores(a: unknown, b: unknown): string | number {
  // TODO: Implementar usando type guards
  // Pista: Verifica que ambos sean del mismo tipo (number o string)
  
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    return "Operación no válida";
  }
}

// ===== EJERCICIO 2: Narrowing con null/undefined =====

/**
 * EJERCICIO 2.1: Función que procesa valores opcionales
 * 
 * Completa la función para que:
 * - Si el valor es null o undefined, retorne "Valor no disponible"
 * - Si el valor es string, retorne el string en mayúsculas
 * - Si el valor es number, retorne el número formateado con 2 decimales
 */
function procesarValorOpcional(valor: string | number | null | undefined): string {
  // TODO: Implementar verificación de null/undefined
  // Pista: Usa === para verificar null y undefined, o usa != para ambos
  
  if (valor == null) {
    return "Valor no disponible";
  } else if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor.toFixed(2);
  }
}

/**
 * EJERCICIO 2.2: Función que valida configuración
 * 
 * Completa la función para que retorne true solo si:
 * - config no es null ni undefined
 * - config.apiUrl es un string no vacío
 * - config.timeout es un number positivo
 */
interface Configuracion {
  apiUrl: string;
  timeout: number;
}

function esConfiguracionValida(config: Configuracion | null | undefined): boolean {
  // TODO: Implementar validación completa
  // Pista: Verifica null/undefined primero, luego las propiedades
  
  if (config == null) {
    return false;
  }
  
  return (
    typeof config.apiUrl === "string" &&
    config.apiUrl.length > 0 &&
    typeof config.timeout === "number" &&
    config.timeout > 0
  );
}

// ===== EJERCICIO 3: Narrowing con el operador 'in' =====

/**
 * EJERCICIO 3.1: Función que procesa diferentes tipos de objetos
 * 
 * Completa la función para que:
 * - Si el objeto tiene 'email', trátelo como Usuario
 * - Si el objeto tiene 'precio', trátelo como Producto
 * - Para cualquier otro caso, retorne "Tipo de objeto no reconocido"
 */
interface Usuario {
  nombre: string;
  email: string;
}

interface Producto {
  nombre: string;
  precio: number;
}

function procesarObjeto(obj: Usuario | Producto | object): string {
  // TODO: Implementar usando el operador 'in'
  // Pista: Usa 'email' in obj y 'precio' in obj
  
  if ("email" in obj) {
    return `Usuario: ${obj.nombre} (${obj.email})`;
  } else if ("precio" in obj) {
    return `Producto: ${obj.nombre} - $${obj.precio}`;
  } else {
    return "Tipo de objeto no reconocido";
  }
}

// ===== EJERCICIO 4: Narrowing con instanceof =====

/**
 * EJERCICIO 4.1: Función que procesa diferentes tipos de fechas
 * 
 * Completa la función para que:
 * - Si es Date, retorne la fecha formateada
 * - Si es string, retorne el string en mayúsculas
 * - Para cualquier otro tipo, retorne "Tipo no soportado"
 */
function procesarFecha(fecha: Date | string | unknown): string {
  // TODO: Implementar usando instanceof
  // Pista: Usa fecha instanceof Date
  
  if (fecha instanceof Date) {
    return fecha.toLocaleDateString();
  } else if (typeof fecha === "string") {
    return fecha.toUpperCase();
  } else {
    return "Tipo no soportado";
  }
}

// ===== EJERCICIO 5: Narrowing por Veracidad =====

/**
 * EJERCICIO 5.1: Función que filtra valores truthy
 * 
 * Completa la función para que retorne un array solo con valores truthy
 */
function filtrarValoresTruthy(valores: unknown[]): unknown[] {
  // TODO: Implementar filtrado de valores truthy
  // Pista: Usa filter con una función que retorne el valor directamente
  
  return valores.filter(valor => Boolean(valor));
}

/**
 * EJERCICIO 5.2: Función que procesa valores opcionales con veracidad
 * 
 * Completa la función para que:
 * - Si el valor es falsy, retorne "Valor no disponible"
 * - Si el valor es string, retorne el string
 * - Si el valor es number, retorne el número como string
 */
function procesarValorConVeracidad(valor: string | number | null | undefined | ""): string {
  // TODO: Implementar usando veracidad
  // Pista: Usa if (valor) para verificar si es truthy
  
  if (!valor) {
    return "Valor no disponible";
  } else if (typeof valor === "string") {
    return valor;
  } else {
    return valor.toString();
  }
}

// ===== EJERCICIO 6: Narrowing Múltiple =====

/**
 * EJERCICIO 6.1: Función que valida y procesa datos de entrada
 * 
 * Completa la función para que:
 * - Verifique que datos no sea null ni undefined
 * - Verifique que datos sea un objeto
 * - Verifique que tenga las propiedades requeridas
 * - Retorne un mensaje de éxito o error
 */
interface DatosEntrada {
  nombre: string;
  edad: number;
  email: string;
}

function validarDatosEntrada(datos: unknown): string {
  // TODO: Implementar validación múltiple
  // Pista: Verifica null/undefined, luego tipo object, luego propiedades
  
  if (datos == null) {
    return "Error: Datos no pueden ser null o undefined";
  }
  
  if (typeof datos !== "object") {
    return "Error: Datos deben ser un objeto";
  }
  
  const obj = datos as any;
  
  if (typeof obj.nombre !== "string" || obj.nombre.length === 0) {
    return "Error: Nombre es requerido y debe ser string no vacío";
  }
  
  if (typeof obj.edad !== "number" || obj.edad <= 0) {
    return "Error: Edad debe ser un número positivo";
  }
  
  if (typeof obj.email !== "string" || !obj.email.includes("@")) {
    return "Error: Email debe ser un string válido";
  }
  
  return `✅ Datos válidos: ${obj.nombre}, ${obj.edad} años, ${obj.email}`;
}

// ===== EJERCICIOS DE PRUEBA =====

console.log("=== EJERCICIOS BÁSICOS DE NARROWING ===");

// Prueba Ejercicio 1.1
console.log("\n--- Ejercicio 1.1: procesarValor ---");
console.log(procesarValor("hola")); // "HOLA"
console.log(procesarValor(42)); // "84"
console.log(procesarValor(true)); // "Verdadero"
console.log(procesarValor(null)); // "Tipo no soportado"

// Prueba Ejercicio 1.2
console.log("\n--- Ejercicio 1.2: esStringNoVacio ---");
console.log(esStringNoVacio("hola")); // true
console.log(esStringNoVacio("")); // false
console.log(esStringNoVacio(42)); // false
console.log(esStringNoVacio(null)); // false

// Prueba Ejercicio 1.3
console.log("\n--- Ejercicio 1.3: combinarValores ---");
console.log(combinarValores(5, 3)); // 8
console.log(combinarValores("hola", "mundo")); // "holamundo"
console.log(combinarValores(5, "texto")); // "Operación no válida"

// Prueba Ejercicio 2.1
console.log("\n--- Ejercicio 2.1: procesarValorOpcional ---");
console.log(procesarValorOpcional("typescript")); // "TYPESCRIPT"
console.log(procesarValorOpcional(3.14159)); // "3.14"
console.log(procesarValorOpcional(null)); // "Valor no disponible"
console.log(procesarValorOpcional(undefined)); // "Valor no disponible"

// Prueba Ejercicio 2.2
console.log("\n--- Ejercicio 2.2: esConfiguracionValida ---");
console.log(esConfiguracionValida({ apiUrl: "https://api.com", timeout: 5000 })); // true
console.log(esConfiguracionValida({ apiUrl: "", timeout: 5000 })); // false
console.log(esConfiguracionValida({ apiUrl: "https://api.com", timeout: -1000 })); // false
console.log(esConfiguracionValida(null)); // false

// Prueba Ejercicio 3.1
console.log("\n--- Ejercicio 3.1: procesarObjeto ---");
const usuario: Usuario = { nombre: "Juan", email: "juan@email.com" };
const producto: Producto = { nombre: "Laptop", precio: 999.99 };
console.log(procesarObjeto(usuario)); // "Usuario: Juan (juan@email.com)"
console.log(procesarObjeto(producto)); // "Producto: Laptop - $999.99"
console.log(procesarObjeto({})); // "Tipo de objeto no reconocido"

// Prueba Ejercicio 4.1
console.log("\n--- Ejercicio 4.1: procesarFecha ---");
const fecha = new Date();
console.log(procesarFecha(fecha)); // Fecha formateada
console.log(procesarFecha("2023-12-25")); // "2023-12-25"
console.log(procesarFecha(42)); // "Tipo no soportado"

// Prueba Ejercicio 5.1
console.log("\n--- Ejercicio 5.1: filtrarValoresTruthy ---");
const valores = ["hola", "", 0, 42, null, undefined, "mundo"];
console.log(filtrarValoresTruthy(valores)); // ["hola", 42, "mundo"]

// Prueba Ejercicio 5.2
console.log("\n--- Ejercicio 5.2: procesarValorConVeracidad ---");
console.log(procesarValorConVeracidad("hola")); // "hola"
console.log(procesarValorConVeracidad(42)); // "42"
console.log(procesarValorConVeracidad("")); // "Valor no disponible"
console.log(procesarValorConVeracidad(null)); // "Valor no disponible"

// Prueba Ejercicio 6.1
console.log("\n--- Ejercicio 6.1: validarDatosEntrada ---");
const datosValidos: DatosEntrada = { nombre: "Ana", edad: 25, email: "ana@email.com" };
const datosInvalidos = { nombre: "", edad: -5, email: "email-invalido" };
console.log(validarDatosEntrada(datosValidos)); // "✅ Datos válidos: Ana, 25 años, ana@email.com"
console.log(validarDatosEntrada(datosInvalidos)); // Error de validación
console.log(validarDatosEntrada(null)); // "Error: Datos no pueden ser null o undefined"

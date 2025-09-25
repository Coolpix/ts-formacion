/**
 * EJERCICIOS BÁSICOS DE TYPESCRIPT
 * 
 * Estos ejercicios te ayudarán a practicar los conceptos básicos de TypeScript.
 * Completa cada función según las instrucciones y verifica que TypeScript infiera correctamente los tipos.
 */

// ===== EJERCICIO 1: Tipos Primitivos =====

/**
 * EJERCICIO 1.1: Declaración de Variables
 * 
 * Declara las siguientes variables con sus tipos correspondientes:
 * - nombre: string con valor "Juan"
 * - edad: number con valor 25
 * - activo: boolean con valor true
 * - salario: number con valor 3000.50
 */
// TODO: Declara las variables aquí
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
let salario: number = 3000.50;

/**
 * EJERCICIO 1.2: Función de Saludo
 * 
 * Crea una función que reciba un nombre (string) y retorne un saludo (string).
 * La función debe retornar "Hola, [nombre]!" donde [nombre] es el parámetro recibido.
 */
function saludar(nombre: string): string {
  // TODO: Implementa la función aquí
  return `Hola, ${nombre}!`;
}

/**
 * EJERCICIO 1.3: Función de Cálculo
 * 
 * Crea una función que reciba dos números y retorne su suma.
 */
function sumar(a: number, b: number): number {
  // TODO: Implementa la función aquí
  return a + b;
}

/**
 * EJERCICIO 1.4: Función de Verificación
 * 
 * Crea una función que reciba un número y retorne true si es par, false si es impar.
 */
function esPar(numero: number): boolean {
  // TODO: Implementa la función aquí
  return numero % 2 === 0;
}

// ===== EJERCICIO 2: Arrays =====

/**
 * EJERCICIO 2.1: Array de Números
 * 
 * Crea un array de números del 1 al 5 y decláralo con el tipo correcto.
 */
// TODO: Declara el array aquí
let numeros: number[] = [1, 2, 3, 4, 5];

/**
 * EJERCICIO 2.2: Función de Promedio
 * 
 * Crea una función que reciba un array de números y retorne el promedio.
 */
function calcularPromedio(numeros: number[]): number {
  // TODO: Implementa la función aquí
  if (numeros.length === 0) {
    return 0;
  }
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

/**
 * EJERCICIO 2.3: Función de Filtrado
 * 
 * Crea una función que reciba un array de números y retorne solo los números pares.
 */
function filtrarPares(numeros: number[]): number[] {
  // TODO: Implementa la función aquí
  return numeros.filter(numero => numero % 2 === 0);
}

/**
 * EJERCICIO 2.4: Función de Búsqueda
 * 
 * Crea una función que reciba un array de strings y una palabra,
 * y retorne true si la palabra está en el array, false si no.
 */
function buscarPalabra(palabras: string[], palabra: string): boolean {
  // TODO: Implementa la función aquí
  return palabras.includes(palabra);
}

// ===== EJERCICIO 3: Objetos =====

/**
 * EJERCICIO 3.1: Objeto Usuario
 * 
 * Crea un objeto usuario con las siguientes propiedades:
 * - id: number
 * - nombre: string
 * - email: string
 * - activo: boolean
 */
// TODO: Declara el objeto aquí
let usuario: { id: number; nombre: string; email: string; activo: boolean } = {
  id: 1,
  nombre: "Ana",
  email: "ana@email.com",
  activo: true
};

/**
 * EJERCICIO 3.2: Función de Creación de Usuario
 * 
 * Crea una función que reciba los parámetros necesarios y retorne un objeto usuario.
 */
function crearUsuario(id: number, nombre: string, email: string, activo: boolean): { id: number; nombre: string; email: string; activo: boolean } {
  // TODO: Implementa la función aquí
  return { id, nombre, email, activo };
}

/**
 * EJERCICIO 3.3: Función de Información de Usuario
 * 
 * Crea una función que reciba un objeto usuario y retorne un string con su información.
 * Formato: "Usuario [id]: [nombre] ([email]) - [activo/inactivo]"
 */
function obtenerInformacionUsuario(usuario: { id: number; nombre: string; email: string; activo: boolean }): string {
  // TODO: Implementa la función aquí
  const estado = usuario.activo ? "activo" : "inactivo";
  return `Usuario ${usuario.id}: ${usuario.nombre} (${usuario.email}) - ${estado}`;
}

// ===== EJERCICIO 4: Union Types =====

/**
 * EJERCICIO 4.1: Función de Formateo
 * 
 * Crea una función que reciba un valor que puede ser string o number
 * y retorne un string formateado.
 * - Si es string: retorna el string en mayúsculas
 * - Si es number: retorna el número como string con 2 decimales
 */
function formatearValor(valor: string | number): string {
  // TODO: Implementa la función aquí
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor.toFixed(2);
  }
}

/**
 * EJERCICIO 4.2: Función de Validación
 * 
 * Crea una función que reciba un valor que puede ser string, number o boolean
 * y retorne true si el valor es "válido" (no es null, undefined, string vacío, 0, o false).
 */
function esValido(valor: string | number | boolean | null | undefined): boolean {
  // TODO: Implementa la función aquí
  if (valor === null || valor === undefined) {
    return false;
  }
  if (typeof valor === "string" && valor === "") {
    return false;
  }
  if (typeof valor === "number" && valor === 0) {
    return false;
  }
  if (typeof valor === "boolean" && valor === false) {
    return false;
  }
  return true;
}

// ===== EJERCICIO 5: Parámetros Opcionales =====

/**
 * EJERCICIO 5.1: Función con Parámetro Opcional
 * 
 * Crea una función que reciba un nombre (string) y un saludo opcional (string).
 * Si no se proporciona saludo, usa "Hola" por defecto.
 * Retorna: "[saludo], [nombre]!"
 */
function saludarPersonalizado(nombre: string, saludo?: string): string {
  // TODO: Implementa la función aquí
  const saludoFinal = saludo || "Hola";
  return `${saludoFinal}, ${nombre}!`;
}

/**
 * EJERCICIO 5.2: Función con Parámetros por Defecto
 * 
 * Crea una función que reciba un mensaje (string) y opcionalmente:
 * - formato: "upper" | "lower" | "normal" (por defecto "normal")
 * - prefijo: string (por defecto "")
 * Retorna el mensaje formateado con el prefijo.
 */
function formatearMensaje(mensaje: string, formato: "upper" | "lower" | "normal" = "normal", prefijo: string = ""): string {
  // TODO: Implementa la función aquí
  let mensajeFormateado: string;
  
  switch (formato) {
    case "upper":
      mensajeFormateado = mensaje.toUpperCase();
      break;
    case "lower":
      mensajeFormateado = mensaje.toLowerCase();
      break;
    default:
      mensajeFormateado = mensaje;
  }
  
  return prefijo + mensajeFormateado;
}

// ===== EJERCICIO 6: Funciones de Flecha =====

/**
 * EJERCICIO 6.1: Función de Flecha Básica
 * 
 * Convierte la función sumar a una función de flecha.
 */
const sumarFlecha = (a: number, b: number): number => a + b;

/**
 * EJERCICIO 6.2: Función de Flecha con Múltiples Líneas
 * 
 * Crea una función de flecha que reciba un array de números y retorne:
 * - La suma de todos los números
 * - El número más grande
 * - El número más pequeño
 * Retorna un objeto con estas tres propiedades.
 */
const analizarNumeros = (numeros: number[]): { suma: number; maximo: number; minimo: number } => {
  // TODO: Implementa la función aquí
  if (numeros.length === 0) {
    return { suma: 0, maximo: 0, minimo: 0 };
  }
  
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);
  
  return { suma, maximo, minimo };
};

// ===== EJERCICIO 7: Tuplas =====

/**
 * EJERCICIO 7.1: Tupla de Coordenadas
 * 
 * Crea una tupla que represente coordenadas (x, y) y declárala con el tipo correcto.
 */
// TODO: Declara la tupla aquí
let coordenada: [number, number] = [10, 20];

/**
 * EJERCICIO 7.2: Función de Distancia
 * 
 * Crea una función que reciba dos tuplas de coordenadas y calcule la distancia entre ellas.
 * Usa la fórmula: √((x2-x1)² + (y2-y1)²)
 */
function calcularDistancia(punto1: [number, number], punto2: [number, number]): number {
  // TODO: Implementa la función aquí
  const dx = punto2[0] - punto1[0];
  const dy = punto2[1] - punto1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * EJERCICIO 7.3: Función de División con Resto
 * 
 * Crea una función que reciba dos números y retorne una tupla con el cociente y el resto.
 */
function dividirConResto(dividendo: number, divisor: number): [number, number] {
  // TODO: Implementa la función aquí
  const cociente = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;
  return [cociente, resto];
}

// ===== EJERCICIO 8: Literal Types =====

/**
 * EJERCICIO 8.1: Función con Literal Types
 * 
 * Crea una función que reciba un estado que solo puede ser "activo", "inactivo" o "pendiente"
 * y retorne un mensaje apropiado para cada estado.
 */
function procesarEstado(estado: "activo" | "inactivo" | "pendiente"): string {
  // TODO: Implementa la función aquí
  switch (estado) {
    case "activo":
      return "El sistema está funcionando correctamente";
    case "inactivo":
      return "El sistema está detenido";
    case "pendiente":
      return "El sistema está iniciando";
  }
}

/**
 * EJERCICIO 8.2: Función con Literal Types de Números
 * 
 * Crea una función que reciba un nivel (1, 2, 3, 4, o 5) y retorne la descripción del nivel.
 */
function obtenerDescripcionNivel(nivel: 1 | 2 | 3 | 4 | 5): string {
  // TODO: Implementa la función aquí
  switch (nivel) {
    case 1:
      return "Principiante";
    case 2:
      return "Básico";
    case 3:
      return "Intermedio";
    case 4:
      return "Avanzado";
    case 5:
      return "Experto";
  }
}

// ===== EJERCICIOS DE PRUEBA =====

console.log("=== EJERCICIOS BÁSICOS DE TYPESCRIPT ===");

// Prueba Ejercicio 1
console.log("\n--- Ejercicio 1: Tipos Primitivos ---");
console.log("Variables:", { nombre, edad, activo, salario });
console.log(saludar("María")); // "Hola, María!"
console.log(sumar(5, 3)); // 8
console.log(esPar(4)); // true
console.log(esPar(3)); // false

// Prueba Ejercicio 2
console.log("\n--- Ejercicio 2: Arrays ---");
console.log("Array de números:", numeros);
console.log("Promedio:", calcularPromedio([1, 2, 3, 4, 5])); // 3
console.log("Números pares:", filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log("Buscar palabra:", buscarPalabra(["hola", "mundo", "typescript"], "mundo")); // true
console.log("Buscar palabra:", buscarPalabra(["hola", "mundo", "typescript"], "javascript")); // false

// Prueba Ejercicio 3
console.log("\n--- Ejercicio 3: Objetos ---");
console.log("Usuario:", usuario);
const nuevoUsuario = crearUsuario(2, "Carlos", "carlos@email.com", false);
console.log("Nuevo usuario:", nuevoUsuario);
console.log(obtenerInformacionUsuario(usuario)); // "Usuario 1: Ana (ana@email.com) - activo"
console.log(obtenerInformacionUsuario(nuevoUsuario)); // "Usuario 2: Carlos (carlos@email.com) - inactivo"

// Prueba Ejercicio 4
console.log("\n--- Ejercicio 4: Union Types ---");
console.log(formatearValor("hola")); // "HOLA"
console.log(formatearValor(3.14159)); // "3.14"
console.log(esValido("texto")); // true
console.log(esValido(42)); // true
console.log(esValido(true)); // true
console.log(esValido("")); // false
console.log(esValido(0)); // false
console.log(esValido(false)); // false
console.log(esValido(null)); // false
console.log(esValido(undefined)); // false

// Prueba Ejercicio 5
console.log("\n--- Ejercicio 5: Parámetros Opcionales ---");
console.log(saludarPersonalizado("Juan")); // "Hola, Juan!"
console.log(saludarPersonalizado("Ana", "Buenos días")); // "Buenos días, Ana!"
console.log(formatearMensaje("Hola Mundo")); // "Hola Mundo"
console.log(formatearMensaje("Hola Mundo", "upper")); // "HOLA MUNDO"
console.log(formatearMensaje("Hola Mundo", "lower", ">>> ")); // ">>> hola mundo"

// Prueba Ejercicio 6
console.log("\n--- Ejercicio 6: Funciones de Flecha ---");
console.log(sumarFlecha(10, 5)); // 15
console.log(analizarNumeros([1, 5, 3, 9, 2])); // { suma: 20, maximo: 9, minimo: 1 }
console.log(analizarNumeros([])); // { suma: 0, maximo: 0, minimo: 0 }

// Prueba Ejercicio 7
console.log("\n--- Ejercicio 7: Tuplas ---");
console.log("Coordenada:", coordenada);
console.log("Distancia:", calcularDistancia([0, 0], [3, 4])); // 5
console.log("División con resto:", dividirConResto(17, 5)); // [3, 2]
console.log("División con resto:", dividirConResto(20, 4)); // [5, 0]

// Prueba Ejercicio 8
console.log("\n--- Ejercicio 8: Literal Types ---");
console.log(procesarEstado("activo")); // "El sistema está funcionando correctamente"
console.log(procesarEstado("inactivo")); // "El sistema está detenido"
console.log(procesarEstado("pendiente")); // "El sistema está iniciando"
console.log(obtenerDescripcionNivel(1)); // "Principiante"
console.log(obtenerDescripcionNivel(3)); // "Intermedio"
console.log(obtenerDescripcionNivel(5)); // "Experto"

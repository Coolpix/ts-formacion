/**
 * Ejemplos de Funciones en TypeScript
 * 
 * Las funciones en TypeScript permiten especificar tipos para parámetros
 * y valores de retorno, proporcionando mayor seguridad de tipos.
 */

// ===== EJEMPLO 1: Funciones Básicas =====

// Función con tipos explícitos
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Función sin valor de retorno (void)
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
}

// Función con múltiples parámetros
function sumar(a: number, b: number): number {
  return a + b;
}

// Función con parámetros de diferentes tipos
function crearUsuario(id: number, nombre: string, activo: boolean): string {
  return `Usuario ${id}: ${nombre} (${activo ? 'activo' : 'inactivo'})`;
}

console.log("=== Funciones Básicas ===");
console.log(saludar("Juan")); // "Hola, Juan!"
mostrarMensaje("Este es un mensaje");
console.log(sumar(5, 3)); // 8
console.log(crearUsuario(1, "Ana", true)); // "Usuario 1: Ana (activo)"

// ===== EJEMPLO 2: Parámetros Opcionales =====

// Parámetro opcional con ?
function crearPerfil(nombre: string, email?: string): string {
  if (email) {
    return `${nombre} - ${email}`;
  }
  return nombre;
}

// Parámetros opcionales con valores por defecto
function configurarServidor(host: string, puerto: number = 3000, debug: boolean = false): string {
  return `Servidor: ${host}:${puerto} (debug: ${debug})`;
}

// Múltiples parámetros opcionales
function procesarDatos(datos: string, opciones?: { formato?: string; codificacion?: string }): string {
  const formato = opciones?.formato || "json";
  const codificacion = opciones?.codificacion || "utf-8";
  return `Procesando ${datos} en formato ${formato} con codificación ${codificacion}`;
}

console.log("\n=== Parámetros Opcionales ===");
console.log(crearPerfil("Juan")); // "Juan"
console.log(crearPerfil("Ana", "ana@email.com")); // "Ana - ana@email.com"
console.log(configurarServidor("localhost")); // "Servidor: localhost:3000 (debug: false)"
console.log(configurarServidor("localhost", 8080)); // "Servidor: localhost:8080 (debug: false)"
console.log(configurarServidor("localhost", 8080, true)); // "Servidor: localhost:8080 (debug: true)"
console.log(procesarDatos("archivo.txt")); // "Procesando archivo.txt en formato json con codificación utf-8"
console.log(procesarDatos("archivo.txt", { formato: "xml" })); // "Procesando archivo.txt en formato xml con codificación utf-8"

// ===== EJEMPLO 3: Parámetros Rest =====

// Función con parámetros rest
function sumarNumeros(...numeros: number[]): number {
  return numeros.reduce((suma, numero) => suma + numero, 0);
}

// Función con parámetros normales y rest
function crearMensaje(prefijo: string, ...partes: string[]): string {
  return prefijo + " " + partes.join(" ");
}

// Función que acepta diferentes tipos con rest
function procesarValores(tipo: string, ...valores: (string | number)[]): string {
  return `${tipo}: ${valores.join(", ")}`;
}

console.log("\n=== Parámetros Rest ===");
console.log(sumarNumeros(1, 2, 3, 4, 5)); // 15
console.log(sumarNumeros(10, 20)); // 30
console.log(crearMensaje("Hola", "mundo", "desde", "TypeScript")); // "Hola mundo desde TypeScript"
console.log(procesarValores("números", 1, 2, 3)); // "números: 1, 2, 3"
console.log(procesarValores("texto", "a", "b", "c")); // "texto: a, b, c"

// ===== EJEMPLO 4: Funciones de Flecha =====

// Función de flecha básica
const multiplicar = (a: number, b: number): number => a * b;

// Función de flecha con múltiples líneas
const procesarTexto = (texto: string): string => {
  const textoLimpio = texto.trim();
  const textoMayusculas = textoLimpio.toUpperCase();
  return textoMayusculas;
};

// Función de flecha sin parámetros
const obtenerTimestamp = (): number => Date.now();

// Función de flecha con un solo parámetro (paréntesis opcionales)
const duplicar = (numero: number): number => numero * 2;

console.log("\n=== Funciones de Flecha ===");
console.log(multiplicar(4, 5)); // 20
console.log(procesarTexto("  hola mundo  ")); // "HOLA MUNDO"
console.log(obtenerTimestamp()); // Timestamp actual
console.log(duplicar(7)); // 14

// ===== EJEMPLO 5: Funciones como Parámetros =====

// Función que acepta otra función como parámetro
function ejecutarConCallback(valor: number, callback: (num: number) => number): number {
  return callback(valor);
}

// Función que acepta función con múltiples parámetros
function procesarConFuncion(datos: string[], procesador: (item: string) => string): string[] {
  return datos.map(procesador);
}

// Función que retorna una función
function crearMultiplicador(factor: number): (valor: number) => number {
  return (valor: number) => valor * factor;
}

console.log("\n=== Funciones como Parámetros ===");
console.log(ejecutarConCallback(5, (x) => x * 2)); // 10
console.log(ejecutarConCallback(3, (x) => x + 1)); // 4
console.log(procesarConFuncion(["hola", "mundo"], (s) => s.toUpperCase())); // ["HOLA", "MUNDO"]

const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(4)); // 12

// ===== EJEMPLO 6: Overloads de Funciones =====

// Declarar múltiples firmas de función
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: boolean): string;
// Implementación real
function procesar(valor: string | number | boolean): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else if (typeof valor === "number") {
    return valor * 2;
  } else {
    return valor ? "Verdadero" : "Falso";
  }
}

console.log("\n=== Overloads de Funciones ===");
console.log(procesar("hola")); // "HOLA"
console.log(procesar(5)); // 10
console.log(procesar(true)); // "Verdadero"

// ===== EJEMPLO 7: Funciones con Union Types =====

// Función que acepta múltiples tipos
function formatearValor(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    return `Texto: ${valor}`;
  } else if (typeof valor === "number") {
    return `Número: ${valor}`;
  } else {
    return `Booleano: ${valor}`;
  }
}

// Función que retorna union type
function obtenerValor(tipo: "string" | "number" | "boolean"): string | number | boolean {
  switch (tipo) {
    case "string":
      return "ejemplo";
    case "number":
      return 42;
    case "boolean":
      return true;
  }
}

console.log("\n=== Funciones con Union Types ===");
console.log(formatearValor("hola")); // "Texto: hola"
console.log(formatearValor(123)); // "Número: 123"
console.log(formatearValor(true)); // "Booleano: true"
console.log(obtenerValor("string")); // "ejemplo"
console.log(obtenerValor("number")); // 42
console.log(obtenerValor("boolean")); // true

// ===== EJEMPLO 8: Funciones con Parámetros de Objeto =====

// Función con parámetro de objeto
function crearUsuarioCompleto(datos: { nombre: string; email: string; edad?: number }): string {
  const edadTexto = datos.edad ? `, ${datos.edad} años` : "";
  return `${datos.nombre} (${datos.email})${edadTexto}`;
}

// Función con parámetro de objeto y destructuring
function procesarConfiguracion({ host, puerto, debug = false }: { host: string; puerto: number; debug?: boolean }): string {
  return `Configuración: ${host}:${puerto} (debug: ${debug})`;
}

// Función con parámetro de objeto complejo
function procesarDatosComplejos(opciones: {
  datos: string[];
  formato: "json" | "xml" | "csv";
  codificacion?: string;
  comprimir?: boolean;
}): string {
  const { datos, formato, codificacion = "utf-8", comprimir = false } = opciones;
  return `Procesando ${datos.length} elementos en formato ${formato} (${codificacion}${comprimir ? ", comprimido" : ""})`;
}

console.log("\n=== Funciones con Parámetros de Objeto ===");
console.log(crearUsuarioCompleto({ nombre: "Juan", email: "juan@email.com" })); // "Juan (juan@email.com)"
console.log(crearUsuarioCompleto({ nombre: "Ana", email: "ana@email.com", edad: 25 })); // "Ana (ana@email.com), 25 años"
console.log(procesarConfiguracion({ host: "localhost", puerto: 3000 })); // "Configuración: localhost:3000 (debug: false)"
console.log(procesarConfiguracion({ host: "localhost", puerto: 3000, debug: true })); // "Configuración: localhost:3000 (debug: true)"
console.log(procesarDatosComplejos({ datos: ["a", "b", "c"], formato: "json" })); // "Procesando 3 elementos en formato json (utf-8)"

// ===== EJEMPLO 9: Funciones Generadoras =====

// Función generadora básica
function* generarNumeros(limite: number): Generator<number, void, unknown> {
  for (let i = 0; i < limite; i++) {
    yield i;
  }
}

// Función generadora con diferentes tipos
function* generarPares(): Generator<[number, number], void, unknown> {
  let i = 0;
  while (true) {
    yield [i, i * 2];
    i++;
  }
}

console.log("\n=== Funciones Generadoras ===");
const generador = generarNumeros(5);
console.log(generador.next().value); // 0
console.log(generador.next().value); // 1
console.log(generador.next().value); // 2

const generadorPares = generarPares();
console.log(generadorPares.next().value); // [0, 0]
console.log(generadorPares.next().value); // [1, 2]
console.log(generadorPares.next().value); // [2, 4]

// ===== EJEMPLO 10: Funciones Asíncronas =====

// Función asíncrona básica
async function obtenerDatos(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });
}

// Función asíncrona con parámetros
async function procesarAsync(datos: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Procesado: ${datos}`), 500);
  });
}

// Función asíncrona que puede fallar
async function operacionRiesgosa(exito: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject(new Error("Operación falló"));
      }
    }, 1000);
  });
}

console.log("\n=== Funciones Asíncronas ===");
// Nota: En un entorno real, usarías await o .then()
obtenerDatos().then(resultado => console.log(resultado)); // "Datos obtenidos"
procesarAsync("test").then(resultado => console.log(resultado)); // "Procesado: test"
operacionRiesgosa(true).then(resultado => console.log(resultado)); // "Operación exitosa"

// ===== EJEMPLO 11: Funciones con Tipos de Retorno Complejos =====

// Función que retorna un objeto
function crearPerfilCompleto(nombre: string, email: string): { nombre: string; email: string; activo: boolean; fechaCreacion: Date } {
  return {
    nombre,
    email,
    activo: true,
    fechaCreacion: new Date()
  };
}

// Función que retorna una tupla
function dividirConResto(dividendo: number, divisor: number): [number, number] {
  const cociente = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;
  return [cociente, resto];
}

// Función que retorna un array de objetos
function generarUsuarios(cantidad: number): Array<{ id: number; nombre: string; activo: boolean }> {
  const usuarios = [];
  for (let i = 1; i <= cantidad; i++) {
    usuarios.push({
      id: i,
      nombre: `Usuario${i}`,
      activo: i % 2 === 0
    });
  }
  return usuarios;
}

console.log("\n=== Funciones con Tipos de Retorno Complejos ===");
console.log(crearPerfilCompleto("Juan", "juan@email.com"));
console.log(dividirConResto(17, 5)); // [3, 2]
console.log(generarUsuarios(3)); // Array de 3 usuarios

// ===== EJEMPLO 12: Mejores Prácticas =====

// ✅ Bueno: Tipos explícitos para parámetros y retorno
function calcularArea(radio: number): number {
  return Math.PI * radio * radio;
}

// ✅ Bueno: Parámetros opcionales con valores por defecto
function formatearMensaje(texto: string, formato: "upper" | "lower" | "normal" = "normal"): string {
  switch (formato) {
    case "upper":
      return texto.toUpperCase();
    case "lower":
      return texto.toLowerCase();
    default:
      return texto;
  }
}

// ✅ Bueno: Uso de union types para flexibilidad
function formatearId(id: string | number): string {
  return id.toString();
}

// ✅ Bueno: Función pura (sin efectos secundarios)
function esPar(numero: number): boolean {
  return numero % 2 === 0;
}

// ❌ Malo: Usar any
function procesarCualquierCosa(datos: any): any {
  return datos;
}

// ❌ Malo: No especificar tipos de retorno
function procesarSinTipo(datos: string) {
  return datos.toUpperCase(); // TypeScript infiere string, pero es mejor ser explícito
}

console.log("\n=== Mejores Prácticas ===");
console.log(calcularArea(5)); // 78.53981633974483
console.log(formatearMensaje("Hola Mundo")); // "Hola Mundo"
console.log(formatearMensaje("Hola Mundo", "upper")); // "HOLA MUNDO"
console.log(formatearId("abc123")); // "abc123"
console.log(formatearId(123)); // "123"
console.log(esPar(4)); // true
console.log(esPar(3)); // false

// ===== EJEMPLO 13: Casos de Uso Avanzados =====

// Función con parámetros rest y tipos específicos
function crearQuery(tabla: string, ...condiciones: Array<{ campo: string; valor: string | number | boolean; operador: "=" | "!=" | ">" | "<" }>): string {
  let query = `SELECT * FROM ${tabla}`;
  if (condiciones.length > 0) {
    const whereClause = condiciones.map(cond => `${cond.campo} ${cond.operador} ${cond.valor}`).join(" AND ");
    query += ` WHERE ${whereClause}`;
  }
  return query;
}

// Función con callback tipado
function procesarArray<T>(array: T[], procesador: (item: T, index: number) => T): T[] {
  return array.map(procesador);
}

// Función con tipos genéricos
function intercambiar<T>(a: T, b: T): [T, T] {
  return [b, a];
}

console.log("\n=== Casos de Uso Avanzados ===");
console.log(crearQuery("usuarios", { campo: "activo", valor: true, operador: "=" }));
console.log(procesarArray([1, 2, 3], (num, index) => num * index)); // [0, 2, 6]
console.log(intercambiar("a", "b")); // ["b", "a"]
console.log(intercambiar(1, 2)); // [2, 1]

/**
 * Ejemplos de Assertion Functions (Funciones de Aserción)
 * 
 * Las assertion functions son similares a los type predicates pero lanzan errores
 * si la condición no se cumple. Son útiles para validaciones que deben fallar
 * si los datos no son del tipo esperado.
 */

// ===== EJEMPLO 1: Assertion Functions Básicas =====

function assertIsString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error(`Se esperaba string, pero se recibió ${typeof valor}`);
  }
}

function assertIsNumber(valor: unknown): asserts valor is number {
  if (typeof valor !== "number" || isNaN(valor)) {
    throw new Error(`Se esperaba number, pero se recibió ${typeof valor}`);
  }
}

function assertIsBoolean(valor: unknown): asserts valor is boolean {
  if (typeof valor !== "boolean") {
    throw new Error(`Se esperaba boolean, pero se recibió ${typeof valor}`);
  }
}

function procesarValorConAsercion(valor: unknown): string {
  try {
    assertIsString(valor);
    // Después de la aserción, TypeScript sabe que valor es string
    return valor.toUpperCase();
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 2: Assertion Functions para Objetos =====

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

function assertIsUsuario(valor: unknown): asserts valor is Usuario {
  if (typeof valor !== "object" || valor === null) {
    throw new Error("Se esperaba un objeto Usuario");
  }
  
  const obj = valor as any;
  
  if (typeof obj.id !== "number") {
    throw new Error("Usuario.id debe ser number");
  }
  
  if (typeof obj.nombre !== "string") {
    throw new Error("Usuario.nombre debe ser string");
  }
  
  if (typeof obj.email !== "string") {
    throw new Error("Usuario.email debe ser string");
  }
  
  if (typeof obj.activo !== "boolean") {
    throw new Error("Usuario.activo debe ser boolean");
  }
}

function procesarUsuarioConAsercion(datos: unknown): string {
  try {
    assertIsUsuario(datos);
    // Después de la aserción, TypeScript sabe que datos es Usuario
    return `Usuario: ${datos.nombre} (${datos.email}) - ${datos.activo ? "Activo" : "Inactivo"}`;
  } catch (error) {
    return `Error de validación: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 3: Assertion Functions para Arrays =====

function assertIsArray(valor: unknown): asserts valor is unknown[] {
  if (!Array.isArray(valor)) {
    throw new Error("Se esperaba un array");
  }
}

function assertIsArrayDeStrings(valor: unknown): asserts valor is string[] {
  assertIsArray(valor);
  
  for (let i = 0; i < valor.length; i++) {
    if (typeof valor[i] !== "string") {
      throw new Error(`Elemento en índice ${i} debe ser string, pero es ${typeof valor[i]}`);
    }
  }
}

function assertIsArrayDeNumeros(valor: unknown): asserts valor is number[] {
  assertIsArray(valor);
  
  for (let i = 0; i < valor.length; i++) {
    if (typeof valor[i] !== "number") {
      throw new Error(`Elemento en índice ${i} debe ser number, pero es ${typeof valor[i]}`);
    }
    if (isNaN(valor[i] as number)) {
      throw new Error(`Elemento en índice ${i} debe ser un número válido, pero es NaN`);
    }
  }
}

function procesarArrayConAsercion(valor: unknown): string {
  try {
    assertIsArrayDeStrings(valor);
    // Después de la aserción, TypeScript sabe que valor es string[]
    return `Array de strings: ${valor.join(", ")}`;
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 4: Assertion Functions para Validación de APIs =====

interface RespuestaAPI {
  success: boolean;
  data?: any;
  error?: string;
  timestamp: number;
}

function assertIsRespuestaAPI(valor: unknown): asserts valor is RespuestaAPI {
  if (typeof valor !== "object" || valor === null) {
    throw new Error("Se esperaba un objeto RespuestaAPI");
  }
  
  const obj = valor as any;
  
  if (typeof obj.success !== "boolean") {
    throw new Error("RespuestaAPI.success debe ser boolean");
  }
  
  if (typeof obj.timestamp !== "number") {
    throw new Error("RespuestaAPI.timestamp debe ser number");
  }
  
  if (obj.success && !("data" in obj)) {
    throw new Error("RespuestaAPI exitosa debe tener 'data'");
  }
  
  if (!obj.success && !("error" in obj)) {
    throw new Error("RespuestaAPI de error debe tener 'error'");
  }
}

function assertIsRespuestaExito(valor: unknown): asserts valor is RespuestaAPI & { success: true; data: any } {
  assertIsRespuestaAPI(valor);
  
  if (!valor.success) {
    throw new Error("Se esperaba una respuesta exitosa");
  }
  
  if (!("data" in valor)) {
    throw new Error("Respuesta exitosa debe tener 'data'");
  }
}

function procesarRespuestaAPI(respuesta: unknown): string {
  try {
    assertIsRespuestaExito(respuesta);
    // Después de la aserción, TypeScript sabe que respuesta es exitosa y tiene data
    return `✅ Éxito: ${JSON.stringify(respuesta.data)}`;
  } catch (error) {
    return `❌ Error: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 5: Assertion Functions para Configuración =====

interface Configuracion {
  apiUrl: string;
  timeout: number;
  reintentos: number;
  debug: boolean;
}

function assertIsConfiguracion(valor: unknown): asserts valor is Configuracion {
  if (typeof valor !== "object" || valor === null) {
    throw new Error("Se esperaba un objeto Configuracion");
  }
  
  const config = valor as any;
  
  if (typeof config.apiUrl !== "string" || config.apiUrl.length === 0) {
    throw new Error("Configuracion.apiUrl debe ser un string no vacío");
  }
  
  if (typeof config.timeout !== "number" || config.timeout <= 0) {
    throw new Error("Configuracion.timeout debe ser un number positivo");
  }
  
  if (typeof config.reintentos !== "number" || config.reintentos < 0) {
    throw new Error("Configuracion.reintentos debe ser un number no negativo");
  }
  
  if (typeof config.debug !== "boolean") {
    throw new Error("Configuracion.debug debe ser boolean");
  }
}

function inicializarAplicacion(config: unknown): string {
  try {
    assertIsConfiguracion(config);
    // Después de la aserción, TypeScript sabe que config es Configuracion
    return `Aplicación inicializada con API: ${config.apiUrl}, timeout: ${config.timeout}ms, reintentos: ${config.reintentos}, debug: ${config.debug}`;
  } catch (error) {
    return `Error de configuración: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 6: Assertion Functions para Validación de Formularios =====

interface CampoFormulario {
  nombre: string;
  valor: unknown;
  requerido: boolean;
  tipo: "string" | "number" | "email" | "url";
}

function assertCampoValido(campo: CampoFormulario): asserts campo is CampoFormulario & { valor: string | number } {
  if (campo.requerido && (campo.valor === null || campo.valor === undefined || campo.valor === "")) {
    throw new Error(`Campo '${campo.nombre}' es requerido`);
  }
  
  switch (campo.tipo) {
    case "string":
      if (typeof campo.valor !== "string") {
        throw new Error(`Campo '${campo.nombre}' debe ser string`);
      }
      break;
    case "number":
      if (typeof campo.valor !== "number" || isNaN(campo.valor)) {
        throw new Error(`Campo '${campo.nombre}' debe ser number`);
      }
      break;
    case "email":
      if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
        throw new Error(`Campo '${campo.nombre}' debe ser un email válido`);
      }
      break;
    case "url":
      if (typeof campo.valor !== "string" || !campo.valor.startsWith("http")) {
        throw new Error(`Campo '${campo.nombre}' debe ser una URL válida`);
      }
      break;
  }
}

function validarFormularioConAsercion(campos: CampoFormulario[]): string {
  const errores: string[] = [];
  
  for (const campo of campos) {
    try {
      assertCampoValido(campo);
      // Después de la aserción, TypeScript sabe que campo.valor es string | number
    } catch (error) {
      errores.push(error instanceof Error ? error.message : "Error desconocido");
    }
  }
  
  if (errores.length === 0) {
    return "✅ Formulario válido";
  } else {
    return `❌ Errores encontrados:\n${errores.join("\n")}`;
  }
}

// ===== EJEMPLO 7: Assertion Functions para Estados =====

type EstadoCarga = "inicial" | "cargando" | "exito" | "error";

function assertEsEstadoCarga(valor: unknown): asserts valor is EstadoCarga {
  if (typeof valor !== "string") {
    throw new Error("Estado debe ser string");
  }
  
  const estadosValidos: EstadoCarga[] = ["inicial", "cargando", "exito", "error"];
  if (!estadosValidos.includes(valor as EstadoCarga)) {
    throw new Error(`Estado inválido: ${valor}. Estados válidos: ${estadosValidos.join(", ")}`);
  }
}

function cambiarEstado(estado: unknown): string {
  try {
    assertEsEstadoCarga(estado);
    // Después de la aserción, TypeScript sabe que estado es EstadoCarga
    switch (estado) {
      case "inicial":
        return "Estado inicial establecido";
      case "cargando":
        return "Iniciando carga...";
      case "exito":
        return "Operación completada exitosamente";
      case "error":
        return "Error en la operación";
    }
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLO 8: Assertion Functions con Mensajes Personalizados =====

function assertIsDefinido<T>(valor: T | null | undefined, mensaje?: string): asserts valor is T {
  if (valor === null || valor === undefined) {
    throw new Error(mensaje || "Valor no puede ser null o undefined");
  }
}

function assertEsPositivo(valor: unknown, mensaje?: string): asserts valor is number {
  if (typeof valor !== "number" || valor <= 0) {
    throw new Error(mensaje || `Valor debe ser un número positivo, pero es ${valor}`);
  }
}

function assertEsStringNoVacio(valor: unknown, mensaje?: string): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error(mensaje || `Se esperaba string, pero se recibió ${typeof valor}`);
  }
  
  if (valor.length === 0) {
    throw new Error(mensaje || "String no puede estar vacío");
  }
}

function procesarDatosConValidaciones(datos: unknown): string {
  try {
    assertIsDefinido(datos, "Datos no pueden ser null o undefined");
    
    if (typeof datos === "object" && datos !== null) {
      const obj = datos as any;
      
      if ("nombre" in obj) {
        assertEsStringNoVacio(obj.nombre, "Nombre es requerido y no puede estar vacío");
      }
      
      if ("edad" in obj) {
        assertEsPositivo(obj.edad, "Edad debe ser un número positivo");
      }
    }
    
    return "✅ Datos válidos";
  } catch (error) {
    return `❌ Error: ${error instanceof Error ? error.message : "Error desconocido"}`;
  }
}

// ===== EJEMPLOS DE USO =====

console.log("=== Ejemplos de Assertion Functions ===");

// Ejemplo 1: Valores básicos
const valores: unknown[] = ["hola", 42, true, null, undefined];
valores.forEach(valor => {
  console.log(procesarValorConAsercion(valor));
});

// Ejemplo 2: Usuarios
const datosUsuario: unknown[] = [
  { id: 1, nombre: "Juan", email: "juan@email.com", activo: true },
  { id: "2", nombre: "Ana", email: "ana@email.com", activo: true }, // id incorrecto
  { id: 3, nombre: "Bob", email: "bob@email.com" }, // falta activo
  "datos inválidos"
];

datosUsuario.forEach(datos => {
  console.log(procesarUsuarioConAsercion(datos));
});

// Ejemplo 3: Arrays
const arrays: unknown[] = [
  ["a", "b", "c"],
  [1, 2, 3], // No es array de strings
  "no es array"
];

arrays.forEach(array => {
  console.log(procesarArrayConAsercion(array));
});

// Ejemplo 4: Respuestas API
const respuestas: unknown[] = [
  { success: true, data: { usuarios: 150 }, timestamp: Date.now() },
  { success: false, error: "No autorizado", timestamp: Date.now() },
  { success: true, timestamp: Date.now() }, // Sin data
  "no es respuesta"
];

respuestas.forEach(respuesta => {
  console.log(procesarRespuestaAPI(respuesta));
});

// Ejemplo 5: Configuración
const configuraciones: unknown[] = [
  { apiUrl: "https://api.ejemplo.com", timeout: 5000, reintentos: 3, debug: true },
  { apiUrl: "", timeout: 5000, reintentos: 3, debug: true }, // URL vacía
  { apiUrl: "https://api.ejemplo.com", timeout: -1000, reintentos: 3, debug: true }, // Timeout negativo
  "configuración inválida"
];

configuraciones.forEach(config => {
  console.log(inicializarAplicacion(config));
});

// Ejemplo 6: Formularios
const campos: CampoFormulario[] = [
  { nombre: "nombre", valor: "Juan", requerido: true, tipo: "string" },
  { nombre: "email", valor: "juan@email.com", requerido: true, tipo: "email" },
  { nombre: "edad", valor: 25, requerido: true, tipo: "number" },
  { nombre: "sitio", valor: "https://juan.com", requerido: false, tipo: "url" },
  { nombre: "telefono", valor: "", requerido: true, tipo: "string" }, // Campo requerido vacío
  { nombre: "email_malo", valor: "email-sin-arroba", requerido: true, tipo: "email" } // Email inválido
];

console.log(validarFormularioConAsercion(campos));

// Ejemplo 7: Estados
const estados: unknown[] = ["inicial", "cargando", "exito", "error", "estado-invalido"];
estados.forEach(estado => {
  console.log(cambiarEstado(estado));
});

// Ejemplo 8: Validaciones personalizadas
const datos: unknown[] = [
  { nombre: "Juan", edad: 25 },
  { nombre: "", edad: 25 }, // Nombre vacío
  { nombre: "Ana", edad: -5 }, // Edad negativa
  null, // Datos nulos
  { nombre: "Bob" } // Sin edad
];

datos.forEach(dato => {
  console.log(procesarDatosConValidaciones(dato));
});

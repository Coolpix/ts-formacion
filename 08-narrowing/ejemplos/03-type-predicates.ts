/**
 * Ejemplos de Type Predicates (Predicados de Tipo)
 * 
 * Los type predicates son funciones que actúan como type guards personalizados.
 * Permiten crear verificaciones de tipo más complejas y reutilizables.
 */

// ===== EJEMPLO 1: Type Predicates Básicos =====

function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function esNumber(valor: unknown): valor is number {
  return typeof valor === "number" && !isNaN(valor);
}

function esBoolean(valor: unknown): valor is boolean {
  return typeof valor === "boolean";
}

function esArray(valor: unknown): valor is unknown[] {
  return Array.isArray(valor);
}

function procesarValorDesconocido(valor: unknown): string {
  if (esString(valor)) {
    // TypeScript sabe que valor es string
    return `String: ${valor.toUpperCase()}`;
  } else if (esNumber(valor)) {
    // TypeScript sabe que valor es number
    return `Número: ${valor.toFixed(2)}`;
  } else if (esBoolean(valor)) {
    // TypeScript sabe que valor es boolean
    return `Booleano: ${valor}`;
  } else if (esArray(valor)) {
    // TypeScript sabe que valor es array
    return `Array con ${valor.length} elementos`;
  } else {
    return "Tipo no reconocido";
  }
}

// ===== EJEMPLO 2: Type Predicates para Objetos =====

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

function esUsuario(valor: unknown): valor is Usuario {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "id" in valor &&
    "nombre" in valor &&
    "email" in valor &&
    "activo" in valor &&
    typeof (valor as any).id === "number" &&
    typeof (valor as any).nombre === "string" &&
    typeof (valor as any).email === "string" &&
    typeof (valor as any).activo === "boolean"
  );
}

function esProducto(valor: unknown): valor is Producto {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "id" in valor &&
    "nombre" in valor &&
    "precio" in valor &&
    "categoria" in valor &&
    typeof (valor as any).id === "number" &&
    typeof (valor as any).nombre === "string" &&
    typeof (valor as any).precio === "number" &&
    typeof (valor as any).categoria === "string"
  );
}

function procesarEntidad(entidad: unknown): string {
  if (esUsuario(entidad)) {
    // TypeScript sabe que entidad es Usuario
    return `Usuario: ${entidad.nombre} (${entidad.email}) - ${entidad.activo ? "Activo" : "Inactivo"}`;
  } else if (esProducto(entidad)) {
    // TypeScript sabe que entidad es Producto
    return `Producto: ${entidad.nombre} - $${entidad.precio} (${entidad.categoria})`;
  } else {
    return "Entidad no reconocida";
  }
}

// ===== EJEMPLO 3: Type Predicates para Arrays Tipados =====

function esArrayDeStrings(valor: unknown): valor is string[] {
  return Array.isArray(valor) && valor.every(item => typeof item === "string");
}

function esArrayDeNumeros(valor: unknown): valor is number[] {
  return Array.isArray(valor) && valor.every(item => typeof item === "number");
}

function esArrayDeUsuarios(valor: unknown): valor is Usuario[] {
  return Array.isArray(valor) && valor.every(item => esUsuario(item));
}

function procesarArray(valor: unknown): string {
  if (esArrayDeStrings(valor)) {
    // TypeScript sabe que valor es string[]
    return `Array de strings: ${valor.join(", ")}`;
  } else if (esArrayDeNumeros(valor)) {
    // TypeScript sabe que valor es number[]
    const suma = valor.reduce((acc, num) => acc + num, 0);
    return `Array de números: suma = ${suma}`;
  } else if (esArrayDeUsuarios(valor)) {
    // TypeScript sabe que valor es Usuario[]
    const activos = valor.filter(usuario => usuario.activo).length;
    return `Array de usuarios: ${valor.length} total, ${activos} activos`;
  } else {
    return "Array no reconocido";
  }
}

// ===== EJEMPLO 4: Type Predicates para Union Types =====

type EstadoCarga = "inicial" | "cargando" | "exito" | "error";

function esEstadoCarga(valor: unknown): valor is EstadoCarga {
  return typeof valor === "string" && 
         ["inicial", "cargando", "exito", "error"].includes(valor);
}

function procesarEstado(estado: unknown): string {
  if (esEstadoCarga(estado)) {
    // TypeScript sabe que estado es EstadoCarga
    switch (estado) {
      case "inicial":
        return "Estado inicial";
      case "cargando":
        return "Cargando datos...";
      case "exito":
        return "Operación exitosa";
      case "error":
        return "Error en la operación";
    }
  } else {
    return "Estado no válido";
  }
}

// ===== EJEMPLO 5: Type Predicates Anidados =====

interface RespuestaAPI {
  success: boolean;
  data?: any;
  error?: string;
  timestamp: number;
}

function esRespuestaAPI(valor: unknown): valor is RespuestaAPI {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "success" in valor &&
    "timestamp" in valor &&
    typeof (valor as any).success === "boolean" &&
    typeof (valor as any).timestamp === "number"
  );
}

function esRespuestaExito(valor: unknown): valor is RespuestaAPI & { success: true; data: any } {
  return esRespuestaAPI(valor) && valor.success === true && "data" in valor;
}

function esRespuestaError(valor: unknown): valor is RespuestaAPI & { success: false; error: string } {
  return esRespuestaAPI(valor) && valor.success === false && "error" in valor;
}

function procesarRespuesta(respuesta: unknown): string {
  if (esRespuestaExito(respuesta)) {
    // TypeScript sabe que respuesta es exitosa y tiene data
    return `✅ Éxito: ${JSON.stringify(respuesta.data)}`;
  } else if (esRespuestaError(respuesta)) {
    // TypeScript sabe que respuesta es error y tiene error
    return `❌ Error: ${respuesta.error}`;
  } else if (esRespuestaAPI(respuesta)) {
    // TypeScript sabe que es RespuestaAPI pero no está segura del tipo específico
    return `Respuesta API (${respuesta.success ? "éxito" : "error"})`;
  } else {
    return "No es una respuesta API válida";
  }
}

// ===== EJEMPLO 6: Type Predicates con Genéricos =====

function esArrayDe<T>(valor: unknown, predicate: (item: unknown) => item is T): valor is T[] {
  return Array.isArray(valor) && valor.every(predicate);
}

function esStringNoVacio(valor: unknown): valor is string {
  return typeof valor === "string" && valor.length > 0;
}

function esNumeroPositivo(valor: unknown): valor is number {
  return typeof valor === "number" && valor > 0;
}

function procesarArrayGenerico(valor: unknown): string {
  if (esArrayDe(valor, esStringNoVacio)) {
    // TypeScript sabe que valor es string[] (strings no vacíos)
    return `Array de strings no vacíos: ${valor.join(", ")}`;
  } else if (esArrayDe(valor, esNumeroPositivo)) {
    // TypeScript sabe que valor es number[] (números positivos)
    const promedio = valor.reduce((acc, num) => acc + num, 0) / valor.length;
    return `Array de números positivos: promedio = ${promedio.toFixed(2)}`;
  } else {
    return "Array no válido";
  }
}

// ===== EJEMPLO 7: Type Predicates para Validación de Formularios =====

interface CampoFormulario {
  nombre: string;
  valor: unknown;
  requerido: boolean;
  validado: boolean;
}

function esCampoValido(campo: CampoFormulario): campo is CampoFormulario & { valor: string; validado: true } {
  return campo.validado && typeof campo.valor === "string" && campo.valor.length > 0;
}

function esCampoInvalido(campo: CampoFormulario): campo is CampoFormulario & { validado: false } {
  return !campo.validado;
}

function validarFormulario(campos: CampoFormulario[]): string {
  const camposValidos = campos.filter(esCampoValido);
  const camposInvalidos = campos.filter(esCampoInvalido);
  
  if (camposInvalidos.length === 0) {
    return `✅ Formulario válido: ${camposValidos.length} campos completados`;
  } else {
    const nombresInvalidos = camposInvalidos.map(campo => campo.nombre).join(", ");
    return `❌ Formulario inválido: campos faltantes: ${nombresInvalidos}`;
  }
}

// ===== EJEMPLO 8: Type Predicates para Manejo de Errores =====

interface ErrorPersonalizado {
  tipo: "personalizado";
  mensaje: string;
  codigo: number;
  detalles?: any;
}

interface ErrorValidacion {
  tipo: "validacion";
  campo: string;
  mensaje: string;
  valorRecibido: any;
}

type ErrorAplicacion = ErrorPersonalizado | ErrorValidacion;

function esErrorPersonalizado(error: unknown): error is ErrorPersonalizado {
  return (
    typeof error === "object" &&
    error !== null &&
    "tipo" in error &&
    "mensaje" in error &&
    "codigo" in error &&
    (error as any).tipo === "personalizado"
  );
}

function esErrorValidacion(error: unknown): error is ErrorValidacion {
  return (
    typeof error === "object" &&
    error !== null &&
    "tipo" in error &&
    "campo" in error &&
    "mensaje" in error &&
    "valorRecibido" in error &&
    (error as any).tipo === "validacion"
  );
}

function esErrorAplicacion(error: unknown): error is ErrorAplicacion {
  return esErrorPersonalizado(error) || esErrorValidacion(error);
}

function manejarError(error: unknown): string {
  if (esErrorPersonalizado(error)) {
    // TypeScript sabe que error es ErrorPersonalizado
    const detalles = error.detalles ? ` - Detalles: ${JSON.stringify(error.detalles)}` : "";
    return `Error personalizado (${error.codigo}): ${error.mensaje}${detalles}`;
  } else if (esErrorValidacion(error)) {
    // TypeScript sabe que error es ErrorValidacion
    return `Error de validación en '${error.campo}': ${error.mensaje} (recibido: ${error.valorRecibido})`;
  } else if (esErrorAplicacion(error)) {
    // TypeScript sabe que es ErrorAplicacion pero no está segura del tipo específico
    return `Error de aplicación: ${error.mensaje}`;
  } else {
    return `Error desconocido: ${error}`;
  }
}

// ===== EJEMPLOS DE USO =====

console.log("=== Ejemplos de Type Predicates ===");

// Ejemplo 1: Valores desconocidos
const valores: unknown[] = ["hola", 42, true, [1, 2, 3], null, undefined];
valores.forEach(valor => {
  console.log(procesarValorDesconocido(valor));
});

// Ejemplo 2: Entidades
const entidades: unknown[] = [
  { id: 1, nombre: "Juan", email: "juan@email.com", activo: true },
  { id: 2, nombre: "Laptop", precio: 999.99, categoria: "Electrónicos" },
  "datos inválidos"
];

entidades.forEach(entidad => {
  console.log(procesarEntidad(entidad));
});

// Ejemplo 3: Arrays tipados
const arrays: unknown[] = [
  ["a", "b", "c"],
  [1, 2, 3, 4, 5],
  [
    { id: 1, nombre: "Ana", email: "ana@email.com", activo: true },
    { id: 2, nombre: "Bob", email: "bob@email.com", activo: false }
  ],
  "no es array"
];

arrays.forEach(array => {
  console.log(procesarArray(array));
});

// Ejemplo 4: Estados
const estados: unknown[] = ["inicial", "cargando", "exito", "error", "estado-invalido"];
estados.forEach(estado => {
  console.log(procesarEstado(estado));
});

// Ejemplo 5: Respuestas API
const respuestas: unknown[] = [
  { success: true, data: { usuarios: 150 }, timestamp: Date.now() },
  { success: false, error: "No autorizado", timestamp: Date.now() },
  { success: true, timestamp: Date.now() }, // Sin data
  "no es respuesta"
];

respuestas.forEach(respuesta => {
  console.log(procesarRespuesta(respuesta));
});

// Ejemplo 6: Arrays genéricos
const arraysGenericos: unknown[] = [
  ["hola", "mundo", "typescript"],
  [1, 2, 3, 4, 5],
  ["", "texto", ""], // Strings vacíos
  [-1, 2, -3] // Números negativos
];

arraysGenericos.forEach(array => {
  console.log(procesarArrayGenerico(array));
});

// Ejemplo 7: Formularios
const campos: CampoFormulario[] = [
  { nombre: "nombre", valor: "Juan", requerido: true, validado: true },
  { nombre: "email", valor: "juan@email.com", requerido: true, validado: true },
  { nombre: "telefono", valor: "", requerido: false, validado: false }
];

console.log(validarFormulario(campos));

// Ejemplo 8: Manejo de errores
const errores: unknown[] = [
  { tipo: "personalizado", mensaje: "Error de conexión", codigo: 500, detalles: { timeout: 30000 } },
  { tipo: "validacion", campo: "email", mensaje: "Email inválido", valorRecibido: "email-malo" },
  new Error("Error estándar"),
  "Error de string"
];

errores.forEach(error => {
  console.log(manejarError(error));
});

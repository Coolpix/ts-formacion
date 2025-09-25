/**
 * Ejemplos de Objetos y Union Types en TypeScript
 * 
 * Los objetos permiten definir estructuras de datos complejas,
 * mientras que los union types permiten que una variable pueda
 * ser de varios tipos diferentes.
 */

// ===== EJEMPLO 1: Objetos Básicos =====

// Objeto con tipos explícitos
let usuario: { nombre: string; edad: number; activo: boolean } = {
  nombre: "Juan",
  edad: 25,
  activo: true
};

// Objeto con propiedades opcionales
let configuracion: { host: string; puerto: number; debug?: boolean } = {
  host: "localhost",
  puerto: 3000
  // debug es opcional
};

// Objeto con propiedades de solo lectura
let configuracionReadonly: { readonly host: string; readonly puerto: number } = {
  host: "localhost",
  puerto: 3000
};

console.log("=== Objetos Básicos ===");
console.log(usuario); // { nombre: "Juan", edad: 25, activo: true }
console.log(configuracion); // { host: "localhost", puerto: 3000 }
console.log(configuracionReadonly); // { host: "localhost", puerto: 3000 }

// Acceso a propiedades
console.log(usuario.nombre); // "Juan"
console.log(usuario["edad"]); // 25
console.log(configuracion.debug); // undefined (propiedad opcional)

// Modificación de propiedades
usuario.edad = 26;
configuracion.debug = true;
// configuracionReadonly.host = "nuevo"; // Error: Cannot assign to 'host' because it is a read-only property

// ===== EJEMPLO 2: Union Types Básicos =====

// Union type simple
let id: string | number;
id = "abc123";
id = 123;

// Union type con más tipos
let valor: string | number | boolean;
valor = "hola";
valor = 42;
valor = true;

// Union type con null y undefined
let nombreOpcional: string | null | undefined;
nombreOpcional = "Juan";
nombreOpcional = null;
nombreOpcional = undefined;

console.log("\n=== Union Types Básicos ===");
console.log(id); // 123 (último valor asignado)
console.log(valor); // true (último valor asignado)
console.log(nombreOpcional); // undefined (último valor asignado)

// ===== EJEMPLO 3: Funciones con Union Types =====

// Función que acepta union type
function formatearValor(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor.toString();
  }
}

// Función que retorna union type
function obtenerValor(tipo: "string" | "number"): string | number {
  if (tipo === "string") {
    return "ejemplo";
  } else {
    return 42;
  }
}

// Función con múltiples union types
function procesarDatos(datos: string | number | boolean, formato: "upper" | "lower" | "normal"): string {
  let resultado: string;
  
  if (typeof datos === "string") {
    resultado = datos;
  } else if (typeof datos === "number") {
    resultado = datos.toString();
  } else {
    resultado = datos ? "true" : "false";
  }
  
  switch (formato) {
    case "upper":
      return resultado.toUpperCase();
    case "lower":
      return resultado.toLowerCase();
    default:
      return resultado;
  }
}

console.log("\n=== Funciones con Union Types ===");
console.log(formatearValor("hola")); // "HOLA"
console.log(formatearValor(123)); // "123"
console.log(obtenerValor("string")); // "ejemplo"
console.log(obtenerValor("number")); // 42
console.log(procesarDatos("Hola", "upper")); // "HOLA"
console.log(procesarDatos(123, "lower")); // "123"
console.log(procesarDatos(true, "normal")); // "true"

// ===== EJEMPLO 4: Objetos con Union Types =====

// Objeto con propiedades que pueden ser de diferentes tipos
let configuracionFlexible: { 
  nombre: string; 
  valor: string | number | boolean;
  tipo: "string" | "number" | "boolean";
} = {
  nombre: "debug",
  valor: true,
  tipo: "boolean"
};

// Objeto que puede tener diferentes estructuras
let datos: { tipo: "usuario"; nombre: string; email: string } | { tipo: "producto"; nombre: string; precio: number } = {
  tipo: "usuario",
  nombre: "Juan",
  email: "juan@email.com"
};

console.log("\n=== Objetos con Union Types ===");
console.log(configuracionFlexible); // { nombre: "debug", valor: true, tipo: "boolean" }
console.log(datos); // { tipo: "usuario", nombre: "Juan", email: "juan@email.com" }

// Cambiar el tipo de datos
datos = {
  tipo: "producto",
  nombre: "Laptop",
  precio: 999.99
};
console.log(datos); // { tipo: "producto", nombre: "Laptop", precio: 999.99 }

// ===== EJEMPLO 5: Literal Types =====

// Literal types con strings
let direccion: "arriba" | "abajo" | "izquierda" | "derecha";
direccion = "arriba"; // ✅ Válido
direccion = "norte";  // ❌ Error: Type '"norte"' is not assignable

// Literal types con números
let nivel: 1 | 2 | 3 | 4 | 5;
nivel = 3; // ✅ Válido
nivel = 6; // ❌ Error: Type '6' is not assignable

// Literal types con booleanos
let estado: true | false;
estado = true; // ✅ Válido
estado = false; // ✅ Válido

console.log("\n=== Literal Types ===");
console.log(direccion); // "arriba"
console.log(nivel); // 3
console.log(estado); // true

// ===== EJEMPLO 6: Objetos con Literal Types =====

// Objeto con literal types
let evento: { 
  tipo: "click" | "hover" | "focus";
  target: string;
  timestamp: number;
} = {
  tipo: "click",
  target: "button",
  timestamp: Date.now()
};

// Objeto con múltiples literal types
let configuracionServidor: {
  entorno: "development" | "staging" | "production";
  nivel: 1 | 2 | 3;
  habilitado: true | false;
} = {
  entorno: "development",
  nivel: 2,
  habilitado: true
};

console.log("\n=== Objetos con Literal Types ===");
console.log(evento); // { tipo: "click", target: "button", timestamp: ... }
console.log(configuracionServidor); // { entorno: "development", nivel: 2, habilitado: true }

// ===== EJEMPLO 7: Discriminated Unions =====

// Discriminated union con propiedad discriminante
type Mensaje = 
  | { tipo: "exito"; datos: any; codigo: number }
  | { tipo: "error"; mensaje: string; codigo: number }
  | { tipo: "carga"; progreso: number };

// Función que procesa discriminated union
function procesarMensaje(mensaje: Mensaje): string {
  switch (mensaje.tipo) {
    case "exito":
      return `✅ Éxito (${mensaje.codigo}): Datos recibidos`;
    case "error":
      return `❌ Error (${mensaje.codigo}): ${mensaje.mensaje}`;
    case "carga":
      return `⏳ Cargando: ${mensaje.progreso}%`;
  }
}

console.log("\n=== Discriminated Unions ===");
const mensajes: Mensaje[] = [
  { tipo: "exito", datos: { usuarios: 150 }, codigo: 200 },
  { tipo: "error", mensaje: "No autorizado", codigo: 401 },
  { tipo: "carga", progreso: 75 }
];

mensajes.forEach(mensaje => {
  console.log(procesarMensaje(mensaje));
});

// ===== EJEMPLO 8: Objetos con Propiedades Computadas =====

// Objeto con propiedades computadas
let configuracionDinamica: { [key: string]: string | number | boolean } = {
  host: "localhost",
  puerto: 3000,
  debug: true,
  version: "1.0.0"
};

// Objeto con propiedades computadas tipadas
let configuracionTipada: { [key: string]: string } = {
  "api.url": "https://api.ejemplo.com",
  "db.host": "localhost",
  "cache.ttl": "3600"
};

// Función que crea objetos dinámicamente
function crearConfiguracion(entorno: "dev" | "prod"): { [key: string]: any } {
  const base = {
    debug: entorno === "dev",
    logLevel: entorno === "dev" ? "debug" : "error"
  };
  
  if (entorno === "dev") {
    return { ...base, host: "localhost", puerto: 3000 };
  } else {
    return { ...base, host: "api.ejemplo.com", puerto: 443 };
  }
}

console.log("\n=== Objetos con Propiedades Computadas ===");
console.log(configuracionDinamica); // { host: "localhost", puerto: 3000, debug: true, version: "1.0.0" }
console.log(configuracionTipada); // { "api.url": "https://api.ejemplo.com", ... }
console.log(crearConfiguracion("dev")); // { debug: true, logLevel: "debug", host: "localhost", puerto: 3000 }
console.log(crearConfiguracion("prod")); // { debug: false, logLevel: "error", host: "api.ejemplo.com", puerto: 443 }

// ===== EJEMPLO 9: Objetos con Métodos =====

// Objeto con métodos
let calculadora: {
  sumar: (a: number, b: number) => number;
  restar: (a: number, b: number) => number;
  multiplicar: (a: number, b: number) => number;
  dividir: (a: number, b: number) => number;
} = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => b !== 0 ? a / b : 0
};

// Objeto con métodos y propiedades
let contador: {
  valor: number;
  incrementar: () => void;
  decrementar: () => void;
  obtener: () => number;
  resetear: () => void;
} = {
  valor: 0,
  incrementar() { this.valor++; },
  decrementar() { this.valor--; },
  obtener() { return this.valor; },
  resetear() { this.valor = 0; }
};

console.log("\n=== Objetos con Métodos ===");
console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.dividir(10, 2)); // 5
console.log(calculadora.dividir(10, 0)); // 0

contador.incrementar();
contador.incrementar();
console.log(contador.obtener()); // 2
contador.decrementar();
console.log(contador.obtener()); // 1
contador.resetear();
console.log(contador.obtener()); // 0

// ===== EJEMPLO 10: Objetos con Union Types Complejos =====

// Union type de objetos con diferentes estructuras
type Usuario = { tipo: "usuario"; id: number; nombre: string; email: string };
type Admin = { tipo: "admin"; id: number; nombre: string; permisos: string[] };
type Invitado = { tipo: "invitado"; nombre: string; sesion: number };

type Persona = Usuario | Admin | Invitado;

// Función que procesa diferentes tipos de persona
function procesarPersona(persona: Persona): string {
  switch (persona.tipo) {
    case "usuario":
      return `Usuario: ${persona.nombre} (${persona.email})`;
    case "admin":
      return `Admin: ${persona.nombre} - Permisos: ${persona.permisos.join(", ")}`;
    case "invitado":
      return `Invitado: ${persona.nombre} - Sesión: ${persona.sesion}`;
  }
}

console.log("\n=== Objetos con Union Types Complejos ===");
const personas: Persona[] = [
  { tipo: "usuario", id: 1, nombre: "Juan", email: "juan@email.com" },
  { tipo: "admin", id: 2, nombre: "Ana", permisos: ["read", "write", "delete"] },
  { tipo: "invitado", nombre: "Pedro", sesion: 12345 }
];

personas.forEach(persona => {
  console.log(procesarPersona(persona));
});

// ===== EJEMPLO 11: Objetos con Propiedades Opcionales y Union Types =====

// Objeto con propiedades opcionales y union types
let configuracionCompleja: {
  nombre: string;
  valor: string | number | boolean;
  opciones?: {
    formato?: "json" | "xml" | "csv";
    codificacion?: "utf-8" | "ascii" | "latin1";
    comprimir?: boolean;
  };
  metadata?: { [key: string]: any };
} = {
  nombre: "configuracion",
  valor: "test",
  opciones: {
    formato: "json",
    codificacion: "utf-8",
    comprimir: false
  }
};

// Función que procesa configuración compleja
function procesarConfiguracion(config: typeof configuracionCompleja): string {
  let resultado = `Configuración: ${config.nombre} = ${config.valor}`;
  
  if (config.opciones) {
    resultado += ` (formato: ${config.opciones.formato || "json"})`;
  }
  
  if (config.metadata) {
    const claves = Object.keys(config.metadata);
    if (claves.length > 0) {
      resultado += ` [metadata: ${claves.join(", ")}]`;
    }
  }
  
  return resultado;
}

console.log("\n=== Objetos con Propiedades Opcionales y Union Types ===");
console.log(procesarConfiguracion(configuracionCompleja)); // "Configuración: configuracion = test (formato: json)"

// ===== EJEMPLO 12: Mejores Prácticas =====

// ✅ Bueno: Usar tipos específicos para objetos
interface UsuarioBueno {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// ✅ Bueno: Usar union types para flexibilidad controlada
function formatearId(id: string | number): string {
  return id.toString();
}

// ✅ Bueno: Usar literal types para valores específicos
function cambiarEstado(estado: "activo" | "inactivo" | "pendiente"): void {
  console.log(`Estado cambiado a: ${estado}`);
}

// ✅ Bueno: Usar discriminated unions para objetos relacionados
type Resultado = 
  | { exito: true; datos: any }
  | { exito: false; error: string };

// ❌ Malo: Usar any para objetos
let objetoMalo: any = { nombre: "test" };

// ❌ Malo: Union types demasiado amplios
function procesarCualquierCosa(valor: any): any {
  return valor;
}

console.log("\n=== Mejores Prácticas ===");
console.log(formatearId("abc123")); // "abc123"
console.log(formatearId(123)); // "123"
cambiarEstado("activo"); // "Estado cambiado a: activo"

// ===== EJEMPLO 13: Casos de Uso Avanzados =====

// Objeto con métodos que retornan union types
let procesadorDatos: {
  procesar: (datos: string | number | boolean) => string | number | boolean;
  validar: (valor: any) => boolean;
  convertir: (valor: string, tipo: "number" | "boolean") => number | boolean;
} = {
  procesar(datos) {
    if (typeof datos === "string") {
      return datos.toUpperCase();
    } else if (typeof datos === "number") {
      return datos * 2;
    } else {
      return !datos;
    }
  },
  
  validar(valor) {
    return valor !== null && valor !== undefined;
  },
  
  convertir(valor, tipo) {
    if (tipo === "number") {
      const num = Number(valor);
      return isNaN(num) ? 0 : num;
    } else {
      return valor.toLowerCase() === "true";
    }
  }
};

// Objeto con propiedades computadas y union types
let cache: { [key: string]: string | number | boolean | null } = {};

function setCache(key: string, valor: string | number | boolean): void {
  cache[key] = valor;
}

function getCache(key: string): string | number | boolean | null {
  return cache[key] || null;
}

console.log("\n=== Casos de Uso Avanzados ===");
console.log(procesadorDatos.procesar("hola")); // "HOLA"
console.log(procesadorDatos.procesar(5)); // 10
console.log(procesadorDatos.procesar(true)); // false
console.log(procesadorDatos.validar("test")); // true
console.log(procesadorDatos.validar(null)); // false
console.log(procesadorDatos.convertir("123", "number")); // 123
console.log(procesadorDatos.convertir("true", "boolean")); // true

setCache("nombre", "Juan");
setCache("edad", 25);
setCache("activo", true);
console.log(getCache("nombre")); // "Juan"
console.log(getCache("edad")); // 25
console.log(getCache("activo")); // true
console.log(getCache("inexistente")); // null

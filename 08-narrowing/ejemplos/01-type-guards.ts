/**
 * Ejemplos de Type Guards con typeof
 * 
 * Los type guards son expresiones que realizan verificación de tipos en tiempo de ejecución
 * y permiten a TypeScript estrechar (narrow) los tipos en diferentes ramas de código.
 */

// ===== EJEMPLO 1: Type Guard Básico con typeof =====

function procesarValor(valor: string | number): string {
  if (typeof valor === "string") {
    // TypeScript sabe que 'valor' es string aquí
    return valor.toUpperCase();
  } else {
    // TypeScript sabe que 'valor' es number aquí
    return valor.toString();
  }
}

// Uso del ejemplo
console.log(procesarValor("hola")); // "HOLA"
console.log(procesarValor(42)); // "42"

// ===== EJEMPLO 2: Múltiples Tipos =====

function formatearValor(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    return `Texto: ${valor}`;
  } else if (typeof valor === "number") {
    return `Número: ${valor.toFixed(2)}`;
  } else {
    return `Booleano: ${valor}`;
  }
}

// ===== EJEMPLO 3: Caso Especial con null =====

function procesarInput(input: string | null): string {
  if (input === null) {
    return "Valor nulo recibido";
  }
  
  // TypeScript sabe que input no es null aquí
  return input.toUpperCase();
}

// ===== EJEMPLO 4: typeof null - Caso Problemático =====

function procesarValorProblematico(valor: string | string[] | null) {
  if (typeof valor === "object") {
    // ⚠️ CUIDADO: typeof null === "object" en JavaScript
    // Necesitamos verificar explícitamente que no sea null
    if (valor !== null) {
      // Ahora TypeScript sabe que es string[]
      for (const item of valor) {
        console.log(item);
      }
    }
  } else if (typeof valor === "string") {
    console.log(valor);
  }
}

// ===== EJEMPLO 5: Type Guard Personalizado =====

function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function esNumber(valor: unknown): valor is number {
  return typeof valor === "number" && !isNaN(valor);
}

function procesarValorDesconocido(valor: unknown) {
  if (esString(valor)) {
    // TypeScript sabe que valor es string
    console.log(`String: ${valor.toUpperCase()}`);
  } else if (esNumber(valor)) {
    // TypeScript sabe que valor es number
    console.log(`Número: ${valor.toFixed(2)}`);
  } else {
    console.log("Tipo no reconocido");
  }
}

// ===== EJEMPLO 6: Verificación de Propiedades =====

interface Usuario {
  nombre: string;
  email: string;
}

interface Admin {
  nombre: string;
  permisos: string[];
}

function esUsuario(valor: unknown): valor is Usuario {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "nombre" in valor &&
    "email" in valor &&
    typeof (valor as any).nombre === "string" &&
    typeof (valor as any).email === "string"
  );
}

function procesarDatos(datos: unknown) {
  if (esUsuario(datos)) {
    // TypeScript sabe que datos es Usuario
    console.log(`Usuario: ${datos.nombre} (${datos.email})`);
  } else {
    console.log("Datos no válidos");
  }
}

// ===== EJEMPLO 7: Narrowing con Arrays =====

function procesarArray(valor: string | string[]): string {
  if (Array.isArray(valor)) {
    // TypeScript sabe que valor es string[]
    return valor.join(", ");
  } else {
    // TypeScript sabe que valor es string
    return valor;
  }
}

// ===== EJEMPLO 8: Narrowing con instanceof =====

class FechaPersonalizada {
  constructor(public fecha: Date) {}
  
  formatear(): string {
    return this.fecha.toISOString();
  }
}

function procesarFecha(fecha: Date | FechaPersonalizada | string): string {
  if (fecha instanceof Date) {
    // TypeScript sabe que fecha es Date
    return fecha.toLocaleDateString();
  } else if (fecha instanceof FechaPersonalizada) {
    // TypeScript sabe que fecha es FechaPersonalizada
    return fecha.formatear();
  } else {
    // TypeScript sabe que fecha es string
    return fecha.toUpperCase();
  }
}

// ===== EJEMPLO 9: Narrowing con el operador 'in' =====

function procesarObjeto(obj: Usuario | Admin): void {
  if ("email" in obj) {
    // TypeScript sabe que obj es Usuario
    console.log(`Email del usuario: ${obj.email}`);
  } else {
    // TypeScript sabe que obj es Admin
    console.log(`Permisos del admin: ${obj.permisos.join(", ")}`);
  }
}

// ===== EJEMPLO 10: Narrowing por Veracidad (Truthiness) =====

function procesarValorOpcional(valor: string | null | undefined): string {
  if (valor) {
    // TypeScript sabe que valor no es null, undefined, o string vacío
    return valor.toUpperCase();
  }
  
  return "Valor no disponible";
}

// Verificación más específica
function procesarValorEspecifico(valor: string | null | undefined): string {
  if (valor !== null && valor !== undefined) {
    // TypeScript sabe que valor es string
    return valor.length > 0 ? valor.toUpperCase() : "String vacío";
  }
  
  return "Valor nulo o indefinido";
}

// ===== EJEMPLO 11: Narrowing por Igualdad =====

function procesarEstado(estado: "cargando" | "exito" | "error"): string {
  if (estado === "cargando") {
    return "Procesando...";
  } else if (estado === "exito") {
    return "Operación exitosa";
  } else {
    // TypeScript sabe que estado es "error"
    return "Error en la operación";
  }
}

// ===== EJEMPLO 12: Narrowing Múltiple =====

function procesarValorComplejo(
  valor: string | number | boolean | null | undefined
): string {
  // Verificación de null/undefined primero
  if (valor == null) {
    return "Valor nulo o indefinido";
  }
  
  // Ahora TypeScript sabe que valor no es null ni undefined
  if (typeof valor === "string") {
    return valor.length > 0 ? valor.toUpperCase() : "String vacío";
  } else if (typeof valor === "number") {
    return valor > 0 ? `Número positivo: ${valor}` : `Número no positivo: ${valor}`;
  } else {
    // TypeScript sabe que valor es boolean
    return valor ? "Verdadero" : "Falso";
  }
}

// ===== EJEMPLOS DE USO =====

console.log("=== Ejemplos de Type Guards ===");

// Ejemplo 1
console.log(procesarValor("typescript")); // "TYPESCRIPT"
console.log(procesarValor(3.14159)); // "3.14159"

// Ejemplo 2
console.log(formatearValor("Hola")); // "Texto: Hola"
console.log(formatearValor(42.567)); // "Número: 42.57"
console.log(formatearValor(true)); // "Booleano: true"

// Ejemplo 3
console.log(procesarInput("hola mundo")); // "HOLA MUNDO"
console.log(procesarInput(null)); // "Valor nulo recibido"

// Ejemplo 5
procesarValorDesconocido("typescript"); // "String: TYPESCRIPT"
procesarValorDesconocido(42.5); // "Número: 42.50"
procesarValorDesconocido(true); // "Tipo no reconocido"

// Ejemplo 6
const usuario: Usuario = { nombre: "Juan", email: "juan@email.com" };
procesarDatos(usuario); // "Usuario: Juan (juan@email.com)"
procesarDatos("datos inválidos"); // "Datos no válidos"

// Ejemplo 7
console.log(procesarArray("texto simple")); // "texto simple"
console.log(procesarArray(["a", "b", "c"])); // "a, b, c"

// Ejemplo 8
const fecha = new Date();
const fechaPersonalizada = new FechaPersonalizada(fecha);
console.log(procesarFecha(fecha)); // Fecha formateada
console.log(procesarFecha(fechaPersonalizada)); // Fecha ISO
console.log(procesarFecha("2023-12-25")); // "2023-12-25"

// Ejemplo 9
const admin: Admin = { nombre: "Admin", permisos: ["read", "write"] };
procesarObjeto(usuario); // "Email del usuario: juan@email.com"
procesarObjeto(admin); // "Permisos del admin: read, write"

// Ejemplo 10
console.log(procesarValorOpcional("hola")); // "HOLA"
console.log(procesarValorOpcional("")); // "Valor no disponible"
console.log(procesarValorOpcional(null)); // "Valor no disponible"

// Ejemplo 11
console.log(procesarEstado("cargando")); // "Procesando..."
console.log(procesarEstado("exito")); // "Operación exitosa"
console.log(procesarEstado("error")); // "Error en la operación"

// Ejemplo 12
console.log(procesarValorComplejo("typescript")); // "TYPESCRIPT"
console.log(procesarValorComplejo(42)); // "Número positivo: 42"
console.log(procesarValorComplejo(true)); // "Verdadero"
console.log(procesarValorComplejo(null)); // "Valor nulo o indefinido"

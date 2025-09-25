# Tema 8: Narrowing en TypeScript

## ¿Qué es Narrowing?

**Narrowing** (estrechamiento) es el proceso mediante el cual TypeScript refina los tipos de una variable a tipos más específicos basándose en el análisis del flujo de control del código. Es una característica fundamental que permite que TypeScript entienda el contexto y reduzca las posibilidades de tipos en diferentes ramas de ejecución.

### Concepto Clave

Imagina que tienes una función que puede recibir un `number` o un `string`:

```typescript
function procesarValor(valor: number | string): string {
  // En este punto, TypeScript sabe que 'valor' puede ser number o string
  if (typeof valor === "number") {
    // Aquí TypeScript "estrecha" el tipo a solo 'number'
    return valor.toFixed(2); // ✅ Funciona porque sabe que es number
  }
  // Aquí TypeScript sabe que 'valor' es solo 'string'
  return valor.toUpperCase(); // ✅ Funciona porque sabe que es string
}
```

## Tipos de Narrowing

### 1. Type Guards con `typeof`

El operador `typeof` es una de las formas más comunes de hacer narrowing:

```typescript
function procesarInput(input: string | number) {
  if (typeof input === "string") {
    // TypeScript sabe que input es string aquí
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    // TypeScript sabe que input es number aquí
    console.log(input.toFixed(2));
  }
}
```

#### Valores que retorna `typeof`:
- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

#### Caso especial: `typeof null`

```typescript
function procesarValor(valor: string | string[] | null) {
  if (typeof valor === "object") {
    // ⚠️ CUIDADO: typeof null === "object" en JavaScript
    // Necesitamos verificar explícitamente que no sea null
    if (valor !== null) {
      // Ahora TypeScript sabe que es string[]
      for (const item of valor) {
        console.log(item);
      }
    }
  }
}
```

### 2. Narrowing por Veracidad (Truthiness)

TypeScript puede hacer narrowing basándose en si un valor es "truthy" o "falsy":

```typescript
function procesarValor(valor: string | null | undefined) {
  if (valor) {
    // TypeScript sabe que valor no es null, undefined, o string vacío
    console.log(valor.toUpperCase());
  }
  
  // Verificación más específica
  if (valor !== null && valor !== undefined) {
    // TypeScript sabe que valor es string
    console.log(valor.length);
  }
}
```

#### Valores Falsy en JavaScript:
- `false`
- `0`
- `-0`
- `0n` (BigInt)
- `""` (string vacío)
- `null`
- `undefined`
- `NaN`

### 3. Narrowing por Igualdad

```typescript
function procesarValor(valor: string | null) {
  if (valor === null) {
    // TypeScript sabe que valor es null
    console.log("Valor es null");
  } else {
    // TypeScript sabe que valor es string
    console.log(valor.toUpperCase());
  }
}
```

### 4. Narrowing con el operador `in`

```typescript
interface Usuario {
  nombre: string;
  email: string;
}

interface Admin {
  nombre: string;
  permisos: string[];
}

function procesarUsuario(usuario: Usuario | Admin) {
  if ("email" in usuario) {
    // TypeScript sabe que es Usuario
    console.log(usuario.email);
  } else {
    // TypeScript sabe que es Admin
    console.log(usuario.permisos);
  }
}
```

### 5. Narrowing con `instanceof`

```typescript
function procesarFecha(fecha: Date | string) {
  if (fecha instanceof Date) {
    // TypeScript sabe que fecha es Date
    console.log(fecha.getFullYear());
  } else {
    // TypeScript sabe que fecha es string
    console.log(fecha.toUpperCase());
  }
}
```

### 6. Narrowing por Asignación

```typescript
function procesarValor(valor: string | number) {
  // Asignación que TypeScript puede rastrear
  let resultado: string;
  
  if (typeof valor === "string") {
    resultado = valor.toUpperCase();
  } else {
    resultado = valor.toString();
  }
  
  return resultado;
}
```

## Discriminated Unions (Uniones Discriminadas)

Las uniones discriminadas son un patrón poderoso que combina narrowing con tipos específicos:

### Ejemplo Básico

```typescript
interface Circulo {
  tipo: "circulo";
  radio: number;
}

interface Cuadrado {
  tipo: "cuadrado";
  lado: number;
}

type Forma = Circulo | Cuadrado;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      // TypeScript sabe que forma es Circulo
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      // TypeScript sabe que forma es Cuadrado
      return forma.lado ** 2;
  }
}
```

### Ejemplo Avanzado: Sistema de Mensajes

```typescript
interface MensajeExito {
  tipo: "exito";
  datos: any;
  timestamp: number;
}

interface MensajeError {
  tipo: "error";
  mensaje: string;
  codigo: number;
}

interface MensajeCarga {
  tipo: "carga";
  progreso: number;
}

type Mensaje = MensajeExito | MensajeError | MensajeCarga;

function procesarMensaje(mensaje: Mensaje) {
  switch (mensaje.tipo) {
    case "exito":
      console.log("Datos recibidos:", mensaje.datos);
      break;
    case "error":
      console.error(`Error ${mensaje.codigo}: ${mensaje.mensaje}`);
      break;
    case "carga":
      console.log(`Progreso: ${mensaje.progreso}%`);
      break;
  }
}
```

## Type Predicates (Predicados de Tipo)

Los type predicates permiten crear funciones personalizadas para hacer narrowing:

```typescript
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function procesarValor(valor: unknown) {
  if (esString(valor)) {
    // TypeScript sabe que valor es string
    console.log(valor.toUpperCase());
  }
}
```

### Ejemplo Avanzado con Type Predicates

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

function esUsuario(valor: unknown): valor is Usuario {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "id" in valor &&
    "nombre" in valor &&
    "email" in valor &&
    typeof (valor as any).id === "number" &&
    typeof (valor as any).nombre === "string" &&
    typeof (valor as any).email === "string"
  );
}

function procesarDatos(datos: unknown) {
  if (esUsuario(datos)) {
    // TypeScript sabe que datos es Usuario
    console.log(`Usuario: ${datos.nombre} (${datos.email})`);
  }
}
```

## Assertion Functions (Funciones de Aserción)

Las assertion functions son similares a los type predicates pero lanzan errores si la condición no se cumple:

```typescript
function assertIsString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("Valor no es string");
  }
}

function procesarValor(valor: unknown) {
  assertIsString(valor);
  // Después de la aserción, TypeScript sabe que valor es string
  console.log(valor.toUpperCase());
}
```

## El Tipo `never`

El tipo `never` representa valores que nunca deberían existir. Es útil para verificación exhaustiva:

```typescript
type Forma = Circulo | Cuadrado;

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      return forma.lado ** 2;
    default:
      // Si agregamos un nuevo tipo a Forma, TypeScript nos avisará
      const _exhaustiveCheck: never = forma;
      return _exhaustiveCheck;
  }
}
```

## Control Flow Analysis

TypeScript analiza el flujo de control para hacer narrowing automáticamente:

```typescript
function procesarValor(valor: string | null | undefined) {
  // Verificaciones múltiples
  if (valor == null) {
    return; // Early return
  }
  
  // TypeScript sabe que valor no es null ni undefined aquí
  console.log(valor.toUpperCase());
  
  if (valor.length > 10) {
    // Narrowing adicional basado en la longitud
    console.log("String muy largo");
  }
}
```

## Mejores Prácticas

### 1. Usa Type Guards Específicos

```typescript
// ❌ Malo
function esValido(valor: unknown): boolean {
  return valor != null;
}

// ✅ Bueno
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}
```

### 2. Combina Múltiples Verificaciones

```typescript
function procesarValor(valor: unknown) {
  if (typeof valor === "string" && valor.length > 0) {
    // TypeScript sabe que es string no vacío
    console.log(valor.toUpperCase());
  }
}
```

### 3. Usa Discriminated Unions para Estados

```typescript
type EstadoCarga = 
  | { estado: "cargando" }
  | { estado: "exito"; datos: any }
  | { estado: "error"; mensaje: string };

function renderizarEstado(estado: EstadoCarga) {
  switch (estado.estado) {
    case "cargando":
      return "Cargando...";
    case "exito":
      return `Datos: ${estado.datos}`;
    case "error":
      return `Error: ${estado.mensaje}`;
  }
}
```

### 4. Verificación Exhaustiva

```typescript
function procesarForma(forma: Forma) {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      return forma.lado ** 2;
    default:
      // Esto asegura que manejemos todos los casos
      const _exhaustiveCheck: never = forma;
      throw new Error(`Forma no manejada: ${_exhaustiveCheck}`);
  }
}
```

## Casos de Uso Comunes

### 1. Validación de APIs

```typescript
interface RespuestaAPI {
  success: true;
  data: any;
} | {
  success: false;
  error: string;
}

function procesarRespuesta(respuesta: RespuestaAPI) {
  if (respuesta.success) {
    // TypeScript sabe que tiene 'data'
    console.log(respuesta.data);
  } else {
    // TypeScript sabe que tiene 'error'
    console.error(respuesta.error);
  }
}
```

### 2. Manejo de Eventos

```typescript
type Evento = 
  | { tipo: "click"; x: number; y: number }
  | { tipo: "keydown"; tecla: string }
  | { tipo: "scroll"; posicion: number };

function manejarEvento(evento: Evento) {
  switch (evento.tipo) {
    case "click":
      console.log(`Click en (${evento.x}, ${evento.y})`);
      break;
    case "keydown":
      console.log(`Tecla presionada: ${evento.tecla}`);
      break;
    case "scroll":
      console.log(`Posición de scroll: ${evento.posicion}`);
      break;
  }
}
```

### 3. Estados de Componentes

```typescript
type EstadoComponente = 
  | { estado: "inicial" }
  | { estado: "cargando" }
  | { estado: "exito"; contenido: string }
  | { estado: "error"; mensaje: string };

function renderizarComponente(estado: EstadoComponente) {
  switch (estado.estado) {
    case "inicial":
      return <div>Presiona para cargar</div>;
    case "cargando":
      return <div>Cargando...</div>;
    case "exito":
      return <div>{estado.contenido}</div>;
    case "error":
      return <div>Error: {estado.mensaje}</div>;
  }
}
```

## Errores Comunes y Cómo Evitarlos

### 1. No Verificar Null/Undefined

```typescript
// ❌ Malo
function procesarValor(valor: string | null) {
  return valor.toUpperCase(); // Error si valor es null
}

// ✅ Bueno
function procesarValor(valor: string | null) {
  if (valor === null) {
    return "";
  }
  return valor.toUpperCase();
}
```

### 2. Confiar en `typeof null`

```typescript
// ❌ Malo
function procesarValor(valor: string | null) {
  if (typeof valor === "object") {
    // Esto incluye null!
    console.log(valor.length); // Error
  }
}

// ✅ Bueno
function procesarValor(valor: string | null) {
  if (typeof valor === "object" && valor !== null) {
    console.log(valor.length);
  }
}
```

### 3. No Usar Verificación Exhaustiva

```typescript
// ❌ Malo - si agregamos un nuevo tipo, no nos avisará
function procesarForma(forma: Forma) {
  if (forma.tipo === "circulo") {
    return Math.PI * forma.radio ** 2;
  }
  // ¿Qué pasa si forma es "cuadrado"?
}

// ✅ Bueno
function procesarForma(forma: Forma) {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.radio ** 2;
    case "cuadrado":
      return forma.lado ** 2;
    default:
      const _exhaustiveCheck: never = forma;
      throw new Error(`Forma no manejada: ${_exhaustiveCheck}`);
  }
}
```

## Ejercicios Prácticos

Para practicar los conceptos de narrowing, revisa la carpeta `ejercicios/` donde encontrarás:

1. **Ejercicios básicos**: Type guards con `typeof`
2. **Ejercicios intermedios**: Discriminated unions
3. **Ejercicios avanzados**: Type predicates y assertion functions
4. **Casos reales**: Manejo de APIs y estados de aplicación

## Próximos Pasos

En el siguiente tema aprenderemos sobre **Módulos en TypeScript**, incluyendo:

- Importación y exportación de módulos
- Namespaces vs módulos ES6
- Configuración de módulos en tsconfig.json
- Resolución de módulos
- Declaraciones de módulos

---

**Tiempo estimado de estudio**: 60-75 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar narrowing
**Dificultad**: Intermedia
**Prerrequisitos**: Tipos básicos, interfaces, union types

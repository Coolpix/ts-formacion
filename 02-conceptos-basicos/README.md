# Tema 2: Conceptos Básicos de TypeScript

## ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** que añade tipado estático opcional al lenguaje JavaScript. Fue desarrollado por Microsoft y se ha convertido en uno de los lenguajes más populares para desarrollo web moderno.

### Características Principales

1. **Tipado Estático**: Permite definir tipos para variables, parámetros y valores de retorno
2. **Compilación a JavaScript**: El código TypeScript se compila a JavaScript estándar
3. **Compatibilidad**: Todo código JavaScript válido es también código TypeScript válido
4. **Herramientas Avanzadas**: Mejor autocompletado, detección de errores y refactoring
5. **Soporte para ES6+**: Incluye características modernas de JavaScript
6. **Interfaces y Clases**: Programación orientada a objetos mejorada
7. **Genéricos**: Reutilización de código con tipos parametrizados

## ¿Por qué TypeScript?

### Ventajas sobre JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| **Detección de Errores** | En tiempo de ejecución | En tiempo de compilación |
| **Autocompletado** | Básico | Avanzado con IntelliSense |
| **Refactoring** | Manual y propenso a errores | Automático y seguro |
| **Documentación** | Comentarios manuales | Tipos como documentación |
| **Escalabilidad** | Difícil en proyectos grandes | Excelente para proyectos grandes |

### Beneficios Concretos

1. **Menos Bugs**: Los errores de tipo se detectan antes de llegar a producción
2. **Mejor Experiencia de Desarrollo**: Autocompletado inteligente y navegación de código
3. **Código Más Mantenible**: Los tipos actúan como documentación viva
4. **Refactoring Seguro**: Cambios automáticos y seguros en todo el código
5. **Mejor Colaboración**: Los tipos facilitan la comprensión del código en equipos

## Verificación de Tipos Estática

### El Problema con JavaScript

En JavaScript, los errores de tipo solo se descubren en tiempo de ejecución:

```javascript
// JavaScript - Error en tiempo de ejecución
const message = "Hello World!";
message(); // TypeError: message is not a function
```

### La Solución con TypeScript

TypeScript detecta estos errores en tiempo de compilación:

```typescript
// TypeScript - Error en tiempo de compilación
const message = "Hello World!";
message(); // Error: This expression is not callable. Type 'String' has no call signatures.
```

## Tipos Básicos

### Tipos Primitivos

TypeScript incluye los tipos primitivos de JavaScript:

```typescript
// String
let nombre: string = "Juan";
let apellido: string = 'Pérez';
let mensaje: string = `Hola ${nombre}`;

// Number
let edad: number = 25;
let precio: number = 19.99;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// Boolean
let esActivo: boolean = true;
let esVisible: boolean = false;

// Null y Undefined
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;
```

### Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [1, 2, 3, 4, 5]; // Sintaxis alternativa

// Array de strings
let nombres: string[] = ["Ana", "Juan", "María"];

// Array mixto (usando union types)
let mixto: (string | number)[] = ["hola", 42, "mundo"];
```

### Tuplas

Las tuplas permiten expresar un array con un número fijo de elementos donde cada elemento puede tener un tipo diferente:

```typescript
// Tupla básica
let persona: [string, number] = ["Juan", 25];

// Tupla con más elementos
let coordenada: [number, number, number] = [10, 20, 30];

// Tupla con elementos opcionales
let configuracion: [string, number?] = ["localhost"]; // El segundo elemento es opcional
```

### Enums

Los enums permiten definir un conjunto de constantes con nombre:

```typescript
// Enum numérico
enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha
}

// Enum con valores personalizados
enum Estado {
  Activo = "ACTIVO",
  Inactivo = "INACTIVO",
  Pendiente = "PENDIENTE"
}

// Uso de enums
let direccion: Direccion = Direccion.Arriba;
let estado: Estado = Estado.Activo;
```

### Any

El tipo `any` desactiva la verificación de tipos:

```typescript
let valor: any = 42;
valor = "hola";
valor = true;
valor = { nombre: "Juan" };
```

**⚠️ Advertencia**: Usar `any` elimina los beneficios de TypeScript. Úsalo solo cuando sea absolutamente necesario.

### Void

El tipo `void` se usa para funciones que no retornan un valor:

```typescript
function mostrarMensaje(): void {
  console.log("Hola mundo");
}
```

### Never

El tipo `never` representa valores que nunca ocurren:

```typescript
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

function bucleInfinito(): never {
  while (true) {
    // Este código nunca termina
  }
}
```

### Object

El tipo `object` representa cualquier valor que no sea primitivo:

```typescript
let usuario: object = { nombre: "Juan", edad: 25 };
let config: object = { puerto: 3000, debug: true };
```

## Inferencia de Tipos

TypeScript puede inferir automáticamente los tipos en muchos casos:

```typescript
// TypeScript infiere que 'nombre' es string
let nombre = "Juan";

// TypeScript infiere que 'edad' es number
let edad = 25;

// TypeScript infiere que 'activo' es boolean
let activo = true;

// TypeScript infiere que 'numeros' es number[]
let numeros = [1, 2, 3, 4, 5];
```

### Cuándo Usar Anotaciones Explícitas

```typescript
// ✅ Útil: Cuando TypeScript no puede inferir el tipo
let datos: any = obtenerDatosExternos();
let usuario: Usuario = datos;

// ✅ Útil: Para documentar la intención
function calcularArea(radio: number): number {
  return Math.PI * radio * radio;
}

// ❌ Innecesario: TypeScript ya infiere el tipo
let nombre: string = "Juan"; // Redundante
```

## Funciones

### Parámetros y Valores de Retorno

```typescript
// Función con tipos explícitos
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Función sin valor de retorno
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
}

// Función con parámetros opcionales
function crearUsuario(nombre: string, email?: string): void {
  console.log(`Usuario: ${nombre}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

// Función con parámetros por defecto
function configurarServidor(puerto: number = 3000, debug: boolean = false): void {
  console.log(`Servidor en puerto ${puerto}, debug: ${debug}`);
}
```

### Funciones de Flecha

```typescript
// Función tradicional
function sumar(a: number, b: number): number {
  return a + b;
}

// Función de flecha
const sumarFlecha = (a: number, b: number): number => a + b;

// Función de flecha con múltiples líneas
const procesarDatos = (datos: any[]): string[] => {
  return datos
    .filter(item => item.activo)
    .map(item => item.nombre);
};
```

## Objetos

### Tipos de Objeto

```typescript
// Tipo de objeto básico
let usuario: { nombre: string; edad: number; activo: boolean } = {
  nombre: "Juan",
  edad: 25,
  activo: true
};

// Objeto con propiedades opcionales
let configuracion: { puerto: number; debug?: boolean } = {
  puerto: 3000
  // debug es opcional
};

// Objeto con propiedades de solo lectura
let configuracionReadonly: { readonly puerto: number; readonly debug: boolean } = {
  puerto: 3000,
  debug: true
};
```

### Union Types

Los union types permiten que una variable pueda ser de varios tipos:

```typescript
// Union type básico
let id: string | number;
id = "abc123";
id = 123;

// Union type con más tipos
let valor: string | number | boolean;
valor = "hola";
valor = 42;
valor = true;

// Union type en funciones
function formatearValor(valor: string | number): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    return valor.toString();
  }
}
```

### Literal Types

Los literal types permiten especificar valores exactos:

```typescript
// Literal types
let direccion: "arriba" | "abajo" | "izquierda" | "derecha";
direccion = "arriba"; // ✅ Válido
direccion = "norte";  // ❌ Error

// Literal types con números
let nivel: 1 | 2 | 3 | 4 | 5;
nivel = 3; // ✅ Válido
nivel = 6; // ❌ Error

// Combinación con union types
function procesarEstado(estado: "activo" | "inactivo" | "pendiente"): void {
  console.log(`Estado: ${estado}`);
}
```

## Configuración de TypeScript

### tsconfig.json

El archivo `tsconfig.json` configura cómo TypeScript compila tu código:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Opciones Importantes

- **target**: Versión de JavaScript objetivo (ES5, ES2015, ES2020, etc.)
- **module**: Sistema de módulos a usar (commonjs, es2015, esnext, etc.)
- **strict**: Habilita todas las verificaciones estrictas de tipos
- **outDir**: Directorio de salida para archivos compilados
- **rootDir**: Directorio raíz del código fuente
- **esModuleInterop**: Permite importar módulos CommonJS como módulos ES6
- **skipLibCheck**: Omite la verificación de tipos en archivos de declaración
- **forceConsistentCasingInFileNames**: Fuerza consistencia en mayúsculas/minúsculas

### Modo Estricto

El modo estricto (`"strict": true`) habilita varias verificaciones importantes:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### noImplicitAny

```typescript
// ❌ Error con noImplicitAny
function procesar(datos) { // Error: Parameter 'datos' implicitly has an 'any' type
  return datos.toString();
}

// ✅ Solución
function procesar(datos: any) {
  return datos.toString();
}
```

#### strictNullChecks

```typescript
// ❌ Error con strictNullChecks
let nombre: string = null; // Error: Type 'null' is not assignable to type 'string'

// ✅ Solución
let nombre: string | null = null;
```

## Herramientas de Desarrollo

### VS Code

VS Code tiene excelente soporte para TypeScript:

- **IntelliSense**: Autocompletado inteligente
- **Detección de errores**: Errores marcados en tiempo real
- **Refactoring**: Renombrar variables, extraer funciones, etc.
- **Navegación**: Ir a definición, buscar referencias
- **Debugging**: Depuración de código TypeScript

### Comandos Útiles

```bash
# Compilar un archivo
tsc archivo.ts

# Compilar todo el proyecto
tsc

# Compilar en modo watch
tsc --watch

# Verificar tipos sin generar archivos
tsc --noEmit

# Compilar con configuración específica
tsc --project tsconfig.json
```

## Mejores Prácticas

### 1. Usa Tipos Explícitos Cuando Sea Necesario

```typescript
// ✅ Bueno: Tipo explícito para documentar la intención
function calcularArea(radio: number): number {
  return Math.PI * radio * radio;
}

// ❌ Malo: Tipo innecesario
let nombre: string = "Juan"; // TypeScript ya infiere que es string
```

### 2. Evita `any` Siempre que Sea Posible

```typescript
// ❌ Malo: Usar any
function procesarDatos(datos: any): any {
  return datos.procesar();
}

// ✅ Bueno: Tipos específicos
function procesarDatos(datos: { procesar(): string }): string {
  return datos.procesar();
}
```

### 3. Usa Union Types para Flexibilidad

```typescript
// ✅ Bueno: Union type para flexibilidad
function formatearId(id: string | number): string {
  return id.toString();
}

// ❌ Malo: any para flexibilidad
function formatearId(id: any): string {
  return id.toString();
}
```

### 4. Aprovecha la Inferencia de Tipos

```typescript
// ✅ Bueno: Dejar que TypeScript infiera
const usuarios = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 }
];

// ❌ Malo: Tipos innecesarios
const usuarios: Array<{ nombre: string; edad: number }> = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 }
];
```

### 5. Usa Constantes para Valores Literales

```typescript
// ✅ Bueno: Constantes con tipos literales
const ESTADOS = {
  ACTIVO: "activo",
  INACTIVO: "inactivo",
  PENDIENTE: "pendiente"
} as const;

type Estado = typeof ESTADOS[keyof typeof ESTADOS];

// ❌ Malo: Strings mágicos
function cambiarEstado(estado: string) {
  if (estado === "activo") { // ¿Qué otros valores son válidos?
    // ...
  }
}
```

## Errores Comunes y Cómo Evitarlos

### 1. No Verificar Null/Undefined

```typescript
// ❌ Malo: No verificar null
function obtenerLongitud(texto: string | null): number {
  return texto.length; // Error si texto es null
}

// ✅ Bueno: Verificar null
function obtenerLongitud(texto: string | null): number {
  if (texto === null) {
    return 0;
  }
  return texto.length;
}
```

### 2. Usar `any` en Lugar de Tipos Específicos

```typescript
// ❌ Malo: any
function procesarUsuario(usuario: any): any {
  return usuario.nombre.toUpperCase();
}

// ✅ Bueno: Tipos específicos
function procesarUsuario(usuario: { nombre: string }): string {
  return usuario.nombre.toUpperCase();
}
```

### 3. No Usar Modo Estricto

```typescript
// ❌ Malo: Sin modo estricto
function dividir(a: number, b: number): number {
  return a / b; // ¿Qué pasa si b es 0?
}

// ✅ Bueno: Con modo estricto y validación
function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("División por cero");
  }
  return a / b;
}
```

## Casos de Uso Comunes

### 1. Validación de Datos de API

```typescript
interface UsuarioAPI {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

function procesarUsuarioAPI(datos: any): UsuarioAPI {
  // Validar que los datos tengan la estructura esperada
  if (typeof datos.id !== "number" || 
      typeof datos.nombre !== "string" ||
      typeof datos.email !== "string" ||
      typeof datos.activo !== "boolean") {
    throw new Error("Datos de usuario inválidos");
  }
  
  return datos as UsuarioAPI;
}
```

### 2. Configuración de Aplicación

```typescript
interface ConfiguracionApp {
  puerto: number;
  baseDatos: {
    host: string;
    puerto: number;
    nombre: string;
  };
  debug: boolean;
}

function cargarConfiguracion(): ConfiguracionApp {
  return {
    puerto: 3000,
    baseDatos: {
      host: "localhost",
      puerto: 5432,
      nombre: "mi_app"
    },
    debug: process.env.NODE_ENV === "development"
  };
}
```

### 3. Manejo de Eventos

```typescript
type TipoEvento = "click" | "hover" | "focus" | "blur";

interface EventoPersonalizado {
  tipo: TipoEvento;
  target: HTMLElement;
  timestamp: number;
}

function manejarEvento(evento: EventoPersonalizado): void {
  switch (evento.tipo) {
    case "click":
      console.log("Click en:", evento.target);
      break;
    case "hover":
      console.log("Hover en:", evento.target);
      break;
    // TypeScript te avisará si olvidas algún caso
  }
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre **Tipos Básicos Avanzados**, incluyendo:

- Interfaces y type aliases
- Union types y intersection types
- Enums avanzados
- Arrays y tuplas
- Funciones y parámetros
- Objetos y propiedades

---

**Tiempo estimado de estudio**: 45-60 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar conceptos básicos
**Dificultad**: Básica
**Prerrequisitos**: Conocimientos básicos de JavaScript

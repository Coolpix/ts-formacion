# Type Manipulation en TypeScript

## Introducción

Type Manipulation es una de las características más poderosas de TypeScript que permite crear tipos complejos a partir de tipos existentes. Esta funcionalidad nos permite construir tipos dinámicamente, reutilizar código de tipos y crear abstracciones más sofisticadas.

## ¿Qué es Type Manipulation?

Type Manipulation se refiere a la capacidad de TypeScript para crear nuevos tipos basándose en tipos existentes mediante operaciones como:

- **Generics**: Crear tipos parametrizados
- **Keyof**: Obtener las claves de un tipo
- **Typeof**: Obtener el tipo de una variable
- **Indexed Access Types**: Acceder a tipos por índice
- **Template Literal Types**: Crear tipos basados en strings
- **Conditional Types**: Crear tipos condicionales
- **Mapped Types**: Transformar tipos existentes

## Generics

### ¿Qué son los Generics?

Los generics permiten crear componentes reutilizables que pueden trabajar con diferentes tipos de datos. Son como variables para tipos.

### Sintaxis Básica

```typescript
function identidad<T>(arg: T): T {
    return arg;
}

let resultado = identidad<string>("Hola");
let numero = identidad<number>(42);
```

### Generics con Restricciones

```typescript
interface ConLongitud {
    length: number;
}

function logLongitud<T extends ConLongitud>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

### Generics en Interfaces

```typescript
interface Caja<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}
```

### Generics en Clases

```typescript
class Almacen<T> {
    private items: T[] = [];
    
    agregar(item: T): void {
        this.items.push(item);
    }
    
    obtener(index: number): T | undefined {
        return this.items[index];
    }
}
```

## Keyof

### ¿Qué es Keyof?

El operador `keyof` obtiene las claves de un tipo como unión de strings literales.

### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

type ClavesUsuario = keyof Usuario; // "id" | "nombre" | "email"
```

### Casos de Uso

```typescript
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

let usuario = { id: 1, nombre: "Juan", email: "juan@email.com" };
let nombre = obtenerPropiedad(usuario, "nombre"); // string
let id = obtenerPropiedad(usuario, "id"); // number
```

## Typeof

### ¿Qué es Typeof?

El operador `typeof` obtiene el tipo de una variable o expresión.

### Sintaxis

```typescript
let usuario = { id: 1, nombre: "Juan" };
type TipoUsuario = typeof usuario; // { id: number; nombre: string }
```

### Casos de Uso

```typescript
const configuracion = {
    servidor: "localhost",
    puerto: 3000,
    ssl: true
} as const;

type Configuracion = typeof configuracion;
// { readonly servidor: "localhost"; readonly puerto: 3000; readonly ssl: true; }
```

## Indexed Access Types

### ¿Qué son los Indexed Access Types?

Permiten acceder a tipos por índice, similar a como accedemos a propiedades de objetos.

### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    direccion: {
        calle: string;
        ciudad: string;
    };
}

type NombreUsuario = Usuario["nombre"]; // string
type DireccionUsuario = Usuario["direccion"]; // { calle: string; ciudad: string; }
type CalleUsuario = Usuario["direccion"]["calle"]; // string
```

### Casos de Uso

```typescript
function obtenerValor<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

type TipoRetorno = ReturnType<typeof obtenerValor>;
```

## Template Literal Types

### ¿Qué son los Template Literal Types?

Permiten crear tipos basados en strings usando template literals.

### Sintaxis

```typescript
type Evento = "click" | "hover" | "focus";
type EventoHandler = `on${Capitalize<Evento>}`; // "onClick" | "onHover" | "onFocus"
```

### Casos de Uso

```typescript
type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

type Permiso = `${Accion}_${Recurso}`;
// "crear_usuario" | "leer_usuario" | "actualizar_usuario" | "eliminar_usuario" | ...

type APIEndpoint = `/api/${Recurso}`;
// "/api/usuario" | "/api/producto" | "/api/orden"
```

## Conditional Types

### ¿Qué son los Conditional Types?

Permiten crear tipos que dependen de condiciones, similar a los operadores ternarios.

### Sintaxis

```typescript
type EsArray<T> = T extends any[] ? true : false;
type EsString<T> = T extends string ? true : false;
```

### Casos de Uso

```typescript
type NoNulo<T> = T extends null | undefined ? never : T;
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;
```

## Mapped Types

### ¿Qué son los Mapped Types?

Permiten transformar tipos existentes creando nuevos tipos basados en los originales.

### Sintaxis

```typescript
type Opcional<T> = {
    [K in keyof T]?: T[K];
};

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};
```

### Casos de Uso

```typescript
type ClavesString<T> = {
    [K in keyof T]: string;
};

type ClavesOpcionales<T> = {
    [K in keyof T]?: T[K];
};

type ClavesRequeridas<T> = {
    [K in keyof T]-?: T[K];
};
```

## Infer

### ¿Qué es Infer?

El operador `infer` permite extraer tipos de otros tipos, especialmente útil con conditional types.

### Sintaxis

```typescript
type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;
type ParametrosFuncion<T> = T extends (...args: infer P) => any ? P : never;
```

### Casos de Uso

```typescript
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type PropiedadPromesa<T> = T extends Promise<infer U> ? U : never;
type ClaveObjeto<T> = T extends Record<infer K, any> ? K : never;
```

## Casos de Uso Prácticos

### 1. Sistema de Eventos

```typescript
type Evento = "click" | "hover" | "focus";
type EventoHandler = `on${Capitalize<Evento>}`;

interface Eventos {
    [K in EventoHandler]: (evento: Event) => void;
}
```

### 2. Sistema de Permisos

```typescript
type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

type Permiso = `${Accion}_${Recurso}`;
type Permisos = Record<Permiso, boolean>;
```

### 3. Sistema de APIs

```typescript
type Recurso = "usuario" | "producto" | "orden";
type Metodo = "GET" | "POST" | "PUT" | "DELETE";

type Endpoint = `/api/${Recurso}`;
type MetodoEndpoint = `${Metodo} ${Endpoint}`;
```

### 4. Sistema de Validación

```typescript
type Validacion<T> = {
    [K in keyof T]: (valor: T[K]) => boolean;
};

type MensajesError<T> = {
    [K in keyof T]: string;
};
```

## Mejores Prácticas

### 1. Usar Generics para Reutilización

```typescript
// ✅ Bueno
function procesar<T>(item: T): T {
    return item;
}

// ❌ Malo
function procesarString(item: string): string {
    return item;
}
function procesarNumber(item: number): number {
    return item;
}
```

### 2. Usar Restricciones Apropiadas

```typescript
// ✅ Bueno
function logLongitud<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

// ❌ Malo
function logLongitud(item: any): void {
    console.log(item.length);
}
```

### 3. Usar Template Literal Types para APIs

```typescript
// ✅ Bueno
type Endpoint = `/api/${string}`;
type MetodoEndpoint = `${string} ${Endpoint}`;

// ❌ Malo
type Endpoint = string;
```

### 4. Usar Conditional Types para Lógica Compleja

```typescript
// ✅ Bueno
type NoNulo<T> = T extends null | undefined ? never : T;
type ElementoArray<T> = T extends (infer U)[] ? U : never;

// ❌ Malo
type NoNulo<T> = T;
```

## Errores Comunes

### 1. No Usar Restricciones en Generics

```typescript
// ❌ Malo
function procesar<T>(item: T): T {
    return item.toUpperCase(); // Error: T no tiene toUpperCase
}

// ✅ Bueno
function procesar<T extends string>(item: T): T {
    return item.toUpperCase() as T;
}
```

### 2. Usar `any` en lugar de Generics

```typescript
// ❌ Malo
function procesar(item: any): any {
    return item;
}

// ✅ Bueno
function procesar<T>(item: T): T {
    return item;
}
```

### 3. No Usar Template Literal Types

```typescript
// ❌ Malo
type EventoHandler = "onClick" | "onHover" | "onFocus";

// ✅ Bueno
type Evento = "click" | "hover" | "focus";
type EventoHandler = `on${Capitalize<Evento>}`;
```

## Conclusión

Type Manipulation es una característica poderosa de TypeScript que permite crear tipos dinámicos y reutilizables. Dominar estas técnicas te permitirá:

- Crear código más reutilizable
- Construir abstracciones más sofisticadas
- Mejorar la seguridad de tipos
- Reducir la duplicación de código
- Crear APIs más expresivas

La clave está en entender cuándo usar cada técnica y cómo combinarlas para crear soluciones elegantes y mantenibles.

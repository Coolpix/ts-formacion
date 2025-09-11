# Tema 2: Tipos Básicos y Anotaciones de Tipo

## Introducción

TypeScript proporciona un sistema de tipos rico y expresivo que nos permite describir la forma de los datos en nuestro código. Este sistema de tipos es la base fundamental de TypeScript y nos ayuda a:

- **Detectar errores** antes de que lleguen a producción
- **Documentar el código** de forma automática
- **Mejorar la experiencia de desarrollo** con autocompletado inteligente
- **Facilitar el refactoring** de manera segura
- **Hacer el código más mantenible** y legible

En este tema aprenderemos sobre los tipos básicos, cómo usarlos para hacer nuestro código más seguro y expresivo, y las mejores prácticas para aprovechar al máximo el sistema de tipos de TypeScript.

## Tipos Primitivos

### Tipos Básicos de JavaScript

TypeScript incluye todos los tipos primitivos de JavaScript:

```typescript
// Boolean
let esActivo: boolean = true;
let estaCompletado: boolean = false;

// Number
let edad: number = 25;
let precio: number = 99.99;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// String
let nombre: string = "Juan";
let apellido: string = 'García';
let mensaje: string = `Hola, ${nombre}!`;

// Null y Undefined
let nulo: null = null;
let indefinido: undefined = undefined;
```

### Tipos Específicos de TypeScript

```typescript
// Any - Evita la verificación de tipos (usar con precaución)
let variableCualquiera: any = 42;
variableCualquiera = "ahora es string";
variableCualquiera = true;

// Void - Para funciones que no devuelven nada
function mostrarMensaje(): void {
    console.log("Hola mundo");
}

// Never - Para funciones que nunca terminan o siempre lanzan errores
function errorInfinito(): never {
    throw new Error("Error fatal");
}

function bucleInfinito(): never {
    while (true) {
        // Código que nunca termina
    }
}
```

## Arrays

### Sintaxis de Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings (sintaxis alternativa)
let nombres: Array<string> = ["Ana", "Carlos", "Elena"];

// Array mixto (usando union types)
let mixto: (string | number)[] = ["texto", 42, "otro texto", 100];

// Array vacío
let vacio: number[] = [];
```

### Métodos de Array con Tipos

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];

// map devuelve un array del tipo especificado
let duplicados: number[] = numeros.map(n => n * 2);

// filter mantiene el tipo original
let pares: number[] = numeros.filter(n => n % 2 === 0);

// reduce con tipo de retorno específico
let suma: number = numeros.reduce((acc, n) => acc + n, 0);
```

## Tuplas (Tuples)

Las tuplas permiten expresar un array con un número fijo de elementos donde cada elemento tiene un tipo específico:

```typescript
// Tupla básica
let coordenada: [number, number] = [10, 20];

// Tupla con diferentes tipos
let persona: [string, number, boolean] = ["Juan", 30, true];

// Tupla con elementos opcionales
let configuracion: [string, number?] = ["localhost"];
let configuracionCompleta: [string, number?] = ["localhost", 3000];

// Tupla con elementos rest
let numeros: [number, ...number[]] = [1, 2, 3, 4, 5];
```

## Enums

Los enums permiten definir un conjunto de constantes con nombre:

```typescript
// Enum numérico (por defecto)
enum Direccion {
    Arriba,    // 0
    Abajo,     // 1
    Izquierda, // 2
    Derecha    // 3
}

// Enum con valores específicos
enum EstadoPedido {
    Pendiente = "pendiente",
    Procesando = "procesando",
    Enviado = "enviado",
    Entregado = "entregado"
}

// Enum con valores numéricos específicos
enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

// Uso de enums
let direccion: Direccion = Direccion.Arriba;
let estado: EstadoPedido = EstadoPedido.Pendiente;
```

## Union Types

Los union types permiten que una variable pueda ser de varios tipos:

```typescript
// Union de tipos básicos
let id: string | number = "abc123";
id = 456; // También válido

// Union con null y undefined
let nombre: string | null = null;
let edad: number | undefined = undefined;

// Union con arrays
let datos: string[] | number[] = ["a", "b", "c"];
datos = [1, 2, 3]; // También válido

// Union con funciones
let procesador: ((x: number) => number) | ((x: string) => string);
```

## Type Guards

Los type guards nos ayudan a verificar el tipo en tiempo de ejecución:

```typescript
function esString(valor: string | number): valor is string {
    return typeof valor === "string";
}

function procesarValor(valor: string | number): string {
    if (esString(valor)) {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else {
        // TypeScript sabe que valor es number aquí
        return valor.toString();
    }
}

// Type guard con typeof
function mostrarTipo(valor: string | number | boolean): void {
    if (typeof valor === "string") {
        console.log("Es string:", valor);
    } else if (typeof valor === "number") {
        console.log("Es number:", valor);
    } else {
        console.log("Es boolean:", valor);
    }
}
```

## Literal Types

Los literal types permiten especificar valores exactos:

```typescript
// String literal types
let color: "rojo" | "verde" | "azul" = "rojo";

// Number literal types
let tamaño: 1 | 2 | 3 | 4 = 2;

// Boolean literal types
let estado: true | false = true;

// Combinación con union types
function configurarColor(color: "rojo" | "verde" | "azul"): void {
    console.log(`Color configurado: ${color}`);
}
```

## Type Aliases

Los type aliases permiten crear nombres para tipos complejos:

```typescript
// Alias para tipos básicos
type ID = string | number;
type Estado = "activo" | "inactivo" | "pendiente";

// Alias para funciones
type Procesador = (valor: number) => number;
type Comparador = (a: number, b: number) => boolean;

// Alias para objetos
type Usuario = {
    id: ID;
    nombre: string;
    estado: Estado;
};

// Uso de aliases
let usuario: Usuario = {
    id: "123",
    nombre: "Juan",
    estado: "activo"
};

let procesar: Procesador = (x) => x * 2;
```

## Inferencia de Tipos

TypeScript puede inferir automáticamente los tipos en muchos casos:

```typescript
// Inferencia automática
let nombre = "Juan";        // TypeScript infiere: string
let edad = 30;              // TypeScript infiere: number
let esActivo = true;        // TypeScript infiere: boolean

// Inferencia en arrays
let numeros = [1, 2, 3];    // TypeScript infiere: number[]
let mixto = [1, "texto"];   // TypeScript infiere: (string | number)[]

// Inferencia en funciones
function sumar(a: number, b: number) {
    return a + b;           // TypeScript infiere que devuelve: number
}

// Inferencia en objetos
let persona = {
    nombre: "María",
    edad: 25,
    activa: true
}; // TypeScript infiere: { nombre: string; edad: number; activa: boolean }
```

## Narrowing (Reducción de Tipos)

El narrowing es el proceso por el cual TypeScript reduce el tipo de una variable basándose en el contexto:

```typescript
function procesarValor(valor: string | number) {
    if (typeof valor === "string") {
        // Aquí TypeScript sabe que valor es string
        return valor.toUpperCase();
    } else {
        // Aquí TypeScript sabe que valor es number
        return valor.toFixed(2);
    }
}
```

### Tipos de Narrowing

1. **Typeof Guards**: Usando `typeof`
2. **Instanceof Guards**: Usando `instanceof`
3. **In Guards**: Usando el operador `in`
4. **Equality Guards**: Usando comparaciones de igualdad
5. **User-defined Guards**: Type guards personalizados

## Assertion Functions

Las assertion functions permiten afirmar que un valor es de un tipo específico:

```typescript
function assertIsString(valor: unknown): asserts valor is string {
    if (typeof valor !== "string") {
        throw new Error("Valor no es string");
    }
}

function procesar(valor: unknown) {
    assertIsString(valor);
    // Aquí TypeScript sabe que valor es string
    return valor.toUpperCase();
}
```

## Discriminated Unions

Las discriminated unions son union types que comparten una propiedad común (discriminador):

```typescript
type Resultado =
    | { tipo: "exito"; datos: string }
    | { tipo: "error"; mensaje: string };

function procesarResultado(resultado: Resultado) {
    switch (resultado.tipo) {
        case "exito":
            // TypeScript sabe que resultado.datos existe
            return resultado.datos.toUpperCase();
        case "error":
            // TypeScript sabe que resultado.mensaje existe
            return resultado.mensaje;
    }
}
```

## Mejores Prácticas

### 1. Uso de Tipos Explícitos
```typescript
// ✅ Bueno: Tipo explícito cuando es necesario
let configuracion: ConfiguracionServidor = {
    host: "localhost",
    puerto: 3000
};

// ✅ Bueno: Inferencia cuando es clara
let nombre = "Juan"; // TypeScript infiere string
```

### 2. Evitar `any`
```typescript
// ❌ Malo: Usar any
let datos: any = obtenerDatos();

// ✅ Bueno: Usar tipos específicos
let datos: Usuario[] = obtenerDatos();
```

### 3. Usar Union Types Apropiadamente
```typescript
// ✅ Bueno: Union types para valores que pueden ser de varios tipos
let id: string | number = obtenerId();

// ✅ Bueno: Union types con null/undefined para valores opcionales
let nombre: string | null = obtenerNombre();
```

### 4. Aprovechar Type Guards
```typescript
// ✅ Bueno: Type guards para verificar tipos
function esUsuario(obj: unknown): obj is Usuario {
    return typeof obj === "object" && 
           obj !== null && 
           "nombre" in obj && 
           "email" in obj;
}
```

### 5. Usar Type Aliases para Tipos Complejos
```typescript
// ✅ Bueno: Type aliases para tipos reutilizables
type EventHandler<T> = (evento: T) => void;
type Configuracion = {
    host: string;
    puerto: number;
    ssl: boolean;
};
```

### 6. Aplicar Literal Types para Valores Específicos
```typescript
// ✅ Bueno: Literal types para valores específicos
type Estado = "cargando" | "exito" | "error";
type MetodoHTTP = "GET" | "POST" | "PUT" | "DELETE";
```

## Casos de Uso Comunes

### 1. Validación de Datos de API
```typescript
type RespuestaAPI = {
    exito: true;
    datos: Usuario[];
} | {
    exito: false;
    error: string;
};

function procesarRespuesta(respuesta: RespuestaAPI) {
    if (respuesta.exito) {
        return respuesta.datos.map(u => u.nombre);
    } else {
        console.error(respuesta.error);
        return [];
    }
}
```

### 2. Manejo de Estados
```typescript
type EstadoCarga = 
    | { estado: "inicial" }
    | { estado: "cargando" }
    | { estado: "exito"; datos: any[] }
    | { estado: "error"; mensaje: string };

function renderizarEstado(estado: EstadoCarga) {
    switch (estado.estado) {
        case "inicial":
            return "Presiona cargar";
        case "cargando":
            return "Cargando...";
        case "exito":
            return `Cargados ${estado.datos.length} elementos`;
        case "error":
            return `Error: ${estado.mensaje}`;
    }
}
```

### 3. Configuración de Aplicación
```typescript
type Entorno = "desarrollo" | "produccion" | "testing";

type Configuracion = {
    entorno: Entorno;
    apiUrl: string;
    debug: boolean;
    timeout: number;
};

const configuraciones: Record<Entorno, Configuracion> = {
    desarrollo: {
        entorno: "desarrollo",
        apiUrl: "http://localhost:3000",
        debug: true,
        timeout: 5000
    },
    produccion: {
        entorno: "produccion",
        apiUrl: "https://api.miapp.com",
        debug: false,
        timeout: 10000
    },
    testing: {
        entorno: "testing",
        apiUrl: "http://test-api.miapp.com",
        debug: true,
        timeout: 3000
    }
};
```

## Errores Comunes y Cómo Evitarlos

### 1. Confundir `null` y `undefined`
```typescript
// ❌ Confuso
let valor: string | null | undefined;

// ✅ Claro
let valor: string | null; // Valor puede ser string o null
let valorOpcional?: string; // Valor puede ser string o undefined
```

### 2. Usar `any` en lugar de tipos específicos
```typescript
// ❌ Malo
function procesar(datos: any): any {
    return datos.propiedad;
}

// ✅ Bueno
function procesar<T extends { propiedad: string }>(datos: T): string {
    return datos.propiedad;
}
```

### 3. No usar type guards con union types
```typescript
// ❌ Malo
function procesar(valor: string | number) {
    return valor.toUpperCase(); // Error: number no tiene toUpperCase
}

// ✅ Bueno
function procesar(valor: string | number) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre interfaces y tipos personalizados, que nos permitirán definir estructuras de datos más complejas y reutilizables. Cubriremos:

- Definición de interfaces
- Propiedades opcionales y de solo lectura
- Herencia de interfaces
- Diferencias entre interfaces y type aliases
- Interfaces para funciones y clases

---

**Tiempo estimado de estudio**: 60-75 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con tipos básicos
**Dificultad**: Intermedia

# Type Assertions en TypeScript

## Introducción

Las Type Assertions (aserciones de tipo) son una forma de decirle al compilador de TypeScript que trate una variable como si fuera de un tipo específico, incluso si el compilador no puede inferirlo automáticamente. Es como decirle al compilador "confía en mí, sé lo que estoy haciendo".

## Sintaxis básica

### Sintaxis con `as`
```typescript
let valor: any = "Hola mundo";
let longitud: number = (valor as string).length;
```

### Sintaxis con `<>` (solo en archivos .tsx)
```typescript
let valor: any = "Hola mundo";
let longitud: number = (<string>valor).length;
```

## Casos de uso comunes

### 1. Trabajo con DOM
```typescript
// Obtener elemento del DOM
let elemento = document.getElementById("miElemento");
// elemento.innerHTML = "Hola"; // ❌ Error: elemento puede ser null

// Con type assertion
let elemento = document.getElementById("miElemento") as HTMLElement;
elemento.innerHTML = "Hola"; // ✅ Funciona

// O más específico
let input = document.getElementById("miInput") as HTMLInputElement;
let valor = input.value; // ✅ Funciona
```

### 2. Trabajo con APIs externas
```typescript
// Respuesta de API sin tipos definidos
let respuesta: any = await fetch('/api/datos').then(r => r.json());

// Con type assertion
interface DatosAPI {
    usuarios: Array<{
        id: number;
        nombre: string;
        email: string;
    }>;
    total: number;
}

let datos: DatosAPI = respuesta as DatosAPI;
console.log(datos.usuarios.length); // ✅ Funciona
```

### 3. Trabajo con librerías de terceros
```typescript
// Librería sin tipos definidos
let libreria: any = require('libreria-sin-tipos');

// Con type assertion
interface LibreriaAPI {
    metodo1(): string;
    metodo2(param: number): boolean;
}

let libreriaTipada: LibreriaAPI = libreria as LibreriaAPI;
let resultado = libreriaTipada.metodo1(); // ✅ Funciona
```

## Type Assertions vs Type Guards

### Type Assertions (aserciones)
```typescript
let valor: any = "texto";
let longitud: number = (valor as string).length;
// No verifica en runtime, solo en compile time
```

### Type Guards (verificaciones)
```typescript
function esString(valor: any): valor is string {
    return typeof valor === 'string';
}

let valor: any = "texto";
if (esString(valor)) {
    let longitud: number = valor.length; // ✅ Seguro
}
```

## Type Assertions con Union Types

```typescript
// Union type
let valor: string | number = "123";

// Assertion a string
let longitud: number = (valor as string).length;

// Assertion a number
let numero: number = (valor as number) + 10;

// ⚠️ Cuidado: esto puede fallar en runtime
```

## Type Assertions con Generics

```typescript
// Función genérica
function obtenerPrimero<T>(array: any[]): T {
    return array[0] as T;
}

// Uso
let numeros = [1, 2, 3, 4, 5];
let primerNumero: number = obtenerPrimero<number>(numeros);

let strings = ["a", "b", "c"];
let primerString: string = obtenerPrimero<string>(strings);
```

## Type Assertions con Interfaces

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Datos sin tipo
let datos: any = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

// Con type assertion
let usuario: Usuario = datos as Usuario;
console.log(usuario.nombre); // ✅ Funciona
```

## Type Assertions con Arrays

```typescript
// Array sin tipo
let array: any[] = [1, 2, 3, 4, 5];

// Con type assertion
let numeros: number[] = array as number[];
let suma: number = numeros.reduce((a, b) => a + b, 0);

// O más específico
let numerosEspecificos: [number, number, number] = array as [number, number, number];
```

## Type Assertions con Funciones

```typescript
// Función sin tipo
let funcion: any = (a: number, b: number) => a + b;

// Con type assertion
let sumar: (a: number, b: number) => number = funcion as (a: number, b: number) => number;
let resultado: number = sumar(5, 3);
```

## Type Assertions con Clases

```typescript
class Usuario {
    constructor(public nombre: string, public email: string) {}
    
    obtenerInfo(): string {
        return `${this.nombre} (${this.email})`;
    }
}

// Objeto sin tipo
let objeto: any = {
    nombre: "Ana",
    email: "ana@email.com"
};

// Con type assertion
let usuario: Usuario = objeto as Usuario;
// ⚠️ Cuidado: no tiene los métodos de la clase
// usuario.obtenerInfo(); // ❌ Error en runtime
```

## Type Assertions con `unknown`

```typescript
// unknown es más seguro que any
let valor: unknown = "Hola mundo";

// Con type assertion
let texto: string = valor as string;
let longitud: number = texto.length;

// O con verificación previa
if (typeof valor === 'string') {
    let longitud: number = valor.length; // ✅ Seguro
}
```

## Type Assertions con `const`

```typescript
// Const assertion
let config = {
    servidor: "localhost",
    puerto: 3000
} as const;

// Ahora es readonly
// config.servidor = "otro"; // ❌ Error

// O con type assertion
let config2 = {
    servidor: "localhost",
    puerto: 3000
} as {
    readonly servidor: "localhost";
    readonly puerto: 3000;
};
```

## Type Assertions con `never`

```typescript
// Función que nunca retorna
function errorFatal(): never {
    throw new Error("Error crítico");
}

// Con type assertion
let resultado: never = errorFatal() as never;
// ⚠️ Cuidado: esto nunca se ejecutará
```

## Type Assertions con `void`

```typescript
// Función que no retorna nada
function mostrarMensaje(): void {
    console.log("Hola");
}

// Con type assertion
let resultado: void = mostrarMensaje() as void;
```

## Buenas prácticas

### 1. Usa type assertions solo cuando sea necesario
```typescript
// ❌ Malo - innecesario
let nombre: string = "Juan";
let longitud: number = (nombre as string).length;

// ✅ Bueno - directo
let nombre: string = "Juan";
let longitud: number = nombre.length;
```

### 2. Usa type guards cuando sea posible
```typescript
// ❌ Malo - type assertion
let valor: any = "texto";
let longitud: number = (valor as string).length;

// ✅ Bueno - type guard
function esString(valor: any): valor is string {
    return typeof valor === 'string';
}

let valor: any = "texto";
if (esString(valor)) {
    let longitud: number = valor.length; // ✅ Seguro
}
```

### 3. Documenta por qué usas type assertions
```typescript
// API externa sin tipos definidos
let respuesta: any = await fetch('/api/externa').then(r => r.json());

// Type assertion documentada
interface RespuestaAPI {
    datos: any[];
    total: number;
}

// ⚠️ Type assertion: la API externa no tiene tipos definidos
let datos: RespuestaAPI = respuesta as RespuestaAPI;
```

### 4. Usa `unknown` en lugar de `any` cuando sea posible
```typescript
// ❌ Malo
let valor: any = obtenerDatos();

// ✅ Mejor
let valor: unknown = obtenerDatos();
let datos: MiTipo = valor as MiTipo;
```

## Casos de uso específicos

### 1. Trabajo con Web APIs
```typescript
// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
    let coords = position.coords as GeolocationCoordinates;
    console.log(coords.latitude, coords.longitude);
});
```

### 2. Trabajo con Canvas
```typescript
let canvas = document.getElementById("miCanvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
ctx.fillRect(0, 0, 100, 100);
```

### 3. Trabajo con Web Workers
```typescript
let worker = new Worker("worker.js") as Worker;
worker.postMessage({ tipo: "calcular", datos: [1, 2, 3] });
```

### 4. Trabajo con IndexedDB
```typescript
let request = indexedDB.open("miDB", 1);
request.onsuccess = (event) => {
    let db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
    // Usar la base de datos
};
```

## Errores comunes

### 1. Type assertion incorrecta
```typescript
let valor: string = "123";
let numero: number = valor as number; // ❌ Incorrecto
// numero + 1; // Error en runtime
```

### 2. Type assertion innecesaria
```typescript
let nombre: string = "Juan";
let longitud: number = (nombre as string).length; // ❌ Innecesario
```

### 3. Type assertion sin verificación
```typescript
let valor: any = obtenerDatos();
let usuario: Usuario = valor as Usuario; // ❌ Peligroso
// usuario.nombre; // Puede fallar en runtime
```

## Alternativas a Type Assertions

### 1. Type Guards
```typescript
function esUsuario(valor: any): valor is Usuario {
    return valor && typeof valor.nombre === 'string' && typeof valor.email === 'string';
}

if (esUsuario(valor)) {
    // valor es Usuario aquí
    console.log(valor.nombre);
}
```

### 2. Validación de datos
```typescript
function validarUsuario(datos: any): Usuario {
    if (!datos || typeof datos.nombre !== 'string' || typeof datos.email !== 'string') {
        throw new Error("Datos de usuario inválidos");
    }
    return datos as Usuario;
}
```

### 3. Librerías de validación
```typescript
import { z } from 'zod';

const UsuarioSchema = z.object({
    nombre: z.string(),
    email: z.string().email()
});

let usuario = UsuarioSchema.parse(datos);
```

Las Type Assertions son una herramienta poderosa pero deben usarse con cuidado. Siempre prefiera type guards y validación de datos cuando sea posible.

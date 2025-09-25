# Union Types en TypeScript

## Introducción

Los Union Types (tipos de unión) permiten que una variable pueda ser de uno de varios tipos diferentes. Se definen usando el operador `|` (pipe) entre los tipos posibles.

## Sintaxis básica

```typescript
// Variable que puede ser string o number
let id: string | number = "abc123";
id = 456; // También válido

// Variable que puede ser string, number o boolean
let valor: string | number | boolean = "texto";
valor = 42;
valor = true;
```

## Casos de uso comunes

### 1. IDs que pueden ser string o number
```typescript
function procesarId(id: string | number): string {
    return `ID procesado: ${id}`;
}

procesarId("user123");  // ✅ Válido
procesarId(456);        // ✅ Válido
```

### 2. Estados de aplicación
```typescript
type Estado = "cargando" | "exitoso" | "error";

let estadoActual: Estado = "cargando";
estadoActual = "exitoso";
// estadoActual = "pendiente"; // ❌ Error: no es un estado válido
```

### 3. Valores que pueden ser null o undefined
```typescript
let nombre: string | null = "Juan";
nombre = null; // ✅ Válido

let edad: number | undefined = 25;
edad = undefined; // ✅ Válido

// Combinando ambos
let telefono: string | null | undefined = "123-456-789";
telefono = null;
telefono = undefined;
```

## Narrowing (Reducción de tipos)

TypeScript puede "reducir" el tipo de una variable basándose en el contexto:

### 1. Type guards con typeof
```typescript
function procesarValor(valor: string | number): string {
    if (typeof valor === 'string') {
        // Aquí TypeScript sabe que valor es string
        return valor.toUpperCase();
    } else {
        // Aquí TypeScript sabe que valor es number
        return valor.toString();
    }
}
```

### 2. Type guards con instanceof
```typescript
function procesarError(error: Error | string): string {
    if (error instanceof Error) {
        // Aquí TypeScript sabe que error es Error
        return error.message;
    } else {
        // Aquí TypeScript sabe que error es string
        return error;
    }
}
```

### 3. Type guards personalizados
```typescript
function esString(valor: string | number): valor is string {
    return typeof valor === 'string';
}

function procesarDatos(datos: string | number): string {
    if (esString(datos)) {
        // TypeScript sabe que datos es string
        return datos.toUpperCase();
    } else {
        // TypeScript sabe que datos es number
        return datos.toString();
    }
}
```

## Union Types con Arrays

```typescript
// Array que puede contener strings o números
let mixto: (string | number)[] = ["texto", 123, "otro texto", 456];

// Array que puede ser de strings O de números (no mixto)
let arrayUnion: string[] | number[] = ["a", "b", "c"];
arrayUnion = [1, 2, 3]; // ✅ Válido
// arrayUnion = ["a", 1]; // ❌ Error: no puede ser mixto
```

## Union Types con Objetos

```typescript
interface Usuario {
    nombre: string;
    email: string;
}

interface Admin {
    nombre: string;
    permisos: string[];
}

type UsuarioOAdmin = Usuario | Admin;

function procesarUsuario(usuario: UsuarioOAdmin): string {
    // TypeScript no puede inferir automáticamente el tipo
    // Necesitamos type guards
    if ('email' in usuario) {
        // Es Usuario
        return `Usuario: ${usuario.nombre} (${usuario.email})`;
    } else {
        // Es Admin
        return `Admin: ${usuario.nombre} con ${usuario.permisos.length} permisos`;
    }
}
```

## Discriminated Unions

Los discriminated unions son union types que tienen una propiedad común que actúa como discriminador:

```typescript
interface Exito {
    tipo: "exito";
    datos: any;
}

interface Error {
    tipo: "error";
    mensaje: string;
}

type Resultado = Exito | Error;

function procesarResultado(resultado: Resultado): string {
    switch (resultado.tipo) {
        case "exito":
            // TypeScript sabe que es Exito
            return `Éxito: ${JSON.stringify(resultado.datos)}`;
        case "error":
            // TypeScript sabe que es Error
            return `Error: ${resultado.mensaje}`;
    }
}
```

## Union Types con Literal Types

```typescript
// Union de literal types
type Color = "rojo" | "verde" | "azul";
type Tamaño = "pequeño" | "mediano" | "grande";

let color: Color = "rojo";
// color = "amarillo"; // ❌ Error: no es un color válido

// Combinando con otros tipos
type Configuracion = {
    color: Color;
    tamaño: Tamaño;
    activo: boolean;
};
```

## Funciones con Union Types

```typescript
// Parámetros con union types
function formatear(valor: string | number): string {
    return valor.toString();
}

// Retorno con union types
function obtenerValor(): string | null {
    return Math.random() > 0.5 ? "éxito" : null;
}

// Parámetros opcionales con union types
function configurar(opciones?: {
    modo: "desarrollo" | "produccion";
    debug: boolean;
}): void {
    // Implementación
}
```

## Union Types con Generics

```typescript
// Función genérica que retorna union type
function obtenerPrimero<T, U>(array: T[] | U[]): T | U | undefined {
    return array[0];
}

// Union type con generic
type Resultado<T> = {
    exito: true;
    datos: T;
} | {
    exito: false;
    error: string;
};
```

## Buenas prácticas

### 1. Usa nombres descriptivos
```typescript
// ✅ Bueno
type EstadoCarga = "cargando" | "exitoso" | "error";

// ❌ Malo
type Estado = "a" | "b" | "c";
```

### 2. Usa type guards para narrowing
```typescript
// ✅ Bueno
function esString(valor: string | number): valor is string {
    return typeof valor === 'string';
}

// ❌ Malo (type assertion)
function procesar(valor: string | number): string {
    return (valor as string).toUpperCase(); // Puede fallar
}
```

### 3. Usa discriminated unions cuando sea apropiado
```typescript
// ✅ Bueno - discriminated union
type Respuesta = 
    | { tipo: "exito"; datos: any }
    | { tipo: "error"; mensaje: string };

// ❌ Malo - union sin discriminador
type Respuesta = any | string;
```

### 4. Evita union types muy amplios
```typescript
// ❌ Malo - muy amplio
type Valor = string | number | boolean | object | any[];

// ✅ Mejor - más específico
type Id = string | number;
type Estado = "activo" | "inactivo";
```

## Diferencias con JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| Verificación de tipos | No | Sí, en tiempo de compilación |
| Union types | No nativos | Sí, con verificación |
| Narrowing | Manual | Automático con type guards |
| IntelliSense | Limitado | Completo con narrowing |

## Ejemplos prácticos

### API Response
```typescript
type ApiResponse<T> = 
    | { success: true; data: T }
    | { success: false; error: string };

async function fetchData(): Promise<ApiResponse<User[]>> {
    try {
        const data = await api.getUsers();
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
```

### Formulario
```typescript
type CampoFormulario = 
    | { tipo: "texto"; valor: string }
    | { tipo: "numero"; valor: number }
    | { tipo: "checkbox"; valor: boolean };

function validarCampo(campo: CampoFormulario): boolean {
    switch (campo.tipo) {
        case "texto":
            return campo.valor.length > 0;
        case "numero":
            return campo.valor > 0;
        case "checkbox":
            return campo.valor === true;
    }
}
```

### Eventos
```typescript
type Evento = 
    | { tipo: "click"; x: number; y: number }
    | { tipo: "keypress"; tecla: string }
    | { tipo: "scroll"; posicion: number };

function manejarEvento(evento: Evento): void {
    switch (evento.tipo) {
        case "click":
            console.log(`Click en (${evento.x}, ${evento.y})`);
            break;
        case "keypress":
            console.log(`Tecla presionada: ${evento.tecla}`);
            break;
        case "scroll":
            console.log(`Posición de scroll: ${evento.posicion}`);
            break;
    }
}
```

Los Union Types son una característica poderosa de TypeScript que permite crear APIs más flexibles y seguras, manteniendo la verificación de tipos estática.

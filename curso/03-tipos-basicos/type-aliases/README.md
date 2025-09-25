# Type Aliases en TypeScript

## Introducción

Los Type Aliases (alias de tipos) permiten crear un nuevo nombre para un tipo existente. Son especialmente útiles para tipos complejos, union types, y para hacer el código más legible y mantenible.

## Sintaxis básica

```typescript
// Alias para tipos primitivos
type ID = string;
type Edad = number;
type Activo = boolean;

// Uso de los aliases
let usuarioId: ID = "user123";
let edadUsuario: Edad = 25;
let usuarioActivo: Activo = true;
```

## Alias para Union Types

```typescript
// Union type simple
type Estado = "pendiente" | "procesando" | "completado" | "error";

// Union type con tipos primitivos
type ID = string | number;
type Valor = string | number | boolean;

// Uso
let estadoActual: Estado = "pendiente";
let identificador: ID = "abc123";
identificador = 456; // También válido
```

## Alias para tipos de función

```typescript
// Alias para función simple
type EventHandler = (event: Event) => void;

// Alias para función con parámetros y retorno
type Comparador<T> = (a: T, b: T) => number;
type Transformador<T, U> = (valor: T) => U;

// Uso
let manejadorClick: EventHandler = (event) => {
    console.log("Click detectado");
};

let compararNumeros: Comparador<number> = (a, b) => a - b;
let convertirAString: Transformador<number, string> = (num) => num.toString();
```

## Alias para tipos de objeto

```typescript
// Alias para objeto simple
type Coordenada = {
    x: number;
    y: number;
};

// Alias para objeto complejo
type Usuario = {
    id: string;
    nombre: string;
    email: string;
    activo: boolean;
    coordenadas?: Coordenada;
};

// Uso
let punto: Coordenada = { x: 10, y: 20 };
let usuario: Usuario = {
    id: "user1",
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};
```

## Alias con Generics

```typescript
// Alias genérico simple
type Contenedor<T> = {
    valor: T;
    timestamp: Date;
};

// Alias genérico con múltiples parámetros
type Par<T, U> = {
    primero: T;
    segundo: U;
};

// Alias genérico con restricciones
type ClaveValor<K extends string, V> = {
    [key in K]: V;
};

// Uso
let contenedorString: Contenedor<string> = {
    valor: "Hola",
    timestamp: new Date()
};

let par: Par<string, number> = {
    primero: "edad",
    segundo: 25
};

let configuracion: ClaveValor<"servidor" | "puerto", string | number> = {
    servidor: "localhost",
    puerto: 3000
};
```

## Alias para tipos complejos

```typescript
// Alias para array
type ListaNumeros = number[];
type ListaStrings = string[];

// Alias para array con generics
type Lista<T> = T[];

// Alias para función que retorna array
type GeneradorArray<T> = (cantidad: number) => T[];

// Uso
let numeros: ListaNumeros = [1, 2, 3, 4, 5];
let strings: ListaStrings = ["a", "b", "c"];
let generico: Lista<string> = ["x", "y", "z"];

let generador: GeneradorArray<number> = (cantidad) => 
    Array.from({ length: cantidad }, (_, i) => i + 1);
```

## Alias para tipos de API

```typescript
// Alias para respuesta de API
type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
};

// Alias para error de API
type ApiError = {
    success: false;
    error: string;
    code: number;
    timestamp: Date;
};

// Alias para resultado de operación
type ResultadoOperacion<T> = ApiResponse<T> | ApiError;

// Función para procesar respuesta
function procesarRespuesta<T>(respuesta: ResultadoOperacion<T>): string {
    if (respuesta.success) {
        return `Éxito: ${JSON.stringify(respuesta.data)}`;
    } else {
        return `Error ${respuesta.code}: ${respuesta.error}`;
    }
}
```

## Alias para tipos de configuración

```typescript
// Alias para configuración de base de datos
type ConfigDB = {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    ssl: boolean;
};

// Alias para configuración de aplicación
type ConfigApp = {
    nombre: string;
    version: string;
    entorno: "desarrollo" | "produccion" | "testing";
    debug: boolean;
    baseDeDatos: ConfigDB;
};

// Uso
let config: ConfigApp = {
    nombre: "Mi App",
    version: "1.0.0",
    entorno: "desarrollo",
    debug: true,
    baseDeDatos: {
        host: "localhost",
        port: 5432,
        database: "miapp",
        username: "admin",
        password: "secret",
        ssl: false
    }
};
```

## Alias para tipos de eventos

```typescript
// Alias para eventos del DOM
type EventoClick = {
    tipo: "click";
    x: number;
    y: number;
    boton: number;
};

type EventoTeclado = {
    tipo: "keydown" | "keyup";
    tecla: string;
    codigo: string;
    ctrlKey: boolean;
    shiftKey: boolean;
};

type EventoScroll = {
    tipo: "scroll";
    posicionX: number;
    posicionY: number;
};

// Union type para todos los eventos
type Evento = EventoClick | EventoTeclado | EventoScroll;

// Función para manejar eventos
function manejarEvento(evento: Evento): void {
    switch (evento.tipo) {
        case "click":
            console.log(`Click en (${evento.x}, ${evento.y})`);
            break;
        case "keydown":
        case "keyup":
            console.log(`Tecla ${evento.tecla} ${evento.tipo}`);
            break;
        case "scroll":
            console.log(`Scroll a (${evento.posicionX}, ${evento.posicionY})`);
            break;
    }
}
```

## Alias para tipos de utilidad

```typescript
// Alias para tipos opcionales
type Opcional<T> = T | undefined;
type Nullable<T> = T | null;

// Alias para tipos de solo lectura
type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

// Alias para tipos parciales
type Parcial<T> = {
    [K in keyof T]?: T[K];
};

// Alias para tipos requeridos
type Requerido<T> = {
    [K in keyof T]-?: T[K];
};

// Uso
interface Usuario {
    id: string;
    nombre: string;
    email?: string;
}

let usuarioOpcional: Opcional<Usuario> = undefined;
let usuarioNulo: Nullable<Usuario> = null;
let usuarioSoloLectura: SoloLectura<Usuario> = {
    id: "1",
    nombre: "Juan"
};
// usuarioSoloLectura.id = "2"; // ❌ Error: solo lectura

let usuarioParcial: Parcial<Usuario> = { nombre: "Ana" };
let usuarioRequerido: Requerido<Usuario> = {
    id: "1",
    nombre: "Luis",
    email: "luis@email.com" // email es requerido
};
```

## Alias para tipos de validación

```typescript
// Alias para validadores
type Validador<T> = (valor: T) => boolean;
type Transformador<T, U> = (valor: T) => U;

// Alias para reglas de validación
type ReglaValidacion<T> = {
    campo: keyof T;
    validador: Validador<T[keyof T]>;
    mensaje: string;
};

// Uso
let validadorEmail: Validador<string> = (email) => 
    email.includes("@") && email.includes(".");

let transformadorMayusculas: Transformador<string, string> = (texto) => 
    texto.toUpperCase();

let reglaEmail: ReglaValidacion<Usuario> = {
    campo: "email",
    validador: validadorEmail,
    mensaje: "Email inválido"
};
```

## Diferencias con Interfaces

| Aspecto | Type Alias | Interface |
|---------|------------|-----------|
| Extensión | No se puede extender | Se puede extender |
| Implementación | No se puede implementar | Se puede implementar |
| Union types | ✅ Soportado | ❌ No soportado |
| Computed properties | ✅ Soportado | ❌ No soportado |
| Mapped types | ✅ Soportado | ❌ No soportado |
| Declaración | Se puede redeclarar | Se puede extender |

## Buenas prácticas

### 1. Usa nombres descriptivos
```typescript
// ✅ Bueno
type UsuarioID = string;
type EstadoPedido = "pendiente" | "enviado" | "entregado";

// ❌ Malo
type UID = string;
type Estado = "a" | "b" | "c";
```

### 2. Agrupa aliases relacionados
```typescript
// ✅ Bueno - agrupado por funcionalidad
type UsuarioID = string;
type UsuarioNombre = string;
type UsuarioEmail = string;
type Usuario = {
    id: UsuarioID;
    nombre: UsuarioNombre;
    email: UsuarioEmail;
};
```

### 3. Usa generics cuando sea apropiado
```typescript
// ✅ Bueno - reutilizable
type Resultado<T> = {
    exito: boolean;
    datos: T;
};

// ❌ Malo - específico para un caso
type ResultadoUsuario = {
    exito: boolean;
    datos: Usuario;
};
```

### 4. Documenta aliases complejos
```typescript
/**
 * Representa una respuesta de API con datos genéricos
 * @template T El tipo de datos que contiene la respuesta
 */
type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
};
```

## Ejemplos prácticos

### Sistema de autenticación
```typescript
type Token = string;
type RefreshToken = string;
type UsuarioID = string;

type Credenciales = {
    email: string;
    password: string;
};

type Sesion = {
    token: Token;
    refreshToken: RefreshToken;
    usuarioId: UsuarioID;
    expiraEn: Date;
};

type ResultadoAuth = 
    | { exito: true; sesion: Sesion }
    | { exito: false; error: string };
```

### Sistema de notificaciones
```typescript
type TipoNotificacion = "info" | "warning" | "error" | "success";
type Prioridad = "baja" | "media" | "alta";

type Notificacion = {
    id: string;
    tipo: TipoNotificacion;
    titulo: string;
    mensaje: string;
    prioridad: Prioridad;
    timestamp: Date;
    leida: boolean;
};

type FiltroNotificaciones = {
    tipo?: TipoNotificacion;
    prioridad?: Prioridad;
    leida?: boolean;
};
```

Los Type Aliases son una herramienta poderosa para crear código más legible, mantenible y reutilizable en TypeScript.

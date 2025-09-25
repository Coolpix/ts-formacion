# Literal Types en TypeScript

## Introducción

Los Literal Types (tipos literales) en TypeScript permiten especificar valores exactos que una variable puede tener. En lugar de permitir cualquier string o number, puedes especificar exactamente qué valores son válidos.

## Tipos literales básicos

### String Literals
```typescript
// Variable que solo puede ser "rojo"
let color: "rojo" = "rojo";
// color = "azul"; // ❌ Error: no es "rojo"

// Variable que puede ser uno de varios valores
let estado: "pendiente" | "procesando" | "completado" = "pendiente";
```

### Number Literals
```typescript
// Variable que solo puede ser 42
let numero: 42 = 42;
// numero = 43; // ❌ Error: no es 42

// Variable que puede ser uno de varios números
let codigo: 200 | 404 | 500 = 200;
```

### Boolean Literals
```typescript
// Variable que solo puede ser true
let activo: true = true;
// activo = false; // ❌ Error: no es true

// Variable que puede ser true o false
let visible: true | false = true;
```

## Union Types con Literal Types

```typescript
// Union de string literals
type Color = "rojo" | "verde" | "azul";
type Tamaño = "pequeño" | "mediano" | "grande";

let color: Color = "rojo";
let tamaño: Tamaño = "mediano";

// Union de number literals
type CodigoHTTP = 200 | 201 | 400 | 401 | 404 | 500;
let codigo: CodigoHTTP = 200;

// Union mixta
type Valor = "texto" | 42 | true;
let valor: Valor = "texto";
```

## Literal Types en funciones

```typescript
// Parámetros con literal types
function cambiarColor(color: "rojo" | "verde" | "azul"): void {
    console.log(`Color cambiado a: ${color}`);
}

// Retorno con literal types
function obtenerEstado(): "activo" | "inactivo" {
    return Math.random() > 0.5 ? "activo" : "inactivo";
}

// Función con múltiples parámetros literales
function configurar(
    modo: "desarrollo" | "produccion",
    nivel: "debug" | "info" | "warn" | "error"
): void {
    console.log(`Modo: ${modo}, Nivel: ${nivel}`);
}
```

## Literal Types en interfaces

```typescript
interface Configuracion {
    entorno: "desarrollo" | "produccion" | "testing";
    nivel: "debug" | "info" | "warn" | "error";
    ssl: true | false;
}

let config: Configuracion = {
    entorno: "desarrollo",
    nivel: "debug",
    ssl: false
};
```

## Literal Types con const assertions

```typescript
// Sin const assertion
let colores = ["rojo", "verde", "azul"];
// colores es de tipo string[]

// Con const assertion
let coloresConst = ["rojo", "verde", "azul"] as const;
// coloresConst es de tipo readonly ["rojo", "verde", "azul"]

// Objeto con const assertion
let config = {
    servidor: "localhost",
    puerto: 3000,
    ssl: false
} as const;
// config es de tipo { readonly servidor: "localhost"; readonly puerto: 3000; readonly ssl: false; }
```

## Template Literal Types

```typescript
// Template literal types básicos
type Evento = `on${string}`;
let evento: Evento = "onClick"; // ✅ Válido
let evento2: Evento = "onMouseOver"; // ✅ Válido

// Template literal types más específicos
type EventoMouse = `onMouse${"Down" | "Up" | "Move"}`;
let eventoMouse: EventoMouse = "onMouseDown"; // ✅ Válido
// let eventoMouse2: EventoMouse = "onClick"; // ❌ Error

// Template literal types con union types
type CSSProperty = `margin${"Top" | "Right" | "Bottom" | "Left"}`;
let cssProp: CSSProperty = "marginTop"; // ✅ Válido
```

## Mapped Types con Literal Types

```typescript
// Mapped type que convierte string literals a uppercase
type Uppercase<T extends string> = {
    [K in T]: Uppercase<K>;
};

// Mapped type que crea propiedades opcionales
type Partial<T> = {
    [K in keyof T]?: T[K];
};

// Mapped type que hace propiedades readonly
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};
```

## Conditional Types con Literal Types

```typescript
// Conditional type que verifica si es un string literal
type IsStringLiteral<T> = T extends string ? true : false;

// Conditional type que extrae el tipo de un array
type ArrayElement<T> = T extends (infer U)[] ? U : never;

// Conditional type que verifica si es un objeto
type IsObject<T> = T extends object ? true : false;
```

## Literal Types en clases

```typescript
class Estado {
    private estado: "inicial" | "cargando" | "exitoso" | "error" = "inicial";
    
    cambiarEstado(nuevoEstado: "inicial" | "cargando" | "exitoso" | "error"): void {
        this.estado = nuevoEstado;
    }
    
    obtenerEstado(): "inicial" | "cargando" | "exitoso" | "error" {
        return this.estado;
    }
}
```

## Literal Types en enums

```typescript
// Enum con string literals
enum Color {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

// Enum con number literals
enum Codigo {
    Exito = 200,
    NoEncontrado = 404,
    ErrorServidor = 500
}

// Uso
let color: Color = Color.Rojo;
let codigo: Codigo = Codigo.Exito;
```

## Literal Types con generics

```typescript
// Función genérica con literal types
function crearEvento<T extends string>(tipo: T): `on${T}` {
    return `on${tipo}` as `on${T}`;
}

// Uso
let eventoClick = crearEvento("Click"); // Tipo: "onClick"
let eventoHover = crearEvento("Hover"); // Tipo: "onHover"

// Función genérica con múltiples literal types
function combinar<T extends string, U extends string>(a: T, b: U): `${T}${U}` {
    return `${a}${b}` as `${T}${U}`;
}

// Uso
let combinado = combinar("on", "Click"); // Tipo: "onClick"
```

## Literal Types en APIs

```typescript
// API response con literal types
interface ApiResponse<T> {
    success: true;
    data: T;
    message?: string;
}

interface ApiError {
    success: false;
    error: string;
    code: 400 | 401 | 404 | 500;
}

type ApiResult<T> = ApiResponse<T> | ApiError;

// Función que usa literal types
async function fetchData(): Promise<ApiResult<User[]>> {
    try {
        const response = await fetch('/api/users');
        if (response.ok) {
            return {
                success: true,
                data: await response.json()
            };
        } else {
            return {
                success: false,
                error: "Error al obtener datos",
                code: response.status as 400 | 401 | 404 | 500
            };
        }
    } catch (error) {
        return {
            success: false,
            error: "Error de conexión",
            code: 500
        };
    }
}
```

## Literal Types en formularios

```typescript
// Tipos para campos de formulario
type TipoCampo = "texto" | "numero" | "email" | "password" | "checkbox" | "select";
type Validacion = "requerido" | "opcional" | "condicional";

interface CampoFormulario {
    tipo: TipoCampo;
    nombre: string;
    validacion: Validacion;
    valor?: string | number | boolean;
}

// Función para crear campos
function crearCampo(
    tipo: TipoCampo,
    nombre: string,
    validacion: Validacion = "opcional"
): CampoFormulario {
    return {
        tipo,
        nombre,
        validacion
    };
}

// Uso
let campoNombre = crearCampo("texto", "nombre", "requerido");
let campoEmail = crearCampo("email", "email", "requerido");
let campoEdad = crearCampo("numero", "edad", "opcional");
```

## Literal Types en eventos

```typescript
// Tipos para eventos del sistema
type TipoEvento = "usuario_creado" | "usuario_actualizado" | "usuario_eliminado";
type NivelEvento = "info" | "warning" | "error" | "success";

interface Evento {
    tipo: TipoEvento;
    nivel: NivelEvento;
    timestamp: Date;
    datos: any;
}

// Función para crear eventos
function crearEvento(
    tipo: TipoEvento,
    nivel: NivelEvento,
    datos: any
): Evento {
    return {
        tipo,
        nivel,
        timestamp: new Date(),
        datos
    };
}

// Uso
let evento = crearEvento("usuario_creado", "info", { id: 1, nombre: "Juan" });
```

## Literal Types en configuración

```typescript
// Tipos para configuración de aplicación
type Entorno = "desarrollo" | "produccion" | "testing";
type NivelLog = "debug" | "info" | "warn" | "error";
type TipoBaseDatos = "mysql" | "postgresql" | "mongodb";

interface Configuracion {
    entorno: Entorno;
    nivelLog: NivelLog;
    baseDatos: {
        tipo: TipoBaseDatos;
        host: string;
        puerto: number;
    };
    ssl: true | false;
}

// Función para validar configuración
function validarConfiguracion(config: any): config is Configuracion {
    return (
        config &&
        typeof config.entorno === 'string' &&
        ["desarrollo", "produccion", "testing"].includes(config.entorno) &&
        typeof config.nivelLog === 'string' &&
        ["debug", "info", "warn", "error"].includes(config.nivelLog)
    );
}
```

## Buenas prácticas

### 1. Usa nombres descriptivos
```typescript
// ✅ Bueno
type EstadoPedido = "pendiente" | "procesando" | "enviado" | "entregado";

// ❌ Malo
type Estado = "a" | "b" | "c" | "d";
```

### 2. Agrupa literal types relacionados
```typescript
// ✅ Bueno - agrupado por funcionalidad
type Color = "rojo" | "verde" | "azul";
type Tamaño = "pequeño" | "mediano" | "grande";
type Forma = "cuadrado" | "círculo" | "triángulo";
```

### 3. Usa const assertions cuando sea apropiado
```typescript
// ✅ Bueno - con const assertion
let colores = ["rojo", "verde", "azul"] as const;

// ❌ Malo - sin const assertion
let colores = ["rojo", "verde", "azul"]; // Tipo: string[]
```

### 4. Documenta literal types complejos
```typescript
/**
 * Estados posibles de una tarea
 * @type {string}
 */
type EstadoTarea = "pendiente" | "en_proceso" | "completada" | "cancelada";
```

## Diferencias con Enums

| Aspecto | Literal Types | Enums |
|---------|---------------|-------|
| Sintaxis | `"valor"` | `enum { Valor = "valor" }` |
| Extensibilidad | Fácil | Limitada |
| Tamaño | No generan código | Generan código JavaScript |
| Reverse mapping | No | Sí (enums numéricos) |
| Namespace | No | Sí |

## Ejemplos prácticos

### Sistema de notificaciones
```typescript
type TipoNotificacion = "info" | "warning" | "error" | "success";
type Prioridad = "baja" | "media" | "alta";

interface Notificacion {
    id: string;
    tipo: TipoNotificacion;
    prioridad: Prioridad;
    titulo: string;
    mensaje: string;
    timestamp: Date;
}

class SistemaNotificaciones {
    private notificaciones: Notificacion[] = [];
    
    agregar(
        tipo: TipoNotificacion,
        prioridad: Prioridad,
        titulo: string,
        mensaje: string
    ): void {
        const notificacion: Notificacion = {
            id: Math.random().toString(36).substr(2, 9),
            tipo,
            prioridad,
            titulo,
            mensaje,
            timestamp: new Date()
        };
        
        this.notificaciones.push(notificacion);
    }
    
    obtenerPorTipo(tipo: TipoNotificacion): Notificacion[] {
        return this.notificaciones.filter(n => n.tipo === tipo);
    }
}
```

Los Literal Types son una característica poderosa de TypeScript que permite crear APIs más seguras y expresivas, especialmente cuando trabajas con valores específicos y conocidos.

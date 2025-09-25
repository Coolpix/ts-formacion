# Interfaces en TypeScript

## Introducción

Las Interfaces en TypeScript son una forma de definir la estructura de un objeto. Proporcionan una forma de describir la forma que debe tener un objeto, incluyendo las propiedades que debe tener y sus tipos.

## Sintaxis básica

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// Uso de la interfaz
let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};
```

## Propiedades opcionales

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Propiedad opcional
    fechaNacimiento?: Date;
}

// Uso con propiedades opcionales
let usuario: Usuario = {
    id: 1,
    nombre: "María",
    email: "maria@email.com"
    // telefono y fechaNacimiento son opcionales
};
```

## Propiedades de solo lectura

```typescript
interface Usuario {
    readonly id: number; // No se puede modificar después de la creación
    nombre: string;
    email: string;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Pedro",
    email: "pedro@email.com"
};

// usuario.id = 2; // ❌ Error: no se puede modificar
```

## Propiedades de función

```typescript
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

// Implementación
let calculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};
```

## Propiedades indexables

```typescript
interface Diccionario {
    [key: string]: string;
}

interface Numeros {
    [index: number]: string;
}

// Uso
let diccionario: Diccionario = {
    "hola": "hello",
    "adios": "goodbye"
};

let numeros: Numeros = {
    0: "cero",
    1: "uno",
    2: "dos"
};
```

## Extensión de interfaces

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    id: number;
    salario: number;
    departamento: string;
}

// Uso
let empleado: Empleado = {
    id: 1,
    nombre: "Ana",
    edad: 30,
    salario: 50000,
    departamento: "IT"
};
```

## Múltiples extensiones

```typescript
interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

interface Pajaro extends Volador, Nadador {
    cantar(): void;
}

// Implementación
let pajaro: Pajaro = {
    volar: () => console.log("Volando..."),
    nadar: () => console.log("Nadando..."),
    cantar: () => console.log("Cantando...")
};
```

## Interfaces con generics

```typescript
interface Contenedor<T> {
    valor: T;
    obtenerValor(): T;
    establecerValor(valor: T): void;
}

// Implementación
class Caja<T> implements Contenedor<T> {
    constructor(public valor: T) {}
    
    obtenerValor(): T {
        return this.valor;
    }
    
    establecerValor(valor: T): void {
        this.valor = valor;
    }
}

// Uso
let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);
```

## Interfaces para funciones

```typescript
interface Comparador<T> {
    (a: T, b: T): number;
}

interface EventHandler {
    (event: Event): void;
}

// Uso
let compararNumeros: Comparador<number> = (a, b) => a - b;
let manejadorClick: EventHandler = (event) => {
    console.log("Click detectado");
};
```

## Interfaces para constructores

```typescript
interface ConstructorUsuario {
    new (nombre: string, email: string): Usuario;
}

interface Usuario {
    nombre: string;
    email: string;
    obtenerInfo(): string;
}

// Implementación
class UsuarioImpl implements Usuario {
    constructor(public nombre: string, public email: string) {}
    
    obtenerInfo(): string {
        return `${this.nombre} (${this.email})`;
    }
}

// Uso
let Constructor: ConstructorUsuario = UsuarioImpl;
let usuario = new Constructor("Juan", "juan@email.com");
```

## Interfaces híbridas

```typescript
interface Contador {
    // Propiedades
    valor: number;
    
    // Métodos
    incrementar(): void;
    decrementar(): void;
    
    // Función
    (): number;
}

// Implementación
function crearContador(): Contador {
    let contador = function() {
        return contador.valor;
    } as Contador;
    
    contador.valor = 0;
    contador.incrementar = () => contador.valor++;
    contador.decrementar = () => contador.valor--;
    
    return contador;
}

// Uso
let contador = crearContador();
contador.incrementar();
contador.incrementar();
console.log(contador()); // 2
```

## Interfaces vs Type Aliases

### Interfaces
```typescript
interface Usuario {
    nombre: string;
    email: string;
}

// Se puede extender
interface UsuarioAdmin extends Usuario {
    permisos: string[];
}
```

### Type Aliases
```typescript
type Usuario = {
    nombre: string;
    email: string;
};

// No se puede extender directamente
type UsuarioAdmin = Usuario & {
    permisos: string[];
};
```

### Comparación

| Aspecto | Interface | Type Alias |
|---------|-----------|------------|
| Extensión | ✅ `extends` | ❌ No directa |
| Implementación | ✅ `implements` | ❌ No |
| Union types | ❌ No | ✅ Sí |
| Computed properties | ❌ No | ✅ Sí |
| Mapped types | ❌ No | ✅ Sí |
| Declaración | Se puede extender | Se puede redeclarar |

## Cuándo usar Interfaces vs Type Aliases

### Usa Interfaces cuando:
- Defines la forma de un objeto
- Necesitas extensibilidad
- Trabajas con clases
- Defines contratos para implementación

### Usa Type Aliases cuando:
- Defines union types
- Necesitas computed properties
- Trabajas con tipos primitivos
- Necesitas mapped types

## Interfaces en clases

```typescript
interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

class Pato implements Volador, Nadador {
    volar(): void {
        console.log("El pato vuela");
    }
    
    nadar(): void {
        console.log("El pato nada");
    }
}

let pato = new Pato();
pato.volar();
pato.nadar();
```

## Interfaces para APIs

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
}

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Función que usa la interfaz
async function obtenerUsuarios(): Promise<ApiResponse<Usuario[]>> {
    try {
        const response = await fetch('/api/usuarios');
        const data = await response.json();
        return {
            success: true,
            data,
            timestamp: new Date()
        };
    } catch (error) {
        return {
            success: false,
            data: [],
            message: error.message,
            timestamp: new Date()
        };
    }
}
```

## Interfaces para configuración

```typescript
interface Configuracion {
    servidor: {
        host: string;
        puerto: number;
        ssl: boolean;
    };
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
        usuario: string;
        password: string;
    };
    logging: {
        nivel: "debug" | "info" | "warn" | "error";
        archivo: string;
    };
}

// Uso
let config: Configuracion = {
    servidor: {
        host: "localhost",
        puerto: 3000,
        ssl: false
    },
    baseDeDatos: {
        host: "localhost",
        puerto: 5432,
        nombre: "miapp",
        usuario: "admin",
        password: "secret"
    },
    logging: {
        nivel: "info",
        archivo: "app.log"
    }
};
```

## Interfaces para eventos

```typescript
interface EventoClick {
    tipo: "click";
    x: number;
    y: number;
    boton: number;
}

interface EventoTeclado {
    tipo: "keydown" | "keyup";
    tecla: string;
    codigo: string;
    ctrlKey: boolean;
    shiftKey: boolean;
}

type Evento = EventoClick | EventoTeclado;

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
    }
}
```

## Buenas prácticas

### 1. Usa nombres descriptivos
```typescript
// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// ❌ Malo
interface U {
    i: number;
    n: string;
    e: string;
}
```

### 2. Agrupa interfaces relacionadas
```typescript
// ✅ Bueno - agrupado por funcionalidad
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

interface UsuarioAdmin extends Usuario {
    permisos: string[];
}

interface UsuarioInvitado extends Usuario {
    fechaExpiracion: Date;
}
```

### 3. Usa propiedades opcionales cuando sea apropiado
```typescript
// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Opcional
    fechaNacimiento?: Date; // Opcional
}
```

### 4. Documenta interfaces complejas
```typescript
/**
 * Representa un usuario del sistema
 */
interface Usuario {
    /** Identificador único del usuario */
    id: number;
    /** Nombre completo del usuario */
    nombre: string;
    /** Email del usuario (debe ser único) */
    email: string;
    /** Indica si el usuario está activo */
    activo: boolean;
}
```

## Ejemplos prácticos

### Sistema de autenticación
```typescript
interface Credenciales {
    email: string;
    password: string;
}

interface Sesion {
    token: string;
    refreshToken: string;
    usuarioId: number;
    expiraEn: Date;
}

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: "admin" | "usuario" | "invitado";
    activo: boolean;
}

interface ServicioAuth {
    login(credenciales: Credenciales): Promise<Sesion>;
    logout(token: string): Promise<void>;
    obtenerUsuario(token: string): Promise<Usuario>;
    renovarToken(refreshToken: string): Promise<Sesion>;
}
```

### Sistema de notificaciones
```typescript
interface Notificacion {
    id: string;
    tipo: "info" | "warning" | "error" | "success";
    titulo: string;
    mensaje: string;
    timestamp: Date;
    leida: boolean;
    usuarioId: number;
}

interface ServicioNotificaciones {
    enviar(notificacion: Omit<Notificacion, "id" | "timestamp" | "leida">): Promise<Notificacion>;
    obtener(usuarioId: number): Promise<Notificacion[]>;
    marcarComoLeida(id: string): Promise<void>;
    eliminar(id: string): Promise<void>;
}
```

Las Interfaces son una herramienta fundamental en TypeScript para crear código más estructurado, mantenible y type-safe.

# Utility Types en TypeScript

## Introducción

Los Utility Types son tipos predefinidos en TypeScript que proporcionan transformaciones comunes de tipos. Estos tipos son muy útiles para crear nuevos tipos basados en tipos existentes, lo que hace el código más flexible y reutilizable.

## Utility Types básicos

### `Partial<T>`
Hace todas las propiedades de un tipo opcionales.

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// Todas las propiedades son opcionales
type UsuarioParcial = Partial<Usuario>;
// Equivale a:
// {
//     id?: number;
//     nombre?: string;
//     email?: string;
//     activo?: boolean;
// }

let usuarioParcial: UsuarioParcial = {
    nombre: "Juan"
    // Las demás propiedades son opcionales
};
```

### `Required<T>`
Hace todas las propiedades de un tipo requeridas.

```typescript
interface Usuario {
    id?: number;
    nombre?: string;
    email?: string;
    activo?: boolean;
}

// Todas las propiedades son requeridas
type UsuarioRequerido = Required<Usuario>;
// Equivale a:
// {
//     id: number;
//     nombre: string;
//     email: string;
//     activo: boolean;
// }
```

### `Readonly<T>`
Hace todas las propiedades de un tipo de solo lectura.

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Todas las propiedades son readonly
type UsuarioSoloLectura = Readonly<Usuario>;
// Equivale a:
// {
//     readonly id: number;
//     readonly nombre: string;
//     readonly email: string;
// }

let usuario: UsuarioSoloLectura = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

// usuario.id = 2; // ❌ Error: no se puede modificar
```

### `Record<K, V>`
Crea un tipo con claves de tipo K y valores de tipo V.

```typescript
// Crear un tipo con claves string y valores number
type Puntuaciones = Record<string, number>;
// Equivale a: { [key: string]: number }

let puntuaciones: Puntuaciones = {
    "juan": 100,
    "maria": 95,
    "pedro": 87
};

// Crear un tipo con claves específicas
type Estados = Record<"pendiente" | "procesando" | "completado", string>;
// Equivale a:
// {
//     pendiente: string;
//     procesando: string;
//     completado: string;
// }

let estados: Estados = {
    pendiente: "En espera",
    procesando: "En proceso",
    completado: "Finalizado"
};
```

### `Pick<T, K>`
Selecciona propiedades específicas de un tipo.

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Seleccionar solo id y nombre
type UsuarioBasico = Pick<Usuario, "id" | "nombre">;
// Equivale a:
// {
//     id: number;
//     nombre: string;
// }

let usuarioBasico: UsuarioBasico = {
    id: 1,
    nombre: "Juan"
};
```

### `Omit<T, K>`
Excluye propiedades específicas de un tipo.

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Excluir id y telefono
type UsuarioSinId = Omit<Usuario, "id" | "telefono">;
// Equivale a:
// {
//     nombre: string;
//     email: string;
//     direccion: string;
// }

let usuarioSinId: UsuarioSinId = {
    nombre: "Juan",
    email: "juan@email.com",
    direccion: "Calle Principal 123"
};
```

## Utility Types avanzados

### `Exclude<T, U>`
Excluye tipos de una unión.

```typescript
type Colores = "rojo" | "verde" | "azul" | "amarillo";
type ColoresPrimarios = Exclude<Colores, "amarillo">;
// Resultado: "rojo" | "verde" | "azul"

type Numeros = string | number | boolean;
type SoloNumeros = Exclude<Numeros, string | boolean>;
// Resultado: number
```

### `Extract<T, U>`
Extrae tipos de una unión.

```typescript
type Colores = "rojo" | "verde" | "azul" | "amarillo";
type ColoresCalidos = Extract<Colores, "rojo" | "amarillo">;
// Resultado: "rojo" | "amarillo"

type Tipos = string | number | boolean;
type SoloStrings = Extract<Tipos, string>;
// Resultado: string
```

### `NonNullable<T>`
Excluye null y undefined de un tipo.

```typescript
type Tipos = string | number | null | undefined;
type TiposNoNulos = NonNullable<Tipos>;
// Resultado: string | number

type Usuario = {
    nombre: string;
    email: string | null;
    telefono?: string;
};

type UsuarioNoNulo = NonNullable<Usuario["email"]>;
// Resultado: string
```

### `Parameters<T>`
Extrae los tipos de parámetros de una función.

```typescript
function sumar(a: number, b: number, c: string): number {
    return a + b;
}

type ParametrosSumar = Parameters<typeof sumar>;
// Resultado: [number, number, string]

// Usar los parámetros
function crearFuncion(...args: ParametrosSumar): number {
    return sumar(...args);
}
```

### `ReturnType<T>`
Extrae el tipo de retorno de una función.

```typescript
function obtenerUsuario(): { id: number; nombre: string } {
    return { id: 1, nombre: "Juan" };
}

type TipoRetorno = ReturnType<typeof obtenerUsuario>;
// Resultado: { id: number; nombre: string }

// Usar el tipo de retorno
let usuario: TipoRetorno = obtenerUsuario();
```

### `ConstructorParameters<T>`
Extrae los tipos de parámetros de un constructor.

```typescript
class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public edad: number
    ) {}
}

type ParametrosConstructor = ConstructorParameters<typeof Usuario>;
// Resultado: [string, string, number]

// Usar los parámetros del constructor
function crearUsuario(...args: ParametrosConstructor): Usuario {
    return new Usuario(...args);
}
```

### `InstanceType<T>`
Extrae el tipo de instancia de un constructor.

```typescript
class Usuario {
    constructor(
        public nombre: string,
        public email: string
    ) {}
}

type TipoInstancia = InstanceType<typeof Usuario>;
// Resultado: Usuario

// Usar el tipo de instancia
function procesarUsuario(usuario: TipoInstancia): void {
    console.log(usuario.nombre);
}
```

## Utility Types personalizados

### `DeepPartial<T>`
Hace todas las propiedades opcionales recursivamente.

```typescript
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Usuario {
    id: number;
    nombre: string;
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
}

type UsuarioParcialProfundo = DeepPartial<Usuario>;
// Todas las propiedades son opcionales, incluyendo las anidadas

let usuarioParcial: UsuarioParcialProfundo = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
        // ciudad y codigoPostal son opcionales
    }
};
```

### `DeepReadonly<T>`
Hace todas las propiedades de solo lectura recursivamente.

```typescript
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface Usuario {
    id: number;
    nombre: string;
    direccion: {
        calle: string;
        ciudad: string;
    };
}

type UsuarioSoloLecturaProfundo = DeepReadonly<Usuario>;
// Todas las propiedades son readonly, incluyendo las anidadas

let usuario: UsuarioSoloLecturaProfundo = {
    id: 1,
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal",
        ciudad: "Madrid"
    }
};

// usuario.direccion.calle = "Nueva Calle"; // ❌ Error: no se puede modificar
```

### `Nullable<T>`
Hace un tipo nullable.

```typescript
type Nullable<T> = T | null;

type UsuarioNullable = Nullable<Usuario>;
// Resultado: Usuario | null

let usuario: UsuarioNullable = null; // ✅ Válido
usuario = { id: 1, nombre: "Juan" }; // ✅ Válido
```

### `Optional<T>`
Hace un tipo opcional.

```typescript
type Optional<T> = T | undefined;

type UsuarioOpcional = Optional<Usuario>;
// Resultado: Usuario | undefined

let usuario: UsuarioOpcional = undefined; // ✅ Válido
usuario = { id: 1, nombre: "Juan" }; // ✅ Válido
```

## Casos de uso prácticos

### 1. Formularios
```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Para crear un usuario, no necesitamos el id
type UsuarioCrear = Omit<Usuario, "id">;

// Para actualizar un usuario, todas las propiedades son opcionales
type UsuarioActualizar = Partial<UsuarioCrear>;

// Para mostrar un usuario, solo necesitamos algunos campos
type UsuarioMostrar = Pick<Usuario, "id" | "nombre" | "email">;
```

### 2. APIs
```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    fechaCreacion: Date;
}

// Respuesta de API (sin password)
type UsuarioAPI = Omit<Usuario, "password">;

// Crear usuario (sin id y fechaCreacion)
type UsuarioCrear = Omit<Usuario, "id" | "fechaCreacion">;

// Actualizar usuario (todas las propiedades opcionales excepto id)
type UsuarioActualizar = Partial<Omit<Usuario, "id">> & { id: number };
```

### 3. Configuración
```typescript
interface Configuracion {
    servidor: string;
    puerto: number;
    ssl: boolean;
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
    };
}

// Configuración por defecto (todas las propiedades opcionales)
type ConfiguracionPorDefecto = Partial<Configuracion>;

// Configuración de solo lectura
type ConfiguracionSoloLectura = Readonly<Configuracion>;

// Configuración de base de datos por separado
type ConfiguracionDB = Pick<Configuracion, "baseDeDatos">;
```

### 4. Eventos
```typescript
interface Evento {
    tipo: string;
    timestamp: Date;
    datos: any;
    usuario: {
        id: number;
        nombre: string;
        email: string;
    };
}

// Evento sin datos sensibles
type EventoPublico = Omit<Evento, "usuario"> & {
    usuario: Pick<Evento["usuario"], "id" | "nombre">;
};

// Evento de solo lectura
type EventoSoloLectura = Readonly<Evento>;
```

## Combinando Utility Types

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    fechaCreacion: Date;
    activo: boolean;
}

// Usuario para crear (sin id, password, fechaCreacion)
type UsuarioCrear = Omit<Usuario, "id" | "password" | "fechaCreacion">;

// Usuario para actualizar (todas las propiedades opcionales excepto id)
type UsuarioActualizar = Partial<Omit<Usuario, "id">> & { id: number };

// Usuario para mostrar (solo campos públicos)
type UsuarioMostrar = Pick<Usuario, "id" | "nombre" | "email" | "activo">;

// Usuario de solo lectura
type UsuarioSoloLectura = Readonly<Usuario>;

// Usuario con campos sensibles opcionales
type UsuarioSeguro = Omit<Usuario, "password"> & {
    password?: string;
};
```

## Buenas prácticas

### 1. Usa nombres descriptivos
```typescript
// ✅ Bueno
type UsuarioCrear = Omit<Usuario, "id" | "fechaCreacion">;
type UsuarioActualizar = Partial<UsuarioCrear>;

// ❌ Malo
type U1 = Omit<Usuario, "id">;
type U2 = Partial<U1>;
```

### 2. Combina utility types cuando sea necesario
```typescript
// ✅ Bueno - combinación clara
type UsuarioSeguro = Readonly<Pick<Usuario, "id" | "nombre" | "email">>;

// ❌ Malo - demasiado complejo
type UsuarioSeguro = Readonly<Pick<Omit<Usuario, "password">, "id" | "nombre" | "email">>;
```

### 3. Documenta utility types complejos
```typescript
/**
 * Usuario para crear - excluye campos generados automáticamente
 */
type UsuarioCrear = Omit<Usuario, "id" | "fechaCreacion">;

/**
 * Usuario para actualizar - todas las propiedades opcionales excepto id
 */
type UsuarioActualizar = Partial<Omit<Usuario, "id">> & { id: number };
```

Los Utility Types son una herramienta poderosa que permite crear tipos más flexibles y reutilizables, reduciendo la duplicación de código y mejorando la mantenibilidad.

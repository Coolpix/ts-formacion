# Object Types en TypeScript

## Introducción

Los Object Types son una de las características más importantes de TypeScript, permitiendo definir la estructura y comportamiento de objetos de manera precisa y segura. Esta funcionalidad es fundamental para crear código mantenible y robusto.

## ¿Qué son los Object Types?

Los Object Types en TypeScript permiten definir la forma y estructura de objetos, incluyendo sus propiedades, métodos y tipos de datos. Esto proporciona una capa de seguridad de tipos que ayuda a prevenir errores comunes en tiempo de desarrollo.

## Tipos de Object Types

### 1. Interfaces

Las interfaces son la forma más común de definir object types en TypeScript.

#### Sintaxis Básica

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};
```

#### Propiedades Opcionales

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email?: string; // Propiedad opcional
    telefono?: string; // Propiedad opcional
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan"
    // email y telefono son opcionales
};
```

#### Propiedades de Solo Lectura

```typescript
interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com"
};

// usuario.id = 2; // ❌ Error: no se puede modificar
```

#### Propiedades de Solo Escritura

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
}

// Crear un tipo que excluya propiedades sensibles
type UsuarioPublico = Omit<Usuario, "password">;
```

### 2. Type Aliases

Los type aliases permiten crear alias para tipos existentes o definir nuevos tipos.

#### Sintaxis Básica

```typescript
type Usuario = {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
};

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};
```

#### Union Types

```typescript
type Estado = "activo" | "inactivo" | "pendiente";
type TipoUsuario = "admin" | "usuario" | "invitado";

interface Usuario {
    id: number;
    nombre: string;
    estado: Estado;
    tipo: TipoUsuario;
}
```

#### Intersection Types

```typescript
interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

type Usuario = ConId & ConNombre & {
    email: string;
    activo: boolean;
};
```

### 3. Propiedades de Función

Las interfaces pueden incluir propiedades que son funciones.

#### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    saludar: () => string;
    actualizarNombre: (nuevoNombre: string) => void;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    },
    actualizarNombre: function(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }
};
```

#### Métodos con Parámetros

```typescript
interface Calculadora {
    sumar: (a: number, b: number) => number;
    restar: (a: number, b: number) => number;
    multiplicar: (a: number, b: number) => number;
    dividir: (a: number, b: number) => number;
}
```

### 4. Propiedades de Array

Las interfaces pueden incluir propiedades que son arrays.

#### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    hobbies: string[];
    numeros: number[];
    contactos: {
        telefono: string;
        direccion: string;
    }[];
}
```

#### Arrays con Tipos Específicos

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    permisos: ("leer" | "escribir" | "eliminar")[];
    configuracion: {
        tema: "claro" | "oscuro";
        idioma: "es" | "en" | "fr";
    }[];
}
```

### 5. Propiedades de Objeto

Las interfaces pueden incluir propiedades que son objetos.

#### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
        pais: string;
    };
    configuracion: {
        tema: "claro" | "oscuro";
        idioma: "es" | "en" | "fr";
        notificaciones: boolean;
    };
}
```

#### Objetos Anidados

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    perfil: {
        avatar: string;
        biografia: string;
        redesSociales: {
            twitter?: string;
            linkedin?: string;
            github?: string;
        };
    };
}
```

### 6. Index Signatures

Los index signatures permiten definir propiedades adicionales que no están explícitamente definidas.

#### Sintaxis

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: any; // Permite propiedades adicionales
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "123-456-789", // Propiedad adicional permitida
    edad: 25 // Propiedad adicional permitida
};
```

#### Index Signatures con Tipos Específicos

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: string | number; // Solo permite strings o numbers
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "123-456-789", // ✅ Permitido
    edad: 25 // ✅ Permitido
    // activo: true // ❌ Error: boolean no está permitido
};
```

### 7. Extending Interfaces

Las interfaces pueden extender otras interfaces.

#### Sintaxis

```typescript
interface Persona {
    nombre: string;
    email: string;
}

interface Usuario extends Persona {
    id: number;
    activo: boolean;
}

interface Admin extends Usuario {
    permisos: string[];
    nivel: number;
}
```

#### Múltiples Extensiones

```typescript
interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

interface ConEmail {
    email: string;
}

interface Usuario extends ConId, ConNombre, ConEmail {
    activo: boolean;
}
```

### 8. Generic Interfaces

Las interfaces pueden ser genéricas para trabajar con diferentes tipos.

#### Sintaxis

```typescript
interface Caja<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}

let cajaString: Caja<string> = {
    contenido: "Hola",
    obtenerContenido: function() {
        return this.contenido;
    },
    establecerContenido: function(nuevoContenido: string) {
        this.contenido = nuevoContenido;
    }
};
```

#### Generic Interfaces con Restricciones

```typescript
interface ConLongitud {
    length: number;
}

interface Almacen<T extends ConLongitud> {
    items: T[];
    agregar(item: T): void;
    obtener(index: number): T | undefined;
    obtenerLongitud(): number;
}
```

## Casos de Uso Prácticos

### 1. Sistema de Usuarios

```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
    permisos: ("leer" | "escribir" | "eliminar")[];
    fechaCreacion: Date;
    activo: boolean;
}

interface UsuarioCrear {
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: Usuario["direccion"];
    permisos: Usuario["permisos"];
}

interface UsuarioActualizar {
    nombre?: string;
    email?: string;
    telefono?: string;
    direccion?: Usuario["direccion"];
    permisos?: Usuario["permisos"];
    activo?: boolean;
}
```

### 2. Sistema de Productos

```typescript
interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    etiquetas: string[];
    imagenes: string[];
    especificaciones: {
        [key: string]: string | number;
    };
    fechaCreacion: Date;
    fechaActualizacion: Date;
    activo: boolean;
}

interface ProductoCrear {
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    etiquetas: string[];
    imagenes: string[];
    especificaciones: Producto["especificaciones"];
}

interface ProductoActualizar {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    categoria?: string;
    etiquetas?: string[];
    imagenes?: string[];
    especificaciones?: Producto["especificaciones"];
    activo?: boolean;
}
```

### 3. Sistema de APIs

```typescript
interface RespuestaAPI<T> {
    exito: boolean;
    datos: T;
    mensaje?: string;
    codigo: number;
    timestamp: Date;
}

interface ErrorAPI {
    exito: false;
    error: string;
    codigo: number;
    timestamp: Date;
}

interface ExitoAPI<T> {
    exito: true;
    datos: T;
    mensaje?: string;
    codigo: number;
    timestamp: Date;
}

type RespuestaAPI<T> = ExitoAPI<T> | ErrorAPI;
```

### 4. Sistema de Configuración

```typescript
interface Configuracion {
    servidor: {
        host: string;
        puerto: number;
        ssl: boolean;
        timeout: number;
    };
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
        usuario: string;
        password: string;
        ssl: boolean;
    };
    autenticacion: {
        jwt: {
            secret: string;
            expiracion: string;
        };
        oauth: {
            google: {
                clientId: string;
                clientSecret: string;
            };
            facebook: {
                appId: string;
                appSecret: string;
            };
        };
    };
    logging: {
        nivel: "debug" | "info" | "warn" | "error";
        archivo: string;
        consola: boolean;
    };
}
```

## Mejores Prácticas

### 1. Usar Interfaces para Object Types

```typescript
// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// ❌ Malo
type Usuario = {
    id: number;
    nombre: string;
    email: string;
};
```

### 2. Usar Propiedades Opcionales Apropiadamente

```typescript
// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Opcional cuando no siempre está disponible
}

// ❌ Malo
interface Usuario {
    id?: number; // ID no debería ser opcional
    nombre?: string; // Nombre no debería ser opcional
    email?: string; // Email no debería ser opcional
}
```

### 3. Usar Readonly para Propiedades Inmutables

```typescript
// ✅ Bueno
interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
}

// ❌ Malo
interface Usuario {
    id: number; // ID debería ser readonly
    nombre: string;
    email: string;
}
```

### 4. Usar Index Signatures con Cuidado

```typescript
// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: string | number; // Tipos específicos
}

// ❌ Malo
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: any; // Demasiado permisivo
}
```

### 5. Usar Generic Interfaces para Reutilización

```typescript
// ✅ Bueno
interface Respuesta<T> {
    exito: boolean;
    datos: T;
    mensaje?: string;
}

// ❌ Malo
interface RespuestaUsuario {
    exito: boolean;
    datos: Usuario;
    mensaje?: string;
}

interface RespuestaProducto {
    exito: boolean;
    datos: Producto;
    mensaje?: string;
}
```

## Errores Comunes

### 1. No Usar Interfaces para Object Types

```typescript
// ❌ Malo
type Usuario = {
    id: number;
    nombre: string;
    email: string;
};

// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}
```

### 2. Usar `any` en lugar de Tipos Específicos

```typescript
// ❌ Malo
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    datos: any; // Demasiado permisivo
}

// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    datos: {
        telefono?: string;
        direccion?: string;
    };
}
```

### 3. No Usar Propiedades Opcionales

```typescript
// ❌ Malo
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string; // Requerido cuando no siempre está disponible
}

// ✅ Bueno
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Opcional cuando no siempre está disponible
}
```

### 4. No Usar Readonly para Propiedades Inmutables

```typescript
// ❌ Malo
interface Usuario {
    id: number; // ID debería ser readonly
    nombre: string;
    email: string;
}

// ✅ Bueno
interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
}
```

## Conclusión

Los Object Types son una característica fundamental de TypeScript que permite:

- Definir la estructura de objetos de manera precisa
- Proporcionar seguridad de tipos en tiempo de desarrollo
- Facilitar el mantenimiento y la refactorización del código
- Mejorar la documentación del código
- Prevenir errores comunes relacionados con propiedades

La clave está en entender cuándo usar interfaces vs type aliases, cómo definir propiedades opcionales y readonly, y cómo crear tipos reutilizables con generics. Los Object Types son la base para crear aplicaciones TypeScript robustas y mantenibles.

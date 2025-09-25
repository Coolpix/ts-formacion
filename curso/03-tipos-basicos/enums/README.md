# Enums en TypeScript

## Introducción

Los Enums (enumeraciones) en TypeScript son una forma de definir un conjunto de constantes con nombres. Proporcionan una manera de crear tipos que representan un conjunto de valores predefinidos, lo que hace el código más legible y mantenible.

## Tipos de Enums

### 1. Numeric Enums (Enums Numéricos)

Los enums numéricos son el tipo más común. TypeScript asigna automáticamente valores numéricos empezando desde 0.

```typescript
enum Direccion {
    Norte,    // 0
    Sur,      // 1
    Este,     // 2
    Oeste     // 3
}

let direccion: Direccion = Direccion.Norte;
console.log(direccion); // 0
```

#### Valores personalizados
```typescript
enum EstadoPedido {
    Pendiente = 1,
    Procesando = 2,
    Enviado = 3,
    Entregado = 4
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
console.log(estado); // 1
```

#### Valores mixtos
```typescript
enum Estado {
    Inactivo = 0,
    Activo = 1,
    Pausado = "PAUSADO",
    Error = "ERROR"
}
```

### 2. String Enums (Enums de Cadena)

Los enums de cadena son más legibles y autodocumentados.

```typescript
enum TipoUsuario {
    Admin = "ADMIN",
    Usuario = "USUARIO",
    Invitado = "INVITADO"
}

let tipo: TipoUsuario = TipoUsuario.Admin;
console.log(tipo); // "ADMIN"
```

### 3. Heterogeneous Enums (Enums Heterogéneos)

Mezclan valores numéricos y de cadena.

```typescript
enum Respuesta {
    No = 0,
    Si = 1,
    TalVez = "TAL_VEZ"
}
```

## Características de los Enums

### 1. Reverse Mapping (Mapeo Inverso)

Los enums numéricos crean un mapeo bidireccional:

```typescript
enum Color {
    Rojo = 1,
    Verde = 2,
    Azul = 3
}

console.log(Color.Rojo);    // 1
console.log(Color[1]);      // "Rojo"
console.log(Color[2]);      // "Verde"
```

### 2. Computed Values (Valores Computados)

```typescript
enum FileAccess {
    None = 0,
    Read = 1 << 1,    // 2
    Write = 1 << 2,   // 4
    ReadWrite = Read | Write  // 6
}
```

### 3. Const Enums

Los const enums se eliminan completamente en tiempo de compilación:

```typescript
const enum Direccion {
    Norte,
    Sur,
    Este,
    Oeste
}

let dir: Direccion = Direccion.Norte;
// Se compila a: let dir = 0;
```

## Uso de Enums

### 1. En funciones
```typescript
enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

function procesarTarea(prioridad: Prioridad): string {
    switch (prioridad) {
        case Prioridad.Baja:
            return "Procesar en segundo plano";
        case Prioridad.Media:
            return "Procesar en cola normal";
        case Prioridad.Alta:
            return "Procesar con prioridad";
        case Prioridad.Critica:
            return "Procesar inmediatamente";
        default:
            return "Prioridad desconocida";
    }
}
```

### 2. En interfaces
```typescript
enum EstadoUsuario {
    Activo = "ACTIVO",
    Inactivo = "INACTIVO",
    Suspendido = "SUSPENDIDO"
}

interface Usuario {
    id: number;
    nombre: string;
    estado: EstadoUsuario;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    estado: EstadoUsuario.Activo
};
```

### 3. En clases
```typescript
enum TipoVehiculo {
    Coche = "COCHE",
    Moto = "MOTO",
    Camion = "CAMION"
}

class Vehiculo {
    constructor(
        public marca: string,
        public tipo: TipoVehiculo
    ) {}
    
    obtenerInfo(): string {
        return `${this.marca} - ${this.tipo}`;
    }
}
```

## Enums vs Union Types

### Enums
```typescript
enum Color {
    Rojo = "ROJO",
    Verde = "VERDE",
    Azul = "AZUL"
}

let color: Color = Color.Rojo;
```

### Union Types
```typescript
type Color = "ROJO" | "VERDE" | "AZUL";

let color: Color = "ROJO";
```

### Comparación

| Aspecto | Enums | Union Types |
|---------|-------|-------------|
| Valores | Pueden ser numéricos o strings | Solo strings o números literales |
| Mapeo inverso | Sí (enums numéricos) | No |
| Namespace | Crean un namespace | No |
| Extensibilidad | Limitada | Fácil |
| Tamaño | Generan código JavaScript | No generan código |

## Enums con Flags (Banderas)

Los enums son útiles para crear flags o banderas:

```typescript
enum Permisos {
    Ninguno = 0,
    Lectura = 1,
    Escritura = 2,
    Ejecucion = 4,
    Administrador = 8
}

// Combinar permisos
let permisosUsuario = Permisos.Lectura | Permisos.Escritura;

// Verificar permisos
function tienePermiso(permisos: Permisos, permiso: Permisos): boolean {
    return (permisos & permiso) === permiso;
}

console.log(tienePermiso(permisosUsuario, Permisos.Lectura)); // true
console.log(tienePermiso(permisosUsuario, Permisos.Ejecucion)); // false
```

## Enums en APIs

### 1. Respuestas de API
```typescript
enum CodigoRespuesta {
    Exito = 200,
    NoEncontrado = 404,
    ErrorServidor = 500,
    NoAutorizado = 401
}

interface RespuestaAPI {
    codigo: CodigoRespuesta;
    mensaje: string;
    datos?: any;
}
```

### 2. Estados de carga
```typescript
enum EstadoCarga {
    Inicial = "INICIAL",
    Cargando = "CARGANDO",
    Exitoso = "EXITOSO",
    Error = "ERROR"
}

class ComponenteCarga {
    private estado: EstadoCarga = EstadoCarga.Inicial;
    
    cargar(): void {
        this.estado = EstadoCarga.Cargando;
        // Lógica de carga
    }
}
```

## Buenas Prácticas

### 1. Usa String Enums para APIs
```typescript
// ✅ Bueno - más legible en APIs
enum TipoEvento {
    Click = "CLICK",
    Hover = "HOVER",
    Focus = "FOCUS"
}
```

### 2. Usa Numeric Enums para flags
```typescript
// ✅ Bueno - para operaciones bitwise
enum Flags {
    Flag1 = 1,
    Flag2 = 2,
    Flag3 = 4
}
```

### 3. Nombres descriptivos
```typescript
// ✅ Bueno
enum EstadoPedido {
    Pendiente = "PENDIENTE",
    Procesando = "PROCESANDO",
    Completado = "COMPLETADO"
}

// ❌ Malo
enum Estado {
    A = "A",
    B = "B",
    C = "C"
}
```

### 4. Documenta enums complejos
```typescript
/**
 * Estados posibles de una tarea
 * @enum {string}
 */
enum EstadoTarea {
    /** Tarea recién creada, esperando procesamiento */
    Pendiente = "PENDIENTE",
    /** Tarea siendo procesada actualmente */
    EnProceso = "EN_PROCESO",
    /** Tarea completada exitosamente */
    Completada = "COMPLETADA",
    /** Tarea falló durante el procesamiento */
    Fallida = "FALLIDA"
}
```

## Ejemplos Prácticos

### 1. Sistema de notificaciones
```typescript
enum TipoNotificacion {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Success = "SUCCESS"
}

enum PrioridadNotificacion {
    Baja = 1,
    Media = 2,
    Alta = 3
}

interface Notificacion {
    id: string;
    tipo: TipoNotificacion;
    prioridad: PrioridadNotificacion;
    mensaje: string;
    timestamp: Date;
}
```

### 2. Sistema de autenticación
```typescript
enum RolUsuario {
    Admin = "ADMIN",
    Moderador = "MODERADOR",
    Usuario = "USUARIO",
    Invitado = "INVITADO"
}

enum EstadoSesion {
    Activa = "ACTIVA",
    Expirada = "EXPIRADA",
    Cerrada = "CERRADA"
}

class Usuario {
    constructor(
        public id: string,
        public nombre: string,
        public rol: RolUsuario,
        public estadoSesion: EstadoSesion
    ) {}
}
```

### 3. Sistema de archivos
```typescript
enum TipoArchivo {
    Documento = "DOCUMENTO",
    Imagen = "IMAGEN",
    Video = "VIDEO",
    Audio = "AUDIO",
    Archivo = "ARCHIVO"
}

enum PermisosArchivo {
    Ninguno = 0,
    Lectura = 1,
    Escritura = 2,
    Ejecucion = 4
}

interface Archivo {
    nombre: string;
    tipo: TipoArchivo;
    permisos: PermisosArchivo;
    tamaño: number;
}
```

## Migración de Enums

### De JavaScript a TypeScript
```javascript
// JavaScript
const ESTADOS = {
    PENDIENTE: 'PENDIENTE',
    PROCESANDO: 'PROCESANDO',
    COMPLETADO: 'COMPLETADO'
};
```

```typescript
// TypeScript
enum Estados {
    Pendiente = "PENDIENTE",
    Procesando = "PROCESANDO",
    Completado = "COMPLETADO"
}
```

## Conclusión

Los Enums en TypeScript proporcionan una forma robusta y type-safe de definir conjuntos de constantes. Son especialmente útiles para:

- Estados de aplicación
- Códigos de respuesta
- Permisos y roles
- Configuraciones
- Flags y banderas

Elige entre enums numéricos, string enums o union types según tus necesidades específicas, pero siempre prioriza la legibilidad y mantenibilidad del código.

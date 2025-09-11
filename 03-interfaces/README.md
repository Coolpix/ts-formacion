# Tema 3: Interfaces y Tipos Personalizados

## Introducción

Las interfaces son una de las características más poderosas y fundamentales de TypeScript. Actúan como contratos que definen la estructura y comportamiento que deben cumplir los objetos, clases y funciones. Son esenciales para:

- **Definir la forma de objetos** de manera reutilizable
- **Crear contratos** que deben cumplir las clases
- **Hacer el código más mantenible** y expresivo
- **Facilitar la colaboración** en equipos de desarrollo
- **Proporcionar documentación automática** del código
- **Habilitar el polimorfismo** y la reutilización de código

En este tema aprenderemos a crear y usar interfaces efectivamente, explorando desde conceptos básicos hasta patrones avanzados de diseño.

## ¿Qué son las Interfaces?

Una interfaz define la forma que debe tener un objeto. Es como un contrato que especifica qué propiedades y métodos debe tener un objeto, pero no implementa la funcionalidad.

```typescript
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

// Cualquier objeto que implemente esta interfaz debe tener estas propiedades
let usuario: Usuario = {
    nombre: "Juan",
    edad: 30,
    email: "juan@email.com"
};
```

## Propiedades de Interfaces

### Propiedades Obligatorias

```typescript
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
}
```

### Propiedades Opcionales

```typescript
interface Usuario {
    nombre: string;
    edad: number;
    email?: string;        // Opcional
    telefono?: string;     // Opcional
}

let usuario1: Usuario = {
    nombre: "Juan",
    edad: 30
    // email y telefono son opcionales
};

let usuario2: Usuario = {
    nombre: "María",
    edad: 25,
    email: "maria@email.com"
    // telefono sigue siendo opcional
};
```

### Propiedades de Solo Lectura

```typescript
interface Configuracion {
    readonly id: number;
    readonly nombre: string;
    activo: boolean;
}

let config: Configuracion = {
    id: 1,
    nombre: "Mi Configuración",
    activo: true
};

// config.id = 2;        // ❌ Error: Cannot assign to 'id' because it is a read-only property
// config.nombre = "Otro"; // ❌ Error: Cannot assign to 'nombre' because it is a read-only property
config.activo = false;     // ✅ Correcto
```

### Propiedades de Índice

```typescript
interface Diccionario {
    [key: string]: string;
}

let diccionario: Diccionario = {
    "hola": "hello",
    "adios": "goodbye",
    "gracias": "thank you"
};

// También se puede usar con números
interface ArrayNumerico {
    [index: number]: number;
}

let arrayNumerico: ArrayNumerico = [1, 2, 3, 4, 5];
```

## Métodos en Interfaces

### Definición de Métodos

```typescript
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

// Implementación de la interfaz
let calculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : 0
};
```

### Métodos Opcionales

```typescript
interface Reproductor {
    reproducir(): void;
    pausar(): void;
    detener(): void;
    siguiente?(): void;    // Opcional
    anterior?(): void;     // Opcional
}
```

## Herencia de Interfaces

### Extensión de Interfaces

```typescript
interface Animal {
    nombre: string;
    edad: number;
}

interface Mascota extends Animal {
    dueno: string;
    vacunado: boolean;
}

interface Perro extends Mascota {
    raza: string;
    ladrar(): void;
}

let miPerro: Perro = {
    nombre: "Max",
    edad: 3,
    dueno: "Juan",
    vacunado: true,
    raza: "Labrador",
    ladrar: () => console.log("¡Guau!")
};
```

### Múltiple Herencia

```typescript
interface Volador {
    volar(): void;
    altura: number;
}

interface Nadador {
    nadar(): void;
    profundidad: number;
}

interface Pato extends Animal, Volador, Nadador {
    graznar(): void;
}

let pato: Pato = {
    nombre: "Donald",
    edad: 2,
    altura: 10,
    profundidad: 5,
    volar: () => console.log("Volando..."),
    nadar: () => console.log("Nadando..."),
    graznar: () => console.log("¡Cuac!")
};
```

## Interfaces vs Type Aliases

### Interfaces

```typescript
interface Usuario {
    nombre: string;
    edad: number;
}

// Se pueden extender
interface UsuarioAdmin extends Usuario {
    permisos: string[];
}

// Se pueden declarar múltiples veces (se fusionan)
interface Usuario {
    email?: string;
}
```

### Type Aliases

```typescript
type Usuario = {
    nombre: string;
    edad: number;
};

// Se pueden usar con union types
type ID = string | number;

// Se pueden usar con intersection types
type UsuarioAdmin = Usuario & {
    permisos: string[];
};
```

### Cuándo Usar Cada Uno

**Usa Interfaces cuando:**
- Defines la forma de un objeto
- Necesitas herencia
- Quieres que se puedan fusionar declaraciones

**Usa Type Aliases cuando:**
- Defines union types
- Defines intersection types
- Defines tipos primitivos
- Necesitas tipos más complejos

## Interfaces con Genéricos

```typescript
interface Contenedor<T> {
    contenido: T;
    obtener(): T;
    establecer(valor: T): void;
}

let contenedorString: Contenedor<string> = {
    contenido: "Hola",
    obtener: function() { return this.contenido; },
    establecer: function(valor) { this.contenido = valor; }
};

let contenedorNumber: Contenedor<number> = {
    contenido: 42,
    obtener: function() { return this.contenido; },
    establecer: function(valor) { this.contenido = valor; }
};
```

## Interfaces de Función

```typescript
// Definir la forma de una función
interface Comparador {
    (a: number, b: number): number;
}

let comparar: Comparador = (a, b) => a - b;

// También se puede usar con type alias
type Procesador = (valor: string) => string;

let procesar: Procesador = (valor) => valor.toUpperCase();
```

## Interfaces con Call Signatures

```typescript
interface Calculadora {
    (a: number, b: number): number;
    version: string;
    operaciones: string[];
}

function crearCalculadora(): Calculadora {
    let calculadora = function(a: number, b: number): number {
        return a + b;
    } as Calculadora;
    
    calculadora.version = "1.0";
    calculadora.operaciones = ["sumar", "restar", "multiplicar", "dividir"];
    
    return calculadora;
}
```

## Interfaces Híbridas

```typescript
interface Contador {
    // Propiedades
    valor: number;
    incremento: number;
    
    // Métodos
    incrementar(): void;
    decrementar(): void;
    obtenerValor(): number;
    
    // Call signature
    (): number;
}

function crearContador(inicial: number = 0, incremento: number = 1): Contador {
    let contador = function(): number {
        return contador.valor;
    } as Contador;
    
    contador.valor = inicial;
    contador.incremento = incremento;
    
    contador.incrementar = function() {
        this.valor += this.incremento;
    };
    
    contador.decrementar = function() {
        this.valor -= this.incremento;
    };
    
    contador.obtenerValor = function() {
        return this.valor;
    };
    
    return contador;
}
```

## Interfaces con Módulos

```typescript
// Definir interfaces que pueden ser implementadas por módulos externos
interface ServicioEmail {
    enviar(destinatario: string, asunto: string, mensaje: string): Promise<boolean>;
    validarEmail(email: string): boolean;
}

// Implementación por un módulo
class ServicioEmailGmail implements ServicioEmail {
    enviar(destinatario: string, asunto: string, mensaje: string): Promise<boolean> {
        // Implementación específica de Gmail
        return Promise.resolve(true);
    }
    
    validarEmail(email: string): boolean {
        return email.includes("@gmail.com");
    }
}
```

## Patrones de Diseño con Interfaces

### 1. Strategy Pattern
```typescript
interface EstrategiaPago {
    procesarPago(monto: number): boolean;
}

class PagoTarjeta implements EstrategiaPago {
    procesarPago(monto: number): boolean {
        console.log(`Procesando pago de $${monto} con tarjeta`);
        return true;
    }
}

class PagoPayPal implements EstrategiaPago {
    procesarPago(monto: number): boolean {
        console.log(`Procesando pago de $${monto} con PayPal`);
        return true;
    }
}

class ProcesadorPagos {
    constructor(private estrategia: EstrategiaPago) {}
    
    cambiarEstrategia(estrategia: EstrategiaPago): void {
        this.estrategia = estrategia;
    }
    
    procesar(monto: number): boolean {
        return this.estrategia.procesarPago(monto);
    }
}
```

### 2. Observer Pattern
```typescript
interface Observador {
    actualizar(datos: any): void;
}

interface Sujeto {
    agregarObservador(observador: Observador): void;
    removerObservador(observador: Observador): void;
    notificar(): void;
}

class NotificadorEmail implements Sujeto {
    private observadores: Observador[] = [];
    private mensaje: string = "";
    
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }
    
    removerObservador(observador: Observador): void {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }
    
    notificar(): void {
        this.observadores.forEach(obs => obs.actualizar(this.mensaje));
    }
    
    enviarMensaje(mensaje: string): void {
        this.mensaje = mensaje;
        this.notificar();
    }
}
```

### 3. Factory Pattern
```typescript
interface Vehiculo {
    acelerar(): void;
    frenar(): void;
}

interface FabricaVehiculos {
    crearVehiculo(tipo: string): Vehiculo;
}

class Coche implements Vehiculo {
    acelerar(): void {
        console.log("Coche acelerando...");
    }
    
    frenar(): void {
        console.log("Coche frenando...");
    }
}

class Moto implements Vehiculo {
    acelerar(): void {
        console.log("Moto acelerando...");
    }
    
    frenar(): void {
        console.log("Moto frenando...");
    }
}

class FabricaVehiculosImpl implements FabricaVehiculos {
    crearVehiculo(tipo: string): Vehiculo {
        switch (tipo.toLowerCase()) {
            case "coche":
                return new Coche();
            case "moto":
                return new Moto();
            default:
                throw new Error(`Tipo de vehículo no soportado: ${tipo}`);
        }
    }
}
```

## Interfaces Avanzadas

### 1. Conditional Types en Interfaces
```typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

interface ErrorResponse {
    error: string;
    code: number;
}

type ApiResult<T> = T extends string 
    ? ApiResponse<T> 
    : ErrorResponse;

function procesarRespuesta<T>(resultado: ApiResult<T>): void {
    if ('data' in resultado) {
        console.log("Éxito:", resultado.data);
    } else {
        console.log("Error:", resultado.error);
    }
}
```

### 2. Mapped Types con Interfaces
```typescript
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// Hacer todas las propiedades opcionales
type UsuarioParcial = {
    [K in keyof Usuario]?: Usuario[K];
};

// Hacer todas las propiedades de solo lectura
type UsuarioSoloLectura = {
    readonly [K in keyof Usuario]: Usuario[K];
};

// Crear un tipo con solo ciertas propiedades
type UsuarioBasico = Pick<Usuario, 'id' | 'nombre'>;

// Crear un tipo sin ciertas propiedades
type UsuarioSinId = Omit<Usuario, 'id'>;
```

### 3. Template Literal Types
```typescript
interface Eventos {
    'usuario:creado': { id: number; nombre: string };
    'usuario:actualizado': { id: number; cambios: Partial<Usuario> };
    'usuario:eliminado': { id: number };
}

type EventHandler<T extends keyof Eventos> = (datos: Eventos[T]) => void;

class EventEmitter {
    private eventos: Map<string, Function[]> = new Map();
    
    on<T extends keyof Eventos>(evento: T, handler: EventHandler<T>): void {
        if (!this.eventos.has(evento)) {
            this.eventos.set(evento, []);
        }
        this.eventos.get(evento)!.push(handler);
    }
    
    emit<T extends keyof Eventos>(evento: T, datos: Eventos[T]): void {
        const handlers = this.eventos.get(evento);
        if (handlers) {
            handlers.forEach(handler => handler(datos));
        }
    }
}
```

## Mejores Prácticas

### 1. Nomenclatura y Organización
```typescript
// ✅ Bueno: Nombres descriptivos y consistentes
interface UsuarioAutenticado {
    id: string;
    email: string;
    permisos: string[];
}

interface ServicioAutenticacion {
    autenticar(credenciales: Credenciales): Promise<UsuarioAutenticado>;
    cerrarSesion(usuarioId: string): Promise<void>;
}

// ❌ Malo: Nombres vagos o inconsistentes
interface User {
    id: string;
    email: string;
}

interface AuthService {
    login(creds: any): Promise<any>;
}
```

### 2. Composición vs Herencia
```typescript
// ✅ Bueno: Composición con interfaces pequeñas
interface Timestamp {
    createdAt: Date;
    updatedAt: Date;
}

interface Identificable {
    id: string;
}

interface Usuario extends Identificable, Timestamp {
    nombre: string;
    email: string;
}

// ❌ Malo: Interfaces muy grandes
interface UsuarioCompleto {
    id: string;
    nombre: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    // ... muchas más propiedades
}
```

### 3. Uso de Propiedades Opcionales
```typescript
// ✅ Bueno: Propiedades opcionales bien definidas
interface ConfiguracionServidor {
    host: string;
    puerto: number;
    ssl?: boolean;
    timeout?: number;
    retries?: number;
}

// ❌ Malo: Demasiadas propiedades opcionales
interface ConfiguracionMala {
    host?: string;
    puerto?: number;
    ssl?: boolean;
    timeout?: number;
    retries?: number;
    // ... todas opcionales
}
```

### 4. Documentación con JSDoc
```typescript
/**
 * Representa un usuario del sistema
 * @interface Usuario
 */
interface Usuario {
    /** Identificador único del usuario */
    id: string;
    
    /** Nombre completo del usuario */
    nombre: string;
    
    /** Dirección de correo electrónico */
    email: string;
    
    /** 
     * Lista de permisos del usuario
     * @default []
     */
    permisos?: string[];
    
    /**
     * Fecha de creación del usuario
     * @readonly
     */
    readonly fechaCreacion: Date;
}
```

## Casos de Uso Comunes

### 1. APIs y Servicios
```typescript
interface ApiCliente {
    get<T>(url: string): Promise<T>;
    post<T>(url: string, datos: any): Promise<T>;
    put<T>(url: string, datos: any): Promise<T>;
    delete<T>(url: string): Promise<T>;
}

interface Repositorio<T> {
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}
```

### 2. Componentes de UI
```typescript
interface PropsBoton {
    texto: string;
    onClick: () => void;
    disabled?: boolean;
    variante?: 'primario' | 'secundario' | 'peligro';
    tamaño?: 'pequeño' | 'mediano' | 'grande';
}

interface PropsFormulario<T> {
    datos: T;
    onSubmit: (datos: T) => void;
    validacion?: (datos: T) => string[];
    campos: CampoFormulario[];
}
```

### 3. Eventos y Callbacks
```typescript
interface EventosAplicacion {
    'usuario:login': { usuario: Usuario; timestamp: Date };
    'usuario:logout': { usuarioId: string; timestamp: Date };
    'archivo:subido': { archivo: Archivo; ruta: string };
    'error:ocurrido': { error: Error; contexto: string };
}

type ManejadorEvento<T extends keyof EventosAplicacion> = 
    (datos: EventosAplicacion[T]) => void;
```

## Errores Comunes y Cómo Evitarlos

### 1. Interfaces Demasiado Grandes
```typescript
// ❌ Malo: Interface con demasiadas responsabilidades
interface UsuarioCompleto {
    // Datos personales
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    
    // Configuración
    tema: string;
    idioma: string;
    notificaciones: boolean;
    
    // Permisos
    roles: string[];
    permisos: string[];
    
    // Métodos
    actualizarPerfil(): void;
    cambiarPassword(): void;
    // ... muchos más métodos
}

// ✅ Bueno: Interfaces separadas por responsabilidad
interface DatosPersonales {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

interface ConfiguracionUsuario {
    tema: string;
    idioma: string;
    notificaciones: boolean;
}

interface PermisosUsuario {
    roles: string[];
    permisos: string[];
}

interface Usuario extends DatosPersonales, ConfiguracionUsuario, PermisosUsuario {
    id: string;
}
```

### 2. Uso Incorrecto de `any`
```typescript
// ❌ Malo: Usar any en interfaces
interface ApiResponse {
    data: any;
    error: any;
}

// ✅ Bueno: Tipos específicos
interface ApiResponse<T> {
    data: T;
    error: string | null;
}
```

### 3. No Usar Propiedades de Solo Lectura
```typescript
// ❌ Malo: Propiedades que pueden cambiar cuando no deberían
interface Usuario {
    id: string;
    nombre: string;
    fechaCreacion: Date;
}

// ✅ Bueno: Propiedades inmutables marcadas como readonly
interface Usuario {
    readonly id: string;
    nombre: string;
    readonly fechaCreacion: Date;
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre funciones y parámetros tipados, incluyendo:

- Definición de funciones con tipos
- Parámetros opcionales y valores por defecto
- Parámetros rest y sobrecarga de funciones
- Funciones como valores y callbacks
- Patrones avanzados de funciones

---

**Tiempo estimado de estudio**: 75-90 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con interfaces
**Dificultad**: Intermedia-Avanzada

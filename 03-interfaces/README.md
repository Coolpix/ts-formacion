# Tema 3: Interfaces y Tipos Personalizados

## Introducción

Las interfaces son una de las características más poderosas de TypeScript. Permiten definir la estructura de objetos, crear contratos que deben cumplir las clases, y hacer que nuestro código sea más mantenible y reutilizable. En este tema aprenderemos a crear y usar interfaces efectivamente.

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

## Mejores Prácticas

1. **Usa nombres descriptivos** para las interfaces
2. **Agrupa propiedades relacionadas** en interfaces separadas
3. **Usa propiedades opcionales** cuando sea apropiado
4. **Aprovecha la herencia** para evitar duplicación
5. **Usa readonly** para propiedades que no deben cambiar
6. **Combina interfaces y type aliases** según la necesidad
7. **Documenta interfaces complejas** con comentarios

## Próximos Pasos

En el siguiente tema aprenderemos sobre funciones y parámetros tipados, incluyendo sobrecarga de funciones y parámetros opcionales.

---

**Tiempo estimado de estudio**: 60-75 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con interfaces

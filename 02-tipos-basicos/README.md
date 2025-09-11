# Tema 2: Tipos Básicos y Anotaciones de Tipo

## Introducción

TypeScript proporciona un sistema de tipos rico que nos permite describir la forma de los datos en nuestro código. En este tema aprenderemos sobre los tipos básicos y cómo usarlos para hacer nuestro código más seguro y expresivo.

## Tipos Primitivos

### Tipos Básicos de JavaScript

TypeScript incluye todos los tipos primitivos de JavaScript:

```typescript
// Boolean
let esActivo: boolean = true;
let estaCompletado: boolean = false;

// Number
let edad: number = 25;
let precio: number = 99.99;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// String
let nombre: string = "Juan";
let apellido: string = 'García';
let mensaje: string = `Hola, ${nombre}!`;

// Null y Undefined
let nulo: null = null;
let indefinido: undefined = undefined;
```

### Tipos Específicos de TypeScript

```typescript
// Any - Evita la verificación de tipos (usar con precaución)
let variableCualquiera: any = 42;
variableCualquiera = "ahora es string";
variableCualquiera = true;

// Void - Para funciones que no devuelven nada
function mostrarMensaje(): void {
    console.log("Hola mundo");
}

// Never - Para funciones que nunca terminan o siempre lanzan errores
function errorInfinito(): never {
    throw new Error("Error fatal");
}

function bucleInfinito(): never {
    while (true) {
        // Código que nunca termina
    }
}
```

## Arrays

### Sintaxis de Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings (sintaxis alternativa)
let nombres: Array<string> = ["Ana", "Carlos", "Elena"];

// Array mixto (usando union types)
let mixto: (string | number)[] = ["texto", 42, "otro texto", 100];

// Array vacío
let vacio: number[] = [];
```

### Métodos de Array con Tipos

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];

// map devuelve un array del tipo especificado
let duplicados: number[] = numeros.map(n => n * 2);

// filter mantiene el tipo original
let pares: number[] = numeros.filter(n => n % 2 === 0);

// reduce con tipo de retorno específico
let suma: number = numeros.reduce((acc, n) => acc + n, 0);
```

## Tuplas (Tuples)

Las tuplas permiten expresar un array con un número fijo de elementos donde cada elemento tiene un tipo específico:

```typescript
// Tupla básica
let coordenada: [number, number] = [10, 20];

// Tupla con diferentes tipos
let persona: [string, number, boolean] = ["Juan", 30, true];

// Tupla con elementos opcionales
let configuracion: [string, number?] = ["localhost"];
let configuracionCompleta: [string, number?] = ["localhost", 3000];

// Tupla con elementos rest
let numeros: [number, ...number[]] = [1, 2, 3, 4, 5];
```

## Enums

Los enums permiten definir un conjunto de constantes con nombre:

```typescript
// Enum numérico (por defecto)
enum Direccion {
    Arriba,    // 0
    Abajo,     // 1
    Izquierda, // 2
    Derecha    // 3
}

// Enum con valores específicos
enum EstadoPedido {
    Pendiente = "pendiente",
    Procesando = "procesando",
    Enviado = "enviado",
    Entregado = "entregado"
}

// Enum con valores numéricos específicos
enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

// Uso de enums
let direccion: Direccion = Direccion.Arriba;
let estado: EstadoPedido = EstadoPedido.Pendiente;
```

## Union Types

Los union types permiten que una variable pueda ser de varios tipos:

```typescript
// Union de tipos básicos
let id: string | number = "abc123";
id = 456; // También válido

// Union con null y undefined
let nombre: string | null = null;
let edad: number | undefined = undefined;

// Union con arrays
let datos: string[] | number[] = ["a", "b", "c"];
datos = [1, 2, 3]; // También válido

// Union con funciones
let procesador: ((x: number) => number) | ((x: string) => string);
```

## Type Guards

Los type guards nos ayudan a verificar el tipo en tiempo de ejecución:

```typescript
function esString(valor: string | number): valor is string {
    return typeof valor === "string";
}

function procesarValor(valor: string | number): string {
    if (esString(valor)) {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else {
        // TypeScript sabe que valor es number aquí
        return valor.toString();
    }
}

// Type guard con typeof
function mostrarTipo(valor: string | number | boolean): void {
    if (typeof valor === "string") {
        console.log("Es string:", valor);
    } else if (typeof valor === "number") {
        console.log("Es number:", valor);
    } else {
        console.log("Es boolean:", valor);
    }
}
```

## Literal Types

Los literal types permiten especificar valores exactos:

```typescript
// String literal types
let color: "rojo" | "verde" | "azul" = "rojo";

// Number literal types
let tamaño: 1 | 2 | 3 | 4 = 2;

// Boolean literal types
let estado: true | false = true;

// Combinación con union types
function configurarColor(color: "rojo" | "verde" | "azul"): void {
    console.log(`Color configurado: ${color}`);
}
```

## Type Aliases

Los type aliases permiten crear nombres para tipos complejos:

```typescript
// Alias para tipos básicos
type ID = string | number;
type Estado = "activo" | "inactivo" | "pendiente";

// Alias para funciones
type Procesador = (valor: number) => number;
type Comparador = (a: number, b: number) => boolean;

// Alias para objetos
type Usuario = {
    id: ID;
    nombre: string;
    estado: Estado;
};

// Uso de aliases
let usuario: Usuario = {
    id: "123",
    nombre: "Juan",
    estado: "activo"
};

let procesar: Procesador = (x) => x * 2;
```

## Inferencia de Tipos

TypeScript puede inferir automáticamente los tipos en muchos casos:

```typescript
// Inferencia automática
let nombre = "Juan";        // TypeScript infiere: string
let edad = 30;              // TypeScript infiere: number
let esActivo = true;        // TypeScript infiere: boolean

// Inferencia en arrays
let numeros = [1, 2, 3];    // TypeScript infiere: number[]
let mixto = [1, "texto"];   // TypeScript infiere: (string | number)[]

// Inferencia en funciones
function sumar(a: number, b: number) {
    return a + b;           // TypeScript infiere que devuelve: number
}

// Inferencia en objetos
let persona = {
    nombre: "María",
    edad: 25,
    activa: true
}; // TypeScript infiere: { nombre: string; edad: number; activa: boolean }
```

## Mejores Prácticas

1. **Usa tipos explícitos** cuando la inferencia no sea clara
2. **Evita `any`** siempre que sea posible
3. **Usa union types** para valores que pueden ser de varios tipos
4. **Aprovecha la inferencia** para código más limpio
5. **Usa type aliases** para tipos complejos reutilizables
6. **Aplica type guards** para verificar tipos en tiempo de ejecución

## Próximos Pasos

En el siguiente tema aprenderemos sobre interfaces y tipos personalizados, que nos permitirán definir estructuras de datos más complejas y reutilizables.

---

**Tiempo estimado de estudio**: 45-60 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con tipos básicos

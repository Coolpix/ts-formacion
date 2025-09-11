# Tema 6: Genéricos (Generics)

## Introducción

Los genéricos son una de las características más poderosas de TypeScript. Permiten crear componentes reutilizables que pueden trabajar con diferentes tipos de datos mientras mantienen la seguridad de tipos. En este tema aprenderemos a usar genéricos efectivamente para crear código más flexible y reutilizable.

## ¿Qué son los Genéricos?

Los genéricos permiten crear componentes que pueden trabajar con diferentes tipos de datos sin perder la información de tipos. Es como crear una plantilla que puede ser reutilizada con diferentes tipos.

```typescript
// Sin genéricos - función específica para números
function identidadNumber(valor: number): number {
    return valor;
}

// Con genéricos - función reutilizable para cualquier tipo
function identidad<T>(valor: T): T {
    return valor;
}

// Uso
let numero = identidad<number>(42);        // number
let texto = identidad<string>("hola");     // string
let booleano = identidad<boolean>(true);   // boolean
```

## Funciones Genéricas

### Funciones Genéricas Básicas

```typescript
// Función genérica básica
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

// Función genérica con múltiples parámetros de tipo
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

// Función genérica con parámetros rest
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

// Uso
let primerNumero = obtenerPrimero<number>([1, 2, 3]);        // number | undefined
let primerTexto = obtenerPrimero<string>(["a", "b", "c"]);   // string | undefined
let combinacion = combinar<string, number>("hola", 42);      // [string, number]
let arrayNumeros = crearArray<number>(1, 2, 3, 4, 5);       // number[]
```

### Funciones Genéricas con Restricciones

```typescript
// Restricción con extends
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

// Restricción con interface
interface Longitud {
    length: number;
}

function obtenerLongitud<T extends Longitud>(item: T): number {
    return item.length;
}

// Uso
let usuario = { nombre: "Juan", edad: 30 };
let nombre = obtenerPropiedad(usuario, "nombre"); // string
let edad = obtenerPropiedad(usuario, "edad");     // number

let longitudTexto = obtenerLongitud("hola");      // 4
let longitudArray = obtenerLongitud([1, 2, 3]);   // 3
```

### Funciones Genéricas con Tipos Condicionales

```typescript
// Tipo condicional
type EsArray<T> = T extends any[] ? true : false;

function procesarValor<T>(valor: T): T extends string ? string : T extends number ? number : T {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else if (typeof valor === "number") {
        return (valor * 2) as any;
    } else {
        return valor;
    }
}

// Uso
let resultadoString = procesarValor("hola");     // string
let resultadoNumber = procesarValor(5);          // number
let resultadoBoolean = procesarValor(true);      // boolean
```

## Interfaces Genéricas

### Interfaces Genéricas Básicas

```typescript
// Interface genérica
interface Contenedor<T> {
    contenido: T;
    obtener(): T;
    establecer(valor: T): void;
}

// Implementación de interface genérica
class Caja<T> implements Contenedor<T> {
    constructor(public contenido: T) {}
    
    obtener(): T {
        return this.contenido;
    }
    
    establecer(valor: T): void {
        this.contenido = valor;
    }
}

// Uso
let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);
```

### Interfaces Genéricas con Restricciones

```typescript
// Interface con restricción
interface Comparable<T> {
    comparar(otro: T): number;
}

// Interface genérica que usa la restricción
interface ListaOrdenada<T extends Comparable<T>> {
    agregar(elemento: T): void;
    obtenerTodos(): T[];
    ordenar(): void;
}

// Implementación
class ListaOrdenadaImpl<T extends Comparable<T>> implements ListaOrdenada<T> {
    private elementos: T[] = [];
    
    agregar(elemento: T): void {
        this.elementos.push(elemento);
        this.ordenar();
    }
    
    obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    ordenar(): void {
        this.elementos.sort((a, b) => a.comparar(b));
    }
}
```

### Interfaces Genéricas con Múltiples Parámetros

```typescript
// Interface genérica con múltiples parámetros
interface Mapeo<K, V> {
    establecer(clave: K, valor: V): void;
    obtener(clave: K): V | undefined;
    eliminar(clave: K): boolean;
    existe(clave: K): boolean;
}

// Implementación
class MapeoImpl<K, V> implements Mapeo<K, V> {
    private elementos = new Map<K, V>();
    
    establecer(clave: K, valor: V): void {
        this.elementos.set(clave, valor);
    }
    
    obtener(clave: K): V | undefined {
        return this.elementos.get(clave);
    }
    
    eliminar(clave: K): boolean {
        return this.elementos.delete(clave);
    }
    
    existe(clave: K): boolean {
        return this.elementos.has(clave);
    }
}
```

## Clases Genéricas

### Clases Genéricas Básicas

```typescript
// Clase genérica
class Pila<T> {
    private elementos: T[] = [];
    
    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    desapilar(): T | undefined {
        return this.elementos.pop();
    }
    
    obtenerCima(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
    
    obtenerTamaño(): number {
        return this.elementos.length;
    }
}

// Uso
let pilaNumeros = new Pila<number>();
let pilaStrings = new Pila<string>();

pilaNumeros.apilar(1);
pilaNumeros.apilar(2);
pilaNumeros.apilar(3);

pilaStrings.apilar("a");
pilaStrings.apilar("b");
pilaStrings.apilar("c");
```

### Clases Genéricas con Restricciones

```typescript
// Interface para restricción
interface Sumable {
    sumar(otro: Sumable): Sumable;
}

// Clase genérica con restricción
class Calculadora<T extends Sumable> {
    private valor: T;
    
    constructor(valor: T) {
        this.valor = valor;
    }
    
    sumar(otro: T): T {
        return this.valor.sumar(otro) as T;
    }
    
    obtenerValor(): T {
        return this.valor;
    }
}

// Implementación de la interface
class NumeroSumable implements Sumable {
    constructor(public valor: number) {}
    
    sumar(otro: Sumable): Sumable {
        if (otro instanceof NumeroSumable) {
            return new NumeroSumable(this.valor + otro.valor);
        }
        throw new Error("Tipo incompatible");
    }
}
```

## Tipos Genéricos

### Tipos Genéricos Básicos

```typescript
// Tipo genérico básico
type Contenedor<T> = {
    contenido: T;
    obtener(): T;
};

// Tipo genérico con restricción
type ClaveValor<K extends string, V> = {
    [P in K]: V;
};

// Tipo genérico con tipos condicionales
type EsString<T> = T extends string ? true : false;

// Uso
let contenedor: Contenedor<string> = {
    contenido: "hola",
    obtener: function() { return this.contenido; }
};

let claveValor: ClaveValor<"nombre" | "edad", string | number> = {
    nombre: "Juan",
    edad: 30
};
```

### Tipos Genéricos Avanzados

```typescript
// Tipo genérico con mapeo
type Mapear<T, U> = {
    [K in keyof T]: U;
};

// Tipo genérico con filtrado
type SoloStrings<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K];
};

// Tipo genérico con transformación
type HacerOpcional<T> = {
    [K in keyof T]?: T[K];
};

// Uso
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

type UsuarioMapeado = Mapear<Usuario, string>; // { nombre: string; edad: string; email: string; }
type SoloStringsUsuario = SoloStrings<Usuario>; // { nombre: string; email: string; }
type UsuarioOpcional = HacerOpcional<Usuario>;  // { nombre?: string; edad?: number; email?: string; }
```

## Utilidades de Tipos Genéricos

### Utilidades Básicas

```typescript
// Partial - hace todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;

// Required - hace todas las propiedades requeridas
type UsuarioRequerido = Required<UsuarioParcial>;

// Readonly - hace todas las propiedades de solo lectura
type UsuarioSoloLectura = Readonly<Usuario>;

// Pick - selecciona propiedades específicas
type UsuarioBasico = Pick<Usuario, "nombre" | "email">;

// Omit - omite propiedades específicas
type UsuarioSinEdad = Omit<Usuario, "edad">;

// Record - crea un tipo con claves y valores específicos
type Colores = Record<"rojo" | "verde" | "azul", string>;
```

### Utilidades Avanzadas

```typescript
// Exclude - excluye tipos de una unión
type SoloStrings = Exclude<string | number | boolean, number | boolean>;

// Extract - extrae tipos de una unión
type SoloNumeros = Extract<string | number | boolean, number>;

// NonNullable - excluye null y undefined
type SoloValores = NonNullable<string | null | undefined>;

// Parameters - extrae tipos de parámetros de función
type ParametrosSuma = Parameters<(a: number, b: number) => number>;

// ReturnType - extrae tipo de retorno de función
type RetornoSuma = ReturnType<(a: number, b: number) => number>;

// InstanceType - extrae tipo de instancia de clase
type InstanciaArray = InstanceType<typeof Array>;
```

## Genéricos con Inferencia

### Inferencia Automática

```typescript
// TypeScript infiere automáticamente los tipos
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

// No necesitas especificar el tipo explícitamente
let numeros = crearArray(1, 2, 3, 4, 5);        // number[]
let textos = crearArray("a", "b", "c");          // string[]
let mixto = crearArray(1, "a", true);            // (string | number | boolean)[]
```

### Inferencia con Restricciones

```typescript
// Inferencia con restricciones
function obtenerLongitud<T extends { length: number }>(item: T): number {
    return item.length;
}

// TypeScript infiere el tipo pero respeta la restricción
let longitudTexto = obtenerLongitud("hola");      // number
let longitudArray = obtenerLongitud([1, 2, 3]);   // number
let longitudObjeto = obtenerLongitud({ length: 5 }); // number
```

## Genéricos con Overloads

### Sobrecarga de Funciones Genéricas

```typescript
// Sobrecarga para diferentes tipos
function procesar<T extends string>(valor: T): string;
function procesar<T extends number>(valor: T): number;
function procesar<T extends boolean>(valor: T): boolean;

// Implementación
function procesar<T>(valor: T): T {
    if (typeof valor === "string") {
        return valor.toUpperCase() as T;
    } else if (typeof valor === "number") {
        return (valor * 2) as T;
    } else {
        return valor;
    }
}

// Uso
let resultadoString = procesar("hola");     // string
let resultadoNumber = procesar(5);          // number
let resultadoBoolean = procesar(true);      // boolean
```

## Mejores Prácticas

1. **Usa nombres descriptivos** para parámetros de tipo genérico
2. **Aplica restricciones** cuando sea apropiado
3. **Aprovecha la inferencia** de tipos cuando sea posible
4. **Usa utilidades de tipos** para transformaciones comunes
5. **Documenta interfaces genéricas** complejas
6. **Evita genéricos innecesarios** en casos simples
7. **Usa tipos condicionales** para lógica compleja

## Próximos Pasos

En el siguiente tema aprenderemos sobre módulos y imports/exports, incluyendo cómo organizar código en módulos y usar diferentes sistemas de módulos.

---

**Tiempo estimado de estudio**: 75-90 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con genéricos

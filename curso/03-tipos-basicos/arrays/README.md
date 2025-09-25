# Arrays en TypeScript

## Introducción

Los arrays en TypeScript son colecciones ordenadas de elementos del mismo tipo. TypeScript proporciona verificación de tipos estática para arrays, asegurando que todos los elementos sean del tipo especificado.

## Declaración de Arrays

### Sintaxis básica

```typescript
// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings
let nombres: string[] = ["Ana", "Luis", "María"];

// Array de booleanos
let activos: boolean[] = [true, false, true];
```

### Sintaxis alternativa con Array<T>

```typescript
// Equivalente a la sintaxis anterior
let numeros: Array<number> = [1, 2, 3, 4, 5];
let nombres: Array<string> = ["Ana", "Luis", "María"];
let activos: Array<boolean> = [true, false, true];
```

## Arrays Multidimensionales

```typescript
// Array bidimensional
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array tridimensional
let cubo: number[][][] = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
```

## Arrays de Objetos

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

let personas: Persona[] = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];
```

## Arrays con Union Types

```typescript
// Array que puede contener strings o números
let mixto: (string | number)[] = ["texto", 123, "otro texto", 456];

// Array que puede contener diferentes tipos de objetos
let elementos: (string | number | boolean)[] = ["hola", 42, true, "mundo"];
```

## Arrays Readonly

```typescript
// Array de solo lectura
let colores: readonly string[] = ["rojo", "verde", "azul"];
// colores.push("amarillo"); // Error: no se puede modificar

// Sintaxis alternativa
let colores2: ReadonlyArray<string> = ["rojo", "verde", "azul"];
```

## Tuples (Tuplas)

Las tuplas son arrays con un número fijo de elementos y tipos específicos para cada posición:

```typescript
// Tupla básica
let coordenada: [number, number] = [10, 20];

// Tupla con diferentes tipos
let persona: [string, number, boolean] = ["Juan", 25, true];

// Tupla con elementos opcionales
let configuracion: [string, number?] = ["servidor"];
let configuracion2: [string, number?] = ["servidor", 8080];

// Tupla con elementos rest
let numeros: [string, ...number[]] = ["suma", 1, 2, 3, 4, 5];
```

## Métodos de Array

### Métodos básicos

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];

// push - añadir al final
numeros.push(6);

// pop - eliminar del final
let ultimo = numeros.pop();

// shift - eliminar del inicio
let primero = numeros.shift();

// unshift - añadir al inicio
numeros.unshift(0);

// length - longitud del array
let longitud = numeros.length;
```

### Métodos de transformación

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];

// map - transformar elementos
let cuadrados: number[] = numeros.map(n => n * n);

// filter - filtrar elementos
let pares: number[] = numeros.filter(n => n % 2 === 0);

// reduce - reducir a un valor
let suma: number = numeros.reduce((acc, n) => acc + n, 0);
```

### Métodos de búsqueda

```typescript
let nombres: string[] = ["Ana", "Luis", "María", "Pedro"];

// find - encontrar primer elemento
let encontrado = nombres.find(nombre => nombre.startsWith("M"));

// findIndex - encontrar índice
let indice = nombres.findIndex(nombre => nombre === "María");

// includes - verificar si contiene
let contiene = nombres.includes("Ana");
```

## Destructuring de Arrays

```typescript
let colores: string[] = ["rojo", "verde", "azul"];

// Destructuring básico
let [primero, segundo, tercero] = colores;

// Destructuring con valores por defecto
let [color1, color2, color3 = "amarillo"] = ["rojo", "verde"];

// Destructuring con rest
let [primero2, ...resto] = colores;
```

## Spread Operator

```typescript
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

// Combinar arrays
let combinado: number[] = [...array1, ...array2];

// Añadir elementos
let conNuevos: number[] = [...array1, 7, 8, 9];
```

## Arrays Genéricos

```typescript
// Función genérica para arrays
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

// Uso con diferentes tipos
let primerNumero = obtenerPrimero([1, 2, 3]);
let primerString = obtenerPrimero(["a", "b", "c"]);
```

## Validación de Arrays

```typescript
// Función para validar si es array
function esArray(valor: any): valor is any[] {
    return Array.isArray(valor);
}

// Función para validar array de números
function esArrayDeNumeros(valor: any): valor is number[] {
    return Array.isArray(valor) && valor.every(item => typeof item === 'number');
}
```

## Buenas Prácticas

1. **Usa tipos específicos**: `string[]` en lugar de `any[]`
2. **Considera readonly**: Para arrays que no deben modificarse
3. **Usa tuplas**: Para estructuras de datos fijas
4. **Aprovecha los métodos**: `map`, `filter`, `reduce` son muy útiles
5. **Usa destructuring**: Para extraer valores de arrays
6. **Considera el spread operator**: Para combinar arrays

## Diferencias con JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| Verificación de tipos | No | Sí |
| Arrays mixtos | Permitidos | Requieren union types |
| Tuplas | No nativas | Sí, con verificación |
| Readonly | No | Sí, con `readonly` |

## Ejemplos Prácticos

### Gestión de inventario
```typescript
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

let inventario: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 999, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 20 }
];

// Filtrar productos con stock bajo
let stockBajo = inventario.filter(p => p.stock < 10);

// Calcular valor total del inventario
let valorTotal = inventario.reduce((total, p) => total + (p.precio * p.stock), 0);
```

### Procesamiento de datos
```typescript
let datos: number[] = [10, 20, 30, 40, 50];

// Estadísticas básicas
let promedio = datos.reduce((sum, n) => sum + n, 0) / datos.length;
let maximo = Math.max(...datos);
let minimo = Math.min(...datos);
```

Los arrays en TypeScript proporcionan una base sólida para trabajar con colecciones de datos de manera segura y eficiente.

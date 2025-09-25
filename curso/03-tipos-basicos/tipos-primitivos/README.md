# Tipos Primitivos en TypeScript

## Introducción

Los tipos primitivos son los tipos de datos más básicos en TypeScript. Son los bloques fundamentales sobre los que se construyen todos los demás tipos. TypeScript incluye los mismos tipos primitivos que JavaScript, pero con verificación de tipos estática.

## Tipos Primitivos Disponibles

### 1. `string` - Cadenas de texto

Representa datos textuales. Pueden ser cadenas de caracteres simples o plantillas de texto.

```typescript
let nombre: string = "Juan";
let apellido: string = 'Pérez';
let mensaje: string = `Hola, soy ${nombre} ${apellido}`;
```

**Características:**
- Pueden usar comillas simples, dobles o backticks
- Los backticks permiten interpolación de variables
- Son inmutables (no se pueden modificar directamente)

### 2. `number` - Números

Representa tanto números enteros como decimales. TypeScript no distingue entre diferentes tipos de números como otros lenguajes.

```typescript
let decimal: number = 6;
let precio: number = 19.99;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
let negative: number = -5;
let infinito: number = Infinity;
let noEsNumero: number = NaN;
```

**Características:**
- Incluye enteros, decimales, negativos
- Soporta `Infinity` y `NaN`
- Basado en el estándar IEEE 754

### 3. `boolean` - Valores lógicos

Representa valores de verdad: `true` o `false`.

```typescript
let esActivo: boolean = true;
let tienePermisos: boolean = false;
let esMayorDeEdad: boolean = edad >= 18;
```

**Características:**
- Solo dos valores posibles: `true` o `false`
- Se usan para control de flujo y lógica condicional
- No se pueden convertir implícitamente a números

### 4. `null` - Valor nulo

Representa la ausencia intencional de cualquier valor de objeto.

```typescript
let valorNulo: null = null;
```

**Características:**
- Indica que una variable no tiene valor
- Diferente de `undefined`
- Se usa cuando se quiere indicar explícitamente "sin valor"

### 5. `undefined` - Valor indefinido

Representa una variable que ha sido declarada pero no inicializada.

```typescript
let valorIndefinido: undefined = undefined;
let variableSinInicializar: string; // Será undefined
```

**Características:**
- Valor por defecto de variables no inicializadas
- Diferente de `null`
- Indica que algo no ha sido definido

## Tipos Especiales

### `any` - Cualquier tipo

Permite cualquier tipo de valor. **Se debe evitar su uso** ya que desactiva la verificación de tipos.

```typescript
let variableAny: any = "puede ser cualquier cosa";
variableAny = 42;
variableAny = true;
variableAny = { objeto: "cualquiera" };
```

**Cuándo usar `any`:**
- Migración gradual de JavaScript a TypeScript
- Trabajo con APIs externas sin tipos definidos
- Como último recurso cuando no se conoce el tipo

### `void` - Ausencia de valor

Se usa principalmente para funciones que no retornan un valor.

```typescript
function mostrarMensaje(): void {
    console.log("Esta función no retorna nada");
}
```

### `never` - Valores que nunca ocurren

Representa valores que nunca ocurren. Se usa para funciones que nunca terminan o que siempre lanzan errores.

```typescript
function errorFatal(): never {
    throw new Error("Error crítico");
}

function bucleInfinito(): never {
    while (true) {
        // Este bucle nunca termina
    }
}
```

## Inferencia de Tipos

TypeScript puede inferir automáticamente el tipo de una variable basándose en su valor inicial:

```typescript
// TypeScript infiere automáticamente los tipos
let ciudad = "Madrid";        // infiere: string
let poblacion = 3200000;      // infiere: number
let esCapital = true;         // infiere: boolean
```

## Conversiones de Tipo

### Conversión implícita (coerción)
```typescript
let numero: number = 5;
let texto: string = "El número es " + numero; // Conversión automática
```

### Conversión explícita (type assertion)
```typescript
let valor: any = "123";
let numero: number = (valor as string).length;
```

## Buenas Prácticas

1. **Usa tipos explícitos** cuando la inferencia no sea clara
2. **Evita `any`** siempre que sea posible
3. **Usa `null` y `undefined`** de manera consistente
4. **Aprovecha la inferencia** para código más limpio
5. **Usa `never`** para funciones que nunca retornan

## Diferencias con JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| Verificación de tipos | En tiempo de ejecución | En tiempo de compilación |
| Conversión implícita | Permite conversiones automáticas | Más estricto con las conversiones |
| `null` vs `undefined` | Tratados como "falsy" | Tipos distintos y específicos |
| Errores | Solo en ejecución | Detectados en compilación |

## Ejemplos Prácticos

### Validación de entrada
```typescript
function validarEdad(edad: number): boolean {
    return typeof edad === 'number' && edad > 0 && edad < 150;
}
```

### Formateo de texto
```typescript
function formatearNombre(nombre: string, apellido: string): string {
    return `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
}
```

### Control de estado
```typescript
let usuarioActivo: boolean = false;

function activarUsuario(): void {
    usuarioActivo = true;
    console.log("Usuario activado");
}
```

Los tipos primitivos son la base de TypeScript. Dominarlos te permitirá escribir código más seguro y mantenible.

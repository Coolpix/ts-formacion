# Curso de TypeScript para Desarrolladores JavaScript

## 📚 Descripción del Curso

Este curso está diseñado específicamente para desarrolladores JavaScript que desean aprender TypeScript de manera progresiva y práctica. El contenido está estructurado para facilitar la transición desde JavaScript hacia TypeScript, cubriendo desde conceptos básicos hasta características avanzadas.

## 🎯 Objetivos del Curso

- **Dominar los fundamentos** de TypeScript y su sistema de tipos
- **Migrar proyectos JavaScript** existentes a TypeScript de manera gradual
- **Aplicar mejores prácticas** en el desarrollo con TypeScript
- **Utilizar herramientas avanzadas** como generics, utility types y type manipulation
- **Implementar patrones de diseño** orientados a objetos con TypeScript

## 📁 Estructura del Curso

Cada tema del curso está organizado en una carpeta independiente que contiene:

- **`README.md`** - Teoría detallada del tema con explicaciones y conceptos
- **`ejemplos.ts`** - Ejemplos prácticos y casos de uso del tema
- **`ejercicios.ts`** - Ejercicios progresivos con sus soluciones completas

## 📋 Temas del Curso

### 01. Conceptos Básicos
**Carpeta:** `01-conceptos-basicos/`

**Contenido:**
- Introducción a TypeScript y sus beneficios
- Configuración del entorno de desarrollo
- Extensiones esenciales de VSCode para TypeScript
- Compilación y configuración básica
- Diferencias fundamentales entre JavaScript y TypeScript

**Archivos:**
- `README.md` - Teoría sobre conceptos básicos y configuración
- `ejemplos.ts` - Ejemplos de configuración y primeros pasos
- `ejercicios.ts` - Ejercicios de configuración y conceptos básicos

---

### 02. Migración de JS a TS
**Carpeta:** `02-migracion-js-ts/`

**Contenido:**
- Estrategias para migrar proyectos JavaScript existentes
- Migración gradual vs migración completa
- Configuración de archivos de declaración (.d.ts)
- Manejo de librerías JavaScript sin tipos
- Herramientas para facilitar la migración

**Archivos:**
- `README.md` - Guía completa de migración paso a paso
- `ejemplos.ts` - Ejemplos de código antes y después de la migración
- `ejercicios.ts` - Ejercicios prácticos de migración

---

### 03. Tipos Básicos
**Carpeta:** `03-tipos-basicos/`

**Contenido:** Este tema está dividido en subcarpetas especializadas:

#### 03.1. Tipos Primitivos
**Carpeta:** `03-tipos-basicos/tipos-primitivos/`
- `string`, `number`, `boolean`
- `null`, `undefined`, `void`
- Diferencias entre tipos primitivos y objetos

#### 03.2. Arrays
**Carpeta:** `03-tipos-basicos/arrays/`
- Tipado de arrays
- Arrays de tipos mixtos
- Tuplas y arrays de longitud fija
- Métodos de array con tipos

#### 03.3. Any
**Carpeta:** `03-tipos-basicos/any/`
- Cuándo usar `any`
- Alternativas a `any`
- Migración desde `any` hacia tipos específicos
- Buenas prácticas con `any`

#### 03.4. Enums
**Carpeta:** `03-tipos-basicos/enums/`
- Enums numéricos y de cadena
- Enums computados
- Enums const
- Cuándo usar enums vs union types

#### 03.5. Union Types
**Carpeta:** `03-tipos-basicos/union-types/`
- Tipos de unión con `|`
- Narrowing con union types
- Discriminated unions
- Casos de uso prácticos

#### 03.6. Type Aliases
**Carpeta:** `03-tipos-basicos/type-aliases/`
- Creación de alias de tipos
- Tipos complejos con aliases
- Diferencias con interfaces
- Casos de uso recomendados

#### 03.7. Interfaces
**Carpeta:** `03-tipos-basicos/interfaces/`
- Definición de interfaces
- Propiedades opcionales y de solo lectura
- Extensión de interfaces
- **Cuándo usar Types vs Interfaces** (comparación detallada)

#### 03.8. Type Assertions
**Carpeta:** `03-tipos-basicos/type-assertions/`
- Sintaxis de type assertions
- `as` vs `<Tipo>`
- Cuándo usar type assertions
- Alternativas más seguras

#### 03.9. Literal Types
**Carpeta:** `03-tipos-basicos/literal-types/`
- Tipos literales de string, number y boolean
- Union de tipos literales
- Template literal types básicos
- Casos de uso prácticos

---

### 04. Utility Types
**Carpeta:** `04-utility-types/`

**Contenido:**
- `Partial<T>`, `Required<T>`, `Readonly<T>`
- `Pick<T, K>`, `Omit<T, K>`
- `Record<K, V>`, `Exclude<T, U>`, `Extract<T, U>`
- `NonNullable<T>`, `Parameters<T>`, `ReturnType<T>`
- Creación de utility types personalizados

**Archivos:**
- `README.md` - Teoría completa de utility types
- `ejemplos.ts` - Ejemplos de cada utility type
- `ejercicios.ts` - Ejercicios prácticos con utility types

---

### 05. Type Manipulation
**Carpeta:** `05-type-manipulation/`

**Contenido:**
- **Generics** - Funciones, clases e interfaces genéricas
- **Keyof** - Operador para obtener claves de tipos
- **Typeof** - Operador para obtener tipos de valores
- **Indexed Access Types** - Acceso a tipos por índice
- **Template Literal Types** - Manipulación avanzada de strings
- **Conditional Types** - Lógica condicional en tipos
- **Mapped Types** - Transformación de tipos

**Archivos:**
- `README.md` - Teoría avanzada de manipulación de tipos
- `ejemplos.ts` - Ejemplos complejos de type manipulation
- `ejercicios.ts` - Ejercicios avanzados con generics y type manipulation

---

### 06. Narrowing
**Carpeta:** `06-narrowing/`

**Contenido:**
- Type guards con `typeof`
- Type guards con `instanceof`
- Type guards con `in`
- Discriminated unions
- Truthiness narrowing
- Equality narrowing
- Control flow analysis

**Archivos:**
- `README.md` - Teoría sobre narrowing y type guards
- `ejemplos.ts` - Ejemplos de diferentes tipos de narrowing
- `ejercicios.ts` - Ejercicios prácticos de narrowing

---

### 07. Object Types
**Carpeta:** `07-object-types/`

**Contenido:**
- Propiedades opcionales y de solo lectura
- Index signatures
- Extending types
- Intersection types
- Generic object types
- Array types avanzados
- Function types

**Archivos:**
- `README.md` - Teoría sobre tipos de objetos avanzados
- `ejemplos.ts` - Ejemplos de object types complejos
- `ejercicios.ts` - Ejercicios con object types

---

### 08. Clases
**Carpeta:** `08-clases/`

**Contenido:**
- Definición de clases con TypeScript
- Propiedades públicas, privadas y protegidas
- Constructores y métodos
- Herencia y polimorfismo
- Propiedades y métodos estáticos
- Getters y setters
- Clases abstractas
- Implementación de interfaces

**Archivos:**
- `README.md` - Teoría sobre programación orientada a objetos
- `ejemplos.ts` - Ejemplos de clases y herencia
- `ejercicios.ts` - Ejercicios de POO con TypeScript

---

### 09. Módulos
**Carpeta:** `09-modulos/`

**Contenido:**
- Sistema de módulos de TypeScript
- Exportaciones nombradas y por defecto
- Importaciones y re-exportaciones
- Configuración de módulos
- Resolución de módulos
- Namespaces vs módulos
- Declaraciones de módulos

**Archivos:**
- `README.md` - Teoría sobre sistema de módulos
- `ejemplos.ts` - Ejemplos de importaciones y exportaciones
- `ejercicios.ts` - Ejercicios de organización modular

---
**Carpeta:** `10-cheatsheets/`

**Contenido:**
- Referencias rápidas de sintaxis
- Tablas de tipos básicos
- Utility types más utilizados
- Patrones comunes de TypeScript
- Configuraciones recomendadas
- Mejores prácticas resumidas

**Archivos:**
- `README.md` - Cheatsheets y referencias rápidas
- `ejemplos.ts` - Ejemplos de sintaxis común
- `ejercicios.ts` - Ejercicios de repaso general

## 📖 Recursos Adicionales

- [Documentación Oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - Tipos para librerías JavaScript


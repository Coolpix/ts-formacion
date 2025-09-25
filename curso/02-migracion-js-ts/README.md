# Migración de JavaScript a TypeScript

## Introducción

La migración de JavaScript a TypeScript es un proceso que puede realizarse de manera gradual, aprovechando que TypeScript está diseñado para ser compatible con JavaScript existente. Según la [documentación oficial de TypeScript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html), el sistema de tipos de TypeScript tiene diferentes niveles de strictness cuando se trabaja con una base de código:

1. **Sistema de tipos basado solo en inferencia** con código JavaScript
2. **Tipado incremental en JavaScript** vía JSDoc
3. **Usar `// @ts-check`** en un archivo JavaScript
4. **Código TypeScript**
5. **TypeScript con strict habilitado**

Cada paso representa un movimiento hacia un sistema de tipos más seguro, pero no todos los proyectos necesitan ese nivel de verificación.

## Niveles de Migración

### 1. TypeScript con JavaScript (Nivel Básico)

Este es el nivel más básico donde usas un editor que utiliza TypeScript para proporcionar herramientas como autocompletado o navegación en el código.

**Características:**
- IntelliSense y autocompletado
- Navegación de código
- Refactoring básico
- Sin verificación de tipos estricta

### 2. Proporcionar tipos en JS vía JSDoc

En un archivo `.js`, los tipos a menudo pueden ser inferidos. Cuando los tipos no pueden ser inferidos, pueden especificarse usando la sintaxis JSDoc.

**Ejemplo:**
```javascript
/** @type {number} */
var x;

x = 0; // OK
x = false; // OK?! (No hay error por defecto)
```

Las anotaciones JSDoc que vienen antes de una declaración se usarán para establecer el tipo de esa declaración. Puedes encontrar la lista completa de patrones JSDoc soportados en [JSDoc Supported Types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).

### 3. Usar `@ts-check` (Nivel Intermedio)

Para habilitar errores en tus archivos JavaScript, agrega `// @ts-check` en la primera línea de tus archivos `.js` para que TypeScript los marque como error.

**Ejemplo:**
```javascript
// @ts-check
/** @type {number} */
var x;

x = 0; // OK
x = false; // Error: Type 'boolean' is not assignable to type 'number'
```

**Características:**
- Verificación de tipos en archivos JavaScript
- Errores de tipo en tiempo de desarrollo
- Compatible con código JavaScript existente

### 4. Código TypeScript (Nivel Avanzado)

Migración completa a archivos `.ts` con tipado explícito.

**Características:**
- Tipado estático completo
- Todas las características de TypeScript
- Mejor rendimiento del compilador
- Verificación de tipos en tiempo de compilación

### 5. TypeScript con Strict Habilitado (Nivel Máximo)

Habilitar todas las verificaciones estrictas de TypeScript.

**Características:**
- Verificación de tipos más estricta
- Mejor calidad de código
- Detección temprana de errores
- Código más mantenible

## Estrategias de Migración

### Estrategia 1: Migración Gradual con JSDoc

Esta estrategia permite mantener archivos JavaScript mientras se añaden tipos gradualmente usando JSDoc.

#### Paso 1: Habilitar verificación de tipos en archivos JavaScript
```javascript
// @ts-check
/** @type {number} */
var x;

x = 0; // OK
x = false; // Error: Type 'boolean' is not assignable to type 'number'
```

#### Paso 2: Añadir tipos JSDoc a funciones
```javascript
// @ts-check

/**
 * @param {string} nombre
 * @param {number} edad
 * @returns {string}
 */
function saludar(nombre, edad) {
    return `Hola ${nombre}, tienes ${edad} años`;
}

/**
 * @param {Object} usuario
 * @param {string} usuario.nombre
 * @param {number} usuario.edad
 * @returns {Object}
 */
function procesarUsuario(usuario) {
    return {
        ...usuario,
        activo: true
    };
}
```

#### Paso 3: Usar jsconfig.json para proyectos grandes
```json
{
  "compilerOptions": {
    "checkJs": true,
    "allowJs": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Estrategia 2: Migración Híbrida (JavaScript + TypeScript)

Permite tener archivos JavaScript y TypeScript en el mismo proyecto.

#### Paso 1: Configurar TypeScript para archivos mixtos
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Paso 2: Migrar archivos críticos primero
```bash
# Migrar archivos de utilidades primero
mv src/utils.js src/utils.ts
mv src/types.js src/types.ts
```

#### Paso 3: Actualizar imports gradualmente
```javascript
// En archivos JavaScript
import { helper } from './utils'; // TypeScript
import { fetchData } from './api.js'; // JavaScript
```

### Estrategia 3: Migración Completa a TypeScript

Migración completa de archivos JavaScript a TypeScript.

#### Paso 1: Configurar TypeScript
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

#### Paso 2: Renombrar archivos
```bash
# Renombrar archivos .js a .ts
mv src/utils.js src/utils.ts
mv src/api.js src/api.ts
mv src/index.js src/index.ts
```

#### Paso 3: Añadir tipos explícitos
```typescript
// Antes (JavaScript)
let nombre = "Juan";
let edad = 25;
let activo = true;

// Después (TypeScript)
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
```

## Manejo de Errores y Excepciones

### Usar `@ts-ignore` y `@ts-expect-error`

Cuando TypeScript ofrece errores con los que no estás de acuerdo, puedes ignorar errores en líneas específicas:

```javascript
// @ts-check
/** @type {number} */
var x;

x = 0; // OK
// @ts-expect-error
x = false; // Error ignorado intencionalmente
```

### Usar `@ts-nocheck`

Para archivos que no quieres verificar:

```javascript
// @ts-nocheck
// Este archivo no será verificado por TypeScript
var codigoLegacy = obtenerDatosLegacy();
```

### Configurar archivos a excluir

```json
{
  "compilerOptions": {
    "checkJs": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "legacy/**/*"]
}
```

## Casos de Uso Comunes

### 1. Migración de Funciones con JSDoc

```javascript
// @ts-check

/**
 * @param {string} nombre
 * @param {number} edad
 * @returns {string}
 */
function saludar(nombre, edad) {
    return `Hola ${nombre}, tienes ${edad} años`;
}

/**
 * @param {Object} usuario
 * @param {string} usuario.nombre
 * @param {number} usuario.edad
 * @param {boolean} [usuario.activo=true]
 * @returns {Object}
 */
function procesarUsuario(usuario) {
    return {
        ...usuario,
        activo: usuario.activo ?? true,
        fechaProcesamiento: new Date()
    };
}
```

### 2. Migración de Clases

```javascript
// @ts-check

/**
 * @class
 */
class Usuario {
    /**
     * @param {string} nombre
     * @param {string} email
     */
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    /**
     * @returns {string}
     */
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
```

### 3. Migración de Módulos

```javascript
// @ts-check

/**
 * @typedef {Object} Producto
 * @property {number} id
 * @property {string} nombre
 * @property {number} precio
 */

/**
 * @param {Producto[]} productos
 * @returns {number}
 */
export function calcularTotal(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

/**
 * @param {Producto} producto
 * @returns {string}
 */
export function formatearProducto(producto) {
    return `${producto.nombre}: $${producto.precio}`;
}
```

## Herramientas y Configuración

### 1. jsconfig.json para Proyectos JavaScript

Para proyectos que quieren usar TypeScript solo para verificación de tipos:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "allowJs": true,
    "noEmit": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 2. tsconfig.json para Proyectos Mixtos

Para proyectos que tienen tanto JavaScript como TypeScript:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Mejores Prácticas

### 1. Orden de Migración Recomendado

1. **Archivos de utilidades** - Funciones puras y helpers
2. **Tipos y interfaces** - Definiciones de tipos compartidos
3. **Servicios y APIs** - Lógica de negocio
4. **Componentes UI** - Interfaces de usuario
5. **Archivos de configuración** - Configuraciones y constantes

### 2. Uso de JSDoc para Documentación

```javascript
// @ts-check

/**
 * Calcula el precio total de una lista de productos
 * @param {Object[]} productos - Lista de productos
 * @param {number} productos[].precio - Precio del producto
 * @param {number} productos[].cantidad - Cantidad del producto
 * @param {number} [descuento=0] - Descuento aplicado (opcional)
 * @returns {number} Precio total calculado
 * @throws {Error} Si algún producto no tiene precio válido
 */
function calcularTotal(productos, descuento = 0) {
    if (!Array.isArray(productos)) {
        throw new Error('Los productos deben ser un array');
    }
    
    const subtotal = productos.reduce((total, producto) => {
        if (typeof producto.precio !== 'number' || producto.precio < 0) {
            throw new Error('Precio inválido');
        }
        return total + (producto.precio * (producto.cantidad || 1));
    }, 0);
    
    return subtotal * (1 - descuento);
}
```

## Recursos Adicionales

### Documentación Oficial
- [JS Projects Utilizing TypeScript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html) - Guía oficial de migración
- [JSDoc Supported Types](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) - Tipos soportados en JSDoc
- [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html) - Verificación de archivos JS

```

## Conclusión

La migración de JavaScript a TypeScript puede realizarse de manera gradual utilizando los diferentes niveles de strictness que ofrece TypeScript. Según la [documentación oficial](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html), puedes empezar con verificación de tipos básica usando `// @ts-check` y JSDoc, y progresivamente avanzar hacia una migración completa.

**Beneficios de la migración gradual:**
- **Menor riesgo** de romper funcionalidad existente
- **Aprendizaje progresivo** de TypeScript
- **Mejora continua** de la calidad del código
- **Flexibilidad** para adaptar el proceso a las necesidades del proyecto

**Recomendaciones:**
1. **Comienza con `// @ts-check`** en archivos JavaScript críticos
2. **Usa JSDoc** para documentar tipos gradualmente
3. **Migra archivos de utilidades** primero
4. **Configura herramientas** de verificación de tipos
5. **Mantén la funcionalidad** existente durante todo el proceso

La clave del éxito está en entender que no todos los proyectos necesitan el mismo nivel de verificación de tipos, y que TypeScript está diseñado para ser compatible con JavaScript existente, facilitando enormemente este proceso de migración.

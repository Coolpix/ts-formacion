# Tema 7: Módulos y Imports/Exports

## Introducción

Los módulos son la base para organizar código en TypeScript. Permiten dividir el código en archivos separados, reutilizar código entre diferentes partes de la aplicación y mantener un código limpio y mantenible. En este tema aprenderemos a usar módulos efectivamente en TypeScript.

## ¿Qué son los Módulos?

Un módulo es un archivo que contiene código TypeScript y puede exportar funciones, clases, interfaces, tipos y otros elementos para ser utilizados por otros módulos. TypeScript soporta diferentes sistemas de módulos como CommonJS, AMD, UMD y ES6.

```typescript
// archivo: utils.ts
export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}

// archivo: main.ts
import { sumar, restar } from './utils';

console.log(sumar(5, 3)); // 8
console.log(restar(10, 4)); // 6
```

## Exportaciones

### Exportaciones Nombradas

```typescript
// Exportación individual
export function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}

export const PI = 3.14159;

export interface Usuario {
    nombre: string;
    edad: number;
}

// Exportación múltiple
export { saludar, PI, Usuario };

// Exportación con alias
export { saludar as saludarUsuario, PI as PI_CONSTANTE };
```

### Exportaciones por Defecto

```typescript
// Exportación por defecto
export default class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }
    
    restar(a: number, b: number): number {
        return a - b;
    }
}

// Exportación por defecto de función
export default function crearUsuario(nombre: string, edad: number) {
    return { nombre, edad };
}

// Exportación por defecto de objeto
export default {
    version: "1.0.0",
    autor: "Mi Equipo"
};
```

### Exportaciones Mixtas

```typescript
// Exportaciones nombradas
export function procesarDatos(datos: any[]): any[] {
    return datos.map(item => item * 2);
}

export const CONFIGURACION = {
    apiUrl: "https://api.ejemplo.com",
    timeout: 5000
};

// Exportación por defecto
export default class ProcesadorDatos {
    procesar(datos: any[]): any[] {
        return procesarDatos(datos);
    }
}
```

## Importaciones

### Importaciones Nombradas

```typescript
// Importación individual
import { sumar, restar } from './utils';

// Importación múltiple
import { sumar, restar, multiplicar, dividir } from './calculadora';

// Importación con alias
import { sumar as suma, restar as resta } from './utils';

// Importación de todo el módulo
import * as Utils from './utils';
console.log(Utils.sumar(5, 3));

// Importación de tipos
import { Usuario, Producto } from './types';
```

### Importaciones por Defecto

```typescript
// Importación por defecto
import Calculadora from './calculadora';

// Importación por defecto con alias
import MiCalculadora from './calculadora';

// Importación por defecto y nombrada
import Calculadora, { CONFIGURACION } from './calculadora';
```

### Importaciones Dinámicas

```typescript
// Importación dinámica
async function cargarModulo() {
    const modulo = await import('./utils');
    return modulo.sumar(5, 3);
}

// Importación dinámica con destructuring
async function cargarFunciones() {
    const { sumar, restar } = await import('./utils');
    return { sumar, restar };
}

// Importación dinámica condicional
if (condicion) {
    const modulo = await import('./modulo-condicional');
    modulo.ejecutar();
}
```

## Re-exportaciones

### Re-exportación Simple

```typescript
// archivo: index.ts
export { sumar, restar } from './utils';
export { Usuario, Producto } from './types';
export { default as Calculadora } from './calculadora';
```

### Re-exportación con Alias

```typescript
// archivo: index.ts
export { sumar as suma, restar as resta } from './utils';
export { Usuario as UsuarioType, Producto as ProductoType } from './types';
```

### Re-exportación de Todo

```typescript
// archivo: index.ts
export * from './utils';
export * from './types';
export { default } from './calculadora';
```

## Sistemas de Módulos

### CommonJS

```typescript
// Exportación CommonJS
module.exports = {
    sumar: (a: number, b: number) => a + b,
    restar: (a: number, b: number) => a - b
};

// Importación CommonJS
const { sumar, restar } = require('./utils');
```

### ES6 Modules

```typescript
// Exportación ES6
export function sumar(a: number, b: number): number {
    return a + b;
}

// Importación ES6
import { sumar } from './utils';
```

### AMD (Asynchronous Module Definition)

```typescript
// Exportación AMD
define(['exports'], function (exports) {
    exports.sumar = function(a: number, b: number) {
        return a + b;
    };
});

// Importación AMD
define(['./utils'], function (utils) {
    return utils.sumar(5, 3);
});
```

## Configuración de Módulos

### tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",        // Sistema de módulos
    "target": "ES2020",          // Versión de JavaScript objetivo
    "moduleResolution": "node",  // Resolución de módulos
    "esModuleInterop": true,     // Interoperabilidad con CommonJS
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Opciones de Módulos

- **module**: Sistema de módulos a usar
  - `"commonjs"`: Para Node.js
  - `"es6"` o `"es2015"`: Para navegadores modernos
  - `"amd"`: Para RequireJS
  - `"umd"`: Universal Module Definition

- **moduleResolution**: Cómo resolver módulos
  - `"node"`: Resolución de Node.js
  - `"classic"`: Resolución clásica de TypeScript

## Organización de Módulos

### Estructura de Carpetas

```
src/
├── components/
│   ├── Button.ts
│   ├── Input.ts
│   └── index.ts
├── utils/
│   ├── math.ts
│   ├── string.ts
│   └── index.ts
├── types/
│   ├── user.ts
│   ├── product.ts
│   └── index.ts
├── services/
│   ├── api.ts
│   ├── auth.ts
│   └── index.ts
└── main.ts
```

### Archivos de Índice

```typescript
// src/components/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { default as Modal } from './Modal';

// src/utils/index.ts
export * from './math';
export * from './string';
export { default as DateUtils } from './date';

// src/index.ts
export * from './components';
export * from './utils';
export * from './types';
export * from './services';
```

## Módulos de Terceros

### Instalación de Tipos

```bash
# Instalar tipos para librerías populares
npm install --save-dev @types/node
npm install --save-dev @types/lodash
npm install --save-dev @types/express
```

### Uso de Módulos de Terceros

```typescript
// Importación de módulos de terceros
import * as _ from 'lodash';
import express from 'express';
import { readFile } from 'fs/promises';

// Uso de tipos de terceros
import { Request, Response } from 'express';

app.get('/api/users', (req: Request, res: Response) => {
    // Lógica del endpoint
});
```

## Módulos con Genéricos

### Exportación de Genéricos

```typescript
// archivo: generics.ts
export interface Repository<T> {
    findById(id: string): T | undefined;
    save(entity: T): void;
    delete(id: string): boolean;
}

export class GenericRepository<T> implements Repository<T> {
    private entities: Map<string, T> = new Map();
    
    findById(id: string): T | undefined {
        return this.entities.get(id);
    }
    
    save(entity: T): void {
        // Implementación
    }
    
    delete(id: string): boolean {
        return this.entities.delete(id);
    }
}

// archivo: main.ts
import { Repository, GenericRepository } from './generics';

interface Usuario {
    id: string;
    nombre: string;
}

const usuarioRepo: Repository<Usuario> = new GenericRepository<Usuario>();
```

## Módulos con Namespaces

### Definición de Namespaces

```typescript
// archivo: utils.ts
export namespace MathUtils {
    export function sumar(a: number, b: number): number {
        return a + b;
    }
    
    export function restar(a: number, b: number): number {
        return a - b;
    }
}

export namespace StringUtils {
    export function capitalizar(texto: string): string {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
    
    export function invertir(texto: string): string {
        return texto.split('').reverse().join('');
    }
}

// archivo: main.ts
import { MathUtils, StringUtils } from './utils';

console.log(MathUtils.sumar(5, 3));
console.log(StringUtils.capitalizar("hola"));
```

## Mejores Prácticas

1. **Usa exportaciones nombradas** para múltiples elementos
2. **Usa exportación por defecto** para un elemento principal
3. **Organiza módulos** por funcionalidad
4. **Crea archivos de índice** para facilitar importaciones
5. **Usa alias** para evitar conflictos de nombres
6. **Documenta módulos** con comentarios JSDoc
7. **Mantén módulos pequeños** y enfocados

## Próximos Pasos

¡Felicidades! Has completado la formación básica de TypeScript. Ahora tienes las herramientas necesarias para:

- Escribir código TypeScript seguro y mantenible
- Usar tipos, interfaces y clases efectivamente
- Aplicar genéricos para código reutilizable
- Organizar código en módulos

Continúa practicando y explorando las características avanzadas de TypeScript para convertirte en un experto.

---

**Tiempo estimado de estudio**: 60-75 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con módulos

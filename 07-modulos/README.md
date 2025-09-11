# Tema 7: Módulos y Imports/Exports

## Introducción

Los módulos son la base fundamental para organizar y estructurar código en TypeScript, representando la unidad de encapsulación y reutilización. Los módulos nos permiten:

- **Dividir código en archivos separados** para mejorar la organización y mantenibilidad
- **Crear APIs claras** con exportaciones e importaciones bien definidas
- **Reutilizar código** entre diferentes partes de la aplicación
- **Mantener encapsulación** y evitar contaminación del espacio de nombres global
- **Facilitar el testing** al permitir importar módulos específicos
- **Habilitar la carga dinámica** de código cuando sea necesario
- **Soportar diferentes sistemas de módulos** (CommonJS, ES6, AMD, UMD)

En este tema exploraremos desde conceptos básicos hasta patrones avanzados de organización de módulos, proporcionando las herramientas necesarias para crear arquitecturas de software escalables y bien estructuradas.

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

## Patrones Avanzados de Módulos

### 1. Barrel Exports (Exportaciones en Barril)
```typescript
// src/components/index.ts - Barrel export
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';
export { Card } from './Card';

// src/utils/index.ts - Barrel export
export * from './math';
export * from './string';
export * from './date';
export { default as Logger } from './logger';

// src/index.ts - Main barrel export
export * from './components';
export * from './utils';
export * from './types';
export * from './services';

// Uso simplificado
import { Button, Input, sumar, Usuario } from './src';
```

### 2. Lazy Loading y Code Splitting
```typescript
// Carga dinámica de componentes
class ComponentLoader {
    private cache = new Map<string, any>();
    
    async loadComponent(componentName: string) {
        if (this.cache.has(componentName)) {
            return this.cache.get(componentName);
        }
        
        const module = await import(`./components/${componentName}`);
        const component = module.default || module[componentName];
        this.cache.set(componentName, component);
        
        return component;
    }
}

// Uso
const loader = new ComponentLoader();
const Button = await loader.loadComponent('Button');
const Modal = await loader.loadComponent('Modal');
```

### 3. Module Augmentation (Aumento de Módulos)
```typescript
// Extender módulos de terceros
declare module 'express' {
    interface Request {
        usuario?: {
            id: string;
            nombre: string;
            email: string;
        };
    }
}

// Extender tipos globales
declare global {
    interface Window {
        miApp: {
            version: string;
            config: any;
        };
    }
}

// Uso
app.use((req, res, next) => {
    req.usuario = { id: '123', nombre: 'Juan', email: 'juan@email.com' };
    next();
});
```

### 4. Conditional Exports
```typescript
// package.json con conditional exports
{
  "name": "mi-libreria",
  "main": "./dist/index.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./utils": {
      "import": "./dist/utils.esm.js",
      "require": "./dist/utils.js",
      "types": "./dist/utils.d.ts"
    }
  }
}

// Uso
import { sumar } from 'mi-libreria';
import { formatearFecha } from 'mi-libreria/utils';
```

## Configuración Avanzada de Módulos

### 1. Path Mapping
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/utils/*": ["utils/*"],
      "@/types/*": ["types/*"],
      "@/services/*": ["services/*"]
    }
  }
}
```

```typescript
// Uso con path mapping
import { Button } from '@/components/Button';
import { sumar } from '@/utils/math';
import { Usuario } from '@/types/user';
import { ApiService } from '@/services/api';
```

### 2. Module Resolution Avanzada
```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force"
  }
}
```

### 3. Declaration Files (.d.ts)
```typescript
// types/global.d.ts
declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.json' {
    const content: any;
    export default content;
}

// types/modules.d.ts
declare module 'mi-libreria-externa' {
    export function procesarDatos(datos: any[]): any[];
    export const VERSION: string;
    export default class Procesador {
        procesar(datos: any): any;
    }
}
```

## Mejores Prácticas

### 1. Organización de Módulos
```typescript
// ✅ Bueno: Módulos pequeños y enfocados
// src/utils/date.ts
export function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString('es-ES');
}

export function obtenerDiferenciaDias(fecha1: Date, fecha2: Date): number {
    return Math.floor((fecha2.getTime() - fecha1.getTime()) / (1000 * 60 * 60 * 24));
}

// src/utils/string.ts
export function capitalizar(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function limpiarTexto(texto: string): string {
    return texto.trim().replace(/\s+/g, ' ');
}

// ❌ Malo: Módulo muy grande con muchas responsabilidades
// src/utils.ts - 500+ líneas con funciones de fecha, string, math, etc.
```

### 2. Exportaciones Consistentes
```typescript
// ✅ Bueno: Exportaciones consistentes
// src/components/Button.ts
export interface ButtonProps {
    texto: string;
    onClick: () => void;
    disabled?: boolean;
}

export function Button({ texto, onClick, disabled = false }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {texto}
        </button>
    );
}

// src/components/Input.ts
export interface InputProps {
    valor: string;
    onChange: (valor: string) => void;
    placeholder?: string;
}

export function Input({ valor, onChange, placeholder }: InputProps) {
    return (
        <input 
            value={valor} 
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
}
```

### 3. Documentación de Módulos
```typescript
/**
 * Utilidades para manipulación de fechas
 * @module DateUtils
 */

/**
 * Formatea una fecha en formato español
 * @param fecha - Fecha a formatear
 * @returns Fecha formateada como string
 * @example
 * ```typescript
 * const fecha = new Date();
 * const fechaFormateada = formatearFecha(fecha);
 * console.log(fechaFormateada); // "15/12/2023"
 * ```
 */
export function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString('es-ES');
}

/**
 * Calcula la diferencia en días entre dos fechas
 * @param fecha1 - Primera fecha
 * @param fecha2 - Segunda fecha
 * @returns Diferencia en días (puede ser negativa)
 * @example
 * ```typescript
 * const fecha1 = new Date('2023-01-01');
 * const fecha2 = new Date('2023-01-10');
 * const dias = obtenerDiferenciaDias(fecha1, fecha2);
 * console.log(dias); // 9
 * ```
 */
export function obtenerDiferenciaDias(fecha1: Date, fecha2: Date): number {
    return Math.floor((fecha2.getTime() - fecha1.getTime()) / (1000 * 60 * 60 * 24));
}
```

### 4. Manejo de Dependencias
```typescript
// ✅ Bueno: Dependencias explícitas
// src/services/api.ts
import { Usuario } from '../types/user';
import { ApiResponse } from '../types/api';

export class ApiService {
    constructor(private baseUrl: string) {}
    
    async obtenerUsuario(id: string): Promise<ApiResponse<Usuario>> {
        const response = await fetch(`${this.baseUrl}/usuarios/${id}`);
        return await response.json();
    }
}

// ❌ Malo: Dependencias implícitas o circulares
// src/services/api.ts
import { Usuario } from '../types/user';
import { ProcesadorUsuario } from './procesador'; // Dependencia circular

export class ApiService {
    async obtenerUsuario(id: string): Promise<Usuario> {
        // Lógica que depende de ProcesadorUsuario
    }
}
```

## Casos de Uso Comunes

### 1. Arquitectura de Aplicación
```typescript
// src/types/index.ts
export interface Usuario {
    id: string;
    nombre: string;
    email: string;
    activo: boolean;
}

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

// src/services/index.ts
export { ApiService } from './api';
export { AuthService } from './auth';
export { CacheService } from './cache';

// src/components/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';

// src/utils/index.ts
export * from './date';
export * from './string';
export * from './validation';

// src/index.ts - Punto de entrada principal
export * from './types';
export * from './services';
export * from './components';
export * from './utils';
```

### 2. Plugin System
```typescript
// src/plugins/types.ts
export interface Plugin {
    nombre: string;
    version: string;
    inicializar(): void;
    destruir(): void;
}

export interface PluginManager {
    registrar(plugin: Plugin): void;
    desregistrar(nombre: string): void;
    obtener(nombre: string): Plugin | undefined;
    listar(): Plugin[];
}

// src/plugins/manager.ts
export class PluginManagerImpl implements PluginManager {
    private plugins = new Map<string, Plugin>();
    
    registrar(plugin: Plugin): void {
        this.plugins.set(plugin.nombre, plugin);
        plugin.inicializar();
    }
    
    desregistrar(nombre: string): void {
        const plugin = this.plugins.get(nombre);
        if (plugin) {
            plugin.destruir();
            this.plugins.delete(nombre);
        }
    }
    
    obtener(nombre: string): Plugin | undefined {
        return this.plugins.get(nombre);
    }
    
    listar(): Plugin[] {
        return Array.from(this.plugins.values());
    }
}

// src/plugins/index.ts
export * from './types';
export { PluginManagerImpl } from './manager';
```

### 3. Micro-frontend Architecture
```typescript
// src/microfrontends/types.ts
export interface Microfrontend {
    nombre: string;
    url: string;
    version: string;
    activo: boolean;
}

export interface MicrofrontendLoader {
    cargar(microfrontend: Microfrontend): Promise<any>;
    descargar(nombre: string): void;
}

// src/microfrontends/loader.ts
export class MicrofrontendLoaderImpl implements MicrofrontendLoader {
    private cache = new Map<string, any>();
    
    async cargar(microfrontend: Microfrontend): Promise<any> {
        if (this.cache.has(microfrontend.nombre)) {
            return this.cache.get(microfrontend.nombre);
        }
        
        const modulo = await import(/* webpackIgnore: true */ microfrontend.url);
        this.cache.set(microfrontend.nombre, modulo);
        
        return modulo;
    }
    
    descargar(nombre: string): void {
        this.cache.delete(nombre);
    }
}
```

## Errores Comunes y Cómo Evitarlos

### 1. Dependencias Circulares
```typescript
// ❌ Malo: Dependencia circular
// src/services/api.ts
import { ProcesadorUsuario } from './procesador';

export class ApiService {
    constructor(private procesador: ProcesadorUsuario) {}
}

// src/services/procesador.ts
import { ApiService } from './api';

export class ProcesadorUsuario {
    constructor(private api: ApiService) {}
}

// ✅ Bueno: Evitar dependencias circulares
// src/services/api.ts
export class ApiService {
    async obtenerDatos(): Promise<any> {
        // Lógica de API
    }
}

// src/services/procesador.ts
export class ProcesadorUsuario {
    procesar(datos: any): any {
        // Lógica de procesamiento
    }
}

// src/services/index.ts
export { ApiService } from './api';
export { ProcesadorUsuario } from './procesador';
```

### 2. Exportaciones Inconsistentes
```typescript
// ❌ Malo: Mezclar exportaciones de forma inconsistente
// src/utils.ts
export function sumar(a: number, b: number): number {
    return a + b;
}

export default function restar(a: number, b: number): number {
    return a - b;
}

// ✅ Bueno: Ser consistente con las exportaciones
// src/utils.ts
export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}

// O usar exportación por defecto para el módulo completo
export default {
    sumar,
    restar
};
```

### 3. No Usar Barrel Exports
```typescript
// ❌ Malo: Importaciones largas y repetitivas
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Modal } from './components/Modal';
import { sumar } from './utils/math';
import { capitalizar } from './utils/string';

// ✅ Bueno: Usar barrel exports
import { Button, Input, Modal } from './components';
import { sumar, capitalizar } from './utils';
```

### 4. No Documentar APIs de Módulos
```typescript
// ❌ Malo: Sin documentación
export function procesarDatos(datos: any[]): any[] {
    return datos.map(item => item * 2);
}

// ✅ Bueno: Con documentación
/**
 * Procesa un array de datos multiplicando cada elemento por 2
 * @param datos - Array de números a procesar
 * @returns Array de números procesados
 * @example
 * ```typescript
 * const datos = [1, 2, 3];
 * const procesados = procesarDatos(datos);
 * console.log(procesados); // [2, 4, 6]
 * ```
 */
export function procesarDatos(datos: number[]): number[] {
    return datos.map(item => item * 2);
}
```

## Próximos Pasos

¡Felicidades! Has completado la formación básica de TypeScript. Ahora tienes las herramientas necesarias para:

- **Escribir código TypeScript seguro y mantenible** con tipos robustos
- **Usar interfaces y clases efectivamente** para crear arquitecturas sólidas
- **Aplicar genéricos** para crear código verdaderamente reutilizable
- **Organizar código en módulos** para proyectos escalables
- **Implementar patrones de diseño** avanzados con TypeScript
- **Crear APIs bien documentadas** y fáciles de usar

### Recursos Adicionales

- **TypeScript Handbook**: Documentación oficial completa
- **TypeScript Playground**: Para experimentar con código
- **DefinitelyTyped**: Tipos para librerías de terceros
- **TypeScript Deep Dive**: Guía avanzada de TypeScript

### Próximos Pasos Recomendados

1. **Practica con proyectos reales** aplicando los conceptos aprendidos
2. **Explora características avanzadas** como decoradores y mapped types
3. **Aprende sobre herramientas** como ESLint, Prettier y Jest con TypeScript
4. **Estudia frameworks** como React, Vue o Angular con TypeScript
5. **Contribuye a proyectos open source** para ganar experiencia

---

**Tiempo estimado de estudio**: 75-90 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con módulos
**Dificultad**: Intermedia-Avanzada

# Módulos en TypeScript

## Introducción

Los módulos en TypeScript son una característica fundamental que permite organizar el código en archivos separados, facilitando la reutilización, el mantenimiento y la escalabilidad de las aplicaciones. TypeScript soporta tanto el sistema de módulos de ES6 como CommonJS.

## ¿Qué son los Módulos?

Los módulos son archivos que contienen código TypeScript y pueden exportar e importar funcionalidades entre sí. Esto permite dividir el código en unidades lógicas más pequeñas y manejables, mejorando la organización y la reutilización del código.

## Tipos de Módulos

### 1. ES6 Modules (ESM)

Los módulos ES6 son el estándar moderno para módulos en JavaScript y TypeScript.

#### Exportaciones

```typescript
// exportaciones.ts
export const nombre = "Juan";
export const edad = 25;

export function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

export class Usuario {
    constructor(public nombre: string, public email: string) {}
}

// Exportación por defecto
export default function crearUsuario(nombre: string, email: string): Usuario {
    return new Usuario(nombre, email);
}
```

#### Importaciones

```typescript
// importaciones.ts
import { nombre, edad, saludar, Usuario } from './exportaciones';
import crearUsuario from './exportaciones';

// Uso de las importaciones
console.log(nombre, edad);
console.log(saludar("María"));

let usuario = new Usuario("Pedro", "pedro@email.com");
let usuario2 = crearUsuario("Ana", "ana@email.com");
```

### 2. CommonJS

CommonJS es el sistema de módulos utilizado en Node.js.

#### Exportaciones

```typescript
// exportaciones.ts
const nombre = "Juan";
const edad = 25;

function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

class Usuario {
    constructor(public nombre: string, public email: string) {}
}

// Exportaciones CommonJS
module.exports = {
    nombre,
    edad,
    saludar,
    Usuario
};

// O usando exports
exports.nombre = nombre;
exports.edad = edad;
exports.saludar = saludar;
exports.Usuario = Usuario;
```

#### Importaciones

```typescript
// importaciones.ts
const { nombre, edad, saludar, Usuario } = require('./exportaciones');

// Uso de las importaciones
console.log(nombre, edad);
console.log(saludar("María"));

let usuario = new Usuario("Pedro", "pedro@email.com");
```

## Configuración de Módulos

### 1. tsconfig.json

```json
{
  "compilerOptions": {
    "module": "ES6", // o "CommonJS", "AMD", "UMD", "System"
    "target": "ES6",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true
  }
}
```

### 2. Opciones de Módulo

- **ES6**: Módulos ES6 nativos
- **CommonJS**: Módulos CommonJS (Node.js)
- **AMD**: Asynchronous Module Definition
- **UMD**: Universal Module Definition
- **System**: SystemJS modules

## Tipos de Exportaciones

### 1. Exportaciones Nombradas

```typescript
// utils.ts
export const PI = 3.14159;
export const E = 2.71828;

export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}

export interface Configuracion {
    servidor: string;
    puerto: number;
}

export type Estado = "activo" | "inactivo" | "pendiente";
```

### 2. Exportación por Defecto

```typescript
// usuario.ts
class Usuario {
    constructor(public nombre: string, public email: string) {}
}

export default Usuario;
```

### 3. Exportaciones Mixtas

```typescript
// usuario.ts
export const VERSION = "1.0.0";

export interface IUsuario {
    nombre: string;
    email: string;
}

export class Usuario implements IUsuario {
    constructor(public nombre: string, public email: string) {}
}

export function crearUsuario(nombre: string, email: string): Usuario {
    return new Usuario(nombre, email);
}

// Exportación por defecto
export default Usuario;
```

## Tipos de Importaciones

### 1. Importaciones Nombradas

```typescript
import { PI, E, sumar, restar, Configuracion, Estado } from './utils';
import { VERSION, IUsuario, Usuario, crearUsuario } from './usuario';
```

### 2. Importación por Defecto

```typescript
import Usuario from './usuario';
import crearUsuario from './usuario';
```

### 3. Importaciones Mixtas

```typescript
import Usuario, { VERSION, IUsuario, crearUsuario } from './usuario';
```

### 4. Importación con Alias

```typescript
import { Usuario as UsuarioClass } from './usuario';
import { sumar as add } from './utils';
```

### 5. Importación de Todo

```typescript
import * as utils from './utils';
import * as usuario from './usuario';

// Uso
console.log(utils.PI);
console.log(usuario.VERSION);
```

### 6. Importación de Tipos

```typescript
import type { Configuracion, Estado } from './utils';
import type { IUsuario } from './usuario';
```

## Re-exportaciones

### 1. Re-exportación Simple

```typescript
// index.ts
export { Usuario, crearUsuario } from './usuario';
export { sumar, restar, PI } from './utils';
```

### 2. Re-exportación con Alias

```typescript
// index.ts
export { Usuario as UsuarioClass } from './usuario';
export { sumar as add, restar as subtract } from './utils';
```

### 3. Re-exportación de Todo

```typescript
// index.ts
export * from './usuario';
export * from './utils';
```

### 4. Re-exportación por Defecto

```typescript
// index.ts
export { default as Usuario } from './usuario';
export { default as Utilidades } from './utils';
```

## Módulos de Tipos

### 1. Declaraciones de Módulos

```typescript
// tipos.d.ts
declare module "mi-modulo" {
    export function funcion(): string;
    export const constante: number;
    export interface Interfaz {
        propiedad: string;
    }
}
```

### 2. Módulos de Tipos Externos

```typescript
// @types/mi-modulo/index.d.ts
declare module "mi-modulo" {
    export function funcion(): string;
    export const constante: number;
}
```

## Casos de Uso Prácticos

### 1. Sistema de Usuarios

```typescript
// tipos/usuario.ts
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

export type EstadoUsuario = "activo" | "inactivo" | "pendiente";

export interface UsuarioCrear {
    nombre: string;
    email: string;
}

export interface UsuarioActualizar {
    nombre?: string;
    email?: string;
    activo?: boolean;
}
```

```typescript
// modelos/usuario.ts
import { Usuario, UsuarioCrear, UsuarioActualizar } from '../tipos/usuario';

export class UsuarioModel {
    private usuarios: Usuario[] = [];
    
    crear(datos: UsuarioCrear): Usuario {
        const usuario: Usuario = {
            id: Math.floor(Math.random() * 1000),
            ...datos,
            activo: true
        };
        this.usuarios.push(usuario);
        return usuario;
    }
    
    obtener(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.id === id);
    }
    
    actualizar(id: number, datos: UsuarioActualizar): Usuario | undefined {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) return undefined;
        
        this.usuarios[index] = { ...this.usuarios[index], ...datos };
        return this.usuarios[index];
    }
    
    eliminar(id: number): boolean {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) return false;
        
        this.usuarios.splice(index, 1);
        return true;
    }
    
    listar(): Usuario[] {
        return [...this.usuarios];
    }
}
```

```typescript
// servicios/usuario.ts
import { UsuarioModel } from '../modelos/usuario';
import { Usuario, UsuarioCrear, UsuarioActualizar } from '../tipos/usuario';

export class UsuarioService {
    constructor(private usuarioModel: UsuarioModel) {}
    
    crearUsuario(datos: UsuarioCrear): Usuario {
        return this.usuarioModel.crear(datos);
    }
    
    obtenerUsuario(id: number): Usuario | undefined {
        return this.usuarioModel.obtener(id);
    }
    
    actualizarUsuario(id: number, datos: UsuarioActualizar): Usuario | undefined {
        return this.usuarioModel.actualizar(id, datos);
    }
    
    eliminarUsuario(id: number): boolean {
        return this.usuarioModel.eliminar(id);
    }
    
    listarUsuarios(): Usuario[] {
        return this.usuarioModel.listar();
    }
}
```

```typescript
// index.ts
export { Usuario, UsuarioCrear, UsuarioActualizar, EstadoUsuario } from './tipos/usuario';
export { UsuarioModel } from './modelos/usuario';
export { UsuarioService } from './servicios/usuario';
```

### 2. Sistema de Utilidades

```typescript
// utils/fechas.ts
export function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
}

export function formatearFechaHora(fecha: Date): string {
    return fecha.toLocaleString();
}

export function agregarDias(fecha: Date, dias: number): Date {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}

export function esFechaValida(fecha: any): fecha is Date {
    return fecha instanceof Date && !isNaN(fecha.getTime());
}
```

```typescript
// utils/validaciones.ts
export function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validarTelefono(telefono: string): boolean {
    return /^[\+]?[1-9][\d]{0,15}$/.test(telefono);
}

export function validarLongitud(texto: string, min: number, max: number): boolean {
    return texto.length >= min && texto.length <= max;
}

export function validarNumero(numero: any): numero is number {
    return typeof numero === 'number' && !isNaN(numero);
}
```

```typescript
// utils/index.ts
export * from './fechas';
export * from './validaciones';
```

### 3. Sistema de Configuración

```typescript
// config/database.ts
export interface DatabaseConfig {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
    ssl: boolean;
}

export const databaseConfig: DatabaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    name: process.env.DB_NAME || 'mi_base_datos',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    ssl: process.env.DB_SSL === 'true'
};
```

```typescript
// config/server.ts
export interface ServerConfig {
    host: string;
    port: number;
    ssl: boolean;
    timeout: number;
}

export const serverConfig: ServerConfig = {
    host: process.env.SERVER_HOST || 'localhost',
    port: parseInt(process.env.SERVER_PORT || '3000'),
    ssl: process.env.SERVER_SSL === 'true',
    timeout: parseInt(process.env.SERVER_TIMEOUT || '5000')
};
```

```typescript
// config/index.ts
export * from './database';
export * from './server';
```

## Mejores Prácticas

### 1. Organización de Archivos

```
src/
├── tipos/
│   ├── usuario.ts
│   ├── producto.ts
│   └── index.ts
├── modelos/
│   ├── usuario.ts
│   ├── producto.ts
│   └── index.ts
├── servicios/
│   ├── usuario.ts
│   ├── producto.ts
│   └── index.ts
├── utils/
│   ├── fechas.ts
│   ├── validaciones.ts
│   └── index.ts
└── index.ts
```

### 2. Uso de Barrel Exports

```typescript
// tipos/index.ts
export * from './usuario';
export * from './producto';
export * from './orden';
```

```typescript
// index.ts
export * from './tipos';
export * from './modelos';
export * from './servicios';
export * from './utils';
```

### 3. Separación de Tipos y Implementación

```typescript
// tipos/usuario.ts
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export type EstadoUsuario = "activo" | "inactivo";
```

```typescript
// modelos/usuario.ts
import { Usuario } from '../tipos/usuario';

export class UsuarioModel {
    // Implementación
}
```

### 4. Uso de Importaciones de Tipos

```typescript
import type { Usuario, EstadoUsuario } from './tipos/usuario';
import { UsuarioModel } from './modelos/usuario';
```

## Errores Comunes

### 1. No Usar Barrel Exports

```typescript
// ❌ Malo
import { Usuario } from './tipos/usuario';
import { Producto } from './tipos/producto';
import { Orden } from './tipos/orden';

// ✅ Bueno
import { Usuario, Producto, Orden } from './tipos';
```

### 2. Mezclar Exportaciones por Defecto y Nombradas

```typescript
// ❌ Malo
export default class Usuario {}
export const VERSION = "1.0.0";

// ✅ Bueno
export class Usuario {}
export const VERSION = "1.0.0";
```

### 3. No Usar Importaciones de Tipos

```typescript
// ❌ Malo
import { Usuario, EstadoUsuario } from './tipos/usuario';

// ✅ Bueno
import type { Usuario, EstadoUsuario } from './tipos/usuario';
```

### 4. No Organizar Módulos por Funcionalidad

```
// ❌ Malo
src/
├── usuario.ts
├── producto.ts
├── orden.ts
└── utils.ts

// ✅ Bueno
src/
├── tipos/
├── modelos/
├── servicios/
└── utils/
```

## Conclusión

Los módulos en TypeScript son una característica esencial que permite:

- Organizar el código en archivos separados
- Facilitar la reutilización de código
- Mejorar el mantenimiento y la escalabilidad
- Separar responsabilidades
- Crear APIs limpias y bien estructuradas

La clave está en entender cuándo usar cada tipo de exportación e importación, cómo organizar los archivos de manera lógica, y cómo crear barrel exports para simplificar las importaciones. Los módulos son la base para crear aplicaciones TypeScript bien estructuradas y mantenibles.

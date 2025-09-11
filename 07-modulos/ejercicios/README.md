# Ejercicios - Módulos y Imports/Exports

## Ejercicio 1: Exportaciones Básicas

### Objetivo
Crear módulos con diferentes tipos de exportaciones.

### Instrucciones

1. **Crea un archivo** `utils.ts` en la carpeta `src`

2. **Implementa las siguientes exportaciones**:
   ```typescript
   // Exportaciones nombradas
   export function sumar(a: number, b: number): number
   export function restar(a: number, b: number): number
   export function multiplicar(a: number, b: number): number
   export function dividir(a: number, b: number): number
   
   // Exportaciones de constantes
   export const PI = 3.14159
   export const E = 2.71828
   
   // Exportaciones de interfaces
   export interface Usuario {
       id: number;
       nombre: string;
       email: string;
   }
   
   // Exportación por defecto
   export default class Calculadora {
       // Implementación
   }
   ```

3. **Crea un archivo** `types.ts` en la carpeta `src`

4. **Implementa las siguientes exportaciones**:
   ```typescript
   // Exportaciones de tipos
   export type Estado = "activo" | "inactivo" | "pendiente"
   export type Prioridad = "baja" | "media" | "alta"
   
   // Exportaciones de interfaces
   export interface Producto {
       id: number;
       nombre: string;
       precio: number;
   }
   
   // Exportaciones de enums
   export enum DiaSemana {
       Lunes = "lunes",
       Martes = "martes",
       // ... resto de días
   }
   ```

5. **Crea un archivo** `services.ts` en la carpeta `src`

6. **Implementa las siguientes exportaciones**:
   ```typescript
   // Exportaciones de clases
   export class UsuarioService {
       // Implementación
   }
   
   export class ProductoService {
       // Implementación
   }
   
   // Exportación por defecto
   export default class ApiService {
       // Implementación
   }
   ```

7. **Crea ejemplos de uso** para todas las exportaciones.

### Criterios de Evaluación
- ✅ Las exportaciones están correctamente definidas
- ✅ Se usan exportaciones nombradas y por defecto apropiadamente
- ✅ Las interfaces y tipos están bien definidos
- ✅ Las clases tienen implementaciones completas
- ✅ El código es limpio y bien documentado

---

## Ejercicio 2: Importaciones Básicas

### Objetivo
Crear módulos que importen y usen las exportaciones de otros módulos.

### Instrucciones

1. **Crea un archivo** `main.ts` en la carpeta `src`

2. **Implementa las siguientes importaciones**:
   ```typescript
   // Importaciones nombradas
   import { sumar, restar, multiplicar, dividir } from './utils'
   import { PI, E } from './utils'
   import { Usuario } from './utils'
   
   // Importaciones de tipos
   import { Estado, Prioridad, Producto, DiaSemana } from './types'
   
   // Importaciones de clases
   import { UsuarioService, ProductoService } from './services'
   
   // Importación por defecto
   import Calculadora from './utils'
   import ApiService from './services'
   ```

3. **Crea un archivo** `components.ts` en la carpeta `src`

4. **Implementa las siguientes importaciones**:
   ```typescript
   // Importaciones con alias
   import { sumar as suma, restar as resta } from './utils'
   import { Usuario as UsuarioType } from './utils'
   
   // Importación de todo el módulo
   import * as Utils from './utils'
   import * as Types from './types'
   
   // Importación por defecto con alias
   import MiCalculadora from './utils'
   import MiApiService from './services'
   ```

5. **Crea un archivo** `helpers.ts` en la carpeta `src`

6. **Implementa las siguientes importaciones**:
   ```typescript
   // Importación por defecto y nombrada
   import Calculadora, { PI, E } from './utils'
   import ApiService, { UsuarioService, ProductoService } from './services'
   
   // Importaciones de tipos solo para tipado
   import type { Usuario, Producto } from './utils'
   import type { Estado, Prioridad } from './types'
   ```

7. **Crea ejemplos de uso** para todas las importaciones.

### Criterios de Evaluación
- ✅ Las importaciones están correctamente definidas
- ✅ Se usan diferentes tipos de importaciones
- ✅ Los alias están bien utilizados
- ✅ Las importaciones de tipos funcionan correctamente
- ✅ El código es funcional y bien estructurado

---

## Ejercicio 3: Re-exportaciones

### Objetivo
Crear archivos de índice que re-exporten elementos de otros módulos.

### Instrucciones

1. **Crea un archivo** `index.ts` en la carpeta `src`

2. **Implementa las siguientes re-exportaciones**:
   ```typescript
   // Re-exportación simple
   export { sumar, restar, multiplicar, dividir } from './utils'
   export { Usuario } from './utils'
   export { Estado, Prioridad, Producto, DiaSemana } from './types'
   export { UsuarioService, ProductoService } from './services'
   
   // Re-exportación con alias
   export { sumar as suma, restar as resta } from './utils'
   export { Usuario as UsuarioType } from './utils'
   
   // Re-exportación de todo
   export * from './utils'
   export * from './types'
   export * from './services'
   
   // Re-exportación por defecto
   export { default as Calculadora } from './utils'
   export { default as ApiService } from './services'
   ```

3. **Crea un archivo** `math/index.ts` en la carpeta `src`

4. **Implementa las siguientes re-exportaciones**:
   ```typescript
   // Re-exportación de funciones matemáticas
   export { sumar, restar, multiplicar, dividir } from '../utils'
   export { PI, E } from '../utils'
   export { default as Calculadora } from '../utils'
   
   // Re-exportación de todo con alias
   export * as MathUtils from '../utils'
   ```

5. **Crea un archivo** `types/index.ts` en la carpeta `src`

6. **Implementa las siguientes re-exportaciones**:
   ```typescript
   // Re-exportación de tipos
   export { Estado, Prioridad, Producto, DiaSemana } from '../types'
   export { Usuario } from '../utils'
   
   // Re-exportación de todo con alias
   export * as Types from '../types'
   export * as Utils from '../utils'
   ```

7. **Crea un archivo** `services/index.ts` en la carpeta `src`

8. **Implementa las siguientes re-exportaciones**:
   ```typescript
   // Re-exportación de servicios
   export { UsuarioService, ProductoService } from '../services'
   export { default as ApiService } from '../services'
   
   // Re-exportación de todo con alias
   export * as Services from '../services'
   ```

9. **Crea ejemplos de uso** para todas las re-exportaciones.

### Criterios de Evaluación
- ✅ Las re-exportaciones están correctamente definidas
- ✅ Se usan diferentes tipos de re-exportaciones
- ✅ Los alias están bien utilizados
- ✅ La organización de módulos es clara
- ✅ El código es mantenible y extensible

---

## Ejercicio 4: Módulos con Genéricos

### Objetivo
Crear módulos que exporten e importen elementos genéricos.

### Instrucciones

1. **Crea un archivo** `generics.ts` en la carpeta `src`

2. **Implementa las siguientes exportaciones genéricas**:
   ```typescript
   // Exportaciones de interfaces genéricas
   export interface Repository<T> {
       findById(id: string): T | undefined;
       save(entity: T): void;
       delete(id: string): boolean;
   }
   
   export interface Cache<T> {
       set(key: string, value: T): void;
       get(key: string): T | undefined;
       delete(key: string): boolean;
   }
   
   // Exportaciones de clases genéricas
   export class GenericRepository<T> implements Repository<T> {
       // Implementación
   }
   
   export class GenericCache<T> implements Cache<T> {
       // Implementación
   }
   
   // Exportaciones de funciones genéricas
   export function crearArray<T>(...elementos: T[]): T[]
   export function filtrarArray<T>(array: T[], predicado: (item: T) => boolean): T[]
   export function mapearArray<T, U>(array: T[], transformador: (item: T) => U): U[]
   ```

3. **Crea un archivo** `types-generics.ts` en la carpeta `src`

4. **Implementa las siguientes exportaciones de tipos genéricos**:
   ```typescript
   // Exportaciones de tipos genéricos
   export type Partial<T> = {
       [P in keyof T]?: T[P];
   };
   
   export type Required<T> = {
       [P in keyof T]-?: T[P];
   };
   
   export type Readonly<T> = {
       readonly [P in keyof T]: T[P];
   };
   
   // Exportaciones de tipos condicionales
   export type EsString<T> = T extends string ? true : false;
   export type EsNumber<T> = T extends number ? true : false;
   export type EsArray<T> = T extends any[] ? true : false;
   ```

5. **Crea un archivo** `main-generics.ts` en la carpeta `src`

6. **Implementa las siguientes importaciones genéricas**:
   ```typescript
   // Importaciones de interfaces genéricas
   import { Repository, Cache } from './generics'
   import { GenericRepository, GenericCache } from './generics'
   
   // Importaciones de funciones genéricas
   import { crearArray, filtrarArray, mapearArray } from './generics'
   
   // Importaciones de tipos genéricos
   import { Partial, Required, Readonly } from './types-generics'
   import { EsString, EsNumber, EsArray } from './types-generics'
   ```

7. **Crea ejemplos de uso** para todas las importaciones genéricas.

### Criterios de Evaluación
- ✅ Las exportaciones genéricas están correctamente definidas
- ✅ Las importaciones genéricas funcionan correctamente
- ✅ Se usan restricciones apropiadamente
- ✅ Los tipos genéricos son reutilizables
- ✅ El código es type-safe

---

## Ejercicio 5: Sistema Completo de Módulos

### Objetivo
Crear un sistema completo de módulos que demuestre todas las características de módulos en TypeScript.

### Instrucciones

1. **Crea la siguiente estructura de carpetas**:
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

2. **Implementa el módulo `components/Button.ts`**:
   ```typescript
   export interface ButtonProps {
       texto: string;
       onClick: () => void;
       disabled?: boolean;
   }
   
   export class Button {
       // Implementación
   }
   
   export default Button;
   ```

3. **Implementa el módulo `components/Input.ts`**:
   ```typescript
   export interface InputProps {
       valor: string;
       onChange: (valor: string) => void;
       placeholder?: string;
   }
   
   export class Input {
       // Implementación
   }
   
   export default Input;
   ```

4. **Implementa el módulo `components/index.ts`**:
   ```typescript
   export { Button, ButtonProps } from './Button';
   export { Input, InputProps } from './Input';
   export { default as ButtonDefault } from './Button';
   export { default as InputDefault } from './Input';
   ```

5. **Implementa el módulo `utils/math.ts`**:
   ```typescript
   export function sumar(a: number, b: number): number
   export function restar(a: number, b: number): number
   export function multiplicar(a: number, b: number): number
   export function dividir(a: number, b: number): number
   export const PI = 3.14159
   export default class Calculadora {
       // Implementación
   }
   ```

6. **Implementa el módulo `utils/string.ts`**:
   ```typescript
   export function capitalizar(texto: string): string
   export function invertir(texto: string): string
   export function limpiar(texto: string): string
   export default class StringUtils {
       // Implementación
   }
   ```

7. **Implementa el módulo `utils/index.ts`**:
   ```typescript
   export * from './math';
   export * from './string';
   export { default as Calculadora } from './math';
   export { default as StringUtils } from './string';
   ```

8. **Implementa el módulo `types/user.ts`**:
   ```typescript
   export interface Usuario {
       id: number;
       nombre: string;
       email: string;
       activo: boolean;
   }
   
   export type EstadoUsuario = "activo" | "inactivo" | "pendiente";
   export default Usuario;
   ```

9. **Implementa el módulo `types/product.ts`**:
   ```typescript
   export interface Producto {
       id: number;
       nombre: string;
       precio: number;
       categoria: string;
   }
   
   export type CategoriaProducto = "electrónicos" | "ropa" | "hogar";
   export default Producto;
   ```

10. **Implementa el módulo `types/index.ts`**:
    ```typescript
    export * from './user';
    export * from './product';
    export { default as Usuario } from './user';
    export { default as Producto } from './product';
    ```

11. **Implementa el módulo `services/api.ts`**:
    ```typescript
    export class ApiService {
        // Implementación
    }
    
    export default ApiService;
    ```

12. **Implementa el módulo `services/auth.ts`**:
    ```typescript
    export class AuthService {
        // Implementación
    }
    
    export default AuthService;
    ```

13. **Implementa el módulo `services/index.ts`**:
    ```typescript
    export * from './api';
    export * from './auth';
    export { default as ApiService } from './api';
    export { default as AuthService } from './auth';
    ```

14. **Implementa el módulo `main.ts`**:
    ```typescript
    // Importaciones de todos los módulos
    import { Button, Input } from './components';
    import { sumar, restar, Calculadora } from './utils';
    import { Usuario, Producto } from './types';
    import { ApiService, AuthService } from './services';
    
    // Ejemplos de uso
    // ...
    ```

15. **Crea ejemplos de uso** que demuestren:
    - Uso de componentes
    - Uso de utilidades
    - Uso de tipos
    - Uso de servicios
    - Integración entre módulos

### Criterios de Evaluación
- ✅ El sistema está completo y funcional
- ✅ Se usan todas las características de módulos
- ✅ La organización de módulos es clara
- ✅ Las re-exportaciones funcionan correctamente
- ✅ El código es mantenible y extensible
- ✅ Se demuestra la integración entre módulos

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar exportaciones nombradas vs. por defecto?
2. ¿Cómo te ayuda la organización en módulos a mantener tu código?
3. ¿Qué ventajas ves en las re-exportaciones?
4. ¿Cómo los módulos mejoran la reutilización de código?
5. ¿Qué consideraciones tienes al diseñar la estructura de módulos?

---

**Tiempo estimado**: 120-150 minutos
**Dificultad**: Intermedia-Avanzada

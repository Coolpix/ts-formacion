# Ejercicios - Genéricos (Generics)

## Ejercicio 1: Funciones Genéricas

### Objetivo
Crear funciones genéricas reutilizables para diferentes tipos de datos.

### Instrucciones

1. **Crea un archivo** `funciones-genericas.ts` en la carpeta `src`

2. **Implementa las siguientes funciones genéricas**:
   ```typescript
   // Función que devuelva el primer elemento de un array
   function obtenerPrimero<T>(array: T[]): T | undefined
   
   // Función que devuelva el último elemento de un array
   function obtenerUltimo<T>(array: T[]): T | undefined
   
   // Función que invierta un array
   function invertirArray<T>(array: T[]): T[]
   
   // Función que elimine duplicados
   function eliminarDuplicados<T>(array: T[]): T[]
   
   // Función que combine dos arrays
   function combinarArrays<T>(array1: T[], array2: T[]): T[]
   ```

3. **Crea funciones genéricas con restricciones**:
   ```typescript
   // Función que obtenga propiedades de un objeto
   function obtenerPropiedades<T, K extends keyof T>(objeto: T, claves: K[]): Pick<T, K>
   
   // Función que actualice propiedades de un objeto
   function actualizarPropiedades<T, K extends keyof T>(objeto: T, actualizaciones: Partial<Pick<T, K>>): T
   
   // Función que valide tipos
   function validarTipo<T>(valor: unknown, tipo: string): valor is T
   ```

4. **Implementa funciones genéricas con tipos condicionales**:
   ```typescript
   // Función que procese valores según su tipo
   function procesarValor<T>(valor: T): T extends string ? string : T extends number ? number : T
   
   // Función que determine si un valor es un array
   function esArray<T>(valor: T): T extends any[] ? true : false
   ```

5. **Crea funciones genéricas para arrays**:
   - Filtrar elementos por criterio
   - Mapear elementos con transformación
   - Reducir elementos a un valor
   - Agrupar elementos por criterio

6. **Crea ejemplos de uso** para todas las funciones.

### Criterios de Evaluación
- ✅ Las funciones genéricas son reutilizables
- ✅ Se usan restricciones apropiadamente
- ✅ Los tipos condicionales funcionan correctamente
- ✅ Se manejan casos edge apropiadamente
- ✅ El código es type-safe

---

## Ejercicio 2: Interfaces Genéricas

### Objetivo
Crear interfaces genéricas para definir contratos reutilizables.

### Instrucciones

1. **Crea un archivo** `interfaces-genericas.ts` en la carpeta `src`

2. **Define las siguientes interfaces genéricas**:
   ```typescript
   interface Repositorio<T> {
       crear(elemento: T): void;
       obtener(id: string): T | undefined;
       actualizar(elemento: T): void;
       eliminar(id: string): boolean;
       obtenerTodos(): T[];
   }
   
   interface Cache<T> {
       establecer(clave: string, valor: T): void;
       obtener(clave: string): T | undefined;
       eliminar(clave: string): boolean;
       limpiar(): void;
   }
   
   interface Validador<T> {
       validar(valor: T): boolean;
       obtenerErrores(valor: T): string[];
   }
   ```

3. **Crea interfaces genéricas con restricciones**:
   ```typescript
   interface Comparable<T> {
       comparar(otro: T): number;
   }
   
   interface ListaOrdenada<T extends Comparable<T>> {
       agregar(elemento: T): void;
       obtenerTodos(): T[];
       ordenar(): void;
   }
   ```

4. **Implementa interfaces genéricas con múltiples parámetros**:
   ```typescript
   interface Mapeo<K, V> {
       establecer(clave: K, valor: V): void;
       obtener(clave: K): V | undefined;
       eliminar(clave: K): boolean;
       existe(clave: K): boolean;
   }
   ```

5. **Crea interfaces genéricas con tipos condicionales**:
   ```typescript
   interface Procesador<T> {
       procesar(valor: T): T extends string ? string : T extends number ? number : T;
       validar(valor: T): boolean;
   }
   ```

6. **Implementa clases que usen estas interfaces**:
   - `RepositorioImpl<T>`: implementa `Repositorio<T>`
   - `CacheImpl<T>`: implementa `Cache<T>`
   - `ValidadorImpl<T>`: implementa `Validador<T>`
   - `ListaOrdenadaImpl<T>`: implementa `ListaOrdenada<T>`
   - `MapeoImpl<K, V>`: implementa `Mapeo<K, V>`

7. **Crea ejemplos de uso** que demuestren la funcionalidad.

### Criterios de Evaluación
- ✅ Las interfaces genéricas están correctamente definidas
- ✅ Se usan restricciones apropiadamente
- ✅ Las implementaciones son correctas
- ✅ Se demuestra la reutilización de código
- ✅ Los tipos están bien definidos

---

## Ejercicio 3: Clases Genéricas

### Objetivo
Crear clases genéricas reutilizables para diferentes tipos de datos.

### Instrucciones

1. **Crea un archivo** `clases-genericas.ts` en la carpeta `src`

2. **Implementa la clase genérica `Pila<T>`**:
   ```typescript
   class Pila<T> {
       private elementos: T[];
       
       constructor();
       public apilar(elemento: T): void;
       public desapilar(): T | undefined;
       public obtenerCima(): T | undefined;
       public estaVacia(): boolean;
       public obtenerTamaño(): number;
   }
   ```

3. **Implementa la clase genérica `Cola<T>`**:
   ```typescript
   class Cola<T> {
       private elementos: T[];
       
       constructor();
       public encolar(elemento: T): void;
       public desencolar(): T | undefined;
       public obtenerFrente(): T | undefined;
       public estaVacia(): boolean;
       public obtenerTamaño(): number;
   }
   ```

4. **Implementa la clase genérica `Diccionario<K, V>`**:
   ```typescript
   class Diccionario<K, V> {
       private elementos: Map<K, V>;
       
       constructor();
       public agregar(clave: K, valor: V): void;
       public obtener(clave: K): V | undefined;
       public eliminar(clave: K): boolean;
       public existe(clave: K): boolean;
       public obtenerClaves(): K[];
       public obtenerValores(): V[];
       public obtenerTamaño(): number;
   }
   ```

5. **Implementa la clase genérica `Cache<T>` con restricciones**:
   ```typescript
   interface Cacheable {
       obtenerId(): string;
   }
   
   class Cache<T extends Cacheable> {
       private elementos: Map<string, T>;
       private maxSize: number;
       
       constructor(maxSize: number);
       public agregar(elemento: T): void;
       public obtener(id: string): T | undefined;
       public eliminar(id: string): boolean;
       public limpiar(): void;
       public obtenerTamaño(): number;
   }
   ```

6. **Crea clases que implementen `Cacheable`**:
   - `UsuarioCacheable`: con propiedades `id`, `nombre`, `email`
   - `ProductoCacheable`: con propiedades `id`, `nombre`, `precio`

7. **Implementa la clase genérica `Repositorio<T>`**:
   ```typescript
   interface Entidad {
       id: string;
   }
   
   class Repositorio<T extends Entidad> {
       private elementos: Map<string, T>;
       
       constructor();
       public crear(elemento: T): void;
       public obtener(id: string): T | undefined;
       public actualizar(elemento: T): void;
       public eliminar(id: string): boolean;
       public obtenerTodos(): T[];
       public buscar(predicado: (elemento: T) => boolean): T[];
   }
   ```

8. **Crea ejemplos de uso** para todas las clases genéricas.

### Criterios de Evaluación
- ✅ Las clases genéricas están correctamente implementadas
- ✅ Se usan restricciones apropiadamente
- ✅ Los tipos genéricos son reutilizables
- ✅ Se manejan casos edge apropiadamente
- ✅ El código es type-safe

---

## Ejercicio 4: Tipos Genéricos

### Objetivo
Crear tipos genéricos reutilizables para diferentes casos de uso.

### Instrucciones

1. **Crea un archivo** `tipos-genericos.ts` en la carpeta `src`

2. **Define tipos genéricos básicos**:
   ```typescript
   // Tipo genérico para contenedor
   type Contenedor<T> = {
       contenido: T;
       obtener(): T;
   };
   
   // Tipo genérico para par
   type Par<T, U> = {
       primero: T;
       segundo: U;
   };
   
   // Tipo genérico para resultado
   type Resultado<T, E = Error> = {
       exito: true;
       datos: T;
   } | {
       exito: false;
       error: E;
   };
   ```

3. **Crea tipos genéricos con restricciones**:
   ```typescript
   // Tipo genérico con restricción
   type ClaveValor<K extends string, V> = {
       [P in K]: V;
   };
   
   // Tipo genérico con restricción de objeto
   type PropiedadesOpcionales<T extends Record<string, any>> = {
       [K in keyof T]?: T[K];
   };
   ```

4. **Implementa tipos genéricos con tipos condicionales**:
   ```typescript
   // Tipo condicional para arrays
   type EsArray<T> = T extends any[] ? true : false;
   
   // Tipo condicional para strings
   type EsString<T> = T extends string ? true : false;
   
   // Tipo condicional para números
   type EsNumber<T> = T extends number ? true : false;
   ```

5. **Crea tipos genéricos con mapeo**:
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
   ```

6. **Implementa tipos genéricos con utilidades**:
   ```typescript
   // Tipo genérico con Partial
   type Parcial<T> = Partial<T>;
   
   // Tipo genérico con Required
   type Requerido<T> = Required<T>;
   
   // Tipo genérico con Readonly
   type SoloLectura<T> = Readonly<T>;
   
   // Tipo genérico con Pick
   type Seleccionar<T, K extends keyof T> = Pick<T, K>;
   
   // Tipo genérico con Omit
   type Omitir<T, K extends keyof T> = Omit<T, K>;
   ```

7. **Crea tipos genéricos con tipos de unión**:
   ```typescript
   // Tipo genérico con unión
   type Union<T, U> = T | U;
   
   // Tipo genérico con intersección
   type Interseccion<T, U> = T & U;
   
   // Tipo genérico con exclusión
   type Excluir<T, U> = T extends U ? never : T;
   ```

8. **Crea ejemplos de uso** para todos los tipos genéricos.

### Criterios de Evaluación
- ✅ Los tipos genéricos están correctamente definidos
- ✅ Se usan restricciones apropiadamente
- ✅ Los tipos condicionales funcionan correctamente
- ✅ Se demuestra la reutilización de tipos
- ✅ Los tipos son type-safe

---

## Ejercicio 5: Sistema Completo de Genéricos

### Objetivo
Crear un sistema completo que demuestre el uso de todas las características de genéricos en TypeScript.

### Instrucciones

1. **Crea un archivo** `sistema-genericos.ts` en la carpeta `src`

2. **Implementa un sistema de gestión de datos** con:
   - Interfaces genéricas para repositorios
   - Clases genéricas para almacenamiento
   - Tipos genéricos para resultados
   - Funciones genéricas para procesamiento

3. **Implementa un sistema de validación** con:
   - Interfaces genéricas para validadores
   - Clases genéricas para reglas de validación
   - Tipos genéricos para errores
   - Funciones genéricas para validación

4. **Implementa un sistema de transformación** con:
   - Interfaces genéricas para transformadores
   - Clases genéricas para procesadores
   - Tipos genéricos para configuraciones
   - Funciones genéricas para transformación

5. **Implementa un sistema de caché** con:
   - Interfaces genéricas para caché
   - Clases genéricas para almacenamiento
   - Tipos genéricos para políticas
   - Funciones genéricas para gestión

6. **Implementa un sistema de logging** con:
   - Interfaces genéricas para loggers
   - Clases genéricas para diferentes tipos de log
   - Tipos genéricos para niveles
   - Funciones genéricas para formateo

7. **Crea ejemplos de uso** que demuestren:
   - Gestión de datos de usuario
   - Validación de formularios
   - Transformación de datos de API
   - Caché de resultados de consultas
   - Sistema de logging completo

### Criterios de Evaluación
- ✅ El sistema está completo y funcional
- ✅ Se usan todas las características de genéricos
- ✅ Las interfaces están bien diseñadas
- ✅ Las clases son reutilizables
- ✅ Los tipos son type-safe
- ✅ El código es mantenible y extensible

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar genéricos vs. tipos específicos?
2. ¿Cómo te ayudan las restricciones a crear código más seguro?
3. ¿Qué ventajas ves en los tipos condicionales?
4. ¿Cómo los genéricos mejoran la reutilización de código?
5. ¿Qué consideraciones tienes al diseñar interfaces genéricas?

---

**Tiempo estimado**: 180-210 minutos
**Dificultad**: Avanzada

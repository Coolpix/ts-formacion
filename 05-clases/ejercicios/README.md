# Ejercicios - Clases y Herencia

## Ejercicio 1: Clases Básicas

### Objetivo
Crear clases básicas con propiedades, métodos y modificadores de acceso.

### Instrucciones

1. **Crea un archivo** `clases-basicas.ts` en la carpeta `src`

2. **Implementa la clase `Usuario`** con:
   - Propiedades: `id` (readonly), `nombre`, `email`, `fechaRegistro` (readonly)
   - Constructor que reciba nombre y email
   - Métodos: `obtenerInfo()`, `actualizarEmail()`, `esValido()`
   - Getters y setters para nombre y email con validación

3. **Implementa la clase `Producto`** con:
   - Propiedades: `id` (readonly), `nombre`, `precio`, `stock`, `categoria`
   - Constructor que reciba nombre, precio y categoria
   - Métodos: `actualizarPrecio()`, `actualizarStock()`, `estaDisponible()`, `obtenerInfo()`
   - Propiedades estáticas: `version`, `contador`
   - Método estático: `generarId()`

4. **Implementa la clase `Calculadora`** con:
   - Propiedades privadas: `historial`, `resultado`
   - Métodos públicos: `sumar()`, `restar()`, `multiplicar()`, `dividir()`
   - Métodos privados: `agregarAlHistorial()`, `validarDivision()`
   - Métodos públicos: `obtenerHistorial()`, `limpiarHistorial()`

5. **Crea ejemplos de uso** para todas las clases.

### Criterios de Evaluación
- ✅ Las clases están correctamente definidas
- ✅ Se usan modificadores de acceso apropiadamente
- ✅ Los getters y setters incluyen validación
- ✅ Las propiedades readonly están correctamente implementadas
- ✅ Los métodos estáticos funcionan correctamente

---

## Ejercicio 2: Herencia de Clases

### Objetivo
Crear un sistema de herencia con clases base y derivadas.

### Instrucciones

1. **Crea un archivo** `herencia-clases.ts` en la carpeta `src`

2. **Implementa la clase base `Empleado`**:
   ```typescript
   class Empleado {
       protected nombre: string;
       protected salario: number;
       protected departamento: string;
       protected fechaContratacion: Date;
       
       constructor(nombre: string, salario: number, departamento: string);
       public obtenerInfo(): string;
       public calcularSalarioAnual(): number;
       protected calcularAntiguedad(): number;
   }
   ```

3. **Crea clases derivadas**:
   - `Desarrollador`: extiende `Empleado` con propiedades `lenguajes`, `experiencia`
   - `Gerente`: extiende `Empleado` con propiedades `equipo`, `presupuesto`
   - `Vendedor`: extiende `Empleado` con propiedades `ventas`, `comision`

4. **Implementa métodos específicos** para cada clase derivada:
   - `Desarrollador`: `agregarLenguaje()`, `obtenerLenguajes()`, `calcularSalarioConBonus()`
   - `Gerente`: `agregarEmpleado()`, `obtenerEquipo()`, `calcularSalarioConBonus()`
   - `Vendedor`: `agregarVenta()`, `obtenerVentas()`, `calcularSalarioConComision()`

5. **Crea una clase abstracta `Forma`**:
   ```typescript
   abstract class Forma {
       protected color: string;
       protected area: number;
       
       constructor(color: string);
       abstract calcularArea(): number;
       abstract calcularPerimetro(): number;
       public obtenerColor(): string;
       public cambiarColor(color: string): void;
   }
   ```

6. **Implementa clases concretas** que extiendan `Forma`:
   - `Rectangulo`: con propiedades `ancho`, `alto`
   - `Circulo`: con propiedad `radio`
   - `Triangulo`: con propiedades `base`, `altura`

7. **Crea ejemplos de uso** que demuestren la herencia.

### Criterios de Evaluación
- ✅ La herencia está correctamente implementada
- ✅ Se usan métodos protegidos apropiadamente
- ✅ Las clases abstractas están correctamente definidas
- ✅ Los métodos abstractos están implementados
- ✅ Se aprovecha la reutilización de código

---

## Ejercicio 3: Interfaces con Clases

### Objetivo
Implementar interfaces con clases para definir contratos.

### Instrucciones

1. **Crea un archivo** `interfaces-clases.ts` en la carpeta `src`

2. **Define las siguientes interfaces**:
   ```typescript
   interface Reproducible {
       reproducir(): void;
       pausar(): void;
       detener(): void;
   }
   
   interface Almacenable {
       guardar(): void;
       cargar(): void;
   }
   
   interface Configurable {
       configurar(opciones: any): void;
       obtenerConfiguracion(): any;
   }
   ```

3. **Implementa clases que usen estas interfaces**:
   - `ReproductorMusica`: implementa `Reproducible` y `Configurable`
   - `ReproductorVideo`: implementa `Reproducible` y `Almacenable`
   - `ReproductorCompleto`: implementa todas las interfaces

4. **Crea una interface `Comparable<T>`**:
   ```typescript
   interface Comparable<T> {
       comparar(otro: T): number;
   }
   ```

5. **Implementa clases que implementen `Comparable<T>`**:
   - `ProductoComparable`: con propiedades `nombre`, `precio`
   - `UsuarioComparable`: con propiedades `nombre`, `edad`
   - `FechaComparable`: con propiedad `fecha`

6. **Crea una clase genérica `ListaOrdenada<T>`** que:
   - Use la interface `Comparable<T>`
   - Permita agregar, eliminar y obtener elementos
   - Mantenga los elementos ordenados

7. **Crea ejemplos de uso** que demuestren la implementación de interfaces.

### Criterios de Evaluación
- ✅ Las interfaces están correctamente definidas
- ✅ Las clases implementan las interfaces apropiadamente
- ✅ Se usan interfaces genéricas correctamente
- ✅ La clase genérica funciona con diferentes tipos
- ✅ Se demuestra la flexibilidad de las interfaces

---

## Ejercicio 4: Clases Genéricas

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

5. **Implementa la clase genérica `Cache<T>`** con restricciones:
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

## Ejercicio 5: Sistema Completo de Clases

### Objetivo
Crear un sistema completo que demuestre el uso de todas las características de clases en TypeScript.

### Instrucciones

1. **Crea un archivo** `sistema-clases.ts` en la carpeta `src`

2. **Implementa un sistema de gestión de biblioteca** con:
   - Clase base `Item` (abstracta)
   - Clases derivadas `Libro`, `Revista`, `DVD`
   - Interface `Prestable`
   - Clase `Usuario` con diferentes tipos
   - Clase `Biblioteca` para gestionar todo

3. **Implementa un sistema de gestión de empleados** con:
   - Clase abstracta `Empleado`
   - Clases derivadas para diferentes tipos de empleados
   - Interface `Evaluable`
   - Clase genérica `Departamento<T>`
   - Sistema de nóminas y evaluaciones

4. **Implementa un sistema de gestión de inventario** con:
   - Clase genérica `Inventario<T>`
   - Clases para diferentes tipos de productos
   - Interface `Vendible`
   - Sistema de alertas y notificaciones
   - Generación de reportes

5. **Crea un sistema de validación** con:
   - Clase abstracta `Validador<T>`
   - Clases concretas para diferentes tipos de validación
   - Interface `Validable`
   - Sistema de reglas y mensajes de error

6. **Implementa un sistema de logging** con:
   - Clase abstracta `Logger`
   - Clases concretas para diferentes tipos de logging
   - Interface `Loggeable`
   - Sistema de niveles y formateo

7. **Crea ejemplos de uso** que demuestren:
   - Gestión completa de biblioteca
   - Gestión de empleados y departamentos
   - Control de inventario
   - Validación de datos
   - Sistema de logging

### Criterios de Evaluación
- ✅ El sistema está completo y funcional
- ✅ Se usan todas las características de clases
- ✅ La herencia está bien diseñada
- ✅ Las interfaces definen contratos claros
- ✅ Las clases genéricas son reutilizables
- ✅ El código es mantenible y extensible

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar clases vs. interfaces?
2. ¿Cómo te ayuda la herencia a organizar tu código?
3. ¿Qué ventajas ves en las clases abstractas?
4. ¿Cómo las clases genéricas mejoran la reutilización?
5. ¿Qué consideraciones tienes al diseñar jerarquías de clases?

---

**Tiempo estimado**: 150-180 minutos
**Dificultad**: Avanzada

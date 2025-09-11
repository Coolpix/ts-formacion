# Ejercicios - Interfaces y Tipos Personalizados

## Ejercicio 1: Interfaces Básicas

### Objetivo
Crear interfaces básicas para modelar un sistema de biblioteca.

### Instrucciones

1. **Crea un archivo** `biblioteca.ts` en la carpeta `src`

2. **Define las siguientes interfaces**:
   ```typescript
   interface Libro {
       id: number;
       titulo: string;
       autor: string;
       isbn: string;
       disponible: boolean;
       fechaPublicacion: Date;
       genero?: string;
   }
   
   interface Usuario {
       id: number;
       nombre: string;
       email: string;
       telefono?: string;
       fechaRegistro: Date;
       librosPrestados: number[];
   }
   
   interface Prestamo {
       id: number;
       libroId: number;
       usuarioId: number;
       fechaPrestamo: Date;
       fechaDevolucion: Date;
       devuelto: boolean;
   }
   ```

3. **Implementa funciones** que:
   - Creen un nuevo libro
   - Creen un nuevo usuario
   - Realicen un préstamo
   - Devuelvan un libro
   - Busquen libros por autor
   - Muestren los libros prestados por un usuario

4. **Crea algunos datos de ejemplo** y prueba todas las funciones.

### Criterios de Evaluación
- ✅ Las interfaces están correctamente definidas
- ✅ Las funciones manejan todos los casos necesarios
- ✅ Se incluyen validaciones apropiadas
- ✅ El código es limpio y bien estructurado

---

## Ejercicio 2: Herencia de Interfaces

### Objetivo
Crear un sistema de herencia de interfaces para diferentes tipos de vehículos.

### Instrucciones

1. **Crea un archivo** `vehiculos.ts` en la carpeta `src`

2. **Define la interfaz base**:
   ```typescript
   interface Vehiculo {
       marca: string;
       modelo: string;
       año: number;
       velocidad: number;
       acelerar(): void;
       frenar(): void;
       obtenerInfo(): string;
   }
   ```

3. **Crea interfaces que extiendan Vehiculo**:
   - `Coche`: con propiedades `puertas`, `combustible`, método `abrirMaletero()`
   - `Moto`: con propiedades `cilindrada`, `tipo`, método `hacerCaballito()`
   - `Camion`: con propiedades `capacidad`, `ejes`, método `cargar()`

4. **Crea una interfaz adicional**:
   ```typescript
   interface VehiculoElectrico {
       bateria: number;
       autonomia: number;
       cargar(): void;
       obtenerAutonomia(): number;
   }
   ```

5. **Combina las interfaces** para crear:
   - `CocheElectrico`: que extienda `Coche` e implemente `VehiculoElectrico`
   - `MotoElectrica`: que extienda `Moto` e implemente `VehiculoElectrico`

6. **Implementa todas las interfaces** con clases o objetos y crea ejemplos de uso.

### Criterios de Evaluación
- ✅ La herencia de interfaces está correctamente implementada
- ✅ Se manejan múltiples herencias apropiadamente
- ✅ Todas las propiedades y métodos están implementados
- ✅ Los ejemplos de uso demuestran la funcionalidad

---

## Ejercicio 3: Interfaces vs Type Aliases

### Objetivo
Comparar y contrastar el uso de interfaces y type aliases en diferentes escenarios.

### Instrucciones

1. **Crea un archivo** `comparacion.ts` en la carpeta `src`

2. **Implementa lo mismo usando interfaces y type aliases**:

   **Escenario A: Sistema de Usuarios**
   - Crea una versión con `interface Usuario`
   - Crea una versión con `type Usuario`
   - Extiende/combina para crear `Admin` y `Cliente`

   **Escenario B: Sistema de Estados**
   - Crea union types para estados de pedido
   - Crea intersection types para configuraciones
   - Combina múltiples tipos

   **Escenario C: Sistema de Funciones**
   - Crea interfaces de función
   - Crea type aliases de función
   - Implementa call signatures

3. **Documenta las diferencias** que observes entre ambos enfoques.

4. **Crea ejemplos** que demuestren cuándo usar cada uno.

### Criterios de Evaluación
- ✅ Se implementan ambos enfoques correctamente
- ✅ Se documentan las diferencias claramente
- ✅ Los ejemplos son representativos
- ✅ Se justifica cuándo usar cada enfoque

---

## Ejercicio 4: Interfaces Avanzadas

### Objetivo
Crear interfaces complejas con propiedades de índice, métodos opcionales y genéricos.

### Instrucciones

1. **Crea un archivo** `interfaces-avanzadas.ts` en la carpeta `src`

2. **Implementa las siguientes interfaces**:

   **A. Sistema de Cache**
   ```typescript
   interface Cache<T> {
       [key: string]: T;
       maxSize: number;
       currentSize: number;
       set(key: string, value: T): void;
       get(key: string): T | undefined;
       clear(): void;
       has(key: string): boolean;
   }
   ```

   **B. Sistema de Eventos**
   ```typescript
   interface EventEmitter {
       on(event: string, callback: Function): void;
       off(event: string, callback: Function): void;
       emit(event: string, ...args: any[]): void;
       once?(event: string, callback: Function): void;
   }
   ```

   **C. Sistema de Validación**
   ```typescript
   interface Validador<T> {
       validar(valor: T): boolean;
       mensajeError?: string;
       reglas?: ReglaValidacion<T>[];
   }
   
   interface ReglaValidacion<T> {
       nombre: string;
       validar(valor: T): boolean;
       mensaje: string;
   }
   ```

3. **Implementa todas las interfaces** con clases o funciones.

4. **Crea ejemplos de uso** que demuestren la funcionalidad completa.

5. **Añade interfaces híbridas** que combinen propiedades, métodos y call signatures.

### Criterios de Evaluación
- ✅ Las interfaces avanzadas están correctamente implementadas
- ✅ Se manejan propiedades de índice apropiadamente
- ✅ Los métodos opcionales funcionan correctamente
- ✅ Los genéricos se usan efectivamente
- ✅ Los ejemplos demuestran toda la funcionalidad

---

## Ejercicio 5: Sistema de E-commerce

### Objetivo
Crear un sistema completo de e-commerce usando interfaces.

### Instrucciones

1. **Crea un archivo** `ecommerce.ts` en la carpeta `src`

2. **Define las interfaces principales**:
   - `Producto`: con propiedades básicas y opcionales
   - `Cliente`: con información personal y preferencias
   - `Pedido`: con productos, cliente y estado
   - `Carrito`: para gestionar productos antes del pedido
   - `Pago`: para procesar pagos

3. **Crea interfaces especializadas**:
   - `ProductoDigital`: extiende `Producto` con propiedades específicas
   - `ProductoFisico`: extiende `Producto` con propiedades de envío
   - `ClienteVIP`: extiende `Cliente` con beneficios especiales

4. **Implementa un sistema de servicios**:
   - `ServicioProductos`: para gestionar productos
   - `ServicioClientes`: para gestionar clientes
   - `ServicioPedidos`: para gestionar pedidos
   - `ServicioPagos`: para procesar pagos

5. **Crea un flujo completo**:
   - Cliente se registra
   - Cliente agrega productos al carrito
   - Cliente realiza un pedido
   - Se procesa el pago
   - Se actualiza el inventario

### Criterios de Evaluación
- ✅ El sistema está completo y funcional
- ✅ Las interfaces están bien diseñadas
- ✅ Se manejan todos los casos de uso
- ✅ El código es mantenible y extensible
- ✅ Se incluyen validaciones apropiadas

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar interfaces vs. type aliases?
2. ¿Cómo te ayuda la herencia de interfaces a organizar tu código?
3. ¿Qué ventajas ves en las propiedades de índice?
4. ¿Cómo los genéricos mejoran la reutilización de interfaces?
5. ¿Qué consideraciones tienes al diseñar interfaces para sistemas grandes?

---

**Tiempo estimado**: 90-120 minutos
**Dificultad**: Intermedia-Avanzada

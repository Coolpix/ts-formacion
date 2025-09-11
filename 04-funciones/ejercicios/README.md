# Ejercicios - Funciones y Parámetros Tipados

## Ejercicio 1: Funciones Básicas con Tipos

### Objetivo
Crear funciones básicas con tipos explícitos y aprovechar la inferencia de tipos.

### Instrucciones

1. **Crea un archivo** `funciones-basicas.ts` en la carpeta `src`

2. **Implementa las siguientes funciones**:
   ```typescript
   // Función que calcule el área de un rectángulo
   function calcularAreaRectangulo(ancho: number, alto: number): number
   
   // Función que determine si un número es par
   function esPar(numero: number): boolean
   
   // Función que convierta grados Celsius a Fahrenheit
   function celsiusAFahrenheit(celsius: number): number
   
   // Función que genere un saludo personalizado
   function generarSaludo(nombre: string, hora?: number): string
   
   // Función que procese una lista de números
   function procesarNumeros(numeros: number[]): { suma: number; promedio: number; maximo: number; minimo: number }
   ```

3. **Crea funciones de flecha** para:
   - Duplicar un número
   - Verificar si un string está vacío
   - Obtener la longitud de un array
   - Crear un objeto con propiedades calculadas

4. **Implementa funciones con parámetros opcionales**:
   - Crear un usuario con datos opcionales
   - Configurar una conexión de base de datos
   - Crear un mensaje con formato opcional

5. **Prueba todas las funciones** con diferentes valores y tipos.

### Criterios de Evaluación
- ✅ Todas las funciones tienen tipos explícitos apropiados
- ✅ Se aprovecha la inferencia de tipos donde es apropiado
- ✅ Los parámetros opcionales están correctamente implementados
- ✅ Las funciones manejan casos edge apropiadamente
- ✅ El código es limpio y bien documentado

---

## Ejercicio 2: Sobrecarga de Funciones

### Objetivo
Implementar sobrecarga de funciones para manejar diferentes tipos de entrada y salida.

### Instrucciones

1. **Crea un archivo** `sobrecarga-funciones.ts` en la carpeta `src`

2. **Implementa sobrecarga para una función de conversión**:
   ```typescript
   // Sobrecarga para convertir string a number
   function convertir(valor: string): number;
   // Sobrecarga para convertir number a string
   function convertir(valor: number): string;
   // Sobrecarga para convertir boolean a string
   function convertir(valor: boolean): string;
   ```

3. **Crea una función con sobrecarga para crear objetos**:
   ```typescript
   // Sobrecarga para crear usuario con objeto
   function crearUsuario(datos: { nombre: string; email: string }): Usuario;
   // Sobrecarga para crear usuario con parámetros individuales
   function crearUsuario(nombre: string, email: string): Usuario;
   // Sobrecarga para crear usuario con datos adicionales
   function crearUsuario(nombre: string, email: string, telefono: string): Usuario;
   ```

4. **Implementa sobrecarga para una función de búsqueda**:
   ```typescript
   // Buscar por ID (number)
   function buscar<T>(id: number): T | undefined;
   // Buscar por nombre (string)
   function buscar<T>(nombre: string): T[];
   // Buscar por criterios (object)
   function buscar<T>(criterios: Partial<T>): T[];
   ```

5. **Crea una función con sobrecarga para procesar arrays**:
   - Procesar array de números
   - Procesar array de strings
   - Procesar array de objetos

6. **Prueba todas las sobrecargas** con diferentes tipos de entrada.

### Criterios de Evaluación
- ✅ Las sobrecargas están correctamente definidas
- ✅ La implementación maneja todos los casos
- ✅ TypeScript infiere correctamente los tipos de retorno
- ✅ Se incluyen validaciones apropiadas
- ✅ Los ejemplos de uso demuestran la funcionalidad

---

## Ejercicio 3: Funciones Genéricas

### Objetivo
Crear funciones genéricas reutilizables para diferentes tipos de datos.

### Instrucciones

1. **Crea un archivo** `funciones-genericas.ts` en la carpeta `src`

2. **Implementa funciones genéricas básicas**:
   ```typescript
   // Función que devuelva el primer elemento de un array
   function obtenerPrimero<T>(array: T[]): T | undefined
   
   // Función que devuelva el último elemento de un array
   function obtenerUltimo<T>(array: T[]): T | undefined
   
   // Función que invierta un array
   function invertirArray<T>(array: T[]): T[]
   
   // Función que elimine duplicados
   function eliminarDuplicados<T>(array: T[]): T[]
   ```

3. **Crea funciones genéricas con restricciones**:
   ```typescript
   // Función que obtenga propiedades de un objeto
   function obtenerPropiedades<T, K extends keyof T>(objeto: T, claves: K[]): Pick<T, K>
   
   // Función que actualice propiedades de un objeto
   function actualizarPropiedades<T, K extends keyof T>(objeto: T, actualizaciones: Partial<Pick<T, K>>): T
   ```

4. **Implementa funciones genéricas con tipos condicionales**:
   ```typescript
   // Función que procese valores según su tipo
   function procesarValor<T>(valor: T): T extends string ? string : T extends number ? number : T
   
   // Función que valide tipos
   function validarTipo<T>(valor: unknown, tipo: string): valor is T
   ```

5. **Crea funciones genéricas para arrays**:
   - Filtrar elementos por criterio
   - Mapear elementos con transformación
   - Reducir elementos a un valor
   - Agrupar elementos por criterio

6. **Implementa funciones genéricas para objetos**:
   - Clonar objeto
   - Fusionar objetos
   - Obtener claves anidadas
   - Validar estructura de objeto

### Criterios de Evaluación
- ✅ Las funciones genéricas son reutilizables
- ✅ Se usan restricciones apropiadas
- ✅ Los tipos condicionales funcionan correctamente
- ✅ Se manejan casos edge apropiadamente
- ✅ El código es type-safe

---

## Ejercicio 4: Funciones de Orden Superior

### Objetivo
Crear funciones que reciban o devuelvan otras funciones.

### Instrucciones

1. **Crea un archivo** `funciones-orden-superior.ts` en la carpeta `src`

2. **Implementa funciones que reciban funciones como parámetros**:
   ```typescript
   // Función que ejecute otra función con logging
   function ejecutarConLogging<T>(funcion: () => T, mensaje: string): T
   
   // Función que retry una operación
   function reintentar<T>(funcion: () => T, maxIntentos: number): T
   
   // Función que cachee resultados
   function cachear<T, U>(funcion: (valor: T) => U): (valor: T) => U
   ```

3. **Crea funciones que devuelvan funciones**:
   ```typescript
   // Función que cree un multiplicador
   function crearMultiplicador(factor: number): (valor: number) => number
   
   // Función que cree un validador
   function crearValidador<T>(regla: (valor: T) => boolean): (valor: T) => boolean
   
   // Función que cree un transformador
   function crearTransformador<T, U>(transformacion: (valor: T) => U): (valor: T) => U
   ```

4. **Implementa funciones de composición**:
   ```typescript
   // Función que componga dos funciones
   function componer<T, U, V>(f: (valor: U) => V, g: (valor: T) => U): (valor: T) => V
   
   // Función que pipe múltiples funciones
   function pipe<T>(valor: T, ...funciones: Array<(valor: any) => any>): any
   ```

5. **Crea funciones de array con tipos**:
   - Filtrar con predicado tipado
   - Mapear con transformador tipado
   - Reducir con acumulador tipado
   - Agrupar con clave tipada

6. **Implementa funciones de validación**:
   - Validar esquema de objeto
   - Validar array de elementos
   - Validar función de callback
   - Validar parámetros de función

### Criterios de Evaluación
- ✅ Las funciones de orden superior están correctamente tipadas
- ✅ Se manejan los tipos de función apropiadamente
- ✅ La composición de funciones funciona correctamente
- ✅ Se incluyen validaciones de tipos
- ✅ Los ejemplos demuestran la funcionalidad

---

## Ejercicio 5: Sistema de Funciones Completo

### Objetivo
Crear un sistema completo que demuestre el uso de todas las características de funciones en TypeScript.

### Instrucciones

1. **Crea un archivo** `sistema-funciones.ts` en la carpeta `src`

2. **Implementa un sistema de procesamiento de datos** con:
   - Funciones básicas para validar datos
   - Funciones genéricas para transformar datos
   - Funciones de orden superior para procesar datos
   - Sobrecarga de funciones para diferentes tipos de entrada

3. **Crea un sistema de caché** con:
   - Función genérica para almacenar datos
   - Función para recuperar datos
   - Función para limpiar caché
   - Función para obtener estadísticas

4. **Implementa un sistema de validación** con:
   - Validadores para diferentes tipos
   - Validadores compuestos
   - Validadores con mensajes de error
   - Validadores asíncronos

5. **Crea un sistema de transformación** con:
   - Transformadores para diferentes tipos
   - Transformadores encadenables
   - Transformadores con validación
   - Transformadores asíncronos

6. **Implementa un sistema de logging** con:
   - Función de logging genérica
   - Diferentes niveles de log
   - Formateo de mensajes
   - Filtrado de logs

7. **Crea ejemplos de uso** que demuestren:
   - Procesamiento de datos de usuario
   - Validación de formularios
   - Transformación de datos de API
   - Caché de resultados de consultas

### Criterios de Evaluación
- ✅ El sistema está completo y funcional
- ✅ Se usan todas las características de funciones
- ✅ Los tipos están correctamente definidos
- ✅ Se manejan errores apropiadamente
- ✅ El código es mantenible y extensible

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar tipos explícitos vs. inferencia automática?
2. ¿Cómo te ayuda la sobrecarga de funciones a crear APIs más limpias?
3. ¿Qué ventajas ves en las funciones genéricas?
4. ¿Cómo las funciones de orden superior mejoran la reutilización de código?
5. ¿Qué consideraciones tienes al diseñar funciones para sistemas grandes?

---

**Tiempo estimado**: 120-150 minutos
**Dificultad**: Intermedia-Avanzada

# Ejercicios - Tipos Básicos y Anotaciones de Tipo

## Ejercicio 1: Tipos Primitivos y Arrays

### Objetivo
Practicar con tipos primitivos, arrays y tuplas.

### Instrucciones

1. **Crea un archivo** `tipos-primitivos.ts` en la carpeta `src`

2. **Define las siguientes variables** con tipos explícitos:
   - `nombre` (string): Tu nombre
   - `edad` (number): Tu edad
   - `esEstudiante` (boolean): Si eres estudiante o no
   - `hobbies` (array de strings): Lista de tus hobbies
   - `calificaciones` (array de números): Lista de calificaciones (ej: [8.5, 9.0, 7.5])

3. **Crea una tupla** que represente una coordenada GPS:
   - `coordenada` (tupla): [latitud: number, longitud: number]

4. **Crea una tupla** que represente información de un producto:
   - `producto` (tupla): [nombre: string, precio: number, disponible: boolean]

5. **Implementa funciones** que:
   - Calculen el promedio de las calificaciones
   - Muestren todos los hobbies en mayúsculas
   - Verifiquen si un producto está disponible

### Criterios de Evaluación
- ✅ Todas las variables tienen tipos explícitos
- ✅ Los arrays están correctamente tipados
- ✅ Las tuplas tienen la estructura correcta
- ✅ Las funciones tienen tipos de parámetros y retorno
- ✅ El código compila sin errores

---

## Ejercicio 2: Enums y Union Types

### Objetivo
Trabajar con enums y union types para crear código más expresivo.

### Instrucciones

1. **Crea un archivo** `enums-union.ts` en la carpeta `src`

2. **Define los siguientes enums**:
   ```typescript
   enum DiaSemana {
       Lunes = "lunes",
       Martes = "tuesday", 
       Miercoles = "miércoles",
       Jueves = "jueves",
       Viernes = "viernes",
       Sabado = "sábado",
       Domingo = "domingo"
   }
   
   enum Prioridad {
       Baja = 1,
       Media = 2,
       Alta = 3,
       Critica = 4
   }
   ```

3. **Crea union types** para:
   - `EstadoUsuario`: "activo" | "inactivo" | "suspendido"
   - `TipoArchivo`: "imagen" | "documento" | "video" | "audio"
   - `ID`: string | number

4. **Implementa funciones** que:
   - Reciban un día de la semana y devuelvan si es día laboral
   - Reciban una prioridad y devuelvan un mensaje descriptivo
   - Reciban un estado de usuario y devuelvan el color asociado

5. **Crea un objeto** que use todos los tipos definidos:
   ```typescript
   interface Tarea {
       id: ID;
       titulo: string;
       dia: DiaSemana;
       prioridad: Prioridad;
       estado: EstadoUsuario;
       archivos: TipoArchivo[];
   }
   ```

### Criterios de Evaluación
- ✅ Los enums están correctamente definidos
- ✅ Los union types cubren todos los casos necesarios
- ✅ Las funciones manejan todos los casos posibles
- ✅ El objeto Tarea usa todos los tipos definidos
- ✅ No hay errores de compilación

---

## Ejercicio 3: Type Guards y Literal Types

### Objetivo
Implementar type guards y usar literal types para validación de datos.

### Instrucciones

1. **Crea un archivo** `type-guards.ts` en la carpeta `src`

2. **Define literal types** para:
   - `TipoVehiculo`: "auto" | "moto" | "bicicleta" | "camion"
   - `Color`: "rojo" | "azul" | "verde" | "negro" | "blanco"
   - `Combustible`: "gasolina" | "diesel" | "electrico" | "hibrido"

3. **Crea interfaces** para diferentes tipos de vehículos:
   ```typescript
   interface Auto {
       tipo: "auto";
       color: Color;
       combustible: "gasolina" | "diesel" | "hibrido";
       puertas: number;
   }
   
   interface Moto {
       tipo: "moto";
       color: Color;
       combustible: "gasolina" | "electrico";
       cilindrada: number;
   }
   
   interface Bicicleta {
       tipo: "bicicleta";
       color: Color;
       combustible: "electrico";
       marchas: number;
   }
   ```

4. **Implementa type guards** para:
   - Verificar si un vehículo es un auto
   - Verificar si un vehículo es una moto
   - Verificar si un vehículo es una bicicleta

5. **Crea una función** que reciba un vehículo y devuelva información específica según el tipo:
   - Para autos: mostrar número de puertas
   - Para motos: mostrar cilindrada
   - Para bicicletas: mostrar número de marchas

6. **Implementa una función** que valide si un objeto es un vehículo válido usando type guards.

### Criterios de Evaluación
- ✅ Los literal types están correctamente definidos
- ✅ Las interfaces representan correctamente cada tipo de vehículo
- ✅ Los type guards funcionan correctamente
- ✅ La función de información maneja todos los tipos
- ✅ La validación de vehículos es robusta

---

## Ejercicio 4: Type Aliases y Inferencia

### Objetivo
Crear type aliases complejos y aprovechar la inferencia de tipos.

### Instrucciones

1. **Crea un archivo** `type-aliases.ts` en la carpeta `src`

2. **Define type aliases** para:
   - `Punto2D`: tupla que represente coordenadas [x: number, y: number]
   - `Punto3D`: tupla que represente coordenadas [x: number, y: number, z: number]
   - `RGB`: tupla que represente color [r: number, g: number, b: number]
   - `FuncionMatematica`: función que reciba un número y devuelva un número
   - `Comparador`: función que reciba dos números y devuelva un boolean

3. **Crea interfaces** usando los type aliases:
   ```typescript
   interface Figura {
       posicion: Punto2D;
       color: RGB;
       calcularArea(): number;
   }
   
   interface Transformacion {
       rotacion: number;
       escala: number;
       aplicar: FuncionMatematica;
   }
   ```

4. **Implementa funciones** que:
   - Calculen la distancia entre dos puntos 2D
   - Calculen la distancia entre dos puntos 3D
   - Mezclen dos colores RGB
   - Apliquen una función matemática a un array de números

5. **Aprovecha la inferencia** de TypeScript:
   - Crea variables sin tipos explícitos y observa qué tipos infiere
   - Crea funciones sin tipos de retorno explícitos
   - Crea objetos sin tipos explícitos

6. **Compara** el código con y sin tipos explícitos para entender las ventajas.

### Criterios de Evaluación
- ✅ Los type aliases están bien definidos y son reutilizables
- ✅ Las interfaces usan correctamente los type aliases
- ✅ Las funciones matemáticas funcionan correctamente
- ✅ Se aprovecha la inferencia de tipos donde es apropiado
- ✅ El código es limpio y expresivo

---

## Preguntas de Reflexión

1. ¿Cuándo prefieres usar tipos explícitos vs. inferencia automática?
2. ¿Cómo te ayudan los union types a hacer tu código más robusto?
3. ¿Qué ventajas ves en usar enums vs. constantes simples?
4. ¿Cómo los type guards mejoran la seguridad de tu código?
5. ¿En qué situaciones usarías type aliases vs. interfaces?

---

**Tiempo estimado**: 60-90 minutos
**Dificultad**: Intermedia

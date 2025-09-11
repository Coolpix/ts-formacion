# Ejercicios - Introducción a TypeScript

## Ejercicio 1: Configuración Inicial

### Objetivo
Configurar un proyecto TypeScript básico y compilar tu primer archivo.

### Instrucciones

1. **Instala TypeScript globalmente** (si no lo tienes ya):
   ```bash
   npm install -g typescript
   ```

2. **Crea un archivo `tsconfig.json`** en la raíz del proyecto con la siguiente configuración:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]
   }
   ```

3. **Crea la carpeta `src`** y dentro un archivo `mi-primer-archivo.ts`

4. **Escribe código TypeScript** en el archivo que incluya:
   - Una variable de tipo string
   - Una variable de tipo number
   - Una variable de tipo boolean
   - Una función que reciba dos números y devuelva su suma
   - Un objeto con al menos 3 propiedades tipadas

5. **Compila el archivo**:
   ```bash
   tsc
   ```

6. **Verifica** que se haya creado la carpeta `dist` con el archivo JavaScript compilado

### Criterios de Evaluación
- ✅ El archivo `tsconfig.json` está correctamente configurado
- ✅ El código TypeScript compila sin errores
- ✅ Se genera correctamente el archivo JavaScript en la carpeta `dist`
- ✅ El código incluye todos los elementos solicitados

---

## Ejercicio 2: Detección de Errores

### Objetivo
Experimentar con la detección de errores de TypeScript.

### Instrucciones

1. **Crea un archivo** `errores.ts` en la carpeta `src`

2. **Escribe código intencionalmente incorrecto** que incluya:
   - Asignar un string a una variable tipada como number
   - Llamar una función con parámetros de tipo incorrecto
   - Acceder a una propiedad que no existe en un objeto
   - Usar una variable no declarada

3. **Intenta compilar** el archivo:
   ```bash
   tsc
   ```

4. **Observa los errores** que TypeScript reporta

5. **Corrige los errores** uno por uno y vuelve a compilar

### Criterios de Evaluación
- ✅ TypeScript detecta correctamente los errores de tipo
- ✅ Los errores se corrigen apropiadamente
- ✅ El código final compila sin errores

---

## Ejercicio 3: Comparación JavaScript vs TypeScript

### Objetivo
Crear el mismo código en JavaScript y TypeScript para ver las diferencias.

### Instrucciones

1. **Crea un archivo JavaScript** `comparacion.js` con el siguiente código:
   ```javascript
   function calcularTotal(precio, cantidad, descuento) {
       let subtotal = precio * cantidad;
       let total = subtotal - (subtotal * descuento);
       return total;
   }
   
   let resultado = calcularTotal(100, 2, 0.1);
   console.log(resultado);
   ```

2. **Crea un archivo TypeScript** `comparacion.ts` con el mismo código pero con tipos:
   - Tipa los parámetros de la función
   - Tipa el valor de retorno
   - Tipa las variables locales

3. **Compila el archivo TypeScript** y compara los resultados

4. **Intenta introducir errores** en ambos archivos y observa las diferencias:
   - Pasa un string en lugar de number a la función
   - Usa una variable no declarada

### Criterios de Evaluación
- ✅ El código TypeScript tiene tipos apropiados
- ✅ Se observan las diferencias en detección de errores
- ✅ Se entiende la ventaja del tipado estático

---

## Preguntas de Reflexión

1. ¿Qué ventajas has observado de TypeScript sobre JavaScript?
2. ¿Cómo te ayuda el tipado estático a escribir mejor código?
3. ¿Qué opción de configuración de `tsconfig.json` te parece más importante?
4. ¿Cómo crees que TypeScript puede ayudar en un proyecto de equipo?

---

**Tiempo estimado**: 45-60 minutos
**Dificultad**: Básica

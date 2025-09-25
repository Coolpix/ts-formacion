# Ejercicios de Narrowing en TypeScript

Este directorio contiene ejercicios prácticos para aprender y dominar el concepto de **Narrowing** en TypeScript.

## Estructura de Ejercicios

### 📁 `01-ejercicios-basicos.ts`
**Nivel**: Principiante  
**Tiempo estimado**: 30-45 minutos

Ejercicios que cubren los conceptos fundamentales de narrowing:

- **Type Guards con `typeof`**: Verificación básica de tipos
- **Narrowing con null/undefined**: Manejo de valores opcionales
- **Operador `in`**: Verificación de propiedades en objetos
- **`instanceof`**: Verificación de instancias de clases
- **Narrowing por veracidad**: Uso de valores truthy/falsy
- **Narrowing múltiple**: Combinación de verificaciones

**Conceptos clave**:
- `typeof` type guards
- Verificación de `null` y `undefined`
- Operador `in` para propiedades
- `instanceof` para clases
- Truthiness narrowing

### 📁 `02-ejercicios-intermedios.ts`
**Nivel**: Intermedio  
**Tiempo estimado**: 45-60 minutos

Ejercicios que combinan múltiples conceptos de narrowing:

- **Discriminated Unions**: Uniones discriminadas con propiedades comunes
- **Type Predicates**: Funciones personalizadas para type guards
- **Sistemas de Estados**: Manejo de estados complejos
- **Assertion Functions**: Validación con lanzamiento de errores
- **Verificación Exhaustiva**: Uso del tipo `never`

**Conceptos clave**:
- Discriminated unions
- Type predicates (`valor is Tipo`)
- Assertion functions (`asserts valor is Tipo`)
- Verificación exhaustiva con `never`
- Sistemas de estados complejos

### 📁 `03-ejercicios-avanzados.ts`
**Nivel**: Avanzado  
**Tiempo estimado**: 60-90 minutos

Ejercicios que simulan casos de uso del mundo real:

- **Sistema de Autenticación**: Estados complejos de autenticación
- **Validación de Formularios**: Sistema completo de validación
- **Manejo de Errores**: Jerarquía de errores con narrowing
- **Type Predicates Anidados**: Verificaciones complejas
- **Sistemas de Comandos**: Patrones de comando con verificación exhaustiva

**Conceptos clave**:
- Sistemas complejos del mundo real
- Type predicates anidados
- Jerarquías de tipos
- Patrones de diseño con narrowing
- Validación robusta

## Cómo Usar Estos Ejercicios

### 1. Orden Recomendado
1. **Empieza con los básicos**: Completa `01-ejercicios-basicos.ts` primero
2. **Continúa con intermedios**: Una vez que domines los básicos, pasa a `02-ejercicios-intermedios.ts`
3. **Termina con avanzados**: Finalmente, aborda `03-ejercicios-avanzados.ts`

### 2. Metodología de Estudio

#### Para cada ejercicio:
1. **Lee el comentario TODO**: Entiende qué se espera que implementes
2. **Analiza el tipo**: Comprende qué tipos están involucrados
3. **Implementa la solución**: Usa narrowing para resolver el problema
4. **Ejecuta las pruebas**: Verifica que tu solución funcione correctamente
5. **Revisa los errores**: Si hay errores de TypeScript, analiza por qué

#### Ejemplo de proceso:
```typescript
// TODO: Implementa la función que procese cada tipo de notificación
function procesarNotificacion(notificacion: Notificacion): string {
  // 1. Analiza el tipo: Notificacion es una union de diferentes tipos
  // 2. Cada tipo tiene una propiedad 'tipo' que actúa como discriminante
  // 3. Usa switch para hacer narrowing basado en 'tipo'
  
  switch (notificacion.tipo) {
    case "exito":
      // TypeScript sabe que notificacion es NotificacionExito aquí
      return `✅ ${notificacion.mensaje}`;
    // ... resto de casos
  }
}
```

### 3. Consejos para Resolver los Ejercicios

#### Type Guards Básicos:
```typescript
// ✅ Bueno: Verificación específica
if (typeof valor === "string") {
  // TypeScript sabe que valor es string
}

// ❌ Malo: Verificación genérica
if (valor) {
  // TypeScript no puede inferir el tipo específico
}
```

#### Discriminated Unions:
```typescript
// ✅ Bueno: Usa la propiedad discriminante
switch (objeto.tipo) {
  case "tipo1":
    // TypeScript infiere el tipo correcto
    break;
}

// ❌ Malo: No usa la propiedad discriminante
if ("propiedad" in objeto) {
  // TypeScript no puede hacer narrowing efectivo
}
```

#### Type Predicates:
```typescript
// ✅ Bueno: Type predicate específico
function esUsuario(valor: unknown): valor is Usuario {
  return typeof valor === "object" && valor !== null && "email" in valor;
}

// ❌ Malo: Función que solo retorna boolean
function esUsuario(valor: unknown): boolean {
  return typeof valor === "object" && valor !== null && "email" in valor;
}
```

### 4. Verificación de Soluciones

#### Ejecuta los ejercicios:
```bash
# Compilar y ejecutar
npx tsc 01-ejercicios-basicos.ts
node 01-ejercicios-basicos.js

# O usar ts-node para ejecutar directamente
npx ts-node 01-ejercicios-basicos.ts
```

#### Verifica que no hay errores de TypeScript:
```bash
# Verificar tipos sin compilar
npx tsc --noEmit 01-ejercicios-basicos.ts
```

### 5. Errores Comunes y Soluciones

#### Error: "Property does not exist on type"
```typescript
// ❌ Problema: TypeScript no puede inferir el tipo
function procesar(valor: string | number) {
  return valor.toUpperCase(); // Error: toUpperCase no existe en number
}

// ✅ Solución: Usa narrowing
function procesar(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // ✅ Funciona
  }
  return valor.toString();
}
```

#### Error: "Object is possibly null"
```typescript
// ❌ Problema: No verifica null
function procesar(obj: object | null) {
  return obj.toString(); // Error: obj puede ser null
}

// ✅ Solución: Verifica null
function procesar(obj: object | null) {
  if (obj === null) {
    return "null";
  }
  return obj.toString(); // ✅ Funciona
}
```

#### Error: "Not all code paths return a value"
```typescript
// ❌ Problema: Switch sin default
function procesar(tipo: "a" | "b") {
  switch (tipo) {
    case "a": return "A";
    case "b": return "B";
    // Error: ¿Qué pasa si se agrega un nuevo tipo?
  }
}

// ✅ Solución: Usa verificación exhaustiva
function procesar(tipo: "a" | "b") {
  switch (tipo) {
    case "a": return "A";
    case "b": return "B";
    default:
      const _exhaustiveCheck: never = tipo;
      throw new Error(`Tipo no manejado: ${_exhaustiveCheck}`);
  }
}
```

## Objetivos de Aprendizaje

Al completar estos ejercicios, deberías ser capaz de:

### Nivel Básico:
- [ ] Usar `typeof` para hacer narrowing de tipos primitivos
- [ ] Manejar valores `null` y `undefined` correctamente
- [ ] Usar el operador `in` para verificar propiedades
- [ ] Aplicar `instanceof` para verificar instancias
- [ ] Entender el narrowing por veracidad

### Nivel Intermedio:
- [ ] Crear y usar discriminated unions efectivamente
- [ ] Implementar type predicates personalizados
- [ ] Usar assertion functions para validación
- [ ] Aplicar verificación exhaustiva con `never`
- [ ] Diseñar sistemas de estados con narrowing

### Nivel Avanzado:
- [ ] Construir sistemas complejos usando narrowing
- [ ] Implementar jerarquías de tipos con narrowing
- [ ] Crear sistemas de validación robustos
- [ ] Manejar errores complejos con narrowing
- [ ] Aplicar patrones de diseño que aprovechen narrowing

## Recursos Adicionales

- [Documentación oficial de TypeScript - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Type Guards en TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)

## Próximos Pasos

Una vez que domines estos ejercicios de narrowing, puedes continuar con:

1. **Módulos en TypeScript** - Organización de código
2. **Decoradores** - Metaprogramación
3. **Tipos Avanzados** - Mapped types, conditional types
4. **Patrones de Diseño** - Aplicación de conceptos avanzados

---

**¡Recuerda**: La práctica constante es clave para dominar el narrowing en TypeScript. No te desanimes si algunos ejercicios te resultan difíciles al principio. Cada ejercicio está diseñado para enseñarte algo específico y aplicable en proyectos reales.

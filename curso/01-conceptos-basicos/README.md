# Conceptos Básicos de TypeScript

## ¿Qué es TypeScript?

TypeScript es un lenguaje de programación desarrollado por Microsoft que es un **superconjunto de JavaScript**. Esto significa que todo el código JavaScript válido es también código TypeScript válido, pero TypeScript añade características adicionales, principalmente el **sistema de tipos estático**.

## ¿Por qué TypeScript?

### Ventajas principales:

1. **Detección temprana de errores**: Los errores se detectan en tiempo de compilación, no en tiempo de ejecución
2. **Mejor IntelliSense**: Los editores pueden proporcionar mejor autocompletado y sugerencias
3. **Refactoring más seguro**: Cambios en el código son más seguros gracias al sistema de tipos
4. **Documentación viva**: Los tipos sirven como documentación del código
5. **Escalabilidad**: Mejor para proyectos grandes y equipos de desarrollo
6. **Compatibilidad**: Se compila a JavaScript estándar

## Instalación y Configuración

### Instalación global:
```bash
npm install -g typescript
```

### Instalación en proyecto:
```bash
npm install --save-dev typescript
```

### Verificar instalación:
```bash
tsc --version
```

### Compilación básica:
```bash
tsc archivo.ts
```

## Configuración con tsconfig.json

El archivo `tsconfig.json` permite configurar cómo TypeScript compila tu código:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### Opciones importantes del compilador:

- **`target`**: Versión de JavaScript de salida
- **`module`**: Sistema de módulos (commonjs, es2015, esnext)
- **`outDir`**: Directorio de salida para archivos compilados
- **`rootDir`**: Directorio raíz de archivos fuente
- **`strict`**: Habilita todas las verificaciones estrictas
- **`noImplicitAny`**: Error si hay tipos `any` implícitos
- **`esModuleInterop`**: Mejor interoperabilidad con módulos CommonJS

## Extension imprescindible para VSCode

### 1. Pretty Typescript Errors
- **Descripción**: Mejora la lectura de los errores de Typescript


## Diferencias clave con JavaScript

### 1. Tipado estático
```typescript
// JavaScript
let nombre = "Juan";
nombre = 123; // ✅ Válido en JavaScript

// TypeScript
let nombre: string = "Juan";
nombre = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
```

### 2. Inferencia de tipos
TypeScript puede inferir automáticamente los tipos:
```typescript
let edad = 25; // TypeScript infiere que es 'number'
let activo = true; // TypeScript infiere que es 'boolean'
```

### 3. Anotaciones de tipo explícitas
```typescript
let nombre: string = "María";
let edad: number = 30;
let esEstudiante: boolean = true;
```

## Conceptos fundamentales

### 1. Tipos primitivos
- `string`: Cadenas de texto
- `number`: Números (enteros y decimales)
- `boolean`: Valores verdadero/falso
- `null` y `undefined`: Valores nulos

### 2. Tipos de objeto
- Arrays
- Objetos
- Funciones
- Clases

### 3. Tipos especiales
- `any`: Cualquier tipo (evitar su uso)
- `void`: Ausencia de valor
- `never`: Valores que nunca ocurren
- `unknow`: Valor desconocido

## Flujo de trabajo típico

1. **Escribir código TypeScript** (.ts)
2. **Compilar a JavaScript** (tsc)
3. **Ejecutar JavaScript** (node o navegador)

## Comandos útiles

```bash
# Compilar un archivo
tsc archivo.ts

# Compilar con watch mode
tsc --watch

# Compilar todo el proyecto
tsc

# Verificar tipos sin compilar
tsc --noEmit

# Inicializar proyecto TypeScript
tsc --init
```

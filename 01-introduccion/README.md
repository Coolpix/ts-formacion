# Tema 1: Introducción a TypeScript

## ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** desarrollado por Microsoft que añade tipado estático opcional al lenguaje JavaScript. Fue lanzado en 2012 por Anders Hejlsberg (creador de C#) y se ha convertido en uno de los lenguajes más populares para desarrollo web, siendo adoptado por empresas como Google, Microsoft, Facebook y Netflix.

### Características Principales

1. **Tipado Estático**: Permite definir tipos para variables, parámetros y valores de retorno
2. **Compilación a JavaScript**: El código TypeScript se compila a JavaScript estándar
3. **Compatibilidad**: Todo código JavaScript válido es también código TypeScript válido
4. **Herramientas Avanzadas**: Mejor autocompletado, detección de errores y refactoring
5. **Soporte para ES6+**: Incluye características modernas de JavaScript
6. **Interfaces y Clases**: Programación orientada a objetos mejorada
7. **Genéricos**: Reutilización de código con tipos parametrizados

## ¿Por qué TypeScript?

### Ventajas sobre JavaScript

| Aspecto | JavaScript | TypeScript |
|---------|------------|------------|
| **Detección de Errores** | En tiempo de ejecución | En tiempo de compilación |
| **Autocompletado** | Básico | Avanzado con IntelliSense |
| **Refactoring** | Manual y propenso a errores | Automático y seguro |
| **Documentación** | Comentarios manuales | Tipos como documentación |
| **Escalabilidad** | Difícil en proyectos grandes | Excelente para proyectos grandes |

### Beneficios Concretos

1. **Menos Bugs**: Los errores de tipo se detectan antes de llegar a producción
2. **Mejor Experiencia de Desarrollo**: Autocompletado inteligente y navegación de código
3. **Código Más Mantenible**: Los tipos actúan como documentación viva
4. **Refactoring Seguro**: Cambios automáticos y seguros en todo el código
5. **Mejor Colaboración**: Los tipos facilitan la comprensión del código en equipos

## Instalación y Configuración

### Instalación Global
```bash
npm install -g typescript
```

### Verificar Instalación
```bash
tsc --version
```

### Compilación Básica
```bash
# Compilar un archivo
tsc archivo.ts

# Compilar con watch mode
tsc archivo.ts --watch
```

## Configuración del Proyecto

### tsconfig.json
Archivo de configuración principal de TypeScript que define cómo el compilador debe procesar tu código:

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
    "isolatedModules": true,
    "moduleDetection": "force"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Opciones Importantes

- **target**: Versión de JavaScript objetivo (ES5, ES2015, ES2020, etc.)
- **module**: Sistema de módulos a usar (commonjs, es2015, esnext, etc.)
- **strict**: Habilita todas las verificaciones estrictas de tipos
- **outDir**: Directorio de salida para archivos compilados
- **rootDir**: Directorio raíz del código fuente
- **esModuleInterop**: Permite importar módulos CommonJS como módulos ES6
- **skipLibCheck**: Omite la verificación de tipos en archivos de declaración
- **isolatedModules**: Trata cada archivo como un módulo independiente
- **moduleDetection**: Fuerza la detección de módulos

### Configuraciones Adicionales

#### Para Node.js
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

#### Para Navegador
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "es2015",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## Flujo de Trabajo

1. **Escribir código TypeScript** (.ts)
2. **Compilar a JavaScript** (tsc)
3. **Ejecutar JavaScript** (node o navegador)

### Comandos Útiles

```bash
# Compilar un archivo específico
tsc archivo.ts

# Compilar todo el proyecto
tsc

# Compilar en modo watch (observa cambios)
tsc --watch

# Compilar con configuración específica
tsc --project tsconfig.json

# Verificar tipos sin generar archivos
tsc --noEmit

# Compilar con información detallada
tsc --listFiles
```

## Herramientas Recomendadas

### VS Code
- **Extensión oficial de TypeScript**: Soporte completo del lenguaje
- **IntelliSense avanzado**: Autocompletado inteligente y sugerencias
- **Detección de errores en tiempo real**: Errores marcados mientras escribes
- **Refactoring automático**: Renombrar variables, extraer funciones, etc.
- **Navegación de código**: Ir a definición, buscar referencias
- **Debugging integrado**: Depuración de código TypeScript

### Otras Herramientas
- **WebStorm**: IDE completo con soporte TypeScript avanzado
- **Sublime Text**: Con paquetes TypeScript (TypeScript, LSP)
- **Vim/Neovim**: Con plugins TypeScript (coc.nvim, nvim-lsp)
- **Atom**: Con paquetes TypeScript
- **Emacs**: Con packages TypeScript

## Conceptos Clave para Recordar

### 1. Tipado Gradual
TypeScript permite adoptar el tipado gradualmente:
- Puedes empezar con JavaScript existente
- Añadir tipos poco a poco
- Mantener compatibilidad total

### 2. Inferencia de Tipos
TypeScript puede inferir tipos automáticamente:
```typescript
let nombre = "Juan"; // TypeScript infiere: string
let edad = 25;       // TypeScript infiere: number
```

### 3. Verificación de Tipos
TypeScript verifica tipos en tiempo de compilación:
```typescript
let numero: number = 42;
numero = "texto"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

### 4. Compatibilidad con JavaScript
Todo código JavaScript válido es TypeScript válido:
```typescript
// Este código JavaScript funciona en TypeScript
function saludar(nombre) {
    return "Hola " + nombre;
}
```

## Casos de Uso Comunes

### 1. Desarrollo Web Frontend
- React, Vue, Angular
- Aplicaciones SPA (Single Page Applications)
- Componentes reutilizables

### 2. Desarrollo Backend
- Node.js con Express, Fastify
- APIs REST y GraphQL
- Microservicios

### 3. Desarrollo de Herramientas
- CLIs (Command Line Interfaces)
- Scripts de automatización
- Herramientas de build

### 4. Desarrollo de Librerías
- Librerías npm
- SDKs para APIs
- Utilidades compartidas

## Próximos Pasos

En el siguiente tema aprenderemos sobre los tipos básicos de TypeScript y cómo usarlos para hacer nuestro código más seguro y expresivo. Cubriremos:

- Tipos primitivos (string, number, boolean)
- Arrays y tuplas
- Enums y union types
- Type guards y narrowing
- Inferencia de tipos

---

**Tiempo estimado de estudio**: 45-60 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar la configuración básica
**Dificultad**: Básica

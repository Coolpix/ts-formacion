# Tema 1: Introducción a TypeScript

## ¿Qué es TypeScript?

TypeScript es un **superset de JavaScript** desarrollado por Microsoft que añade tipado estático opcional al lenguaje JavaScript. Fue lanzado en 2012 y se ha convertido en uno de los lenguajes más populares para desarrollo web.

### Características Principales

1. **Tipado Estático**: Permite definir tipos para variables, parámetros y valores de retorno
2. **Compilación a JavaScript**: El código TypeScript se compila a JavaScript estándar
3. **Compatibilidad**: Todo código JavaScript válido es también código TypeScript válido
4. **Herramientas Avanzadas**: Mejor autocompletado, detección de errores y refactoring

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
Archivo de configuración principal de TypeScript:

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
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Opciones Importantes

- **target**: Versión de JavaScript objetivo
- **module**: Sistema de módulos a usar
- **strict**: Habilita todas las verificaciones estrictas
- **outDir**: Directorio de salida para archivos compilados
- **rootDir**: Directorio raíz del código fuente

## Flujo de Trabajo

1. **Escribir código TypeScript** (.ts)
2. **Compilar a JavaScript** (tsc)
3. **Ejecutar JavaScript** (node o navegador)

## Herramientas Recomendadas

### VS Code
- Extensión oficial de TypeScript
- IntelliSense avanzado
- Detección de errores en tiempo real
- Refactoring automático

### Otras Herramientas
- **WebStorm**: IDE completo con soporte TypeScript
- **Sublime Text**: Con paquetes TypeScript
- **Vim/Neovim**: Con plugins TypeScript

## Próximos Pasos

En el siguiente tema aprenderemos sobre los tipos básicos de TypeScript y cómo usarlos para hacer nuestro código más seguro y expresivo.

---

**Tiempo estimado de estudio**: 30-45 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar la configuración básica

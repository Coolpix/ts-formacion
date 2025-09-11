# Instrucciones de Ejecución - Formación TypeScript

## 🚀 Configuración Inicial

### 1. Instalar dependencias
```bash
npm install
```

### 2. Verificar instalación
```bash
npx tsc --version
npx ts-node --version
```

## 📚 Ejecutar Ejemplos

### Ejemplos de Introducción
```bash
npm run ejemplo:01  # Hello World básico
npm run ejemplo:02  # Configuración de TypeScript
```

### Ejemplos de Tipos Básicos
```bash
npm run ejemplo:03  # Tipos primitivos
npm run ejemplo:04  # Type Guards
```

### Ejemplos de Interfaces
```bash
npm run ejemplo:05  # Interfaces básicas
npm run ejemplo:06  # Herencia de interfaces
npm run ejemplo:07  # Interfaces vs Types
```

### Ejemplos de Funciones
```bash
npm run ejemplo:08  # Funciones básicas
npm run ejemplo:09  # Sobrecarga de funciones
npm run ejemplo:10  # Funciones genéricas
```

### Ejemplos de Clases
```bash
npm run ejemplo:11  # Clases básicas
npm run ejemplo:12  # Herencia de clases
npm run ejemplo:13  # Clases genéricas
```

### Ejemplos de Genéricos
```bash
npm run ejemplo:14  # Genéricos básicos
npm run ejemplo:15  # Interfaces genéricas
npm run ejemplo:16  # Clases genéricas
```

### Ejemplos de Módulos
```bash
npm run ejemplo:17  # Exportaciones
npm run ejemplo:18  # Importaciones
npm run ejemplo:19  # Re-exportaciones
```

## 🏋️ Ejecutar Ejercicios (Soluciones)

### Ejercicios de Introducción
```bash
npm run ejercicio:01  # Ejercicio 1 - Variables y tipos
npm run ejercicio:02  # Ejercicio 2 - Funciones básicas
npm run ejercicio:03  # Ejercicio 3 - Objetos e interfaces
```

### Ejercicios de Tipos Básicos
```bash
npm run ejercicio:04  # Ejercicio 1 - Tipos primitivos
npm run ejercicio:05  # Ejercicio 2 - Type Guards
```

### Ejercicios de Interfaces
```bash
npm run ejercicio:06  # Ejercicio 1 - Interfaces y tipos
```

### Ejercicios de Funciones
```bash
npm run ejercicio:07  # Ejercicio 1 - Funciones tipadas
```

### Ejercicios de Clases
```bash
npm run ejercicio:08  # Ejercicio 1 - Clases y herencia
```

### Ejercicios de Genéricos
```bash
npm run ejercicio:09  # Ejercicio 1 - Genéricos
```

### Ejercicios de Módulos
```bash
npm run ejercicio:10  # Ejercicio 1 - Módulos
```

## 🔧 Comandos Útiles

### Compilar TypeScript
```bash
npm run build        # Compilar una vez
npm run build:watch  # Compilar en modo watch
```

### Verificar tipos sin compilar
```bash
npm run type-check
```

### Limpiar archivos compilados
```bash
npm run clean
```

### Ejecutar archivo específico
```bash
npx ts-node ruta/al/archivo.ts
```

## 📝 Notas Importantes

1. **Primera ejecución**: Ejecuta `npm install` antes de usar cualquier comando
2. **Archivos individuales**: Puedes ejecutar cualquier archivo `.ts` con `npx ts-node archivo.ts`
3. **Compilación**: Los archivos compilados se guardan en la carpeta `dist/`
4. **Modo desarrollo**: Usa `npm run build:watch` para compilación automática

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
npm install
```

### Error: "Command not found"
```bash
npx ts-node --transpile-only archivo.ts
```

### Error de tipos
```bash
npm run type-check
```

## 📖 Estructura del Proyecto

```
ts-formacion/
├── 01-introduccion/
├── 02-tipos-basicos/
├── 03-interfaces/
├── 04-funciones/
├── 05-clases/
├── 06-genericos/
├── 07-modulos/
├── tsconfig.json
├── package.json
└── INSTRUCCIONES.md
```

¡Disfruta aprendiendo TypeScript! 🎉

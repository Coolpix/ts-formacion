# Narrowing en TypeScript

## Introducción

Narrowing es una característica fundamental de TypeScript que permite al compilador reducir el tipo de una variable a un tipo más específico basándose en el contexto del código. Esta funcionalidad es crucial para la seguridad de tipos y permite que TypeScript entienda mejor el código.

## ¿Qué es Narrowing?

Narrowing es el proceso por el cual TypeScript reduce el tipo de una variable de un tipo más amplio a un tipo más específico. Esto ocurre cuando TypeScript puede inferir que una variable debe ser de un tipo particular basándose en el contexto del código.

## Tipos de Narrowing

### 1. Type Guards

Los type guards son expresiones que realizan una verificación en tiempo de ejecución para garantizar que un valor es de un tipo específico.

#### typeof Type Guards

```typescript
function procesarValor(valor: string | number) {
    if (typeof valor === "string") {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else {
        // TypeScript sabe que valor es number aquí
        return valor * 2;
    }
}
```

#### instanceof Type Guards

```typescript
class Usuario {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

function procesarObjeto(obj: Usuario | string) {
    if (obj instanceof Usuario) {
        // TypeScript sabe que obj es Usuario aquí
        return obj.nombre;
    } else {
        // TypeScript sabe que obj es string aquí
        return obj;
    }
}
```

#### in Type Guards

```typescript
interface Usuario {
    nombre: string;
    email: string;
}

interface Admin {
    nombre: string;
    permisos: string[];
}

function procesarPersona(persona: Usuario | Admin) {
    if ("email" in persona) {
        // TypeScript sabe que persona es Usuario aquí
        return persona.email;
    } else {
        // TypeScript sabe que persona es Admin aquí
        return persona.permisos;
    }
}
```

### 2. Truthiness Narrowing

TypeScript puede reducir tipos basándose en la veracidad de los valores.

```typescript
function procesarValor(valor: string | null | undefined) {
    if (valor) {
        // TypeScript sabe que valor no es null ni undefined aquí
        return valor.toUpperCase();
    }
    // valor es null o undefined aquí
    return "Valor vacío";
}
```

### 3. Equality Narrowing

TypeScript puede reducir tipos basándose en comparaciones de igualdad.

```typescript
function procesarValor(valor: string | number | null) {
    if (valor === null) {
        // TypeScript sabe que valor es null aquí
        return "Valor nulo";
    } else if (valor === "especial") {
        // TypeScript sabe que valor es "especial" aquí
        return "Valor especial";
    } else {
        // TypeScript sabe que valor es string o number aquí
        return valor;
    }
}
```

### 4. Discriminated Unions

Las discriminated unions permiten crear tipos que pueden ser de diferentes formas pero comparten una propiedad discriminante.

```typescript
interface Circulo {
    tipo: "circulo";
    radio: number;
}

interface Rectangulo {
    tipo: "rectangulo";
    ancho: number;
    alto: number;
}

type Forma = Circulo | Rectangulo;

function calcularArea(forma: Forma): number {
    switch (forma.tipo) {
        case "circulo":
            // TypeScript sabe que forma es Circulo aquí
            return Math.PI * forma.radio * forma.radio;
        case "rectangulo":
            // TypeScript sabe que forma es Rectangulo aquí
            return forma.ancho * forma.alto;
    }
}
```

### 5. User-Defined Type Guards

Puedes crear tus propios type guards para casos específicos.

```typescript
function esString(valor: unknown): valor is string {
    return typeof valor === "string";
}

function esNumero(valor: unknown): valor is number {
    return typeof valor === "number";
}

function procesarValor(valor: unknown) {
    if (esString(valor)) {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else if (esNumero(valor)) {
        // TypeScript sabe que valor es number aquí
        return valor * 2;
    } else {
        return "Tipo no soportado";
    }
}
```

## Casos de Uso Prácticos

### 1. Validación de Datos de API

```typescript
interface UsuarioAPI {
    id: number;
    nombre: string;
    email: string;
}

function esUsuarioAPI(valor: unknown): valor is UsuarioAPI {
    return (
        typeof valor === "object" &&
        valor !== null &&
        "id" in valor &&
        "nombre" in valor &&
        "email" in valor &&
        typeof (valor as any).id === "number" &&
        typeof (valor as any).nombre === "string" &&
        typeof (valor as any).email === "string"
    );
}

function procesarRespuestaAPI(respuesta: unknown) {
    if (esUsuarioAPI(respuesta)) {
        // TypeScript sabe que respuesta es UsuarioAPI aquí
        console.log(`Usuario: ${respuesta.nombre} (${respuesta.email})`);
    } else {
        console.log("Respuesta no válida");
    }
}
```

### 2. Manejo de Errores

```typescript
interface ErrorAPI {
    tipo: "error";
    mensaje: string;
    codigo: number;
}

interface ExitoAPI {
    tipo: "exito";
    datos: any;
}

type RespuestaAPI = ErrorAPI | ExitoAPI;

function procesarRespuesta(respuesta: RespuestaAPI) {
    if (respuesta.tipo === "error") {
        // TypeScript sabe que respuesta es ErrorAPI aquí
        console.error(`Error ${respuesta.codigo}: ${respuesta.mensaje}`);
    } else {
        // TypeScript sabe que respuesta es ExitoAPI aquí
        console.log("Datos recibidos:", respuesta.datos);
    }
}
```

### 3. Validación de Formularios

```typescript
interface CampoValido {
    estado: "valido";
    valor: string;
}

interface CampoInvalido {
    estado: "invalido";
    valor: string;
    error: string;
}

type Campo = CampoValido | CampoInvalido;

function procesarCampo(campo: Campo) {
    if (campo.estado === "valido") {
        // TypeScript sabe que campo es CampoValido aquí
        return campo.valor;
    } else {
        // TypeScript sabe que campo es CampoInvalido aquí
        return `Error: ${campo.error}`;
    }
}
```

### 4. Sistema de Estados

```typescript
interface EstadoCargando {
    estado: "cargando";
}

interface EstadoExito {
    estado: "exito";
    datos: any;
}

interface EstadoError {
    estado: "error";
    error: string;
}

type Estado = EstadoCargando | EstadoExito | EstadoError;

function renderizarEstado(estado: Estado) {
    switch (estado.estado) {
        case "cargando":
            // TypeScript sabe que estado es EstadoCargando aquí
            return "Cargando...";
        case "exito":
            // TypeScript sabe que estado es EstadoExito aquí
            return `Datos: ${estado.datos}`;
        case "error":
            // TypeScript sabe que estado es EstadoError aquí
            return `Error: ${estado.error}`;
    }
}
```

## Mejores Prácticas

### 1. Usar Type Guards Específicos

```typescript
// ✅ Bueno
function esUsuario(valor: unknown): valor is Usuario {
    return (
        typeof valor === "object" &&
        valor !== null &&
        "nombre" in valor &&
        "email" in valor
    );
}

// ❌ Malo
function esUsuario(valor: unknown): boolean {
    return typeof valor === "object" && valor !== null;
}
```

### 2. Usar Discriminated Unions

```typescript
// ✅ Bueno
interface Exito {
    tipo: "exito";
    datos: any;
}

interface Error {
    tipo: "error";
    mensaje: string;
}

type Resultado = Exito | Error;

// ❌ Malo
interface Resultado {
    tipo: string;
    datos?: any;
    mensaje?: string;
}
```

### 3. Usar Truthiness Narrowing

```typescript
// ✅ Bueno
function procesarValor(valor: string | null | undefined) {
    if (valor) {
        return valor.toUpperCase();
    }
    return "Valor vacío";
}

// ❌ Malo
function procesarValor(valor: string | null | undefined) {
    if (valor !== null && valor !== undefined) {
        return valor.toUpperCase();
    }
    return "Valor vacío";
}
```

### 4. Usar Equality Narrowing

```typescript
// ✅ Bueno
function procesarValor(valor: string | number | null) {
    if (valor === null) {
        return "Valor nulo";
    }
    return valor;
}

// ❌ Malo
function procesarValor(valor: string | number | null) {
    if (valor == null) {
        return "Valor nulo";
    }
    return valor;
}
```

## Errores Comunes

### 1. No Usar Type Guards

```typescript
// ❌ Malo
function procesarValor(valor: unknown) {
    return valor.toUpperCase(); // Error: unknown no tiene toUpperCase
}

// ✅ Bueno
function procesarValor(valor: unknown) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    return "No es string";
}
```

### 2. No Usar Discriminated Unions

```typescript
// ❌ Malo
interface Resultado {
    tipo: string;
    datos?: any;
    error?: string;
}

function procesarResultado(resultado: Resultado) {
    if (resultado.tipo === "exito") {
        return resultado.datos; // Error: datos puede ser undefined
    }
}

// ✅ Bueno
interface Exito {
    tipo: "exito";
    datos: any;
}

interface Error {
    tipo: "error";
    mensaje: string;
}

type Resultado = Exito | Error;

function procesarResultado(resultado: Resultado) {
    if (resultado.tipo === "exito") {
        return resultado.datos; // TypeScript sabe que datos existe
    }
}
```

### 3. No Usar Truthiness Narrowing

```typescript
// ❌ Malo
function procesarValor(valor: string | null | undefined) {
    if (valor !== null && valor !== undefined) {
        return valor.toUpperCase();
    }
    return "Valor vacío";
}

// ✅ Bueno
function procesarValor(valor: string | null | undefined) {
    if (valor) {
        return valor.toUpperCase();
    }
    return "Valor vacío";
}
```

## Conclusión

Narrowing es una característica esencial de TypeScript que permite:

- Mejorar la seguridad de tipos
- Reducir errores en tiempo de ejecución
- Hacer el código más expresivo y claro
- Facilitar el mantenimiento del código

La clave está en entender cuándo y cómo usar cada tipo de narrowing para crear código más robusto y mantenible. Los type guards, discriminated unions y truthiness narrowing son herramientas poderosas que deben ser utilizadas apropiadamente para maximizar los beneficios de TypeScript.

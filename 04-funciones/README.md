# Tema 4: Funciones y Parámetros Tipados

## Introducción

Las funciones son el corazón de la programación en TypeScript. En este tema aprenderemos a crear funciones tipadas, manejar parámetros opcionales, valores por defecto, sobrecarga de funciones y mucho más. TypeScript nos proporciona herramientas poderosas para hacer nuestras funciones más seguras y expresivas.

## Funciones Básicas con Tipos

### Parámetros y Valores de Retorno

```typescript
// Función con tipos explícitos
function sumar(a: number, b: number): number {
    return a + b;
}

// Función con tipo de retorno inferido
function multiplicar(a: number, b: number) {
    return a * b; // TypeScript infiere que devuelve number
}

// Función que no devuelve nada
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

// Función con múltiples tipos de retorno
function procesarValor(valor: string | number): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}
```

### Funciones de Flecha (Arrow Functions)

```typescript
// Función de flecha básica
const sumar = (a: number, b: number): number => a + b;

// Función de flecha con bloque
const procesarArray = (numeros: number[]): number[] => {
    return numeros.map(n => n * 2);
};

// Función de flecha sin parámetros
const obtenerFecha = (): Date => new Date();

// Función de flecha con un solo parámetro (paréntesis opcionales)
const duplicar = (valor: number) => valor * 2;
```

## Parámetros Opcionales

### Sintaxis de Parámetros Opcionales

```typescript
// Parámetro opcional con ?
function saludar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}!`;
    }
    return `Hola, ${nombre}!`;
}

// Uso de la función
console.log(saludar("Juan"));           // "Hola, Juan!"
console.log(saludar("Juan", "Pérez"));  // "Hola, Juan Pérez!"

// Parámetros opcionales al final
function crearUsuario(nombre: string, email: string, telefono?: string, direccion?: string): void {
    console.log(`Usuario: ${nombre}, Email: ${email}`);
    if (telefono) console.log(`Teléfono: ${telefono}`);
    if (direccion) console.log(`Dirección: ${direccion}`);
}
```

### Parámetros Opcionales con Valores por Defecto

```typescript
// Valores por defecto
function configurarServidor(host: string = "localhost", puerto: number = 3000): void {
    console.log(`Servidor configurado: ${host}:${puerto}`);
}

// Uso con valores por defecto
configurarServidor();                    // "Servidor configurado: localhost:3000"
configurarServidor("192.168.1.1");      // "Servidor configurado: 192.168.1.1:3000"
configurarServidor("192.168.1.1", 8080); // "Servidor configurado: 192.168.1.1:8080"

// Combinando parámetros opcionales y valores por defecto
function crearPerfil(nombre: string, edad: number = 18, activo: boolean = true): void {
    console.log(`Perfil: ${nombre}, ${edad} años, ${activo ? 'activo' : 'inactivo'}`);
}
```

## Parámetros Rest

### Sintaxis de Parámetros Rest

```typescript
// Función con parámetros rest
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

// Función con parámetros normales y rest
function crearMensaje(prefijo: string, ...palabras: string[]): string {
    return prefijo + " " + palabras.join(" ");
}

console.log(crearMensaje("Hola", "mundo", "de", "TypeScript")); // "Hola mundo de TypeScript"

// Función con tipos específicos en rest
function procesarDatos(tipo: string, ...datos: (string | number)[]): void {
    console.log(`Procesando ${tipo}:`, datos);
}
```

## Sobrecarga de Funciones

### Definición de Sobrecargas

```typescript
// Declaraciones de sobrecarga
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: boolean): boolean;

// Implementación de la función
function procesar(valor: string | number | boolean): string | number | boolean {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 2;
    } else {
        return !valor;
    }
}

// Uso de las sobrecargas
let resultado1 = procesar("hola");    // TypeScript sabe que devuelve string
let resultado2 = procesar(5);         // TypeScript sabe que devuelve number
let resultado3 = procesar(true);      // TypeScript sabe que devuelve boolean
```

### Sobrecarga con Diferentes Números de Parámetros

```typescript
// Sobrecarga para diferentes números de parámetros
function crearPunto(x: number): { x: number; y: number };
function crearPunto(x: number, y: number): { x: number; y: number };

function crearPunto(x: number, y?: number): { x: number; y: number } {
    return { x, y: y ?? 0 };
}

let punto1 = crearPunto(5);      // { x: 5, y: 0 }
let punto2 = crearPunto(5, 10);  // { x: 5, y: 10 }
```

## Tipos de Función

### Definición de Tipos de Función

```typescript
// Tipo de función básico
type Operacion = (a: number, b: number) => number;

let sumar: Operacion = (a, b) => a + b;
let restar: Operacion = (a, b) => a - b;
let multiplicar: Operacion = (a, b) => a * b;

// Tipo de función con parámetros opcionales
type Procesador = (texto: string, formato?: string) => string;

let procesarTexto: Procesador = (texto, formato = "upper") => {
    return formato === "upper" ? texto.toUpperCase() : texto.toLowerCase();
};

// Tipo de función con parámetros rest
type Sumador = (...numeros: number[]) => number;

let sumarTodos: Sumador = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};
```

### Interfaces de Función

```typescript
// Interface de función
interface Comparador {
    (a: number, b: number): number;
}

let comparar: Comparador = (a, b) => a - b;

// Interface de función con propiedades
interface FuncionConPropiedades {
    (valor: string): string;
    version: string;
    configuracion: {
        caseSensitive: boolean;
    };
}

let procesar: FuncionConPropiedades = function(valor: string): string {
    return this.configuracion.caseSensitive ? valor : valor.toLowerCase();
} as FuncionConPropiedades;

procesar.version = "1.0";
procesar.configuracion = { caseSensitive: false };
```

## Funciones Genéricas

### Funciones Genéricas Básicas

```typescript
// Función genérica básica
function identidad<T>(valor: T): T {
    return valor;
}

let numero = identidad<number>(42);        // number
let texto = identidad<string>("hola");     // string
let booleano = identidad<boolean>(true);   // boolean

// Inferencia de tipos en genéricos
let numeroInferido = identidad(42);        // TypeScript infiere number
let textoInferido = identidad("hola");     // TypeScript infiere string

// Función genérica con restricciones
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

let usuario = { nombre: "Juan", edad: 30 };
let nombre = obtenerPropiedad(usuario, "nombre"); // string
let edad = obtenerPropiedad(usuario, "edad");     // number
```

### Funciones Genéricas Avanzadas

```typescript
// Función genérica con múltiples parámetros de tipo
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

let resultado = combinar("hola", 42); // [string, number]

// Función genérica con tipos condicionales
function procesarValor<T>(valor: T): T extends string ? string : number {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else {
        return (valor as any) * 2;
    }
}

// Función genérica con parámetros rest
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

let numeros = crearArray(1, 2, 3, 4, 5);        // number[]
let textos = crearArray("a", "b", "c");          // string[]
let mixto = crearArray(1, "a", true);            // (string | number | boolean)[]
```

## Funciones de Orden Superior

### Funciones que Reciben Funciones

```typescript
// Función que recibe otra función como parámetro
function ejecutarConLogging<T>(funcion: () => T, mensaje: string): T {
    console.log(`Iniciando: ${mensaje}`);
    const resultado = funcion();
    console.log(`Completado: ${mensaje}`);
    return resultado;
}

let resultado = ejecutarConLogging(() => {
    return 2 + 2;
}, "Suma de números");

// Función que devuelve una función
function crearMultiplicador(factor: number): (valor: number) => number {
    return (valor: number) => valor * factor;
}

let duplicar = crearMultiplicador(2);
let triplicar = crearMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5)); // 15
```

### Funciones de Array con Tipos

```typescript
// Función que procesa arrays con tipos específicos
function filtrarNumerosPares(numeros: number[]): number[] {
    return numeros.filter(n => n % 2 === 0);
}

function mapearStrings(nombres: string[]): string[] {
    return nombres.map(nombre => nombre.toUpperCase());
}

// Función genérica para procesar arrays
function procesarArray<T, U>(array: T[], procesador: (item: T) => U): U[] {
    return array.map(procesador);
}

let numeros = [1, 2, 3, 4, 5];
let cuadrados = procesarArray(numeros, n => n * n); // number[]

let nombres = ["juan", "maría", "carlos"];
let mayusculas = procesarArray(nombres, n => n.toUpperCase()); // string[]
```

## Funciones Asíncronas

### Funciones Async/Await

```typescript
// Función asíncrona básica
async function obtenerDatos(url: string): Promise<string> {
    const respuesta = await fetch(url);
    return await respuesta.text();
}

// Función asíncrona con manejo de errores
async function procesarDatosAsync(datos: any[]): Promise<number> {
    try {
        const resultados = await Promise.all(
            datos.map(async (dato) => {
                // Simular procesamiento asíncrono
                await new Promise(resolve => setTimeout(resolve, 100));
                return dato * 2;
            })
        );
        return resultados.reduce((total, resultado) => total + resultado, 0);
    } catch (error) {
        console.error("Error procesando datos:", error);
        throw error;
    }
}

// Función que devuelve Promise
function crearPromesa<T>(valor: T, delay: number = 1000): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valor), delay);
    });
}
```

## Mejores Prácticas

1. **Usa tipos explícitos** para parámetros y valores de retorno cuando no sean obvios
2. **Aprovecha la inferencia** de tipos cuando sea clara
3. **Usa parámetros opcionales** en lugar de `undefined` explícito
4. **Aplica sobrecarga** para funciones que manejan múltiples tipos
5. **Usa genéricos** para funciones reutilizables
6. **Documenta funciones complejas** con comentarios JSDoc
7. **Maneja errores** apropiadamente en funciones asíncronas

## Próximos Pasos

En el siguiente tema aprenderemos sobre clases y herencia en TypeScript, incluyendo modificadores de acceso, propiedades estáticas y herencia de clases.

---

**Tiempo estimado de estudio**: 60-75 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con funciones tipadas

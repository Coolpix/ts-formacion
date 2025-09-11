# Tema 4: Funciones y Parámetros Tipados

## Introducción

Las funciones son el corazón de la programación en TypeScript y representan la unidad fundamental de reutilización de código. TypeScript proporciona un sistema de tipos robusto para funciones que nos permite:

- **Definir contratos claros** para parámetros y valores de retorno
- **Crear funciones más seguras** con verificación de tipos en tiempo de compilación
- **Implementar patrones avanzados** como sobrecarga y funciones de orden superior
- **Manejar casos complejos** con parámetros opcionales, rest y valores por defecto
- **Facilitar el mantenimiento** con documentación automática a través de tipos
- **Habilitar la reutilización** con funciones genéricas y polimórficas

En este tema exploraremos desde conceptos básicos hasta patrones avanzados de funciones, proporcionando las herramientas necesarias para escribir código TypeScript robusto y mantenible.

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

## Patrones Avanzados de Funciones

### 1. Currying y Aplicación Parcial
```typescript
// Currying: función que devuelve otra función
function sumar(a: number): (b: number) => number {
    return (b: number) => a + b;
}

const sumar5 = sumar(5);
console.log(sumar5(3)); // 8

// Aplicación parcial con múltiples parámetros
function crearSaludo(saludo: string, puntuacion: string) {
    return (nombre: string) => `${saludo}${nombre}${puntuacion}`;
}

const saludarFormal = crearSaludo("Estimado/a ", ".");
const saludarInformal = crearSaludo("¡Hola ", "!");

console.log(saludarFormal("Juan")); // "Estimado/a Juan."
console.log(saludarInformal("María")); // "¡Hola María!"
```

### 2. Memoización
```typescript
function memoizar<T extends (...args: any[]) => any>(
    funcion: T
): T {
    const cache = new Map();
    
    return ((...args: Parameters<T>) => {
        const clave = JSON.stringify(args);
        
        if (cache.has(clave)) {
            return cache.get(clave);
        }
        
        const resultado = funcion(...args);
        cache.set(clave, resultado);
        return resultado;
    }) as T;
}

// Función costosa para memoizar
function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciMemoizado = memoizar(fibonacci);
console.log(fibonacciMemoizado(40)); // Mucho más rápido
```

### 3. Pipe y Compose
```typescript
// Función pipe para encadenar transformaciones
function pipe<T>(...funciones: Array<(arg: T) => T>): (arg: T) => T {
    return (arg: T) => funciones.reduce((resultado, fn) => fn(resultado), arg);
}

// Función compose (aplicación de derecha a izquierda)
function compose<T>(...funciones: Array<(arg: T) => T>): (arg: T) => T {
    return (arg: T) => funciones.reduceRight((resultado, fn) => fn(resultado), arg);
}

// Ejemplo de uso
const transformarTexto = pipe(
    (texto: string) => texto.trim(),
    (texto: string) => texto.toLowerCase(),
    (texto: string) => texto.replace(/\s+/g, '-'),
    (texto: string) => `slug: ${texto}`
);

console.log(transformarTexto("  Hola Mundo TypeScript  ")); 
// "slug: hola-mundo-typescript"
```

### 4. Funciones de Validación
```typescript
type Validator<T> = (valor: T) => boolean;
type ValidatorResult<T> = {
    valido: boolean;
    error?: string;
    valor: T;
};

function crearValidator<T>(
    validadores: Array<{ validar: Validator<T>; mensaje: string }>
): (valor: T) => ValidatorResult<T> {
    return (valor: T) => {
        for (const { validar, mensaje } of validadores) {
            if (!validar(valor)) {
                return { valido: false, error: mensaje, valor };
            }
        }
        return { valido: true, valor };
    };
}

// Validadores para email
const validarEmail = crearValidator([
    {
        validar: (email: string) => email.includes('@'),
        mensaje: 'Email debe contener @'
    },
    {
        validar: (email: string) => email.length > 5,
        mensaje: 'Email debe tener al menos 5 caracteres'
    },
    {
        validar: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        mensaje: 'Formato de email inválido'
    }
]);

const resultado = validarEmail("usuario@ejemplo.com");
console.log(resultado); // { valido: true, valor: "usuario@ejemplo.com" }
```

## Funciones de Utilidad Comunes

### 1. Debounce y Throttle
```typescript
// Debounce: ejecuta la función después de que pase un tiempo sin llamadas
function debounce<T extends (...args: any[]) => any>(
    funcion: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => funcion(...args), delay);
    };
}

// Throttle: ejecuta la función como máximo una vez por intervalo
function throttle<T extends (...args: any[]) => any>(
    funcion: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            funcion(...args);
        }
    };
}

// Ejemplo de uso
const busquedaDebounced = debounce((termino: string) => {
    console.log(`Buscando: ${termino}`);
}, 300);

const scrollThrottled = throttle(() => {
    console.log('Scroll detectado');
}, 100);
```

### 2. Retry y Timeout
```typescript
// Función con reintentos
async function conReintentos<T>(
    funcion: () => Promise<T>,
    maxReintentos: number = 3,
    delay: number = 1000
): Promise<T> {
    let ultimoError: Error;
    
    for (let intento = 1; intento <= maxReintentos; intento++) {
        try {
            return await funcion();
        } catch (error) {
            ultimoError = error as Error;
            console.log(`Intento ${intento} falló:`, error);
            
            if (intento < maxReintentos) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw ultimoError!;
}

// Función con timeout
function conTimeout<T>(
    promesa: Promise<T>,
    timeoutMs: number
): Promise<T> {
    return Promise.race([
        promesa,
        new Promise<never>((_, reject) => {
            setTimeout(() => reject(new Error('Timeout')), timeoutMs);
        })
    ]);
}

// Ejemplo de uso
const datosConReintentos = await conReintentos(
    () => fetch('/api/datos').then(r => r.json()),
    3,
    2000
);

const datosConTimeout = await conTimeout(
    fetch('/api/datos').then(r => r.json()),
    5000
);
```

## Mejores Prácticas

### 1. Nomenclatura y Documentación
```typescript
/**
 * Calcula el área de un rectángulo
 * @param ancho - Ancho del rectángulo en metros
 * @param alto - Alto del rectángulo en metros
 * @returns Área en metros cuadrados
 * @throws {Error} Si alguno de los parámetros es negativo
 */
function calcularAreaRectangulo(ancho: number, alto: number): number {
    if (ancho < 0 || alto < 0) {
        throw new Error('Las dimensiones no pueden ser negativas');
    }
    return ancho * alto;
}

// ✅ Bueno: Nombres descriptivos
function procesarDatosUsuario(datos: Usuario): UsuarioProcesado {
    // ...
}

// ❌ Malo: Nombres vagos
function procesar(d: any): any {
    // ...
}
```

### 2. Manejo de Errores
```typescript
// ✅ Bueno: Manejo explícito de errores
async function obtenerUsuario(id: string): Promise<Usuario | null> {
    try {
        const respuesta = await fetch(`/api/usuarios/${id}`);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return await respuesta.json();
    } catch (error) {
        console.error('Error obteniendo usuario:', error);
        return null;
    }
}

// ✅ Bueno: Resultado con información de error
type Resultado<T, E = Error> = 
    | { exito: true; datos: T }
    | { exito: false; error: E };

async function obtenerUsuarioSeguro(id: string): Promise<Resultado<Usuario>> {
    try {
        const usuario = await obtenerUsuario(id);
        if (!usuario) {
            return { exito: false, error: new Error('Usuario no encontrado') };
        }
        return { exito: true, datos: usuario };
    } catch (error) {
        return { exito: false, error: error as Error };
    }
}
```

### 3. Uso de Parámetros Opcionales
```typescript
// ✅ Bueno: Parámetros opcionales al final
function crearUsuario(
    nombre: string, 
    email: string, 
    telefono?: string,
    direccion?: string
): Usuario {
    return {
        nombre,
        email,
        telefono: telefono ?? '',
        direccion: direccion ?? ''
    };
}

// ✅ Bueno: Objeto de configuración para muchos parámetros opcionales
interface ConfiguracionServidor {
    host: string;
    puerto: number;
    ssl?: boolean;
    timeout?: number;
    retries?: number;
    headers?: Record<string, string>;
}

function crearServidor(config: ConfiguracionServidor): Servidor {
    return new Servidor({
        host: config.host,
        puerto: config.puerto,
        ssl: config.ssl ?? false,
        timeout: config.timeout ?? 5000,
        retries: config.retries ?? 3,
        headers: config.headers ?? {}
    });
}
```

### 4. Funciones Puras
```typescript
// ✅ Bueno: Función pura (sin efectos secundarios)
function calcularDescuento(precio: number, porcentaje: number): number {
    return precio * (porcentaje / 100);
}

// ✅ Bueno: Función pura con validación
function formatearFecha(fecha: Date, formato: 'corto' | 'largo' = 'corto'): string {
    const opciones: Intl.DateTimeFormatOptions = formato === 'corto' 
        ? { year: 'numeric', month: '2-digit', day: '2-digit' }
        : { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    
    return fecha.toLocaleDateString('es-ES', opciones);
}

// ❌ Malo: Función con efectos secundarios
let contador = 0;
function incrementarContador(): number {
    contador++; // Efecto secundario
    return contador;
}
```

## Casos de Uso Comunes

### 1. Procesamiento de Datos
```typescript
interface DatosUsuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    fechaRegistro: Date;
}

// Pipeline de procesamiento
const procesarUsuarios = pipe(
    (usuarios: DatosUsuario[]) => usuarios.filter(u => u.activo),
    (usuarios: DatosUsuario[]) => usuarios.map(u => ({
        ...u,
        nombre: u.nombre.toUpperCase(),
        diasRegistrado: Math.floor((Date.now() - u.fechaRegistro.getTime()) / (1000 * 60 * 60 * 24))
    })),
    (usuarios: any[]) => usuarios.sort((a, b) => b.diasRegistrado - a.diasRegistrado)
);

const usuariosProcesados = procesarUsuarios(usuariosOriginales);
```

### 2. Validación de Formularios
```typescript
type ReglaValidacion<T> = {
    campo: keyof T;
    validar: (valor: any) => boolean;
    mensaje: string;
};

function crearValidador<T>(reglas: ReglaValidacion<T>[]) {
    return (datos: T): { valido: boolean; errores: Record<string, string> } => {
        const errores: Record<string, string> = {};
        
        for (const regla of reglas) {
            const valor = datos[regla.campo];
            if (!regla.validar(valor)) {
                errores[regla.campo as string] = regla.mensaje;
            }
        }
        
        return {
            valido: Object.keys(errores).length === 0,
            errores
        };
    };
}

const validarFormularioUsuario = crearValidador<Usuario>([
    {
        campo: 'nombre',
        validar: (valor) => typeof valor === 'string' && valor.length >= 2,
        mensaje: 'El nombre debe tener al menos 2 caracteres'
    },
    {
        campo: 'email',
        validar: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
        mensaje: 'Formato de email inválido'
    }
]);
```

### 3. Manejo de Eventos
```typescript
type ManejadorEvento<T> = (evento: T) => void;

class EventEmitter<T extends Record<string, any>> {
    private eventos: Map<keyof T, ManejadorEvento<T[keyof T]>[]> = new Map();
    
    on<K extends keyof T>(evento: K, manejador: ManejadorEvento<T[K]>): void {
        if (!this.eventos.has(evento)) {
            this.eventos.set(evento, []);
        }
        this.eventos.get(evento)!.push(manejador as ManejadorEvento<T[keyof T]>);
    }
    
    emit<K extends keyof T>(evento: K, datos: T[K]): void {
        const manejadores = this.eventos.get(evento);
        if (manejadores) {
            manejadores.forEach(manejador => manejador(datos));
        }
    }
    
    off<K extends keyof T>(evento: K, manejador: ManejadorEvento<T[K]>): void {
        const manejadores = this.eventos.get(evento);
        if (manejadores) {
            const index = manejadores.indexOf(manejador as ManejadorEvento<T[keyof T]>);
            if (index > -1) {
                manejadores.splice(index, 1);
            }
        }
    }
}

// Uso tipado
interface EventosApp {
    'usuario:login': { usuario: Usuario; timestamp: Date };
    'usuario:logout': { usuarioId: string };
    'error:ocurrido': { error: Error; contexto: string };
}

const emisor = new EventEmitter<EventosApp>();

emisor.on('usuario:login', (datos) => {
    console.log(`Usuario ${datos.usuario.nombre} inició sesión`);
});
```

## Errores Comunes y Cómo Evitarlos

### 1. No Especificar Tipos de Retorno
```typescript
// ❌ Malo: Tipo de retorno no especificado
function procesarDatos(datos: any) {
    if (typeof datos === 'string') {
        return datos.toUpperCase();
    }
    return datos * 2;
}

// ✅ Bueno: Tipo de retorno explícito
function procesarDatos(datos: string | number): string | number {
    if (typeof datos === 'string') {
        return datos.toUpperCase();
    }
    return datos * 2;
}
```

### 2. Uso Incorrecto de `any`
```typescript
// ❌ Malo: Usar any para evitar errores de tipo
function procesarCualquierCosa(datos: any): any {
    return datos.propiedad.metodo();
}

// ✅ Bueno: Tipos específicos o genéricos
function procesarDatos<T extends { propiedad: { metodo(): string } }>(datos: T): string {
    return datos.propiedad.metodo();
}
```

### 3. No Manejar Casos de Error
```typescript
// ❌ Malo: No manejar errores
async function obtenerDatos(url: string): Promise<any> {
    const respuesta = await fetch(url);
    return await respuesta.json();
}

// ✅ Bueno: Manejo explícito de errores
async function obtenerDatos(url: string): Promise<{ exito: true; datos: any } | { exito: false; error: string }> {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            return { exito: false, error: `HTTP ${respuesta.status}` };
        }
        const datos = await respuesta.json();
        return { exito: true, datos };
    } catch (error) {
        return { exito: false, error: error instanceof Error ? error.message : 'Error desconocido' };
    }
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre clases y herencia en TypeScript, incluyendo:

- Definición de clases con tipos
- Modificadores de acceso (public, private, protected)
- Propiedades estáticas y métodos de clase
- Herencia y polimorfismo
- Clases abstractas e interfaces
- Patrones de diseño con clases

---

**Tiempo estimado de estudio**: 75-90 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con funciones tipadas
**Dificultad**: Intermedia-Avanzada

# Tema 6: Genéricos (Generics)

## Introducción

Los genéricos son una de las características más poderosas y avanzadas de TypeScript, representando la capacidad del lenguaje para crear código verdaderamente reutilizable y type-safe. Los genéricos nos permiten:

- **Crear componentes reutilizables** que funcionan con múltiples tipos de datos
- **Mantener la seguridad de tipos** en tiempo de compilación
- **Eliminar la duplicación de código** al crear versiones tipadas de funciones y clases
- **Implementar patrones avanzados** como repositorios, factories y builders
- **Crear APIs flexibles** que se adaptan a diferentes contextos de uso
- **Aprovechar la inferencia de tipos** para una experiencia de desarrollo fluida
- **Construir sistemas de tipos complejos** con restricciones y utilidades

En este tema exploraremos desde conceptos básicos hasta patrones avanzados de genéricos, proporcionando las herramientas necesarias para crear código TypeScript verdaderamente escalable y mantenible.

## ¿Qué son los Genéricos?

Los genéricos permiten crear componentes que pueden trabajar con diferentes tipos de datos sin perder la información de tipos. Es como crear una plantilla que puede ser reutilizada con diferentes tipos.

```typescript
// Sin genéricos - función específica para números
function identidadNumber(valor: number): number {
    return valor;
}

// Con genéricos - función reutilizable para cualquier tipo
function identidad<T>(valor: T): T {
    return valor;
}

// Uso
let numero = identidad<number>(42);        // number
let texto = identidad<string>("hola");     // string
let booleano = identidad<boolean>(true);   // boolean
```

## Funciones Genéricas

### Funciones Genéricas Básicas

```typescript
// Función genérica básica
function obtenerPrimero<T>(array: T[]): T | undefined {
    return array[0];
}

// Función genérica con múltiples parámetros de tipo
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

// Función genérica con parámetros rest
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

// Uso
let primerNumero = obtenerPrimero<number>([1, 2, 3]);        // number | undefined
let primerTexto = obtenerPrimero<string>(["a", "b", "c"]);   // string | undefined
let combinacion = combinar<string, number>("hola", 42);      // [string, number]
let arrayNumeros = crearArray<number>(1, 2, 3, 4, 5);       // number[]
```

### Funciones Genéricas con Restricciones

```typescript
// Restricción con extends
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

// Restricción con interface
interface Longitud {
    length: number;
}

function obtenerLongitud<T extends Longitud>(item: T): number {
    return item.length;
}

// Uso
let usuario = { nombre: "Juan", edad: 30 };
let nombre = obtenerPropiedad(usuario, "nombre"); // string
let edad = obtenerPropiedad(usuario, "edad");     // number

let longitudTexto = obtenerLongitud("hola");      // 4
let longitudArray = obtenerLongitud([1, 2, 3]);   // 3
```

### Funciones Genéricas con Tipos Condicionales

```typescript
// Tipo condicional
type EsArray<T> = T extends any[] ? true : false;

function procesarValor<T>(valor: T): T extends string ? string : T extends number ? number : T {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else if (typeof valor === "number") {
        return (valor * 2) as any;
    } else {
        return valor;
    }
}

// Uso
let resultadoString = procesarValor("hola");     // string
let resultadoNumber = procesarValor(5);          // number
let resultadoBoolean = procesarValor(true);      // boolean
```

## Interfaces Genéricas

### Interfaces Genéricas Básicas

```typescript
// Interface genérica
interface Contenedor<T> {
    contenido: T;
    obtener(): T;
    establecer(valor: T): void;
}

// Implementación de interface genérica
class Caja<T> implements Contenedor<T> {
    constructor(public contenido: T) {}
    
    obtener(): T {
        return this.contenido;
    }
    
    establecer(valor: T): void {
        this.contenido = valor;
    }
}

// Uso
let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);
```

### Interfaces Genéricas con Restricciones

```typescript
// Interface con restricción
interface Comparable<T> {
    comparar(otro: T): number;
}

// Interface genérica que usa la restricción
interface ListaOrdenada<T extends Comparable<T>> {
    agregar(elemento: T): void;
    obtenerTodos(): T[];
    ordenar(): void;
}

// Implementación
class ListaOrdenadaImpl<T extends Comparable<T>> implements ListaOrdenada<T> {
    private elementos: T[] = [];
    
    agregar(elemento: T): void {
        this.elementos.push(elemento);
        this.ordenar();
    }
    
    obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    ordenar(): void {
        this.elementos.sort((a, b) => a.comparar(b));
    }
}
```

### Interfaces Genéricas con Múltiples Parámetros

```typescript
// Interface genérica con múltiples parámetros
interface Mapeo<K, V> {
    establecer(clave: K, valor: V): void;
    obtener(clave: K): V | undefined;
    eliminar(clave: K): boolean;
    existe(clave: K): boolean;
}

// Implementación
class MapeoImpl<K, V> implements Mapeo<K, V> {
    private elementos = new Map<K, V>();
    
    establecer(clave: K, valor: V): void {
        this.elementos.set(clave, valor);
    }
    
    obtener(clave: K): V | undefined {
        return this.elementos.get(clave);
    }
    
    eliminar(clave: K): boolean {
        return this.elementos.delete(clave);
    }
    
    existe(clave: K): boolean {
        return this.elementos.has(clave);
    }
}
```

## Clases Genéricas

### Clases Genéricas Básicas

```typescript
// Clase genérica
class Pila<T> {
    private elementos: T[] = [];
    
    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    desapilar(): T | undefined {
        return this.elementos.pop();
    }
    
    obtenerCima(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
    
    obtenerTamaño(): number {
        return this.elementos.length;
    }
}

// Uso
let pilaNumeros = new Pila<number>();
let pilaStrings = new Pila<string>();

pilaNumeros.apilar(1);
pilaNumeros.apilar(2);
pilaNumeros.apilar(3);

pilaStrings.apilar("a");
pilaStrings.apilar("b");
pilaStrings.apilar("c");
```

### Clases Genéricas con Restricciones

```typescript
// Interface para restricción
interface Sumable {
    sumar(otro: Sumable): Sumable;
}

// Clase genérica con restricción
class Calculadora<T extends Sumable> {
    private valor: T;
    
    constructor(valor: T) {
        this.valor = valor;
    }
    
    sumar(otro: T): T {
        return this.valor.sumar(otro) as T;
    }
    
    obtenerValor(): T {
        return this.valor;
    }
}

// Implementación de la interface
class NumeroSumable implements Sumable {
    constructor(public valor: number) {}
    
    sumar(otro: Sumable): Sumable {
        if (otro instanceof NumeroSumable) {
            return new NumeroSumable(this.valor + otro.valor);
        }
        throw new Error("Tipo incompatible");
    }
}
```

## Tipos Genéricos

### Tipos Genéricos Básicos

```typescript
// Tipo genérico básico
type Contenedor<T> = {
    contenido: T;
    obtener(): T;
};

// Tipo genérico con restricción
type ClaveValor<K extends string, V> = {
    [P in K]: V;
};

// Tipo genérico con tipos condicionales
type EsString<T> = T extends string ? true : false;

// Uso
let contenedor: Contenedor<string> = {
    contenido: "hola",
    obtener: function() { return this.contenido; }
};

let claveValor: ClaveValor<"nombre" | "edad", string | number> = {
    nombre: "Juan",
    edad: 30
};
```

### Tipos Genéricos Avanzados

```typescript
// Tipo genérico con mapeo
type Mapear<T, U> = {
    [K in keyof T]: U;
};

// Tipo genérico con filtrado
type SoloStrings<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K];
};

// Tipo genérico con transformación
type HacerOpcional<T> = {
    [K in keyof T]?: T[K];
};

// Uso
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

type UsuarioMapeado = Mapear<Usuario, string>; // { nombre: string; edad: string; email: string; }
type SoloStringsUsuario = SoloStrings<Usuario>; // { nombre: string; email: string; }
type UsuarioOpcional = HacerOpcional<Usuario>;  // { nombre?: string; edad?: number; email?: string; }
```

## Utilidades de Tipos Genéricos

### Utilidades Básicas

```typescript
// Partial - hace todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;

// Required - hace todas las propiedades requeridas
type UsuarioRequerido = Required<UsuarioParcial>;

// Readonly - hace todas las propiedades de solo lectura
type UsuarioSoloLectura = Readonly<Usuario>;

// Pick - selecciona propiedades específicas
type UsuarioBasico = Pick<Usuario, "nombre" | "email">;

// Omit - omite propiedades específicas
type UsuarioSinEdad = Omit<Usuario, "edad">;

// Record - crea un tipo con claves y valores específicos
type Colores = Record<"rojo" | "verde" | "azul", string>;
```

### Utilidades Avanzadas

```typescript
// Exclude - excluye tipos de una unión
type SoloStrings = Exclude<string | number | boolean, number | boolean>;

// Extract - extrae tipos de una unión
type SoloNumeros = Extract<string | number | boolean, number>;

// NonNullable - excluye null y undefined
type SoloValores = NonNullable<string | null | undefined>;

// Parameters - extrae tipos de parámetros de función
type ParametrosSuma = Parameters<(a: number, b: number) => number>;

// ReturnType - extrae tipo de retorno de función
type RetornoSuma = ReturnType<(a: number, b: number) => number>;

// InstanceType - extrae tipo de instancia de clase
type InstanciaArray = InstanceType<typeof Array>;
```

## Genéricos con Inferencia

### Inferencia Automática

```typescript
// TypeScript infiere automáticamente los tipos
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

// No necesitas especificar el tipo explícitamente
let numeros = crearArray(1, 2, 3, 4, 5);        // number[]
let textos = crearArray("a", "b", "c");          // string[]
let mixto = crearArray(1, "a", true);            // (string | number | boolean)[]
```

### Inferencia con Restricciones

```typescript
// Inferencia con restricciones
function obtenerLongitud<T extends { length: number }>(item: T): number {
    return item.length;
}

// TypeScript infiere el tipo pero respeta la restricción
let longitudTexto = obtenerLongitud("hola");      // number
let longitudArray = obtenerLongitud([1, 2, 3]);   // number
let longitudObjeto = obtenerLongitud({ length: 5 }); // number
```

## Genéricos con Overloads

### Sobrecarga de Funciones Genéricas

```typescript
// Sobrecarga para diferentes tipos
function procesar<T extends string>(valor: T): string;
function procesar<T extends number>(valor: T): number;
function procesar<T extends boolean>(valor: T): boolean;

// Implementación
function procesar<T>(valor: T): T {
    if (typeof valor === "string") {
        return valor.toUpperCase() as T;
    } else if (typeof valor === "number") {
        return (valor * 2) as T;
    } else {
        return valor;
    }
}

// Uso
let resultadoString = procesar("hola");     // string
let resultadoNumber = procesar(5);          // number
let resultadoBoolean = procesar(true);      // boolean
```

## Patrones Avanzados con Genéricos

### 1. Repository Pattern
```typescript
interface Entidad {
    id: string;
}

interface Repositorio<T extends Entidad> {
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    update(id: string, entity: Partial<T>): Promise<T>;
    delete(id: string): Promise<boolean>;
}

class RepositorioBase<T extends Entidad> implements Repositorio<T> {
    constructor(private nombreTabla: string) {}
    
    async findById(id: string): Promise<T | null> {
        // Implementación de búsqueda por ID
        console.log(`Buscando ${this.nombreTabla} con ID: ${id}`);
        return null;
    }
    
    async findAll(): Promise<T[]> {
        // Implementación de búsqueda de todos
        console.log(`Obteniendo todos los ${this.nombreTabla}`);
        return [];
    }
    
    async save(entity: T): Promise<T> {
        // Implementación de guardado
        console.log(`Guardando ${this.nombreTabla}:`, entity);
        return entity;
    }
    
    async update(id: string, entity: Partial<T>): Promise<T> {
        // Implementación de actualización
        console.log(`Actualizando ${this.nombreTabla} ${id}:`, entity);
        return entity as T;
    }
    
    async delete(id: string): Promise<boolean> {
        // Implementación de eliminación
        console.log(`Eliminando ${this.nombreTabla} con ID: ${id}`);
        return true;
    }
}

// Uso específico
interface Usuario extends Entidad {
    nombre: string;
    email: string;
}

class UsuarioRepositorio extends RepositorioBase<Usuario> {
    constructor() {
        super('usuarios');
    }
    
    async findByEmail(email: string): Promise<Usuario | null> {
        // Método específico para usuarios
        console.log(`Buscando usuario por email: ${email}`);
        return null;
    }
}
```

### 2. Builder Pattern
```typescript
interface Constructor<T> {
    new (...args: any[]): T;
}

class Builder<T> {
    private propiedades: Partial<T> = {};
    
    constructor(private constructor: Constructor<T>) {}
    
    set<K extends keyof T>(clave: K, valor: T[K]): this {
        this.propiedades[clave] = valor;
        return this;
    }
    
    build(): T {
        const instancia = new this.constructor();
        Object.assign(instancia, this.propiedades);
        return instancia;
    }
}

// Uso del builder
class Producto {
    constructor(
        public nombre: string = '',
        public precio: number = 0,
        public categoria: string = '',
        public descripcion: string = ''
    ) {}
}

const producto = new Builder(Producto)
    .set('nombre', 'Laptop')
    .set('precio', 999.99)
    .set('categoria', 'Electrónicos')
    .set('descripcion', 'Laptop de alta gama')
    .build();
```

### 3. Factory Pattern con Genéricos
```typescript
interface Factory<T> {
    crear(...args: any[]): T;
}

interface Vehiculo {
    acelerar(): void;
    frenar(): void;
}

class Coche implements Vehiculo {
    constructor(public marca: string, public modelo: string) {}
    
    acelerar(): void {
        console.log(`${this.marca} ${this.modelo} acelerando...`);
    }
    
    frenar(): void {
        console.log(`${this.marca} ${this.modelo} frenando...`);
    }
}

class Moto implements Vehiculo {
    constructor(public marca: string, public cilindrada: number) {}
    
    acelerar(): void {
        console.log(`${this.marca} ${this.cilindrada}cc acelerando...`);
    }
    
    frenar(): void {
        console.log(`${this.marca} ${this.cilindrada}cc frenando...`);
    }
}

class VehiculoFactory<T extends Vehiculo> implements Factory<T> {
    constructor(private constructor: new (...args: any[]) => T) {}
    
    crear(...args: any[]): T {
        return new this.constructor(...args);
    }
}

// Uso de la factory
const cocheFactory = new VehiculoFactory(Coche);
const motoFactory = new VehiculoFactory(Moto);

const coche = cocheFactory.crear('Toyota', 'Corolla');
const moto = motoFactory.crear('Honda', 600);
```

### 4. Chain of Responsibility
```typescript
interface Manejador<T> {
    setSiguiente(manejador: Manejador<T>): Manejador<T>;
    manejar(solicitud: T): T | null;
}

abstract class ManejadorBase<T> implements Manejador<T> {
    private siguiente?: Manejador<T>;
    
    setSiguiente(manejador: Manejador<T>): Manejador<T> {
        this.siguiente = manejador;
        return manejador;
    }
    
    manejar(solicitud: T): T | null {
        if (this.puedeManejar(solicitud)) {
            return this.procesar(solicitud);
        }
        
        if (this.siguiente) {
            return this.siguiente.manejar(solicitud);
        }
        
        return null;
    }
    
    protected abstract puedeManejar(solicitud: T): boolean;
    protected abstract procesar(solicitud: T): T;
}

// Implementación específica
interface Solicitud {
    tipo: string;
    datos: any;
}

class ManejadorAutenticacion extends ManejadorBase<Solicitud> {
    protected puedeManejar(solicitud: Solicitud): boolean {
        return solicitud.tipo === 'autenticacion';
    }
    
    protected procesar(solicitud: Solicitud): Solicitud {
        console.log('Procesando autenticación...');
        return solicitud;
    }
}

class ManejadorAutorizacion extends ManejadorBase<Solicitud> {
    protected puedeManejar(solicitud: Solicitud): boolean {
        return solicitud.tipo === 'autorizacion';
    }
    
    protected procesar(solicitud: Solicitud): Solicitud {
        console.log('Procesando autorización...');
        return solicitud;
    }
}
```

## Utilidades de Tipos Avanzadas

### 1. Mapped Types Personalizados
```typescript
// Hacer todas las propiedades opcionales
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Hacer todas las propiedades requeridas
type Required<T> = {
    [P in keyof T]-?: T[P];
};

// Hacer todas las propiedades de solo lectura
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Crear un tipo con solo ciertas propiedades
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Crear un tipo sin ciertas propiedades
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Crear un tipo con claves y valores específicos
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

### 2. Conditional Types Avanzados
```typescript
// Tipo que extrae el tipo de retorno de una función
type ReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => infer R ? R : any;

// Tipo que extrae los tipos de parámetros de una función
type Parameters<T extends (...args: any) => any> = 
    T extends (...args: infer P) => any ? P : never;

// Tipo que extrae el tipo de instancia de una clase
type InstanceType<T extends new (...args: any) => any> = 
    T extends new (...args: any) => infer R ? R : any;

// Tipo que excluye null y undefined
type NonNullable<T> = T extends null | undefined ? never : T;

// Tipo que extrae tipos de una unión
type Extract<T, U> = T extends U ? T : never;

// Tipo que excluye tipos de una unión
type Exclude<T, U> = T extends U ? never : T;
```

### 3. Template Literal Types
```typescript
// Crear tipos de string basados en patrones
type EventName<T extends string> = `on${Capitalize<T>}`;

type MouseEvents = EventName<'click' | 'hover' | 'focus'>;
// Resultado: "onClick" | "onHover" | "onFocus"

// Crear tipos de API endpoints
type ApiEndpoint<T extends string> = `/api/${T}`;

type UserEndpoints = ApiEndpoint<'users' | 'posts' | 'comments'>;
// Resultado: "/api/users" | "/api/posts" | "/api/comments"

// Crear tipos de CSS properties
type CssProperty<T extends string> = `--${T}`;

type CustomProperties = CssProperty<'primary-color' | 'secondary-color'>;
// Resultado: "--primary-color" | "--secondary-color"
```

## Mejores Prácticas

### 1. Nomenclatura de Parámetros Genéricos
```typescript
// ✅ Bueno: Nombres descriptivos y consistentes
interface Repositorio<TEntity> {
    findById(id: string): Promise<TEntity | null>;
}

interface Mapeo<TKey, TValue> {
    get(key: TKey): TValue | undefined;
}

interface Factory<TProduct> {
    crear(): TProduct;
}

// ❌ Malo: Nombres vagos o inconsistentes
interface Repositorio<T> {
    findById(id: string): Promise<T | null>;
}

interface Mapeo<K, V> {
    get(key: K): V | undefined;
}
```

### 2. Uso de Restricciones
```typescript
// ✅ Bueno: Restricciones apropiadas
interface Comparable<T> {
    comparar(otro: T): number;
}

function ordenar<T extends Comparable<T>>(items: T[]): T[] {
    return items.sort((a, b) => a.comparar(b));
}

// ✅ Bueno: Restricciones con keyof
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

// ❌ Malo: Sin restricciones cuando son necesarias
function ordenar<T>(items: T[]): T[] {
    return items.sort(); // Error: T no tiene método sort
}
```

### 3. Inferencia de Tipos
```typescript
// ✅ Bueno: Aprovechar la inferencia
function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

const numeros = crearArray(1, 2, 3); // TypeScript infiere number[]
const textos = crearArray('a', 'b', 'c'); // TypeScript infiere string[]

// ✅ Bueno: Inferencia con restricciones
function obtenerLongitud<T extends { length: number }>(item: T): number {
    return item.length;
}

const longitud = obtenerLongitud("hola"); // TypeScript infiere string

// ❌ Malo: Especificar tipos innecesariamente
const numeros = crearArray<number>(1, 2, 3); // Redundante
```

### 4. Documentación de Genéricos
```typescript
/**
 * Repositorio genérico para entidades con ID
 * @template TEntity - Tipo de entidad que debe tener una propiedad 'id'
 * @template TCreate - Tipo para crear nuevas entidades
 * @template TUpdate - Tipo para actualizar entidades existentes
 */
interface Repositorio<TEntity extends { id: string }, TCreate, TUpdate> {
    /**
     * Busca una entidad por su ID
     * @param id - Identificador único de la entidad
     * @returns Promise que resuelve con la entidad o null si no se encuentra
     */
    findById(id: string): Promise<TEntity | null>;
    
    /**
     * Crea una nueva entidad
     * @param datos - Datos para crear la entidad
     * @returns Promise que resuelve con la entidad creada
     */
    crear(datos: TCreate): Promise<TEntity>;
    
    /**
     * Actualiza una entidad existente
     * @param id - Identificador de la entidad a actualizar
     * @param datos - Datos de actualización
     * @returns Promise que resuelve con la entidad actualizada
     */
    actualizar(id: string, datos: TUpdate): Promise<TEntity>;
}
```

## Casos de Uso Comunes

### 1. APIs y Servicios
```typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
    timestamp: Date;
}

interface ApiError {
    code: string;
    message: string;
    details?: any;
}

class ApiClient {
    async get<T>(url: string): Promise<ApiResponse<T>> {
        const response = await fetch(url);
        const data = await response.json();
        
        return {
            data,
            success: response.ok,
            message: response.ok ? 'Success' : 'Error',
            timestamp: new Date()
        };
    }
    
    async post<T, U>(url: string, body: T): Promise<ApiResponse<U>> {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        
        const data = await response.json();
        
        return {
            data,
            success: response.ok,
            message: response.ok ? 'Success' : 'Error',
            timestamp: new Date()
        };
    }
}

// Uso tipado
interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

const apiClient = new ApiClient();
const usuario = await apiClient.get<Usuario>('/api/usuarios/123');
const nuevoUsuario = await apiClient.post<Omit<Usuario, 'id'>, Usuario>('/api/usuarios', {
    nombre: 'Juan',
    email: 'juan@email.com'
});
```

### 2. Estado y Gestión de Datos
```typescript
interface Estado<T> {
    datos: T | null;
    cargando: boolean;
    error: string | null;
}

class GestorEstado<T> {
    private estado: Estado<T> = {
        datos: null,
        cargando: false,
        error: null
    };
    
    private observadores: Array<(estado: Estado<T>) => void> = [];
    
    obtenerEstado(): Estado<T> {
        return { ...this.estado };
    }
    
    establecerDatos(datos: T): void {
        this.estado = {
            datos,
            cargando: false,
            error: null
        };
        this.notificarObservadores();
    }
    
    establecerCargando(cargando: boolean): void {
        this.estado.cargando = cargando;
        this.notificarObservadores();
    }
    
    establecerError(error: string): void {
        this.estado = {
            datos: null,
            cargando: false,
            error
        };
        this.notificarObservadores();
    }
    
    suscribir(observador: (estado: Estado<T>) => void): () => void {
        this.observadores.push(observador);
        
        // Retornar función para desuscribirse
        return () => {
            const index = this.observadores.indexOf(observador);
            if (index > -1) {
                this.observadores.splice(index, 1);
            }
        };
    }
    
    private notificarObservadores(): void {
        this.observadores.forEach(observador => observador(this.obtenerEstado()));
    }
}

// Uso
const gestorUsuarios = new GestorEstado<Usuario[]>();
const desuscribir = gestorUsuarios.suscribir(estado => {
    console.log('Estado actualizado:', estado);
});
```

### 3. Validación y Transformación
```typescript
interface Validador<T> {
    validar(valor: unknown): valor is T;
    mensaje: string;
}

interface Transformador<T, U> {
    transformar(valor: T): U;
}

class Pipeline<T, U> {
    private validadores: Validador<any>[] = [];
    private transformadores: Transformador<any, any>[] = [];
    
    validar<V>(validador: Validador<V>): Pipeline<V, U> {
        this.validadores.push(validador);
        return this as any;
    }
    
    transformar<V>(transformador: Transformador<any, V>): Pipeline<T, V> {
        this.transformadores.push(transformador);
        return this as any;
    }
    
    procesar(valor: unknown): U {
        // Aplicar validadores
        for (const validador of this.validadores) {
            if (!validador.validar(valor)) {
                throw new Error(validador.mensaje);
            }
        }
        
        // Aplicar transformadores
        let resultado = valor as any;
        for (const transformador of this.transformadores) {
            resultado = transformador.transformar(resultado);
        }
        
        return resultado;
    }
}

// Uso
const pipeline = new Pipeline<unknown, string>()
    .validar({
        validar: (valor): valor is number => typeof valor === 'number',
        mensaje: 'El valor debe ser un número'
    })
    .transformar({
        transformar: (valor: number) => valor.toString()
    })
    .transformar({
        transformar: (valor: string) => valor.toUpperCase()
    });

const resultado = pipeline.procesar(42); // "42"
```

## Errores Comunes y Cómo Evitarlos

### 1. Genéricos Innecesarios
```typescript
// ❌ Malo: Genérico innecesario
function saludar<T>(nombre: T): T {
    return nombre;
}

// ✅ Bueno: Sin genérico cuando no es necesario
function saludar(nombre: string): string {
    return nombre;
}

// ✅ Bueno: Genérico cuando realmente se necesita
function identidad<T>(valor: T): T {
    return valor;
}
```

### 2. Restricciones Incorrectas
```typescript
// ❌ Malo: Restricción demasiado amplia
function procesar<T extends any>(valor: T): T {
    return valor;
}

// ❌ Malo: Restricción demasiado específica
function procesar<T extends string>(valor: T): T {
    return valor;
}

// ✅ Bueno: Restricción apropiada
function procesar<T extends string | number>(valor: T): T {
    return valor;
}
```

### 3. No Aprovechar la Inferencia
```typescript
// ❌ Malo: Especificar tipos innecesariamente
const numeros = crearArray<number>(1, 2, 3);
const textos = crearArray<string>('a', 'b', 'c');

// ✅ Bueno: Aprovechar la inferencia
const numeros = crearArray(1, 2, 3);
const textos = crearArray('a', 'b', 'c');
```

### 4. Genéricos en Contextos Incorrectos
```typescript
// ❌ Malo: Genérico en clase que no lo necesita
class Logger<T> {
    log(mensaje: string): void {
        console.log(mensaje);
    }
}

// ✅ Bueno: Sin genérico cuando no es necesario
class Logger {
    log(mensaje: string): void {
        console.log(mensaje);
    }
}

// ✅ Bueno: Genérico cuando realmente se necesita
class Logger<T> {
    log(mensaje: T): void {
        console.log(mensaje);
    }
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre módulos y imports/exports, incluyendo:

- Organización de código en módulos
- Sistemas de módulos (CommonJS, ES6, AMD)
- Importaciones y exportaciones
- Re-exportaciones y barrel exports
- Configuración de módulos en TypeScript

---

**Tiempo estimado de estudio**: 90-105 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con genéricos
**Dificultad**: Avanzada

// ========================================
// EJEMPLOS - TYPE MANIPULATION EN TYPESCRIPT
// ========================================

// 1. GENERICS BÁSICOS
// ========================================

// Función genérica simple
function identidad<T>(arg: T): T {
    return arg;
}

let resultado = identidad<string>("Hola");
let numero = identidad<number>(42);
let booleano = identidad<boolean>(true);

console.log("=== GENERICS BÁSICOS ===");
console.log("Resultado:", resultado);
console.log("Número:", numero);
console.log("Booleano:", booleano);

// 2. GENERICS CON RESTRICCIONES
// ========================================

interface ConLongitud {
    length: number;
}

function logLongitud<T extends ConLongitud>(arg: T): T {
    console.log("Longitud:", arg.length);
    return arg;
}

let texto = logLongitud("Hola Mundo");
let array = logLongitud([1, 2, 3, 4, 5]);
let objeto = logLongitud({ length: 10, valor: "test" });

console.log("\n=== GENERICS CON RESTRICCIONES ===");
console.log("Texto:", texto);
console.log("Array:", array);
console.log("Objeto:", objeto);

// 3. GENERICS EN INTERFACES
// ========================================

interface Caja<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}

class CajaString implements Caja<string> {
    constructor(public contenido: string) {}
    
    obtenerContenido(): string {
        return this.contenido;
    }
    
    establecerContenido(nuevoContenido: string): void {
        this.contenido = nuevoContenido;
    }
}

class CajaNumber implements Caja<number> {
    constructor(public contenido: number) {}
    
    obtenerContenido(): number {
        return this.contenido;
    }
    
    establecerContenido(nuevoContenido: number): void {
        this.contenido = nuevoContenido;
    }
}

let cajaTexto = new CajaString("Contenido");
let cajaNumero = new CajaNumber(42);

console.log("\n=== GENERICS EN INTERFACES ===");
console.log("Caja texto:", cajaTexto.obtenerContenido());
console.log("Caja número:", cajaNumero.obtenerContenido());

// 4. GENERICS EN CLASES
// ========================================

class Almacen<T> {
    private items: T[] = [];
    
    agregar(item: T): void {
        this.items.push(item);
    }
    
    obtener(index: number): T | undefined {
        return this.items[index];
    }
    
    obtenerTodos(): T[] {
        return [...this.items];
    }
    
    obtenerLongitud(): number {
        return this.items.length;
    }
}

let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Primer elemento");
almacenStrings.agregar("Segundo elemento");

let almacenNumbers = new Almacen<number>();
almacenNumbers.agregar(1);
almacenNumbers.agregar(2);
almacenNumbers.agregar(3);

console.log("\n=== GENERICS EN CLASES ===");
console.log("Almacen strings:", almacenStrings.obtenerTodos());
console.log("Almacen numbers:", almacenNumbers.obtenerTodos());

// 5. KEYOF
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

type ClavesUsuario = keyof Usuario; // "id" | "nombre" | "email" | "activo"

function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

function establecerPropiedad<T, K extends keyof T>(objeto: T, clave: K, valor: T[K]): void {
    objeto[clave] = valor;
}

let usuario = { id: 1, nombre: "Juan", email: "juan@email.com", activo: true };
let nombre = obtenerPropiedad(usuario, "nombre");
let id = obtenerPropiedad(usuario, "id");

console.log("\n=== KEYOF ===");
console.log("Claves usuario:", "id" | "nombre" | "email" | "activo");
console.log("Nombre obtenido:", nombre);
console.log("ID obtenido:", id);

// 6. TYPEOF
// ========================================

let usuario2 = { id: 1, nombre: "María", email: "maria@email.com" };
type TipoUsuario = typeof usuario2;

const configuracion = {
    servidor: "localhost",
    puerto: 3000,
    ssl: true
} as const;

type Configuracion = typeof configuracion;

function crearUsuario(datos: TipoUsuario): TipoUsuario {
    return { ...datos };
}

console.log("\n=== TYPEOF ===");
console.log("Tipo usuario:", "id: number, nombre: string, email: string");
console.log("Configuración:", configuracion);

// 7. INDEXED ACCESS TYPES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
}

type NombreUsuario = Usuario["nombre"]; // string
type DireccionUsuario = Usuario["direccion"]; // { calle: string; ciudad: string; codigoPostal: string; }
type CalleUsuario = Usuario["direccion"]["calle"]; // string

function obtenerValor<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

let usuario3: Usuario = {
    id: 1,
    nombre: "Pedro",
    email: "pedro@email.com",
    direccion: {
        calle: "Calle Principal",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
};

let nombreUsuario = obtenerValor(usuario3, "nombre");
let direccionUsuario = obtenerValor(usuario3, "direccion");

console.log("\n=== INDEXED ACCESS TYPES ===");
console.log("Nombre usuario:", nombreUsuario);
console.log("Dirección usuario:", direccionUsuario);

// 8. TEMPLATE LITERAL TYPES
// ========================================

type Evento = "click" | "hover" | "focus";
type EventoHandler = `on${Capitalize<Evento>}`; // "onClick" | "onHover" | "onFocus"

type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

type Permiso = `${Accion}_${Recurso}`;
// "crear_usuario" | "leer_usuario" | "actualizar_usuario" | "eliminar_usuario" | ...

type APIEndpoint = `/api/${Recurso}`;
// "/api/usuario" | "/api/producto" | "/api/orden"

interface Eventos {
    [K in EventoHandler]: (evento: Event) => void;
}

let eventos: Eventos = {
    onClick: (e) => console.log("Click"),
    onHover: (e) => console.log("Hover"),
    onFocus: (e) => console.log("Focus")
};

console.log("\n=== TEMPLATE LITERAL TYPES ===");
console.log("Eventos definidos:", Object.keys(eventos));
console.log("Permisos:", "crear_usuario, leer_usuario, actualizar_usuario, eliminar_usuario, ...");
console.log("Endpoints API:", "/api/usuario, /api/producto, /api/orden");

// 9. CONDITIONAL TYPES
// ========================================

type EsArray<T> = T extends any[] ? true : false;
type EsString<T> = T extends string ? true : false;
type NoNulo<T> = T extends null | undefined ? never : T;
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

// Ejemplos de uso
type EsArrayString = EsArray<string[]>; // true
type EsArrayNumber = EsArray<number>; // false
type EsStringTexto = EsString<string>; // true
type EsStringNumero = EsString<number>; // false

type NoNuloString = NoNulo<string | null>; // string
type NoNuloNumber = NoNulo<number | undefined>; // number

type ElementoStringArray = ElementoArray<string[]>; // string
type ElementoNumberArray = ElementoArray<number[]>; // number

function ejemploFuncion(): string {
    return "Hola";
}

type RetornoEjemplo = RetornoFuncion<typeof ejemploFuncion>; // string

console.log("\n=== CONDITIONAL TYPES ===");
console.log("Es array string:", EsArrayString);
console.log("Es array number:", EsArrayNumber);
console.log("Es string texto:", EsStringTexto);
console.log("Es string numero:", EsStringNumero);
console.log("No nulo string:", NoNuloString);
console.log("No nulo number:", NoNuloNumber);
console.log("Elemento string array:", ElementoStringArray);
console.log("Elemento number array:", ElementoNumberArray);
console.log("Retorno ejemplo:", RetornoEjemplo);

// 10. MAPPED TYPES
// ========================================

type Opcional<T> = {
    [K in keyof T]?: T[K];
};

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

type ClavesString<T> = {
    [K in keyof T]: string;
};

type ClavesOpcionales<T> = {
    [K in keyof T]?: T[K];
};

type ClavesRequeridas<T> = {
    [K in keyof T]-?: T[K];
};

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

type UsuarioOpcional = Opcional<Usuario>;
type UsuarioSoloLectura = SoloLectura<Usuario>;
type UsuarioClavesString = ClavesString<Usuario>;
type UsuarioClavesOpcionales = ClavesOpcionales<Usuario>;
type UsuarioClavesRequeridas = ClavesRequeridas<Usuario>;

let usuarioOpcional: UsuarioOpcional = {
    nombre: "Juan"
    // Las demás propiedades son opcionales
};

let usuarioSoloLectura: UsuarioSoloLectura = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    activo: true
};

// usuarioSoloLectura.id = 2; // ❌ Error: no se puede modificar

console.log("\n=== MAPPED TYPES ===");
console.log("Usuario opcional:", usuarioOpcional);
console.log("Usuario solo lectura:", usuarioSoloLectura);

// 11. INFER
// ========================================

type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;
type ParametrosFuncion<T> = T extends (...args: infer P) => any ? P : never;
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type PropiedadPromesa<T> = T extends Promise<infer U> ? U : never;
type ClaveObjeto<T> = T extends Record<infer K, any> ? K : never;

function ejemploFuncion2(a: string, b: number): boolean {
    return true;
}

type RetornoEjemplo2 = RetornoFuncion<typeof ejemploFuncion2>; // boolean
type ParametrosEjemplo2 = ParametrosFuncion<typeof ejemploFuncion2>; // [string, number]

type ElementoStringArray2 = ElementoArray<string[]>; // string
type ElementoNumberArray2 = ElementoArray<number[]>; // number

type PropiedadStringPromise = PropiedadPromesa<Promise<string>>; // string
type PropiedadNumberPromise = PropiedadPromesa<Promise<number>>; // number

type ClaveUsuario = ClaveObjeto<Usuario>; // "id" | "nombre" | "email" | "activo"

console.log("\n=== INFER ===");
console.log("Retorno ejemplo 2:", RetornoEjemplo2);
console.log("Parámetros ejemplo 2:", ParametrosEjemplo2);
console.log("Elemento string array 2:", ElementoStringArray2);
console.log("Elemento number array 2:", ElementoNumberArray2);
console.log("Propiedad string promise:", PropiedadStringPromise);
console.log("Propiedad number promise:", PropiedadNumberPromise);
console.log("Clave usuario:", ClaveUsuario);

// 12. CASOS DE USO PRÁCTICOS
// ========================================

// Sistema de Eventos
type Evento = "click" | "hover" | "focus";
type EventoHandler = `on${Capitalize<Evento>}`;

interface Eventos {
    [K in EventoHandler]: (evento: Event) => void;
}

// Sistema de Permisos
type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

type Permiso = `${Accion}_${Recurso}`;
type Permisos = Record<Permiso, boolean>;

let permisos: Permisos = {
    crear_usuario: true,
    leer_usuario: true,
    actualizar_usuario: false,
    eliminar_usuario: false,
    crear_producto: true,
    leer_producto: true,
    actualizar_producto: true,
    eliminar_producto: false,
    crear_orden: true,
    leer_orden: true,
    actualizar_orden: true,
    eliminar_orden: true
};

// Sistema de APIs
type Recurso = "usuario" | "producto" | "orden";
type Metodo = "GET" | "POST" | "PUT" | "DELETE";

type Endpoint = `/api/${Recurso}`;
type MetodoEndpoint = `${Metodo} ${Endpoint}`;

// Sistema de Validación
type Validacion<T> = {
    [K in keyof T]: (valor: T[K]) => boolean;
};

type MensajesError<T> = {
    [K in keyof T]: string;
};

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

type ValidacionesUsuario = Validacion<Usuario>;
type MensajesErrorUsuario = MensajesError<Usuario>;

let validaciones: ValidacionesUsuario = {
    id: (valor) => valor > 0,
    nombre: (valor) => valor.length > 0,
    email: (valor) => valor.includes("@"),
    edad: (valor) => valor >= 18
};

let mensajesError: MensajesErrorUsuario = {
    id: "El ID debe ser mayor que 0",
    nombre: "El nombre no puede estar vacío",
    email: "El email debe ser válido",
    edad: "La edad debe ser mayor o igual a 18"
};

console.log("\n=== CASOS DE USO PRÁCTICOS ===");
console.log("Permisos:", permisos);
console.log("Validaciones:", validaciones);
console.log("Mensajes error:", mensajesError);

// 13. UTILITY TYPES PERSONALIZADOS
// ========================================

// DeepPartial<T> - hace todas las propiedades opcionales recursivamente
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// DeepReadonly<T> - hace todas las propiedades de solo lectura recursivamente
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// PartialBy<T, K> - hace opcionales solo ciertas propiedades
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// RequiredBy<T, K> - hace requeridas solo ciertas propiedades
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
}

type UsuarioParcialProfundo = DeepPartial<Usuario>;
type UsuarioSoloLecturaProfundo = DeepReadonly<Usuario>;
type UsuarioConEmailOpcional = PartialBy<Usuario, "email">;
type UsuarioConEmailRequerido = RequiredBy<Usuario, "email">;

let usuarioParcial: UsuarioParcialProfundo = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
        // ciudad y codigoPostal son opcionales
    }
};

let usuarioSoloLectura: UsuarioSoloLecturaProfundo = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    direccion: {
        calle: "Calle Principal",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
};

// usuarioSoloLectura.direccion.calle = "Nueva Calle"; // ❌ Error: no se puede modificar

console.log("\n=== UTILITY TYPES PERSONALIZADOS ===");
console.log("Usuario parcial profundo:", usuarioParcial);
console.log("Usuario solo lectura profundo:", usuarioSoloLectura);

// 14. GENERICS CON MÚLTIPLES PARÁMETROS
// ========================================

interface Par<T, U> {
    primero: T;
    segundo: U;
}

function crearPar<T, U>(primero: T, segundo: U): Par<T, U> {
    return { primero, segundo };
}

let parStringNumber = crearPar("Hola", 42);
let parBooleanArray = crearPar(true, [1, 2, 3]);

console.log("\n=== GENERICS CON MÚLTIPLES PARÁMETROS ===");
console.log("Par string-number:", parStringNumber);
console.log("Par boolean-array:", parBooleanArray);

// 15. GENERICS CON RESTRICCIONES COMPLEJAS
// ========================================

interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

function procesarConId<T extends ConId>(item: T): T {
    console.log("Procesando item con ID:", item.id);
    return item;
}

function procesarConNombre<T extends ConNombre>(item: T): T {
    console.log("Procesando item con nombre:", item.nombre);
    return item;
}

function procesarConIdYNombre<T extends ConId & ConNombre>(item: T): T {
    console.log("Procesando item con ID y nombre:", item.id, item.nombre);
    return item;
}

let usuarioConId: ConId = { id: 1 };
let usuarioConNombre: ConNombre = { nombre: "Juan" };
let usuarioCompleto: ConId & ConNombre = { id: 1, nombre: "Juan" };

procesarConId(usuarioConId);
procesarConNombre(usuarioConNombre);
procesarConIdYNombre(usuarioCompleto);

console.log("\n=== GENERICS CON RESTRICCIONES COMPLEJAS ===");
console.log("Procesamiento completado");

// 16. GENERICS CON VALORES POR DEFECTO
// ========================================

interface Configuracion<T = string> {
    valor: T;
    descripcion: string;
}

let configString: Configuracion = { valor: "Hola", descripcion: "Texto" };
let configNumber: Configuracion<number> = { valor: 42, descripcion: "Número" };
let configBoolean: Configuracion<boolean> = { valor: true, descripcion: "Booleano" };

console.log("\n=== GENERICS CON VALORES POR DEFECTO ===");
console.log("Config string:", configString);
console.log("Config number:", configNumber);
console.log("Config boolean:", configBoolean);

// 17. GENERICS CON FUNCIONES DE ORDEN SUPERIOR
// ========================================

function crearFuncion<T, R>(funcion: (arg: T) => R): (arg: T) => R {
    return funcion;
}

function crearFuncionAsync<T, R>(funcion: (arg: T) => R): (arg: T) => Promise<R> {
    return async (arg: T) => {
        return funcion(arg);
    };
}

let funcionString = crearFuncion((texto: string) => texto.toUpperCase());
let funcionNumber = crearFuncion((numero: number) => numero * 2);
let funcionAsync = crearFuncionAsync((texto: string) => texto.length);

console.log("\n=== GENERICS CON FUNCIONES DE ORDEN SUPERIOR ===");
console.log("Función string:", funcionString("hola"));
console.log("Función number:", funcionNumber(21));
funcionAsync("Hola Mundo").then(resultado => {
    console.log("Función async:", resultado);
});

// 18. GENERICS CON ARRAYS Y OBJETOS
// ========================================

function filtrar<T>(array: T[], predicado: (item: T) => boolean): T[] {
    return array.filter(predicado);
}

function mapear<T, U>(array: T[], transformar: (item: T) => U): U[] {
    return array.map(transformar);
}

function reducir<T, U>(array: T[], reducir: (acumulador: U, item: T) => U, valorInicial: U): U {
    return array.reduce(reducir, valorInicial);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrar(numeros, n => n % 2 === 0);
let numerosDuplicados = mapear(numeros, n => n * 2);
let suma = reducir(numeros, (acc, n) => acc + n, 0);

console.log("\n=== GENERICS CON ARRAYS Y OBJETOS ===");
console.log("Números pares:", numerosPares);
console.log("Números duplicados:", numerosDuplicados);
console.log("Suma:", suma);

// 19. GENERICS CON PROMESAS
// ========================================

function crearPromesa<T>(valor: T): Promise<T> {
    return Promise.resolve(valor);
}

function crearPromesaConRetraso<T>(valor: T, retraso: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(valor), retraso);
    });
}

async function procesarPromesas<T>(promesas: Promise<T>[]): Promise<T[]> {
    return Promise.all(promesas);
}

let promesaString = crearPromesa("Hola");
let promesaNumber = crearPromesa(42);
let promesaConRetraso = crearPromesaConRetraso("Retraso", 1000);

console.log("\n=== GENERICS CON PROMESAS ===");
console.log("Promesa string:", promesaString);
console.log("Promesa number:", promesaNumber);
console.log("Promesa con retraso:", promesaConRetraso);

// 20. GENERICS CON CLASES Y HERENCIA
// ========================================

class Base<T> {
    protected valor: T;
    
    constructor(valor: T) {
        this.valor = valor;
    }
    
    obtenerValor(): T {
        return this.valor;
    }
}

class Derivada<T, U> extends Base<T> {
    private segundoValor: U;
    
    constructor(valor: T, segundoValor: U) {
        super(valor);
        this.segundoValor = segundoValor;
    }
    
    obtenerSegundoValor(): U {
        return this.segundoValor;
    }
    
    obtenerAmbosValores(): [T, U] {
        return [this.valor, this.segundoValor];
    }
}

let base = new Base<string>("Base");
let derivada = new Derivada<string, number>("Derivada", 42);

console.log("\n=== GENERICS CON CLASES Y HERENCIA ===");
console.log("Base valor:", base.obtenerValor());
console.log("Derivada valor:", derivada.obtenerValor());
console.log("Derivada segundo valor:", derivada.obtenerSegundoValor());
console.log("Derivada ambos valores:", derivada.obtenerAmbosValores());

console.log("\n=== FIN DE EJEMPLOS DE TYPE MANIPULATION ===");

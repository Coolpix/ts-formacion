// ========================================
// EJERCICIOS - TYPE MANIPULATION EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: GENERICS BÁSICOS
// ========================================
// Crea una función genérica que retorne el primer elemento de un array

// TODO: Crea una función genérica obtenerPrimerElemento
// function obtenerPrimerElemento<T>(array: T[]): T | undefined {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 2: GENERICS CON RESTRICCIONES
// ========================================
// Crea una función genérica que funcione solo con objetos que tengan una propiedad 'id'

interface ConId {
    id: number;
}

// TODO: Crea una función genérica obtenerId que funcione solo con objetos que tengan id
// function obtenerId<T extends ConId>(objeto: T): number {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 3: GENERICS EN INTERFACES
// ========================================
// Crea una interfaz genérica para un contenedor que pueda almacenar cualquier tipo

// TODO: Crea una interfaz genérica Contenedor<T>
// interface Contenedor<T> {
//     contenido: T;
//     obtenerContenido(): T;
//     establecerContenido(nuevoContenido: T): void;
// }

// ========================================
// EJERCICIO 4: GENERICS EN CLASES
// ========================================
// Crea una clase genérica Pila que pueda almacenar elementos de cualquier tipo

// TODO: Crea una clase genérica Pila<T>
// class Pila<T> {
//     private elementos: T[] = [];
//     
//     // Implementa los métodos: push, pop, peek, isEmpty, size
// }

// ========================================
// EJERCICIO 5: KEYOF
// ========================================
// Crea una función que obtenga el valor de una propiedad de un objeto usando keyof

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// TODO: Crea una función obtenerPropiedad que use keyof
// function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 6: TYPEOF
// ========================================
// Crea un tipo basado en el tipo de una variable existente

const configuracion = {
    servidor: "localhost",
    puerto: 3000,
    ssl: true
} as const;

// TODO: Crea un tipo Configuracion basado en typeof configuracion
// type Configuracion = ...

// ========================================
// EJERCICIO 7: INDEXED ACCESS TYPES
// ========================================
// Crea tipos que accedan a propiedades específicas de una interfaz

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

// TODO: Crea tipos que accedan a propiedades específicas
// type NombreUsuario = ...
// type DireccionUsuario = ...
// type CalleUsuario = ...

// ========================================
// EJERCICIO 8: TEMPLATE LITERAL TYPES
// ========================================
// Crea tipos usando template literals para eventos y permisos

type Evento = "click" | "hover" | "focus";
type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

// TODO: Crea tipos usando template literals
// type EventoHandler = ...
// type Permiso = ...
// type APIEndpoint = ...

// ========================================
// EJERCICIO 9: CONDITIONAL TYPES
// ========================================
// Crea conditional types para diferentes casos

// TODO: Crea conditional types
// type EsArray<T> = ...
// type NoNulo<T> = ...
// type ElementoArray<T> = ...
// type RetornoFuncion<T> = ...

// ========================================
// EJERCICIO 10: MAPPED TYPES
// ========================================
// Crea mapped types para transformar tipos existentes

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// TODO: Crea mapped types
// type Opcional<T> = ...
// type SoloLectura<T> = ...
// type ClavesString<T> = ...

// ========================================
// EJERCICIO 11: INFER
// ========================================
// Crea tipos que usen infer para extraer información de otros tipos

// TODO: Crea tipos que usen infer
// type RetornoFuncion<T> = ...
// type ParametrosFuncion<T> = ...
// type ElementoArray<T> = ...
// type PropiedadPromesa<T> = ...

// ========================================
// EJERCICIO 12: UTILITY TYPES PERSONALIZADOS
// ========================================
// Crea utility types personalizados

// TODO: Crea utility types personalizados
// type DeepPartial<T> = ...
// type DeepReadonly<T> = ...
// type PartialBy<T, K extends keyof T> = ...
// type RequiredBy<T, K extends keyof T> = ...

// ========================================
// EJERCICIO 13: SISTEMA DE EVENTOS
// ========================================
// Crea un sistema de eventos usando type manipulation

type Evento = "click" | "hover" | "focus";

// TODO: Crea un sistema de eventos
// type EventoHandler = ...
// interface Eventos {
//     [K in EventoHandler]: (evento: Event) => void;
// }

// ========================================
// EJERCICIO 14: SISTEMA DE PERMISOS
// ========================================
// Crea un sistema de permisos usando template literal types

type Accion = "crear" | "leer" | "actualizar" | "eliminar";
type Recurso = "usuario" | "producto" | "orden";

// TODO: Crea un sistema de permisos
// type Permiso = ...
// type Permisos = ...

// ========================================
// EJERCICIO 15: SISTEMA DE VALIDACIÓN
// ========================================
// Crea un sistema de validación usando mapped types

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

// TODO: Crea un sistema de validación
// type Validacion<T> = ...
// type MensajesError<T> = ...

// ========================================
// EJERCICIO 16: GENERICS CON MÚLTIPLES PARÁMETROS
// ========================================
// Crea una función genérica que trabaje con múltiples tipos

// TODO: Crea una función genérica que combine dos valores
// function combinar<T, U>(primero: T, segundo: U): [T, U] {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 17: GENERICS CON RESTRICCIONES COMPLEJAS
// ========================================
// Crea una función genérica con restricciones complejas

interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

// TODO: Crea una función que requiera ambas interfaces
// function procesarConIdYNombre<T extends ConId & ConNombre>(item: T): T {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 18: GENERICS CON VALORES POR DEFECTO
// ========================================
// Crea una interfaz genérica con valores por defecto

// TODO: Crea una interfaz genérica con valor por defecto
// interface Configuracion<T = string> {
//     valor: T;
//     descripcion: string;
// }

// ========================================
// EJERCICIO 19: GENERICS CON FUNCIONES DE ORDEN SUPERIOR
// ========================================
// Crea funciones genéricas que trabajen con otras funciones

// TODO: Crea funciones genéricas de orden superior
// function crearFuncion<T, R>(funcion: (arg: T) => R): (arg: T) => R {
//     // Implementa la función
// }

// function crearFuncionAsync<T, R>(funcion: (arg: T) => R): (arg: T) => Promise<R> {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 20: GENERICS CON ARRAYS Y OBJETOS
// ========================================
// Crea funciones genéricas que trabajen con arrays

// TODO: Crea funciones genéricas para arrays
// function filtrar<T>(array: T[], predicado: (item: T) => boolean): T[] {
//     // Implementa la función
// }

// function mapear<T, U>(array: T[], transformar: (item: T) => U): U[] {
//     // Implementa la función
// }

// function reducir<T, U>(array: T[], reducir: (acumulador: U, item: T) => U, valorInicial: U): U {
//     // Implementa la función
// }

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: GENERICS BÁSICOS
function obtenerPrimerElemento<T>(array: T[]): T | undefined {
    return array[0];
}

// SOLUCIÓN 2: GENERICS CON RESTRICCIONES
function obtenerId<T extends ConId>(objeto: T): number {
    return objeto.id;
}

// SOLUCIÓN 3: GENERICS EN INTERFACES
interface Contenedor<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}

// SOLUCIÓN 4: GENERICS EN CLASES
class Pila<T> {
    private elementos: T[] = [];
    
    push(elemento: T): void {
        this.elementos.push(elemento);
    }
    
    pop(): T | undefined {
        return this.elementos.pop();
    }
    
    peek(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }
    
    isEmpty(): boolean {
        return this.elementos.length === 0;
    }
    
    size(): number {
        return this.elementos.length;
    }
}

// SOLUCIÓN 5: KEYOF
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

// SOLUCIÓN 6: TYPEOF
type Configuracion = typeof configuracion;

// SOLUCIÓN 7: INDEXED ACCESS TYPES
type NombreUsuario = Usuario["nombre"];
type DireccionUsuario = Usuario["direccion"];
type CalleUsuario = Usuario["direccion"]["calle"];

// SOLUCIÓN 8: TEMPLATE LITERAL TYPES
type EventoHandler = `on${Capitalize<Evento>}`;
type Permiso = `${Accion}_${Recurso}`;
type APIEndpoint = `/api/${Recurso}`;

// SOLUCIÓN 9: CONDITIONAL TYPES
type EsArray<T> = T extends any[] ? true : false;
type NoNulo<T> = T extends null | undefined ? never : T;
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

// SOLUCIÓN 10: MAPPED TYPES
type Opcional<T> = {
    [K in keyof T]?: T[K];
};

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

type ClavesString<T> = {
    [K in keyof T]: string;
};

// SOLUCIÓN 11: INFER
type RetornoFuncion<T> = T extends (...args: any[]) => infer R ? R : never;
type ParametrosFuncion<T> = T extends (...args: infer P) => any ? P : never;
type ElementoArray<T> = T extends (infer U)[] ? U : never;
type PropiedadPromesa<T> = T extends Promise<infer U> ? U : never;

// SOLUCIÓN 12: UTILITY TYPES PERSONALIZADOS
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// SOLUCIÓN 13: SISTEMA DE EVENTOS
type EventoHandler = `on${Capitalize<Evento>}`;
interface Eventos {
    [K in EventoHandler]: (evento: Event) => void;
}

// SOLUCIÓN 14: SISTEMA DE PERMISOS
type Permiso = `${Accion}_${Recurso}`;
type Permisos = Record<Permiso, boolean>;

// SOLUCIÓN 15: SISTEMA DE VALIDACIÓN
type Validacion<T> = {
    [K in keyof T]: (valor: T[K]) => boolean;
};

type MensajesError<T> = {
    [K in keyof T]: string;
};

// SOLUCIÓN 16: GENERICS CON MÚLTIPLES PARÁMETROS
function combinar<T, U>(primero: T, segundo: U): [T, U] {
    return [primero, segundo];
}

// SOLUCIÓN 17: GENERICS CON RESTRICCIONES COMPLEJAS
function procesarConIdYNombre<T extends ConId & ConNombre>(item: T): T {
    console.log("Procesando item con ID y nombre:", item.id, item.nombre);
    return item;
}

// SOLUCIÓN 18: GENERICS CON VALORES POR DEFECTO
interface Configuracion<T = string> {
    valor: T;
    descripcion: string;
}

// SOLUCIÓN 19: GENERICS CON FUNCIONES DE ORDEN SUPERIOR
function crearFuncion<T, R>(funcion: (arg: T) => R): (arg: T) => R {
    return funcion;
}

function crearFuncionAsync<T, R>(funcion: (arg: T) => R): (arg: T) => Promise<R> {
    return async (arg: T) => {
        return funcion(arg);
    };
}

// SOLUCIÓN 20: GENERICS CON ARRAYS Y OBJETOS
function filtrar<T>(array: T[], predicado: (item: T) => boolean): T[] {
    return array.filter(predicado);
}

function mapear<T, U>(array: T[], transformar: (item: T) => U): U[] {
    return array.map(transformar);
}

function reducir<T, U>(array: T[], reducir: (acumulador: U, item: T) => U, valorInicial: U): U {
    return array.reduce(reducir, valorInicial);
}

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE TYPE MANIPULATION ===");

// Ejemplo de uso de los tipos y funciones creados
let arrayStrings = ["Hola", "Mundo", "TypeScript"];
let primerString = obtenerPrimerElemento(arrayStrings);
console.log("Primer string:", primerString);

let arrayNumbers = [1, 2, 3, 4, 5];
let primerNumber = obtenerPrimerElemento(arrayNumbers);
console.log("Primer number:", primerNumber);

// Ejemplo con restricciones
let usuarioConId: ConId = { id: 1 };
let id = obtenerId(usuarioConId);
console.log("ID obtenido:", id);

// Ejemplo con keyof
let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true,
    direccion: {
        calle: "Calle Principal",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
};

let nombre = obtenerPropiedad(usuario, "nombre");
let email = obtenerPropiedad(usuario, "email");
console.log("Nombre:", nombre);
console.log("Email:", email);

// Ejemplo con typeof
console.log("Configuración:", configuracion);

// Ejemplo con indexed access types
let nombreUsuario: NombreUsuario = "María";
let direccionUsuario: DireccionUsuario = {
    calle: "Calle Secundaria",
    ciudad: "Barcelona",
    codigoPostal: "08001"
};
let calleUsuario: CalleUsuario = "Calle Terciaria";

console.log("Nombre usuario:", nombreUsuario);
console.log("Dirección usuario:", direccionUsuario);
console.log("Calle usuario:", calleUsuario);

// Ejemplo con template literal types
let eventoHandler: EventoHandler = "onClick";
let permiso: Permiso = "crear_usuario";
let endpoint: APIEndpoint = "/api/usuario";

console.log("Evento handler:", eventoHandler);
console.log("Permiso:", permiso);
console.log("Endpoint:", endpoint);

// Ejemplo con conditional types
type EsArrayString = EsArray<string[]>; // true
type EsArrayNumber = EsArray<number>; // false
type NoNuloString = NoNulo<string | null>; // string
type ElementoStringArray = ElementoArray<string[]>; // string

console.log("Es array string:", EsArrayString);
console.log("Es array number:", EsArrayNumber);
console.log("No nulo string:", NoNuloString);
console.log("Elemento string array:", ElementoStringArray);

// Ejemplo con mapped types
type UsuarioOpcional = Opcional<Usuario>;
type UsuarioSoloLectura = SoloLectura<Usuario>;
type UsuarioClavesString = ClavesString<Usuario>;

let usuarioOpcional: UsuarioOpcional = {
    nombre: "Juan"
    // Las demás propiedades son opcionales
};

console.log("Usuario opcional:", usuarioOpcional);

// Ejemplo con infer
function ejemploFuncion(): string {
    return "Hola";
}

type RetornoEjemplo = RetornoFuncion<typeof ejemploFuncion>; // string
type ParametrosEjemplo = ParametrosFuncion<typeof ejemploFuncion>; // []

console.log("Retorno ejemplo:", RetornoEjemplo);
console.log("Parámetros ejemplo:", ParametrosEjemplo);

// Ejemplo con utility types personalizados
type UsuarioParcialProfundo = DeepPartial<Usuario>;
type UsuarioSoloLecturaProfundo = DeepReadonly<Usuario>;
type UsuarioConEmailOpcional = PartialBy<Usuario, "email">;
type UsuarioConEmailRequerido = RequiredBy<Usuario, "email">;

let usuarioParcial: UsuarioParcialProfundo = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
        // Las demás propiedades son opcionales
    }
};

console.log("Usuario parcial profundo:", usuarioParcial);

// Ejemplo con sistema de eventos
let eventos: Eventos = {
    onClick: (e) => console.log("Click"),
    onHover: (e) => console.log("Hover"),
    onFocus: (e) => console.log("Focus")
};

console.log("Eventos definidos:", Object.keys(eventos));

// Ejemplo con sistema de permisos
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

console.log("Permisos:", permisos);

// Ejemplo con sistema de validación
let validaciones: Validacion<Usuario> = {
    id: (valor) => valor > 0,
    nombre: (valor) => valor.length > 0,
    email: (valor) => valor.includes("@"),
    edad: (valor) => valor >= 18,
    activo: (valor) => typeof valor === "boolean",
    direccion: (valor) => valor.calle.length > 0
};

let mensajesError: MensajesError<Usuario> = {
    id: "El ID debe ser mayor que 0",
    nombre: "El nombre no puede estar vacío",
    email: "El email debe ser válido",
    edad: "La edad debe ser mayor o igual a 18",
    activo: "El estado activo debe ser booleano",
    direccion: "La dirección debe tener una calle"
};

console.log("Validaciones:", validaciones);
console.log("Mensajes error:", mensajesError);

// Ejemplo con generics múltiples
let combinacion = combinar("Hola", 42);
console.log("Combinación:", combinacion);

// Ejemplo con restricciones complejas
let usuarioCompleto: ConId & ConNombre = { id: 1, nombre: "Juan" };
let procesado = procesarConIdYNombre(usuarioCompleto);
console.log("Usuario procesado:", procesado);

// Ejemplo con valores por defecto
let configString: Configuracion = { valor: "Hola", descripcion: "Texto" };
let configNumber: Configuracion<number> = { valor: 42, descripcion: "Número" };
let configBoolean: Configuracion<boolean> = { valor: true, descripcion: "Booleano" };

console.log("Config string:", configString);
console.log("Config number:", configNumber);
console.log("Config boolean:", configBoolean);

// Ejemplo con funciones de orden superior
let funcionString = crearFuncion((texto: string) => texto.toUpperCase());
let funcionNumber = crearFuncion((numero: number) => numero * 2);
let funcionAsync = crearFuncionAsync((texto: string) => texto.length);

console.log("Función string:", funcionString("hola"));
console.log("Función number:", funcionNumber(21));
funcionAsync("Hola Mundo").then(resultado => {
    console.log("Función async:", resultado);
});

// Ejemplo con arrays y objetos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrar(numeros, n => n % 2 === 0);
let numerosDuplicados = mapear(numeros, n => n * 2);
let suma = reducir(numeros, (acc, n) => acc + n, 0);

console.log("Números pares:", numerosPares);
console.log("Números duplicados:", numerosDuplicados);
console.log("Suma:", suma);

// Ejemplo con pila
let pilaStrings = new Pila<string>();
pilaStrings.push("Primero");
pilaStrings.push("Segundo");
pilaStrings.push("Tercero");

console.log("Pila strings - Tamaño:", pilaStrings.size());
console.log("Pila strings - Top:", pilaStrings.peek());
console.log("Pila strings - Pop:", pilaStrings.pop());
console.log("Pila strings - Tamaño después de pop:", pilaStrings.size());

let pilaNumbers = new Pila<number>();
pilaNumbers.push(1);
pilaNumbers.push(2);
pilaNumbers.push(3);

console.log("Pila numbers - Tamaño:", pilaNumbers.size());
console.log("Pila numbers - Top:", pilaNumbers.peek());
console.log("Pila numbers - Pop:", pilaNumbers.pop());
console.log("Pila numbers - Tamaño después de pop:", pilaNumbers.size());

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE TYPE MANIPULATION ===");

// ========================================
// EJERCICIOS - UTILITY TYPES EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: PARTIAL<T>
// ========================================
// Crea un tipo que haga opcionales todas las propiedades de la interfaz Usuario

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
}

// TODO: Crea un tipo UsuarioParcial que haga opcionales todas las propiedades
// type UsuarioParcial = ...

// ========================================
// EJERCICIO 2: REQUIRED<T>
// ========================================
// Crea un tipo que haga requeridas todas las propiedades de la interfaz UsuarioOpcional

interface UsuarioOpcional {
    id?: number;
    nombre?: string;
    email?: string;
    telefono?: string;
    activo?: boolean;
}

// TODO: Crea un tipo UsuarioRequerido que haga requeridas todas las propiedades
// type UsuarioRequerido = ...

// ========================================
// EJERCICIO 3: READONLY<T>
// ========================================
// Crea un tipo que haga de solo lectura todas las propiedades de la interfaz Usuario

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
}

// TODO: Crea un tipo UsuarioSoloLectura que haga de solo lectura todas las propiedades
// type UsuarioSoloLectura = ...

// ========================================
// EJERCICIO 4: RECORD<K, V>
// ========================================
// Crea un tipo que represente un diccionario de usuarios con claves string y valores Usuario

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// TODO: Crea un tipo DiccionarioUsuarios usando Record
// type DiccionarioUsuarios = ...

// ========================================
// EJERCICIO 5: PICK<T, K>
// ========================================
// Crea un tipo que seleccione solo las propiedades id y nombre de la interfaz Usuario

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    activo: boolean;
}

// TODO: Crea un tipo UsuarioBasico que seleccione solo id y nombre
// type UsuarioBasico = ...

// ========================================
// EJERCICIO 6: OMIT<T, K>
// ========================================
// Crea un tipo que excluya las propiedades id y telefono de la interfaz Usuario

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    activo: boolean;
}

// TODO: Crea un tipo UsuarioSinId que excluya id y telefono
// type UsuarioSinId = ...

// ========================================
// EJERCICIO 7: EXCLUDE<T, U>
// ========================================
// Crea un tipo que excluya "amarillo" y "verde" del tipo Colores

type Colores = "rojo" | "verde" | "azul" | "amarillo" | "naranja";

// TODO: Crea un tipo ColoresFrios que excluya "amarillo" y "verde"
// type ColoresFrios = ...

// ========================================
// EJERCICIO 8: EXTRACT<T, U>
// ========================================
// Crea un tipo que extraiga solo "rojo" y "azul" del tipo Colores

type Colores = "rojo" | "verde" | "azul" | "amarillo" | "naranja";

// TODO: Crea un tipo ColoresPrimarios que extraiga solo "rojo" y "azul"
// type ColoresPrimarios = ...

// ========================================
// EJERCICIO 9: NONNULLABLE<T>
// ========================================
// Crea un tipo que excluya null y undefined del tipo Tipos

type Tipos = string | number | boolean | null | undefined;

// TODO: Crea un tipo TiposNoNulos que excluya null y undefined
// type TiposNoNulos = ...

// ========================================
// EJERCICIO 10: PARAMETERS<T>
// ========================================
// Crea un tipo que extraiga los parámetros de la función sumar

function sumar(a: number, b: number, c: string): number {
    return a + b;
}

// TODO: Crea un tipo ParametrosSumar que extraiga los parámetros de sumar
// type ParametrosSumar = ...

// ========================================
// EJERCICIO 11: RETURNTYPE<T>
// ========================================
// Crea un tipo que extraiga el tipo de retorno de la función obtenerUsuario

function obtenerUsuario(): { id: number; nombre: string; email: string } {
    return { id: 1, nombre: "Juan", email: "juan@email.com" };
}

// TODO: Crea un tipo TipoRetorno que extraiga el tipo de retorno de obtenerUsuario
// type TipoRetorno = ...

// ========================================
// EJERCICIO 12: CONSTRUCTORPARAMETERS<T>
// ========================================
// Crea un tipo que extraiga los parámetros del constructor de la clase Usuario

class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public edad: number
    ) {}
}

// TODO: Crea un tipo ParametrosConstructor que extraiga los parámetros del constructor
// type ParametrosConstructor = ...

// ========================================
// EJERCICIO 13: INSTANCETYPE<T>
// ========================================
// Crea un tipo que extraiga el tipo de instancia de la clase Usuario

class Usuario {
    constructor(
        public nombre: string,
        public email: string
    ) {}
}

// TODO: Crea un tipo TipoInstancia que extraiga el tipo de instancia de Usuario
// type TipoInstancia = ...

// ========================================
// EJERCICIO 14: UTILITY TYPE PERSONALIZADO
// ========================================
// Crea un utility type personalizado que haga opcionales solo ciertas propiedades

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
}

// TODO: Crea un utility type PartialBy que haga opcionales solo las propiedades especificadas
// type PartialBy<T, K extends keyof T> = ...

// TODO: Usa PartialBy para crear un tipo que haga opcionales solo email y telefono
// type UsuarioConEmailOpcional = ...

// ========================================
// EJERCICIO 15: COMBINANDO UTILITY TYPES
// ========================================
// Crea tipos combinando múltiples utility types

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    fechaCreacion: Date;
    activo: boolean;
}

// TODO: Crea un tipo UsuarioCrear que excluya id, password y fechaCreacion
// type UsuarioCrear = ...

// TODO: Crea un tipo UsuarioActualizar que haga opcionales todas las propiedades excepto id
// type UsuarioActualizar = ...

// TODO: Crea un tipo UsuarioMostrar que seleccione solo id, nombre, email y activo
// type UsuarioMostrar = ...

// TODO: Crea un tipo UsuarioSeguro que excluya password y haga activo opcional
// type UsuarioSeguro = ...

// ========================================
// EJERCICIO 16: UTILITY TYPES CON FUNCIONES
// ========================================
// Crea funciones que usen utility types

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
}

// TODO: Crea una función actualizarUsuario que reciba id y datos parciales
// function actualizarUsuario(id: number, datos: Partial<Usuario>): Usuario {
//     // Implementa la función
// }

// TODO: Crea una función mostrarUsuario que retorne solo los campos públicos
// function mostrarUsuario(usuario: Usuario): Pick<Usuario, "id" | "nombre" | "email"> {
//     // Implementa la función
// }

// TODO: Crea una función crearUsuario que reciba datos sin id
// function crearUsuario(datos: Omit<Usuario, "id">): Usuario {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 17: UTILITY TYPES CON GENERICS
// ========================================
// Crea funciones genéricas que usen utility types

// TODO: Crea una función genérica procesarDatos que reciba datos parciales
// function procesarDatos<T>(datos: Partial<T>): T {
//     // Implementa la función
// }

// TODO: Crea una función genérica obtenerClaves que extraiga las claves de un objeto
// function obtenerClaves<T extends Record<string, any>>(objeto: T): (keyof T)[] {
//     // Implementa la función
// }

// TODO: Crea una función genérica seleccionarPropiedades que seleccione solo ciertas propiedades
// function seleccionarPropiedades<T, K extends keyof T>(
//     objeto: T,
//     propiedades: K[]
// ): Pick<T, K> {
//     // Implementa la función
// }

// ========================================
// EJERCICIO 18: UTILITY TYPES CON CONDITIONAL TYPES
// ========================================
// Crea utility types que usen conditional types

// TODO: Crea un utility type RequiredBy que haga requeridas solo ciertas propiedades
// type RequiredBy<T, K extends keyof T> = ...

// TODO: Crea un utility type RequiredOnly que excluya propiedades opcionales
// type RequiredOnly<T> = ...

// TODO: Crea un utility type DeepPartial que haga opcionales todas las propiedades recursivamente
// type DeepPartial<T> = ...

// ========================================
// EJERCICIO 19: CASOS DE USO PRÁCTICOS
// ========================================
// Crea tipos para casos de uso reales

interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    fechaCreacion: Date;
    activo: boolean;
}

// TODO: Crea un tipo ProductoCrear para crear productos (sin id y fechaCreacion)
// type ProductoCrear = ...

// TODO: Crea un tipo ProductoActualizar para actualizar productos (todas las propiedades opcionales excepto id)
// type ProductoActualizar = ...

// TODO: Crea un tipo ProductoMostrar para mostrar productos (solo campos públicos)
// type ProductoMostrar = ...

// TODO: Crea un tipo ProductoCatalogo para el catálogo (sin descripción y fechaCreacion)
// type ProductoCatalogo = ...

// ========================================
// EJERCICIO 20: SISTEMA DE PERMISOS
// ========================================
// Crea un sistema de permisos usando utility types

interface Permisos {
    leer: boolean;
    escribir: boolean;
    eliminar: boolean;
    administrar: boolean;
    moderar: boolean;
}

// TODO: Crea un tipo PermisosBasicos que seleccione solo leer y escribir
// type PermisosBasicos = ...

// TODO: Crea un tipo PermisosModerador que seleccione leer, escribir y moderar
// type PermisosModerador = ...

// TODO: Crea un tipo PermisosAdmin que seleccione todos los permisos
// type PermisosAdmin = ...

// TODO: Crea un tipo PermisosParciales que haga opcionales todos los permisos
// type PermisosParciales = ...

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: PARTIAL<T>
type UsuarioParcial = Partial<Usuario>;

// SOLUCIÓN 2: REQUIRED<T>
type UsuarioRequerido = Required<UsuarioOpcional>;

// SOLUCIÓN 3: READONLY<T>
type UsuarioSoloLectura = Readonly<Usuario>;

// SOLUCIÓN 4: RECORD<K, V>
type DiccionarioUsuarios = Record<string, Usuario>;

// SOLUCIÓN 5: PICK<T, K>
type UsuarioBasico = Pick<Usuario, "id" | "nombre">;

// SOLUCIÓN 6: OMIT<T, K>
type UsuarioSinId = Omit<Usuario, "id" | "telefono">;

// SOLUCIÓN 7: EXCLUDE<T, U>
type ColoresFrios = Exclude<Colores, "amarillo" | "verde">;

// SOLUCIÓN 8: EXTRACT<T, U>
type ColoresPrimarios = Extract<Colores, "rojo" | "azul">;

// SOLUCIÓN 9: NONNULLABLE<T>
type TiposNoNulos = NonNullable<Tipos>;

// SOLUCIÓN 10: PARAMETERS<T>
type ParametrosSumar = Parameters<typeof sumar>;

// SOLUCIÓN 11: RETURNTYPE<T>
type TipoRetorno = ReturnType<typeof obtenerUsuario>;

// SOLUCIÓN 12: CONSTRUCTORPARAMETERS<T>
type ParametrosConstructor = ConstructorParameters<typeof Usuario>;

// SOLUCIÓN 13: INSTANCETYPE<T>
type TipoInstancia = InstanceType<typeof Usuario>;

// SOLUCIÓN 14: UTILITY TYPE PERSONALIZADO
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type UsuarioConEmailOpcional = PartialBy<Usuario, "email" | "telefono">;

// SOLUCIÓN 15: COMBINANDO UTILITY TYPES
type UsuarioCrear = Omit<Usuario, "id" | "password" | "fechaCreacion">;
type UsuarioActualizar = Partial<Omit<Usuario, "id">> & { id: number };
type UsuarioMostrar = Pick<Usuario, "id" | "nombre" | "email" | "activo">;
type UsuarioSeguro = Omit<Usuario, "password"> & { activo?: boolean };

// SOLUCIÓN 16: UTILITY TYPES CON FUNCIONES
function actualizarUsuario(id: number, datos: Partial<Usuario>): Usuario {
    return {
        id,
        nombre: datos.nombre || "Usuario",
        email: datos.email || "usuario@email.com",
        telefono: datos.telefono || "",
        activo: datos.activo !== undefined ? datos.activo : true
    };
}

function mostrarUsuario(usuario: Usuario): Pick<Usuario, "id" | "nombre" | "email"> {
    return {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email
    };
}

function crearUsuario(datos: Omit<Usuario, "id">): Usuario {
    return {
        id: Math.floor(Math.random() * 1000),
        ...datos
    };
}

// SOLUCIÓN 17: UTILITY TYPES CON GENERICS
function procesarDatos<T>(datos: Partial<T>): T {
    return datos as T;
}

function obtenerClaves<T extends Record<string, any>>(objeto: T): (keyof T)[] {
    return Object.keys(objeto) as (keyof T)[];
}

function seleccionarPropiedades<T, K extends keyof T>(
    objeto: T,
    propiedades: K[]
): Pick<T, K> {
    const resultado = {} as Pick<T, K>;
    propiedades.forEach(prop => {
        resultado[prop] = objeto[prop];
    });
    return resultado;
}

// SOLUCIÓN 18: UTILITY TYPES CON CONDITIONAL TYPES
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type RequiredOnly<T> = {
    [K in keyof T]-?: T[K];
};
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// SOLUCIÓN 19: CASOS DE USO PRÁCTICOS
type ProductoCrear = Omit<Producto, "id" | "fechaCreacion">;
type ProductoActualizar = Partial<Omit<Producto, "id">> & { id: number };
type ProductoMostrar = Pick<Producto, "id" | "nombre" | "precio" | "categoria" | "activo">;
type ProductoCatalogo = Omit<Producto, "descripcion" | "fechaCreacion">;

// SOLUCIÓN 20: SISTEMA DE PERMISOS
type PermisosBasicos = Pick<Permisos, "leer" | "escribir">;
type PermisosModerador = Pick<Permisos, "leer" | "escribir" | "moderar">;
type PermisosAdmin = Required<Permisos>;
type PermisosParciales = Partial<Permisos>;

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE UTILITY TYPES ===");

// Ejemplo de uso de los tipos creados
let usuarioParcial: UsuarioParcial = {
    nombre: "Juan"
};

let usuarioRequerido: UsuarioRequerido = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    telefono: "123-456-789",
    activo: true
};

let usuarioSoloLectura: UsuarioSoloLectura = {
    id: 1,
    nombre: "Pedro",
    email: "pedro@email.com",
    telefono: "987-654-321",
    activo: true
};

let diccionarioUsuarios: DiccionarioUsuarios = {
    "usuario1": { id: 1, nombre: "Ana", email: "ana@email.com" },
    "usuario2": { id: 2, nombre: "Luis", email: "luis@email.com" }
};

let usuarioBasico: UsuarioBasico = {
    id: 1,
    nombre: "Carlos"
};

let usuarioSinId: UsuarioSinId = {
    nombre: "Elena",
    email: "elena@email.com",
    direccion: "Calle Principal 123",
    activo: true
};

let coloresFrios: ColoresFrios = "azul"; // "rojo" | "azul" | "naranja"
let coloresPrimarios: ColoresPrimarios = "rojo"; // "rojo" | "azul"

let tiposNoNulos: TiposNoNulos = "texto"; // string | number | boolean

let parametrosSumar: ParametrosSumar = [5, 3, "test"]; // [number, number, string]
let tipoRetorno: TipoRetorno = { id: 1, nombre: "Juan", email: "juan@email.com" };

let parametrosConstructor: ParametrosConstructor = ["Ana", "ana@email.com", 25]; // [string, string, number]
let tipoInstancia: TipoInstancia = new Usuario("Ana", "ana@email.com");

let usuarioConEmailOpcional: UsuarioConEmailOpcional = {
    id: 1,
    nombre: "Juan",
    telefono: "123-456-789",
    activo: true
    // email es opcional
};

let usuarioCrear: UsuarioCrear = {
    nombre: "Nuevo Usuario",
    email: "nuevo@email.com",
    telefono: "123-456-789",
    direccion: "Nueva Dirección",
    activo: true
};

let usuarioActualizar: UsuarioActualizar = {
    id: 1,
    nombre: "Usuario Actualizado",
    activo: false
};

let usuarioMostrar: UsuarioMostrar = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};

let usuarioSeguro: UsuarioSeguro = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "123-456-789",
    direccion: "Calle Principal 123",
    fechaCreacion: new Date()
    // activo es opcional
};

// Ejemplos de uso de las funciones
let usuarioActualizado2 = actualizarUsuario(1, { nombre: "Nuevo Nombre" });
let usuarioMostrado = mostrarUsuario(usuarioActualizado2);
let usuarioCreado = crearUsuario({
    nombre: "Usuario Nuevo",
    email: "nuevo@email.com",
    telefono: "123-456-789",
    activo: true
});

// Ejemplos de uso de funciones genéricas
let datos = { nombre: "Juan", email: "juan@email.com", edad: 25 };
let claves = obtenerClaves(datos);
let propiedadesSeleccionadas = seleccionarPropiedades(datos, ["nombre", "email"]);

// Ejemplos de casos de uso prácticos
let productoCrear: ProductoCrear = {
    nombre: "Producto Nuevo",
    descripcion: "Descripción del producto",
    precio: 99.99,
    stock: 10,
    categoria: "Electrónicos",
    activo: true
};

let productoActualizar: ProductoActualizar = {
    id: 1,
    precio: 89.99,
    stock: 5
};

let productoMostrar: ProductoMostrar = {
    id: 1,
    nombre: "Producto",
    precio: 99.99,
    categoria: "Electrónicos",
    activo: true
};

let productoCatalogo: ProductoCatalogo = {
    id: 1,
    nombre: "Producto",
    precio: 99.99,
    stock: 10,
    categoria: "Electrónicos",
    activo: true
};

// Ejemplos de sistema de permisos
let permisosBasicos: PermisosBasicos = {
    leer: true,
    escribir: true
};

let permisosModerador: PermisosModerador = {
    leer: true,
    escribir: true,
    moderar: true
};

let permisosAdmin: PermisosAdmin = {
    leer: true,
    escribir: true,
    eliminar: true,
    administrar: true,
    moderar: true
};

let permisosParciales: PermisosParciales = {
    leer: true
    // Las demás propiedades son opcionales
};

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE UTILITY TYPES ===");

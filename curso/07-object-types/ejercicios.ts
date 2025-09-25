// ========================================
// EJERCICIOS - OBJECT TYPES EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: INTERFACES BÁSICAS
// ========================================
// Crea una interfaz para un producto con propiedades básicas

// TODO: Crea una interfaz Producto con las siguientes propiedades:
// - id: number
// - nombre: string
// - precio: number
// - activo: boolean

// interface Producto {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 2: PROPIEDADES OPCIONALES
// ========================================
// Crea una interfaz para un usuario con propiedades opcionales

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - telefono?: string (opcional)
// - direccion?: string (opcional)

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 3: PROPIEDADES DE SOLO LECTURA
// ========================================
// Crea una interfaz para un usuario con propiedades de solo lectura

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - readonly id: number
// - nombre: string
// - email: string
// - telefono?: string (opcional)

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 4: TYPE ALIASES
// ========================================
// Crea un type alias para un usuario

// TODO: Crea un type alias Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - activo: boolean

// type Usuario = {
//     // Implementa el type alias
// };

// ========================================
// EJERCICIO 5: UNION TYPES
// ========================================
// Crea union types para estados y tipos de usuario

// TODO: Crea union types para:
// - Estado: "activo" | "inactivo" | "pendiente"
// - TipoUsuario: "admin" | "usuario" | "invitado"

// type Estado = ...
// type TipoUsuario = ...

// TODO: Crea una interfaz Usuario que use estos union types
// interface Usuario {
//     // Implementa la interfaz usando los union types
// }

// ========================================
// EJERCICIO 6: INTERSECTION TYPES
// ========================================
// Crea intersection types para combinar interfaces

// TODO: Crea interfaces base:
// interface ConId {
//     // Implementa la interfaz
// }

// interface ConNombre {
//     // Implementa la interfaz
// }

// interface ConEmail {
//     // Implementa la interfaz
// }

// TODO: Crea un type Usuario que combine estas interfaces
// type Usuario = ...

// ========================================
// EJERCICIO 7: PROPIEDADES DE FUNCIÓN
// ========================================
// Crea una interfaz con propiedades de función

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - saludar: () => string
// - actualizarNombre: (nuevoNombre: string) => void

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 8: MÉTODOS CON PARÁMETROS
// ========================================
// Crea una interfaz para una calculadora

// TODO: Crea una interfaz Calculadora con los siguientes métodos:
// - sumar: (a: number, b: number) => number
// - restar: (a: number, b: number) => number
// - multiplicar: (a: number, b: number) => number
// - dividir: (a: number, b: number) => number

// interface Calculadora {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 9: PROPIEDADES DE ARRAY
// ========================================
// Crea una interfaz con propiedades de array

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - hobbies: string[]
// - numeros: number[]
// - contactos: { telefono: string; direccion: string; }[]

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 10: ARRAYS CON TIPOS ESPECÍFICOS
// ========================================
// Crea una interfaz con arrays de tipos específicos

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - permisos: ("leer" | "escribir" | "eliminar")[]
// - configuracion: { tema: "claro" | "oscuro"; idioma: "es" | "en" | "fr"; }[]

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 11: PROPIEDADES DE OBJETO
// ========================================
// Crea una interfaz con propiedades de objeto

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - direccion: { calle: string; ciudad: string; codigoPostal: string; pais: string; }
// - configuracion: { tema: "claro" | "oscuro"; idioma: "es" | "en" | "fr"; notificaciones: boolean; }

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 12: OBJETOS ANIDADOS
// ========================================
// Crea una interfaz con objetos anidados

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - perfil: { avatar: string; biografia: string; redesSociales: { twitter?: string; linkedin?: string; github?: string; }; }

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 13: INDEX SIGNATURES
// ========================================
// Crea una interfaz con index signatures

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - [key: string]: any (permite propiedades adicionales)

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 14: INDEX SIGNATURES CON TIPOS ESPECÍFICOS
// ========================================
// Crea una interfaz con index signatures de tipos específicos

// TODO: Crea una interfaz Usuario con las siguientes propiedades:
// - id: number
// - nombre: string
// - email: string
// - [key: string]: string | number (solo permite strings o numbers)

// interface Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 15: EXTENDING INTERFACES
// ========================================
// Crea interfaces que extiendan otras interfaces

// TODO: Crea interfaces base:
// interface Persona {
//     // Implementa la interfaz
// }

// TODO: Crea una interfaz Usuario que extienda Persona:
// interface Usuario extends Persona {
//     // Implementa la interfaz
// }

// TODO: Crea una interfaz Admin que extienda Usuario:
// interface Admin extends Usuario {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 16: MÚLTIPLES EXTENSIONES
// ========================================
// Crea una interfaz que extienda múltiples interfaces

// TODO: Crea interfaces base:
// interface ConId {
//     // Implementa la interfaz
// }

// interface ConNombre {
//     // Implementa la interfaz
// }

// interface ConEmail {
//     // Implementa la interfaz
// }

// TODO: Crea una interfaz Usuario que extienda todas las interfaces base:
// interface Usuario extends ConId, ConNombre, ConEmail {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 17: GENERIC INTERFACES
// ========================================
// Crea una interfaz genérica

// TODO: Crea una interfaz genérica Caja<T> con las siguientes propiedades:
// - contenido: T
// - obtenerContenido: () => T
// - establecerContenido: (nuevoContenido: T) => void

// interface Caja<T> {
//     // Implementa la interfaz genérica
// }

// ========================================
// EJERCICIO 18: GENERIC INTERFACES CON RESTRICCIONES
// ========================================
// Crea una interfaz genérica con restricciones

// TODO: Crea una interfaz base:
// interface ConLongitud {
//     // Implementa la interfaz
// }

// TODO: Crea una interfaz genérica Almacen<T> que extienda ConLongitud:
// interface Almacen<T extends ConLongitud> {
//     // Implementa la interfaz genérica
// }

// ========================================
// EJERCICIO 19: SISTEMA DE USUARIOS
// ========================================
// Crea un sistema completo de usuarios

// TODO: Crea interfaces para el sistema de usuarios:
// interface Usuario {
//     // Implementa la interfaz
// }

// interface UsuarioCrear {
//     // Implementa la interfaz
// }

// interface UsuarioActualizar {
//     // Implementa la interfaz
// }

// ========================================
// EJERCICIO 20: SISTEMA DE PRODUCTOS
// ========================================
// Crea un sistema completo de productos

// TODO: Crea interfaces para el sistema de productos:
// interface Producto {
//     // Implementa la interfaz
// }

// interface ProductoCrear {
//     // Implementa la interfaz
// }

// interface ProductoActualizar {
//     // Implementa la interfaz
// }

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: INTERFACES BÁSICAS
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    activo: boolean;
}

// SOLUCIÓN 2: PROPIEDADES OPCIONALES
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: string;
}

// SOLUCIÓN 3: PROPIEDADES DE SOLO LECTURA
interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
    telefono?: string;
}

// SOLUCIÓN 4: TYPE ALIASES
type Usuario = {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
};

// SOLUCIÓN 5: UNION TYPES
type Estado = "activo" | "inactivo" | "pendiente";
type TipoUsuario = "admin" | "usuario" | "invitado";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    estado: Estado;
    tipo: TipoUsuario;
}

// SOLUCIÓN 6: INTERSECTION TYPES
interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

interface ConEmail {
    email: string;
}

type Usuario = ConId & ConNombre & ConEmail & {
    activo: boolean;
};

// SOLUCIÓN 7: PROPIEDADES DE FUNCIÓN
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    saludar: () => string;
    actualizarNombre: (nuevoNombre: string) => void;
}

// SOLUCIÓN 8: MÉTODOS CON PARÁMETROS
interface Calculadora {
    sumar: (a: number, b: number) => number;
    restar: (a: number, b: number) => number;
    multiplicar: (a: number, b: number) => number;
    dividir: (a: number, b: number) => number;
}

// SOLUCIÓN 9: PROPIEDADES DE ARRAY
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    hobbies: string[];
    numeros: number[];
    contactos: {
        telefono: string;
        direccion: string;
    }[];
}

// SOLUCIÓN 10: ARRAYS CON TIPOS ESPECÍFICOS
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    permisos: ("leer" | "escribir" | "eliminar")[];
    configuracion: {
        tema: "claro" | "oscuro";
        idioma: "es" | "en" | "fr";
    }[];
}

// SOLUCIÓN 11: PROPIEDADES DE OBJETO
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
        pais: string;
    };
    configuracion: {
        tema: "claro" | "oscuro";
        idioma: "es" | "en" | "fr";
        notificaciones: boolean;
    };
}

// SOLUCIÓN 12: OBJETOS ANIDADOS
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    perfil: {
        avatar: string;
        biografia: string;
        redesSociales: {
            twitter?: string;
            linkedin?: string;
            github?: string;
        };
    };
}

// SOLUCIÓN 13: INDEX SIGNATURES
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: any;
}

// SOLUCIÓN 14: INDEX SIGNATURES CON TIPOS ESPECÍFICOS
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: string | number;
}

// SOLUCIÓN 15: EXTENDING INTERFACES
interface Persona {
    nombre: string;
    email: string;
}

interface Usuario extends Persona {
    id: number;
    activo: boolean;
}

interface Admin extends Usuario {
    permisos: string[];
    nivel: number;
}

// SOLUCIÓN 16: MÚLTIPLES EXTENSIONES
interface ConId {
    id: number;
}

interface ConNombre {
    nombre: string;
}

interface ConEmail {
    email: string;
}

interface Usuario extends ConId, ConNombre, ConEmail {
    activo: boolean;
}

// SOLUCIÓN 17: GENERIC INTERFACES
interface Caja<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}

// SOLUCIÓN 18: GENERIC INTERFACES CON RESTRICCIONES
interface ConLongitud {
    length: number;
}

interface Almacen<T extends ConLongitud> {
    items: T[];
    agregar(item: T): void;
    obtener(index: number): T | undefined;
    obtenerLongitud(): number;
}

// SOLUCIÓN 19: SISTEMA DE USUARIOS
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
    permisos: ("leer" | "escribir" | "eliminar")[];
    fechaCreacion: Date;
    activo: boolean;
}

interface UsuarioCrear {
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: Usuario["direccion"];
    permisos: Usuario["permisos"];
}

interface UsuarioActualizar {
    nombre?: string;
    email?: string;
    telefono?: string;
    direccion?: Usuario["direccion"];
    permisos?: Usuario["permisos"];
    activo?: boolean;
}

// SOLUCIÓN 20: SISTEMA DE PRODUCTOS
interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    etiquetas: string[];
    imagenes: string[];
    especificaciones: {
        [key: string]: string | number;
    };
    fechaCreacion: Date;
    fechaActualizacion: Date;
    activo: boolean;
}

interface ProductoCrear {
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    categoria: string;
    etiquetas: string[];
    imagenes: string[];
    especificaciones: Producto["especificaciones"];
}

interface ProductoActualizar {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    stock?: number;
    categoria?: string;
    etiquetas?: string[];
    imagenes?: string[];
    especificaciones?: Producto["especificaciones"];
    activo?: boolean;
}

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE OBJECT TYPES ===");

// Ejemplo de uso de los tipos creados
let producto: Producto = {
    id: 1,
    nombre: "Producto",
    precio: 99.99,
    activo: true
};

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "123-456-789",
    direccion: "Calle Principal 123"
};

let usuarioBasico: Usuario = {
    id: 2,
    nombre: "María",
    email: "maria@email.com"
    // telefono y direccion son opcionales
};

let usuarioSoloLectura: Usuario = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@email.com",
    telefono: "987-654-321"
};

// usuarioSoloLectura.id = 4; // ❌ Error: no se puede modificar

let usuarioType: Usuario = {
    id: 4,
    nombre: "Ana",
    email: "ana@email.com",
    activo: true
};

let usuarioConEstado: Usuario = {
    id: 5,
    nombre: "Luis",
    email: "luis@email.com",
    estado: "activo",
    tipo: "admin"
};

let usuarioIntersection: Usuario = {
    id: 6,
    nombre: "Elena",
    email: "elena@email.com",
    activo: true
};

let usuarioConFunciones: Usuario = {
    id: 7,
    nombre: "Carlos",
    email: "carlos@email.com",
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    },
    actualizarNombre: function(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    }
};

let calculadora: Calculadora = {
    sumar: (a: number, b: number) => a + b,
    restar: (a: number, b: number) => a - b,
    multiplicar: (a: number, b: number) => a * b,
    dividir: (a: number, b: number) => a / b
};

let usuarioConArrays: Usuario = {
    id: 8,
    nombre: "Sofia",
    email: "sofia@email.com",
    hobbies: ["leer", "cocinar", "viajar"],
    numeros: [1, 2, 3, 4, 5],
    contactos: [
        { telefono: "123-456-789", direccion: "Calle A" },
        { telefono: "987-654-321", direccion: "Calle B" }
    ]
};

let usuarioConTiposEspecificos: Usuario = {
    id: 9,
    nombre: "Diego",
    email: "diego@email.com",
    permisos: ["leer", "escribir"],
    configuracion: [
        { tema: "claro", idioma: "es" },
        { tema: "oscuro", idioma: "en" }
    ]
};

let usuarioConObjetos: Usuario = {
    id: 10,
    nombre: "Isabella",
    email: "isabella@email.com",
    direccion: {
        calle: "Calle Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001",
        pais: "España"
    },
    configuracion: {
        tema: "claro",
        idioma: "es",
        notificaciones: true
    }
};

let usuarioConObjetosAnidados: Usuario = {
    id: 11,
    nombre: "Gabriel",
    email: "gabriel@email.com",
    perfil: {
        avatar: "avatar.jpg",
        biografia: "Desarrollador de software",
        redesSociales: {
            twitter: "@gabriel",
            linkedin: "gabriel-linkedin",
            github: "gabriel-github"
        }
    }
};

let usuarioConIndexSignature: Usuario = {
    id: 12,
    nombre: "Valentina",
    email: "valentina@email.com",
    telefono: "123-456-789",
    edad: 25,
    ciudad: "Barcelona"
};

let usuarioConIndexSignatureEspecifico: Usuario = {
    id: 13,
    nombre: "Mateo",
    email: "mateo@email.com",
    telefono: "123-456-789",
    edad: 25
};

let usuarioExtendido: Usuario = {
    id: 14,
    nombre: "Camila",
    email: "camila@email.com",
    activo: true
};

let adminExtendido: Admin = {
    id: 15,
    nombre: "Admin",
    email: "admin@email.com",
    activo: true,
    permisos: ["leer", "escribir", "eliminar"],
    nivel: 5
};

let usuarioMultipleExtension: Usuario = {
    id: 16,
    nombre: "Sebastian",
    email: "sebastian@email.com",
    activo: true
};

let cajaString: Caja<string> = {
    contenido: "Hola",
    obtenerContenido: function() {
        return this.contenido;
    },
    establecerContenido: function(nuevoContenido: string) {
        this.contenido = nuevoContenido;
    }
};

let cajaNumber: Caja<number> = {
    contenido: 42,
    obtenerContenido: function() {
        return this.contenido;
    },
    establecerContenido: function(nuevoContenido: number) {
        this.contenido = nuevoContenido;
    }
};

let almacenStrings: Almacen<string> = {
    items: [],
    agregar: function(item: string) {
        this.items.push(item);
    },
    obtener: function(index: number) {
        return this.items[index];
    },
    obtenerLongitud: function() {
        return this.items.length;
    }
};

let almacenArrays: Almacen<number[]> = {
    items: [],
    agregar: function(item: number[]) {
        this.items.push(item);
    },
    obtener: function(index: number) {
        return this.items[index];
    },
    obtenerLongitud: function() {
        return this.items.length;
    }
};

let usuarioCrear: UsuarioCrear = {
    nombre: "Nuevo Usuario",
    email: "nuevo@email.com",
    telefono: "123-456-789",
    direccion: {
        calle: "Calle Nueva",
        ciudad: "Madrid",
        codigoPostal: "28001"
    },
    permisos: ["leer", "escribir"]
};

let usuarioActualizar: UsuarioActualizar = {
    nombre: "Usuario Actualizado",
    activo: false
};

let productoCrear: ProductoCrear = {
    nombre: "Producto Nuevo",
    descripcion: "Descripción del producto",
    precio: 99.99,
    stock: 10,
    categoria: "Electrónicos",
    etiquetas: ["nuevo", "oferta"],
    imagenes: ["imagen1.jpg", "imagen2.jpg"],
    especificaciones: {
        peso: "1.5kg",
        dimensiones: "30x20x10cm",
        color: "negro"
    }
};

let productoActualizar: ProductoActualizar = {
    precio: 89.99,
    stock: 5,
    activo: true
};

console.log("Producto:", producto);
console.log("Usuario:", usuario);
console.log("Usuario básico:", usuarioBasico);
console.log("Usuario solo lectura:", usuarioSoloLectura);
console.log("Usuario type:", usuarioType);
console.log("Usuario con estado:", usuarioConEstado);
console.log("Usuario intersection:", usuarioIntersection);
console.log("Usuario con funciones:", usuarioConFunciones);
console.log("Calculadora:", calculadora);
console.log("Usuario con arrays:", usuarioConArrays);
console.log("Usuario con tipos específicos:", usuarioConTiposEspecificos);
console.log("Usuario con objetos:", usuarioConObjetos);
console.log("Usuario con objetos anidados:", usuarioConObjetosAnidados);
console.log("Usuario con index signature:", usuarioConIndexSignature);
console.log("Usuario con index signature específico:", usuarioConIndexSignatureEspecifico);
console.log("Usuario extendido:", usuarioExtendido);
console.log("Admin extendido:", adminExtendido);
console.log("Usuario múltiple extensión:", usuarioMultipleExtension);
console.log("Caja string:", cajaString.obtenerContenido());
console.log("Caja number:", cajaNumber.obtenerContenido());
console.log("Almacen strings:", almacenStrings.items);
console.log("Almacen arrays:", almacenArrays.items);
console.log("Usuario crear:", usuarioCrear);
console.log("Usuario actualizar:", usuarioActualizar);
console.log("Producto crear:", productoCrear);
console.log("Producto actualizar:", productoActualizar);

// Ejemplos de uso de funciones
console.log("Saludo:", usuarioConFunciones.saludar());
usuarioConFunciones.actualizarNombre("Carlos Actualizado");
console.log("Nombre actualizado:", usuarioConFunciones.nombre);

console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(10, 4));
console.log("Multiplicación:", calculadora.multiplicar(6, 7));
console.log("División:", calculadora.dividir(15, 3));

cajaString.establecerContenido("Mundo");
cajaNumber.establecerContenido(100);

console.log("Caja string actualizada:", cajaString.obtenerContenido());
console.log("Caja number actualizada:", cajaNumber.obtenerContenido());

almacenStrings.agregar("Primer elemento");
almacenStrings.agregar("Segundo elemento");

almacenArrays.agregar([1, 2, 3]);
almacenArrays.agregar([4, 5, 6]);

console.log("Almacen strings actualizado:", almacenStrings.items);
console.log("Almacen arrays actualizado:", almacenArrays.items);

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE OBJECT TYPES ===");

// ========================================
// EJEMPLOS - OBJECT TYPES EN TYPESCRIPT
// ========================================

// 1. INTERFACES BÁSICAS
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};

console.log("=== INTERFACES BÁSICAS ===");
console.log("Usuario:", usuario);

// 2. PROPIEDADES OPCIONALES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Propiedad opcional
    direccion?: string; // Propiedad opcional
}

let usuarioCompleto: Usuario = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    telefono: "123-456-789",
    direccion: "Calle Principal 123"
};

let usuarioBasico: Usuario = {
    id: 2,
    nombre: "Pedro",
    email: "pedro@email.com"
    // telefono y direccion son opcionales
};

console.log("\n=== PROPIEDADES OPCIONALES ===");
console.log("Usuario completo:", usuarioCompleto);
console.log("Usuario básico:", usuarioBasico);

// 3. PROPIEDADES DE SOLO LECTURA
// ========================================

interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
    telefono?: string;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@email.com",
    telefono: "987-654-321"
};

// usuario.id = 2; // ❌ Error: no se puede modificar
usuario.nombre = "Ana Actualizada"; // ✅ Permitido

console.log("\n=== PROPIEDADES DE SOLO LECTURA ===");
console.log("Usuario:", usuario);

// 4. TYPE ALIASES
// ========================================

type Usuario = {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
};

let usuario: Usuario = {
    id: 1,
    nombre: "Carlos",
    email: "carlos@email.com",
    activo: true
};

console.log("\n=== TYPE ALIASES ===");
console.log("Usuario:", usuario);

// 5. UNION TYPES
// ========================================

type Estado = "activo" | "inactivo" | "pendiente";
type TipoUsuario = "admin" | "usuario" | "invitado";

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    estado: Estado;
    tipo: TipoUsuario;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Luis",
    email: "luis@email.com",
    estado: "activo",
    tipo: "admin"
};

console.log("\n=== UNION TYPES ===");
console.log("Usuario:", usuario);

// 6. INTERSECTION TYPES
// ========================================

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

let usuario: Usuario = {
    id: 1,
    nombre: "Elena",
    email: "elena@email.com",
    activo: true
};

console.log("\n=== INTERSECTION TYPES ===");
console.log("Usuario:", usuario);

// 7. PROPIEDADES DE FUNCIÓN
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    saludar: () => string;
    actualizarNombre: (nuevoNombre: string) => void;
    obtenerInformacion: () => string;
}

let usuario: Usuario = {
    id: 1,
    nombre: "Roberto",
    email: "roberto@email.com",
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    },
    actualizarNombre: function(nuevoNombre: string) {
        this.nombre = nuevoNombre;
    },
    obtenerInformacion: function() {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}`;
    }
};

console.log("\n=== PROPIEDADES DE FUNCIÓN ===");
console.log("Usuario:", usuario);
console.log("Saludo:", usuario.saludar());
console.log("Información:", usuario.obtenerInformacion());

usuario.actualizarNombre("Roberto Actualizado");
console.log("Nombre actualizado:", usuario.nombre);

// 8. MÉTODOS CON PARÁMETROS
// ========================================

interface Calculadora {
    sumar: (a: number, b: number) => number;
    restar: (a: number, b: number) => number;
    multiplicar: (a: number, b: number) => number;
    dividir: (a: number, b: number) => number;
}

let calculadora: Calculadora = {
    sumar: (a: number, b: number) => a + b,
    restar: (a: number, b: number) => a - b,
    multiplicar: (a: number, b: number) => a * b,
    dividir: (a: number, b: number) => a / b
};

console.log("\n=== MÉTODOS CON PARÁMETROS ===");
console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(10, 4));
console.log("Multiplicación:", calculadora.multiplicar(6, 7));
console.log("División:", calculadora.dividir(15, 3));

// 9. PROPIEDADES DE ARRAY
// ========================================

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

let usuario: Usuario = {
    id: 1,
    nombre: "Sofia",
    email: "sofia@email.com",
    hobbies: ["leer", "cocinar", "viajar"],
    numeros: [1, 2, 3, 4, 5],
    contactos: [
        { telefono: "123-456-789", direccion: "Calle A" },
        { telefono: "987-654-321", direccion: "Calle B" }
    ]
};

console.log("\n=== PROPIEDADES DE ARRAY ===");
console.log("Usuario:", usuario);
console.log("Hobbies:", usuario.hobbies);
console.log("Números:", usuario.numeros);
console.log("Contactos:", usuario.contactos);

// 10. ARRAYS CON TIPOS ESPECÍFICOS
// ========================================

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

let usuario: Usuario = {
    id: 1,
    nombre: "Diego",
    email: "diego@email.com",
    permisos: ["leer", "escribir"],
    configuracion: [
        { tema: "claro", idioma: "es" },
        { tema: "oscuro", idioma: "en" }
    ]
};

console.log("\n=== ARRAYS CON TIPOS ESPECÍFICOS ===");
console.log("Usuario:", usuario);
console.log("Permisos:", usuario.permisos);
console.log("Configuración:", usuario.configuracion);

// 11. PROPIEDADES DE OBJETO
// ========================================

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

let usuario: Usuario = {
    id: 1,
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

console.log("\n=== PROPIEDADES DE OBJETO ===");
console.log("Usuario:", usuario);
console.log("Dirección:", usuario.direccion);
console.log("Configuración:", usuario.configuracion);

// 12. OBJETOS ANIDADOS
// ========================================

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

let usuario: Usuario = {
    id: 1,
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

console.log("\n=== OBJETOS ANIDADOS ===");
console.log("Usuario:", usuario);
console.log("Perfil:", usuario.perfil);
console.log("Redes sociales:", usuario.perfil.redesSociales);

// 13. INDEX SIGNATURES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: any; // Permite propiedades adicionales
}

let usuario: Usuario = {
    id: 1,
    nombre: "Valentina",
    email: "valentina@email.com",
    telefono: "123-456-789", // Propiedad adicional permitida
    edad: 25, // Propiedad adicional permitida
    ciudad: "Barcelona" // Propiedad adicional permitida
};

console.log("\n=== INDEX SIGNATURES ===");
console.log("Usuario:", usuario);
console.log("Teléfono:", usuario.telefono);
console.log("Edad:", usuario.edad);
console.log("Ciudad:", usuario.ciudad);

// 14. INDEX SIGNATURES CON TIPOS ESPECÍFICOS
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    [key: string]: string | number; // Solo permite strings o numbers
}

let usuario: Usuario = {
    id: 1,
    nombre: "Mateo",
    email: "mateo@email.com",
    telefono: "123-456-789", // ✅ Permitido
    edad: 25 // ✅ Permitido
    // activo: true // ❌ Error: boolean no está permitido
};

console.log("\n=== INDEX SIGNATURES CON TIPOS ESPECÍFICOS ===");
console.log("Usuario:", usuario);
console.log("Teléfono:", usuario.telefono);
console.log("Edad:", usuario.edad);

// 15. EXTENDING INTERFACES
// ========================================

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

let usuario: Usuario = {
    id: 1,
    nombre: "Camila",
    email: "camila@email.com",
    activo: true
};

let admin: Admin = {
    id: 2,
    nombre: "Admin",
    email: "admin@email.com",
    activo: true,
    permisos: ["leer", "escribir", "eliminar"],
    nivel: 5
};

console.log("\n=== EXTENDING INTERFACES ===");
console.log("Usuario:", usuario);
console.log("Admin:", admin);

// 16. MÚLTIPLES EXTENSIONES
// ========================================

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

let usuario: Usuario = {
    id: 1,
    nombre: "Sebastian",
    email: "sebastian@email.com",
    activo: true
};

console.log("\n=== MÚLTIPLES EXTENSIONES ===");
console.log("Usuario:", usuario);

// 17. GENERIC INTERFACES
// ========================================

interface Caja<T> {
    contenido: T;
    obtenerContenido(): T;
    establecerContenido(nuevoContenido: T): void;
}

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

console.log("\n=== GENERIC INTERFACES ===");
console.log("Caja string:", cajaString.obtenerContenido());
console.log("Caja number:", cajaNumber.obtenerContenido());

cajaString.establecerContenido("Mundo");
cajaNumber.establecerContenido(100);

console.log("Caja string actualizada:", cajaString.obtenerContenido());
console.log("Caja number actualizada:", cajaNumber.obtenerContenido());

// 18. GENERIC INTERFACES CON RESTRICCIONES
// ========================================

interface ConLongitud {
    length: number;
}

interface Almacen<T extends ConLongitud> {
    items: T[];
    agregar(item: T): void;
    obtener(index: number): T | undefined;
    obtenerLongitud(): number;
}

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

almacenStrings.agregar("Primer elemento");
almacenStrings.agregar("Segundo elemento");

almacenArrays.agregar([1, 2, 3]);
almacenArrays.agregar([4, 5, 6]);

console.log("\n=== GENERIC INTERFACES CON RESTRICCIONES ===");
console.log("Almacen strings:", almacenStrings.items);
console.log("Almacen arrays:", almacenArrays.items);

// 19. CASOS DE USO PRÁCTICOS - SISTEMA DE USUARIOS
// ========================================

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

console.log("\n=== SISTEMA DE USUARIOS ===");
console.log("Usuario crear:", usuarioCrear);
console.log("Usuario actualizar:", usuarioActualizar);

// 20. CASOS DE USO PRÁCTICOS - SISTEMA DE PRODUCTOS
// ========================================

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

console.log("\n=== SISTEMA DE PRODUCTOS ===");
console.log("Producto crear:", productoCrear);
console.log("Producto actualizar:", productoActualizar);

// 21. CASOS DE USO PRÁCTICOS - SISTEMA DE APIs
// ========================================

interface RespuestaAPI<T> {
    exito: boolean;
    datos: T;
    mensaje?: string;
    codigo: number;
    timestamp: Date;
}

interface ErrorAPI {
    exito: false;
    error: string;
    codigo: number;
    timestamp: Date;
}

interface ExitoAPI<T> {
    exito: true;
    datos: T;
    mensaje?: string;
    codigo: number;
    timestamp: Date;
}

type RespuestaAPI<T> = ExitoAPI<T> | ErrorAPI;

let respuestaExito: RespuestaAPI<Usuario> = {
    exito: true,
    datos: {
        id: 1,
        nombre: "Usuario API",
        email: "usuario@api.com",
        telefono: "123-456-789",
        permisos: ["leer"],
        fechaCreacion: new Date(),
        activo: true
    },
    mensaje: "Usuario obtenido exitosamente",
    codigo: 200,
    timestamp: new Date()
};

let respuestaError: RespuestaAPI<Usuario> = {
    exito: false,
    error: "Usuario no encontrado",
    codigo: 404,
    timestamp: new Date()
};

console.log("\n=== SISTEMA DE APIs ===");
console.log("Respuesta éxito:", respuestaExito);
console.log("Respuesta error:", respuestaError);

// 22. CASOS DE USO PRÁCTICOS - SISTEMA DE CONFIGURACIÓN
// ========================================

interface Configuracion {
    servidor: {
        host: string;
        puerto: number;
        ssl: boolean;
        timeout: number;
    };
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
        usuario: string;
        password: string;
        ssl: boolean;
    };
    autenticacion: {
        jwt: {
            secret: string;
            expiracion: string;
        };
        oauth: {
            google: {
                clientId: string;
                clientSecret: string;
            };
            facebook: {
                appId: string;
                appSecret: string;
            };
        };
    };
    logging: {
        nivel: "debug" | "info" | "warn" | "error";
        archivo: string;
        consola: boolean;
    };
}

let configuracion: Configuracion = {
    servidor: {
        host: "localhost",
        puerto: 3000,
        ssl: false,
        timeout: 5000
    },
    baseDeDatos: {
        host: "localhost",
        puerto: 5432,
        nombre: "mi_base_datos",
        usuario: "admin",
        password: "password123",
        ssl: true
    },
    autenticacion: {
        jwt: {
            secret: "mi_secreto_jwt",
            expiracion: "24h"
        },
        oauth: {
            google: {
                clientId: "google_client_id",
                clientSecret: "google_client_secret"
            },
            facebook: {
                appId: "facebook_app_id",
                appSecret: "facebook_app_secret"
            }
        }
    },
    logging: {
        nivel: "info",
        archivo: "app.log",
        consola: true
    }
};

console.log("\n=== SISTEMA DE CONFIGURACIÓN ===");
console.log("Configuración:", configuracion);

// 23. UTILITY TYPES CON OBJECT TYPES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
}

type UsuarioParcial = Partial<Usuario>;
type UsuarioRequerido = Required<Usuario>;
type UsuarioSoloLectura = Readonly<Usuario>;
type UsuarioBasico = Pick<Usuario, "id" | "nombre">;
type UsuarioSinId = Omit<Usuario, "id">;

let usuarioParcial: UsuarioParcial = {
    nombre: "Usuario Parcial"
    // Las demás propiedades son opcionales
};

let usuarioRequerido: UsuarioRequerido = {
    id: 1,
    nombre: "Usuario Requerido",
    email: "requerido@email.com",
    telefono: "123-456-789",
    activo: true
};

let usuarioSoloLectura: UsuarioSoloLectura = {
    id: 1,
    nombre: "Usuario Solo Lectura",
    email: "sololectura@email.com",
    telefono: "123-456-789",
    activo: true
};

let usuarioBasico: UsuarioBasico = {
    id: 1,
    nombre: "Usuario Básico"
};

let usuarioSinId: UsuarioSinId = {
    nombre: "Usuario Sin ID",
    email: "sinid@email.com",
    telefono: "123-456-789",
    activo: true
};

console.log("\n=== UTILITY TYPES CON OBJECT TYPES ===");
console.log("Usuario parcial:", usuarioParcial);
console.log("Usuario requerido:", usuarioRequerido);
console.log("Usuario solo lectura:", usuarioSoloLectura);
console.log("Usuario básico:", usuarioBasico);
console.log("Usuario sin ID:", usuarioSinId);

// 24. OBJECT TYPES CON FUNCIONES
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

interface UsuarioService {
    crear: (usuario: Omit<Usuario, "id">) => Usuario;
    obtener: (id: number) => Usuario | null;
    actualizar: (id: number, datos: Partial<Usuario>) => Usuario | null;
    eliminar: (id: number) => boolean;
    listar: () => Usuario[];
}

let usuarioService: UsuarioService = {
    crear: function(usuario: Omit<Usuario, "id">) {
        return {
            id: Math.floor(Math.random() * 1000),
            ...usuario
        };
    },
    obtener: function(id: number) {
        // Simular obtención de usuario
        return {
            id,
            nombre: "Usuario",
            email: "usuario@email.com",
            activo: true
        };
    },
    actualizar: function(id: number, datos: Partial<Usuario>) {
        // Simular actualización de usuario
        return {
            id,
            nombre: datos.nombre || "Usuario",
            email: datos.email || "usuario@email.com",
            activo: datos.activo !== undefined ? datos.activo : true
        };
    },
    eliminar: function(id: number) {
        // Simular eliminación de usuario
        return true;
    },
    listar: function() {
        // Simular listado de usuarios
        return [
            { id: 1, nombre: "Usuario 1", email: "usuario1@email.com", activo: true },
            { id: 2, nombre: "Usuario 2", email: "usuario2@email.com", activo: false }
        ];
    }
};

console.log("\n=== OBJECT TYPES CON FUNCIONES ===");
let usuarioCreado = usuarioService.crear({
    nombre: "Nuevo Usuario",
    email: "nuevo@email.com",
    activo: true
});
console.log("Usuario creado:", usuarioCreado);

let usuarioObtenido = usuarioService.obtener(1);
console.log("Usuario obtenido:", usuarioObtenido);

let usuarioActualizado = usuarioService.actualizar(1, { nombre: "Usuario Actualizado" });
console.log("Usuario actualizado:", usuarioActualizado);

let eliminado = usuarioService.eliminar(1);
console.log("Usuario eliminado:", eliminado);

let usuarios = usuarioService.listar();
console.log("Usuarios:", usuarios);

console.log("\n=== FIN DE EJEMPLOS DE OBJECT TYPES ===");

// ========================================
// EJEMPLOS - NARROWING EN TYPESCRIPT
// ========================================

// 1. TYPEOF TYPE GUARDS
// ========================================

function procesarValor(valor: string | number) {
    if (typeof valor === "string") {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else {
        // TypeScript sabe que valor es number aquí
        return valor * 2;
    }
}

let resultadoString = procesarValor("hola");
let resultadoNumber = procesarValor(42);

console.log("=== TYPEOF TYPE GUARDS ===");
console.log("Resultado string:", resultadoString);
console.log("Resultado number:", resultadoNumber);

// 2. INSTANCEOF TYPE GUARDS
// ========================================

class Usuario {
    nombre: string;
    email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Admin extends Usuario {
    permisos: string[];
    
    constructor(nombre: string, email: string, permisos: string[]) {
        super(nombre, email);
        this.permisos = permisos;
    }
}

function procesarObjeto(obj: Usuario | string) {
    if (obj instanceof Usuario) {
        // TypeScript sabe que obj es Usuario aquí
        return `Usuario: ${obj.nombre} (${obj.email})`;
    } else {
        // TypeScript sabe que obj es string aquí
        return `String: ${obj}`;
    }
}

let usuario = new Usuario("Juan", "juan@email.com");
let admin = new Admin("María", "maria@email.com", ["leer", "escribir"]);
let texto = "Hola Mundo";

console.log("\n=== INSTANCEOF TYPE GUARDS ===");
console.log("Usuario procesado:", procesarObjeto(usuario));
console.log("Admin procesado:", procesarObjeto(admin));
console.log("Texto procesado:", procesarObjeto(texto));

// 3. IN TYPE GUARDS
// ========================================

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
        return `Usuario: ${persona.nombre} - ${persona.email}`;
    } else {
        // TypeScript sabe que persona es Admin aquí
        return `Admin: ${persona.nombre} - Permisos: ${persona.permisos.join(", ")}`;
    }
}

let usuario2: Usuario = { nombre: "Pedro", email: "pedro@email.com" };
let admin2: Admin = { nombre: "Ana", permisos: ["leer", "escribir", "eliminar"] };

console.log("\n=== IN TYPE GUARDS ===");
console.log("Usuario procesado:", procesarPersona(usuario2));
console.log("Admin procesado:", procesarPersona(admin2));

// 4. TRUTHINESS NARROWING
// ========================================

function procesarValor(valor: string | null | undefined) {
    if (valor) {
        // TypeScript sabe que valor no es null ni undefined aquí
        return valor.toUpperCase();
    }
    // valor es null o undefined aquí
    return "Valor vacío";
}

let valorString = procesarValor("hola");
let valorNull = procesarValor(null);
let valorUndefined = procesarValor(undefined);
let valorVacio = procesarValor("");

console.log("\n=== TRUTHINESS NARROWING ===");
console.log("Valor string:", valorString);
console.log("Valor null:", valorNull);
console.log("Valor undefined:", valorUndefined);
console.log("Valor vacío:", valorVacio);

// 5. EQUALITY NARROWING
// ========================================

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

let valorNulo = procesarValor(null);
let valorEspecial = procesarValor("especial");
let valorNormal = procesarValor("normal");
let valorNumero = procesarValor(42);

console.log("\n=== EQUALITY NARROWING ===");
console.log("Valor nulo:", valorNulo);
console.log("Valor especial:", valorEspecial);
console.log("Valor normal:", valorNormal);
console.log("Valor número:", valorNumero);

// 6. DISCRIMINATED UNIONS
// ========================================

interface Circulo {
    tipo: "circulo";
    radio: number;
}

interface Rectangulo {
    tipo: "rectangulo";
    ancho: number;
    alto: number;
}

interface Triangulo {
    tipo: "triangulo";
    base: number;
    altura: number;
}

type Forma = Circulo | Rectangulo | Triangulo;

function calcularArea(forma: Forma): number {
    switch (forma.tipo) {
        case "circulo":
            // TypeScript sabe que forma es Circulo aquí
            return Math.PI * forma.radio * forma.radio;
        case "rectangulo":
            // TypeScript sabe que forma es Rectangulo aquí
            return forma.ancho * forma.alto;
        case "triangulo":
            // TypeScript sabe que forma es Triangulo aquí
            return (forma.base * forma.altura) / 2;
    }
}

let circulo: Forma = { tipo: "circulo", radio: 5 };
let rectangulo: Forma = { tipo: "rectangulo", ancho: 10, alto: 8 };
let triangulo: Forma = { tipo: "triangulo", base: 6, altura: 4 };

console.log("\n=== DISCRIMINATED UNIONS ===");
console.log("Área círculo:", calcularArea(circulo));
console.log("Área rectángulo:", calcularArea(rectangulo));
console.log("Área triángulo:", calcularArea(triangulo));

// 7. USER-DEFINED TYPE GUARDS
// ========================================

function esString(valor: unknown): valor is string {
    return typeof valor === "string";
}

function esNumero(valor: unknown): valor is number {
    return typeof valor === "number";
}

function esArray(valor: unknown): valor is any[] {
    return Array.isArray(valor);
}

function esObjeto(valor: unknown): valor is object {
    return typeof valor === "object" && valor !== null;
}

function procesarValor(valor: unknown) {
    if (esString(valor)) {
        // TypeScript sabe que valor es string aquí
        return valor.toUpperCase();
    } else if (esNumero(valor)) {
        // TypeScript sabe que valor es number aquí
        return valor * 2;
    } else if (esArray(valor)) {
        // TypeScript sabe que valor es array aquí
        return valor.length;
    } else if (esObjeto(valor)) {
        // TypeScript sabe que valor es object aquí
        return Object.keys(valor).length;
    } else {
        return "Tipo no soportado";
    }
}

let valorString2 = procesarValor("hola");
let valorNumero2 = procesarValor(42);
let valorArray2 = procesarValor([1, 2, 3]);
let valorObjeto2 = procesarValor({ a: 1, b: 2 });
let valorBoolean2 = procesarValor(true);

console.log("\n=== USER-DEFINED TYPE GUARDS ===");
console.log("Valor string:", valorString2);
console.log("Valor número:", valorNumero2);
console.log("Valor array:", valorArray2);
console.log("Valor objeto:", valorObjeto2);
console.log("Valor boolean:", valorBoolean2);

// 8. CASOS DE USO PRÁCTICOS - VALIDACIÓN DE DATOS DE API
// ========================================

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
        return respuesta;
    } else {
        console.log("Respuesta no válida");
        return null;
    }
}

let respuestaValida = { id: 1, nombre: "Juan", email: "juan@email.com" };
let respuestaInvalida = { id: "1", nombre: "Juan" };

console.log("\n=== VALIDACIÓN DE DATOS DE API ===");
procesarRespuestaAPI(respuestaValida);
procesarRespuestaAPI(respuestaInvalida);

// 9. CASOS DE USO PRÁCTICOS - MANEJO DE ERRORES
// ========================================

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
        return null;
    } else {
        // TypeScript sabe que respuesta es ExitoAPI aquí
        console.log("Datos recibidos:", respuesta.datos);
        return respuesta.datos;
    }
}

let respuestaError: RespuestaAPI = {
    tipo: "error",
    mensaje: "Usuario no encontrado",
    codigo: 404
};

let respuestaExito: RespuestaAPI = {
    tipo: "exito",
    datos: { id: 1, nombre: "Juan" }
};

console.log("\n=== MANEJO DE ERRORES ===");
procesarRespuesta(respuestaError);
procesarRespuesta(respuestaExito);

// 10. CASOS DE USO PRÁCTICOS - VALIDACIÓN DE FORMULARIOS
// ========================================

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

let campoValido: Campo = {
    estado: "valido",
    valor: "juan@email.com"
};

let campoInvalido: Campo = {
    estado: "invalido",
    valor: "email-invalido",
    error: "Formato de email inválido"
};

console.log("\n=== VALIDACIÓN DE FORMULARIOS ===");
console.log("Campo válido:", procesarCampo(campoValido));
console.log("Campo inválido:", procesarCampo(campoInvalido));

// 11. CASOS DE USO PRÁCTICOS - SISTEMA DE ESTADOS
// ========================================

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

let estadoCargando: Estado = { estado: "cargando" };
let estadoExito: Estado = { estado: "exito", datos: { id: 1, nombre: "Juan" } };
let estadoError: Estado = { estado: "error", error: "Error de conexión" };

console.log("\n=== SISTEMA DE ESTADOS ===");
console.log("Estado cargando:", renderizarEstado(estadoCargando));
console.log("Estado éxito:", renderizarEstado(estadoExito));
console.log("Estado error:", renderizarEstado(estadoError));

// 12. NARROWING CON ARRAYS
// ========================================

function procesarArray(array: (string | number)[]) {
    let strings: string[] = [];
    let numbers: number[] = [];
    
    for (let item of array) {
        if (typeof item === "string") {
            // TypeScript sabe que item es string aquí
            strings.push(item);
        } else {
            // TypeScript sabe que item es number aquí
            numbers.push(item);
        }
    }
    
    return { strings, numbers };
}

let arrayMixto = ["hola", 42, "mundo", 123, "typescript"];
let resultado = procesarArray(arrayMixto);

console.log("\n=== NARROWING CON ARRAYS ===");
console.log("Array mixto:", arrayMixto);
console.log("Strings:", resultado.strings);
console.log("Numbers:", resultado.numbers);

// 13. NARROWING CON OBJETOS
// ========================================

interface Usuario {
    id: number;
    nombre: string;
    email?: string;
    telefono?: string;
}

function procesarUsuario(usuario: Usuario) {
    let informacion = `ID: ${usuario.id}, Nombre: ${usuario.nombre}`;
    
    if (usuario.email) {
        // TypeScript sabe que usuario.email no es undefined aquí
        informacion += `, Email: ${usuario.email}`;
    }
    
    if (usuario.telefono) {
        // TypeScript sabe que usuario.telefono no es undefined aquí
        informacion += `, Teléfono: ${usuario.telefono}`;
    }
    
    return informacion;
}

let usuarioCompleto: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "123-456-789"
};

let usuarioBasico: Usuario = {
    id: 2,
    nombre: "María"
};

console.log("\n=== NARROWING CON OBJETOS ===");
console.log("Usuario completo:", procesarUsuario(usuarioCompleto));
console.log("Usuario básico:", procesarUsuario(usuarioBasico));

// 14. NARROWING CON FUNCIONES
// ========================================

function esFuncion(valor: unknown): valor is Function {
    return typeof valor === "function";
}

function procesarValor(valor: unknown) {
    if (esFuncion(valor)) {
        // TypeScript sabe que valor es Function aquí
        return valor();
    } else {
        return "No es una función";
    }
}

let funcion = () => "Hola desde función";
let noFuncion = "No es función";

console.log("\n=== NARROWING CON FUNCIONES ===");
console.log("Función:", procesarValor(funcion));
console.log("No función:", procesarValor(noFuncion));

// 15. NARROWING CON PROMESAS
// ========================================

function esPromesa(valor: unknown): valor is Promise<any> {
    return valor instanceof Promise;
}

async function procesarValor(valor: unknown) {
    if (esPromesa(valor)) {
        // TypeScript sabe que valor es Promise aquí
        return await valor;
    } else {
        return valor;
    }
}

let promesa = Promise.resolve("Hola desde promesa");
let noPromesa = "No es promesa";

console.log("\n=== NARROWING CON PROMESAS ===");
procesarValor(promesa).then(resultado => {
    console.log("Promesa:", resultado);
});

procesarValor(noPromesa).then(resultado => {
    console.log("No promesa:", resultado);
});

// 16. NARROWING CON ENUMS
// ========================================

enum EstadoUsuario {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
    PENDIENTE = "pendiente"
}

function procesarEstadoUsuario(estado: EstadoUsuario) {
    switch (estado) {
        case EstadoUsuario.ACTIVO:
            // TypeScript sabe que estado es ACTIVO aquí
            return "Usuario activo";
        case EstadoUsuario.INACTIVO:
            // TypeScript sabe que estado es INACTIVO aquí
            return "Usuario inactivo";
        case EstadoUsuario.PENDIENTE:
            // TypeScript sabe que estado es PENDIENTE aquí
            return "Usuario pendiente";
    }
}

console.log("\n=== NARROWING CON ENUMS ===");
console.log("Estado activo:", procesarEstadoUsuario(EstadoUsuario.ACTIVO));
console.log("Estado inactivo:", procesarEstadoUsuario(EstadoUsuario.INACTIVO));
console.log("Estado pendiente:", procesarEstadoUsuario(EstadoUsuario.PENDIENTE));

// 17. NARROWING CON LITERAL TYPES
// ========================================

type Accion = "crear" | "leer" | "actualizar" | "eliminar";

function procesarAccion(accion: Accion) {
    switch (accion) {
        case "crear":
            // TypeScript sabe que accion es "crear" aquí
            return "Creando elemento";
        case "leer":
            // TypeScript sabe que accion es "leer" aquí
            return "Leyendo elemento";
        case "actualizar":
            // TypeScript sabe que accion es "actualizar" aquí
            return "Actualizando elemento";
        case "eliminar":
            // TypeScript sabe que accion es "eliminar" aquí
            return "Eliminando elemento";
    }
}

console.log("\n=== NARROWING CON LITERAL TYPES ===");
console.log("Acción crear:", procesarAccion("crear"));
console.log("Acción leer:", procesarAccion("leer"));
console.log("Acción actualizar:", procesarAccion("actualizar"));
console.log("Acción eliminar:", procesarAccion("eliminar"));

// 18. NARROWING CON UNION TYPES COMPLEJOS
// ========================================

type TipoUsuario = "admin" | "usuario" | "invitado";
type EstadoUsuario2 = "activo" | "inactivo";

interface UsuarioCompleto {
    tipo: TipoUsuario;
    estado: EstadoUsuario2;
    nombre: string;
    email: string;
}

function procesarUsuarioCompleto(usuario: UsuarioCompleto) {
    if (usuario.tipo === "admin" && usuario.estado === "activo") {
        // TypeScript sabe que usuario es admin activo aquí
        return `Admin activo: ${usuario.nombre} - ${usuario.email}`;
    } else if (usuario.tipo === "usuario" && usuario.estado === "activo") {
        // TypeScript sabe que usuario es usuario activo aquí
        return `Usuario activo: ${usuario.nombre} - ${usuario.email}`;
    } else {
        // TypeScript sabe que usuario no es admin activo ni usuario activo aquí
        return `Usuario inactivo o invitado: ${usuario.nombre}`;
    }
}

let adminActivo: UsuarioCompleto = {
    tipo: "admin",
    estado: "activo",
    nombre: "Admin",
    email: "admin@email.com"
};

let usuarioActivo: UsuarioCompleto = {
    tipo: "usuario",
    estado: "activo",
    nombre: "Usuario",
    email: "usuario@email.com"
};

let usuarioInactivo: UsuarioCompleto = {
    tipo: "usuario",
    estado: "inactivo",
    nombre: "Inactivo",
    email: "inactivo@email.com"
};

console.log("\n=== NARROWING CON UNION TYPES COMPLEJOS ===");
console.log("Admin activo:", procesarUsuarioCompleto(adminActivo));
console.log("Usuario activo:", procesarUsuarioCompleto(usuarioActivo));
console.log("Usuario inactivo:", procesarUsuarioCompleto(usuarioInactivo));

// 19. NARROWING CON CONDITIONAL TYPES
// ========================================

type EsArray<T> = T extends any[] ? true : false;
type EsString<T> = T extends string ? true : false;

function procesarTipo<T>(valor: T): string {
    if (Array.isArray(valor)) {
        // TypeScript sabe que valor es array aquí
        return `Array con ${valor.length} elementos`;
    } else if (typeof valor === "string") {
        // TypeScript sabe que valor es string aquí
        return `String: ${valor}`;
    } else {
        return `Otro tipo: ${typeof valor}`;
    }
}

let arrayEjemplo = [1, 2, 3];
let stringEjemplo = "Hola";
let numberEjemplo = 42;

console.log("\n=== NARROWING CON CONDITIONAL TYPES ===");
console.log("Array:", procesarTipo(arrayEjemplo));
console.log("String:", procesarTipo(stringEjemplo));
console.log("Number:", procesarTipo(numberEjemplo));

// 20. NARROWING CON MAPPED TYPES
// ========================================

type Opcional<T> = {
    [K in keyof T]?: T[K];
};

type UsuarioOpcional = Opcional<Usuario>;

function procesarUsuarioOpcional(usuario: UsuarioOpcional) {
    let informacion = "";
    
    if (usuario.id) {
        // TypeScript sabe que usuario.id no es undefined aquí
        informacion += `ID: ${usuario.id}`;
    }
    
    if (usuario.nombre) {
        // TypeScript sabe que usuario.nombre no es undefined aquí
        informacion += `, Nombre: ${usuario.nombre}`;
    }
    
    if (usuario.email) {
        // TypeScript sabe que usuario.email no es undefined aquí
        informacion += `, Email: ${usuario.email}`;
    }
    
    return informacion || "Usuario vacío";
}

let usuarioOpcional: UsuarioOpcional = {
    id: 1,
    nombre: "Juan"
    // email es opcional
};

console.log("\n=== NARROWING CON MAPPED TYPES ===");
console.log("Usuario opcional:", procesarUsuarioOpcional(usuarioOpcional));

console.log("\n=== FIN DE EJEMPLOS DE NARROWING ===");

// ========================================
// EJERCICIOS - NARROWING EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: TYPEOF TYPE GUARDS
// ========================================
// Crea una función que procese valores de tipo string | number usando typeof

// TODO: Crea una función procesarValor que use typeof para narrowing
// function procesarValor(valor: string | number): string {
//     // Implementa la función usando typeof
// }

// ========================================
// EJERCICIO 2: INSTANCEOF TYPE GUARDS
// ========================================
// Crea clases y una función que use instanceof para narrowing

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

// TODO: Crea una función procesarObjeto que use instanceof
// function procesarObjeto(obj: Usuario | string): string {
//     // Implementa la función usando instanceof
// }

// ========================================
// EJERCICIO 3: IN TYPE GUARDS
// ========================================
// Crea interfaces y una función que use 'in' para narrowing

interface Usuario {
    nombre: string;
    email: string;
}

interface Admin {
    nombre: string;
    permisos: string[];
}

// TODO: Crea una función procesarPersona que use 'in' para narrowing
// function procesarPersona(persona: Usuario | Admin): string {
//     // Implementa la función usando 'in'
// }

// ========================================
// EJERCICIO 4: TRUTHINESS NARROWING
// ========================================
// Crea una función que use truthiness narrowing

// TODO: Crea una función procesarValor que use truthiness narrowing
// function procesarValor(valor: string | null | undefined): string {
//     // Implementa la función usando truthiness narrowing
// }

// ========================================
// EJERCICIO 5: EQUALITY NARROWING
// ========================================
// Crea una función que use equality narrowing

// TODO: Crea una función procesarValor que use equality narrowing
// function procesarValor(valor: string | number | null): string {
//     // Implementa la función usando equality narrowing
// }

// ========================================
// EJERCICIO 6: DISCRIMINATED UNIONS
// ========================================
// Crea discriminated unions para formas geométricas

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

// TODO: Crea una función calcularArea que use discriminated unions
// function calcularArea(forma: Forma): number {
//     // Implementa la función usando discriminated unions
// }

// ========================================
// EJERCICIO 7: USER-DEFINED TYPE GUARDS
// ========================================
// Crea type guards personalizados

// TODO: Crea type guards personalizados
// function esString(valor: unknown): valor is string {
//     // Implementa el type guard
// }

// function esNumero(valor: unknown): valor is number {
//     // Implementa el type guard
// }

// function esArray(valor: unknown): valor is any[] {
//     // Implementa el type guard
// }

// TODO: Crea una función procesarValor que use los type guards
// function procesarValor(valor: unknown): string {
//     // Implementa la función usando los type guards
// }

// ========================================
// EJERCICIO 8: VALIDACIÓN DE DATOS DE API
// ========================================
// Crea un sistema de validación para datos de API

interface UsuarioAPI {
    id: number;
    nombre: string;
    email: string;
}

// TODO: Crea un type guard para validar UsuarioAPI
// function esUsuarioAPI(valor: unknown): valor is UsuarioAPI {
//     // Implementa el type guard
// }

// TODO: Crea una función procesarRespuestaAPI que use el type guard
// function procesarRespuestaAPI(respuesta: unknown): UsuarioAPI | null {
//     // Implementa la función usando el type guard
// }

// ========================================
// EJERCICIO 9: MANEJO DE ERRORES
// ========================================
// Crea un sistema de manejo de errores con discriminated unions

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

// TODO: Crea una función procesarRespuesta que use discriminated unions
// function procesarRespuesta(respuesta: RespuestaAPI): any | null {
//     // Implementa la función usando discriminated unions
// }

// ========================================
// EJERCICIO 10: VALIDACIÓN DE FORMULARIOS
// ========================================
// Crea un sistema de validación de formularios

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

// TODO: Crea una función procesarCampo que use discriminated unions
// function procesarCampo(campo: Campo): string {
//     // Implementa la función usando discriminated unions
// }

// ========================================
// EJERCICIO 11: SISTEMA DE ESTADOS
// ========================================
// Crea un sistema de estados con discriminated unions

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

// TODO: Crea una función renderizarEstado que use discriminated unions
// function renderizarEstado(estado: Estado): string {
//     // Implementa la función usando discriminated unions
// }

// ========================================
// EJERCICIO 12: NARROWING CON ARRAYS
// ========================================
// Crea una función que procese arrays mixtos

// TODO: Crea una función procesarArray que use narrowing
// function procesarArray(array: (string | number)[]): { strings: string[]; numbers: number[] } {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 13: NARROWING CON OBJETOS
// ========================================
// Crea una función que procese objetos con propiedades opcionales

interface Usuario {
    id: number;
    nombre: string;
    email?: string;
    telefono?: string;
}

// TODO: Crea una función procesarUsuario que use narrowing
// function procesarUsuario(usuario: Usuario): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 14: NARROWING CON FUNCIONES
// ========================================
// Crea una función que procese valores que pueden ser funciones

// TODO: Crea un type guard para funciones
// function esFuncion(valor: unknown): valor is Function {
//     // Implementa el type guard
// }

// TODO: Crea una función procesarValor que use el type guard
// function procesarValor(valor: unknown): any {
//     // Implementa la función usando el type guard
// }

// ========================================
// EJERCICIO 15: NARROWING CON PROMESAS
// ========================================
// Crea una función que procese valores que pueden ser promesas

// TODO: Crea un type guard para promesas
// function esPromesa(valor: unknown): valor is Promise<any> {
//     // Implementa el type guard
// }

// TODO: Crea una función procesarValor que use el type guard
// async function procesarValor(valor: unknown): Promise<any> {
//     // Implementa la función usando el type guard
// }

// ========================================
// EJERCICIO 16: NARROWING CON ENUMS
// ========================================
// Crea un enum y una función que use narrowing

enum EstadoUsuario {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
    PENDIENTE = "pendiente"
}

// TODO: Crea una función procesarEstadoUsuario que use narrowing
// function procesarEstadoUsuario(estado: EstadoUsuario): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 17: NARROWING CON LITERAL TYPES
// ========================================
// Crea literal types y una función que use narrowing

type Accion = "crear" | "leer" | "actualizar" | "eliminar";

// TODO: Crea una función procesarAccion que use narrowing
// function procesarAccion(accion: Accion): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 18: NARROWING CON UNION TYPES COMPLEJOS
// ========================================
// Crea union types complejos y una función que use narrowing

type TipoUsuario = "admin" | "usuario" | "invitado";
type EstadoUsuario2 = "activo" | "inactivo";

interface UsuarioCompleto {
    tipo: TipoUsuario;
    estado: EstadoUsuario2;
    nombre: string;
    email: string;
}

// TODO: Crea una función procesarUsuarioCompleto que use narrowing
// function procesarUsuarioCompleto(usuario: UsuarioCompleto): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 19: NARROWING CON CONDITIONAL TYPES
// ========================================
// Crea una función que use narrowing con conditional types

// TODO: Crea una función procesarTipo que use narrowing
// function procesarTipo<T>(valor: T): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// EJERCICIO 20: NARROWING CON MAPPED TYPES
// ========================================
// Crea mapped types y una función que use narrowing

type Opcional<T> = {
    [K in keyof T]?: T[K];
};

type UsuarioOpcional = Opcional<Usuario>;

// TODO: Crea una función procesarUsuarioOpcional que use narrowing
// function procesarUsuarioOpcional(usuario: UsuarioOpcional): string {
//     // Implementa la función usando narrowing
// }

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: TYPEOF TYPE GUARDS
function procesarValor(valor: string | number): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}

// SOLUCIÓN 2: INSTANCEOF TYPE GUARDS
function procesarObjeto(obj: Usuario | string): string {
    if (obj instanceof Usuario) {
        return `Usuario: ${obj.nombre} (${obj.email})`;
    } else {
        return `String: ${obj}`;
    }
}

// SOLUCIÓN 3: IN TYPE GUARDS
function procesarPersona(persona: Usuario | Admin): string {
    if ("email" in persona) {
        return `Usuario: ${persona.nombre} - ${persona.email}`;
    } else {
        return `Admin: ${persona.nombre} - Permisos: ${persona.permisos.join(", ")}`;
    }
}

// SOLUCIÓN 4: TRUTHINESS NARROWING
function procesarValor(valor: string | null | undefined): string {
    if (valor) {
        return valor.toUpperCase();
    }
    return "Valor vacío";
}

// SOLUCIÓN 5: EQUALITY NARROWING
function procesarValor(valor: string | number | null): string {
    if (valor === null) {
        return "Valor nulo";
    } else if (valor === "especial") {
        return "Valor especial";
    } else {
        return valor.toString();
    }
}

// SOLUCIÓN 6: DISCRIMINATED UNIONS
function calcularArea(forma: Forma): number {
    switch (forma.tipo) {
        case "circulo":
            return Math.PI * forma.radio * forma.radio;
        case "rectangulo":
            return forma.ancho * forma.alto;
        case "triangulo":
            return (forma.base * forma.altura) / 2;
    }
}

// SOLUCIÓN 7: USER-DEFINED TYPE GUARDS
function esString(valor: unknown): valor is string {
    return typeof valor === "string";
}

function esNumero(valor: unknown): valor is number {
    return typeof valor === "number";
}

function esArray(valor: unknown): valor is any[] {
    return Array.isArray(valor);
}

function procesarValor(valor: unknown): string {
    if (esString(valor)) {
        return valor.toUpperCase();
    } else if (esNumero(valor)) {
        return valor.toString();
    } else if (esArray(valor)) {
        return `Array con ${valor.length} elementos`;
    } else {
        return "Tipo no soportado";
    }
}

// SOLUCIÓN 8: VALIDACIÓN DE DATOS DE API
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

function procesarRespuestaAPI(respuesta: unknown): UsuarioAPI | null {
    if (esUsuarioAPI(respuesta)) {
        return respuesta;
    } else {
        return null;
    }
}

// SOLUCIÓN 9: MANEJO DE ERRORES
function procesarRespuesta(respuesta: RespuestaAPI): any | null {
    if (respuesta.tipo === "error") {
        console.error(`Error ${respuesta.codigo}: ${respuesta.mensaje}`);
        return null;
    } else {
        return respuesta.datos;
    }
}

// SOLUCIÓN 10: VALIDACIÓN DE FORMULARIOS
function procesarCampo(campo: Campo): string {
    if (campo.estado === "valido") {
        return campo.valor;
    } else {
        return `Error: ${campo.error}`;
    }
}

// SOLUCIÓN 11: SISTEMA DE ESTADOS
function renderizarEstado(estado: Estado): string {
    switch (estado.estado) {
        case "cargando":
            return "Cargando...";
        case "exito":
            return `Datos: ${estado.datos}`;
        case "error":
            return `Error: ${estado.error}`;
    }
}

// SOLUCIÓN 12: NARROWING CON ARRAYS
function procesarArray(array: (string | number)[]): { strings: string[]; numbers: number[] } {
    let strings: string[] = [];
    let numbers: number[] = [];
    
    for (let item of array) {
        if (typeof item === "string") {
            strings.push(item);
        } else {
            numbers.push(item);
        }
    }
    
    return { strings, numbers };
}

// SOLUCIÓN 13: NARROWING CON OBJETOS
function procesarUsuario(usuario: Usuario): string {
    let informacion = `ID: ${usuario.id}, Nombre: ${usuario.nombre}`;
    
    if (usuario.email) {
        informacion += `, Email: ${usuario.email}`;
    }
    
    if (usuario.telefono) {
        informacion += `, Teléfono: ${usuario.telefono}`;
    }
    
    return informacion;
}

// SOLUCIÓN 14: NARROWING CON FUNCIONES
function esFuncion(valor: unknown): valor is Function {
    return typeof valor === "function";
}

function procesarValor(valor: unknown): any {
    if (esFuncion(valor)) {
        return valor();
    } else {
        return "No es una función";
    }
}

// SOLUCIÓN 15: NARROWING CON PROMESAS
function esPromesa(valor: unknown): valor is Promise<any> {
    return valor instanceof Promise;
}

async function procesarValor(valor: unknown): Promise<any> {
    if (esPromesa(valor)) {
        return await valor;
    } else {
        return valor;
    }
}

// SOLUCIÓN 16: NARROWING CON ENUMS
function procesarEstadoUsuario(estado: EstadoUsuario): string {
    switch (estado) {
        case EstadoUsuario.ACTIVO:
            return "Usuario activo";
        case EstadoUsuario.INACTIVO:
            return "Usuario inactivo";
        case EstadoUsuario.PENDIENTE:
            return "Usuario pendiente";
    }
}

// SOLUCIÓN 17: NARROWING CON LITERAL TYPES
function procesarAccion(accion: Accion): string {
    switch (accion) {
        case "crear":
            return "Creando elemento";
        case "leer":
            return "Leyendo elemento";
        case "actualizar":
            return "Actualizando elemento";
        case "eliminar":
            return "Eliminando elemento";
    }
}

// SOLUCIÓN 18: NARROWING CON UNION TYPES COMPLEJOS
function procesarUsuarioCompleto(usuario: UsuarioCompleto): string {
    if (usuario.tipo === "admin" && usuario.estado === "activo") {
        return `Admin activo: ${usuario.nombre} - ${usuario.email}`;
    } else if (usuario.tipo === "usuario" && usuario.estado === "activo") {
        return `Usuario activo: ${usuario.nombre} - ${usuario.email}`;
    } else {
        return `Usuario inactivo o invitado: ${usuario.nombre}`;
    }
}

// SOLUCIÓN 19: NARROWING CON CONDITIONAL TYPES
function procesarTipo<T>(valor: T): string {
    if (Array.isArray(valor)) {
        return `Array con ${valor.length} elementos`;
    } else if (typeof valor === "string") {
        return `String: ${valor}`;
    } else {
        return `Otro tipo: ${typeof valor}`;
    }
}

// SOLUCIÓN 20: NARROWING CON MAPPED TYPES
function procesarUsuarioOpcional(usuario: UsuarioOpcional): string {
    let informacion = "";
    
    if (usuario.id) {
        informacion += `ID: ${usuario.id}`;
    }
    
    if (usuario.nombre) {
        informacion += `, Nombre: ${usuario.nombre}`;
    }
    
    if (usuario.email) {
        informacion += `, Email: ${usuario.email}`;
    }
    
    return informacion || "Usuario vacío";
}

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE NARROWING ===");

// Ejemplo de uso de los tipos y funciones creados
let resultadoString = procesarValor("hola");
let resultadoNumber = procesarValor(42);
console.log("Resultado string:", resultadoString);
console.log("Resultado number:", resultadoNumber);

// Ejemplo con instanceof
let usuario = new Usuario("Juan", "juan@email.com");
let admin = new Admin("María", "maria@email.com", ["leer", "escribir"]);
let texto = "Hola Mundo";

console.log("Usuario procesado:", procesarObjeto(usuario));
console.log("Admin procesado:", procesarObjeto(admin));
console.log("Texto procesado:", procesarObjeto(texto));

// Ejemplo con 'in'
let usuario2: Usuario = { nombre: "Pedro", email: "pedro@email.com" };
let admin2: Admin = { nombre: "Ana", permisos: ["leer", "escribir", "eliminar"] };

console.log("Usuario procesado:", procesarPersona(usuario2));
console.log("Admin procesado:", procesarPersona(admin2));

// Ejemplo con truthiness
let valorString = procesarValor("hola");
let valorNull = procesarValor(null);
let valorUndefined = procesarValor(undefined);
let valorVacio = procesarValor("");

console.log("Valor string:", valorString);
console.log("Valor null:", valorNull);
console.log("Valor undefined:", valorUndefined);
console.log("Valor vacío:", valorVacio);

// Ejemplo con equality
let valorNulo = procesarValor(null);
let valorEspecial = procesarValor("especial");
let valorNormal = procesarValor("normal");
let valorNumero = procesarValor(42);

console.log("Valor nulo:", valorNulo);
console.log("Valor especial:", valorEspecial);
console.log("Valor normal:", valorNormal);
console.log("Valor número:", valorNumero);

// Ejemplo con discriminated unions
let circulo: Forma = { tipo: "circulo", radio: 5 };
let rectangulo: Forma = { tipo: "rectangulo", ancho: 10, alto: 8 };
let triangulo: Forma = { tipo: "triangulo", base: 6, altura: 4 };

console.log("Área círculo:", calcularArea(circulo));
console.log("Área rectángulo:", calcularArea(rectangulo));
console.log("Área triángulo:", calcularArea(triangulo));

// Ejemplo con user-defined type guards
let valorString2 = procesarValor("hola");
let valorNumero2 = procesarValor(42);
let valorArray2 = procesarValor([1, 2, 3]);
let valorObjeto2 = procesarValor({ a: 1, b: 2 });

console.log("Valor string:", valorString2);
console.log("Valor número:", valorNumero2);
console.log("Valor array:", valorArray2);
console.log("Valor objeto:", valorObjeto2);

// Ejemplo con validación de API
let respuestaValida = { id: 1, nombre: "Juan", email: "juan@email.com" };
let respuestaInvalida = { id: "1", nombre: "Juan" };

console.log("Respuesta válida:", procesarRespuestaAPI(respuestaValida));
console.log("Respuesta inválida:", procesarRespuestaAPI(respuestaInvalida));

// Ejemplo con manejo de errores
let respuestaError: RespuestaAPI = {
    tipo: "error",
    mensaje: "Usuario no encontrado",
    codigo: 404
};

let respuestaExito: RespuestaAPI = {
    tipo: "exito",
    datos: { id: 1, nombre: "Juan" }
};

console.log("Respuesta error:", procesarRespuesta(respuestaError));
console.log("Respuesta éxito:", procesarRespuesta(respuestaExito));

// Ejemplo con validación de formularios
let campoValido: Campo = {
    estado: "valido",
    valor: "juan@email.com"
};

let campoInvalido: Campo = {
    estado: "invalido",
    valor: "email-invalido",
    error: "Formato de email inválido"
};

console.log("Campo válido:", procesarCampo(campoValido));
console.log("Campo inválido:", procesarCampo(campoInvalido));

// Ejemplo con sistema de estados
let estadoCargando: Estado = { estado: "cargando" };
let estadoExito: Estado = { estado: "exito", datos: { id: 1, nombre: "Juan" } };
let estadoError: Estado = { estado: "error", error: "Error de conexión" };

console.log("Estado cargando:", renderizarEstado(estadoCargando));
console.log("Estado éxito:", renderizarEstado(estadoExito));
console.log("Estado error:", renderizarEstado(estadoError));

// Ejemplo con arrays
let arrayMixto = ["hola", 42, "mundo", 123, "typescript"];
let resultado = procesarArray(arrayMixto);

console.log("Array mixto:", arrayMixto);
console.log("Strings:", resultado.strings);
console.log("Numbers:", resultado.numbers);

// Ejemplo con objetos
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

console.log("Usuario completo:", procesarUsuario(usuarioCompleto));
console.log("Usuario básico:", procesarUsuario(usuarioBasico));

// Ejemplo con funciones
let funcion = () => "Hola desde función";
let noFuncion = "No es función";

console.log("Función:", procesarValor(funcion));
console.log("No función:", procesarValor(noFuncion));

// Ejemplo con promesas
let promesa = Promise.resolve("Hola desde promesa");
let noPromesa = "No es promesa";

procesarValor(promesa).then(resultado => {
    console.log("Promesa:", resultado);
});

procesarValor(noPromesa).then(resultado => {
    console.log("No promesa:", resultado);
});

// Ejemplo con enums
console.log("Estado activo:", procesarEstadoUsuario(EstadoUsuario.ACTIVO));
console.log("Estado inactivo:", procesarEstadoUsuario(EstadoUsuario.INACTIVO));
console.log("Estado pendiente:", procesarEstadoUsuario(EstadoUsuario.PENDIENTE));

// Ejemplo con literal types
console.log("Acción crear:", procesarAccion("crear"));
console.log("Acción leer:", procesarAccion("leer"));
console.log("Acción actualizar:", procesarAccion("actualizar"));
console.log("Acción eliminar:", procesarAccion("eliminar"));

// Ejemplo con union types complejos
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

console.log("Admin activo:", procesarUsuarioCompleto(adminActivo));
console.log("Usuario activo:", procesarUsuarioCompleto(usuarioActivo));
console.log("Usuario inactivo:", procesarUsuarioCompleto(usuarioInactivo));

// Ejemplo con conditional types
let arrayEjemplo = [1, 2, 3];
let stringEjemplo = "Hola";
let numberEjemplo = 42;

console.log("Array:", procesarTipo(arrayEjemplo));
console.log("String:", procesarTipo(stringEjemplo));
console.log("Number:", procesarTipo(numberEjemplo));

// Ejemplo con mapped types
let usuarioOpcional: UsuarioOpcional = {
    id: 1,
    nombre: "Juan"
    // email es opcional
};

console.log("Usuario opcional:", procesarUsuarioOpcional(usuarioOpcional));

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE NARROWING ===");

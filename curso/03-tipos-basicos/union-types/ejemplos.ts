// ========================================
// EJEMPLOS - UNION TYPES EN TYPESCRIPT
// ========================================

// 1. UNION TYPES BÁSICOS
// ========================================

// Variable que puede ser string o number
let id: string | number = "abc123";
console.log("ID como string:", id, "Tipo:", typeof id);

id = 456;
console.log("ID como number:", id, "Tipo:", typeof id);

// Variable que puede ser string, number o boolean
let valor: string | number | boolean = "texto";
console.log("Valor inicial:", valor);

valor = 42;
console.log("Valor como number:", valor);

valor = true;
console.log("Valor como boolean:", valor);

// 2. FUNCIONES CON UNION TYPES
// ========================================

function procesarId(id: string | number): string {
    return `ID procesado: ${id}`;
}

function formatearValor(valor: string | number): string {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}

console.log("\n=== FUNCIONES CON UNION TYPES ===");
console.log("Procesar ID string:", procesarId("user123"));
console.log("Procesar ID number:", procesarId(456));
console.log("Formatear string:", formatearValor("hola"));
console.log("Formatear number:", formatearValor(42));

// 3. NARROWING CON TYPE GUARDS
// ========================================

function procesarDatos(datos: string | number | boolean): string {
    if (typeof datos === 'string') {
        // TypeScript sabe que datos es string aquí
        return `Texto: ${datos.toUpperCase()}`;
    } else if (typeof datos === 'number') {
        // TypeScript sabe que datos es number aquí
        return `Número: ${datos * 2}`;
    } else {
        // TypeScript sabe que datos es boolean aquí
        return `Boolean: ${!datos}`;
    }
}

console.log("\n=== NARROWING CON TYPE GUARDS ===");
console.log("Procesar string:", procesarDatos("typescript"));
console.log("Procesar number:", procesarDatos(10));
console.log("Procesar boolean:", procesarDatos(true));

// 4. TYPE GUARDS PERSONALIZADOS
// ========================================

function esString(valor: string | number): valor is string {
    return typeof valor === 'string';
}

function esNumber(valor: string | number): valor is number {
    return typeof valor === 'number';
}

function procesarConTypeGuard(valor: string | number): string {
    if (esString(valor)) {
        // TypeScript sabe que valor es string
        return `String: ${valor.length} caracteres`;
    } else if (esNumber(valor)) {
        // TypeScript sabe que valor es number
        return `Number: ${valor} al cuadrado es ${valor * valor}`;
    }
    return "Tipo no reconocido";
}

console.log("\n=== TYPE GUARDS PERSONALIZADOS ===");
console.log("Con string:", procesarConTypeGuard("Hola"));
console.log("Con number:", procesarConTypeGuard(5));

// 5. UNION TYPES CON NULL Y UNDEFINED
// ========================================

let nombre: string | null = "Juan";
console.log("\n=== UNION TYPES CON NULL ===");
console.log("Nombre inicial:", nombre);

nombre = null;
console.log("Nombre como null:", nombre);

let edad: number | undefined = 25;
console.log("Edad inicial:", edad);

edad = undefined;
console.log("Edad como undefined:", edad);

// Combinando null y undefined
let telefono: string | null | undefined = "123-456-789";
console.log("Teléfono inicial:", telefono);

telefono = null;
console.log("Teléfono como null:", telefono);

telefono = undefined;
console.log("Teléfono como undefined:", telefono);

// 6. UNION TYPES CON ARRAYS
// ========================================

// Array que puede contener strings o números
let mixto: (string | number)[] = ["texto", 123, "otro texto", 456];
console.log("\n=== UNION TYPES CON ARRAYS ===");
console.log("Array mixto:", mixto);

// Array que puede ser de strings O de números (no mixto)
let arrayUnion: string[] | number[] = ["a", "b", "c"];
console.log("Array de strings:", arrayUnion);

arrayUnion = [1, 2, 3];
console.log("Array de numbers:", arrayUnion);

// 7. UNION TYPES CON OBJETOS
// ========================================

interface Usuario {
    nombre: string;
    email: string;
}

interface Admin {
    nombre: string;
    permisos: string[];
}

type UsuarioOAdmin = Usuario | Admin;

function procesarUsuario(usuario: UsuarioOAdmin): string {
    // Type guard para verificar el tipo
    if ('email' in usuario) {
        // Es Usuario
        return `Usuario: ${usuario.nombre} (${usuario.email})`;
    } else {
        // Es Admin
        return `Admin: ${usuario.nombre} con ${usuario.permisos.length} permisos`;
    }
}

console.log("\n=== UNION TYPES CON OBJETOS ===");
let usuario: Usuario = { nombre: "Ana", email: "ana@email.com" };
let admin: Admin = { nombre: "Luis", permisos: ["read", "write", "delete"] };

console.log("Procesar usuario:", procesarUsuario(usuario));
console.log("Procesar admin:", procesarUsuario(admin));

// 8. DISCRIMINATED UNIONS
// ========================================

interface Exito {
    tipo: "exito";
    datos: any;
}

interface Error {
    tipo: "error";
    mensaje: string;
}

type Resultado = Exito | Error;

function procesarResultado(resultado: Resultado): string {
    switch (resultado.tipo) {
        case "exito":
            // TypeScript sabe que es Exito
            return `Éxito: ${JSON.stringify(resultado.datos)}`;
        case "error":
            // TypeScript sabe que es Error
            return `Error: ${resultado.mensaje}`;
    }
}

console.log("\n=== DISCRIMINATED UNIONS ===");
let resultadoExito: Resultado = { tipo: "exito", datos: { id: 1, nombre: "test" } };
let resultadoError: Resultado = { tipo: "error", mensaje: "Algo salió mal" };

console.log("Resultado éxito:", procesarResultado(resultadoExito));
console.log("Resultado error:", procesarResultado(resultadoError));

// 9. UNION TYPES CON LITERAL TYPES
// ========================================

// Union de literal types
type Color = "rojo" | "verde" | "azul";
type Tamaño = "pequeño" | "mediano" | "grande";

let color: Color = "rojo";
console.log("\n=== UNION TYPES CON LITERAL TYPES ===");
console.log("Color:", color);

// color = "amarillo"; // ❌ Error: no es un color válido

// Combinando con otros tipos
type Configuracion = {
    color: Color;
    tamaño: Tamaño;
    activo: boolean;
};

let config: Configuracion = {
    color: "azul",
    tamaño: "mediano",
    activo: true
};

console.log("Configuración:", config);

// 10. FUNCIONES CON RETORNO UNION TYPE
// ========================================

function obtenerValor(): string | null {
    return Math.random() > 0.5 ? "éxito" : null;
}

function parsearNumero(texto: string): number | undefined {
    const numero = parseFloat(texto);
    return isNaN(numero) ? undefined : numero;
}

console.log("\n=== FUNCIONES CON RETORNO UNION TYPE ===");
console.log("Obtener valor:", obtenerValor());
console.log("Parsear '123':", parsearNumero("123"));
console.log("Parsear 'abc':", parsearNumero("abc"));

// 11. UNION TYPES CON GENERICS
// ========================================

// Función genérica que retorna union type
function obtenerPrimero<T, U>(array: T[] | U[]): T | U | undefined {
    return array[0];
}

// Union type con generic
type ResultadoGenerico<T> = {
    exito: true;
    datos: T;
} | {
    exito: false;
    error: string;
};

function procesarDatosGenerico<T>(datos: T): ResultadoGenerico<T> {
    try {
        // Simular procesamiento
        return { exito: true, datos };
    } catch (error) {
        return { exito: false, error: "Error en procesamiento" };
    }
}

console.log("\n=== UNION TYPES CON GENERICS ===");
console.log("Primer elemento [1,2,3]:", obtenerPrimero([1, 2, 3]));
console.log("Primer elemento ['a','b']:", obtenerPrimero(["a", "b"]));

let resultadoGenerico = procesarDatosGenerico("test");
console.log("Resultado genérico:", resultadoGenerico);

// 12. EJEMPLOS PRÁCTICOS
// ========================================

// API Response
type ApiResponse<T> = 
    | { success: true; data: T }
    | { success: false; error: string };

async function simularFetchData(): Promise<ApiResponse<{ usuarios: string[] }>> {
    // Simular llamada a API
    const exito = Math.random() > 0.3;
    
    if (exito) {
        return { success: true, data: { usuarios: ["Ana", "Luis", "María"] } };
    } else {
        return { success: false, error: "Error de conexión" };
    }
}

// Formulario
type CampoFormulario = 
    | { tipo: "texto"; valor: string }
    | { tipo: "numero"; valor: number }
    | { tipo: "checkbox"; valor: boolean };

function validarCampo(campo: CampoFormulario): boolean {
    switch (campo.tipo) {
        case "texto":
            return campo.valor.length > 0;
        case "numero":
            return campo.valor > 0;
        case "checkbox":
            return campo.valor === true;
    }
}

// Eventos
type Evento = 
    | { tipo: "click"; x: number; y: number }
    | { tipo: "keypress"; tecla: string }
    | { tipo: "scroll"; posicion: number };

function manejarEvento(evento: Evento): void {
    switch (evento.tipo) {
        case "click":
            console.log(`Click en (${evento.x}, ${evento.y})`);
            break;
        case "keypress":
            console.log(`Tecla presionada: ${evento.tecla}`);
            break;
        case "scroll":
            console.log(`Posición de scroll: ${evento.posicion}`);
            break;
    }
}

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Simular API
simularFetchData().then(response => {
    if (response.success) {
        console.log("API Response éxito:", response.data);
    } else {
        console.log("API Response error:", (response as { success: false; error: string }).error);
    }
});

// Validar campos
let campoTexto: CampoFormulario = { tipo: "texto", valor: "Hola" };
let campoNumero: CampoFormulario = { tipo: "numero", valor: 42 };
let campoCheckbox: CampoFormulario = { tipo: "checkbox", valor: true };

console.log("Campo texto válido:", validarCampo(campoTexto));
console.log("Campo número válido:", validarCampo(campoNumero));
console.log("Campo checkbox válido:", validarCampo(campoCheckbox));

// Manejar eventos
let eventoClick: Evento = { tipo: "click", x: 100, y: 200 };
let eventoKeypress: Evento = { tipo: "keypress", tecla: "Enter" };
let eventoScroll: Evento = { tipo: "scroll", posicion: 50 };

manejarEvento(eventoClick);
manejarEvento(eventoKeypress);
manejarEvento(eventoScroll);

// 13. UNION TYPES CON INSTANCEOF
// ========================================

class ErrorPersonalizado extends Error {
    constructor(mensaje: string, public codigo: number) {
        super(mensaje);
        this.name = "ErrorPersonalizado";
    }
}

function procesarError(error: Error | string | ErrorPersonalizado): string {
    if (error instanceof ErrorPersonalizado) {
        return `Error personalizado ${error.codigo}: ${error.message}`;
    } else if (error instanceof Error) {
        return `Error: ${error.message}`;
    } else {
        return `Error string: ${error}`;
    }
}

console.log("\n=== UNION TYPES CON INSTANCEOF ===");
console.log("Error estándar:", procesarError(new Error("Error estándar")));
console.log("Error personalizado:", procesarError(new ErrorPersonalizado("Error personalizado", 500)));
console.log("Error string:", procesarError("Error como string"));

// 14. UNION TYPES CON ARRAYS DE OBJETOS
// ========================================

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

interface Servicio {
    id: number;
    nombre: string;
    duracion: number;
}

type Item = Producto | Servicio;

function procesarItem(item: Item): string {
    if ('precio' in item) {
        // Es Producto
        return `Producto: ${item.nombre} - $${item.precio}`;
    } else {
        // Es Servicio
        return `Servicio: ${item.nombre} - ${item.duracion} minutos`;
    }
}

let items: Item[] = [
    { id: 1, nombre: "Laptop", precio: 999 },
    { id: 2, nombre: "Consultoría", duracion: 60 },
    { id: 3, nombre: "Mouse", precio: 25 }
];

console.log("\n=== UNION TYPES CON ARRAYS DE OBJETOS ===");
items.forEach(item => {
    console.log(procesarItem(item));
});

// 15. UNION TYPES CON FUNCIONES
// ========================================

type Operacion = (a: number, b: number) => number;

function calcular(a: number, b: number, operacion: Operacion | "suma" | "resta"): number {
    if (typeof operacion === 'function') {
        return operacion(a, b);
    } else if (operacion === "suma") {
        return a + b;
    } else {
        return a - b;
    }
}

console.log("\n=== UNION TYPES CON FUNCIONES ===");
console.log("Suma:", calcular(5, 3, "suma"));
console.log("Resta:", calcular(5, 3, "resta"));
console.log("Multiplicación:", calcular(5, 3, (a, b) => a * b));

console.log("\n=== FIN DE EJEMPLOS DE UNION TYPES ===");

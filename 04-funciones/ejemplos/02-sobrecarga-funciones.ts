// Ejemplos de sobrecarga de funciones en TypeScript

// 1. Sobrecarga básica con diferentes tipos
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: boolean): boolean;

function procesar(valor: string | number | boolean): string | number | boolean {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 2;
    } else {
        return !valor;
    }
}

console.log("=== SOBRECARGA BÁSICA ===");
console.log("Procesar string:", procesar("hola"));    // TypeScript sabe que devuelve string
console.log("Procesar number:", procesar(5));         // TypeScript sabe que devuelve number
console.log("Procesar boolean:", procesar(true));     // TypeScript sabe que devuelve boolean

// 2. Sobrecarga con diferentes números de parámetros
function crearPunto(x: number): { x: number; y: number };
function crearPunto(x: number, y: number): { x: number; y: number };

function crearPunto(x: number, y?: number): { x: number; y: number } {
    return { x, y: y ?? 0 };
}

console.log("\n=== SOBRECARGA CON PARÁMETROS ===");
let punto1 = crearPunto(5);      // { x: 5, y: 0 }
let punto2 = crearPunto(5, 10);  // { x: 5, y: 10 }
console.log("Punto 1:", punto1);
console.log("Punto 2:", punto2);

// 3. Sobrecarga con parámetros opcionales
function configurarServidor(host: string): void;
function configurarServidor(host: string, puerto: number): void;
function configurarServidor(host: string, puerto: number, ssl: boolean): void;

function configurarServidor(host: string, puerto?: number, ssl?: boolean): void {
    console.log(`Servidor: ${host}`);
    if (puerto !== undefined) {
        console.log(`Puerto: ${puerto}`);
    }
    if (ssl !== undefined) {
        console.log(`SSL: ${ssl ? 'habilitado' : 'deshabilitado'}`);
    }
}

console.log("\n=== SOBRECARGA CON PARÁMETROS OPCIONALES ===");
configurarServidor("localhost");
configurarServidor("localhost", 3000);
configurarServidor("localhost", 3000, true);

// 4. Sobrecarga con diferentes tipos de retorno
function obtenerValor(clave: string): string | undefined;
function obtenerValor(clave: string, valorPorDefecto: string): string;
function obtenerValor(clave: number): number | undefined;
function obtenerValor(clave: number, valorPorDefecto: number): number;

function obtenerValor(clave: string | number, valorPorDefecto?: string | number): string | number | undefined {
    // Simulación de un almacén de valores
    const almacen: { [key: string]: any } = {
        "nombre": "Juan",
        "edad": 30,
        "activo": true
    };
    
    const valor = almacen[clave.toString()];
    
    if (valor === undefined && valorPorDefecto !== undefined) {
        return valorPorDefecto;
    }
    
    return valor;
}

console.log("\n=== SOBRECARGA CON TIPOS DE RETORNO ===");
console.log("Valor string:", obtenerValor("nombre"));
console.log("Valor string con defecto:", obtenerValor("apellido", "Sin apellido"));
console.log("Valor number:", obtenerValor("edad"));
console.log("Valor number con defecto:", obtenerValor(30, 0));

// 5. Sobrecarga con arrays
function procesarArray(numeros: number[]): number[];
function procesarArray(textos: string[]): string[];
function procesarArray(booleans: boolean[]): boolean[];

function procesarArray(array: number[] | string[] | boolean[]): number[] | string[] | boolean[] {
    if (array.length === 0) {
        return array;
    }
    
    if (typeof array[0] === "number") {
        return (array as number[]).map(n => n * 2);
    } else if (typeof array[0] === "string") {
        return (array as string[]).map(s => s.toUpperCase());
    } else {
        return (array as boolean[]).map(b => !b);
    }
}

console.log("\n=== SOBRECARGA CON ARRAYS ===");
console.log("Array de números:", procesarArray([1, 2, 3, 4, 5]));
console.log("Array de strings:", procesarArray(["hola", "mundo", "typescript"]));
console.log("Array de booleans:", procesarArray([true, false, true]));

// 6. Sobrecarga con objetos
function crearUsuario(datos: { nombre: string; email: string }): { id: number; nombre: string; email: string };
function crearUsuario(nombre: string, email: string): { id: number; nombre: string; email: string };
function crearUsuario(nombre: string, email: string, telefono: string): { id: number; nombre: string; email: string; telefono: string };

function crearUsuario(
    datosOrNombre: { nombre: string; email: string } | string,
    email?: string,
    telefono?: string
): { id: number; nombre: string; email: string; telefono?: string } {
    let nombre: string;
    let emailUsuario: string;
    
    if (typeof datosOrNombre === "string") {
        nombre = datosOrNombre;
        emailUsuario = email!;
    } else {
        nombre = datosOrNombre.nombre;
        emailUsuario = datosOrNombre.email;
    }
    
    const usuario: { id: number; nombre: string; email: string; telefono?: string } = {
        id: Math.floor(Math.random() * 1000),
        nombre,
        email: emailUsuario
    };
    
    if (telefono) {
        usuario.telefono = telefono;
    }
    
    return usuario;
}

console.log("\n=== SOBRECARGA CON OBJETOS ===");
let usuario1 = crearUsuario({ nombre: "Juan", email: "juan@email.com" });
let usuario2 = crearUsuario("María", "maria@email.com");
let usuario3 = crearUsuario("Carlos", "carlos@email.com", "+34 123 456 789");
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);
console.log("Usuario 3:", usuario3);

// 7. Sobrecarga con funciones de callback
function ejecutarOperacion(operacion: "suma", a: number, b: number): number;
function ejecutarOperacion(operacion: "multiplicacion", a: number, b: number): number;
function ejecutarOperacion(operacion: "personalizada", callback: (a: number, b: number) => number, a: number, b: number): number;

function ejecutarOperacion(
    operacion: "suma" | "multiplicacion" | "personalizada",
    aOrCallback: number | ((a: number, b: number) => number),
    bOrA?: number,
    c?: number
): number {
    if (operacion === "suma") {
        return (aOrCallback as number) + (bOrA as number);
    } else if (operacion === "multiplicacion") {
        return (aOrCallback as number) * (bOrA as number);
    } else {
        return (aOrCallback as (a: number, b: number) => number)(bOrA as number, c as number);
    }
}

console.log("\n=== SOBRECARGA CON CALLBACKS ===");
console.log("Suma:", ejecutarOperacion("suma", 5, 3));
console.log("Multiplicación:", ejecutarOperacion("multiplicacion", 4, 6));
console.log("Personalizada:", ejecutarOperacion("personalizada", (a, b) => a - b, 10, 3));

// 8. Sobrecarga con genéricos
function crearContenedor<T>(valor: T): { contenido: T; tipo: string };
function crearContenedor<T>(valor: T, etiqueta: string): { contenido: T; tipo: string; etiqueta: string };

function crearContenedor<T>(valor: T, etiqueta?: string): { contenido: T; tipo: string; etiqueta?: string } {
    const contenedor: { contenido: T; tipo: string; etiqueta?: string } = {
        contenido: valor,
        tipo: typeof valor
    };
    
    if (etiqueta) {
        contenedor.etiqueta = etiqueta;
    }
    
    return contenedor;
}

console.log("\n=== SOBRECARGA CON GENÉRICOS ===");
let contenedor1 = crearContenedor("hola");
let contenedor2 = crearContenedor(42, "número favorito");
let contenedor3 = crearContenedor(true, "estado");
console.log("Contenedor 1:", contenedor1);
console.log("Contenedor 2:", contenedor2);
console.log("Contenedor 3:", contenedor3);

// 9. Sobrecarga con parámetros rest
function combinar(...numeros: number[]): number;
function combinar(...textos: string[]): string;
function combinar(...booleans: boolean[]): boolean;

function combinar(...valores: number[] | string[] | boolean[]): number | string | boolean {
    if (valores.length === 0) {
        throw new Error("No se pueden combinar valores vacíos");
    }
    
    if (typeof valores[0] === "number") {
        return (valores as number[]).reduce((total, num) => total + num, 0);
    } else if (typeof valores[0] === "string") {
        return (valores as string[]).join(" ");
    } else {
        return (valores as boolean[]).every(b => b);
    }
}

console.log("\n=== SOBRECARGA CON PARÁMETROS REST ===");
console.log("Combinar números:", combinar(1, 2, 3, 4, 5));
console.log("Combinar textos:", combinar("Hola", "mundo", "TypeScript"));
console.log("Combinar booleans:", combinar(true, true, true));
console.log("Combinar booleans:", combinar(true, false, true));

// 10. Sobrecarga con tipos de unión
function formatear(valor: string, formato: "upper" | "lower"): string;
function formatear(valor: number, formato: "currency" | "percentage"): string;
function formatear(valor: Date, formato: "short" | "long"): string;

function formatear(valor: string | number | Date, formato: string): string {
    if (typeof valor === "string") {
        if (formato === "upper") {
            return valor.toUpperCase();
        } else if (formato === "lower") {
            return valor.toLowerCase();
        }
    } else if (typeof valor === "number") {
        if (formato === "currency") {
            return `$${valor.toFixed(2)}`;
        } else if (formato === "percentage") {
            return `${(valor * 100).toFixed(1)}%`;
        }
    } else if (valor instanceof Date) {
        if (formato === "short") {
            return valor.toLocaleDateString();
        } else if (formato === "long") {
            return valor.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
    }
    
    return valor.toString();
}

console.log("\n=== SOBRECARGA CON TIPOS DE UNIÓN ===");
console.log("String upper:", formatear("hola mundo", "upper"));
console.log("String lower:", formatear("HOLA MUNDO", "lower"));
console.log("Number currency:", formatear(99.99, "currency"));
console.log("Number percentage:", formatear(0.85, "percentage"));
console.log("Date short:", formatear(new Date(), "short"));
console.log("Date long:", formatear(new Date(), "long"));

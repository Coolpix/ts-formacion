// Solución del Ejercicio 1: Funciones Básicas con Tipos

// 1. Funciones básicas con tipos explícitos
function calcularAreaRectangulo(ancho: number, alto: number): number {
    return ancho * alto;
}

function esPar(numero: number): boolean {
    return numero % 2 === 0;
}

function celsiusAFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function generarSaludo(nombre: string, hora?: number): string {
    let saludo = "Hola";
    
    if (hora !== undefined) {
        if (hora >= 6 && hora < 12) {
            saludo = "Buenos días";
        } else if (hora >= 12 && hora < 18) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }
    }
    
    return `${saludo}, ${nombre}!`;
}

function procesarNumeros(numeros: number[]): { suma: number; promedio: number; maximo: number; minimo: number } {
    if (numeros.length === 0) {
        return { suma: 0, promedio: 0, maximo: 0, minimo: 0 };
    }
    
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / numeros.length;
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    
    return { suma, promedio, maximo, minimo };
}

// 2. Funciones de flecha
const duplicar = (numero: number): number => numero * 2;

const estaVacio = (texto: string): boolean => texto.length === 0;

const obtenerLongitud = <T>(array: T[]): number => array.length;

const crearObjetoCalculado = (base: number): { base: number; cuadrado: number; cubo: number; raiz: number } => ({
    base,
    cuadrado: base * base,
    cubo: base * base * base,
    raiz: Math.sqrt(base)
});

// 3. Funciones con parámetros opcionales
function crearUsuario(nombre: string, email: string, telefono?: string, direccion?: string): {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    direccion?: string;
    fechaCreacion: Date;
} {
    return {
        id: Math.floor(Math.random() * 1000),
        nombre,
        email,
        telefono,
        direccion,
        fechaCreacion: new Date()
    };
}

function configurarConexionBD(
    host: string = "localhost",
    puerto: number = 5432,
    usuario: string = "admin",
    contrasena: string = "password",
    baseDatos: string = "mi_base_datos"
): {
    host: string;
    puerto: number;
    usuario: string;
    contrasena: string;
    baseDatos: string;
    url: string;
} {
    const url = `postgresql://${usuario}:${contrasena}@${host}:${puerto}/${baseDatos}`;
    
    return {
        host,
        puerto,
        usuario,
        contrasena,
        baseDatos,
        url
    };
}

function crearMensaje(
    contenido: string,
    formato: "texto" | "html" | "markdown" = "texto",
    prioridad: "baja" | "media" | "alta" = "media"
): {
    contenido: string;
    formato: string;
    prioridad: string;
    timestamp: Date;
    id: string;
} {
    return {
        contenido,
        formato,
        prioridad,
        timestamp: new Date(),
        id: `msg_${Math.random().toString(36).substr(2, 9)}`
    };
}

// 4. Funciones adicionales para demostrar más casos
function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function formatearMoneda(cantidad: number, moneda: string = "EUR"): string {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: moneda
    }).format(cantidad);
}

function generarPassword(longitud: number = 8): string {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    
    for (let i = 0; i < longitud; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return password;
}

function calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

// 5. Funciones con parámetros de objeto
function crearProducto(datos: {
    nombre: string;
    precio: number;
    categoria?: string;
    descripcion?: string;
    stock?: number;
}): {
    id: string;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
    stock: number;
    disponible: boolean;
    fechaCreacion: Date;
} {
    return {
        id: `prod_${Math.random().toString(36).substr(2, 9)}`,
        nombre: datos.nombre,
        precio: datos.precio,
        categoria: datos.categoria || "Sin categoría",
        descripcion: datos.descripcion || "Sin descripción",
        stock: datos.stock || 0,
        disponible: (datos.stock || 0) > 0,
        fechaCreacion: new Date()
    };
}

// 6. Funciones con parámetros de array
function filtrarNumerosPares(numeros: number[]): number[] {
    return numeros.filter(numero => numero % 2 === 0);
}

function mapearStrings(nombres: string[]): string[] {
    return nombres.map(nombre => nombre.toUpperCase());
}

function buscarElemento<T>(array: T[], elemento: T): number {
    return array.indexOf(elemento);
}

function ordenarArray<T>(array: T[], comparador?: (a: T, b: T) => number): T[] {
    return [...array].sort(comparador);
}

// Ejemplos de uso
console.log("=== FUNCIONES BÁSICAS CON TIPOS ===\n");

// Probar funciones básicas
console.log("Área del rectángulo (5x3):", calcularAreaRectangulo(5, 3));
console.log("¿Es 8 par?:", esPar(8));
console.log("¿Es 7 par?:", esPar(7));
console.log("25°C a Fahrenheit:", celsiusAFahrenheit(25));
console.log("Saludo sin hora:", generarSaludo("Juan"));
console.log("Saludo con hora:", generarSaludo("María", 14));

// Probar procesamiento de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const estadisticas = procesarNumeros(numeros);
console.log("Estadísticas de números:", estadisticas);

// Probar funciones de flecha
console.log("\n=== FUNCIONES DE FLECHA ===");
console.log("Duplicar 7:", duplicar(7));
console.log("¿Está vacío 'hola'?:", estaVacio("hola"));
console.log("¿Está vacío '?:", estaVacio(""));
console.log("Longitud del array:", obtenerLongitud(numeros));
console.log("Objeto calculado para 4:", crearObjetoCalculado(4));

// Probar funciones con parámetros opcionales
console.log("\n=== PARÁMETROS OPCIONALES ===");
const usuario1 = crearUsuario("Ana", "ana@email.com");
const usuario2 = crearUsuario("Carlos", "carlos@email.com", "+34 123 456 789", "Calle Mayor 123");
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

const conexion1 = configurarConexionBD();
const conexion2 = configurarConexionBD("192.168.1.1", 3306, "root", "mipassword", "mi_db");
console.log("Conexión 1:", conexion1);
console.log("Conexión 2:", conexion2);

const mensaje1 = crearMensaje("Hola mundo");
const mensaje2 = crearMensaje("Contenido HTML", "html", "alta");
console.log("Mensaje 1:", mensaje1);
console.log("Mensaje 2:", mensaje2);

// Probar funciones adicionales
console.log("\n=== FUNCIONES ADICIONALES ===");
console.log("¿Email válido?:", validarEmail("usuario@email.com"));
console.log("¿Email inválido?:", validarEmail("email-invalido"));
console.log("Moneda formateada:", formatearMoneda(99.99, "USD"));
console.log("Password generada:", generarPassword(12));

const fechaNacimiento = new Date("1990-05-15");
console.log("Edad calculada:", calcularEdad(fechaNacimiento));

// Probar funciones con parámetros de objeto
console.log("\n=== PARÁMETROS DE OBJETO ===");
const producto1 = crearProducto({ nombre: "Laptop", precio: 999.99 });
const producto2 = crearProducto({
    nombre: "Mouse",
    precio: 25.99,
    categoria: "Accesorios",
    descripcion: "Mouse inalámbrico",
    stock: 50
});
console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);

// Probar funciones con parámetros de array
console.log("\n=== PARÁMETROS DE ARRAY ===");
console.log("Números pares:", filtrarNumerosPares(numeros));
console.log("Nombres en mayúsculas:", mapearStrings(["juan", "maría", "carlos"]));
console.log("Índice de 5:", buscarElemento(numeros, 5));
console.log("Array ordenado:", ordenarArray([3, 1, 4, 1, 5, 9, 2, 6]));

// Probar casos edge
console.log("\n=== CASOS EDGE ===");
console.log("Array vacío:", procesarNumeros([]));
console.log("Array con un elemento:", procesarNumeros([42]));
console.log("Array con elementos negativos:", procesarNumeros([-5, -2, 0, 3, 7]));

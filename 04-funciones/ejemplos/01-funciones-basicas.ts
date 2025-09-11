// Ejemplos de funciones básicas con tipos en TypeScript

// 1. Funciones con tipos explícitos
function sumar(a: number, b: number): number {
    return a + b;
}

function multiplicar(a: number, b: number) {
    return a * b; // TypeScript infiere que devuelve number
}

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

console.log("=== FUNCIONES BÁSICAS ===");
console.log("Suma:", sumar(5, 3));
console.log("Multiplicación:", multiplicar(4, 6));
mostrarMensaje("Hola desde TypeScript");

// 2. Funciones con múltiples tipos de retorno
function procesarValor(valor: string | number): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}

console.log("\n=== PROCESAMIENTO DE VALORES ===");
console.log("Procesar string:", procesarValor("hola mundo"));
console.log("Procesar number:", procesarValor(42));

// 3. Funciones de flecha (Arrow Functions)
const sumarFlecha = (a: number, b: number): number => a + b;

const procesarArray = (numeros: number[]): number[] => {
    return numeros.map(n => n * 2);
};

const obtenerFecha = (): Date => new Date();

const duplicar = (valor: number) => valor * 2; // Paréntesis opcionales para un parámetro

console.log("\n=== FUNCIONES DE FLECHA ===");
console.log("Suma con flecha:", sumarFlecha(10, 5));
console.log("Array procesado:", procesarArray([1, 2, 3, 4, 5]));
console.log("Fecha actual:", obtenerFecha());
console.log("Duplicar:", duplicar(7));

// 4. Parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}!`;
    }
    return `Hola, ${nombre}!`;
}

function crearUsuario(nombre: string, email: string, telefono?: string, direccion?: string): void {
    console.log(`Usuario: ${nombre}, Email: ${email}`);
    if (telefono) console.log(`Teléfono: ${telefono}`);
    if (direccion) console.log(`Dirección: ${direccion}`);
}

console.log("\n=== PARÁMETROS OPCIONALES ===");
console.log(saludar("Juan"));
console.log(saludar("Juan", "Pérez"));
crearUsuario("María", "maria@email.com");
crearUsuario("Carlos", "carlos@email.com", "+34 123 456 789", "Calle Mayor 123");

// 5. Parámetros con valores por defecto
function configurarServidor(host: string = "localhost", puerto: number = 3000): void {
    console.log(`Servidor configurado: ${host}:${puerto}`);
}

function crearPerfil(nombre: string, edad: number = 18, activo: boolean = true): void {
    console.log(`Perfil: ${nombre}, ${edad} años, ${activo ? 'activo' : 'inactivo'}`);
}

console.log("\n=== VALORES POR DEFECTO ===");
configurarServidor();
configurarServidor("192.168.1.1");
configurarServidor("192.168.1.1", 8080);
crearPerfil("Ana");
crearPerfil("Pedro", 25);
crearPerfil("Luis", 30, false);

// 6. Parámetros rest
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, numero) => total + numero, 0);
}

function crearMensaje(prefijo: string, ...palabras: string[]): string {
    return prefijo + " " + palabras.join(" ");
}

function procesarDatos(tipo: string, ...datos: (string | number)[]): void {
    console.log(`Procesando ${tipo}:`, datos);
}

console.log("\n=== PARÁMETROS REST ===");
console.log("Sumar todos:", sumarTodos(1, 2, 3, 4, 5));
console.log("Crear mensaje:", crearMensaje("Hola", "mundo", "de", "TypeScript"));
procesarDatos("números", 1, 2, 3, 4, 5);
procesarDatos("textos", "a", "b", "c");

// 7. Funciones con tipos de retorno complejos
function crearCoordenada(x: number, y: number): { x: number; y: number } {
    return { x, y };
}

function crearUsuarioCompleto(nombre: string, edad: number): {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
} {
    return {
        id: Math.floor(Math.random() * 1000),
        nombre,
        edad,
        activo: true
    };
}

console.log("\n=== TIPOS DE RETORNO COMPLEJOS ===");
console.log("Coordenada:", crearCoordenada(10, 20));
console.log("Usuario completo:", crearUsuarioCompleto("Elena", 28));

// 8. Funciones con validación de parámetros
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("División por cero no permitida");
    }
    return a / b;
}

function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log("\n=== VALIDACIÓN DE PARÁMETROS ===");
console.log("División:", dividir(10, 2));
console.log("Email válido:", validarEmail("usuario@email.com"));
console.log("Email inválido:", validarEmail("email-invalido"));

// 9. Funciones con parámetros de objeto
function crearProducto(datos: {
    nombre: string;
    precio: number;
    categoria?: string;
}): void {
    console.log(`Producto: ${datos.nombre}, Precio: $${datos.precio}`);
    if (datos.categoria) {
        console.log(`Categoría: ${datos.categoria}`);
    }
}

console.log("\n=== PARÁMETROS DE OBJETO ===");
crearProducto({ nombre: "Laptop", precio: 999.99 });
crearProducto({ nombre: "Mouse", precio: 25.99, categoria: "Accesorios" });

// 10. Funciones con parámetros de array
function procesarLista(nombres: string[]): string[] {
    return nombres
        .filter(nombre => nombre.length > 3)
        .map(nombre => nombre.toUpperCase())
        .sort();
}

function calcularEstadisticas(numeros: number[]): {
    suma: number;
    promedio: number;
    maximo: number;
    minimo: number;
} {
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / numeros.length;
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    
    return { suma, promedio, maximo, minimo };
}

console.log("\n=== PARÁMETROS DE ARRAY ===");
console.log("Lista procesada:", procesarLista(["Ana", "Bob", "Carlos", "Diana", "Eve"]));
console.log("Estadísticas:", calcularEstadisticas([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 11. Funciones con parámetros de función
function ejecutarConLogging<T>(funcion: () => T, mensaje: string): T {
    console.log(`Iniciando: ${mensaje}`);
    const resultado = funcion();
    console.log(`Completado: ${mensaje}`);
    return resultado;
}

function crearMultiplicador(factor: number): (valor: number) => number {
    return (valor: number) => valor * factor;
}

console.log("\n=== PARÁMETROS DE FUNCIÓN ===");
let resultado = ejecutarConLogging(() => {
    return 2 + 2;
}, "Suma de números");

let duplicarFuncion = crearMultiplicador(2);
let triplicar = crearMultiplicador(3);
console.log("Duplicar 5:", duplicarFuncion(5));
console.log("Triplicar 5:", triplicar(5));

// 12. Funciones con parámetros de unión
function formatearValor(valor: string | number | boolean): string {
    if (typeof valor === "string") {
        return `"${valor}"`;
    } else if (typeof valor === "number") {
        return valor.toFixed(2);
    } else {
        return valor ? "verdadero" : "falso";
    }
}

console.log("\n=== PARÁMETROS DE UNIÓN ===");
console.log("String:", formatearValor("hola"));
console.log("Number:", formatearValor(3.14159));
console.log("Boolean:", formatearValor(true));
console.log("Boolean:", formatearValor(false));

// Ejemplos de funciones avanzadas en TypeScript

// 1. Funciones con parámetros de función (callbacks)
function ejecutarOperacion(
    operacion: (a: number, b: number) => number,
    a: number,
    b: number
): number {
    console.log(`Ejecutando operación con ${a} y ${b}`);
    return operacion(a, b);
}

let suma = (x: number, y: number) => x + y;
let multiplicacion = (x: number, y: number) => x * y;

console.log("=== FUNCIONES CON CALLBACKS ===");
console.log("Suma:", ejecutarOperacion(suma, 5, 3));
console.log("Multiplicación:", ejecutarOperacion(multiplicacion, 4, 6));

// 2. Funciones que devuelven funciones
function crearMultiplicador(factor: number): (valor: number) => number {
    return function(valor: number): number {
        return valor * factor;
    };
}

let duplicar = crearMultiplicador(2);
let triplicar = crearMultiplicador(3);

console.log("\n=== FUNCIONES QUE DEVUELVEN FUNCIONES ===");
console.log("Duplicar 5:", duplicar(5));
console.log("Triplicar 5:", triplicar(5));

// 3. Funciones con parámetros de objeto complejos
interface ConfiguracionServidor {
    host: string;
    puerto: number;
    ssl?: boolean;
    timeout?: number;
    headers?: { [key: string]: string };
}

function configurarServidor(config: ConfiguracionServidor): void {
    console.log(`Configurando servidor en ${config.host}:${config.puerto}`);
    if (config.ssl) {
        console.log("SSL habilitado");
    }
    if (config.timeout) {
        console.log(`Timeout: ${config.timeout}ms`);
    }
    if (config.headers) {
        console.log("Headers personalizados:", config.headers);
    }
}

console.log("\n=== PARÁMETROS DE OBJETO COMPLEJOS ===");
configurarServidor({
    host: "localhost",
    puerto: 3000,
    ssl: true,
    timeout: 5000,
    headers: { "Content-Type": "application/json" }
});

// 4. Funciones con validación de parámetros
function validarYProcesar(
    valor: string | number,
    tipo: "string" | "number"
): string {
    if (tipo === "string" && typeof valor !== "string") {
        throw new Error("Se esperaba un string");
    }
    if (tipo === "number" && typeof valor !== "number") {
        throw new Error("Se esperaba un number");
    }
    
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else {
        return valor.toString();
    }
}

console.log("\n=== VALIDACIÓN DE PARÁMETROS ===");
console.log("String procesado:", validarYProcesar("hola mundo", "string"));
console.log("Number procesado:", validarYProcesar(42, "number"));

// 5. Funciones con parámetros de array y procesamiento
function procesarDatos(
    datos: (string | number)[],
    operacion: "sumar" | "concatenar" | "contar"
): string | number {
    switch (operacion) {
        case "sumar":
            const numeros = datos.filter(d => typeof d === "number") as number[];
            return numeros.reduce((total, num) => total + num, 0);
        case "concatenar":
            const strings = datos.filter(d => typeof d === "string") as string[];
            return strings.join(" ");
        case "contar":
            return datos.length;
        default:
            throw new Error("Operación no válida");
    }
}

console.log("\n=== PROCESAMIENTO DE ARRAYS ===");
console.log("Sumar:", procesarDatos([1, 2, 3, 4, 5], "sumar"));
console.log("Concatenar:", procesarDatos(["Hola", "mundo", "TypeScript"], "concatenar"));
console.log("Contar:", procesarDatos([1, "a", 2, "b"], "contar"));

// 6. Funciones con parámetros de unión y type guards
function procesarValor(valor: string | number | boolean): string {
    if (typeof valor === "string") {
        return `Texto: ${valor.toUpperCase()}`;
    } else if (typeof valor === "number") {
        return `Número: ${valor * 2}`;
    } else {
        return `Booleano: ${valor ? "verdadero" : "falso"}`;
    }
}

console.log("\n=== PARÁMETROS DE UNIÓN ===");
console.log(procesarValor("hola"));
console.log(procesarValor(5));
console.log(procesarValor(true));

// 7. Funciones con parámetros de función y tipos específicos
type OperacionMatematica = (a: number, b: number) => number;
type TransformadorTexto = (texto: string) => string;

function ejecutarMatematica(
    operacion: OperacionMatematica,
    a: number,
    b: number
): number {
    return operacion(a, b);
}

function transformarTexto(
    transformador: TransformadorTexto,
    texto: string
): string {
    return transformador(texto);
}

console.log("\n=== TIPOS DE FUNCIÓN ESPECÍFICOS ===");
console.log("Resta:", ejecutarMatematica((a, b) => a - b, 10, 3));
console.log("División:", ejecutarMatematica((a, b) => a / b, 15, 3));
console.log("Texto en mayúsculas:", transformarTexto(s => s.toUpperCase(), "typescript"));
console.log("Texto invertido:", transformarTexto(s => s.split("").reverse().join(""), "hola"));

// 8. Funciones con parámetros de objeto y destructuring
function crearUsuario({
    nombre,
    email,
    edad = 18,
    activo = true
}: {
    nombre: string;
    email: string;
    edad?: number;
    activo?: boolean;
}): { id: number; nombre: string; email: string; edad: number; activo: boolean } {
    return {
        id: Math.floor(Math.random() * 1000),
        nombre,
        email,
        edad,
        activo
    };
}

console.log("\n=== DESTRUCTURING EN PARÁMETROS ===");
let usuario1 = crearUsuario({ nombre: "Juan", email: "juan@email.com" });
let usuario2 = crearUsuario({ nombre: "María", email: "maria@email.com", edad: 25, activo: false });
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

// 9. Funciones con parámetros rest y tipos específicos
function combinarDatos(
    tipo: "numeros" | "textos",
    ...datos: (string | number)[]
): string | number {
    if (tipo === "numeros") {
        const numeros = datos.filter(d => typeof d === "number") as number[];
        return numeros.reduce((total, num) => total + num, 0);
    } else {
        const textos = datos.filter(d => typeof d === "string") as string[];
        return textos.join(" ");
    }
}

console.log("\n=== PARÁMETROS REST CON TIPOS ===");
console.log("Combinar números:", combinarDatos("numeros", 1, 2, 3, 4, 5));
console.log("Combinar textos:", combinarDatos("textos", "Hola", "mundo", "TypeScript"));

// 10. Funciones con parámetros de array y métodos
function procesarLista<T>(
    lista: T[],
    operacion: "primero" | "ultimo" | "longitud" | "invertir"
): T | T[] | number {
    switch (operacion) {
        case "primero":
            return lista[0];
        case "ultimo":
            return lista[lista.length - 1];
        case "longitud":
            return lista.length;
        case "invertir":
            return [...lista].reverse();
        default:
            throw new Error("Operación no válida");
    }
}

console.log("\n=== PROCESAMIENTO DE LISTAS ===");
let numeros = [1, 2, 3, 4, 5];
let textos = ["a", "b", "c", "d"];

console.log("Primer número:", procesarLista(numeros, "primero"));
console.log("Último texto:", procesarLista(textos, "ultimo"));
console.log("Longitud:", procesarLista(numeros, "longitud"));
console.log("Invertir:", procesarLista(textos, "invertir"));

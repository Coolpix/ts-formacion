// Solución del Ejercicio 1: Configuración Inicial

// Variables con tipos explícitos
let nombre: string = "Mi Primer Proyecto TypeScript";
let version: number = 1.0;
let esActivo: boolean = true;

// Función que recibe dos números y devuelve su suma
function sumar(a: number, b: number): number {
    return a + b;
}

// Objeto con propiedades tipadas
let configuracion: {
    nombre: string;
    puerto: number;
    ssl: boolean;
    version: string;
} = {
    nombre: "Mi Aplicación",
    puerto: 3000,
    ssl: false,
    version: "1.0.0"
};

// Ejemplo de uso
console.log("Nombre:", nombre);
console.log("Versión:", version);
console.log("Activo:", esActivo);
console.log("Suma de 5 + 3:", sumar(5, 3));
console.log("Configuración:", configuracion);

// Ejemplo adicional: Array tipado
let colores: string[] = ["rojo", "verde", "azul"];
console.log("Colores:", colores);

// Ejemplo adicional: Función con parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}!`;
    }
    return `Hola, ${nombre}!`;
}

console.log(saludar("Juan"));
console.log(saludar("María", "García"));

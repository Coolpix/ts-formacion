// ========================================
// EJEMPLOS - TIPOS PRIMITIVOS EN TYPESCRIPT
// ========================================

// 1. TIPO STRING
// ========================================

// Diferentes formas de declarar strings
let nombre: string = "Juan";
let apellido: string = 'Pérez';
let mensaje: string = `Hola, soy ${nombre} ${apellido}`;

// Métodos de string
let texto2: string = "  Hola Mundo  ";
let textoLimpio: string = texto2.trim();
let textoMayusculas: string = texto2.toUpperCase();
let longitud2: number = texto2.length;

console.log("=== TIPO STRING ===");
console.log("Nombre:", nombre);
console.log("Mensaje:", mensaje);
console.log("Texto original:", `"${texto2}"`);
console.log("Texto limpio:", `"${textoLimpio}"`);
console.log("Texto en mayúsculas:", textoMayusculas);
console.log("Longitud:", longitud2);

// 2. TIPO NUMBER
// ========================================

// Diferentes tipos de números
let edad: number = 25;
let precio: number = 19.99;
let temperatura: number = -5;
let infinito: number = Infinity;
let noEsNumero: number = NaN;
let numeroGrande: number = 1e6; // 1,000,000

// Operaciones matemáticas
let suma: number = edad + 5;
let multiplicacion: number = precio * 2;
let division: number = 10 / 3;

console.log("\n=== TIPO NUMBER ===");
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Temperatura:", temperatura);
console.log("Infinito:", infinito);
console.log("NaN:", noEsNumero);
console.log("Número grande:", numeroGrande);
console.log("Suma:", suma);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

// 3. TIPO BOOLEAN
// ========================================

// Valores booleanos
let esActivo: boolean = true;
let tienePermisos: boolean = false;
let esMayorDeEdad: boolean = edad >= 18;

// Operaciones lógicas
let resultadoAnd: boolean = esActivo && tienePermisos;
let resultadoOr: boolean = esActivo || tienePermisos;
let resultadoNot: boolean = !esActivo;

console.log("\n=== TIPO BOOLEAN ===");
console.log("Es activo:", esActivo);
console.log("Tiene permisos:", tienePermisos);
console.log("Es mayor de edad:", esMayorDeEdad);
console.log("AND:", resultadoAnd);
console.log("OR:", resultadoOr);
console.log("NOT:", resultadoNot);

// 4. NULL Y UNDEFINED
// ========================================

// Valores null y undefined
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

// Variable sin inicializar (será undefined)
let variableSinInicializar: string;

console.log("\n=== NULL Y UNDEFINED ===");
console.log("Valor nulo:", valorNulo);
console.log("Valor indefinido:", valorIndefinido);
console.log("Variable sin inicializar:", variableSinInicializar);

// 5. TIPO ANY (EVITAR SU USO)
// ========================================

let variableAny: any = "Puede ser cualquier cosa";
variableAny = 42;
variableAny = true;
variableAny = { objeto: "cualquiera" };

console.log("\n=== TIPO ANY ===");
console.log("Variable any:", variableAny);

// 6. TIPO VOID
// ========================================

// Función que no retorna nada
function mostrarMensaje(): void {
    console.log("Esta función no retorna nada");
}

// Función que retorna void implícitamente
function procesarDatos() {
    // Lógica de procesamiento
    console.log("Procesando datos...");
}

console.log("\n=== TIPO VOID ===");
mostrarMensaje();
procesarDatos();

// 7. TIPO NEVER
// ========================================

// Función que siempre lanza un error
function errorFatal(): never {
    throw new Error("Error crítico del sistema");
}

// Función que nunca termina
function bucleInfinito(): never {
    while (true) {
        // Este bucle nunca termina
        console.log("Ejecutando...");
        //break; // Solo para el ejemplo, en realidad no debería tener break
    }
}

console.log("\n=== TIPO NEVER ===");
// errorFatal(); // Descomenta para ver el error
console.log("Función never definida");

// 8. INFERENCIA DE TIPOS
// ========================================

// TypeScript infiere automáticamente los tipos
let ciudad = "Madrid";        // infiere: string
let poblacion = 3200000;      // infiere: number
let esCapital = true;         // infiere: boolean
let coordenadas = [40.4168, -3.7038]; // infiere: number[]

console.log("\n=== INFERENCIA DE TIPOS ===");
console.log("Ciudad:", ciudad, "Tipo inferido: string");
console.log("Población:", poblacion, "Tipo inferido: number");
console.log("Es capital:", esCapital, "Tipo inferido: boolean");
console.log("Coordenadas:", coordenadas, "Tipo inferido: number[]");

// 9. CONVERSIONES DE TIPO
// ========================================

// Conversión implícita
let numero: number = 5;
let texto: string = "El número es " + numero;

// Conversión explícita (type assertion)
let valor: any = "123";
let longitud: number = (valor as string).length;

console.log("\n=== CONVERSIONES DE TIPO ===");
console.log("Conversión implícita:", texto);
console.log("Longitud con type assertion:", longitud);

// 10. VALIDACIÓN DE TIPOS
// ========================================

function validarEdad(edad: number): boolean {
    return typeof edad === 'number' && edad > 0 && edad < 150;
}

function validarNombre(nombre: string): boolean {
    return typeof nombre === 'string' && nombre.length > 0;
}

function validarActivo(activo: boolean): boolean {
    return typeof activo === 'boolean';
}

console.log("\n=== VALIDACIÓN DE TIPOS ===");
console.log("¿Edad 25 es válida?", validarEdad(25));
console.log("¿Edad -5 es válida?", validarEdad(-5));
console.log("¿Nombre 'Juan' es válido?", validarNombre("Juan"));
console.log("¿Nombre vacío es válido?", validarNombre(""));
console.log("¿Boolean true es válido?", validarActivo(true));

// 11. EJEMPLOS PRÁCTICOS
// ========================================

// Formateo de texto
function formatearNombre(nombre: string, apellido: string): string {
    return `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
}

// Cálculo de porcentaje
function calcularPorcentaje(valor: number, total: number): number {
    return (valor / total) * 100;
}

// Control de estado
let usuarioActivo: boolean = false;

function activarUsuario(): void {
    usuarioActivo = true;
    console.log("Usuario activado");
}

function desactivarUsuario(): void {
    usuarioActivo = false;
    console.log("Usuario desactivado");
}

console.log("\n=== EJEMPLOS PRÁCTICOS ===");
console.log("Nombre formateado:", formatearNombre("maría", "garcía"));
console.log("Porcentaje:", calcularPorcentaje(25, 100), "%");
console.log("Usuario activo:", usuarioActivo);
activarUsuario();
console.log("Usuario activo después:", usuarioActivo);

// 12. COMPARACIONES Y OPERADORES
// ========================================

let a: number = 10;
let b: number = 5;
let c: string = "10";

console.log("\n=== COMPARACIONES ===");
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == c:", a == c); // Comparación con conversión
console.log("a === c:", a === c); // Comparación estricta
console.log("a != b:", a != b);
console.log("a !== c:", a !== c);

// 13. MÉTODOS DE STRING
// ========================================

let textoEjemplo: string = "Hola TypeScript";

console.log("\n=== MÉTODOS DE STRING ===");
console.log("Texto original:", textoEjemplo);
console.log("Longitud:", textoEjemplo.length);
console.log("Mayúsculas:", textoEjemplo.toUpperCase());
console.log("Minúsculas:", textoEjemplo.toLowerCase());
console.log("Substring (0,4):", textoEjemplo.substring(0, 4));
console.log("Incluye 'Type'?", textoEjemplo.includes("Type"));
console.log("Reemplazar:", textoEjemplo.replace("TypeScript", "JavaScript"));

// 14. MÉTODOS DE NUMBER
// ========================================

let numeroEjemplo: number = 3.14159;

console.log("\n=== MÉTODOS DE NUMBER ===");
console.log("Número original:", numeroEjemplo);
console.log("Redondeado:", Math.round(numeroEjemplo));
console.log("Redondeado a 2 decimales:", Math.round(numeroEjemplo * 100) / 100);
console.log("Máximo:", Math.max(10, 20, 30));
console.log("Mínimo:", Math.min(10, 20, 30));
console.log("Aleatorio:", Math.random());
console.log("¿Es entero?", Number.isInteger(numeroEjemplo));

// 15. CONVERSIONES EXPLÍCITAS
// ========================================

let stringNumero: string = "123";
let numeroString: number = 456;

console.log("\n=== CONVERSIONES EXPLÍCITAS ===");
console.log("String a número:", parseInt(stringNumero));
console.log("String a número (float):", parseFloat("123.45"));
console.log("Número a string:", numeroString.toString());
console.log("Número a string (binario):", numeroString.toString(2));
console.log("String a boolean:", Boolean("texto"));
console.log("Número a boolean:", Boolean(0));

console.log("\n=== FIN DE EJEMPLOS DE TIPOS PRIMITIVOS ===");

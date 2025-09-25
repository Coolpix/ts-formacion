// ========================================
// EJEMPLOS - TIPO ANY EN TYPESCRIPT
// ========================================

// 1. USO BÁSICO DEL TIPO ANY
// ========================================

// Variable que puede contener cualquier tipo
let variableAny: any = "puede ser cualquier cosa";
console.log("Valor inicial:", variableAny, "Tipo:", typeof variableAny);

// Cambiar a diferentes tipos
variableAny = 42;
console.log("Después de asignar número:", variableAny, "Tipo:", typeof variableAny);

variableAny = true;
console.log("Después de asignar boolean:", variableAny, "Tipo:", typeof variableAny);

variableAny = { nombre: "Juan", edad: 25 };
console.log("Después de asignar objeto:", variableAny, "Tipo:", typeof variableAny);

variableAny = [1, 2, 3, 4, 5];
console.log("Después de asignar array:", variableAny, "Tipo:", typeof variableAny);

// 2. ACCESO A PROPIEDADES SIN VERIFICACIÓN
// ========================================

let objetoAny: any = { 
    nombre: "María", 
    edad: 30,
    activo: true 
};

console.log("\n=== ACCESO A PROPIEDADES ===");
console.log("Nombre:", objetoAny.nombre);        // ✅ Funciona
console.log("Edad:", objetoAny.edad);            // ✅ Funciona
console.log("Activo:", objetoAny.activo);        // ✅ Funciona
console.log("Propiedad inexistente:", objetoAny.telefono); // ✅ No da error (undefined)

// Acceso a propiedades que no existen
console.log("Ciudad:", objetoAny.ciudad);        // undefined
console.log("Salario:", objetoAny.salario);      // undefined

// 3. LLAMADAS A MÉTODOS SIN VERIFICACIÓN
// ========================================

let valorAny: any = "Hola Mundo";
console.log("\n=== LLAMADAS A MÉTODOS ===");

// Métodos que existen en string
console.log("toUpperCase():", valorAny.toUpperCase());
console.log("length:", valorAny.length);
console.log("charAt(0):", valorAny.charAt(0));

// Cambiar el tipo
valorAny = [1, 2, 3, 4, 5];

// Métodos que existen en array
console.log("push(6):", valorAny.push(6));
console.log("Array después de push:", valorAny);
console.log("length:", valorAny.length);
console.log("join('-'):", valorAny.join('-'));

// 4. PROBLEMAS DEL TIPO ANY
// ========================================

console.log("\n=== PROBLEMAS DEL TIPO ANY ===");

let problemaAny: any = "texto";
let longitud: number = problemaAny.length; // ✅ No da error en compilación
console.log("Longitud inicial:", longitud);

// Cambiar el tipo
problemaAny = 123;
console.log("Longitud después de cambiar a número:", problemaAny.length); // ❌ undefined

// Intentar usar métodos que no existen
let arrayAny: any = [1, 2, 3];
arrayAny.push("texto"); // ✅ No da error
console.log("Array con string:", arrayAny);

// Intentar sumar números con string
let suma: number = arrayAny.reduce((a: any, b: any) => a + b, 0);
console.log("Suma problemática:", suma); // ❌ "01texto" (concatenación)

// 5. COMPARACIÓN CON TIPOS ESPECÍFICOS
// ========================================

console.log("\n=== COMPARACIÓN CON TIPOS ESPECÍFICOS ===");

// Con tipo específico
let nombreString: string = "Juan";
console.log("Nombre (string):", nombreString);
console.log("Longitud:", nombreString.length);
console.log("Mayúsculas:", nombreString.toUpperCase());

// Con any
let nombreAny: any = "Juan";
console.log("Nombre (any):", nombreAny);
console.log("Longitud:", nombreAny.length);
console.log("Mayúsculas:", nombreAny.toUpperCase());

// La diferencia se nota en el IntelliSense y verificación de tipos

// 6. USO EN FUNCIONES
// ========================================

function procesarDatos(datos: any): any {
    console.log("Procesando datos:", datos);
    return datos;
}

function procesarDatosSeguro(datos: any): string {
    if (typeof datos === 'string') {
        return datos.toUpperCase();
    } else if (typeof datos === 'number') {
        return datos.toString();
    } else {
        return JSON.stringify(datos);
    }
}

console.log("\n=== USO EN FUNCIONES ===");
console.log("Procesar string:", procesarDatos("hola"));
console.log("Procesar número:", procesarDatos(42));
console.log("Procesar objeto:", procesarDatos({ id: 1, nombre: "test" }));

console.log("Procesar seguro - string:", procesarDatosSeguro("hola"));
console.log("Procesar seguro - número:", procesarDatosSeguro(42));
console.log("Procesar seguro - objeto:", procesarDatosSeguro({ id: 1, nombre: "test" }));

// 7. TRABAJO CON APIS EXTERNAS
// ========================================

// Simulación de respuesta de API
let respuestaAPI: any = {
    status: "success",
    data: {
        usuarios: [
            { id: 1, nombre: "Ana", email: "ana@email.com" },
            { id: 2, nombre: "Luis", email: "luis@email.com" }
        ],
        total: 2
    },
    timestamp: "2024-01-15T10:30:00Z"
};

console.log("\n=== TRABAJO CON APIs EXTERNAS ===");
console.log("Status:", respuestaAPI.status);
console.log("Total usuarios:", respuestaAPI.data.total);
console.log("Primer usuario:", respuestaAPI.data.usuarios[0]);

// Acceso a propiedades que podrían no existir
console.log("Propiedad opcional:", respuestaAPI.meta); // undefined

// 8. MIGRACIÓN GRADUAL DE JAVASCRIPT
// ========================================

// Código JavaScript existente
let codigoLegado: any = {
    configuracion: {
        servidor: "localhost",
        puerto: 3000,
        ssl: true
    },
    usuarios: [
        { nombre: "admin", rol: "administrador" },
        { nombre: "user", rol: "usuario" }
    ]
};

console.log("\n=== MIGRACIÓN GRADUAL ===");
console.log("Configuración:", codigoLegado.configuracion);
console.log("Usuarios:", codigoLegado.usuarios);

// Gradualmente se puede ir tipando más específicamente
interface Configuracion {
    servidor: string;
    puerto: number;
    ssl: boolean;
}

interface Usuario {
    nombre: string;
    rol: string;
}

interface CodigoLegado {
    configuracion: Configuracion;
    usuarios: Usuario[];
}

// Ahora con tipos específicos
let codigoTipado: CodigoLegado = {
    configuracion: {
        servidor: "localhost",
        puerto: 3000,
        ssl: true
    },
    usuarios: [
        { nombre: "admin", rol: "administrador" },
        { nombre: "user", rol: "usuario" }
    ]
};

console.log("Código tipado:", codigoTipado);

// 9. ALTERNATIVAS AL TIPO ANY
// ========================================

console.log("\n=== ALTERNATIVAS AL TIPO ANY ===");

// Usando unknown (más seguro)
let valorUnknown: unknown = "texto";
// valorUnknown.toUpperCase(); // ❌ Error: necesitas verificar el tipo

if (typeof valorUnknown === 'string') {
    console.log("Valor unknown como string:", valorUnknown.toUpperCase());
}

// Usando union types
let valorUnion: string | number = "texto";
console.log("Valor union:", valorUnion);
valorUnion = 123;
console.log("Valor union como número:", valorUnion);

// Usando type assertion cuando sea necesario
let valorAsercion: any = "texto";
let longitudAsercion: number = (valorAsercion as string).length;
console.log("Longitud con type assertion:", longitudAsercion);

// 10. TYPE GUARDS CON ANY
// ========================================

function esString(valor: any): valor is string {
    return typeof valor === 'string';
}

function esNumber(valor: any): valor is number {
    return typeof valor === 'number';
}

function esArray(valor: any): valor is any[] {
    return Array.isArray(valor);
}

function esObject(valor: any): valor is object {
    return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

console.log("\n=== TYPE GUARDS ===");
let valorGuard: any = "Hola Mundo";

if (esString(valorGuard)) {
    console.log("Es string:", valorGuard.toUpperCase());
}

valorGuard = 42;
if (esNumber(valorGuard)) {
    console.log("Es número:", valorGuard * 2);
}

valorGuard = [1, 2, 3];
if (esArray(valorGuard)) {
    console.log("Es array:", valorGuard.length);
}

valorGuard = { nombre: "test" };
if (esObject(valorGuard)) {
    console.log("Es objeto:", Object.keys(valorGuard));
}

// 11. EJEMPLOS PRÁCTICOS
// ========================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Función para procesar datos dinámicos
function procesarDatosDinamicos(datos: any): string {
    if (typeof datos === 'string') {
        return `Texto: ${datos}`;
    } else if (typeof datos === 'number') {
        return `Número: ${datos}`;
    } else if (typeof datos === 'boolean') {
        return `Boolean: ${datos}`;
    } else if (Array.isArray(datos)) {
        return `Array con ${datos.length} elementos`;
    } else if (typeof datos === 'object' && datos !== null) {
        return `Objeto con ${Object.keys(datos).length} propiedades`;
    } else {
        return `Tipo desconocido: ${typeof datos}`;
    }
}

console.log("Procesar string:", procesarDatosDinamicos("Hola"));
console.log("Procesar número:", procesarDatosDinamicos(42));
console.log("Procesar boolean:", procesarDatosDinamicos(true));
console.log("Procesar array:", procesarDatosDinamicos([1, 2, 3]));
console.log("Procesar objeto:", procesarDatosDinamicos({ a: 1, b: 2 }));

// Función para validar y convertir datos
function validarYConvertir(datos: any): string | number | boolean | null {
    if (typeof datos === 'string') {
        // Intentar convertir a número
        let numero = parseFloat(datos);
        if (!isNaN(numero)) {
            return numero;
        }
        // Intentar convertir a boolean
        if (datos.toLowerCase() === 'true') return true;
        if (datos.toLowerCase() === 'false') return false;
        return datos;
    }
    return datos;
}

console.log("\nValidar y convertir:");
console.log("'123' ->", validarYConvertir("123"));
console.log("'true' ->", validarYConvertir("true"));
console.log("'false' ->", validarYConvertir("false"));
console.log("'texto' ->", validarYConvertir("texto"));
console.log("123 ->", validarYConvertir(123));

console.log("\n=== FIN DE EJEMPLOS DE ANY ===");
console.log("⚠️  Recuerda: any debe usarse con precaución y solo cuando sea necesario");

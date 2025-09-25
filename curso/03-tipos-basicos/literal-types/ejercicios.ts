// ========================================
// EJERCICIOS - LITERAL TYPES EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Literal types básicos
// ========================================
// Crea variables con los siguientes literal types:
// - color: solo puede ser "rojo", "verde" o "azul"
// - tamaño: solo puede ser "pequeño", "mediano" o "grande"
// - estado: solo puede ser "activo" o "inactivo"
// - código: solo puede ser 200, 404 o 500

// TODO: Escribe tu código aquí
// let color: 
// let tamaño: 
// let estado: 
// let código: 

// EJERCICIO 2: Union types con literal types
// ========================================
// Crea tipos que combinen literal types:
// - TipoColor: union de "rojo", "verde", "azul"
// - TipoTamaño: union de "pequeño", "mediano", "grande"
// - TipoEstado: union de "pendiente", "procesando", "completado"
// - TipoCodigo: union de 200, 201, 400, 401, 404, 500

// TODO: Escribe tu código aquí
// type TipoColor = 
// type TipoTamaño = 
// type TipoEstado = 
// type TipoCodigo = 

// EJERCICIO 3: Literal types en funciones
// ========================================
// Crea una función 'cambiarColor' que reciba un parámetro de tipo TipoColor
// Crea una función 'obtenerEstado' que retorne un TipoEstado aleatorio
// Crea una función 'configurar' que reciba modo ("desarrollo" | "produccion") y nivel ("debug" | "info" | "warn" | "error")

// TODO: Escribe tu código aquí
// function cambiarColor(color: TipoColor): void {
//     // Tu código aquí
// }

// function obtenerEstado(): TipoEstado {
//     // Tu código aquí
// }

// function configurar(modo: "desarrollo" | "produccion", nivel: "debug" | "info" | "warn" | "error"): void {
//     // Tu código aquí
// }

// EJERCICIO 4: Literal types en interfaces
// ========================================
// Crea una interfaz 'Configuracion' con:
// - entorno: "desarrollo" | "produccion" | "testing"
// - nivel: "debug" | "info" | "warn" | "error"
// - ssl: true | false
// Crea un objeto que implemente esta interfaz

// TODO: Escribe tu código aquí
// interface Configuracion {
//     // Tu código aquí
// }

// let config: Configuracion = 

// EJERCICIO 5: Const assertions
// ========================================
// Crea un array de colores con const assertion
// Crea un objeto de configuración con const assertion
// Muestra la diferencia entre con y sin const assertion

// TODO: Escribe tu código aquí
// let colores = 
// let configConst = 

// EJERCICIO 6: Template literal types
// ========================================
// Crea un tipo 'Evento' que sea `on${string}`
// Crea un tipo 'EventoMouse' que sea `onMouse${"Down" | "Up" | "Move"}`
// Crea un tipo 'CSSProperty' que sea `margin${"Top" | "Right" | "Bottom" | "Left"}`
// Crea variables que usen estos tipos

// TODO: Escribe tu código aquí
// type Evento = 
// type EventoMouse = 
// type CSSProperty = 

// let evento: Evento = 
// let eventoMouse: EventoMouse = 
// let cssProp: CSSProperty = 

// EJERCICIO 7: Literal types en clases
// ========================================
// Crea una clase 'Estado' con:
// - propiedad privada 'estado' de tipo "inicial" | "cargando" | "exitoso" | "error"
// - método 'cambiarEstado' que reciba un nuevo estado
// - método 'obtenerEstado' que retorne el estado actual

// TODO: Escribe tu código aquí
// class Estado {
//     // Tu código aquí
// }

// EJERCICIO 8: Literal types con generics
// ========================================
// Crea una función 'crearEvento' que reciba un tipo T y retorne `on${T}`
// Crea una función 'combinar' que reciba dos strings T y U y retorne `${T}${U}`
// Usa estas funciones con diferentes tipos

// TODO: Escribe tu código aquí
// function crearEvento<T extends string>(tipo: T): `on${T}` {
//     // Tu código aquí
// }

// function combinar<T extends string, U extends string>(a: T, b: U): `${T}${U}` {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Literal types básicos
let color: "rojo" | "verde" | "azul" = "rojo";
let tamaño: "pequeño" | "mediano" | "grande" = "mediano";
let estado: "activo" | "inactivo" = "activo";
let código: 200 | 404 | 500 = 200;

console.log("1. Literal types básicos:");
console.log("Color:", color);
console.log("Tamaño:", tamaño);
console.log("Estado:", estado);
console.log("Código:", código);

// SOLUCIÓN 2: Union types con literal types
type TipoColor = "rojo" | "verde" | "azul";
type TipoTamaño = "pequeño" | "mediano" | "grande";
type TipoEstado = "pendiente" | "procesando" | "completado";
type TipoCodigo = 200 | 201 | 400 | 401 | 404 | 500;

console.log("\n2. Union types con literal types:");
console.log("Tipos definidos: TipoColor, TipoTamaño, TipoEstado, TipoCodigo");

// SOLUCIÓN 3: Literal types en funciones
function cambiarColor(color: TipoColor): void {
    console.log(`Color cambiado a: ${color}`);
}

function obtenerEstado(): TipoEstado {
    const estados: TipoEstado[] = ["pendiente", "procesando", "completado"];
    return estados[Math.floor(Math.random() * estados.length)];
}

function configurar(modo: "desarrollo" | "produccion", nivel: "debug" | "info" | "warn" | "error"): void {
    console.log(`Modo: ${modo}, Nivel: ${nivel}`);
}

console.log("\n3. Literal types en funciones:");
cambiarColor("rojo");
cambiarColor("verde");
console.log("Estado obtenido:", obtenerEstado());
configurar("desarrollo", "debug");

// SOLUCIÓN 4: Literal types en interfaces
interface Configuracion {
    entorno: "desarrollo" | "produccion" | "testing";
    nivel: "debug" | "info" | "warn" | "error";
    ssl: true | false;
}

let config: Configuracion = {
    entorno: "desarrollo",
    nivel: "debug",
    ssl: false
};

console.log("\n4. Literal types en interfaces:");
console.log("Configuración:", config);

// SOLUCIÓN 5: Const assertions
let colores = ["rojo", "verde", "azul"] as const;
let configConst = {
    servidor: "localhost",
    puerto: 3000,
    ssl: false
} as const;

console.log("\n5. Const assertions:");
console.log("Colores:", colores);
console.log("Config const:", configConst);

// SOLUCIÓN 6: Template literal types
type Evento = `on${string}`;
type EventoMouse = `onMouse${"Down" | "Up" | "Move"}`;
type CSSProperty = `margin${"Top" | "Right" | "Bottom" | "Left"}`;

let evento: Evento = "onClick";
let eventoMouse: EventoMouse = "onMouseDown";
let cssProp: CSSProperty = "marginTop";

console.log("\n6. Template literal types:");
console.log("Evento:", evento);
console.log("Evento mouse:", eventoMouse);
console.log("CSS property:", cssProp);

// SOLUCIÓN 7: Literal types en clases
class Estado {
    private estado: "inicial" | "cargando" | "exitoso" | "error" = "inicial";
    
    cambiarEstado(nuevoEstado: "inicial" | "cargando" | "exitoso" | "error"): void {
        this.estado = nuevoEstado;
    }
    
    obtenerEstado(): "inicial" | "cargando" | "exitoso" | "error" {
        return this.estado;
    }
}

let estado = new Estado();
console.log("\n7. Literal types en clases:");
console.log("Estado inicial:", estado.obtenerEstado());
estado.cambiarEstado("cargando");
console.log("Estado después de cambiar:", estado.obtenerEstado());

// SOLUCIÓN 8: Literal types con generics
function crearEvento<T extends string>(tipo: T): `on${T}` {
    return `on${tipo}` as `on${T}`;
}

function combinar<T extends string, U extends string>(a: T, b: U): `${T}${U}` {
    return `${a}${b}` as `${T}${U}`;
}

let eventoClick = crearEvento("Click");
let eventoHover = crearEvento("Hover");
let combinado = combinar("on", "Click");

console.log("\n8. Literal types con generics:");
console.log("Evento click:", eventoClick);
console.log("Evento hover:", eventoHover);
console.log("Combinado:", combinado);

console.log("\n¡Ejercicios de Literal Types completados!");

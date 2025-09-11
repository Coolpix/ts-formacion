// Ejemplos comparando Interfaces vs Type Aliases en TypeScript

// 1. INTERFACES - Definición básica
interface UsuarioInterface {
    nombre: string;
    edad: number;
    email: string;
}

// 2. TYPE ALIASES - Definición básica
type UsuarioType = {
    nombre: string;
    edad: number;
    email: string;
};

// Ambos se usan de la misma manera
let usuario1: UsuarioInterface = {
    nombre: "Juan",
    edad: 30,
    email: "juan@email.com"
};

let usuario2: UsuarioType = {
    nombre: "María",
    edad: 25,
    email: "maria@email.com"
};

console.log("Usuario Interface:", usuario1);
console.log("Usuario Type:", usuario2);

// 3. INTERFACES - Extensión (herencia)
interface EmpleadoInterface extends UsuarioInterface {
    salario: number;
    departamento: string;
}

// 4. TYPE ALIASES - Extensión (intersection)
type EmpleadoType = UsuarioType & {
    salario: number;
    departamento: string;
};

let empleado1: EmpleadoInterface = {
    nombre: "Carlos",
    edad: 35,
    email: "carlos@empresa.com",
    salario: 50000,
    departamento: "IT"
};

let empleado2: EmpleadoType = {
    nombre: "Ana",
    edad: 28,
    email: "ana@empresa.com",
    salario: 45000,
    departamento: "Marketing"
};

console.log("Empleado Interface:", empleado1);
console.log("Empleado Type:", empleado2);

// 5. INTERFACES - Declaración múltiple (se fusionan)
interface ConfiguracionInterface {
    nombre: string;
    activo: boolean;
}

interface ConfiguracionInterface {
    puerto: number;
    host: string;
}

// La interfaz resultante tiene todas las propiedades
let configFusionada: ConfiguracionInterface = {
    nombre: "Mi App",
    activo: true,
    puerto: 3000,
    host: "localhost"
};

console.log("Configuración Interface (fusionada):", configFusionada);

// 6. TYPE ALIASES - Union types (no se pueden fusionar)
type EstadoType = "activo" | "inactivo" | "pendiente";
type PrioridadType = "baja" | "media" | "alta";

// Combinación de union types
type EstadoPrioridadType = EstadoType | PrioridadType;

let estado: EstadoType = "activo";
let prioridad: PrioridadType = "alta";
let estadoPrioridad: EstadoPrioridadType = "activo"; // Puede ser estado o prioridad

console.log("Estado:", estado);
console.log("Prioridad:", prioridad);
console.log("Estado o Prioridad:", estadoPrioridad);

// 7. INTERFACES - Con métodos
interface CalculadoraInterface {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

// 8. TYPE ALIASES - Con métodos
type CalculadoraType = {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
};

let calc1: CalculadoraInterface = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b
};

let calc2: CalculadoraType = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b
};

console.log("Suma Interface:", calc1.sumar(5, 3));
console.log("Suma Type:", calc2.sumar(5, 3));

// 9. TYPE ALIASES - Con tipos primitivos
type ID = string | number;
type Nombre = string;
type Edad = number;

// Combinación de tipos primitivos
type UsuarioBasico = {
    id: ID;
    nombre: Nombre;
    edad: Edad;
};

let usuarioBasico: UsuarioBasico = {
    id: "123",
    nombre: "Pedro",
    edad: 40
};

console.log("Usuario Básico:", usuarioBasico);

// 10. TYPE ALIASES - Con funciones
type ProcesadorType = (valor: string) => string;
type ComparadorType = (a: number, b: number) => boolean;

let procesador: ProcesadorType = (valor) => valor.toUpperCase();
let comparador: ComparadorType = (a, b) => a > b;

console.log("Procesador:", procesador("hola"));
console.log("Comparador:", comparador(5, 3));

// 11. INTERFACES - Con propiedades de índice
interface DiccionarioInterface {
    [key: string]: string | Function;
    idioma: string;
    obtenerTraduccion(palabra: string): string;
}

// 12. TYPE ALIASES - Con propiedades de índice
type DiccionarioType = {
    [key: string]: string | Function;
    idioma: string;
    obtenerTraduccion(palabra: string): string;
};

let diccionario1: DiccionarioInterface = {
    "hola": "hello",
    "adios": "goodbye",
    idioma: "español-inglés",
    obtenerTraduccion: function(palabra) {
        return this[palabra] || "No encontrado";
    }
};

let diccionario2: DiccionarioType = {
    "casa": "house",
    "perro": "dog",
    idioma: "español-inglés",
    obtenerTraduccion: function(palabra) {
        return this[palabra] || "No encontrado";
    }
};

console.log("Diccionario interface:", diccionario1.obtenerTraduccion("hola"));
console.log("Diccionario type:", diccionario2.obtenerTraduccion("casa"));

// 13. TYPE ALIASES - Con tipos de unión complejos
type EstadoUsuario = "activo" | "inactivo" | "pendiente" | "bloqueado";
type TipoUsuario = "admin" | "usuario" | "invitado";

type UsuarioCompleto = {
    id: number;
    nombre: string;
    estado: EstadoUsuario;
    tipo: TipoUsuario;
    fechaCreacion: Date;
};

// 14. TYPE ALIASES - Con tipos de función complejos
type OperacionMatematica = (a: number, b: number) => number;
type ValidacionUsuario = (usuario: UsuarioCompleto) => boolean;

let suma: OperacionMatematica = (a, b) => a + b;
let validarUsuario: ValidacionUsuario = (usuario) => usuario.estado === "activo";

console.log("Suma:", suma(5, 3));
console.log("Usuario válido:", validarUsuario({
    id: 1,
    nombre: "Juan",
    estado: "activo",
    tipo: "usuario",
    fechaCreacion: new Date()
}));

// 15. INTERFACES - Con propiedades de índice simples
interface ConfiguracionInterface {
    [key: string]: string | number | boolean;
}

// 16. TYPE ALIASES - Con propiedades de índice simples
type ConfiguracionType = {
    [key: string]: string | number | boolean;
};

let config1: ConfiguracionInterface = {
    "host": "localhost",
    "puerto": 3000,
    "nombre": "Configuración Simple",
    "activo": true
};

let config2: ConfiguracionType = {
    "database": "mydb",
    "timeout": 5000
};

console.log("Configuración Interface:", config1);
console.log("Configuración Type:", config2);

// 17. CUÁNDO USAR CADA UNO - Ejemplo práctico

// Usa INTERFACES para:
// - Definir la forma de objetos
// - Cuando necesites herencia
// - Cuando quieras que se puedan fusionar declaraciones

interface ServicioBase {
    nombre: string;
    iniciar(): void;
    detener(): void;
}

interface ServicioWeb extends ServicioBase {
    puerto: number;
    url: string;
}

// Usa TYPE ALIASES para:
// - Union types
// - Intersection types
// - Tipos primitivos
// - Tipos más complejos

type EstadoServicio = "iniciando" | "activo" | "detenido" | "error";
type ConfiguracionServicio = {
    puerto: number;
    host: string;
    ssl: boolean;
};

type ServicioCompleto = ServicioWeb & {
    estado: EstadoServicio;
    configuracion: ConfiguracionServicio;
};

let servicioCompleto: ServicioCompleto = {
    nombre: "Mi Servicio",
    puerto: 3000,
    url: "http://localhost:3000",
    estado: "activo",
    configuracion: {
        puerto: 3000,
        host: "localhost",
        ssl: false
    },
    iniciar: function() {
        console.log("Servicio iniciado");
    },
    detener: function() {
        console.log("Servicio detenido");
    }
};

console.log("Servicio Completo:", servicioCompleto);
servicioCompleto.iniciar();

// 18. RESUMEN DE DIFERENCIAS
console.log("\n=== RESUMEN DE DIFERENCIAS ===");
console.log("INTERFACES:");
console.log("- Se pueden extender con 'extends'");
console.log("- Se pueden declarar múltiples veces (se fusionan)");
console.log("- Mejor para definir la forma de objetos");
console.log("- Mejor para herencia");

console.log("\nTYPE ALIASES:");
console.log("- Se pueden combinar con '&' (intersection)");
console.log("- No se pueden fusionar");
console.log("- Mejor para union types");
console.log("- Mejor para tipos primitivos");
console.log("- Mejor para tipos más complejos");

// ========================================
// EJEMPLOS - INTERFACES EN TYPESCRIPT
// ========================================

// 1. INTERFACES BÁSICAS
// ========================================

interface Usuario2 {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// Uso de la interfaz
let usuario: Usuario2 = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};

console.log("=== INTERFACES BÁSICAS ===");
console.log("Usuario:", usuario);

// 2. PROPIEDADES OPCIONALES
// ========================================

interface UsuarioCompleto {
    id: number;
    nombre: string;
    email: string;
    telefono?: string; // Propiedad opcional
    fechaNacimiento?: Date;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
}

// Uso con propiedades opcionales
let usuarioCompleto: UsuarioCompleto = {
    id: 2,
    nombre: "María",
    email: "maria@email.com"
    // telefono, fechaNacimiento y direccion son opcionales
};

let usuarioConTelefono: UsuarioCompleto = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@email.com",
    telefono: "123-456-789",
    fechaNacimiento: new Date("1990-01-01"),
    direccion: {
        calle: "Calle Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
};

console.log("\n=== PROPIEDADES OPCIONALES ===");
console.log("Usuario básico:", usuarioCompleto);
console.log("Usuario completo:", usuarioConTelefono);

// 3. PROPIEDADES DE SOLO LECTURA
// ========================================

interface UsuarioReadonly {
    readonly id: number; // No se puede modificar después de la creación
    nombre: string;
    email: string;
    readonly fechaCreacion: Date;
}

let usuarioReadonly: UsuarioReadonly = {
    id: 4,
    nombre: "Ana",
    email: "ana@email.com",
    fechaCreacion: new Date()
};

// usuarioReadonly.id = 5; // ❌ Error: no se puede modificar
// usuarioReadonly.fechaCreacion = new Date(); // ❌ Error: no se puede modificar

console.log("\n=== PROPIEDADES DE SOLO LECTURA ===");
console.log("Usuario readonly:", usuarioReadonly);

// 4. PROPIEDADES DE FUNCIÓN
// ========================================

interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

// Implementación
let calculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log("\n=== PROPIEDADES DE FUNCIÓN ===");
console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(5, 3));
console.log("Multiplicación:", calculadora.multiplicar(5, 3));
console.log("División:", calculadora.dividir(5, 3));

// 5. PROPIEDADES INDEXABLES
// ========================================

interface Diccionario {
    [key: string]: string;
}

interface Numeros {
    [index: number]: string;
}

interface Mixto {
    [key: string]: string | number;
}

// Uso
let diccionario: Diccionario = {
    "hola": "hello",
    "adios": "goodbye",
    "gracias": "thank you"
};

let numeros: Numeros = {
    0: "cero",
    1: "uno",
    2: "dos",
    3: "tres"
};

let mixto: Mixto = {
    "nombre": "Juan",
    "edad": 25,
    "activo": "true"
};

console.log("\n=== PROPIEDADES INDEXABLES ===");
console.log("Diccionario:", diccionario);
console.log("Números:", numeros);
console.log("Mixto:", mixto);

// 6. EXTENSIÓN DE INTERFACES
// ========================================

interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    id: number;
    salario: number;
    departamento: string;
}

interface Gerente extends Empleado {
    equipo: string[];
    presupuesto: number;
}

// Uso
let empleado: Empleado = {
    id: 1,
    nombre: "Ana",
    edad: 30,
    salario: 50000,
    departamento: "IT"
};

let gerente: Gerente = {
    id: 2,
    nombre: "Luis",
    edad: 35,
    salario: 75000,
    departamento: "IT",
    equipo: ["Ana", "Pedro", "María"],
    presupuesto: 100000
};

console.log("\n=== EXTENSIÓN DE INTERFACES ===");
console.log("Empleado:", empleado);
console.log("Gerente:", gerente);

// 7. MÚLTIPLES EXTENSIONES
// ========================================

interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

interface Pajaro extends Volador, Nadador {
    cantar(): void;
}

interface Pato extends Volador, Nadador {
    caminar(): void;
}

// Implementación
let pajaro: Pajaro = {
    volar: () => console.log("El pájaro vuela"),
    nadar: () => console.log("El pájaro nada"),
    cantar: () => console.log("El pájaro canta")
};

let pato: Pato = {
    volar: () => console.log("El pato vuela"),
    nadar: () => console.log("El pato nada"),
    caminar: () => console.log("El pato camina")
};

console.log("\n=== MÚLTIPLES EXTENSIONES ===");
pajaro.volar();
pajaro.nadar();
pajaro.cantar();

pato.volar();
pato.nadar();
pato.caminar();

// 8. INTERFACES CON GENERICS
// ========================================

interface Contenedor<T> {
    valor: T;
    obtenerValor(): T;
    establecerValor(valor: T): void;
}

interface ComparadorClase<T> {
    comparar(a: T, b: T): number;
}

// Implementación
class Caja<T> implements Contenedor<T> {
    constructor(public valor: T) {}
    
    obtenerValor(): T {
        return this.valor;
    }
    
    establecerValor(valor: T): void {
        this.valor = valor;
    }
}

class ComparadorNumeros implements ComparadorClase<number> {
    comparar(a: number, b: number): number {
        return a - b;
    }
}

// Uso
let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);
let comparador = new ComparadorNumeros();

console.log("\n=== INTERFACES CON GENERICS ===");
console.log("Caja string:", cajaString.obtenerValor());
console.log("Caja number:", cajaNumber.obtenerValor());
console.log("Comparar 5 y 3:", comparador.comparar(5, 3));

// 9. INTERFACES PARA FUNCIONES
// ========================================

interface Comparador<T> {
    (a: T, b: T): number;
}

interface EventHandler {
    (event: Event): void;
}

interface Transformador<T, U> {
    (valor: T): U;
}

// Uso
let compararNumeros: Comparador<number> = (a, b) => a - b;
let manejadorClick: EventHandler = (event) => {
    console.log("Click detectado");
};

let convertirAString: Transformador<number, string> = (num) => num.toString();

console.log("\n=== INTERFACES PARA FUNCIONES ===");
console.log("Comparar 10 y 5:", compararNumeros(10, 5));
console.log("Convertir 42 a string:", convertirAString(42));

// 10. INTERFACES PARA CONSTRUCTORES
// ========================================

interface ConstructorUsuario {
    new (nombre: string, email: string): Usuario;
}

interface Usuario {
    nombre: string;
    email: string;
    obtenerInfo(): string;
}

// Implementación
class UsuarioImpl implements Usuario {
    constructor(public nombre: string, public email: string) {}
    
    obtenerInfo(): string {
        return `${this.nombre} (${this.email})`;
    }
}

// Uso
let Constructor: ConstructorUsuario = UsuarioImpl;
let usuarioNuevo = new Constructor("Carlos", "carlos@email.com");

console.log("\n=== INTERFACES PARA CONSTRUCTORES ===");
console.log("Usuario nuevo:", usuarioNuevo.obtenerInfo());

// 11. INTERFACES HÍBRIDAS
// ========================================

interface Contador {
    // Propiedades
    valor: number;
    
    // Métodos
    incrementar(): void;
    decrementar(): void;
    
    // Función
    (): number;
}

// Implementación
function crearContador(): Contador {
    let contador = function() {
        return contador.valor;
    } as Contador;
    
    contador.valor = 0;
    contador.incrementar = () => contador.valor++;
    contador.decrementar = () => contador.valor--;
    
    return contador;
}

// Uso
let contador = crearContador();
contador.incrementar();
contador.incrementar();
console.log("\n=== INTERFACES HÍBRIDAS ===");
console.log("Valor del contador:", contador());

// 12. INTERFACES EN CLASES
// ========================================

interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

class Pato implements Volador, Nadador {
    volar(): void {
        console.log("El pato vuela");
    }
    
    nadar(): void {
        console.log("El pato nada");
    }
}

class Pajaro implements Volador {
    volar(): void {
        console.log("El pájaro vuela");
    }
}

console.log("\n=== INTERFACES EN CLASES ===");
let pato2 = new Pato();
let pajaro2 = new Pajaro();

pato2.volar();
pato2.nadar();
pajaro2.volar();

// 13. INTERFACES PARA APIs
// ========================================

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
}

interface UsuarioAPI {
    id: number;
    nombre: string;
    email: string;
}

// Función que usa la interfaz
async function simularObtenerUsuarios(): Promise<ApiResponse<UsuarioAPI[]>> {
    // Simular llamada a API
    const exito = Math.random() > 0.3;
    
    if (exito) {
        return {
            success: true,
            data: [
                { id: 1, nombre: "Ana", email: "ana@email.com" },
                { id: 2, nombre: "Luis", email: "luis@email.com" }
            ],
            message: "Usuarios obtenidos correctamente",
            timestamp: new Date()
        };
    } else {
        return {
            success: false,
            data: [],
            message: "Error al obtener usuarios",
            timestamp: new Date()
        };
    }
}

console.log("\n=== INTERFACES PARA APIs ===");
simularObtenerUsuarios().then(response => {
    if (response.success) {
        console.log("API Response éxito:", response.data);
    } else {
        console.log("API Response error:", response.message);
    }
});

// 14. INTERFACES PARA CONFIGURACIÓN
// ========================================

interface Configuracion {
    servidor: {
        host: string;
        puerto: number;
        ssl: boolean;
    };
    baseDeDatos: {
        host: string;
        puerto: number;
        nombre: string;
        usuario: string;
        password: string;
    };
    logging: {
        nivel: "debug" | "info" | "warn" | "error";
        archivo: string;
    };
}

// Uso
let config: Configuracion = {
    servidor: {
        host: "localhost",
        puerto: 3000,
        ssl: false
    },
    baseDeDatos: {
        host: "localhost",
        puerto: 5432,
        nombre: "miapp",
        usuario: "admin",
        password: "secret"
    },
    logging: {
        nivel: "info",
        archivo: "app.log"
    }
};

console.log("\n=== INTERFACES PARA CONFIGURACIÓN ===");
console.log("Configuración:", config);

// 15. INTERFACES PARA EVENTOS
// ========================================

interface EventoClick {
    tipo: "click";
    x: number;
    y: number;
    boton: number;
}

interface EventoTeclado {
    tipo: "keydown" | "keyup";
    tecla: string;
    codigo: string;
    ctrlKey: boolean;
    shiftKey: boolean;
}

interface EventoScroll {
    tipo: "scroll";
    posicionX: number;
    posicionY: number;
}

type Evento = EventoClick | EventoTeclado | EventoScroll;

// Función para manejar eventos
function manejarEvento(evento: Evento): void {
    switch (evento.tipo) {
        case "click":
            console.log(`Click en (${evento.x}, ${evento.y})`);
            break;
        case "keydown":
        case "keyup":
            console.log(`Tecla ${evento.tecla} ${evento.tipo}`);
            break;
        case "scroll":
            console.log(`Scroll a (${evento.posicionX}, ${evento.posicionY})`);
            break;
    }
}

console.log("\n=== INTERFACES PARA EVENTOS ===");
let eventoClick: Evento = { tipo: "click", x: 100, y: 200, boton: 1 };
let eventoTeclado: Evento = { 
    tipo: "keydown", 
    tecla: "Enter", 
    codigo: "Enter", 
    ctrlKey: false, 
    shiftKey: false 
};
let eventoScroll: Evento = { tipo: "scroll", posicionX: 0, posicionY: 100 };

manejarEvento(eventoClick);
manejarEvento(eventoTeclado);
manejarEvento(eventoScroll);

// 16. EJEMPLOS PRÁCTICOS
// ========================================

// Sistema de autenticación
interface Credenciales {
    email: string;
    password: string;
}

interface Sesion {
    token: string;
    refreshToken: string;
    usuarioId: number;
    expiraEn: Date;
}

interface UsuarioAuth {
    id: number;
    nombre: string;
    email: string;
    rol: "admin" | "usuario" | "invitado";
    activo: boolean;
}

interface ServicioAuth {
    login(credenciales: Credenciales): Promise<Sesion>;
    logout(token: string): Promise<void>;
    obtenerUsuario(token: string): Promise<UsuarioAuth>;
    renovarToken(refreshToken: string): Promise<Sesion>;
}

// Sistema de notificaciones
interface Notificacion {
    id: string;
    tipo: "info" | "warning" | "error" | "success";
    titulo: string;
    mensaje: string;
    timestamp: Date;
    leida: boolean;
    usuarioId: number;
}

interface ServicioNotificaciones {
    enviar(notificacion: Omit<Notificacion, "id" | "timestamp" | "leida">): Promise<Notificacion>;
    obtener(usuarioId: number): Promise<Notificacion[]>;
    marcarComoLeida(id: string): Promise<void>;
    eliminar(id: string): Promise<void>;
}

console.log("\n=== EJEMPLOS PRÁCTICOS ===");
console.log("Interfaces para sistema de autenticación y notificaciones definidas");

// Crear notificación de ejemplo
let notificacion: Notificacion = {
    id: "notif1",
    tipo: "info",
    titulo: "Bienvenido",
    mensaje: "Has iniciado sesión correctamente",
    timestamp: new Date(),
    leida: false,
    usuarioId: 1
};

console.log("Notificación de ejemplo:", notificacion);

console.log("\n=== FIN DE EJEMPLOS DE INTERFACES ===");

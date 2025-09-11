// Ejemplos de herencia de interfaces en TypeScript

// 1. Herencia simple de interfaces
interface Animal {
    nombre: string;
    edad: number;
    hacerSonido(): void;
}

interface Mascota extends Animal {
    dueno: string;
    vacunado: boolean;
    jugar(): void;
}

let mascota: Mascota = {
    nombre: "Max",
    edad: 3,
    dueno: "Juan",
    vacunado: true,
    hacerSonido: () => console.log("¡Guau!"),
    jugar: () => console.log("Jugando con la pelota")
};

console.log("Mascota:", mascota);
mascota.hacerSonido();
mascota.jugar();

// 2. Múltiple herencia de interfaces
interface Volador {
    volar(): void;
    altura: number;
}

interface Nadador {
    nadar(): void;
    profundidad: number;
}

interface Pato extends Animal, Volador, Nadador {
    graznar(): void;
}

let pato: Pato = {
    nombre: "Donald",
    edad: 2,
    altura: 10,
    profundidad: 5,
    hacerSonido: () => console.log("¡Cuac!"),
    volar: () => console.log("Volando a 10 metros de altura"),
    nadar: () => console.log("Nadando a 5 metros de profundidad"),
    graznar: () => console.log("¡Cuac cuac!")
};

console.log("\nPato:", pato);
pato.hacerSonido();
pato.volar();
pato.nadar();
pato.graznar();

// 3. Herencia con propiedades opcionales
interface Empleado {
    id: number;
    nombre: string;
    salario: number;
    departamento?: string;
}

interface Gerente extends Empleado {
    equipo: string[];
    presupuesto: number;
    evaluarEmpleado?(empleadoId: number): string;
}

let gerente: Gerente = {
    id: 1,
    nombre: "Ana López",
    salario: 75000,
    departamento: "Ventas",
    equipo: ["Juan", "María", "Carlos"],
    presupuesto: 100000,
    evaluarEmpleado: (empleadoId) => `Empleado ${empleadoId} evaluado positivamente`
};

console.log("\nGerente:", gerente);
console.log("Evaluación:", gerente.evaluarEmpleado?.(1));

// 4. Herencia con métodos que se sobrescriben
interface Vehiculo {
    marca: string;
    modelo: string;
    velocidad: number;
    acelerar(): void;
    frenar(): void;
}

interface Coche extends Vehiculo {
    puertas: number;
    acelerar(): void; // Sobrescribe el método de Vehiculo
    abrirMaletero(): void;
}

let coche: Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    velocidad: 0,
    puertas: 4,
    acelerar: function() {
        this.velocidad += 20;
        console.log(`Coche acelerando. Velocidad: ${this.velocidad} km/h`);
    },
    frenar: function() {
        this.velocidad = Math.max(0, this.velocidad - 15);
        console.log(`Coche frenando. Velocidad: ${this.velocidad} km/h`);
    },
    abrirMaletero: function() {
        console.log("Maletero abierto");
    }
};

console.log("\nCoche:", coche);
coche.acelerar();
coche.frenar();
coche.abrirMaletero();

// 5. Herencia con propiedades de índice
interface BaseDatos {
    [tabla: string]: any[] | Function;
    conectar(): boolean;
    desconectar(): void;
}

interface BaseDatosRelacional extends BaseDatos {
    ejecutarQuery(query: string): any[];
    crearTabla(nombre: string, columnas: string[]): void;
}

let baseDatos: BaseDatosRelacional = {
    usuarios: [],
    productos: [],
    
    conectar: function() {
        console.log("Conectando a la base de datos...");
        return true;
    },
    
    desconectar: function() {
        console.log("Desconectando de la base de datos...");
    },
    
    ejecutarQuery: function(query) {
        console.log(`Ejecutando query: ${query}`);
        return [];
    },
    
    crearTabla: function(nombre, columnas) {
        console.log(`Creando tabla ${nombre} con columnas: ${columnas.join(", ")}`);
        this[nombre] = [];
    }
};

console.log("\nBase de datos:", baseDatos);
baseDatos.conectar();
baseDatos.crearTabla("pedidos", ["id", "cliente", "fecha"]);
baseDatos.ejecutarQuery("SELECT * FROM usuarios");
baseDatos.desconectar();

// 6. Herencia con interfaces de diferentes tipos
interface VehiculoMotorizado {
    motor: string;
    combustible: string;
    encender(): void;
    apagar(): void;
}

interface VehiculoElectrico extends VehiculoMotorizado {
    bateria: number;
    cargar(): void;
    autonomia(): number;
}

let cocheElectrico: VehiculoElectrico = {
    motor: "Eléctrico",
    combustible: "Electricidad",
    bateria: 100,
    
    encender: function() {
        console.log("Coche eléctrico encendido");
    },
    
    apagar: function() {
        console.log("Coche eléctrico apagado");
    },
    
    cargar: function() {
        this.bateria = 100;
        console.log("Batería cargada al 100%");
    },
    
    autonomia: function() {
        return this.bateria * 5; // 5 km por porcentaje
    }
};

console.log("\nCoche eléctrico:", cocheElectrico);
cocheElectrico.encender();
cocheElectrico.cargar();
console.log("Autonomía:", cocheElectrico.autonomia(), "km");

// 7. Herencia con interfaces de función
interface FuncionBase {
    (parametro: any): any;
    version: string;
}

interface FuncionAvanzada extends FuncionBase {
    (parametro: any): any;
    configuracion: {
        timeout: number;
        reintentos: number;
    };
    ejecutarConReintentos(parametro: any): any;
}

function crearFuncionAvanzada(): FuncionAvanzada {
    let funcion = function(parametro: any): any {
        console.log(`Ejecutando función con parámetro: ${parametro}`);
        return parametro;
    } as FuncionAvanzada;
    
    funcion.version = "2.0";
    funcion.configuracion = {
        timeout: 5000,
        reintentos: 3
    };
    
    funcion.ejecutarConReintentos = function(parametro) {
        console.log(`Ejecutando con reintentos: ${this.configuracion.reintentos}`);
        return this(parametro);
    };
    
    return funcion;
}

let funcionAvanzada = crearFuncionAvanzada();
console.log("\nFunción avanzada:", funcionAvanzada);
console.log("Versión:", funcionAvanzada.version);
console.log("Configuración:", funcionAvanzada.configuracion);
funcionAvanzada("test");
funcionAvanzada.ejecutarConReintentos("test con reintentos");

// 8. Herencia con interfaces híbridas
interface ServicioBase {
    nombre: string;
    activo: boolean;
    iniciar(): void;
    detener(): void;
}

interface ServicioWeb extends ServicioBase {
    puerto: number;
    url: string;
    (request: string): string; // Call signature
    procesarRequest(request: string): string;
}

function crearServicioWeb(nombre: string, puerto: number): ServicioWeb {
    let servicio = function(request: string): string {
        return servicio.procesarRequest(request);
    } as ServicioWeb;
    
    servicio.nombre = nombre;
    servicio.activo = false;
    servicio.puerto = puerto;
    servicio.url = `http://localhost:${puerto}`;
    
    servicio.iniciar = function() {
        this.activo = true;
        console.log(`Servicio ${this.nombre} iniciado en puerto ${this.puerto}`);
    };
    
    servicio.detener = function() {
        this.activo = false;
        console.log(`Servicio ${this.nombre} detenido`);
    };
    
    servicio.procesarRequest = function(request) {
        if (!this.activo) {
            return "Servicio no disponible";
        }
        return `Procesando request: ${request}`;
    };
    
    return servicio;
}

let servidorWeb = crearServicioWeb("Mi Servidor", 3000);
console.log("\nServidor web:", servidorWeb);
servidorWeb.iniciar();
console.log("Respuesta:", servidorWeb("GET /api/users"));
servidorWeb.detener();
console.log("Respuesta:", servidorWeb("GET /api/users"));

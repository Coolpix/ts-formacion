// Ejemplos de herencia de clases en TypeScript

// 1. Clase base
class Animal {
    protected nombre: string;
    protected edad: number;
    protected especie: string;
    
    constructor(nombre: string, edad: number, especie: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }
    
    public hacerSonido(): void {
        console.log("El animal hace un sonido");
    }
    
    public moverse(): void {
        console.log("El animal se mueve");
    }
    
    public obtenerInfo(): string {
        return `${this.nombre} es un ${this.especie} de ${this.edad} años`;
    }
    
    protected envejecer(): void {
        this.edad++;
    }
    
    public cumplirAnios(): void {
        this.envejecer();
        console.log(`${this.nombre} ahora tiene ${this.edad} años`);
    }
}

// 2. Clase derivada - Perro
class Perro extends Animal {
    private raza: string;
    private entrenado: boolean;
    
    constructor(nombre: string, edad: number, raza: string, entrenado: boolean = false) {
        super(nombre, edad, "perro"); // Llamada al constructor de la clase base
        this.raza = raza;
        this.entrenado = entrenado;
    }
    
    // Sobrescribir método de la clase base
    public hacerSonido(): void {
        console.log("¡Guau! ¡Guau!");
    }
    
    // Método específico de la clase derivada
    public ladrar(): void {
        console.log("¡Guau!");
    }
    
    public morder(): void {
        console.log("¡El perro muerde!");
    }
    
    public entrenar(): void {
        this.entrenado = true;
        console.log(`${this.nombre} ha sido entrenado`);
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} de raza ${this.raza} y ${this.entrenado ? 'está entrenado' : 'no está entrenado'}`;
    }
    
    // Método que usa propiedades protegidas de la clase base
    public obtenerEdad(): number {
        return this.edad; // Acceso a propiedad protegida
    }
}

// 3. Clase derivada - Gato
class Gato extends Animal {
    private color: string;
    private cazador: boolean;
    
    constructor(nombre: string, edad: number, color: string, cazador: boolean = true) {
        super(nombre, edad, "gato");
        this.color = color;
        this.cazador = cazador;
    }
    
    // Sobrescribir método de la clase base
    public hacerSonido(): void {
        console.log("¡Miau! ¡Miau!");
    }
    
    // Método específico de la clase derivada
    public maullar(): void {
        console.log("¡Miau!");
    }
    
    public ronronear(): void {
        console.log("El gato está ronroneando...");
    }
    
    public cazar(): void {
        if (this.cazador) {
            console.log(`${this.nombre} está cazando`);
        } else {
            console.log(`${this.nombre} no es un cazador`);
        }
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} de color ${this.color} y ${this.cazador ? 'es cazador' : 'no es cazador'}`;
    }
}

// 4. Clase derivada - Pájaro
class Pajaro extends Animal {
    private tipoVuelo: string;
    private puedeVolar: boolean;
    
    constructor(nombre: string, edad: number, tipoVuelo: string, puedeVolar: boolean = true) {
        super(nombre, edad, "pájaro");
        this.tipoVuelo = tipoVuelo;
        this.puedeVolar = puedeVolar;
    }
    
    // Sobrescribir método de la clase base
    public hacerSonido(): void {
        console.log("¡Pío! ¡Pío!");
    }
    
    // Sobrescribir método de la clase base
    public moverse(): void {
        if (this.puedeVolar) {
            console.log(`${this.nombre} está volando`);
        } else {
            console.log(`${this.nombre} está caminando`);
        }
    }
    
    // Método específico de la clase derivada
    public volar(): void {
        if (this.puedeVolar) {
            console.log(`${this.nombre} está volando con ${this.tipoVuelo}`);
        } else {
            console.log(`${this.nombre} no puede volar`);
        }
    }
    
    public aterrizar(): void {
        console.log(`${this.nombre} ha aterrizado`);
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} con vuelo ${this.tipoVuelo} y ${this.puedeVolar ? 'puede volar' : 'no puede volar'}`;
    }
}

// 5. Clase abstracta
abstract class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected velocidad: number = 0;
    protected encendido: boolean = false;
    
    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    
    // Método concreto
    public encender(): void {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} encendido`);
    }
    
    public apagar(): void {
        this.encendido = false;
        this.velocidad = 0;
        console.log(`${this.marca} ${this.modelo} apagado`);
    }
    
    // Método abstracto - debe ser implementado por las clases derivadas
    abstract acelerar(): void;
    
    // Método abstracto
    abstract frenar(): void;
    
    // Método concreto
    public obtenerInfo(): string {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
    
    // Método concreto
    public obtenerVelocidad(): number {
        return this.velocidad;
    }
}

// 6. Clase concreta que extiende la clase abstracta
class Coche extends Vehiculo {
    private puertas: number;
    private combustible: number = 100;
    
    constructor(marca: string, modelo: string, año: number, puertas: number) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }
    
    // Implementación del método abstracto
    public acelerar(): void {
        if (this.encendido && this.combustible > 0) {
            this.velocidad += 20;
            this.combustible -= 2;
            console.log(`Coche acelerando. Velocidad: ${this.velocidad} km/h, Combustible: ${this.combustible}%`);
        } else {
            console.log("El coche no puede acelerar");
        }
    }
    
    // Implementación del método abstracto
    public frenar(): void {
        this.velocidad = Math.max(0, this.velocidad - 15);
        console.log(`Coche frenando. Velocidad: ${this.velocidad} km/h`);
    }
    
    // Método específico de la clase derivada
    public abrirMaletero(): void {
        console.log("Maletero abierto");
    }
    
    public repostar(): void {
        this.combustible = 100;
        console.log("Combustible repostado al 100%");
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} con ${this.puertas} puertas y ${this.combustible}% de combustible`;
    }
}

// 7. Clase concreta que extiende la clase abstracta
class Moto extends Vehiculo {
    private cilindrada: number;
    private casco: boolean = false;
    
    constructor(marca: string, modelo: string, año: number, cilindrada: number) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    
    // Implementación del método abstracto
    public acelerar(): void {
        if (this.encendido) {
            this.velocidad += 30;
            console.log(`Moto acelerando. Velocidad: ${this.velocidad} km/h`);
        } else {
            console.log("La moto no puede acelerar");
        }
    }
    
    // Implementación del método abstracto
    public frenar(): void {
        this.velocidad = Math.max(0, this.velocidad - 20);
        console.log(`Moto frenando. Velocidad: ${this.velocidad} km/h`);
    }
    
    // Método específico de la clase derivada
    public hacerCaballito(): void {
        if (this.velocidad > 20) {
            console.log("¡Haciendo caballito!");
        } else {
            console.log("Necesitas más velocidad para hacer caballito");
        }
    }
    
    public ponerseCasco(): void {
        this.casco = true;
        console.log("Casco puesto");
    }
    
    public quitarseCasco(): void {
        this.casco = false;
        console.log("Casco quitado");
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} de ${this.cilindrada}cc y ${this.casco ? 'con casco' : 'sin casco'}`;
    }
}

// 8. Herencia múltiple simulada con interfaces
interface Volador {
    volar(): void;
    aterrizar(): void;
}

interface Nadador {
    nadar(): void;
    sumergirse(): void;
}

class Pato extends Animal implements Volador, Nadador {
    private color: string;
    
    constructor(nombre: string, edad: number, color: string) {
        super(nombre, edad, "pato");
        this.color = color;
    }
    
    // Sobrescribir método de la clase base
    public hacerSonido(): void {
        console.log("¡Cuac! ¡Cuac!");
    }
    
    // Implementación de la interface Volador
    public volar(): void {
        console.log(`${this.nombre} está volando`);
    }
    
    public aterrizar(): void {
        console.log(`${this.nombre} ha aterrizado`);
    }
    
    // Implementación de la interface Nadador
    public nadar(): void {
        console.log(`${this.nombre} está nadando`);
    }
    
    public sumergirse(): void {
        console.log(`${this.nombre} se ha sumergido`);
    }
    
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} de color ${this.color}`;
    }
}

// Ejemplos de uso
console.log("=== HERENCIA DE CLASES ===\n");

// Crear instancias de las clases derivadas
let perro = new Perro("Max", 3, "Labrador", false);
let gato = new Gato("Mimi", 2, "negro", true);
let pajaro = new Pajaro("Piolín", 1, "rápido", true);
let pato = new Pato("Donald", 4, "blanco");

// Probar métodos heredados y sobrescritos
console.log("=== ANIMALES ===");
console.log(perro.obtenerInfoCompleta());
perro.hacerSonido(); // Sobrescrito
perro.ladrar(); // Específico
perro.entrenar();
console.log(perro.obtenerInfoCompleta());

console.log("\n" + gato.obtenerInfoCompleta());
gato.hacerSonido(); // Sobrescrito
gato.maullar(); // Específico
gato.ronronear(); // Específico
gato.cazar();

console.log("\n" + pajaro.obtenerInfoCompleta());
pajaro.hacerSonido(); // Sobrescrito
pajaro.moverse(); // Sobrescrito
pajaro.volar(); // Específico
pajaro.aterrizar(); // Específico

console.log("\n" + pato.obtenerInfoCompleta());
pato.hacerSonido(); // Sobrescrito
pato.volar(); // Interface Volador
pato.nadar(); // Interface Nadador
pato.aterrizar(); // Interface Volador
pato.sumergirse(); // Interface Nadador

// Probar herencia con clases abstractas
console.log("\n=== VEHÍCULOS ===");
let coche = new Coche("Toyota", "Corolla", 2023, 4);
let moto = new Moto("Honda", "CBR", 2023, 600);

console.log(coche.obtenerInfoCompleta());
coche.encender();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche.abrirMaletero();
coche.repostar();

console.log("\n" + moto.obtenerInfoCompleta());
moto.encender();
moto.acelerar();
moto.acelerar();
moto.hacerCaballito();
moto.ponerseCasco();
moto.frenar();

// Probar métodos protegidos
console.log("\n=== MÉTODOS PROTEGIDOS ===");
console.log("Edad del perro:", perro.obtenerEdad());
perro.cumplirAnios(); // Usa método protegido envejecer()
console.log("Edad del perro después:", perro.obtenerEdad());

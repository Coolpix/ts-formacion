// ========================================
// EJERCICIOS - INTERFACES EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Interfaces básicas
// ========================================
// Crea una interfaz 'Producto' con las siguientes propiedades:
// - id (number)
// - nombre (string)
// - precio (number)
// - descripcion (string)
// - enStock (boolean)
// Crea un objeto que implemente esta interfaz

// TODO: Escribe tu código aquí
// interface Producto {
//     // Tu código aquí
// }

// let producto: Producto = 

// EJERCICIO 2: Propiedades opcionales
// ========================================
// Crea una interfaz 'Usuario' con las siguientes propiedades:
// - id (number, readonly)
// - nombre (string)
// - email (string)
// - telefono (string, opcional)
// - fechaNacimiento (Date, opcional)
// - direccion (objeto con calle, ciudad, codigoPostal, opcional)
// Crea objetos con diferentes combinaciones de propiedades

// TODO: Escribe tu código aquí
// interface Usuario {
//     // Tu código aquí
// }

// let usuarioBasico: Usuario = 
// let usuarioCompleto: Usuario = 

// EJERCICIO 3: Propiedades de función
// ========================================
// Crea una interfaz 'Calculadora' con los siguientes métodos:
// - sumar(a: number, b: number): number
// - restar(a: number, b: number): number
// - multiplicar(a: number, b: number): number
// - dividir(a: number, b: number): number
// Crea un objeto que implemente esta interfaz

// TODO: Escribe tu código aquí
// interface Calculadora {
//     // Tu código aquí
// }

// let calculadora: Calculadora = 

// EJERCICIO 4: Propiedades indexables
// ========================================
// Crea una interfaz 'Diccionario' que permita:
// - Claves de tipo string
// - Valores de tipo string
// Crea una interfaz 'Numeros' que permita:
// - Claves de tipo number
// - Valores de tipo string
// Crea objetos que usen estas interfaces

// TODO: Escribe tu código aquí
// interface Diccionario {
//     // Tu código aquí
// }

// interface Numeros {
//     // Tu código aquí
// }

// let diccionario: Diccionario = 
// let numeros: Numeros = 

// EJERCICIO 5: Extensión de interfaces
// ========================================
// Crea una interfaz 'Persona' con:
// - nombre (string)
// - edad (number)
// Crea una interfaz 'Empleado' que extienda 'Persona' con:
// - id (number)
// - salario (number)
// - departamento (string)
// Crea una interfaz 'Gerente' que extienda 'Empleado' con:
// - equipo (string[])
// - presupuesto (number)

// TODO: Escribe tu código aquí
// interface Persona {
//     // Tu código aquí
// }

// interface Empleado extends Persona {
//     // Tu código aquí
// }

// interface Gerente extends Empleado {
//     // Tu código aquí
// }

// EJERCICIO 6: Múltiples extensiones
// ========================================
// Crea interfaces 'Volador' y 'Nadador' con métodos correspondientes
// Crea una interfaz 'Pajaro' que extienda ambas
// Crea una interfaz 'Pato' que extienda ambas
// Crea clases que implementen estas interfaces

// TODO: Escribe tu código aquí
// interface Volador {
//     // Tu código aquí
// }

// interface Nadador {
//     // Tu código aquí
// }

// interface Pajaro extends Volador, Nadador {
//     // Tu código aquí
// }

// interface Pato extends Volador, Nadador {
//     // Tu código aquí
// }

// class PajaroImpl implements Pajaro {
//     // Tu código aquí
// }

// class PatoImpl implements Pato {
//     // Tu código aquí
// }

// EJERCICIO 7: Interfaces con generics
// ========================================
// Crea una interfaz 'Contenedor<T>' con:
// - valor (T)
// - obtenerValor(): T
// - establecerValor(valor: T): void
// Crea una clase que implemente esta interfaz
// Crea instancias con diferentes tipos

// TODO: Escribe tu código aquí
// interface Contenedor<T> {
//     // Tu código aquí
// }

// class Caja<T> implements Contenedor<T> {
//     // Tu código aquí
// }

// EJERCICIO 8: Interfaces para funciones
// ========================================
// Crea interfaces para:
// - Comparador<T>: función que recibe dos parámetros T y retorna number
// - EventHandler: función que recibe un Event y no retorna nada
// - Transformador<T, U>: función que recibe T y retorna U
// Crea variables que usen estas interfaces

// TODO: Escribe tu código aquí
// interface Comparador<T> {
//     // Tu código aquí
// }

// interface EventHandler {
//     // Tu código aquí
// }

// interface Transformador<T, U> {
//     // Tu código aquí
// }

// let compararNumeros: Comparador<number> = 
// let manejadorClick: EventHandler = 
// let convertirAString: Transformador<number, string> = 

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Interfaces básicas
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    enStock: boolean;
}

let producto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    descripcion: "Laptop de alta gama",
    enStock: true
};

console.log("1. Interfaces básicas:");
console.log("Producto:", producto);

// SOLUCIÓN 2: Propiedades opcionales
interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
    telefono?: string;
    fechaNacimiento?: Date;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
}

let usuarioBasico: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@email.com"
};

let usuarioCompleto: Usuario = {
    id: 2,
    nombre: "Luis",
    email: "luis@email.com",
    telefono: "123-456-789",
    fechaNacimiento: new Date("1990-01-01"),
    direccion: {
        calle: "Calle Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    }
};

console.log("\n2. Propiedades opcionales:");
console.log("Usuario básico:", usuarioBasico);
console.log("Usuario completo:", usuarioCompleto);

// SOLUCIÓN 3: Propiedades de función
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log("\n3. Propiedades de función:");
console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(5, 3));
console.log("Multiplicación:", calculadora.multiplicar(5, 3));
console.log("División:", calculadora.dividir(5, 3));

// SOLUCIÓN 4: Propiedades indexables
interface Diccionario {
    [key: string]: string;
}

interface Numeros {
    [index: number]: string;
}

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

console.log("\n4. Propiedades indexables:");
console.log("Diccionario:", diccionario);
console.log("Números:", numeros);

// SOLUCIÓN 5: Extensión de interfaces
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

console.log("\n5. Extensión de interfaces:");
console.log("Empleado:", empleado);
console.log("Gerente:", gerente);

// SOLUCIÓN 6: Múltiples extensiones
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

class PajaroImpl implements Pajaro {
    volar(): void {
        console.log("El pájaro vuela");
    }
    
    nadar(): void {
        console.log("El pájaro nada");
    }
    
    cantar(): void {
        console.log("El pájaro canta");
    }
}

class PatoImpl implements Pato {
    volar(): void {
        console.log("El pato vuela");
    }
    
    nadar(): void {
        console.log("El pato nada");
    }
    
    caminar(): void {
        console.log("El pato camina");
    }
}

console.log("\n6. Múltiples extensiones:");
let pajaro = new PajaroImpl();
let pato = new PatoImpl();

pajaro.volar();
pajaro.nadar();
pajaro.cantar();

pato.volar();
pato.nadar();
pato.caminar();

// SOLUCIÓN 7: Interfaces con generics
interface Contenedor<T> {
    valor: T;
    obtenerValor(): T;
    establecerValor(valor: T): void;
}

class Caja<T> implements Contenedor<T> {
    constructor(public valor: T) {}
    
    obtenerValor(): T {
        return this.valor;
    }
    
    establecerValor(valor: T): void {
        this.valor = valor;
    }
}

let cajaString = new Caja<string>("Hola");
let cajaNumber = new Caja<number>(42);

console.log("\n7. Interfaces con generics:");
console.log("Caja string:", cajaString.obtenerValor());
console.log("Caja number:", cajaNumber.obtenerValor());

// SOLUCIÓN 8: Interfaces para funciones
interface Comparador<T> {
    (a: T, b: T): number;
}

interface EventHandler {
    (event: Event): void;
}

interface Transformador<T, U> {
    (valor: T): U;
}

let compararNumeros: Comparador<number> = (a, b) => a - b;
let manejadorClick: EventHandler = (event) => {
    console.log("Click detectado");
};
let convertirAString: Transformador<number, string> = (num) => num.toString();

console.log("\n8. Interfaces para funciones:");
console.log("Comparar 10 y 5:", compararNumeros(10, 5));
console.log("Convertir 42 a string:", convertirAString(42));

console.log("\n¡Ejercicios de Interfaces completados!");

// Ejemplos de interfaces básicas en TypeScript

// 1. Interface básica con propiedades obligatorias
interface Usuario {
    nombre: string;
    edad: number;
    email: string;
}

let usuario: Usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    email: "juan@email.com"
};

console.log("Usuario:", usuario);

// 2. Interface con propiedades opcionales
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;  // Opcional
    categoria?: string;    // Opcional
}

let producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99
    // descripcion y categoria son opcionales
};

let producto2: Producto = {
    id: 2,
    nombre: "Mouse",
    precio: 25.99,
    descripcion: "Mouse inalámbrico",
    categoria: "Accesorios"
};

console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);

// 3. Interface con propiedades de solo lectura
interface Configuracion {
    readonly id: number;
    readonly nombre: string;
    activo: boolean;
    valor: number;
}

let config: Configuracion = {
    id: 1,
    nombre: "Configuración Principal",
    activo: true,
    valor: 100
};

// config.id = 2;        // ❌ Error: Cannot assign to 'id' because it is a read-only property
// config.nombre = "Otro"; // ❌ Error: Cannot assign to 'nombre' because it is a read-only property
config.activo = false;     // ✅ Correcto
config.valor = 200;        // ✅ Correcto

console.log("Configuración:", config);

// 4. Interface con propiedades de índice
interface Diccionario {
    [key: string]: string;
}

let diccionario: Diccionario = {
    "hola": "hello",
    "adios": "goodbye",
    "gracias": "thank you",
    "por favor": "please"
};

console.log("Diccionario:", diccionario);
console.log("Traducción de 'hola':", diccionario["hola"]);

// 5. Interface con propiedades de índice numérico
interface ArrayNumerico {
    [index: number]: number;
}

let arrayNumerico: ArrayNumerico = [1, 2, 3, 4, 5];
console.log("Array numérico:", arrayNumerico);

// 6. Interface con métodos
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
    dividir: (a, b) => b !== 0 ? a / b : 0
};

console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(10, 4));
console.log("Multiplicación:", calculadora.multiplicar(6, 7));
console.log("División:", calculadora.dividir(15, 3));

// 7. Interface con métodos opcionales
interface Reproductor {
    reproducir(): void;
    pausar(): void;
    detener(): void;
    siguiente?(): void;    // Opcional
    anterior?(): void;     // Opcional
}

let reproductor: Reproductor = {
    reproducir: () => console.log("Reproduciendo..."),
    pausar: () => console.log("Pausado"),
    detener: () => console.log("Detenido"),
    siguiente: () => console.log("Siguiente canción"),
    anterior: () => console.log("Canción anterior")
};

reproductor.reproducir();
reproductor.siguiente?.(); // Uso del optional chaining

// 8. Interface con métodos que devuelven diferentes tipos
interface ProcesadorDatos {
    procesarTexto(texto: string): string;
    procesarNumero(numero: number): number;
    procesarArray(array: any[]): any[];
}

let procesador: ProcesadorDatos = {
    procesarTexto: (texto) => texto.toUpperCase(),
    procesarNumero: (numero) => numero * 2,
    procesarArray: (array) => array.filter(item => item !== null)
};

console.log("Texto procesado:", procesador.procesarTexto("hola mundo"));
console.log("Número procesado:", procesador.procesarNumero(5));
console.log("Array procesado:", procesador.procesarArray([1, null, 3, null, 5]));

// 9. Interface con propiedades y métodos complejos
interface UsuarioCompleto {
    // Propiedades básicas
    id: number;
    nombre: string;
    email: string;
    fechaRegistro: Date;
    
    // Propiedades opcionales
    telefono?: string;
    direccion?: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
    };
    
    // Métodos
    obtenerEdad(): number;
    actualizarPerfil(datos: Partial<UsuarioCompleto>): void;
    esActivo(): boolean;
}

let usuarioCompleto: UsuarioCompleto = {
    id: 1,
    nombre: "María García",
    email: "maria@email.com",
    fechaRegistro: new Date("2023-01-15"),
    telefono: "+34 123 456 789",
    direccion: {
        calle: "Calle Mayor 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    },
    
    obtenerEdad: function() {
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaRegistro.getFullYear();
        return edad;
    },
    
    actualizarPerfil: function(datos) {
        Object.assign(this, datos);
    },
    
    esActivo: function() {
        const hoy = new Date();
        const diasRegistrado = Math.floor((hoy.getTime() - this.fechaRegistro.getTime()) / (1000 * 60 * 60 * 24));
        return diasRegistrado > 30; // Activo si lleva más de 30 días registrado
    }
};

console.log("Usuario completo:", usuarioCompleto);
console.log("Edad del usuario:", usuarioCompleto.obtenerEdad());
console.log("¿Es activo?:", usuarioCompleto.esActivo());

// 10. Interface con propiedades de índice y métodos
interface Inventario {
    [productoId: string]: {
        nombre: string;
        cantidad: number;
        precio: number;
    } | Function;
    
    agregarProducto(id: string, nombre: string, cantidad: number, precio: number): void;
    obtenerProducto(id: string): any;
    actualizarCantidad(id: string, cantidad: number): void;
}

let inventario: Inventario = {
    agregarProducto: function(id, nombre, cantidad, precio) {
        this[id] = { nombre, cantidad, precio };
    },
    
    obtenerProducto: function(id) {
        return this[id] || null;
    },
    
    actualizarCantidad: function(id, cantidad) {
        if (this[id]) {
            this[id].cantidad = cantidad;
        }
    }
};

// Agregar productos
inventario.agregarProducto("P001", "Laptop", 10, 999.99);
inventario.agregarProducto("P002", "Mouse", 50, 25.99);

console.log("Inventario:", inventario);
console.log("Producto P001:", inventario.obtenerProducto("P001"));

// Actualizar cantidad
inventario.actualizarCantidad("P001", 8);
console.log("Producto P001 actualizado:", inventario.obtenerProducto("P001"));

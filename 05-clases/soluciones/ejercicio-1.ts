// Solución del Ejercicio 1: Clases Básicas

// 1. Clase Usuario
class Usuario {
    // Propiedades
    readonly id: number;
    readonly fechaRegistro: Date;
    private _nombre: string;
    private _email: string;
    
    // Constructor
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.fechaRegistro = new Date();
        this._nombre = nombre;
        this._email = email;
    }
    
    // Getters y setters con validación
    get nombre(): string {
        return this._nombre;
    }
    
    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this._nombre = nuevoNombre;
    }
    
    get email(): string {
        return this._email;
    }
    
    set email(nuevoEmail: string) {
        if (!this.validarEmail(nuevoEmail)) {
            throw new Error("Email inválido");
        }
        this._email = nuevoEmail;
    }
    
    // Métodos
    public obtenerInfo(): string {
        return `ID: ${this.id}, Nombre: ${this._nombre}, Email: ${this._email}, Registro: ${this.fechaRegistro.toLocaleDateString()}`;
    }
    
    public actualizarEmail(nuevoEmail: string): void {
        this.email = nuevoEmail; // Usa el setter con validación
    }
    
    public esValido(): boolean {
        return this._nombre.length >= 2 && this.validarEmail(this._email);
    }
    
    private validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// 2. Clase Producto
class Producto {
    // Propiedades estáticas
    static version: string = "1.0.0";
    static contador: number = 0;
    
    // Propiedades de instancia
    readonly id: string;
    public nombre: string;
    private _precio: number;
    private _stock: number;
    public categoria: string;
    
    // Constructor
    constructor(nombre: string, precio: number, categoria: string) {
        this.id = Producto.generarId();
        this.nombre = nombre;
        this._precio = precio;
        this._stock = 0;
        this.categoria = categoria;
    }
    
    // Método estático
    static generarId(): string {
        this.contador++;
        return `PROD_${this.contador}_${Date.now()}`;
    }
    
    // Getters y setters
    get precio(): number {
        return this._precio;
    }
    
    set precio(nuevoPrecio: number) {
        if (nuevoPrecio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this._precio = nuevoPrecio;
    }
    
    get stock(): number {
        return this._stock;
    }
    
    set stock(nuevoStock: number) {
        if (nuevoStock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
        this._stock = nuevoStock;
    }
    
    // Métodos
    public actualizarPrecio(nuevoPrecio: number): void {
        this.precio = nuevoPrecio; // Usa el setter con validación
    }
    
    public actualizarStock(nuevoStock: number): void {
        this.stock = nuevoStock; // Usa el setter con validación
    }
    
    public estaDisponible(): boolean {
        return this._stock > 0;
    }
    
    public obtenerInfo(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this._precio}, Stock: ${this._stock}, Categoría: ${this.categoria}`;
    }
    
    public vender(cantidad: number): boolean {
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser positiva");
        }
        if (cantidad > this._stock) {
            return false; // No hay suficiente stock
        }
        this._stock -= cantidad;
        return true;
    }
    
    public reponer(cantidad: number): void {
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser positiva");
        }
        this._stock += cantidad;
    }
}

// 3. Clase Calculadora
class Calculadora {
    // Propiedades privadas
    private historial: { operacion: string; resultado: number; timestamp: Date }[] = [];
    private resultado: number = 0;
    
    // Constructor
    constructor() {
        console.log("Calculadora inicializada");
    }
    
    // Métodos públicos
    public sumar(a: number, b: number): number {
        const resultado = a + b;
        this.agregarAlHistorial("suma", resultado);
        this.resultado = resultado;
        return resultado;
    }
    
    public restar(a: number, b: number): number {
        const resultado = a - b;
        this.agregarAlHistorial("resta", resultado);
        this.resultado = resultado;
        return resultado;
    }
    
    public multiplicar(a: number, b: number): number {
        const resultado = a * b;
        this.agregarAlHistorial("multiplicación", resultado);
        this.resultado = resultado;
        return resultado;
    }
    
    public dividir(a: number, b: number): number {
        if (!this.validarDivision(b)) {
            throw new Error("División por cero no permitida");
        }
        const resultado = a / b;
        this.agregarAlHistorial("división", resultado);
        this.resultado = resultado;
        return resultado;
    }
    
    public obtenerHistorial(): { operacion: string; resultado: number; timestamp: Date }[] {
        return [...this.historial];
    }
    
    public limpiarHistorial(): void {
        this.historial = [];
        this.resultado = 0;
        console.log("Historial limpiado");
    }
    
    public obtenerResultado(): number {
        return this.resultado;
    }
    
    public obtenerUltimaOperacion(): { operacion: string; resultado: number; timestamp: Date } | undefined {
        return this.historial[this.historial.length - 1];
    }
    
    // Métodos privados
    private agregarAlHistorial(operacion: string, resultado: number): void {
        this.historial.push({
            operacion,
            resultado,
            timestamp: new Date()
        });
    }
    
    private validarDivision(divisor: number): boolean {
        return divisor !== 0;
    }
}

// Ejemplos de uso
console.log("=== CLASES BÁSICAS ===\n");

// 1. Uso de la clase Usuario
console.log("=== CLASE USUARIO ===");
let usuario1 = new Usuario("Juan Pérez", "juan@email.com");
console.log("Usuario creado:", usuario1.obtenerInfo());
console.log("¿Es válido?:", usuario1.esValido());

// Usar getters y setters
console.log("Nombre actual:", usuario1.nombre);
usuario1.nombre = "Juan Carlos Pérez";
console.log("Nombre actualizado:", usuario1.nombre);

console.log("Email actual:", usuario1.email);
usuario1.actualizarEmail("juan.carlos@email.com");
console.log("Email actualizado:", usuario1.email);

// Probar validaciones
try {
    usuario1.nombre = "A"; // Error: nombre muy corto
} catch (error) {
    console.log("Error al establecer nombre:", error.message);
}

try {
    usuario1.email = "email-invalido"; // Error: email inválido
} catch (error) {
    console.log("Error al establecer email:", error.message);
}

// 2. Uso de la clase Producto
console.log("\n=== CLASE PRODUCTO ===");
let producto1 = new Producto("Laptop Gaming", 999.99, "Electrónicos");
let producto2 = new Producto("Mouse Inalámbrico", 25.99, "Accesorios");

console.log("Producto 1:", producto1.obtenerInfo());
console.log("Producto 2:", producto2.obtenerInfo());

// Usar propiedades estáticas
console.log("Versión del producto:", Producto.version);
console.log("Contador de productos:", Producto.contador);

// Usar getters y setters
console.log("Precio actual:", producto1.precio);
producto1.actualizarPrecio(899.99);
console.log("Precio actualizado:", producto1.precio);

console.log("Stock actual:", producto1.stock);
producto1.reponer(10);
console.log("Stock después de reponer:", producto1.stock);
console.log("¿Está disponible?:", producto1.estaDisponible());

// Probar venta
let ventaExitosa = producto1.vender(3);
console.log("Venta de 3 unidades:", ventaExitosa ? "Exitosa" : "Fallida");
console.log("Stock después de venta:", producto1.stock);

// Probar validaciones
try {
    producto1.precio = -100; // Error: precio negativo
} catch (error) {
    console.log("Error al establecer precio:", error.message);
}

try {
    producto1.stock = -5; // Error: stock negativo
} catch (error) {
    console.log("Error al establecer stock:", error.message);
}

// 3. Uso de la clase Calculadora
console.log("\n=== CLASE CALCULADORA ===");
let calculadora = new Calculadora();

// Realizar operaciones
console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(10, 4));
console.log("Multiplicación:", calculadora.multiplicar(6, 7));
console.log("División:", calculadora.dividir(15, 3));

// Obtener información
console.log("Resultado actual:", calculadora.obtenerResultado());
console.log("Última operación:", calculadora.obtenerUltimaOperacion());

// Mostrar historial
console.log("Historial completo:");
calculadora.obtenerHistorial().forEach((entrada, index) => {
    console.log(`${index + 1}. ${entrada.operacion}: ${entrada.resultado} (${entrada.timestamp.toLocaleTimeString()})`);
});

// Probar división por cero
try {
    calculadora.dividir(10, 0); // Error: división por cero
} catch (error) {
    console.log("Error en división:", error.message);
}

// Limpiar historial
calculadora.limpiarHistorial();
console.log("Historial después de limpiar:", calculadora.obtenerHistorial().length);

// 4. Crear múltiples instancias
console.log("\n=== MÚLTIPLES INSTANCIAS ===");
let usuarios: Usuario[] = [
    new Usuario("Ana García", "ana@email.com"),
    new Usuario("Carlos López", "carlos@email.com"),
    new Usuario("María Rodríguez", "maria@email.com")
];

let productos: Producto[] = [
    new Producto("Teclado Mecánico", 89.99, "Accesorios"),
    new Producto("Monitor 4K", 299.99, "Electrónicos"),
    new Producto("Auriculares", 149.99, "Audio")
];

console.log("Usuarios creados:");
usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. ${usuario.obtenerInfo()}`);
});

console.log("\nProductos creados:");
productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.obtenerInfo()}`);
});

console.log("\nContador final de productos:", Producto.contador);

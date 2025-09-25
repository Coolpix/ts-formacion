// ========================================
// EJEMPLOS - CLASES EN TYPESCRIPT
// ========================================

// 1. SINTAXIS BÁSICA
// ========================================

class Usuario {
    nombre: string;
    email: string;
    activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
    
    desactivar(): void {
        this.activo = false;
    }
}

let usuario = new Usuario("Juan", "juan@email.com");
console.log("=== SINTAXIS BÁSICA ===");
console.log("Usuario:", usuario);
console.log("Saludo:", usuario.saludar());
console.log("Activo:", usuario.activo);

usuario.desactivar();
console.log("Desactivado:", usuario.activo);

// 2. MODIFICADORES DE ACCESO - PUBLIC
// ========================================

class Usuario {
    public nombre: string;
    public email: string;
    public activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
    
    public desactivar(): void {
        this.activo = false;
    }
}

let usuario = new Usuario("María", "maria@email.com");
console.log("\n=== MODIFICADORES DE ACCESO - PUBLIC ===");
console.log("Usuario:", usuario);
console.log("Nombre:", usuario.nombre);
console.log("Email:", usuario.email);
console.log("Activo:", usuario.activo);

// 3. MODIFICADORES DE ACCESO - PRIVATE
// ========================================

class Usuario {
    private id: number;
    public nombre: string;
    public email: string;
    public activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    public obtenerId(): number {
        return this.id; // Solo se puede acceder desde dentro de la clase
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre} (ID: ${this.id})`;
    }
}

let usuario = new Usuario("Pedro", "pedro@email.com");
console.log("\n=== MODIFICADORES DE ACCESO - PRIVATE ===");
console.log("Usuario:", usuario);
console.log("ID:", usuario.obtenerId());
console.log("Saludo:", usuario.saludar());
// console.log(usuario.id); // ❌ Error: no se puede acceder a propiedades privadas

// 4. MODIFICADORES DE ACCESO - PROTECTED
// ========================================

class Persona {
    protected nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
}

class Usuario extends Persona {
    private id: number;
    private activo: boolean;
    
    constructor(nombre: string, email: string) {
        super(nombre, email);
        this.id = Math.floor(Math.random() * 1000);
        this.activo = true;
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}`; // Puede acceder a propiedades protected
    }
    
    public desactivar(): void {
        this.activo = false;
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
}

let usuario = new Usuario("Ana", "ana@email.com");
console.log("\n=== MODIFICADORES DE ACCESO - PROTECTED ===");
console.log("Usuario:", usuario);
console.log("ID:", usuario.obtenerId());
console.log("Información:", usuario.obtenerInformacion());
console.log("Activo:", usuario.estaActivo());

// 5. PROPIEDADES DE SOLO LECTURA
// ========================================

class Usuario {
    readonly id: number;
    public nombre: string;
    public email: string;
    public activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre} (ID: ${this.id})`;
    }
}

let usuario = new Usuario("Luis", "luis@email.com");
console.log("\n=== PROPIEDADES DE SOLO LECTURA ===");
console.log("Usuario:", usuario);
console.log("ID:", usuario.obtenerId());
console.log("Saludo:", usuario.saludar());
// usuario.id = 123; // ❌ Error: no se puede modificar

// 6. PROPIEDADES ESTÁTICAS
// ========================================

class Usuario {
    static contador: number = 0;
    public nombre: string;
    public email: string;
    public activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
        Usuario.contador++;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
    
    public static obtenerContador(): number {
        return Usuario.contador;
    }
}

let usuario1 = new Usuario("Carlos", "carlos@email.com");
let usuario2 = new Usuario("Elena", "elena@email.com");
let usuario3 = new Usuario("Roberto", "roberto@email.com");

console.log("\n=== PROPIEDADES ESTÁTICAS ===");
console.log("Contador:", Usuario.obtenerContador());
console.log("Usuario 1:", usuario1.saludar());
console.log("Usuario 2:", usuario2.saludar());
console.log("Usuario 3:", usuario3.saludar());

// 7. MÉTODOS ESTÁTICOS
// ========================================

class Utilidades {
    static formatearFecha(fecha: Date): string {
        return fecha.toLocaleDateString();
    }
    
    static generarId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
    
    static validarEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    static formatearMoneda(cantidad: number, moneda: string = "EUR"): string {
        return new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: moneda
        }).format(cantidad);
    }
}

console.log("\n=== MÉTODOS ESTÁTICOS ===");
console.log("Fecha formateada:", Utilidades.formatearFecha(new Date()));
console.log("ID generado:", Utilidades.generarId());
console.log("Email válido:", Utilidades.validarEmail("test@email.com"));
console.log("Email inválido:", Utilidades.validarEmail("email-invalido"));
console.log("Moneda formateada:", Utilidades.formatearMoneda(99.99));

// 8. HERENCIA
// ========================================

class Persona {
    protected nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
    
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

class Usuario extends Persona {
    private id: number;
    private activo: boolean;
    
    constructor(nombre: string, email: string) {
        super(nombre, email);
        this.id = Math.floor(Math.random() * 1000);
        this.activo = true;
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public desactivar(): void {
        this.activo = false;
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, ${super.obtenerInformacion()}, Activo: ${this.activo}`;
    }
}

class Admin extends Usuario {
    private permisos: string[];
    
    constructor(nombre: string, email: string, permisos: string[]) {
        super(nombre, email);
        this.permisos = permisos;
    }
    
    public obtenerPermisos(): string[] {
        return [...this.permisos];
    }
    
    public tienePermiso(permiso: string): boolean {
        return this.permisos.includes(permiso);
    }
    
    public agregarPermiso(permiso: string): void {
        if (!this.permisos.includes(permiso)) {
            this.permisos.push(permiso);
        }
    }
    
    public eliminarPermiso(permiso: string): void {
        const index = this.permisos.indexOf(permiso);
        if (index > -1) {
            this.permisos.splice(index, 1);
        }
    }
    
    public obtenerInformacion(): string {
        return `${super.obtenerInformacion()}, Permisos: ${this.permisos.join(", ")}`;
    }
}

let persona = new Persona("Persona", "persona@email.com");
let usuario = new Usuario("Usuario", "usuario@email.com");
let admin = new Admin("Admin", "admin@email.com", ["leer", "escribir"]);

console.log("\n=== HERENCIA ===");
console.log("Persona:", persona.obtenerInformacion());
console.log("Usuario:", usuario.obtenerInformacion());
console.log("Admin:", admin.obtenerInformacion());

console.log("Admin permisos:", admin.obtenerPermisos());
console.log("Admin tiene permiso 'leer':", admin.tienePermiso("leer"));
console.log("Admin tiene permiso 'eliminar':", admin.tienePermiso("eliminar"));

admin.agregarPermiso("eliminar");
console.log("Admin permisos después de agregar:", admin.obtenerPermisos());

admin.eliminarPermiso("escribir");
console.log("Admin permisos después de eliminar:", admin.obtenerPermisos());

// 9. MÉTODOS ABSTRACTOS
// ========================================

abstract class Forma {
    protected color: string;
    
    constructor(color: string) {
        this.color = color;
    }
    
    public abstract calcularArea(): number;
    public abstract calcularPerimetro(): number;
    
    public obtenerColor(): string {
        return this.color;
    }
    
    public cambiarColor(nuevoColor: string): void {
        this.color = nuevoColor;
    }
}

class Circulo extends Forma {
    private radio: number;
    
    constructor(color: string, radio: number) {
        super(color);
        this.radio = radio;
    }
    
    public calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
    
    public calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
    
    public obtenerRadio(): number {
        return this.radio;
    }
    
    public cambiarRadio(nuevoRadio: number): void {
        if (nuevoRadio > 0) {
            this.radio = nuevoRadio;
        }
    }
}

class Rectangulo extends Forma {
    private ancho: number;
    private alto: number;
    
    constructor(color: string, ancho: number, alto: number) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }
    
    public calcularArea(): number {
        return this.ancho * this.alto;
    }
    
    public calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
    
    public obtenerAncho(): number {
        return this.ancho;
    }
    
    public obtenerAlto(): number {
        return this.alto;
    }
    
    public cambiarDimensiones(nuevoAncho: number, nuevoAlto: number): void {
        if (nuevoAncho > 0 && nuevoAlto > 0) {
            this.ancho = nuevoAncho;
            this.alto = nuevoAlto;
        }
    }
}

let circulo = new Circulo("rojo", 5);
let rectangulo = new Rectangulo("azul", 10, 8);

console.log("\n=== MÉTODOS ABSTRACTOS ===");
console.log("Círculo - Color:", circulo.obtenerColor());
console.log("Círculo - Radio:", circulo.obtenerRadio());
console.log("Círculo - Área:", circulo.calcularArea());
console.log("Círculo - Perímetro:", circulo.calcularPerimetro());

console.log("Rectángulo - Color:", rectangulo.obtenerColor());
console.log("Rectángulo - Ancho:", rectangulo.obtenerAncho());
console.log("Rectángulo - Alto:", rectangulo.obtenerAlto());
console.log("Rectángulo - Área:", rectangulo.calcularArea());
console.log("Rectángulo - Perímetro:", rectangulo.calcularPerimetro());

// 10. INTERFACES CON CLASES
// ========================================

interface IUsuario {
    id: number;
    nombre: string;
    email: string;
    saludar(): string;
    actualizarNombre(nuevoNombre: string): void;
    obtenerInformacion(): string;
}

class Usuario implements IUsuario {
    public id: number;
    public nombre: string;
    public email: string;
    private activo: boolean;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.activo = true;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
    
    public actualizarNombre(nuevoNombre: string): void {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this.nombre = nuevoNombre;
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Activo: ${this.activo}`;
    }
    
    public desactivar(): void {
        this.activo = false;
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
}

let usuario = new Usuario("Sofia", "sofia@email.com");
console.log("\n=== INTERFACES CON CLASES ===");
console.log("Usuario:", usuario.obtenerInformacion());
console.log("Saludo:", usuario.saludar());

usuario.actualizarNombre("Sofia Actualizada");
console.log("Nombre actualizado:", usuario.nombre);

// 11. GETTERS Y SETTERS
// ========================================

class Usuario {
    private _nombre: string;
    private _email: string;
    private _activo: boolean;
    private _edad: number;
    
    constructor(nombre: string, email: string, edad: number) {
        this._nombre = nombre;
        this._email = email;
        this._activo = true;
        this._edad = edad;
    }
    
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
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoEmail)) {
            throw new Error("Email inválido");
        }
        this._email = nuevoEmail;
    }
    
    get activo(): boolean {
        return this._activo;
    }
    
    set activo(nuevoEstado: boolean) {
        this._activo = nuevoEstado;
    }
    
    get edad(): number {
        return this._edad;
    }
    
    set edad(nuevaEdad: number) {
        if (nuevaEdad < 0 || nuevaEdad > 150) {
            throw new Error("La edad debe estar entre 0 y 150");
        }
        this._edad = nuevaEdad;
    }
    
    public obtenerInformacion(): string {
        return `Nombre: ${this._nombre}, Email: ${this._email}, Edad: ${this._edad}, Activo: ${this._activo}`;
    }
}

let usuario = new Usuario("Diego", "diego@email.com", 25);
console.log("\n=== GETTERS Y SETTERS ===");
console.log("Usuario inicial:", usuario.obtenerInformacion());

usuario.nombre = "Diego Actualizado";
usuario.email = "diego.actualizado@email.com";
usuario.edad = 26;
usuario.activo = false;

console.log("Usuario actualizado:", usuario.obtenerInformacion());

// 12. CLASES GENÉRICAS
// ========================================

class Almacen<T> {
    private items: T[] = [];
    
    public agregar(item: T): void {
        this.items.push(item);
    }
    
    public obtener(index: number): T | undefined {
        return this.items[index];
    }
    
    public obtenerTodos(): T[] {
        return [...this.items];
    }
    
    public obtenerLongitud(): number {
        return this.items.length;
    }
    
    public eliminar(index: number): T | undefined {
        return this.items.splice(index, 1)[0];
    }
    
    public buscar(predicado: (item: T) => boolean): T | undefined {
        return this.items.find(predicado);
    }
    
    public filtrar(predicado: (item: T) => boolean): T[] {
        return this.items.filter(predicado);
    }
    
    public mapear<U>(transformar: (item: T) => U): U[] {
        return this.items.map(transformar);
    }
}

let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Hola");
almacenStrings.agregar("Mundo");
almacenStrings.agregar("TypeScript");

let almacenNumbers = new Almacen<number>();
almacenNumbers.agregar(1);
almacenNumbers.agregar(2);
almacenNumbers.agregar(3);
almacenNumbers.agregar(4);
almacenNumbers.agregar(5);

console.log("\n=== CLASES GENÉRICAS ===");
console.log("Almacen strings:", almacenStrings.obtenerTodos());
console.log("Almacen numbers:", almacenNumbers.obtenerTodos());

console.log("Primer string:", almacenStrings.obtener(0));
console.log("Primer number:", almacenNumbers.obtener(0));

console.log("Longitud strings:", almacenStrings.obtenerLongitud());
console.log("Longitud numbers:", almacenNumbers.obtenerLongitud());

let stringEncontrado = almacenStrings.buscar(s => s.length > 4);
console.log("String encontrado:", stringEncontrado);

let numbersFiltrados = almacenNumbers.filtrar(n => n % 2 === 0);
console.log("Numbers filtrados:", numbersFiltrados);

let stringsMapeados = almacenStrings.mapear(s => s.toUpperCase());
console.log("Strings mapeados:", stringsMapeados);

// 13. CLASES CON RESTRICCIONES
// ========================================

interface ConLongitud {
    length: number;
}

class Almacen<T extends ConLongitud> {
    private items: T[] = [];
    
    public agregar(item: T): void {
        this.items.push(item);
    }
    
    public obtener(index: number): T | undefined {
        return this.items[index];
    }
    
    public obtenerTodos(): T[] {
        return [...this.items];
    }
    
    public obtenerLongitud(): number {
        return this.items.length;
    }
    
    public obtenerLongitudTotal(): number {
        return this.items.reduce((total, item) => total + item.length, 0);
    }
    
    public eliminar(index: number): T | undefined {
        return this.items.splice(index, 1)[0];
    }
}

let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Hola");
almacenStrings.agregar("Mundo");
almacenStrings.agregar("TypeScript");

let almacenArrays = new Almacen<number[]>();
almacenArrays.agregar([1, 2, 3]);
almacenArrays.agregar([4, 5, 6]);
almacenArrays.agregar([7, 8, 9, 10]);

console.log("\n=== CLASES CON RESTRICCIONES ===");
console.log("Almacen strings:", almacenStrings.obtenerTodos());
console.log("Almacen arrays:", almacenArrays.obtenerTodos());

console.log("Longitud total strings:", almacenStrings.obtenerLongitudTotal());
console.log("Longitud total arrays:", almacenArrays.obtenerLongitudTotal());

// 14. CASOS DE USO PRÁCTICOS - SISTEMA DE USUARIOS
// ========================================

class Usuario {
    private id: number;
    private nombre: string;
    private email: string;
    private telefono?: string;
    private activo: boolean;
    private fechaCreacion: Date;
    
    constructor(nombre: string, email: string, telefono?: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.activo = true;
        this.fechaCreacion = new Date();
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public obtenerNombre(): string {
        return this.nombre;
    }
    
    public obtenerEmail(): string {
        return this.email;
    }
    
    public obtenerTelefono(): string | undefined {
        return this.telefono;
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
    
    public obtenerFechaCreacion(): Date {
        return this.fechaCreacion;
    }
    
    public actualizarNombre(nuevoNombre: string): void {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this.nombre = nuevoNombre;
    }
    
    public actualizarEmail(nuevoEmail: string): void {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoEmail)) {
            throw new Error("Email inválido");
        }
        this.email = nuevoEmail;
    }
    
    public actualizarTelefono(nuevoTelefono: string): void {
        this.telefono = nuevoTelefono;
    }
    
    public desactivar(): void {
        this.activo = false;
    }
    
    public activar(): void {
        this.activo = true;
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Teléfono: ${this.telefono || "No especificado"}, Activo: ${this.activo}`;
    }
}

let usuario = new Usuario("Isabella", "isabella@email.com", "123-456-789");
console.log("\n=== SISTEMA DE USUARIOS ===");
console.log("Usuario creado:", usuario.obtenerInformacion());

usuario.actualizarNombre("Isabella Actualizada");
usuario.actualizarEmail("isabella.actualizada@email.com");
usuario.actualizarTelefono("987-654-321");

console.log("Usuario actualizado:", usuario.obtenerInformacion());

usuario.desactivar();
console.log("Usuario desactivado:", usuario.estaActivo());

usuario.activar();
console.log("Usuario activado:", usuario.estaActivo());

// 15. CASOS DE USO PRÁCTICOS - SISTEMA DE PRODUCTOS
// ========================================

class Producto {
    private id: number;
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private stock: number;
    private categoria: string;
    private etiquetas: string[];
    private activo: boolean;
    private fechaCreacion: Date;
    private fechaActualizacion: Date;
    
    constructor(
        nombre: string,
        descripcion: string,
        precio: number,
        stock: number,
        categoria: string,
        etiquetas: string[] = []
    ) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.etiquetas = etiquetas;
        this.activo = true;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public obtenerNombre(): string {
        return this.nombre;
    }
    
    public obtenerDescripcion(): string {
        return this.descripcion;
    }
    
    public obtenerPrecio(): number {
        return this.precio;
    }
    
    public obtenerStock(): number {
        return this.stock;
    }
    
    public obtenerCategoria(): string {
        return this.categoria;
    }
    
    public obtenerEtiquetas(): string[] {
        return [...this.etiquetas];
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
    
    public obtenerFechaCreacion(): Date {
        return this.fechaCreacion;
    }
    
    public obtenerFechaActualizacion(): Date {
        return this.fechaActualizacion;
    }
    
    public actualizarNombre(nuevoNombre: string): void {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this.nombre = nuevoNombre;
        this.fechaActualizacion = new Date();
    }
    
    public actualizarDescripcion(nuevaDescripcion: string): void {
        this.descripcion = nuevaDescripcion;
        this.fechaActualizacion = new Date();
    }
    
    public actualizarPrecio(nuevoPrecio: number): void {
        if (nuevoPrecio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this.precio = nuevoPrecio;
        this.fechaActualizacion = new Date();
    }
    
    public actualizarStock(nuevoStock: number): void {
        if (nuevoStock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
        this.stock = nuevoStock;
        this.fechaActualizacion = new Date();
    }
    
    public actualizarCategoria(nuevaCategoria: string): void {
        this.categoria = nuevaCategoria;
        this.fechaActualizacion = new Date();
    }
    
    public agregarEtiqueta(etiqueta: string): void {
        if (!this.etiquetas.includes(etiqueta)) {
            this.etiquetas.push(etiqueta);
            this.fechaActualizacion = new Date();
        }
    }
    
    public eliminarEtiqueta(etiqueta: string): void {
        const index = this.etiquetas.indexOf(etiqueta);
        if (index > -1) {
            this.etiquetas.splice(index, 1);
            this.fechaActualizacion = new Date();
        }
    }
    
    public desactivar(): void {
        this.activo = false;
        this.fechaActualizacion = new Date();
    }
    
    public activar(): void {
        this.activo = true;
        this.fechaActualizacion = new Date();
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}, Categoría: ${this.categoria}, Etiquetas: ${this.etiquetas.join(", ")}, Activo: ${this.activo}`;
    }
}

let producto = new Producto(
    "Laptop Gaming",
    "Laptop para gaming de alta gama",
    1299.99,
    10,
    "Electrónicos",
    ["gaming", "laptop", "alta gama"]
);

console.log("\n=== SISTEMA DE PRODUCTOS ===");
console.log("Producto creado:", producto.obtenerInformacion());

producto.actualizarNombre("Laptop Gaming Pro");
producto.actualizarPrecio(1399.99);
producto.actualizarStock(8);
producto.agregarEtiqueta("pro");

console.log("Producto actualizado:", producto.obtenerInformacion());

producto.eliminarEtiqueta("laptop");
console.log("Producto después de eliminar etiqueta:", producto.obtenerInformacion());

// 16. CASOS DE USO PRÁCTICOS - SISTEMA DE AUTENTICACIÓN
// ========================================

class UsuarioAutenticado {
    private id: number;
    private nombre: string;
    private email: string;
    private password: string;
    private activo: boolean;
    private fechaCreacion: Date;
    private ultimoAcceso?: Date;
    
    constructor(nombre: string, email: string, password: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.password = this.encriptarPassword(password);
        this.activo = true;
        this.fechaCreacion = new Date();
    }
    
    private encriptarPassword(password: string): string {
        // Simulación de encriptación
        return btoa(password);
    }
    
    public autenticar(password: string): boolean {
        const passwordEncriptado = this.encriptarPassword(password);
        if (this.password === passwordEncriptado && this.activo) {
            this.ultimoAcceso = new Date();
            return true;
        }
        return false;
    }
    
    public cambiarPassword(passwordActual: string, nuevoPassword: string): boolean {
        if (this.autenticar(passwordActual)) {
            this.password = this.encriptarPassword(nuevoPassword);
            return true;
        }
        return false;
    }
    
    public obtenerId(): number {
        return this.id;
    }
    
    public obtenerNombre(): string {
        return this.nombre;
    }
    
    public obtenerEmail(): string {
        return this.email;
    }
    
    public estaActivo(): boolean {
        return this.activo;
    }
    
    public obtenerFechaCreacion(): Date {
        return this.fechaCreacion;
    }
    
    public obtenerUltimoAcceso(): Date | undefined {
        return this.ultimoAcceso;
    }
    
    public desactivar(): void {
        this.activo = false;
    }
    
    public activar(): void {
        this.activo = true;
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Activo: ${this.activo}, Último acceso: ${this.ultimoAcceso || "Nunca"}`;
    }
}

let usuarioAutenticado = new UsuarioAutenticado("Gabriel", "gabriel@email.com", "password123");
console.log("\n=== SISTEMA DE AUTENTICACIÓN ===");
console.log("Usuario creado:", usuarioAutenticado.obtenerInformacion());

let autenticado = usuarioAutenticado.autenticar("password123");
console.log("Autenticación exitosa:", autenticado);

let autenticadoIncorrecto = usuarioAutenticado.autenticar("password456");
console.log("Autenticación incorrecta:", autenticadoIncorrecto);

let passwordCambiado = usuarioAutenticado.cambiarPassword("password123", "nuevopassword456");
console.log("Password cambiado:", passwordCambiado);

let autenticadoNuevo = usuarioAutenticado.autenticar("nuevopassword456");
console.log("Autenticación con nuevo password:", autenticadoNuevo);

console.log("Usuario después de autenticación:", usuarioAutenticado.obtenerInformacion());

// 17. CLASES CON MÉTODOS DE UTILIDAD
// ========================================

class Utilidades {
    static formatearFecha(fecha: Date): string {
        return fecha.toLocaleDateString("es-ES");
    }
    
    static formatearMoneda(cantidad: number, moneda: string = "EUR"): string {
        return new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: moneda
        }).format(cantidad);
    }
    
    static generarId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
    
    static validarEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    static validarTelefono(telefono: string): boolean {
        return /^[\+]?[1-9][\d]{0,15}$/.test(telefono);
    }
    
    static formatearTelefono(telefono: string): string {
        const numeros = telefono.replace(/\D/g, "");
        if (numeros.length === 9) {
            return numeros.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
        }
        return telefono;
    }
    
    static capitalizar(texto: string): string {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }
    
    static truncar(texto: string, longitud: number): string {
        if (texto.length <= longitud) {
            return texto;
        }
        return texto.substring(0, longitud) + "...";
    }
}

console.log("\n=== CLASES CON MÉTODOS DE UTILIDAD ===");
console.log("Fecha formateada:", Utilidades.formatearFecha(new Date()));
console.log("Moneda formateada:", Utilidades.formatearMoneda(99.99));
console.log("ID generado:", Utilidades.generarId());
console.log("Email válido:", Utilidades.validarEmail("test@email.com"));
console.log("Email inválido:", Utilidades.validarEmail("email-invalido"));
console.log("Teléfono válido:", Utilidades.validarTelefono("123456789"));
console.log("Teléfono inválido:", Utilidades.validarTelefono("abc123"));
console.log("Teléfono formateado:", Utilidades.formatearTelefono("123456789"));
console.log("Texto capitalizado:", Utilidades.capitalizar("hola mundo"));
console.log("Texto truncado:", Utilidades.truncar("Este es un texto muy largo que necesita ser truncado", 20));

// 18. CLASES CON SINGLETON
// ========================================

class Configuracion {
    private static instancia: Configuracion;
    private configuracion: { [key: string]: any } = {};
    
    private constructor() {
        // Constructor privado para evitar instanciación directa
    }
    
    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
    
    public establecer(clave: string, valor: any): void {
        this.configuracion[clave] = valor;
    }
    
    public obtener(clave: string): any {
        return this.configuracion[clave];
    }
    
    public obtenerTodas(): { [key: string]: any } {
        return { ...this.configuracion };
    }
    
    public eliminar(clave: string): void {
        delete this.configuracion[clave];
    }
    
    public limpiar(): void {
        this.configuracion = {};
    }
}

let config1 = Configuracion.obtenerInstancia();
let config2 = Configuracion.obtenerInstancia();

console.log("\n=== CLASES CON SINGLETON ===");
console.log("¿Son la misma instancia?", config1 === config2);

config1.establecer("servidor", "localhost");
config1.establecer("puerto", 3000);
config1.establecer("ssl", true);

console.log("Configuración desde config1:", config1.obtenerTodas());
console.log("Configuración desde config2:", config2.obtenerTodas());

config2.establecer("baseDeDatos", "mi_db");
console.log("Configuración actualizada:", config1.obtenerTodas());

// 19. CLASES CON FACTORY
// ========================================

abstract class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected año: number;
    
    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    
    public abstract obtenerInformacion(): string;
    public abstract obtenerTipo(): string;
}

class Coche extends Vehiculo {
    private puertas: number;
    
    constructor(marca: string, modelo: string, año: number, puertas: number) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }
    
    public obtenerInformacion(): string {
        return `${this.marca} ${this.modelo} (${this.año}) - ${this.puertas} puertas`;
    }
    
    public obtenerTipo(): string {
        return "Coche";
    }
}

class Moto extends Vehiculo {
    private cilindrada: number;
    
    constructor(marca: string, modelo: string, año: number, cilindrada: number) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    
    public obtenerInformacion(): string {
        return `${this.marca} ${this.modelo} (${this.año}) - ${this.cilindrada}cc`;
    }
    
    public obtenerTipo(): string {
        return "Moto";
    }
}

class Camion extends Vehiculo {
    private capacidad: number;
    
    constructor(marca: string, modelo: string, año: number, capacidad: number) {
        super(marca, modelo, año);
        this.capacidad = capacidad;
    }
    
    public obtenerInformacion(): string {
        return `${this.marca} ${this.modelo} (${this.año}) - ${this.capacidad} toneladas`;
    }
    
    public obtenerTipo(): string {
        return "Camión";
    }
}

class VehiculoFactory {
    public static crearVehiculo(
        tipo: "coche" | "moto" | "camion",
        marca: string,
        modelo: string,
        año: number,
        parametroExtra: number
    ): Vehiculo {
        switch (tipo) {
            case "coche":
                return new Coche(marca, modelo, año, parametroExtra);
            case "moto":
                return new Moto(marca, modelo, año, parametroExtra);
            case "camion":
                return new Camion(marca, modelo, año, parametroExtra);
            default:
                throw new Error("Tipo de vehículo no soportado");
        }
    }
}

let coche = VehiculoFactory.crearVehiculo("coche", "Toyota", "Corolla", 2023, 4);
let moto = VehiculoFactory.crearVehiculo("moto", "Honda", "CBR600", 2023, 600);
let camion = VehiculoFactory.crearVehiculo("camion", "Volvo", "FH16", 2023, 40);

console.log("\n=== CLASES CON FACTORY ===");
console.log("Coche:", coche.obtenerInformacion());
console.log("Moto:", moto.obtenerInformacion());
console.log("Camión:", camion.obtenerInformacion());

// 20. CLASES CON OBSERVER
// ========================================

interface Observer {
    actualizar(datos: any): void;
}

class Usuario implements Observer {
    private nombre: string;
    private email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
    
    public actualizar(datos: any): void {
        console.log(`${this.nombre} recibió notificación: ${datos.mensaje}`);
    }
    
    public obtenerNombre(): string {
        return this.nombre;
    }
}

class Notificador {
    private observadores: Observer[] = [];
    
    public agregarObservador(observador: Observer): void {
        this.observadores.push(observador);
    }
    
    public eliminarObservador(observador: Observer): void {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }
    
    public notificar(datos: any): void {
        this.observadores.forEach(observador => {
            observador.actualizar(datos);
        });
    }
    
    public obtenerCantidadObservadores(): number {
        return this.observadores.length;
    }
}

let notificador = new Notificador();
let usuario1 = new Usuario("Juan", "juan@email.com");
let usuario2 = new Usuario("María", "maria@email.com");
let usuario3 = new Usuario("Pedro", "pedro@email.com");

notificador.agregarObservador(usuario1);
notificador.agregarObservador(usuario2);
notificador.agregarObservador(usuario3);

console.log("\n=== CLASES CON OBSERVER ===");
console.log("Cantidad de observadores:", notificador.obtenerCantidadObservadores());

notificador.notificar({ mensaje: "Nuevo producto disponible" });

notificador.eliminarObservador(usuario2);
console.log("Cantidad de observadores después de eliminar:", notificador.obtenerCantidadObservadores());

notificador.notificar({ mensaje: "Oferta especial" });

console.log("\n=== FIN DE EJEMPLOS DE CLASES ===");

# Tema 5: Clases y Herencia

## Introducción

TypeScript proporciona soporte completo y robusto para la programación orientada a objetos (OOP), ofreciendo características avanzadas que van más allá de JavaScript estándar. Las clases en TypeScript nos permiten:

- **Definir estructuras de datos complejas** con propiedades tipadas
- **Implementar encapsulación** con modificadores de acceso (public, private, protected)
- **Crear jerarquías de herencia** para reutilizar y extender funcionalidad
- **Definir contratos** con clases abstractas e interfaces
- **Aplicar polimorfismo** para escribir código más flexible
- **Utilizar genéricos** para crear clases reutilizables
- **Implementar patrones de diseño** avanzados

En este tema exploraremos desde conceptos básicos de clases hasta patrones avanzados de diseño orientado a objetos, proporcionando las herramientas necesarias para crear arquitecturas de software robustas y mantenibles.

## Clases Básicas

### Definición de Clases

```typescript
class Persona {
    // Propiedades
    nombre: string;
    edad: number;
    email: string;
    
    // Constructor
    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
    
    // Métodos
    saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
    
    cumplirAnios(): void {
        this.edad++;
    }
}

// Uso de la clase
let persona = new Persona("Juan", 30, "juan@email.com");
console.log(persona.saludar());
persona.cumplirAnios();
```

### Propiedades y Métodos

```typescript
class Calculadora {
    // Propiedades privadas
    private historial: number[] = [];
    
    // Propiedades públicas
    public resultado: number = 0;
    
    // Propiedades protegidas
    protected operaciones: string[] = [];
    
    // Métodos públicos
    public sumar(a: number, b: number): number {
        const resultado = a + b;
        this.agregarAlHistorial(resultado);
        this.operaciones.push("suma");
        return resultado;
    }
    
    public restar(a: number, b: number): number {
        const resultado = a - b;
        this.agregarAlHistorial(resultado);
        this.operaciones.push("resta");
        return resultado;
    }
    
    // Métodos privados
    private agregarAlHistorial(valor: number): void {
        this.historial.push(valor);
    }
    
    // Métodos protegidos
    protected obtenerHistorial(): number[] {
        return [...this.historial];
    }
}
```

## Modificadores de Acceso

### Public, Private y Protected

```typescript
class Vehiculo {
    // Público por defecto
    public marca: string;
    public modelo: string;
    
    // Privado - solo accesible dentro de la clase
    private velocidad: number = 0;
    private encendido: boolean = false;
    
    // Protegido - accesible en la clase y sus subclases
    protected combustible: number = 100;
    
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    // Métodos públicos
    public encender(): void {
        this.encendido = true;
        console.log("Vehículo encendido");
    }
    
    public apagar(): void {
        this.encendido = false;
        this.velocidad = 0;
        console.log("Vehículo apagado");
    }
    
    public acelerar(): void {
        if (this.encendido) {
            this.velocidad += 10;
            this.combustible -= 1;
            console.log(`Velocidad: ${this.velocidad} km/h`);
        }
    }
    
    // Método privado
    private verificarCombustible(): boolean {
        return this.combustible > 0;
    }
    
    // Método protegido
    protected obtenerVelocidad(): number {
        return this.velocidad;
    }
}
```

### Readonly

```typescript
class Producto {
    // Propiedades readonly - solo se pueden asignar en la declaración o constructor
    readonly id: number;
    readonly fechaCreacion: Date;
    
    public nombre: string;
    public precio: number;
    
    constructor(nombre: string, precio: number) {
        this.id = Math.floor(Math.random() * 1000);
        this.fechaCreacion = new Date();
        this.nombre = nombre;
        this.precio = precio;
    }
    
    // Método que intenta modificar una propiedad readonly (error)
    // actualizarId(): void {
    //     this.id = 999; // ❌ Error: Cannot assign to 'id' because it is a read-only property
    // }
}
```

## Propiedades Estáticas

### Métodos y Propiedades Estáticas

```typescript
class Utilidades {
    // Propiedad estática
    static version: string = "1.0.0";
    static contador: number = 0;
    
    // Método estático
    static generarId(): string {
        this.contador++;
        return `ID_${this.contador}_${Date.now()}`;
    }
    
    static validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    static formatearFecha(fecha: Date): string {
        return fecha.toLocaleDateString("es-ES");
    }
}

// Uso de métodos estáticos
console.log(Utilidades.version);
console.log(Utilidades.generarId());
console.log(Utilidades.validarEmail("usuario@email.com"));
console.log(Utilidades.formatearFecha(new Date()));
```

## Herencia de Clases

### Extensión de Clases

```typescript
// Clase base
class Animal {
    protected nombre: string;
    protected edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public hacerSonido(): void {
        console.log("El animal hace un sonido");
    }
    
    public obtenerInfo(): string {
        return `${this.nombre} tiene ${this.edad} años`;
    }
}

// Clase derivada
class Perro extends Animal {
    private raza: string;
    
    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad); // Llamada al constructor de la clase base
        this.raza = raza;
    }
    
    // Sobrescribir método de la clase base
    public hacerSonido(): void {
        console.log("¡Guau! ¡Guau!");
    }
    
    // Método específico de la clase derivada
    public ladrar(): void {
        console.log("¡Guau!");
    }
    
    // Método que usa propiedades protegidas de la clase base
    public obtenerInfoCompleta(): string {
        return `${this.obtenerInfo()} y es un ${this.raza}`;
    }
}

// Uso de la herencia
let perro = new Perro("Max", 3, "Labrador");
perro.hacerSonido(); // "¡Guau! ¡Guau!"
perro.ladrar(); // "¡Guau!"
console.log(perro.obtenerInfoCompleta());
```

### Super y Override

```typescript
class Vehiculo {
    protected velocidad: number = 0;
    
    public acelerar(): void {
        this.velocidad += 10;
        console.log(`Velocidad: ${this.velocidad} km/h`);
    }
    
    public frenar(): void {
        this.velocidad = Math.max(0, this.velocidad - 10);
        console.log(`Velocidad: ${this.velocidad} km/h`);
    }
}

class Coche extends Vehiculo {
    private puertas: number;
    
    constructor(puertas: number) {
        super();
        this.puertas = puertas;
    }
    
    // Sobrescribir método usando super
    public acelerar(): void {
        super.acelerar(); // Llamar al método de la clase base
        console.log(`Coche con ${this.puertas} puertas acelerando`);
    }
    
    // Método específico
    public abrirMaletero(): void {
        console.log("Maletero abierto");
    }
}
```

## Clases Abstractas

### Definición de Clases Abstractas

```typescript
// Clase abstracta
abstract class Forma {
    protected color: string;
    
    constructor(color: string) {
        this.color = color;
    }
    
    // Método abstracto - debe ser implementado por las clases derivadas
    abstract calcularArea(): number;
    
    // Método abstracto
    abstract calcularPerimetro(): number;
    
    // Método concreto
    public obtenerColor(): string {
        return this.color;
    }
    
    // Método concreto
    public cambiarColor(nuevoColor: string): void {
        this.color = nuevoColor;
    }
}

// Clase concreta que extiende la clase abstracta
class Rectangulo extends Forma {
    private ancho: number;
    private alto: number;
    
    constructor(color: string, ancho: number, alto: number) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }
    
    // Implementación del método abstracto
    public calcularArea(): number {
        return this.ancho * this.alto;
    }
    
    // Implementación del método abstracto
    public calcularPerimetro(): number {
        return 2 * (this.ancho + this.alto);
    }
}

// Clase concreta que extiende la clase abstracta
class Circulo extends Forma {
    private radio: number;
    
    constructor(color: string, radio: number) {
        super(color);
        this.radio = radio;
    }
    
    // Implementación del método abstracto
    public calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
    
    // Implementación del método abstracto
    public calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Uso de las clases
let rectangulo = new Rectangulo("rojo", 5, 3);
let circulo = new Circulo("azul", 4);

console.log("Rectángulo - Área:", rectangulo.calcularArea());
console.log("Círculo - Área:", circulo.calcularArea());
```

## Interfaces con Clases

### Implementación de Interfaces

```typescript
// Interface
interface Volador {
    volar(): void;
    aterrizar(): void;
}

interface Nadador {
    nadar(): void;
    sumergirse(): void;
}

// Clase que implementa una interface
class Pajaro implements Volador {
    private nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    public volar(): void {
        console.log(`${this.nombre} está volando`);
    }
    
    public aterrizar(): void {
        console.log(`${this.nombre} ha aterrizado`);
    }
}

// Clase que implementa múltiples interfaces
class Pato implements Volador, Nadador {
    private nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    public volar(): void {
        console.log(`${this.nombre} está volando`);
    }
    
    public aterrizar(): void {
        console.log(`${this.nombre} ha aterrizado`);
    }
    
    public nadar(): void {
        console.log(`${this.nombre} está nadando`);
    }
    
    public sumergirse(): void {
        console.log(`${this.nombre} se ha sumergido`);
    }
}
```

## Clases Genéricas

### Clases con Genéricos

```typescript
// Clase genérica
class Contenedor<T> {
    private contenido: T;
    
    constructor(contenido: T) {
        this.contenido = contenido;
    }
    
    public obtener(): T {
        return this.contenido;
    }
    
    public establecer(valor: T): void {
        this.contenido = valor;
    }
    
    public estaVacio(): boolean {
        return this.contenido === null || this.contenido === undefined;
    }
}

// Uso de la clase genérica
let contenedorString = new Contenedor<string>("Hola");
let contenedorNumber = new Contenedor<number>(42);
let contenedorBoolean = new Contenedor<boolean>(true);

console.log(contenedorString.obtener());
console.log(contenedorNumber.obtener());
console.log(contenedorBoolean.obtener());
```

### Clases Genéricas con Restricciones

```typescript
// Interface para restricción
interface Comparable<T> {
    comparar(otro: T): number;
}

// Clase genérica con restricción
class ListaOrdenada<T extends Comparable<T>> {
    private elementos: T[] = [];
    
    public agregar(elemento: T): void {
        this.elementos.push(elemento);
        this.ordenar();
    }
    
    public obtenerTodos(): T[] {
        return [...this.elementos];
    }
    
    private ordenar(): void {
        this.elementos.sort((a, b) => a.comparar(b));
    }
}

// Clase que implementa la interface
class Numero implements Comparable<Numero> {
    constructor(public valor: number) {}
    
    public comparar(otro: Numero): number {
        return this.valor - otro.valor;
    }
}

// Uso de la clase genérica con restricción
let lista = new ListaOrdenada<Numero>();
lista.agregar(new Numero(5));
lista.agregar(new Numero(2));
lista.agregar(new Numero(8));
console.log(lista.obtenerTodos());
```

## Getters y Setters

### Propiedades Computadas

```typescript
class Persona {
    private _nombre: string;
    private _edad: number;
    
    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }
    
    // Getter
    get nombre(): string {
        return this._nombre;
    }
    
    // Setter
    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this._nombre = nuevoNombre;
    }
    
    // Getter
    get edad(): number {
        return this._edad;
    }
    
    // Setter
    set edad(nuevaEdad: number) {
        if (nuevaEdad < 0 || nuevaEdad > 150) {
            throw new Error("La edad debe estar entre 0 y 150");
        }
        this._edad = nuevaEdad;
    }
    
    // Getter computado
    get esMayorDeEdad(): boolean {
        return this._edad >= 18;
    }
    
    // Getter computado
    get iniciales(): string {
        return this._nombre.split(" ").map(n => n[0]).join("").toUpperCase();
    }
}

// Uso de getters y setters
let persona = new Persona("Juan Pérez", 25);
console.log(persona.nombre); // "Juan Pérez"
console.log(persona.edad); // 25
console.log(persona.esMayorDeEdad); // true
console.log(persona.iniciales); // "JP"

persona.nombre = "María García";
persona.edad = 30;
console.log(persona.nombre); // "María García"
console.log(persona.edad); // 30
```

## Patrones de Diseño con Clases

### 1. Singleton Pattern
```typescript
class ConfiguracionSingleton {
    private static instancia: ConfiguracionSingleton;
    private configuracion: Record<string, any> = {};
    
    private constructor() {
        // Constructor privado para evitar instanciación directa
    }
    
    public static obtenerInstancia(): ConfiguracionSingleton {
        if (!ConfiguracionSingleton.instancia) {
            ConfiguracionSingleton.instancia = new ConfiguracionSingleton();
        }
        return ConfiguracionSingleton.instancia;
    }
    
    public establecer(clave: string, valor: any): void {
        this.configuracion[clave] = valor;
    }
    
    public obtener(clave: string): any {
        return this.configuracion[clave];
    }
}

// Uso del singleton
const config1 = ConfiguracionSingleton.obtenerInstancia();
const config2 = ConfiguracionSingleton.obtenerInstancia();
console.log(config1 === config2); // true - misma instancia
```

### 2. Factory Pattern
```typescript
abstract class Vehiculo {
    abstract acelerar(): void;
    abstract frenar(): void;
}

class Coche extends Vehiculo {
    acelerar(): void {
        console.log("Coche acelerando...");
    }
    
    frenar(): void {
        console.log("Coche frenando...");
    }
}

class Moto extends Vehiculo {
    acelerar(): void {
        console.log("Moto acelerando...");
    }
    
    frenar(): void {
        console.log("Moto frenando...");
    }
}

class FabricaVehiculos {
    public static crearVehiculo(tipo: 'coche' | 'moto'): Vehiculo {
        switch (tipo) {
            case 'coche':
                return new Coche();
            case 'moto':
                return new Moto();
            default:
                throw new Error(`Tipo de vehículo no soportado: ${tipo}`);
        }
    }
}

// Uso de la fábrica
const coche = FabricaVehiculos.crearVehiculo('coche');
const moto = FabricaVehiculos.crearVehiculo('moto');
```

### 3. Observer Pattern
```typescript
interface Observador {
    actualizar(datos: any): void;
}

class Sujeto {
    private observadores: Observador[] = [];
    
    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }
    
    public removerObservador(observador: Observador): void {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }
    
    protected notificar(datos: any): void {
        this.observadores.forEach(observador => observador.actualizar(datos));
    }
}

class NotificadorEmail extends Sujeto {
    private mensaje: string = "";
    
    public enviarMensaje(mensaje: string): void {
        this.mensaje = mensaje;
        this.notificar({ tipo: 'email', mensaje: this.mensaje });
    }
}

class LogObservador implements Observador {
    actualizar(datos: any): void {
        console.log(`[LOG] ${datos.tipo}: ${datos.mensaje}`);
    }
}

class EmailObservador implements Observador {
    actualizar(datos: any): void {
        console.log(`[EMAIL] Enviando: ${datos.mensaje}`);
    }
}
```

### 4. Strategy Pattern
```typescript
interface EstrategiaPago {
    procesarPago(monto: number): boolean;
}

class PagoTarjeta implements EstrategiaPago {
    procesarPago(monto: number): boolean {
        console.log(`Procesando pago de $${monto} con tarjeta`);
        return true;
    }
}

class PagoPayPal implements EstrategiaPago {
    procesarPago(monto: number): boolean {
        console.log(`Procesando pago de $${monto} con PayPal`);
        return true;
    }
}

class PagoBitcoin implements EstrategiaPago {
    procesarPago(monto: number): boolean {
        console.log(`Procesando pago de $${monto} con Bitcoin`);
        return true;
    }
}

class ProcesadorPagos {
    private estrategia: EstrategiaPago;
    
    constructor(estrategia: EstrategiaPago) {
        this.estrategia = estrategia;
    }
    
    public cambiarEstrategia(estrategia: EstrategiaPago): void {
        this.estrategia = estrategia;
    }
    
    public procesar(monto: number): boolean {
        return this.estrategia.procesarPago(monto);
    }
}
```

## Clases Avanzadas

### 1. Mixins
```typescript
// Función para crear mixins
function TimestampMixin<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        private _createdAt: Date = new Date();
        private _updatedAt: Date = new Date();
        
        get createdAt(): Date {
            return this._createdAt;
        }
        
        get updatedAt(): Date {
            return this._updatedAt;
        }
        
        protected actualizarTimestamp(): void {
            this._updatedAt = new Date();
        }
    };
}

function LoggingMixin<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        protected log(mensaje: string): void {
            console.log(`[${new Date().toISOString()}] ${mensaje}`);
        }
    };
}

// Clase base
class Usuario {
    constructor(public nombre: string, public email: string) {}
}

// Aplicar mixins
const UsuarioConTimestamp = TimestampMixin(Usuario);
const UsuarioConLogging = LoggingMixin(Usuario);
const UsuarioCompleto = TimestampMixin(LoggingMixin(Usuario));

// Uso
const usuario = new UsuarioCompleto("Juan", "juan@email.com");
console.log(usuario.createdAt);
```

### 2. Decoradores de Clase
```typescript
// Decorador simple
function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Decorador con parámetros
function Version(version: string) {
    return function (constructor: Function) {
        (constructor as any).version = version;
    };
}

// Decorador de método
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(`Llamando método ${propertyName} con argumentos:`, args);
        const resultado = method.apply(this, args);
        console.log(`Método ${propertyName} retornó:`, resultado);
        return resultado;
    };
}

@Sealed
@Version("1.0.0")
class Calculadora {
    @Log
    sumar(a: number, b: number): number {
        return a + b;
    }
    
    @Log
    restar(a: number, b: number): number {
        return a - b;
    }
}
```

### 3. Clases con Propiedades Computadas
```typescript
class Rectangulo {
    constructor(
        private _ancho: number,
        private _alto: number
    ) {}
    
    // Propiedades computadas
    get area(): number {
        return this._ancho * this._alto;
    }
    
    get perimetro(): number {
        return 2 * (this._ancho + this._alto);
    }
    
    get diagonal(): number {
        return Math.sqrt(this._ancho ** 2 + this._alto ** 2);
    }
    
    get esCuadrado(): boolean {
        return this._ancho === this._alto;
    }
    
    // Getters y setters con validación
    get ancho(): number {
        return this._ancho;
    }
    
    set ancho(valor: number) {
        if (valor <= 0) {
            throw new Error("El ancho debe ser positivo");
        }
        this._ancho = valor;
    }
    
    get alto(): number {
        return this._alto;
    }
    
    set alto(valor: number) {
        if (valor <= 0) {
            throw new Error("El alto debe ser positivo");
        }
        this._alto = valor;
    }
}
```

## Mejores Prácticas

### 1. Encapsulación y Modificadores de Acceso
```typescript
// ✅ Bueno: Uso apropiado de modificadores
class CuentaBancaria {
    private _saldo: number = 0;
    private _numeroCuenta: string;
    protected _historial: Transaccion[] = [];
    
    constructor(numeroCuenta: string, saldoInicial: number = 0) {
        this._numeroCuenta = numeroCuenta;
        this._saldo = saldoInicial;
    }
    
    public depositar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto debe ser positivo");
        }
        this._saldo += monto;
        this._registrarTransaccion('deposito', monto);
    }
    
    public retirar(monto: number): boolean {
        if (monto <= 0) {
            throw new Error("El monto debe ser positivo");
        }
        if (monto > this._saldo) {
            return false;
        }
        this._saldo -= monto;
        this._registrarTransaccion('retiro', monto);
        return true;
    }
    
    public obtenerSaldo(): number {
        return this._saldo;
    }
    
    private _registrarTransaccion(tipo: string, monto: number): void {
        this._historial.push({
            tipo,
            monto,
            fecha: new Date(),
            saldoAnterior: this._saldo - (tipo === 'deposito' ? monto : -monto)
        });
    }
}

// ❌ Malo: Propiedades públicas sin control
class CuentaMala {
    public saldo: number = 0; // Cualquiera puede modificar directamente
    public numeroCuenta: string = "";
}
```

### 2. Herencia y Polimorfismo
```typescript
// ✅ Bueno: Jerarquía bien diseñada
abstract class Empleado {
    constructor(
        protected nombre: string,
        protected salarioBase: number
    ) {}
    
    abstract calcularSalario(): number;
    
    public obtenerInformacion(): string {
        return `${this.nombre} - Salario: $${this.calcularSalario()}`;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre: string, salarioBase: number, private horasExtras: number = 0) {
        super(nombre, salarioBase);
    }
    
    calcularSalario(): number {
        return this.salarioBase + (this.horasExtras * 50);
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre: string, private horasTrabajadas: number, private tarifaPorHora: number) {
        super(nombre, 0);
    }
    
    calcularSalario(): number {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso polimórfico
const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("Juan", 5000, 10),
    new EmpleadoPorHoras("María", 40, 25)
];

empleados.forEach(empleado => {
    console.log(empleado.obtenerInformacion());
});
```

### 3. Interfaces y Contratos
```typescript
// ✅ Bueno: Interfaces bien definidas
interface Repositorio<T> {
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}

interface Cache<T> {
    get(key: string): T | null;
    set(key: string, value: T): void;
    delete(key: string): boolean;
    clear(): void;
}

class UsuarioRepositorio implements Repositorio<Usuario> {
    constructor(private cache: Cache<Usuario>) {}
    
    async findById(id: string): Promise<Usuario | null> {
        // Verificar cache primero
        const cached = this.cache.get(id);
        if (cached) {
            return cached;
        }
        
        // Buscar en base de datos
        const usuario = await this.buscarEnBaseDeDatos(id);
        if (usuario) {
            this.cache.set(id, usuario);
        }
        
        return usuario;
    }
    
    async findAll(): Promise<Usuario[]> {
        return await this.buscarTodosEnBaseDeDatos();
    }
    
    async save(usuario: Usuario): Promise<Usuario> {
        const usuarioGuardado = await this.guardarEnBaseDeDatos(usuario);
        this.cache.set(usuarioGuardado.id, usuarioGuardado);
        return usuarioGuardado;
    }
    
    async delete(id: string): Promise<boolean> {
        const eliminado = await this.eliminarDeBaseDeDatos(id);
        if (eliminado) {
            this.cache.delete(id);
        }
        return eliminado;
    }
    
    private async buscarEnBaseDeDatos(id: string): Promise<Usuario | null> {
        // Implementación de búsqueda en BD
        return null;
    }
    
    private async buscarTodosEnBaseDeDatos(): Promise<Usuario[]> {
        // Implementación de búsqueda en BD
        return [];
    }
    
    private async guardarEnBaseDeDatos(usuario: Usuario): Promise<Usuario> {
        // Implementación de guardado en BD
        return usuario;
    }
    
    private async eliminarDeBaseDeDatos(id: string): Promise<boolean> {
        // Implementación de eliminación en BD
        return true;
    }
}
```

### 4. Documentación con JSDoc
```typescript
/**
 * Representa una cuenta bancaria con operaciones básicas
 * @class CuentaBancaria
 */
class CuentaBancaria {
    /**
     * Saldo actual de la cuenta
     * @private
     * @type {number}
     */
    private _saldo: number = 0;
    
    /**
     * Número único de la cuenta
     * @private
     * @type {string}
     */
    private _numeroCuenta: string;
    
    /**
     * Crea una instancia de CuentaBancaria
     * @param {string} numeroCuenta - Número único de la cuenta
     * @param {number} [saldoInicial=0] - Saldo inicial de la cuenta
     * @throws {Error} Si el número de cuenta está vacío
     */
    constructor(numeroCuenta: string, saldoInicial: number = 0) {
        if (!numeroCuenta.trim()) {
            throw new Error("El número de cuenta no puede estar vacío");
        }
        this._numeroCuenta = numeroCuenta;
        this._saldo = saldoInicial;
    }
    
    /**
     * Deposita dinero en la cuenta
     * @param {number} monto - Cantidad a depositar
     * @returns {void}
     * @throws {Error} Si el monto es negativo o cero
     */
    public depositar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto debe ser positivo");
        }
        this._saldo += monto;
    }
    
    /**
     * Obtiene el saldo actual de la cuenta
     * @returns {number} Saldo actual
     */
    public obtenerSaldo(): number {
        return this._saldo;
    }
}
```

## Casos de Uso Comunes

### 1. Modelos de Datos
```typescript
abstract class EntidadBase {
    readonly id: string;
    readonly fechaCreacion: Date;
    fechaActualizacion: Date;
    
    constructor(id?: string) {
        this.id = id || this.generarId();
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
    }
    
    protected actualizarTimestamp(): void {
        this.fechaActualizacion = new Date();
    }
    
    private generarId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}

class Usuario extends EntidadBase {
    constructor(
        public nombre: string,
        public email: string,
        public activo: boolean = true,
        id?: string
    ) {
        super(id);
    }
    
    public actualizarPerfil(nombre: string, email: string): void {
        this.nombre = nombre;
        this.email = email;
        this.actualizarTimestamp();
    }
    
    public desactivar(): void {
        this.activo = false;
        this.actualizarTimestamp();
    }
}
```

### 2. Servicios y Controladores
```typescript
interface ServicioUsuario {
    crearUsuario(datos: CrearUsuarioDto): Promise<Usuario>;
    obtenerUsuario(id: string): Promise<Usuario | null>;
    actualizarUsuario(id: string, datos: ActualizarUsuarioDto): Promise<Usuario>;
    eliminarUsuario(id: string): Promise<boolean>;
}

class UsuarioServicio implements ServicioUsuario {
    constructor(
        private repositorio: Repositorio<Usuario>,
        private validador: ValidadorUsuario,
        private logger: Logger
    ) {}
    
    async crearUsuario(datos: CrearUsuarioDto): Promise<Usuario> {
        this.logger.info(`Creando usuario: ${datos.email}`);
        
        // Validar datos
        const errores = this.validador.validarCreacion(datos);
        if (errores.length > 0) {
            throw new Error(`Datos inválidos: ${errores.join(', ')}`);
        }
        
        // Crear usuario
        const usuario = new Usuario(datos.nombre, datos.email);
        const usuarioGuardado = await this.repositorio.save(usuario);
        
        this.logger.info(`Usuario creado con ID: ${usuarioGuardado.id}`);
        return usuarioGuardado;
    }
    
    async obtenerUsuario(id: string): Promise<Usuario | null> {
        this.logger.info(`Obteniendo usuario: ${id}`);
        return await this.repositorio.findById(id);
    }
    
    async actualizarUsuario(id: string, datos: ActualizarUsuarioDto): Promise<Usuario> {
        this.logger.info(`Actualizando usuario: ${id}`);
        
        const usuario = await this.repositorio.findById(id);
        if (!usuario) {
            throw new Error(`Usuario no encontrado: ${id}`);
        }
        
        // Validar datos de actualización
        const errores = this.validador.validarActualizacion(datos);
        if (errores.length > 0) {
            throw new Error(`Datos inválidos: ${errores.join(', ')}`);
        }
        
        // Actualizar usuario
        usuario.actualizarPerfil(datos.nombre, datos.email);
        return await this.repositorio.save(usuario);
    }
    
    async eliminarUsuario(id: string): Promise<boolean> {
        this.logger.info(`Eliminando usuario: ${id}`);
        return await this.repositorio.delete(id);
    }
}
```

## Errores Comunes y Cómo Evitarlos

### 1. No Usar Modificadores de Acceso
```typescript
// ❌ Malo: Propiedades públicas sin control
class Usuario {
    public saldo: number = 0;
    public nombre: string = "";
}

// ✅ Bueno: Encapsulación apropiada
class Usuario {
    private _saldo: number = 0;
    private _nombre: string = "";
    
    public get saldo(): number {
        return this._saldo;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    
    public set nombre(valor: string) {
        if (valor.trim().length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this._nombre = valor;
    }
}
```

### 2. Herencia Incorrecta
```typescript
// ❌ Malo: Herencia sin relación lógica
class Perro extends Vehiculo {
    // Un perro no es un vehículo
}

// ✅ Bueno: Herencia con relación lógica
class Perro extends Animal {
    constructor(nombre: string, edad: number, private raza: string) {
        super(nombre, edad);
    }
    
    ladrar(): void {
        console.log("¡Guau!");
    }
}
```

### 3. No Implementar Interfaces Completamente
```typescript
// ❌ Malo: Implementación incompleta
class UsuarioRepositorio implements Repositorio<Usuario> {
    findById(id: string): Promise<Usuario | null> {
        // Solo implementa un método
        return Promise.resolve(null);
    }
    // Faltan los otros métodos
}

// ✅ Bueno: Implementación completa
class UsuarioRepositorio implements Repositorio<Usuario> {
    async findById(id: string): Promise<Usuario | null> {
        // Implementación completa
        return null;
    }
    
    async findAll(): Promise<Usuario[]> {
        return [];
    }
    
    async save(entity: Usuario): Promise<Usuario> {
        return entity;
    }
    
    async delete(id: string): Promise<boolean> {
        return true;
    }
}
```

## Próximos Pasos

En el siguiente tema aprenderemos sobre genéricos (Generics) en profundidad, incluyendo:

- Tipos genéricos básicos y avanzados
- Restricciones de tipos (constraints)
- Utilidades de tipos genéricos
- Patrones avanzados con genéricos
- Inferencia de tipos en genéricos

---

**Tiempo estimado de estudio**: 90-105 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con clases y herencia
**Dificultad**: Avanzada

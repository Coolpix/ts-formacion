# Tema 5: Clases y Herencia

## Introducción

TypeScript proporciona soporte completo para la programación orientada a objetos con clases, herencia, modificadores de acceso y muchas otras características. En este tema aprenderemos a crear clases robustas y reutilizables que aprovechen al máximo el sistema de tipos de TypeScript.

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

## Mejores Prácticas

1. **Usa modificadores de acceso** apropiadamente (private, protected, public)
2. **Aprovecha la herencia** para reutilizar código
3. **Usa clases abstractas** para definir contratos
4. **Implementa interfaces** para definir comportamientos
5. **Usa genéricos** para crear clases reutilizables
6. **Aplica getters y setters** para controlar el acceso a propiedades
7. **Documenta clases complejas** con comentarios JSDoc

## Próximos Pasos

En el siguiente tema aprenderemos sobre genéricos (Generics) en profundidad, incluyendo tipos genéricos avanzados, restricciones y utilidades.

---

**Tiempo estimado de estudio**: 75-90 minutos
**Ejercicios**: Revisa la carpeta `ejercicios/` para practicar con clases y herencia

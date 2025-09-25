// ========================================
// EJERCICIOS - CLASES EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: SINTAXIS BÁSICA
// ========================================
// Crea una clase Usuario con propiedades básicas

// TODO: Crea una clase Usuario con las siguientes propiedades:
// - nombre: string
// - email: string
// - activo: boolean
// - constructor que reciba nombre y email
// - método saludar() que retorne un string
// - método desactivar() que cambie activo a false

// class Usuario {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 2: MODIFICADORES DE ACCESO
// ========================================
// Crea una clase con modificadores de acceso

// TODO: Crea una clase Usuario con:
// - private id: number
// - public nombre: string
// - public email: string
// - constructor que genere un id aleatorio
// - método público obtenerId() que retorne el id

// class Usuario {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 3: HERENCIA
// ========================================
// Crea una jerarquía de clases con herencia

// TODO: Crea una clase base Persona con:
// - protected nombre: string
// - protected email: string
// - constructor que reciba nombre y email
// - método público saludar()

// class Persona {
//     // Implementa la clase
// }

// TODO: Crea una clase Usuario que extienda Persona con:
// - private id: number
// - private activo: boolean
// - constructor que llame a super()
// - método público obtenerId()
// - método público desactivar()

// class Usuario extends Persona {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 4: PROPIEDADES ESTÁTICAS
// ========================================
// Crea una clase con propiedades estáticas

// TODO: Crea una clase Usuario con:
// - static contador: number = 0
// - public nombre: string
// - public email: string
// - constructor que incremente el contador
// - método estático obtenerContador()

// class Usuario {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 5: MÉTODOS ESTÁTICOS
// ========================================
// Crea una clase con métodos estáticos

// TODO: Crea una clase Utilidades con métodos estáticos:
// - formatearFecha(fecha: Date): string
// - generarId(): string
// - validarEmail(email: string): boolean

// class Utilidades {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 6: GETTERS Y SETTERS
// ========================================
// Crea una clase con getters y setters

// TODO: Crea una clase Usuario con:
// - private _nombre: string
// - private _email: string
// - private _activo: boolean
// - getter y setter para nombre con validación
// - getter y setter para email con validación
// - getter y setter para activo

// class Usuario {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 7: CLASES GENÉRICAS
// ========================================
// Crea una clase genérica

// TODO: Crea una clase genérica Almacen<T> con:
// - private items: T[] = []
// - método agregar(item: T): void
// - método obtener(index: number): T | undefined
// - método obtenerTodos(): T[]
// - método obtenerLongitud(): number

// class Almacen<T> {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 8: CLASES CON RESTRICCIONES
// ========================================
// Crea una clase genérica con restricciones

// TODO: Crea una interfaz ConLongitud con:
// - length: number

// interface ConLongitud {
//     // Implementa la interfaz
// }

// TODO: Crea una clase genérica Almacen<T extends ConLongitud> con:
// - private items: T[] = []
// - método agregar(item: T): void
// - método obtener(index: number): T | undefined
// - método obtenerLongitudTotal(): number

// class Almacen<T extends ConLongitud> {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 9: MÉTODOS ABSTRACTOS
// ========================================
// Crea una clase abstracta con métodos abstractos

// TODO: Crea una clase abstracta Forma con:
// - protected color: string
// - constructor que reciba color
// - método abstracto calcularArea(): number
// - método abstracto calcularPerimetro(): number
// - método público obtenerColor(): string

// abstract class Forma {
//     // Implementa la clase
// }

// TODO: Crea una clase Circulo que extienda Forma con:
// - private radio: number
// - constructor que reciba color y radio
// - implementación de calcularArea()
// - implementación de calcularPerimetro()

// class Circulo extends Forma {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 10: INTERFACES CON CLASES
// ========================================
// Crea una interfaz y una clase que la implemente

// TODO: Crea una interfaz IUsuario con:
// - id: number
// - nombre: string
// - email: string
// - saludar(): string
// - actualizarNombre(nuevoNombre: string): void

// interface IUsuario {
//     // Implementa la interfaz
// }

// TODO: Crea una clase Usuario que implemente IUsuario

// class Usuario implements IUsuario {
//     // Implementa la clase
// }

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: SINTAXIS BÁSICA
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

// SOLUCIÓN 2: MODIFICADORES DE ACCESO
class Usuario {
    private id: number;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
    
    public obtenerId(): number {
        return this.id;
    }
}

// SOLUCIÓN 3: HERENCIA
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
    
    public desactivar(): void {
        this.activo = false;
    }
}

// SOLUCIÓN 4: PROPIEDADES ESTÁTICAS
class Usuario {
    static contador: number = 0;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        Usuario.contador++;
    }
    
    public static obtenerContador(): number {
        return Usuario.contador;
    }
}

// SOLUCIÓN 5: MÉTODOS ESTÁTICOS
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
}

// SOLUCIÓN 6: GETTERS Y SETTERS
class Usuario {
    private _nombre: string;
    private _email: string;
    private _activo: boolean;
    
    constructor(nombre: string, email: string) {
        this._nombre = nombre;
        this._email = email;
        this._activo = true;
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
}

// SOLUCIÓN 7: CLASES GENÉRICAS
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
}

// SOLUCIÓN 8: CLASES CON RESTRICCIONES
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
    
    public obtenerLongitudTotal(): number {
        return this.items.reduce((total, item) => total + item.length, 0);
    }
}

// SOLUCIÓN 9: MÉTODOS ABSTRACTOS
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
}

// SOLUCIÓN 10: INTERFACES CON CLASES
interface IUsuario {
    id: number;
    nombre: string;
    email: string;
    saludar(): string;
    actualizarNombre(nuevoNombre: string): void;
}

class Usuario implements IUsuario {
    public id: number;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
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
}

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE CLASES ===");

// Ejemplo de uso de las clases creadas
let usuario = new Usuario("Juan", "juan@email.com");
console.log("Usuario:", usuario);
console.log("Saludo:", usuario.saludar());
console.log("Activo:", usuario.activo);

usuario.desactivar();
console.log("Desactivado:", usuario.activo);

// Ejemplo con modificadores de acceso
let usuario2 = new Usuario("María", "maria@email.com");
console.log("ID:", usuario2.obtenerId());
console.log("Nombre:", usuario2.nombre);
console.log("Email:", usuario2.email);

// Ejemplo con herencia
let persona = new Persona("Persona", "persona@email.com");
let usuario3 = new Usuario("Pedro", "pedro@email.com");
console.log("Persona saludo:", persona.saludar());
console.log("Usuario saludo:", usuario3.saludar());
console.log("Usuario ID:", usuario3.obtenerId());

// Ejemplo con propiedades estáticas
let usuario4 = new Usuario("Ana", "ana@email.com");
let usuario5 = new Usuario("Luis", "luis@email.com");
console.log("Contador:", Usuario.obtenerContador());

// Ejemplo con métodos estáticos
console.log("Fecha formateada:", Utilidades.formatearFecha(new Date()));
console.log("ID generado:", Utilidades.generarId());
console.log("Email válido:", Utilidades.validarEmail("test@email.com"));

// Ejemplo con getters y setters
let usuario6 = new Usuario("Carlos", "carlos@email.com");
console.log("Nombre:", usuario6.nombre);
console.log("Email:", usuario6.email);
console.log("Activo:", usuario6.activo);

usuario6.nombre = "Carlos Actualizado";
usuario6.email = "carlos.actualizado@email.com";
usuario6.activo = false;

console.log("Usuario actualizado:", usuario6.nombre, usuario6.email, usuario6.activo);

// Ejemplo con clases genéricas
let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Hola");
almacenStrings.agregar("Mundo");
console.log("Almacen strings:", almacenStrings.obtenerTodos());

let almacenNumbers = new Almacen<number>();
almacenNumbers.agregar(1);
almacenNumbers.agregar(2);
almacenNumbers.agregar(3);
console.log("Almacen numbers:", almacenNumbers.obtenerTodos());

// Ejemplo con restricciones
let almacenConRestricciones = new Almacen<string>();
almacenConRestricciones.agregar("Hola");
almacenConRestricciones.agregar("Mundo");
console.log("Longitud total:", almacenConRestricciones.obtenerLongitudTotal());

// Ejemplo con métodos abstractos
let circulo = new Circulo("rojo", 5);
console.log("Círculo color:", circulo.obtenerColor());
console.log("Círculo área:", circulo.calcularArea());
console.log("Círculo perímetro:", circulo.calcularPerimetro());

// Ejemplo con interfaces
let usuario7 = new Usuario("Elena", "elena@email.com");
console.log("Usuario ID:", usuario7.id);
console.log("Usuario saludo:", usuario7.saludar());
usuario7.actualizarNombre("Elena Actualizada");
console.log("Nombre actualizado:", usuario7.nombre);

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE CLASES ===");

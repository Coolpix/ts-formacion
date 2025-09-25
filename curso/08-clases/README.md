# Clases en TypeScript

## Introducción

Las clases en TypeScript son una característica fundamental que permite crear objetos con propiedades y métodos, siguiendo los principios de la programación orientada a objetos. TypeScript extiende las clases de JavaScript con características adicionales como tipos estáticos, modificadores de acceso y decoradores.

## ¿Qué son las Clases?

Las clases son plantillas para crear objetos. Definen la estructura y comportamiento que tendrán los objetos creados a partir de ellas. En TypeScript, las clases proporcionan una forma de organizar código de manera estructurada y reutilizable.

## Características de las Clases en TypeScript

### 1. Sintaxis Básica

```typescript
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
console.log(usuario.saludar()); // "Hola, soy Juan"
```

### 2. Modificadores de Acceso

TypeScript proporciona modificadores de acceso para controlar la visibilidad de las propiedades y métodos.

#### Public (por defecto)

```typescript
class Usuario {
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
    
    public saludar(): string {
        return `Hola, soy ${this.nombre}`;
    }
}
```

#### Private

```typescript
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
        return this.id; // Solo se puede acceder desde dentro de la clase
    }
}
```

#### Protected

```typescript
class Persona {
    protected nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Usuario extends Persona {
    private id: number;
    
    constructor(nombre: string, email: string) {
        super(nombre, email);
        this.id = Math.floor(Math.random() * 1000);
    }
    
    public obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}`; // Puede acceder a propiedades protected
    }
}
```

### 3. Propiedades de Solo Lectura

```typescript
class Usuario {
    readonly id: number;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}

let usuario = new Usuario("Juan", "juan@email.com");
// usuario.id = 123; // ❌ Error: no se puede modificar
```

### 4. Propiedades Estáticas

```typescript
class Usuario {
    static contador: number = 0;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
        Usuario.contador++;
    }
    
    static obtenerContador(): number {
        return Usuario.contador;
    }
}

let usuario1 = new Usuario("Juan", "juan@email.com");
let usuario2 = new Usuario("María", "maria@email.com");

console.log(Usuario.obtenerContador()); // 2
```

### 5. Métodos Estáticos

```typescript
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

console.log(Utilidades.formatearFecha(new Date()));
console.log(Utilidades.generarId());
console.log(Utilidades.validarEmail("test@email.com"));
```

### 6. Herencia

```typescript
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
    
    public estaActivo(): boolean {
        return this.activo;
    }
}

class Admin extends Usuario {
    private permisos: string[];
    
    constructor(nombre: string, email: string, permisos: string[]) {
        super(nombre, email);
        this.permisos = permisos;
    }
    
    public obtenerPermisos(): string[] {
        return this.permisos;
    }
    
    public tienePermiso(permiso: string): boolean {
        return this.permisos.includes(permiso);
    }
}
```

### 7. Métodos Abstractos

```typescript
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
}
```

### 8. Interfaces con Clases

```typescript
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
        this.nombre = nuevoNombre;
    }
}
```

### 9. Getters y Setters

```typescript
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
```

### 10. Clases Genéricas

```typescript
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
}

let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Hola");
almacenStrings.agregar("Mundo");

let almacenNumbers = new Almacen<number>();
almacenNumbers.agregar(1);
almacenNumbers.agregar(2);
almacenNumbers.agregar(3);
```

### 11. Clases con Restricciones

```typescript
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

let almacenStrings = new Almacen<string>();
almacenStrings.agregar("Hola");
almacenStrings.agregar("Mundo");

let almacenArrays = new Almacen<number[]>();
almacenArrays.agregar([1, 2, 3]);
almacenArrays.agregar([4, 5, 6]);
```

## Casos de Uso Prácticos

### 1. Sistema de Usuarios

```typescript
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
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Activo: ${this.activo}`;
    }
}
```

### 2. Sistema de Productos

```typescript
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
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}, Activo: ${this.activo}`;
    }
}
```

### 3. Sistema de Autenticación

```typescript
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
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}, Activo: ${this.activo}`;
    }
}
```

## Mejores Prácticas

### 1. Usar Modificadores de Acceso

```typescript
// ✅ Bueno
class Usuario {
    private id: number;
    public nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}

// ❌ Malo
class Usuario {
    id: number;
    nombre: string;
    email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}
```

### 2. Usar Getters y Setters

```typescript
// ✅ Bueno
class Usuario {
    private _nombre: string;
    
    get nombre(): string {
        return this._nombre;
    }
    
    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this._nombre = nuevoNombre;
    }
}

// ❌ Malo
class Usuario {
    public nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
```

### 3. Usar Herencia Apropiadamente

```typescript
// ✅ Bueno
class Persona {
    protected nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Usuario extends Persona {
    private id: number;
    
    constructor(nombre: string, email: string) {
        super(nombre, email);
        this.id = Math.floor(Math.random() * 1000);
    }
}

// ❌ Malo
class Usuario {
    private id: number;
    private nombre: string;
    private email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}
```

### 4. Usar Clases Abstractas

```typescript
// ✅ Bueno
abstract class Forma {
    protected color: string;
    
    constructor(color: string) {
        this.color = color;
    }
    
    public abstract calcularArea(): number;
    public abstract calcularPerimetro(): number;
}

// ❌ Malo
class Forma {
    protected color: string;
    
    constructor(color: string) {
        this.color = color;
    }
    
    public calcularArea(): number {
        return 0;
    }
    
    public calcularPerimetro(): number {
        return 0;
    }
}
```

## Errores Comunes

### 1. No Usar Modificadores de Acceso

```typescript
// ❌ Malo
class Usuario {
    id: number;
    nombre: string;
    email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}

// ✅ Bueno
class Usuario {
    private id: number;
    public nombre: string;
    public email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}
```

### 2. No Usar Getters y Setters

```typescript
// ❌ Malo
class Usuario {
    public nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

// ✅ Bueno
class Usuario {
    private _nombre: string;
    
    get nombre(): string {
        return this._nombre;
    }
    
    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length < 2) {
            throw new Error("El nombre debe tener al menos 2 caracteres");
        }
        this._nombre = nuevoNombre;
    }
    
    constructor(nombre: string) {
        this._nombre = nombre;
    }
}
```

### 3. No Usar Herencia

```typescript
// ❌ Malo
class Usuario {
    private id: number;
    private nombre: string;
    private email: string;
    
    constructor(nombre: string, email: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
    }
}

class Admin {
    private id: number;
    private nombre: string;
    private email: string;
    private permisos: string[];
    
    constructor(nombre: string, email: string, permisos: string[]) {
        this.id = Math.floor(Math.random() * 1000);
        this.nombre = nombre;
        this.email = email;
        this.permisos = permisos;
    }
}

// ✅ Bueno
class Persona {
    protected nombre: string;
    protected email: string;
    
    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Usuario extends Persona {
    private id: number;
    
    constructor(nombre: string, email: string) {
        super(nombre, email);
        this.id = Math.floor(Math.random() * 1000);
    }
}

class Admin extends Usuario {
    private permisos: string[];
    
    constructor(nombre: string, email: string, permisos: string[]) {
        super(nombre, email);
        this.permisos = permisos;
    }
}
```

## Conclusión

Las clases en TypeScript son una característica poderosa que permite:

- Crear objetos con propiedades y métodos bien definidos
- Implementar principios de programación orientada a objetos
- Proporcionar seguridad de tipos en tiempo de desarrollo
- Facilitar el mantenimiento y la reutilización del código
- Crear jerarquías de clases con herencia

La clave está en entender cuándo usar cada modificador de acceso, cómo implementar herencia correctamente, y cómo crear clases genéricas y abstractas. Las clases son la base para crear aplicaciones TypeScript robustas y mantenibles.

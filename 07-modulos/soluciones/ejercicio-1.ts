// Solución del Ejercicio 1: Exportaciones Básicas

// 1. Exportaciones nombradas de funciones
export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}

export function multiplicar(a: number, b: number): number {
    return a * b;
}

export function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("División por cero no permitida");
    }
    return a / b;
}

// 2. Exportaciones de constantes
export const PI = 3.14159;
export const E = 2.71828;
export const GRAVEDAD = 9.81;

// 3. Exportaciones de interfaces
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    fechaCreacion: Date;
}

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    disponible: boolean;
    stock: number;
}

// 4. Exportaciones de tipos
export type Estado = "activo" | "inactivo" | "pendiente";
export type Prioridad = "baja" | "media" | "alta" | "critica";
export type TipoUsuario = "admin" | "usuario" | "invitado";

// 5. Exportaciones de enums
export enum DiaSemana {
    Lunes = "lunes",
    Martes = "martes",
    Miercoles = "miércoles",
    Jueves = "jueves",
    Viernes = "viernes",
    Sabado = "sábado",
    Domingo = "domingo"
}

export enum EstadoPedido {
    Pendiente = "pendiente",
    Procesando = "procesando",
    Enviado = "enviado",
    Entregado = "entregado",
    Cancelado = "cancelado"
}

// 6. Exportaciones de objetos
export const CONFIGURACION = {
    apiUrl: "https://api.ejemplo.com",
    timeout: 5000,
    reintentos: 3,
    version: "1.0.0"
};

export const MENSAJES = {
    ERROR: "Ha ocurrido un error",
    EXITO: "Operación exitosa",
    ADVERTENCIA: "Advertencia",
    INFO: "Información"
};

// 7. Exportación por defecto de clase
export default class Calculadora {
    private historial: number[] = [];
    
    sumar(a: number, b: number): number {
        const resultado = a + b;
        this.agregarAlHistorial(resultado);
        return resultado;
    }
    
    restar(a: number, b: number): number {
        const resultado = a - b;
        this.agregarAlHistorial(resultado);
        return resultado;
    }
    
    multiplicar(a: number, b: number): number {
        const resultado = a * b;
        this.agregarAlHistorial(resultado);
        return resultado;
    }
    
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("División por cero no permitida");
        }
        const resultado = a / b;
        this.agregarAlHistorial(resultado);
        return resultado;
    }
    
    obtenerHistorial(): number[] {
        return [...this.historial];
    }
    
    limpiarHistorial(): void {
        this.historial = [];
    }
    
    private agregarAlHistorial(valor: number): void {
        this.historial.push(valor);
    }
}

// 8. Exportaciones de funciones adicionales
export function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString("es-ES");
}

export function formatearMoneda(cantidad: number, moneda: string = "EUR"): string {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: moneda
    }).format(cantidad);
}

export function generarId(): string {
    return Math.random().toString(36).substr(2, 9);
}

export function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 9. Exportaciones de funciones genéricas
export function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

export function filtrarArray<T>(array: T[], predicado: (item: T) => boolean): T[] {
    return array.filter(predicado);
}

export function mapearArray<T, U>(array: T[], transformador: (item: T) => U): U[] {
    return array.map(transformador);
}

// 10. Exportaciones de interfaces genéricas
export interface Repository<T> {
    findById(id: string): T | undefined;
    save(entity: T): void;
    delete(id: string): boolean;
    findAll(): T[];
}

export interface Cache<T> {
    set(key: string, value: T): void;
    get(key: string): T | undefined;
    delete(key: string): boolean;
    clear(): void;
}

// 11. Exportaciones de clases genéricas
export class GenericRepository<T> implements Repository<T> {
    private entities: Map<string, T> = new Map();
    
    findById(id: string): T | undefined {
        return this.entities.get(id);
    }
    
    save(entity: T): void {
        const id = Math.random().toString(36).substr(2, 9);
        this.entities.set(id, entity);
    }
    
    delete(id: string): boolean {
        return this.entities.delete(id);
    }
    
    findAll(): T[] {
        return Array.from(this.entities.values());
    }
}

export class GenericCache<T> implements Cache<T> {
    private cache: Map<string, T> = new Map();
    
    set(key: string, value: T): void {
        this.cache.set(key, value);
    }
    
    get(key: string): T | undefined {
        return this.cache.get(key);
    }
    
    delete(key: string): boolean {
        return this.cache.delete(key);
    }
    
    clear(): void {
        this.cache.clear();
    }
}

// 12. Exportaciones de tipos genéricos
export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export type Required<T> = {
    [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// 13. Exportaciones de tipos condicionales
export type EsString<T> = T extends string ? true : false;
export type EsNumber<T> = T extends number ? true : false;
export type EsArray<T> = T extends any[] ? true : false;

// 14. Exportaciones de funciones asíncronas
export async function obtenerDatos(url: string): Promise<any> {
    const respuesta = await fetch(url);
    return await respuesta.json();
}

export async function procesarDatosAsync(datos: any[]): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(datos.map(item => item * 2));
        }, 1000);
    });
}

// 15. Exportaciones de funciones con parámetros rest
export function crearMensaje(prefijo: string, ...palabras: string[]): string {
    return prefijo + " " + palabras.join(" ");
}

export function combinarArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// 16. Exportaciones de funciones con sobrecarga
export function procesar(valor: string): string;
export function procesar(valor: number): number;
export function procesar(valor: boolean): boolean;
export function procesar(valor: string | number | boolean): string | number | boolean {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 2;
    } else {
        return !valor;
    }
}

// 17. Exportaciones de funciones con tipos de retorno complejos
export function crearRespuesta<T>(datos: T, exito: boolean = true): {
    datos: T;
    exito: boolean;
    timestamp: Date;
    id: string;
} {
    return {
        datos,
        exito,
        timestamp: new Date(),
        id: Math.random().toString(36).substr(2, 9)
    };
}

// 18. Exportaciones de funciones con validación
export function validarUsuario(usuario: any): usuario is Usuario {
    return (
        typeof usuario === "object" &&
        usuario !== null &&
        typeof usuario.id === "number" &&
        typeof usuario.nombre === "string" &&
        typeof usuario.email === "string" &&
        typeof usuario.activo === "boolean" &&
        usuario.fechaCreacion instanceof Date
    );
}

// 19. Exportaciones de funciones con manejo de errores
export function dividirSeguro(a: number, b: number): {
    resultado: number | null;
    error: string | null;
} {
    try {
        if (b === 0) {
            return { resultado: null, error: "División por cero no permitida" };
        }
        return { resultado: a / b, error: null };
    } catch (error) {
        return { resultado: null, error: "Error inesperado" };
    }
}

// 20. Exportaciones de namespaces
export namespace MathUtils {
    export function sumar(a: number, b: number): number {
        return a + b;
    }
    
    export function restar(a: number, b: number): number {
        return a - b;
    }
    
    export function multiplicar(a: number, b: number): number {
        return a * b;
    }
    
    export function dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("División por cero no permitida");
        }
        return a / b;
    }
}

export namespace StringUtils {
    export function capitalizar(texto: string): string {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
    
    export function invertir(texto: string): string {
        return texto.split('').reverse().join('');
    }
    
    export function limpiar(texto: string): string {
        return texto.trim().replace(/\s+/g, ' ');
    }
}

// 21. Exportaciones de funciones con tipos de unión
export function procesarUnion<T extends string | number | boolean>(valor: T): string {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor.toString();
    } else {
        return valor ? "verdadero" : "falso";
    }
}

// 22. Exportaciones de funciones con tipos de array
export function procesarArray<T>(array: T[]): T[] {
    return array.filter((item, index) => array.indexOf(item) === index);
}

// 23. Exportaciones de funciones con tipos de objeto
export function procesarObjeto<T extends Record<string, any>>(objeto: T): T {
    return { ...objeto };
}

// 24. Exportaciones de funciones con tipos de función
export function crearFuncion<T, U>(funcion: (valor: T) => U): (valor: T) => U {
    return funcion;
}

// 25. Exportaciones de funciones con tipos de retorno condicional
export function procesarCondicional<T>(valor: T): any {
    if (typeof valor === "string") {
        return valor.toUpperCase() as any;
    } else if (typeof valor === "number") {
        return (valor * 2) as any;
    } else {
        return valor;
    }
}

// 26. Exportaciones de funciones con tipos de retorno inferido
export function crearFuncionInferida<T>(valor: T) {
    return {
        valor,
        tipo: typeof valor,
        procesado: valor
    };
}

// 27. Exportaciones de funciones con tipos de retorno complejos
export function crearFuncionCompleja<T, U>(valor: T, transformador: (valor: T) => U): {
    original: T;
    transformado: U;
    timestamp: Date;
    id: string;
} {
    return {
        original: valor,
        transformado: transformador(valor),
        timestamp: new Date(),
        id: Math.random().toString(36).substr(2, 9)
    };
}

// 28. Exportaciones de funciones con tipos de retorno genéricos
export function crearFuncionGenerica<T>(valor: T): {
    valor: T;
    tipo: string;
    procesado: T;
} {
    return {
        valor,
        tipo: typeof valor,
        procesado: valor
    };
}

// 29. Exportaciones de funciones con tipos de retorno de unión
export function crearFuncionUnion<T>(valor: T): T | string | number {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor;
    }
}

// 30. Exportaciones de funciones con tipos de retorno de intersección
export function crearFuncionInterseccion<T, U>(valor1: T, valor2: U): T & U {
    return { ...valor1, ...valor2 } as T & U;
}

// Ejemplos de exportaciones en TypeScript

// 1. Exportaciones nombradas individuales
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
}

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    disponible: boolean;
}

// 4. Exportaciones de tipos
export type Estado = "activo" | "inactivo" | "pendiente";
export type Prioridad = "baja" | "media" | "alta" | "critica";

// 5. Exportaciones de clases
export class Calculadora {
    private historial: number[] = [];
    
    sumar(a: number, b: number): number {
        const resultado = a + b;
        this.historial.push(resultado);
        return resultado;
    }
    
    restar(a: number, b: number): number {
        const resultado = a - b;
        this.historial.push(resultado);
        return resultado;
    }
    
    obtenerHistorial(): number[] {
        return [...this.historial];
    }
    
    limpiarHistorial(): void {
        this.historial = [];
    }
}

// 6. Exportaciones de enums
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

// 7. Exportaciones de objetos
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

// 8. Exportaciones con alias
export { sumar as suma, restar as resta, multiplicar as multiplicacion, dividir as division };

// 10. Exportación por defecto
export default class Utilidades {
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
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// 11. Exportación por defecto de función
function crearUsuario(nombre: string, email: string): Usuario {
    return {
        id: Math.floor(Math.random() * 1000),
        nombre,
        email,
        activo: true
    };
}

// 12. Exportación por defecto de objeto
const METADATOS = {
    version: "1.0.0",
    autor: "Mi Equipo",
    descripcion: "Utilidades para el proyecto",
    fechaCreacion: new Date("2023-01-01")
};

// 13. Exportaciones mixtas (nombradas + por defecto)
export function procesarDatos(datos: any[]): any[] {
    return datos.map(item => item * 2);
}

export const CONFIGURACION_PROCESAMIENTO = {
    batchSize: 100,
    timeout: 30000,
    maxRetries: 3
};

class ProcesadorDatos {
    private configuracion = CONFIGURACION_PROCESAMIENTO;
    
    procesar(datos: any[]): any[] {
        return procesarDatos(datos);
    }
    
    obtenerConfiguracion() {
        return this.configuracion;
    }
}

// 14. Exportaciones de funciones genéricas
export function crearArray<T>(...elementos: T[]): T[] {
    return elementos;
}

export function filtrarArray<T>(array: T[], predicado: (item: T) => boolean): T[] {
    return array.filter(predicado);
}

export function mapearArray<T, U>(array: T[], transformador: (item: T) => U): U[] {
    return array.map(transformador);
}

// 15. Exportaciones de interfaces genéricas
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

// 16. Exportaciones de clases genéricas
export class GenericRepository<T> implements Repository<T> {
    private entities: Map<string, T> = new Map();
    
    findById(id: string): T | undefined {
        return this.entities.get(id);
    }
    
    save(entity: T): void {
        // Implementación básica
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

// 17. Exportaciones de tipos condicionales
export type EsString<T> = T extends string ? true : false;
export type EsNumber<T> = T extends number ? true : false;
export type EsArray<T> = T extends any[] ? true : false;

// 18. Exportaciones de utilidades de tipos
export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export type Required<T> = {
    [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// 19. Exportaciones de namespaces
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

// 20. Exportaciones de funciones asíncronas
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

// 21. Exportaciones de funciones con parámetros rest
export function crearMensaje(prefijo: string, ...palabras: string[]): string {
    return prefijo + " " + palabras.join(" ");
}

export function combinarArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// 22. Exportaciones de funciones con sobrecarga
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

// 23. Exportaciones de funciones con tipos de retorno complejos
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

// 24. Exportaciones de funciones con validación
export function validarUsuario(usuario: any): usuario is Usuario {
    return (
        typeof usuario === "object" &&
        usuario !== null &&
        typeof usuario.id === "number" &&
        typeof usuario.nombre === "string" &&
        typeof usuario.email === "string" &&
        typeof usuario.activo === "boolean"
    );
}

// 25. Exportaciones de funciones con manejo de errores
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

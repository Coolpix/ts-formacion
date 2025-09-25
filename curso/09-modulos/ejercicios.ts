// ========================================
// EJERCICIOS - MÓDULOS EN TYPESCRIPT
// ========================================

// ========================================
// EJERCICIO 1: EXPORTACIONES NOMBRADAS
// ========================================
// Crea un módulo con exportaciones nombradas

// TODO: Crea un módulo con las siguientes exportaciones:
// - constante nombre: string
// - constante edad: number
// - función saludar(nombre: string): string
// - clase Usuario con constructor que reciba nombre y email
// - interfaz Configuracion con servidor, puerto y ssl
// - type Estado con "activo" | "inactivo" | "pendiente"

// export const nombre = ...
// export const edad = ...
// export function saludar(nombre: string): string { ... }
// export class Usuario { ... }
// export interface Configuracion { ... }
// export type Estado = ...

// ========================================
// EJERCICIO 2: EXPORTACIÓN POR DEFECTO
// ========================================
// Crea un módulo con exportación por defecto

// TODO: Crea una clase Producto con:
// - constructor que reciba id, nombre y precio
// - método obtenerInformacion() que retorne string
// - exporta la clase como exportación por defecto

// class Producto {
//     // Implementa la clase
// }

// export default Producto;

// ========================================
// EJERCICIO 3: EXPORTACIONES MIXTAS
// ========================================
// Crea un módulo con exportaciones mixtas

// TODO: Crea un módulo con:
// - constante VERSION: string
// - constante AUTOR: string
// - interfaz IUsuario con id, nombre y email
// - clase Usuario que implemente IUsuario
// - función crearUsuario que retorne Usuario
// - exporta la clase Usuario como exportación por defecto

// export const VERSION = ...
// export const AUTOR = ...
// export interface IUsuario { ... }
// export class Usuario implements IUsuario { ... }
// export function crearUsuario(nombre: string, email: string): Usuario { ... }
// export default Usuario;

// ========================================
// EJERCICIO 4: IMPORTACIONES NOMBRADAS
// ========================================
// Crea un módulo que importe exportaciones nombradas

// TODO: Crea un módulo que importe:
// - nombre, edad, saludar, Usuario, Configuracion, Estado desde './exportaciones'
// - Usa las importaciones en el código

// import { nombre, edad, saludar, Usuario, Configuracion, Estado } from './exportaciones';

// ========================================
// EJERCICIO 5: IMPORTACIÓN POR DEFECTO
// ========================================
// Crea un módulo que importe exportación por defecto

// TODO: Crea un módulo que importe:
// - Producto como exportación por defecto desde './producto'
// - Usa la importación en el código

// import Producto from './producto';

// ========================================
// EJERCICIO 6: IMPORTACIONES MIXTAS
// ========================================
// Crea un módulo que importe exportaciones mixtas

// TODO: Crea un módulo que importe:
// - Usuario como exportación por defecto
// - VERSION, IUsuario, crearUsuario como exportaciones nombradas
// - Usa las importaciones en el código

// import Usuario, { VERSION, IUsuario, crearUsuario } from './usuario';

// ========================================
// EJERCICIO 7: IMPORTACIÓN CON ALIAS
// ========================================
// Crea un módulo que use importaciones con alias

// TODO: Crea un módulo que importe:
// - Usuario con alias UsuarioClass
// - saludar con alias greet
// - Usa las importaciones con alias en el código

// import { Usuario as UsuarioClass } from './usuario';
// import { saludar as greet } from './utils';

// ========================================
// EJERCICIO 8: IMPORTACIÓN DE TODO
// ========================================
// Crea un módulo que importe todo desde otros módulos

// TODO: Crea un módulo que importe:
// - Todo desde './utils' con alias utils
// - Todo desde './usuario' con alias usuario
// - Usa las importaciones en el código

// import * as utils from './utils';
// import * as usuario from './usuario';

// ========================================
// EJERCICIO 9: IMPORTACIÓN DE TIPOS
// ========================================
// Crea un módulo que importe solo tipos

// TODO: Crea un módulo que importe:
// - Configuracion y Estado como tipos desde './tipos'
// - IUsuario como tipo desde './usuario'
// - Usa los tipos en el código

// import type { Configuracion, Estado } from './tipos';
// import type { IUsuario } from './usuario';

// ========================================
// EJERCICIO 10: RE-EXPORTACIONES
// ========================================
// Crea un módulo que re-exporte desde otros módulos

// TODO: Crea un módulo que re-exporte:
// - Usuario y crearUsuario desde './usuario'
// - sumar, restar y PI desde './utils'
// - Producto desde './producto'

// export { Usuario, crearUsuario } from './usuario';
// export { sumar, restar, PI } from './utils';
// export { Producto } from './producto';

// ========================================
// EJERCICIO 11: RE-EXPORTACIÓN CON ALIAS
// ========================================
// Crea un módulo que re-exporte con alias

// TODO: Crea un módulo que re-exporte:
// - Usuario con alias UsuarioClass desde './usuario'
// - sumar con alias add desde './utils'
// - restar con alias subtract desde './utils'

// export { Usuario as UsuarioClass } from './usuario';
// export { sumar as add, restar as subtract } from './utils';

// ========================================
// EJERCICIO 12: RE-EXPORTACIÓN DE TODO
// ========================================
// Crea un módulo que re-exporte todo

// TODO: Crea un módulo que re-exporte:
// - Todo desde './usuario'
// - Todo desde './utils'
// - Todo desde './producto'

// export * from './usuario';
// export * from './utils';
// export * from './producto';

// ========================================
// EJERCICIO 13: RE-EXPORTACIÓN POR DEFECTO
// ========================================
// Crea un módulo que re-exporte exportaciones por defecto

// TODO: Crea un módulo que re-exporte:
// - Usuario como exportación por defecto desde './usuario'
// - Producto como exportación por defecto desde './producto'

// export { default as Usuario } from './usuario';
// export { default as Producto } from './producto';

// ========================================
// EJERCICIO 14: SISTEMA DE USUARIOS
// ========================================
// Crea un sistema completo de usuarios con módulos

// TODO: Crea tipos para usuarios:
// interface Usuario {
//     // Implementa la interfaz
// }

// type EstadoUsuario = ...

// interface UsuarioCrear {
//     // Implementa la interfaz
// }

// interface UsuarioActualizar {
//     // Implementa la interfaz
// }

// TODO: Crea un modelo de usuario:
// class UsuarioModel {
//     // Implementa la clase
// }

// TODO: Crea un servicio de usuario:
// class UsuarioService {
//     // Implementa la clase
// }

// ========================================
// EJERCICIO 15: SISTEMA DE UTILIDADES
// ========================================
// Crea un sistema de utilidades con módulos

// TODO: Crea utilidades de fechas:
// export function formatearFecha(fecha: Date): string { ... }
// export function formatearFechaHora(fecha: Date): string { ... }
// export function agregarDias(fecha: Date, dias: number): Date { ... }
// export function esFechaValida(fecha: any): fecha is Date { ... }

// TODO: Crea utilidades de validación:
// export function validarEmail(email: string): boolean { ... }
// export function validarTelefono(telefono: string): boolean { ... }
// export function validarLongitud(texto: string, min: number, max: number): boolean { ... }
// export function validarNumero(numero: any): numero is number { ... }

// ========================================
// EJERCICIO 16: SISTEMA DE CONFIGURACIÓN
// ========================================
// Crea un sistema de configuración con módulos

// TODO: Crea configuración de base de datos:
// interface DatabaseConfig {
//     // Implementa la interfaz
// }

// export const databaseConfig: DatabaseConfig = {
//     // Implementa la configuración
// };

// TODO: Crea configuración de servidor:
// interface ServerConfig {
//     // Implementa la interfaz
// }

// export const serverConfig: ServerConfig = {
//     // Implementa la configuración
// };

// ========================================
// EJERCICIO 17: BARREL EXPORTS
// ========================================
// Crea barrel exports para organizar módulos

// TODO: Crea barrel exports para tipos:
// export * from './usuario';
// export * from './producto';
// export * from './orden';

// TODO: Crea barrel exports para modelos:
// export * from './usuario';
// export * from './producto';
// export * from './orden';

// TODO: Crea barrel exports para servicios:
// export * from './usuario';
// export * from './producto';
// export * from './orden';

// TODO: Crea barrel exports para utilidades:
// export * from './fechas';
// export * from './validaciones';
// export * from './formateo';

// ========================================
// EJERCICIO 18: MÓDULOS DE TIPOS
// ========================================
// Crea módulos de tipos

// TODO: Crea declaración de módulo:
// declare module "mi-modulo" {
//     // Implementa la declaración
// }

// TODO: Crea módulo de tipos externo:
// declare module "modulo-externo" {
//     // Implementa la declaración
// }

// ========================================
// EJERCICIO 19: CONFIGURACIÓN DE MÓDULOS
// ========================================
// Crea configuración de módulos

// TODO: Crea configuración de módulos:
// const moduleConfig = {
//     // Implementa la configuración
// };

// ========================================
// EJERCICIO 20: CASOS DE USO AVANZADOS
// ========================================
// Crea casos de uso avanzados con módulos

// TODO: Crea módulo de autenticación:
// export class Autenticacion {
//     // Implementa la clase
// }

// TODO: Crea módulo de logging:
// export class Logger {
//     // Implementa la clase
// }

// TODO: Crea módulo de caché:
// export class Cache<T> {
//     // Implementa la clase
// }

// ========================================
// SOLUCIONES
// ========================================

// SOLUCIÓN 1: EXPORTACIONES NOMBRADAS
export const nombre = "Juan";
export const edad = 25;
export const activo = true;

export function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

export function despedir(nombre: string): string {
    return `Adiós, ${nombre}`;
}

export class Usuario {
    constructor(public nombre: string, public email: string) {}
    
    obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

export interface Configuracion {
    servidor: string;
    puerto: number;
    ssl: boolean;
}

export type Estado = "activo" | "inactivo" | "pendiente";

// SOLUCIÓN 2: EXPORTACIÓN POR DEFECTO
class Producto {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number
    ) {}
    
    obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Precio: $${this.precio}`;
    }
}

export default Producto;

// SOLUCIÓN 3: EXPORTACIONES MIXTAS
export const VERSION = "1.0.0";
export const AUTOR = "Desarrollador";

export interface IUsuario {
    id: number;
    nombre: string;
    email: string;
}

export class Usuario implements IUsuario {
    constructor(
        public id: number,
        public nombre: string,
        public email: string
    ) {}
    
    obtenerInformacion(): string {
        return `ID: ${this.id}, Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

export function crearUsuario(nombre: string, email: string): Usuario {
    return new Usuario(Math.floor(Math.random() * 1000), nombre, email);
}

export default Usuario;

// SOLUCIÓN 4: IMPORTACIONES NOMBRADAS
import { nombre, edad, saludar, Usuario, Configuracion, Estado } from './exportaciones';

// SOLUCIÓN 5: IMPORTACIÓN POR DEFECTO
import Producto from './producto';

// SOLUCIÓN 6: IMPORTACIONES MIXTAS
import Usuario, { VERSION, IUsuario, crearUsuario } from './usuario';

// SOLUCIÓN 7: IMPORTACIÓN CON ALIAS
import { Usuario as UsuarioClass } from './usuario';
import { saludar as greet } from './utils';

// SOLUCIÓN 8: IMPORTACIÓN DE TODO
import * as utils from './utils';
import * as usuario from './usuario';

// SOLUCIÓN 9: IMPORTACIÓN DE TIPOS
import type { Configuracion, Estado } from './tipos';
import type { IUsuario } from './usuario';

// SOLUCIÓN 10: RE-EXPORTACIONES
export { Usuario, crearUsuario } from './usuario';
export { sumar, restar, PI } from './utils';
export { Producto } from './producto';

// SOLUCIÓN 11: RE-EXPORTACIÓN CON ALIAS
export { Usuario as UsuarioClass } from './usuario';
export { sumar as add, restar as subtract } from './utils';

// SOLUCIÓN 12: RE-EXPORTACIÓN DE TODO
export * from './usuario';
export * from './utils';
export * from './producto';

// SOLUCIÓN 13: RE-EXPORTACIÓN POR DEFECTO
export { default as Usuario } from './usuario';
export { default as Producto } from './producto';

// SOLUCIÓN 14: SISTEMA DE USUARIOS
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

type EstadoUsuario = "activo" | "inactivo" | "pendiente";

interface UsuarioCrear {
    nombre: string;
    email: string;
}

interface UsuarioActualizar {
    nombre?: string;
    email?: string;
    activo?: boolean;
}

class UsuarioModel {
    private usuarios: Usuario[] = [];
    
    crear(datos: UsuarioCrear): Usuario {
        const usuario: Usuario = {
            id: Math.floor(Math.random() * 1000),
            ...datos,
            activo: true
        };
        this.usuarios.push(usuario);
        return usuario;
    }
    
    obtener(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.id === id);
    }
    
    actualizar(id: number, datos: UsuarioActualizar): Usuario | undefined {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) return undefined;
        
        this.usuarios[index] = { ...this.usuarios[index], ...datos };
        return this.usuarios[index];
    }
    
    eliminar(id: number): boolean {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) return false;
        
        this.usuarios.splice(index, 1);
        return true;
    }
    
    listar(): Usuario[] {
        return [...this.usuarios];
    }
}

class UsuarioService {
    constructor(private usuarioModel: UsuarioModel) {}
    
    crearUsuario(datos: UsuarioCrear): Usuario {
        return this.usuarioModel.crear(datos);
    }
    
    obtenerUsuario(id: number): Usuario | undefined {
        return this.usuarioModel.obtener(id);
    }
    
    actualizarUsuario(id: number, datos: UsuarioActualizar): Usuario | undefined {
        return this.usuarioModel.actualizar(id, datos);
    }
    
    eliminarUsuario(id: number): boolean {
        return this.usuarioModel.eliminar(id);
    }
    
    listarUsuarios(): Usuario[] {
        return this.usuarioModel.listar();
    }
}

// SOLUCIÓN 15: SISTEMA DE UTILIDADES
export function formatearFecha(fecha: Date): string {
    return fecha.toLocaleDateString();
}

export function formatearFechaHora(fecha: Date): string {
    return fecha.toLocaleString();
}

export function agregarDias(fecha: Date, dias: number): Date {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}

export function esFechaValida(fecha: any): fecha is Date {
    return fecha instanceof Date && !isNaN(fecha.getTime());
}

export function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validarTelefono(telefono: string): boolean {
    return /^[\+]?[1-9][\d]{0,15}$/.test(telefono);
}

export function validarLongitud(texto: string, min: number, max: number): boolean {
    return texto.length >= min && texto.length <= max;
}

export function validarNumero(numero: any): numero is number {
    return typeof numero === 'number' && !isNaN(numero);
}

// SOLUCIÓN 16: SISTEMA DE CONFIGURACIÓN
interface DatabaseConfig {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
    ssl: boolean;
}

export const databaseConfig: DatabaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    name: process.env.DB_NAME || 'mi_base_datos',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    ssl: process.env.DB_SSL === 'true'
};

interface ServerConfig {
    host: string;
    port: number;
    ssl: boolean;
    timeout: number;
}

export const serverConfig: ServerConfig = {
    host: process.env.SERVER_HOST || 'localhost',
    port: parseInt(process.env.SERVER_PORT || '3000'),
    ssl: process.env.SERVER_SSL === 'true',
    timeout: parseInt(process.env.SERVER_TIMEOUT || '5000')
};

// SOLUCIÓN 17: BARREL EXPORTS
export * from './usuario';
export * from './producto';
export * from './orden';

export * from './usuario';
export * from './producto';
export * from './orden';

export * from './usuario';
export * from './producto';
export * from './orden';

export * from './fechas';
export * from './validaciones';
export * from './formateo';

// SOLUCIÓN 18: MÓDULOS DE TIPOS
declare module "mi-modulo" {
    export function funcion(): string;
    export const constante: number;
    export interface Interfaz {
        propiedad: string;
    }
}

declare module "modulo-externo" {
    export function funcionExterna(): string;
    export const constanteExterna: number;
}

// SOLUCIÓN 19: CONFIGURACIÓN DE MÓDULOS
const moduleConfig = {
    module: "ES6",
    target: "ES6",
    moduleResolution: "node",
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true
};

// SOLUCIÓN 20: CASOS DE USO AVANZADOS
export class Autenticacion {
    private usuarios: Map<string, string> = new Map();
    
    registrar(usuario: string, password: string): boolean {
        if (this.usuarios.has(usuario)) {
            return false;
        }
        this.usuarios.set(usuario, password);
        return true;
    }
    
    autenticar(usuario: string, password: string): boolean {
        return this.usuarios.get(usuario) === password;
    }
    
    eliminar(usuario: string): boolean {
        return this.usuarios.delete(usuario);
    }
}

export class Logger {
    private logs: string[] = [];
    
    log(mensaje: string): void {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] ${mensaje}`;
        this.logs.push(logEntry);
        console.log(logEntry);
    }
    
    obtenerLogs(): string[] {
        return [...this.logs];
    }
    
    limpiar(): void {
        this.logs = [];
    }
}

export class Cache<T> {
    private cache: Map<string, T> = new Map();
    private ttl: Map<string, number> = new Map();
    
    establecer(clave: string, valor: T, tiempoVida: number = 60000): void {
        this.cache.set(clave, valor);
        this.ttl.set(clave, Date.now() + tiempoVida);
    }
    
    obtener(clave: string): T | undefined {
        const expiracion = this.ttl.get(clave);
        if (expiracion && Date.now() > expiracion) {
            this.cache.delete(clave);
            this.ttl.delete(clave);
            return undefined;
        }
        return this.cache.get(clave);
    }
    
    eliminar(clave: string): boolean {
        this.ttl.delete(clave);
        return this.cache.delete(clave);
    }
    
    limpiar(): void {
        this.cache.clear();
        this.ttl.clear();
    }
}

// ========================================
// EJEMPLOS DE USO
// ========================================

console.log("=== EJERCICIOS DE MÓDULOS ===");

// Ejemplo de uso de las exportaciones creadas
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Activo:", activo);
console.log("Saludo:", saludar("María"));
console.log("Despedida:", despedir("Pedro"));

let usuario = new Usuario("Ana", "ana@email.com");
console.log("Usuario:", usuario.obtenerInformacion());

// Ejemplo con exportación por defecto
let producto = new Producto(1, "Laptop", 999.99);
console.log("Producto:", producto.obtenerInformacion());

// Ejemplo con exportaciones mixtas
console.log("Versión:", VERSION);
console.log("Autor:", AUTOR);

let usuario2 = new Usuario(1, "Luis", "luis@email.com");
console.log("Usuario:", usuario2.obtenerInformacion());

let usuario3 = crearUsuario("Elena", "elena@email.com");
console.log("Usuario creado:", usuario3.obtenerInformacion());

// Ejemplo con sistema de usuarios
let usuarioModel = new UsuarioModel();
let usuarioService = new UsuarioService(usuarioModel);

let usuarioCreado = usuarioService.crearUsuario({
    nombre: "Nuevo Usuario",
    email: "nuevo@email.com"
});

console.log("Usuario creado:", usuarioCreado);

let usuarioObtenido = usuarioService.obtenerUsuario(usuarioCreado.id);
console.log("Usuario obtenido:", usuarioObtenido);

let usuarioActualizado = usuarioService.actualizarUsuario(usuarioCreado.id, {
    nombre: "Usuario Actualizado"
});

console.log("Usuario actualizado:", usuarioActualizado);

let usuarios = usuarioService.listarUsuarios();
console.log("Usuarios:", usuarios);

// Ejemplo con sistema de utilidades
console.log("Fecha formateada:", formatearFecha(new Date()));
console.log("Fecha y hora formateada:", formatearFechaHora(new Date()));

let fechaFutura = agregarDias(new Date(), 7);
console.log("Fecha futura:", formatearFecha(fechaFutura));

console.log("¿Es fecha válida?", esFechaValida(new Date()));
console.log("¿Es fecha válida?", esFechaValida("no es fecha"));

console.log("Email válido:", validarEmail("test@email.com"));
console.log("Email inválido:", validarEmail("email-invalido"));

console.log("Teléfono válido:", validarTelefono("123456789"));
console.log("Teléfono inválido:", validarTelefono("abc123"));

console.log("Longitud válida:", validarLongitud("Hola", 2, 10));
console.log("Longitud inválida:", validarLongitud("H", 2, 10));

console.log("¿Es número?", validarNumero(42));
console.log("¿Es número?", validarNumero("42"));

// Ejemplo con sistema de configuración
console.log("Configuración de base de datos:", databaseConfig);
console.log("Configuración de servidor:", serverConfig);

// Ejemplo con casos de uso avanzados
let auth = new Autenticacion();
auth.registrar("usuario1", "password123");
console.log("Usuario registrado:", auth.autenticar("usuario1", "password123"));
console.log("Autenticación incorrecta:", auth.autenticar("usuario1", "password456"));

let logger = new Logger();
logger.log("Aplicación iniciada");
logger.log("Usuario autenticado");
logger.log("Operación completada");
console.log("Logs:", logger.obtenerLogs());

let cache = new Cache<string>();
cache.establecer("clave1", "valor1", 1000);
cache.establecer("clave2", "valor2", 2000);

console.log("Valor desde caché:", cache.obtener("clave1"));
console.log("Valor desde caché:", cache.obtener("clave2"));

setTimeout(() => {
    console.log("Valor después de expiración:", cache.obtener("clave1"));
    console.log("Valor después de expiración:", cache.obtener("clave2"));
}, 1500);

console.log("Todos los ejercicios completados correctamente!");
console.log("=== FIN DE EJERCICIOS DE MÓDULOS ===");

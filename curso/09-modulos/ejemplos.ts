// ========================================
// EJEMPLOS - MÓDULOS EN TYPESCRIPT
// ========================================

// 1. EXPORTACIONES NOMBRADAS
// ========================================

// Simulación de exportaciones desde un archivo separado
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

console.log("=== EXPORTACIONES NOMBRADAS ===");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Activo:", activo);
console.log("Saludo:", saludar("María"));
console.log("Despedida:", despedir("Pedro"));

let usuario = new Usuario("Ana", "ana@email.com");
console.log("Usuario:", usuario.obtenerInformacion());

// 2. EXPORTACIÓN POR DEFECTO
// ========================================

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

// Exportación por defecto
export default Producto;

console.log("\n=== EXPORTACIÓN POR DEFECTO ===");
let producto = new Producto(1, "Laptop", 999.99);
console.log("Producto:", producto.obtenerInformacion());

// 3. EXPORTACIONES MIXTAS
// ========================================

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

// Exportación por defecto
export default Usuario;

console.log("\n=== EXPORTACIONES MIXTAS ===");
console.log("Versión:", VERSION);
console.log("Autor:", AUTOR);

let usuario2 = new Usuario(1, "Luis", "luis@email.com");
console.log("Usuario:", usuario2.obtenerInformacion());

let usuario3 = crearUsuario("Elena", "elena@email.com");
console.log("Usuario creado:", usuario3.obtenerInformacion());

// 4. IMPORTACIONES NOMBRADAS
// ========================================

// Simulación de importaciones desde archivos separados
import { nombre, edad, saludar, Usuario, Configuracion, Estado } from './exportaciones';

console.log("\n=== IMPORTACIONES NOMBRADAS ===");
console.log("Nombre importado:", nombre);
console.log("Edad importada:", edad);
console.log("Saludo importado:", saludar("Carlos"));

let usuarioImportado = new Usuario("Roberto", "roberto@email.com");
console.log("Usuario importado:", usuarioImportado.obtenerInformacion());

// 5. IMPORTACIÓN POR DEFECTO
// ========================================

// Simulación de importación por defecto
import Producto from './producto';

console.log("\n=== IMPORTACIÓN POR DEFECTO ===");
let productoImportado = new Producto(2, "Mouse", 29.99);
console.log("Producto importado:", productoImportado.obtenerInformacion());

// 6. IMPORTACIONES MIXTAS
// ========================================

// Simulación de importaciones mixtas
import Usuario, { VERSION, IUsuario, crearUsuario } from './usuario';

console.log("\n=== IMPORTACIONES MIXTAS ===");
console.log("Versión importada:", VERSION);

let usuario4 = new Usuario(3, "Sofia", "sofia@email.com");
console.log("Usuario por defecto:", usuario4.obtenerInformacion());

let usuario5 = crearUsuario("Diego", "diego@email.com");
console.log("Usuario creado:", usuario5.obtenerInformacion());

// 7. IMPORTACIÓN CON ALIAS
// ========================================

// Simulación de importaciones con alias
import { Usuario as UsuarioClass } from './usuario';
import { saludar as greet } from './utils';

console.log("\n=== IMPORTACIÓN CON ALIAS ===");
let usuarioAlias = new UsuarioClass(4, "Isabella", "isabella@email.com");
console.log("Usuario con alias:", usuarioAlias.obtenerInformacion());
console.log("Saludo con alias:", greet("Gabriel"));

// 8. IMPORTACIÓN DE TODO
// ========================================

// Simulación de importación de todo
import * as utils from './utils';
import * as usuario from './usuario';

console.log("\n=== IMPORTACIÓN DE TODO ===");
console.log("Utils PI:", utils.PI);
console.log("Utils E:", utils.E);
console.log("Utils sumar:", utils.sumar(5, 3));
console.log("Usuario VERSION:", usuario.VERSION);
console.log("Usuario AUTOR:", usuario.AUTOR);

// 9. IMPORTACIÓN DE TIPOS
// ========================================

// Simulación de importación de tipos
import type { Configuracion, Estado } from './tipos';
import type { IUsuario } from './usuario';

console.log("\n=== IMPORTACIÓN DE TIPOS ===");
console.log("Tipos importados correctamente");

// 10. RE-EXPORTACIONES
// ========================================

// Simulación de re-exportaciones
export { Usuario, crearUsuario } from './usuario';
export { sumar, restar, PI } from './utils';
export { Producto } from './producto';

console.log("\n=== RE-EXPORTACIONES ===");
console.log("Re-exportaciones configuradas");

// 11. RE-EXPORTACIÓN CON ALIAS
// ========================================

// Simulación de re-exportación con alias
export { Usuario as UsuarioClass } from './usuario';
export { sumar as add, restar as subtract } from './utils';

console.log("\n=== RE-EXPORTACIÓN CON ALIAS ===");
console.log("Re-exportaciones con alias configuradas");

// 12. RE-EXPORTACIÓN DE TODO
// ========================================

// Simulación de re-exportación de todo
export * from './usuario';
export * from './utils';
export * from './producto';

console.log("\n=== RE-EXPORTACIÓN DE TODO ===");
console.log("Re-exportaciones de todo configuradas");

// 13. RE-EXPORTACIÓN POR DEFECTO
// ========================================

// Simulación de re-exportación por defecto
export { default as Usuario } from './usuario';
export { default as Producto } from './producto';

console.log("\n=== RE-EXPORTACIÓN POR DEFECTO ===");
console.log("Re-exportaciones por defecto configuradas");

// 14. SISTEMA DE USUARIOS
// ========================================

// Tipos
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

export type EstadoUsuario = "activo" | "inactivo" | "pendiente";

export interface UsuarioCrear {
    nombre: string;
    email: string;
}

export interface UsuarioActualizar {
    nombre?: string;
    email?: string;
    activo?: boolean;
}

// Modelo
export class UsuarioModel {
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

// Servicio
export class UsuarioService {
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

console.log("\n=== SISTEMA DE USUARIOS ===");
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

// 15. SISTEMA DE UTILIDADES
// ========================================

// Fechas
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

// Validaciones
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

console.log("\n=== SISTEMA DE UTILIDADES ===");
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

// 16. SISTEMA DE CONFIGURACIÓN
// ========================================

// Base de datos
export interface DatabaseConfig {
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

// Servidor
export interface ServerConfig {
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

console.log("\n=== SISTEMA DE CONFIGURACIÓN ===");
console.log("Configuración de base de datos:", databaseConfig);
console.log("Configuración de servidor:", serverConfig);

// 17. BARREL EXPORTS
// ========================================

// Simulación de barrel exports
export * from './tipos/usuario';
export * from './tipos/producto';
export * from './tipos/orden';

export * from './modelos/usuario';
export * from './modelos/producto';
export * from './modelos/orden';

export * from './servicios/usuario';
export * from './servicios/producto';
export * from './servicios/orden';

export * from './utils/fechas';
export * from './utils/validaciones';
export * from './utils/formateo';

console.log("\n=== BARREL EXPORTS ===");
console.log("Barrel exports configurados");

// 18. MÓDULOS DE TIPOS
// ========================================

// Declaración de módulo
declare module "mi-modulo" {
    export function funcion(): string;
    export const constante: number;
    export interface Interfaz {
        propiedad: string;
    }
}

// Módulo de tipos externo
declare module "modulo-externo" {
    export function funcionExterna(): string;
    export const constanteExterna: number;
}

console.log("\n=== MÓDULOS DE TIPOS ===");
console.log("Módulos de tipos declarados");

// 19. CONFIGURACIÓN DE MÓDULOS
// ========================================

// Simulación de configuración de módulos
const moduleConfig = {
    module: "ES6",
    target: "ES6",
    moduleResolution: "node",
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true
};

console.log("\n=== CONFIGURACIÓN DE MÓDULOS ===");
console.log("Configuración de módulos:", moduleConfig);

// 20. CASOS DE USO AVANZADOS
// ========================================

// Módulo de autenticación
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

// Módulo de logging
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

// Módulo de caché
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

console.log("\n=== CASOS DE USO AVANZADOS ===");

// Uso de autenticación
let auth = new Autenticacion();
auth.registrar("usuario1", "password123");
console.log("Usuario registrado:", auth.autenticar("usuario1", "password123"));
console.log("Autenticación incorrecta:", auth.autenticar("usuario1", "password456"));

// Uso de logging
let logger = new Logger();
logger.log("Aplicación iniciada");
logger.log("Usuario autenticado");
logger.log("Operación completada");
console.log("Logs:", logger.obtenerLogs());

// Uso de caché
let cache = new Cache<string>();
cache.establecer("clave1", "valor1", 1000);
cache.establecer("clave2", "valor2", 2000);

console.log("Valor desde caché:", cache.obtener("clave1"));
console.log("Valor desde caché:", cache.obtener("clave2"));

setTimeout(() => {
    console.log("Valor después de expiración:", cache.obtener("clave1"));
    console.log("Valor después de expiración:", cache.obtener("clave2"));
}, 1500);

console.log("\n=== FIN DE EJEMPLOS DE MÓDULOS ===");

// ========================================
// EJEMPLOS - ENUMS EN TYPESCRIPT
// ========================================

// 1. NUMERIC ENUMS (ENUMS NUMÉRICOS)
// ========================================

// Enum básico con valores automáticos
enum Direccion {
    Norte,    // 0
    Sur,      // 1
    Este,     // 2
    Oeste     // 3
}

let direccion: Direccion = Direccion.Norte;
console.log("=== NUMERIC ENUMS ===");
console.log("Dirección Norte:", direccion);
console.log("Dirección Sur:", Direccion.Sur);
console.log("Dirección Este:", Direccion.Este);
console.log("Dirección Oeste:", Direccion.Oeste);

// Enum con valores personalizados
enum EstadoPedido {
    Pendiente = 1,
    Procesando = 2,
    Enviado = 3,
    Entregado = 4
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
console.log("\nEstado del pedido:", estado);
console.log("Estado procesando:", EstadoPedido.Procesando);

// 2. STRING ENUMS (ENUMS DE CADENA)
// ========================================

enum TipoUsuario {
    Admin = "ADMIN",
    Usuario = "USUARIO",
    Invitado = "INVITADO"
}

let tipo: TipoUsuario = TipoUsuario.Admin;
console.log("\n=== STRING ENUMS ===");
console.log("Tipo de usuario:", tipo);
console.log("Es admin?", tipo === TipoUsuario.Admin);

// Enum de colores
enum Color {
    Rojo = "ROJO",
    Verde = "VERDE",
    Azul = "AZUL",
    Amarillo = "AMARILLO"
}

let colorFavorito: Color = Color.Azul;
console.log("Color favorito:", colorFavorito);

// 3. HETEROGENEOUS ENUMS (ENUMS HETEROGÉNEOS)
// ========================================

enum Respuesta {
    No = 0,
    Si = 1,
    TalVez = "TAL_VEZ"
}

console.log("\n=== HETEROGENEOUS ENUMS ===");
console.log("Respuesta No:", Respuesta.No);
console.log("Respuesta Sí:", Respuesta.Si);
console.log("Respuesta Tal vez:", Respuesta.TalVez);

// 4. REVERSE MAPPING (MAPEO INVERSO)
// ========================================

enum DiaSemana {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
    Domingo = 7
}

console.log("\n=== REVERSE MAPPING ===");
console.log("DiaSemana.Lunes:", DiaSemana.Lunes);
console.log("DiaSemana[1]:", DiaSemana[1]);
console.log("DiaSemana[3]:", DiaSemana[3]);
console.log("DiaSemana[7]:", DiaSemana[7]);

// 5. COMPUTED VALUES (VALORES COMPUTADOS)
// ========================================

enum FileAccess {
    None = 0,
    Read = 1 << 1,    // 2
    Write = 1 << 2,   // 4
    ReadWrite = Read | Write  // 6
}

console.log("\n=== COMPUTED VALUES ===");
console.log("FileAccess.None:", FileAccess.None);
console.log("FileAccess.Read:", FileAccess.Read);
console.log("FileAccess.Write:", FileAccess.Write);
console.log("FileAccess.ReadWrite:", FileAccess.ReadWrite);

// 6. CONST ENUMS
// ========================================

const enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

let prioridad: Prioridad = Prioridad.Alta;
console.log("\n=== CONST ENUMS ===");
console.log("Prioridad:", prioridad);
//console.log("Es crítica?", prioridad === Prioridad.Critica); //Check de codigo muerto
console.log("Es alta?", prioridad === Prioridad.Alta);


if ((prioridad as Prioridad) === Prioridad.Critica) {
    console.log("Es crítica");
}
// 7. ENUMS EN FUNCIONES
// ========================================

enum NivelLog {
    Debug = "DEBUG",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}

function logMensaje(nivel: NivelLog, mensaje: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${nivel}: ${mensaje}`);
}

console.log("\n=== ENUMS EN FUNCIONES ===");
logMensaje(NivelLog.Info, "Aplicación iniciada");
logMensaje(NivelLog.Warning, "Memoria baja");
logMensaje(NivelLog.Error, "Error de conexión");

// 8. ENUMS EN INTERFACES
// ========================================

enum EstadoUsuario {
    Activo = "ACTIVO",
    Inactivo = "INACTIVO",
    Suspendido = "SUSPENDIDO"
}

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    estado: EstadoUsuario;
}

let usuario2: Usuario = {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    estado: EstadoUsuario.Activo
};

console.log("\n=== ENUMS EN INTERFACES ===");
console.log("Usuario:", usuario2);
console.log("Estado del usuario:", usuario2.estado);

// 9. ENUMS EN CLASES
// ========================================

enum TipoVehiculo {
    Coche = "COCHE",
    Moto = "MOTO",
    Camion = "CAMION",
    Bicicleta = "BICICLETA"
}

class Vehiculo {
    constructor(
        public marca: string,
        public modelo: string,
        public tipo: TipoVehiculo
    ) {}
    
    obtenerInfo(): string {
        return `${this.marca} ${this.modelo} - ${this.tipo}`;
    }
    
    esMotorizado(): boolean {
        return this.tipo !== TipoVehiculo.Bicicleta;
    }
}

console.log("\n=== ENUMS EN CLASES ===");
let coche = new Vehiculo("Toyota", "Corolla", TipoVehiculo.Coche);
let bici = new Vehiculo("Trek", "Mountain", TipoVehiculo.Bicicleta);

console.log("Coche:", coche.obtenerInfo());
console.log("¿Es motorizado?", coche.esMotorizado());
console.log("Bicicleta:", bici.obtenerInfo());
console.log("¿Es motorizada?", bici.esMotorizado());

// 10. ENUMS CON FLAGS (BANDERAS)
// ========================================

enum Permisos {
    Ninguno = 0,
    Lectura = 1,
    Escritura = 2,
    Ejecucion = 4,
    Administrador = 8
}

// Combinar permisos
let permisosUsuario = Permisos.Lectura | Permisos.Escritura;
let permisosAdmin = Permisos.Lectura | Permisos.Escritura | Permisos.Ejecucion | Permisos.Administrador;

// Verificar permisos
function tienePermiso(permisos: Permisos, permiso: Permisos): boolean {
    return (permisos & permiso) === permiso;
}

function obtenerPermisos(permisos: Permisos): string[] {
    let resultado: string[] = [];
    if (tienePermiso(permisos, Permisos.Lectura)) resultado.push("Lectura");
    if (tienePermiso(permisos, Permisos.Escritura)) resultado.push("Escritura");
    if (tienePermiso(permisos, Permisos.Ejecucion)) resultado.push("Ejecución");
    if (tienePermiso(permisos, Permisos.Administrador)) resultado.push("Administrador");
    return resultado;
}

console.log("\n=== ENUMS CON FLAGS ===");
console.log("Permisos usuario:", obtenerPermisos(permisosUsuario));
console.log("Permisos admin:", obtenerPermisos(permisosAdmin));
console.log("¿Usuario puede leer?", tienePermiso(permisosUsuario, Permisos.Lectura));
console.log("¿Usuario puede ejecutar?", tienePermiso(permisosUsuario, Permisos.Ejecucion));

// 11. ENUMS EN APIs
// ========================================

enum CodigoRespuesta {
    Exito = 200,
    Creado = 201,
    NoEncontrado = 404,
    ErrorServidor = 500,
    NoAutorizado = 401,
    Prohibido = 403
}

interface RespuestaAPI {
    codigo: CodigoRespuesta;
    mensaje: string;
    datos?: any;
}

function crearRespuesta(codigo: CodigoRespuesta, mensaje: string, datos?: any): RespuestaAPI {
    return {
        codigo,
        mensaje,
        datos
    };
}

console.log("\n=== ENUMS EN APIs ===");
let respuestaExito = crearRespuesta(CodigoRespuesta.Exito, "Operación exitosa", { id: 1 });
let respuestaError = crearRespuesta(CodigoRespuesta.NoEncontrado, "Recurso no encontrado");

console.log("Respuesta éxito:", respuestaExito);
console.log("Respuesta error:", respuestaError);

// 12. ENUMS DE ESTADO
// ========================================

enum EstadoCarga {
    Inicial = "INICIAL",
    Cargando = "CARGANDO",
    Exitoso = "EXITOSO",
    Error = "ERROR"
}

class ComponenteCarga {
    private estado: EstadoCarga = EstadoCarga.Inicial;
    private datos: any = null;
    private error: string | null = null;
    
    cargar(): void {
        this.estado = EstadoCarga.Cargando;
        this.error = null;
        console.log("Iniciando carga...");
        
        // Simular carga asíncrona
        setTimeout(() => {
            if (Math.random() > 0.5) {
                this.estado = EstadoCarga.Exitoso;
                this.datos = { mensaje: "Datos cargados correctamente" };
                console.log("Carga exitosa");
            } else {
                this.estado = EstadoCarga.Error;
                this.error = "Error de conexión";
                console.log("Error en la carga");
            }
        }, 1000);
    }
    
    obtenerEstado(): EstadoCarga {
        return this.estado;
    }
    
    obtenerDatos(): any {
        return this.datos;
    }
    
    obtenerError(): string | null {
        return this.error;
    }
}

console.log("\n=== ENUMS DE ESTADO ===");
let componente = new ComponenteCarga();
console.log("Estado inicial:", componente.obtenerEstado());
componente.cargar();

// 13. ENUMS DE NOTIFICACIONES
// ========================================

enum TipoNotificacion {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Success = "SUCCESS"
}

enum PrioridadNotificacion {
    Baja = 1,
    Media = 2,
    Alta = 3
}

interface Notificacion {
    id: string;
    tipo: TipoNotificacion;
    prioridad: PrioridadNotificacion;
    mensaje: string;
    timestamp: Date;
}

class SistemaNotificaciones {
    private notificaciones: Notificacion[] = [];
    
    agregarNotificacion(tipo: TipoNotificacion, mensaje: string, prioridad: PrioridadNotificacion = PrioridadNotificacion.Media): void {
        const notificacion: Notificacion = {
            id: Math.random().toString(36).substr(2, 9),
            tipo,
            prioridad,
            mensaje,
            timestamp: new Date()
        };
        
        this.notificaciones.push(notificacion);
        console.log(`Notificación ${tipo} agregada: ${mensaje}`);
    }
    
    obtenerNotificaciones(): Notificacion[] {
        return this.notificaciones;
    }
    
    obtenerNotificacionesPorTipo(tipo: TipoNotificacion): Notificacion[] {
        return this.notificaciones.filter(n => n.tipo === tipo);
    }
}

console.log("\n=== ENUMS DE NOTIFICACIONES ===");
let sistema = new SistemaNotificaciones();
sistema.agregarNotificacion(TipoNotificacion.Success, "Usuario creado exitosamente", PrioridadNotificacion.Alta);
sistema.agregarNotificacion(TipoNotificacion.Warning, "Memoria baja", PrioridadNotificacion.Media);
sistema.agregarNotificacion(TipoNotificacion.Error, "Error de conexión", PrioridadNotificacion.Alta);

console.log("Todas las notificaciones:", sistema.obtenerNotificaciones());
console.log("Notificaciones de error:", sistema.obtenerNotificacionesPorTipo(TipoNotificacion.Error));

// 14. ENUMS DE AUTENTICACIÓN
// ========================================

enum RolUsuario {
    Admin = "ADMIN",
    Moderador = "MODERADOR",
    Usuario = "USUARIO",
    Invitado = "INVITADO"
}

enum EstadoSesion {
    Activa = "ACTIVA",
    Expirada = "EXPIRADA",
    Cerrada = "CERRADA"
}

class UsuarioAutenticado {
    constructor(
        public id: string,
        public nombre: string,
        public rol: RolUsuario,
        public estadoSesion: EstadoSesion
    ) {}
    
    puedeAcceder(recurso: string): boolean {
        switch (this.rol) {
            case RolUsuario.Admin:
                return true;
            case RolUsuario.Moderador:
                return recurso !== "admin-panel";
            case RolUsuario.Usuario:
                return recurso === "perfil" || recurso === "dashboard";
            case RolUsuario.Invitado:
                return recurso === "publico";
            default:
                return false;
        }
    }
    
    esAdmin(): boolean {
        return this.rol === RolUsuario.Admin;
    }
}

console.log("\n=== ENUMS DE AUTENTICACIÓN ===");
let admin = new UsuarioAutenticado("1", "Admin", RolUsuario.Admin, EstadoSesion.Activa);
let usuario = new UsuarioAutenticado("2", "Usuario", RolUsuario.Usuario, EstadoSesion.Activa);

console.log("Admin puede acceder a admin-panel:", admin.puedeAcceder("admin-panel"));
console.log("Usuario puede acceder a admin-panel:", usuario.puedeAcceder("admin-panel"));
console.log("Usuario puede acceder a perfil:", usuario.puedeAcceder("perfil"));
console.log("¿Es admin?", admin.esAdmin());

// 15. ENUMS DE ARCHIVOS
// ========================================

enum TipoArchivo {
    Documento = "DOCUMENTO",
    Imagen = "IMAGEN",
    Video = "VIDEO",
    Audio = "AUDIO",
    Archivo = "ARCHIVO"
}

enum PermisosArchivo {
    Ninguno = 0,
    Lectura = 1,
    Escritura = 2,
    Ejecucion = 4
}

interface Archivo {
    nombre: string;
    tipo: TipoArchivo;
    permisos: PermisosArchivo;
    tamaño: number;
}

class GestorArchivos {
    private archivos: Archivo[] = [];
    
    agregarArchivo(archivo: Archivo): void {
        this.archivos.push(archivo);
        console.log(`Archivo ${archivo.nombre} agregado`);
    }
    
    obtenerArchivosPorTipo(tipo: TipoArchivo): Archivo[] {
        return this.archivos.filter(a => a.tipo === tipo);
    }
    
    puedeLeer(archivo: Archivo): boolean {
        return (archivo.permisos & PermisosArchivo.Lectura) === PermisosArchivo.Lectura;
    }
    
    puedeEscribir(archivo: Archivo): boolean {
        return (archivo.permisos & PermisosArchivo.Escritura) === PermisosArchivo.Escritura;
    }
}

console.log("\n=== ENUMS DE ARCHIVOS ===");
let gestor = new GestorArchivos();

let documento: Archivo = {
    nombre: "reporte.pdf",
    tipo: TipoArchivo.Documento,
    permisos: PermisosArchivo.Lectura | PermisosArchivo.Escritura,
    tamaño: 1024
};

let imagen: Archivo = {
    nombre: "foto.jpg",
    tipo: TipoArchivo.Imagen,
    permisos: PermisosArchivo.Lectura,
    tamaño: 2048
};

gestor.agregarArchivo(documento);
gestor.agregarArchivo(imagen);

console.log("Documentos:", gestor.obtenerArchivosPorTipo(TipoArchivo.Documento));
console.log("¿Puede leer documento?", gestor.puedeLeer(documento));
console.log("¿Puede escribir en imagen?", gestor.puedeEscribir(imagen));

console.log("\n=== FIN DE EJEMPLOS DE ENUMS ===");

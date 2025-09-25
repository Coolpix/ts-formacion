// ========================================
// EJERCICIOS - ENUMS EN TYPESCRIPT
// ========================================

// EJERCICIO 1: Enum básico
// ========================================
// Crea un enum 'DiaSemana' con los días de la semana
// Usa valores numéricos del 1 al 7
// Crea una variable que use este enum

// TODO: Escribe tu código aquí
// enum DiaSemana {
//     // Tu código aquí
// }
// let diaActual: DiaSemana = 

// EJERCICIO 2: String enum
// ========================================
// Crea un enum 'TipoUsuario' con los valores: Admin, Usuario, Invitado
// Usa valores de string para cada uno
// Crea una función que reciba un tipo de usuario y retorne un mensaje

// TODO: Escribe tu código aquí
// enum TipoUsuario {
//     // Tu código aquí
// }

// function obtenerMensajeUsuario(tipo: TipoUsuario): string {
//     // Tu código aquí
// }

// EJERCICIO 3: Enum con valores personalizados
// ========================================
// Crea un enum 'EstadoPedido' con los valores:
// - Pendiente = 1
// - Procesando = 2
// - Enviado = 3
// - Entregado = 4
// Crea una función que procese un pedido según su estado

// TODO: Escribe tu código aquí
// enum EstadoPedido {
//     // Tu código aquí
// }

// function procesarPedido(estado: EstadoPedido): string {
//     // Tu código aquí
// }

// EJERCICIO 4: Enum con flags
// ========================================
// Crea un enum 'Permisos' con los valores:
// - Ninguno = 0
// - Lectura = 1
// - Escritura = 2
// - Ejecucion = 4
// Crea funciones para verificar y combinar permisos

// TODO: Escribe tu código aquí
// enum Permisos {
//     // Tu código aquí
// }

// function tienePermiso(permisos: Permisos, permiso: Permisos): boolean {
//     // Tu código aquí
// }

// function combinarPermisos(permiso1: Permisos, permiso2: Permisos): Permisos {
//     // Tu código aquí
// }

// EJERCICIO 5: Enum en interfaz
// ========================================
// Crea un enum 'Prioridad' con valores: Baja, Media, Alta
// Crea una interfaz 'Tarea' que use este enum
// Crea un objeto que implemente la interfaz

// TODO: Escribe tu código aquí
// enum Prioridad {
//     // Tu código aquí
// }

// interface Tarea {
//     // Tu código aquí
// }

// let tarea: Tarea = 

// EJERCICIO 6: Enum en clase
// ========================================
// Crea un enum 'TipoVehiculo' con valores: Coche, Moto, Camion
// Crea una clase 'Vehiculo' que use este enum
// Añade métodos que dependan del tipo de vehículo

// TODO: Escribe tu código aquí
// enum TipoVehiculo {
//     // Tu código aquí
// }

// class Vehiculo {
//     // Tu código aquí
// }

// EJERCICIO 7: Enum de colores
// ========================================
// Crea un enum 'Color' con valores de string para colores básicos
// Crea una función que reciba un color y retorne su código hexadecimal
// Crea una función que mezcle dos colores

// TODO: Escribe tu código aquí
// enum Color {
//     // Tu código aquí
// }

// function obtenerCodigoHex(color: Color): string {
//     // Tu código aquí
// }

// function mezclarColores(color1: Color, color2: Color): string {
//     // Tu código aquí
// }

// EJERCICIO 8: Enum de estados
// ========================================
// Crea un enum 'EstadoCarga' con valores: Inicial, Cargando, Exitoso, Error
// Crea una clase 'ComponenteCarga' que maneje estos estados
// Añade métodos para cambiar de estado

// TODO: Escribe tu código aquí
// enum EstadoCarga {
//     // Tu código aquí
// }

// class ComponenteCarga {
//     // Tu código aquí
// }

// ========================================
// SOLUCIONES
// ========================================

console.log("=== SOLUCIONES ===");

// SOLUCIÓN 1: Enum básico
enum DiaSemana {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
    Domingo = 7
}

let diaActual: DiaSemana = DiaSemana.Lunes;

console.log("1. Enum básico:");
console.log("Día actual:", diaActual);
console.log("Día de la semana:", DiaSemana[diaActual]);

// SOLUCIÓN 2: String enum
enum TipoUsuario {
    Admin = "ADMIN",
    Usuario = "USUARIO",
    Invitado = "INVITADO"
}

function obtenerMensajeUsuario(tipo: TipoUsuario): string {
    switch (tipo) {
        case TipoUsuario.Admin:
            return "Bienvenido, administrador";
        case TipoUsuario.Usuario:
            return "Bienvenido, usuario";
        case TipoUsuario.Invitado:
            return "Bienvenido, invitado";
        default:
            return "Tipo de usuario desconocido";
    }
}

console.log("\n2. String enum:");
console.log("Mensaje admin:", obtenerMensajeUsuario(TipoUsuario.Admin));
console.log("Mensaje usuario:", obtenerMensajeUsuario(TipoUsuario.Usuario));
console.log("Mensaje invitado:", obtenerMensajeUsuario(TipoUsuario.Invitado));

// SOLUCIÓN 3: Enum con valores personalizados
enum EstadoPedido {
    Pendiente = 1,
    Procesando = 2,
    Enviado = 3,
    Entregado = 4
}

function procesarPedido(estado: EstadoPedido): string {
    switch (estado) {
        case EstadoPedido.Pendiente:
            return "El pedido está pendiente de procesamiento";
        case EstadoPedido.Procesando:
            return "El pedido está siendo procesado";
        case EstadoPedido.Enviado:
            return "El pedido ha sido enviado";
        case EstadoPedido.Entregado:
            return "El pedido ha sido entregado";
        default:
            return "Estado desconocido";
    }
}

console.log("\n3. Enum con valores personalizados:");
console.log("Estado pendiente:", procesarPedido(EstadoPedido.Pendiente));
console.log("Estado procesando:", procesarPedido(EstadoPedido.Procesando));
console.log("Estado enviado:", procesarPedido(EstadoPedido.Enviado));
console.log("Estado entregado:", procesarPedido(EstadoPedido.Entregado));

// SOLUCIÓN 4: Enum con flags
enum Permisos {
    Ninguno = 0,
    Lectura = 1,
    Escritura = 2,
    Ejecucion = 4
}

function tienePermiso(permisos: Permisos, permiso: Permisos): boolean {
    return (permisos & permiso) === permiso;
}

function combinarPermisos(permiso1: Permisos, permiso2: Permisos): Permisos {
    return permiso1 | permiso2;
}

console.log("\n4. Enum con flags:");
let permisosUsuario = combinarPermisos(Permisos.Lectura, Permisos.Escritura);
console.log("Permisos usuario:", permisosUsuario);
console.log("¿Puede leer?", tienePermiso(permisosUsuario, Permisos.Lectura));
console.log("¿Puede ejecutar?", tienePermiso(permisosUsuario, Permisos.Ejecucion));

// SOLUCIÓN 5: Enum en interfaz
enum Prioridad {
    Baja = "BAJA",
    Media = "MEDIA",
    Alta = "ALTA"
}

interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    prioridad: Prioridad;
    completada: boolean;
}

let tarea: Tarea = {
    id: 1,
    titulo: "Implementar login",
    descripcion: "Crear sistema de autenticación",
    prioridad: Prioridad.Alta,
    completada: false
};

console.log("\n5. Enum en interfaz:");
console.log("Tarea:", tarea);
console.log("Prioridad:", tarea.prioridad);

// SOLUCIÓN 6: Enum en clase
enum TipoVehiculo {
    Coche = "COCHE",
    Moto = "MOTO",
    Camion = "CAMION"
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
    
    necesitaCarnet(): boolean {
        return this.tipo === TipoVehiculo.Coche || this.tipo === TipoVehiculo.Camion;
    }
    
    obtenerVelocidadMaxima(): number {
        switch (this.tipo) {
            case TipoVehiculo.Coche:
                return 200;
            case TipoVehiculo.Moto:
                return 180;
            case TipoVehiculo.Camion:
                return 120;
            default:
                return 0;
        }
    }
}

console.log("\n6. Enum en clase:");
let coche = new Vehiculo("Toyota", "Corolla", TipoVehiculo.Coche);
let moto = new Vehiculo("Honda", "CBR", TipoVehiculo.Moto);

console.log("Coche:", coche.obtenerInfo());
console.log("¿Necesita carnet?", coche.necesitaCarnet());
console.log("Velocidad máxima:", coche.obtenerVelocidadMaxima());

console.log("Moto:", moto.obtenerInfo());
console.log("¿Necesita carnet?", moto.necesitaCarnet());
console.log("Velocidad máxima:", moto.obtenerVelocidadMaxima());

// SOLUCIÓN 7: Enum de colores
enum Color {
    Rojo = "ROJO",
    Verde = "VERDE",
    Azul = "AZUL",
    Amarillo = "AMARILLO",
    Negro = "NEGRO",
    Blanco = "BLANCO"
}

function obtenerCodigoHex(color: Color): string {
    switch (color) {
        case Color.Rojo:
            return "#FF0000";
        case Color.Verde:
            return "#00FF00";
        case Color.Azul:
            return "#0000FF";
        case Color.Amarillo:
            return "#FFFF00";
        case Color.Negro:
            return "#000000";
        case Color.Blanco:
            return "#FFFFFF";
        default:
            return "#000000";
    }
}

function mezclarColores(color1: Color, color2: Color): string {
    return `${color1} + ${color2} = Mezcla`;
}

console.log("\n7. Enum de colores:");
console.log("Código hex rojo:", obtenerCodigoHex(Color.Rojo));
console.log("Código hex azul:", obtenerCodigoHex(Color.Azul));
console.log("Mezclar colores:", mezclarColores(Color.Rojo, Color.Azul));

// SOLUCIÓN 8: Enum de estados
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
    
    obtenerEstado(): EstadoCarga {
        return this.estado;
    }
    
    cargar(): void {
        this.estado = EstadoCarga.Cargando;
        this.error = null;
        console.log("Iniciando carga...");
        
        // Simular carga
        setTimeout(() => {
            if (Math.random() > 0.5) {
                this.estado = EstadoCarga.Exitoso;
                this.datos = { mensaje: "Datos cargados" };
                console.log("Carga exitosa");
            } else {
                this.estado = EstadoCarga.Error;
                this.error = "Error de conexión";
                console.log("Error en la carga");
            }
        }, 1000);
    }
    
    reiniciar(): void {
        this.estado = EstadoCarga.Inicial;
        this.datos = null;
        this.error = null;
        console.log("Componente reiniciado");
    }
    
    obtenerDatos(): any {
        return this.datos;
    }
    
    obtenerError(): string | null {
        return this.error;
    }
}

console.log("\n8. Enum de estados:");
let componente = new ComponenteCarga();
console.log("Estado inicial:", componente.obtenerEstado());
componente.cargar();
componente.reiniciar();
console.log("Estado después de reiniciar:", componente.obtenerEstado());

console.log("\n¡Ejercicios de enums completados!");

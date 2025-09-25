// ========================================
// EJEMPLOS - UTILITY TYPES EN TYPESCRIPT
// ========================================

// 1. PARTIAL<T>
// ========================================

interface Usuario2 {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// Todas las propiedades son opcionales
type UsuarioParcial = Partial<Usuario2>;
// Equivale a:
// {
//     id?: number;
//     nombre?: string;
//     email?: string;
//     activo?: boolean;
// }

let usuarioParcial2: UsuarioParcial = {
    nombre: "Juan"
    // Las demás propiedades son opcionales
};

console.log("=== PARTIAL<T> ===");
console.log("Usuario parcial:", usuarioParcial2);

// 2. REQUIRED<T>
// ========================================

interface UsuarioOpcional {
    id?: number;
    nombre?: string;
    email?: string;
    activo?: boolean;
}

// Todas las propiedades son requeridas
type UsuarioRequerido = Required<UsuarioOpcional>;
// Equivale a:
// {
//     id: number;
//     nombre: string;
//     email: string;
//     activo: boolean;
// }

let usuarioRequerido: UsuarioRequerido = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    activo: true
};

console.log("\n=== REQUIRED<T> ===");
console.log("Usuario requerido:", usuarioRequerido);

// 3. READONLY<T>
// ========================================

interface Usuario3 {
    id: number;
    nombre: string;
    email: string;
}

// Todas las propiedades son readonly
type UsuarioSoloLectura2 = Readonly<Usuario3>;
// Equivale a:
// {
//     readonly id: number;
//     readonly nombre: string;
//     readonly email: string;
// }

let usuarioSoloLectura2: UsuarioSoloLectura2 = {
    id: 1,
    nombre: "Pedro",
    email: "pedro@email.com"
};

// usuario.id = 2; // ❌ Error: no se puede modificar

console.log("\n=== READONLY<T> ===");
console.log("Usuario solo lectura:", usuarioSoloLectura2);

// 4. RECORD<K, V>
// ========================================

// Crear un tipo con claves string y valores number
type Puntuaciones = Record<string, number>;
// Equivale a: { [key: string]: number }

let puntuaciones: Puntuaciones = {
    "juan": 100,
    "maria": 95,
    "pedro": 87
};

// Crear un tipo con claves específicas
type Estados = Record<"pendiente" | "procesando" | "completado", string>;
// Equivale a:
// {
//     pendiente: string;
//     procesando: string;
//     completado: string;
// }

let estados: Estados = {
    pendiente: "En espera",
    procesando: "En proceso",
    completado: "Finalizado"
};

console.log("\n=== RECORD<K, V> ===");
console.log("Puntuaciones:", puntuaciones);
console.log("Estados:", estados);

// 5. PICK<T, K>
// ========================================

interface Usuario4 {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Seleccionar solo id y nombre
type UsuarioBasico = Pick<Usuario4, "id" | "nombre">;
// Equivale a:
// {
//     id: number;
//     nombre: string;
// }

let usuarioBasico: UsuarioBasico = {
    id: 1,
    nombre: "Ana"
};

console.log("\n=== PICK<T, K> ===");
console.log("Usuario básico:", usuarioBasico);

// 6. OMIT<T, K>
// ========================================

interface Usuario5 {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Excluir id y telefono
type UsuarioSinId = Omit<Usuario5, "id" | "telefono">;
// Equivale a:
// {
//     nombre: string;
//     email: string;
//     direccion: string;
// }

let usuarioSinId: UsuarioSinId = {
    nombre: "Luis",
    email: "luis@email.com",
    direccion: "Calle Principal 123"
};

console.log("\n=== OMIT<T, K> ===");
console.log("Usuario sin ID:", usuarioSinId);

// 7. EXCLUDE<T, U>
// ========================================

type Colores = "rojo" | "verde" | "azul" | "amarillo";
type ColoresPrimarios = Exclude<Colores, "amarillo">;
// Resultado: "rojo" | "verde" | "azul"

type Numeros = string | number | boolean;
type SoloNumeros = Exclude<Numeros, string | boolean>;
// Resultado: number

// 8. EXTRACT<T, U>
// ========================================

type Colores2 = "rojo" | "verde" | "azul" | "amarillo";
type ColoresCalidos = Extract<Colores2, "rojo" | "amarillo">;
// Resultado: "rojo" | "amarillo"

type Tipos = string | number | boolean;
type SoloStrings = Extract<Tipos, string>;
// Resultado: string

console.log("\n=== EXTRACT<T, U> ===");
console.log("Colores cálidos:", "rojo", "amarillo");
console.log("Solo strings:", "string");

// 9. NONNULLABLE<T>
// ========================================

type Tipos2 = string | number | null | undefined;
type TiposNoNulos = NonNullable<Tipos2>;
// Resultado: string | number

type Usuario6 = {
    nombre: string;
    email: string | null;
    telefono?: string;
};

type UsuarioNoNulo = NonNullable<Usuario6["email"]>;
// Resultado: string

// 10. PARAMETERS<T>
// ========================================

function sumar(a: number, b: number, c: string): number {
    return a + b;
}

type ParametrosSumar = Parameters<typeof sumar>;
// Resultado: [number, number, string]

// Usar los parámetros
function crearFuncion(...args: ParametrosSumar): number {
    return sumar(...args);
}

console.log("\n=== PARAMETERS<T> ===");
console.log("Parámetros de sumar:", "number, number, string");
console.log("Resultado:", crearFuncion(5, 3, "test"));

// 11. RETURNTYPE<T>
// ========================================

function obtenerUsuario(): { id: number; nombre: string } {
    return { id: 1, nombre: "Juan" };
}

type TipoRetorno = ReturnType<typeof obtenerUsuario>;
// Resultado: { id: number; nombre: string }

// Usar el tipo de retorno
let usuario2: TipoRetorno = obtenerUsuario();

console.log("\n=== RETURNTYPE<T> ===");
console.log("Tipo de retorno:", "id: number, nombre: string");
console.log("Usuario obtenido:", usuario2);

// 12. CONSTRUCTORPARAMETERS<T>
// ========================================

class Usuario7 {
    constructor(
        public nombre: string,
        public email: string,
        public edad: number
    ) {}
}

type ParametrosConstructor = ConstructorParameters<typeof Usuario7>;
// Resultado: [string, string, number]

// Usar los parámetros del constructor
function crearUsuario(...args: ParametrosConstructor): Usuario7 {
    return new Usuario7(...args);
}

console.log("\n=== CONSTRUCTORPARAMETERS<T> ===");
console.log("Parámetros del constructor:", "string, string, number");
let usuarioCreado = crearUsuario("Ana", "ana@email.com", 25);
console.log("Usuario creado:", usuarioCreado);

// 13. INSTANCETYPE<T>
// ========================================

class Usuario8 {
    constructor(
        public nombre: string,
        public email: string
    ) {}
}

type TipoInstancia = InstanceType<typeof Usuario8>;
// Resultado: Usuario

// Usar el tipo de instancia
function procesarUsuario(usuario: TipoInstancia): void {
    console.log("Procesando usuario:", usuario.nombre);
}

console.log("\n=== INSTANCETYPE<T> ===");
console.log("Tipo de instancia:", "Usuario");
procesarUsuario(usuarioCreado);

// 15. CASOS DE USO PRÁCTICOS
// ========================================

// Formularios
interface Usuario10 {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
}

// Para crear un usuario, no necesitamos el id
type UsuarioCrear = Omit<Usuario10, "id">;

// Para actualizar un usuario, todas las propiedades son opcionales
type UsuarioActualizar = Partial<UsuarioCrear>;

// Para mostrar un usuario, solo necesitamos algunos campos
type UsuarioMostrar = Pick<Usuario10, "id" | "nombre" | "email">;

console.log("\n=== CASOS DE USO PRÁCTICOS ===");
console.log("Tipos para formularios definidos");

// APIs
interface Usuario11 {
    id: number;
    nombre: string;
    email: string;
    password: string;
    fechaCreacion: Date;
}

// Respuesta de API (sin password)
type UsuarioAPI = Omit<Usuario11, "password">;

// Crear usuario (sin id y fechaCreacion)
type UsuarioCrear2 = Omit<Usuario11, "id" | "fechaCreacion">;

// Actualizar usuario (todas las propiedades opcionales excepto id)
type UsuarioActualizar2 = Partial<Omit<Usuario11, "id">> & { id: number };

console.log("Tipos para APIs definidos");

// 16. COMBINANDO UTILITY TYPES
// ========================================

interface Usuario12 {
    id: number;
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    fechaCreacion: Date;
    activo: boolean;
}

// Usuario para crear (sin id, password, fechaCreacion)
type UsuarioCrear3 = Omit<Usuario12, "id" | "password" | "fechaCreacion">;

// Usuario para actualizar (todas las propiedades opcionales excepto id)
type UsuarioActualizar3 = Partial<Omit<Usuario12, "id">> & { id: number };

// Usuario para mostrar (solo campos públicos)
type UsuarioMostrar2 = Pick<Usuario12, "id" | "nombre" | "email" | "activo">;

// Usuario de solo lectura
type UsuarioSoloLectura = Readonly<Usuario12>;

// Usuario con campos sensibles opcionales
type UsuarioSeguro = Omit<Usuario12, "password"> & {
    password?: string;
};

console.log("\n=== COMBINANDO UTILITY TYPES ===");
console.log("Tipos combinados definidos");

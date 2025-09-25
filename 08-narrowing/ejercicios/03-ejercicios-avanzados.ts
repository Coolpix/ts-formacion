/**
 * EJERCICIOS AVANZADOS DE NARROWING
 * 
 * Estos ejercicios combinan múltiples conceptos de narrowing para crear
 * sistemas complejos y realistas. Incluyen casos de uso del mundo real.
 */

// ===== EJERCICIO 1: Sistema de Autenticación Completo =====

/**
 * EJERCICIO 1.1: Sistema de Autenticación con Múltiples Estados
 * 
 * Crea un sistema completo de autenticación que maneje diferentes estados
 * y tipos de usuarios con narrowing avanzado.
 */

// Estados de autenticación
interface EstadoNoAutenticado {
  autenticado: false;
}

interface EstadoAutenticado {
  autenticado: true;
  usuario: {
    id: number;
    nombre: string;
    email: string;
    rol: "usuario" | "admin" | "moderador";
    permisos: string[];
    ultimoAcceso: number;
  };
  token: string;
  expiracion: number;
}

interface EstadoExpirado {
  autenticado: false;
  usuario: {
    id: number;
    nombre: string;
    email: string;
  };
  tokenExpirado: string;
  tiempoExpiracion: number;
}

type EstadoAutenticacion = EstadoNoAutenticado | EstadoAutenticado | EstadoExpirado;

// Type predicates para estados
function esEstadoAutenticado(estado: EstadoAutenticacion): estado is EstadoAutenticado {
  return estado.autenticado === true;
}

function esEstadoExpirado(estado: EstadoAutenticacion): estado is EstadoExpirado {
  return estado.autenticado === false && "tokenExpirado" in estado;
}

function esEstadoNoAutenticado(estado: EstadoAutenticacion): estado is EstadoNoAutenticado {
  return estado.autenticado === false && !("tokenExpirado" in estado);
}

// Funciones de utilidad
function obtenerInformacionUsuario(estado: EstadoAutenticacion): string {
  if (esEstadoAutenticado(estado)) {
    const tiempoRestante = Math.max(0, estado.expiracion - Date.now());
    const minutosRestantes = Math.round(tiempoRestante / (1000 * 60));
    return `Usuario: ${estado.usuario.nombre} (${estado.usuario.rol}) - Token expira en ${minutosRestantes} minutos`;
  } else if (esEstadoExpirado(estado)) {
    const tiempoExpirado = Date.now() - estado.tiempoExpiracion;
    const minutosExpirado = Math.round(tiempoExpirado / (1000 * 60));
    return `Sesión expirada para ${estado.usuario.nombre} hace ${minutosExpirado} minutos`;
  } else {
    return "Usuario no autenticado";
  }
}

function puedeAcceder(estado: EstadoAutenticacion, recurso: string): boolean {
  if (!esEstadoAutenticado(estado)) {
    return false;
  }
  
  // TypeScript sabe que estado es EstadoAutenticado aquí
  if (estado.usuario.rol === "admin") {
    return true;
  }
  
  if (estado.usuario.rol === "moderador") {
    return ["usuarios", "contenido", "reportes"].includes(recurso);
  }
  
  if (estado.usuario.rol === "usuario") {
    return ["perfil", "configuracion"].includes(recurso);
  }
  
  return false;
}

function necesitaRenovarToken(estado: EstadoAutenticacion): boolean {
  if (!esEstadoAutenticado(estado)) {
    return false;
  }
  
  // Renovar si quedan menos de 5 minutos
  const tiempoRestante = estado.expiracion - Date.now();
  return tiempoRestante < 5 * 60 * 1000;
}

// ===== EJERCICIO 2: Sistema de Validación de Formularios =====

/**
 * EJERCICIO 2.1: Sistema de Validación Completo
 * 
 * Crea un sistema de validación que use narrowing para validar diferentes
 * tipos de campos de formulario.
 */

// Tipos de campos
interface CampoTexto {
  tipo: "texto";
  nombre: string;
  valor: string;
  requerido: boolean;
  minLength?: number;
  maxLength?: number;
  patron?: RegExp;
}

interface CampoEmail {
  tipo: "email";
  nombre: string;
  valor: string;
  requerido: boolean;
  dominioPermitido?: string;
}

interface CampoNumero {
  tipo: "numero";
  nombre: string;
  valor: number;
  requerido: boolean;
  min?: number;
  max?: number;
  entero?: boolean;
}

interface CampoFecha {
  tipo: "fecha";
  nombre: string;
  valor: Date;
  requerido: boolean;
  minFecha?: Date;
  maxFecha?: Date;
}

interface CampoSelect {
  tipo: "select";
  nombre: string;
  valor: string;
  requerido: boolean;
  opciones: string[];
}

type CampoFormulario = CampoTexto | CampoEmail | CampoNumero | CampoFecha | CampoSelect;

// Resultados de validación
interface ValidacionExito {
  valido: true;
  campo: string;
  valor: any;
}

interface ValidacionError {
  valido: false;
  campo: string;
  error: string;
  valorRecibido: any;
}

type ResultadoValidacion = ValidacionExito | ValidacionError;

// Type predicates para campos
function esCampoTexto(campo: CampoFormulario): campo is CampoTexto {
  return campo.tipo === "texto";
}

function esCampoEmail(campo: CampoFormulario): campo is CampoEmail {
  return campo.tipo === "email";
}

function esCampoNumero(campo: CampoFormulario): campo is CampoNumero {
  return campo.tipo === "numero";
}

function esCampoFecha(campo: CampoFormulario): campo is CampoFecha {
  return campo.tipo === "fecha";
}

function esCampoSelect(campo: CampoFormulario): campo is CampoSelect {
  return campo.tipo === "select";
}

// Funciones de validación
function validarCampo(campo: CampoFormulario): ResultadoValidacion {
  // Verificar si es requerido y está vacío
  if (campo.requerido && esValorVacio(campo)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Campo requerido",
      valorRecibido: campo.valor
    };
  }
  
  // Si no es requerido y está vacío, es válido
  if (!campo.requerido && esValorVacio(campo)) {
    return {
      valido: true,
      campo: campo.nombre,
      valor: campo.valor
    };
  }
  
  // Validaciones específicas por tipo
  if (esCampoTexto(campo)) {
    return validarCampoTexto(campo);
  } else if (esCampoEmail(campo)) {
    return validarCampoEmail(campo);
  } else if (esCampoNumero(campo)) {
    return validarCampoNumero(campo);
  } else if (esCampoFecha(campo)) {
    return validarCampoFecha(campo);
  } else if (esCampoSelect(campo)) {
    return validarCampoSelect(campo);
  }
  
  // Esto nunca debería ejecutarse debido a la verificación exhaustiva
  const _exhaustiveCheck: never = campo;
  throw new Error(`Tipo de campo no manejado: ${_exhaustiveCheck}`);
}

function esValorVacio(campo: CampoFormulario): boolean {
  if (esCampoTexto(campo) || esCampoEmail(campo) || esCampoSelect(campo)) {
    return campo.valor === "" || campo.valor === null || campo.valor === undefined;
  } else if (esCampoNumero(campo)) {
    return campo.valor === null || campo.valor === undefined || isNaN(campo.valor);
  } else if (esCampoFecha(campo)) {
    return campo.valor === null || campo.valor === undefined;
  }
  
  return false;
}

function validarCampoTexto(campo: CampoTexto): ResultadoValidacion {
  const valor = campo.valor;
  
  if (campo.minLength && valor.length < campo.minLength) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Mínimo ${campo.minLength} caracteres`,
      valorRecibido: valor
    };
  }
  
  if (campo.maxLength && valor.length > campo.maxLength) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Máximo ${campo.maxLength} caracteres`,
      valorRecibido: valor
    };
  }
  
  if (campo.patron && !campo.patron.test(valor)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Formato inválido",
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

function validarCampoEmail(campo: CampoEmail): ResultadoValidacion {
  const valor = campo.valor;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(valor)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Email inválido",
      valorRecibido: valor
    };
  }
  
  if (campo.dominioPermitido && !valor.endsWith(`@${campo.dominioPermitido}`)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Email debe ser del dominio ${campo.dominioPermitido}`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

function validarCampoNumero(campo: CampoNumero): ResultadoValidacion {
  const valor = campo.valor;
  
  if (campo.entero && !Number.isInteger(valor)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: "Debe ser un número entero",
      valorRecibido: valor
    };
  }
  
  if (campo.min !== undefined && valor < campo.min) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Mínimo ${campo.min}`,
      valorRecibido: valor
    };
  }
  
  if (campo.max !== undefined && valor > campo.max) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Máximo ${campo.max}`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

function validarCampoFecha(campo: CampoFecha): ResultadoValidacion {
  const valor = campo.valor;
  
  if (campo.minFecha && valor < campo.minFecha) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Fecha mínima: ${campo.minFecha.toLocaleDateString()}`,
      valorRecibido: valor
    };
  }
  
  if (campo.maxFecha && valor > campo.maxFecha) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Fecha máxima: ${campo.maxFecha.toLocaleDateString()}`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

function validarCampoSelect(campo: CampoSelect): ResultadoValidacion {
  const valor = campo.valor;
  
  if (!campo.opciones.includes(valor)) {
    return {
      valido: false,
      campo: campo.nombre,
      error: `Valor debe ser uno de: ${campo.opciones.join(", ")}`,
      valorRecibido: valor
    };
  }
  
  return {
    valido: true,
    campo: campo.nombre,
    valor: valor
  };
}

function validarFormulario(campos: CampoFormulario[]): { valido: boolean; errores: string[] } {
  const errores: string[] = [];
  
  for (const campo of campos) {
    const resultado = validarCampo(campo);
    if (!resultado.valido) {
      const error = resultado as ValidacionError;
      errores.push(`${error.campo}: ${error.error}`);
    }
  }
  
  return {
    valido: errores.length === 0,
    errores
  };
}

// ===== EJERCICIO 3: Sistema de Manejo de Errores =====

/**
 * EJERCICIO 3.1: Sistema de Errores Jerárquico
 * 
 * Crea un sistema de manejo de errores que use narrowing para categorizar
 * y manejar diferentes tipos de errores.
 */

// Tipos de errores
interface ErrorValidacion {
  tipo: "validacion";
  campo: string;
  mensaje: string;
  valorRecibido: any;
  codigo: "CAMPO_REQUERIDO" | "FORMATO_INVALIDO" | "VALOR_FUERA_RANGO";
}

interface ErrorRed {
  tipo: "red";
  url: string;
  codigo: number;
  mensaje: string;
  reintentos: number;
  timeout: boolean;
}

interface ErrorBaseDatos {
  tipo: "base_datos";
  operacion: "SELECT" | "INSERT" | "UPDATE" | "DELETE";
  tabla: string;
  mensaje: string;
  codigo: string;
  constraint?: string;
}

interface ErrorAutenticacion {
  tipo: "autenticacion";
  accion: "login" | "logout" | "renovar_token";
  mensaje: string;
  codigo: "CREDENCIALES_INVALIDAS" | "TOKEN_EXPIRADO" | "PERMISOS_INSUFICIENTES";
  usuarioId?: number;
}

interface ErrorNegocio {
  tipo: "negocio";
  regla: string;
  mensaje: string;
  contexto: Record<string, any>;
  severidad: "baja" | "media" | "alta" | "critica";
}

type ErrorAplicacion = ErrorValidacion | ErrorRed | ErrorBaseDatos | ErrorAutenticacion | ErrorNegocio;

// Type predicates para errores
function esErrorValidacion(error: ErrorAplicacion): error is ErrorValidacion {
  return error.tipo === "validacion";
}

function esErrorRed(error: ErrorAplicacion): error is ErrorRed {
  return error.tipo === "red";
}

function esErrorBaseDatos(error: ErrorAplicacion): error is ErrorBaseDatos {
  return error.tipo === "base_datos";
}

function esErrorAutenticacion(error: ErrorAplicacion): error is ErrorAutenticacion {
  return error.tipo === "autenticacion";
}

function esErrorNegocio(error: ErrorAplicacion): error is ErrorNegocio {
  return error.tipo === "negocio";
}

// Funciones de manejo de errores
function procesarError(error: ErrorAplicacion): string {
  if (esErrorValidacion(error)) {
    return `❌ Error de validación en '${error.campo}': ${error.mensaje} (recibido: ${error.valorRecibido}) [${error.codigo}]`;
  } else if (esErrorRed(error)) {
    const timeout = error.timeout ? " (timeout)" : "";
    return `🌐 Error de red: ${error.mensaje} - ${error.url} (${error.codigo})${timeout} - Reintentos: ${error.reintentos}`;
  } else if (esErrorBaseDatos(error)) {
    const constraint = error.constraint ? ` - Constraint: ${error.constraint}` : "";
    return `🗄️ Error de BD: ${error.operacion} en '${error.tabla}' - ${error.mensaje} [${error.codigo}]${constraint}`;
  } else if (esErrorAutenticacion(error)) {
    const usuario = error.usuarioId ? ` (Usuario: ${error.usuarioId})` : "";
    return `🔐 Error de autenticación: ${error.accion} - ${error.mensaje} [${error.codigo}]${usuario}`;
  } else if (esErrorNegocio(error)) {
    const severidad = error.severidad.toUpperCase();
    return `💼 Error de negocio [${severidad}]: ${error.regla} - ${error.mensaje}`;
  }
  
  // Verificación exhaustiva
  const _exhaustiveCheck: never = error;
  throw new Error(`Tipo de error no manejado: ${_exhaustiveCheck}`);
}

function necesitaReintento(error: ErrorAplicacion): boolean {
  if (esErrorRed(error)) {
    return error.reintentos < 3 && !error.timeout;
  } else if (esErrorBaseDatos(error)) {
    return error.operacion === "SELECT" && error.codigo.includes("CONNECTION");
  }
  
  return false;
}

function esErrorCritico(error: ErrorAplicacion): boolean {
  if (esErrorNegocio(error)) {
    return error.severidad === "critica";
  } else if (esErrorAutenticacion(error)) {
    return error.codigo === "PERMISOS_INSUFICIENTES";
  } else if (esErrorBaseDatos(error)) {
    return error.operacion === "DELETE" && error.codigo.includes("FOREIGN_KEY");
  }
  
  return false;
}

// ===== EJERCICIOS DE PRUEBA =====

console.log("=== EJERCICIOS AVANZADOS DE NARROWING ===");

// Prueba Ejercicio 1.1: Sistema de Autenticación
console.log("\n--- Ejercicio 1.1: Sistema de Autenticación ---");
const estadosAuth: EstadoAutenticacion[] = [
  { autenticado: false },
  {
    autenticado: true,
    usuario: {
      id: 1,
      nombre: "Admin",
      email: "admin@email.com",
      rol: "admin",
      permisos: ["read", "write", "delete", "admin"],
      ultimoAcceso: Date.now() - 300000
    },
    token: "abc123",
    expiracion: Date.now() + 3600000
  },
  {
    autenticado: false,
    usuario: {
      id: 2,
      nombre: "Usuario",
      email: "usuario@email.com"
    },
    tokenExpirado: "expired123",
    tiempoExpiracion: Date.now() - 600000
  }
];

estadosAuth.forEach(estado => {
  console.log(obtenerInformacionUsuario(estado));
  console.log(`Puede acceder a admin: ${puedeAcceder(estado, "admin")}`);
  console.log(`Necesita renovar token: ${necesitaRenovarToken(estado)}`);
  console.log("---");
});

// Prueba Ejercicio 2.1: Sistema de Validación
console.log("\n--- Ejercicio 2.1: Sistema de Validación ---");
const campos: CampoFormulario[] = [
  {
    tipo: "texto",
    nombre: "nombre",
    valor: "Juan Carlos",
    requerido: true,
    minLength: 2,
    maxLength: 50
  },
  {
    tipo: "email",
    nombre: "email",
    valor: "juan@empresa.com",
    requerido: true,
    dominioPermitido: "empresa.com"
  },
  {
    tipo: "numero",
    nombre: "edad",
    valor: 25,
    requerido: true,
    min: 18,
    max: 100,
    entero: true
  },
  {
    tipo: "fecha",
    nombre: "fechaNacimiento",
    valor: new Date("1998-01-01"),
    requerido: true,
    maxFecha: new Date()
  },
  {
    tipo: "select",
    nombre: "pais",
    valor: "España",
    requerido: true,
    opciones: ["España", "México", "Argentina", "Colombia"]
  }
];

const resultado = validarFormulario(campos);
if (resultado.valido) {
  console.log("✅ Formulario válido");
} else {
  console.log("❌ Errores encontrados:");
  resultado.errores.forEach(error => console.log(`  - ${error}`));
}

// Prueba Ejercicio 3.1: Sistema de Errores
console.log("\n--- Ejercicio 3.1: Sistema de Errores ---");
const errores: ErrorAplicacion[] = [
  {
    tipo: "validacion",
    campo: "email",
    mensaje: "Email inválido",
    valorRecibido: "email-malo",
    codigo: "FORMATO_INVALIDO"
  },
  {
    tipo: "red",
    url: "https://api.ejemplo.com/users",
    codigo: 500,
    mensaje: "Error interno del servidor",
    reintentos: 2,
    timeout: false
  },
  {
    tipo: "base_datos",
    operacion: "INSERT",
    tabla: "usuarios",
    mensaje: "Violación de constraint único",
    codigo: "UNIQUE_CONSTRAINT_VIOLATION",
    constraint: "email_unique"
  },
  {
    tipo: "autenticacion",
    accion: "login",
    mensaje: "Credenciales inválidas",
    codigo: "CREDENCIALES_INVALIDAS",
    usuarioId: 123
  },
  {
    tipo: "negocio",
    regla: "LIMITE_USUARIOS",
    mensaje: "Se ha alcanzado el límite máximo de usuarios",
    contexto: { limite: 1000, actual: 1000 },
    severidad: "critica"
  }
];

errores.forEach(error => {
  console.log(procesarError(error));
  console.log(`  Necesita reintento: ${necesitaReintento(error)}`);
  console.log(`  Es crítico: ${esErrorCritico(error)}`);
  console.log("---");
});

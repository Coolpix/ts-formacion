// Ejemplos de importaciones en TypeScript

// 1. Importaciones nombradas individuales
import { sumar, restar, multiplicar, dividir } from './01-exportaciones';

console.log("=== IMPORTACIONES NOMBRADAS INDIVIDUALES ===");
console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(6, 7));
console.log("División:", dividir(15, 3));

// 2. Importaciones de constantes
import { PI, E, GRAVEDAD } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE CONSTANTES ===");
console.log("PI:", PI);
console.log("E:", E);
console.log("Gravedad:", GRAVEDAD);

// 3. Importaciones de interfaces y tipos
import { Usuario, Producto, Estado, Prioridad } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE INTERFACES Y TIPOS ===");
let usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@email.com",
    activo: true
};

let producto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    categoria: "Electrónicos",
    disponible: true
};

let estado: Estado = "activo";
let prioridad: Prioridad = "alta";

console.log("Usuario:", usuario);
console.log("Producto:", producto);
console.log("Estado:", estado);
console.log("Prioridad:", prioridad);

// 4. Importaciones de clases
import { Calculadora } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE CLASES ===");
let calculadora = new Calculadora();
console.log("Suma:", calculadora.sumar(5, 3));
console.log("Resta:", calculadora.restar(10, 4));
console.log("Historial:", calculadora.obtenerHistorial());

// 5. Importaciones de enums
import { DiaSemana, EstadoPedido } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE ENUMS ===");
console.log("Día de la semana:", DiaSemana.Lunes);
console.log("Estado del pedido:", EstadoPedido.Pendiente);

// 6. Importaciones de objetos
import { CONFIGURACION, MENSAJES } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE OBJETOS ===");
console.log("Configuración:", CONFIGURACION);
console.log("Mensajes:", MENSAJES);

// 7. Importaciones con alias
import { sumar as suma, restar as resta, multiplicar as multiplicacion, dividir as division } from './01-exportaciones';

console.log("\n=== IMPORTACIONES CON ALIAS ===");
console.log("Suma (alias):", suma(5, 3));
console.log("Resta (alias):", resta(10, 4));
console.log("Multiplicación (alias):", multiplicacion(6, 7));
console.log("División (alias):", division(15, 3));

// 8. Importación de todo el módulo
import * as Utils from './01-exportaciones';

console.log("\n=== IMPORTACIÓN DE TODO EL MÓDULO ===");
console.log("Suma desde Utils:", Utils.sumar(5, 3));
console.log("PI desde Utils:", Utils.PI);
console.log("Configuración desde Utils:", Utils.CONFIGURACION);

// 9. Importación por defecto
import Utilidades from './01-exportaciones';

console.log("\n=== IMPORTACIÓN POR DEFECTO ===");
console.log("Fecha formateada:", Utilidades.formatearFecha(new Date()));
console.log("Moneda formateada:", Utilidades.formatearMoneda(99.99, "USD"));
console.log("ID generado:", Utilidades.generarId());
console.log("Email válido:", Utilidades.validarEmail("usuario@email.com"));

// 10. Importación por defecto con alias
import MiUtilidades from './01-exportaciones';

console.log("\n=== IMPORTACIÓN POR DEFECTO CON ALIAS ===");
console.log("Fecha formateada:", MiUtilidades.formatearFecha(new Date()));
console.log("Moneda formateada:", MiUtilidades.formatearMoneda(99.99, "EUR"));

// 11. Importación por defecto y nombrada
import { procesarDatos, CONFIGURACION_PROCESAMIENTO } from './01-exportaciones';

console.log("\n=== IMPORTACIÓN POR DEFECTO Y NOMBRADA ===");
console.log("Procesar datos:", procesarDatos([1, 2, 3, 4, 5]));
console.log("Configuración de procesamiento:", CONFIGURACION_PROCESAMIENTO);

// 12. Importaciones de funciones genéricas
import { crearArray, filtrarArray, mapearArray } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES GENÉRICAS ===");
let arrayNumeros = crearArray(1, 2, 3, 4, 5);
let arrayStrings = crearArray("a", "b", "c", "d", "e");

console.log("Array de números:", arrayNumeros);
console.log("Array de strings:", arrayStrings);

let numerosPares = filtrarArray(arrayNumeros, n => n % 2 === 0);
let stringsMayusculas = mapearArray(arrayStrings, s => s.toUpperCase());

console.log("Números pares:", numerosPares);
console.log("Strings en mayúsculas:", stringsMayusculas);

// 13. Importaciones de interfaces genéricas
import { Repository, Cache } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE INTERFACES GENÉRICAS ===");
// Las interfaces genéricas se usan para tipar implementaciones
interface UsuarioRepo extends Repository<Usuario> {}
interface UsuarioCache extends Cache<Usuario> {}

// 14. Importaciones de clases genéricas
import { GenericRepository } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE CLASES GENÉRICAS ===");
let usuarioRepo = new GenericRepository<Usuario>();
let productoRepo = new GenericRepository<Producto>();

usuarioRepo.save(usuario);
productoRepo.save(producto);

console.log("Usuarios:", usuarioRepo.findAll());
console.log("Productos:", productoRepo.findAll());

// 15. Importaciones de tipos condicionales
import { EsString, EsNumber, EsArray } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE TIPOS CONDICIONALES ===");
// Los tipos condicionales se usan para inferir tipos
type TestString = EsString<string>;  // true
type TestNumber = EsNumber<number>;  // true
type TestArray = EsArray<number[]>;  // true

// 16. Importaciones de utilidades de tipos
import { Partial, Required, Readonly } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE UTILIDADES DE TIPOS ===");
// Las utilidades de tipos se usan para transformar tipos
type UsuarioParcial = Partial<Usuario>;
type UsuarioRequerido = Required<UsuarioParcial>;
type UsuarioSoloLectura = Readonly<Usuario>;

// 17. Importaciones de namespaces
import { MathUtils, StringUtils } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE NAMESPACES ===");
console.log("Suma desde MathUtils:", MathUtils.sumar(5, 3));
console.log("Resta desde MathUtils:", MathUtils.restar(10, 4));
console.log("Capitalizar desde StringUtils:", StringUtils.capitalizar("hola mundo"));
console.log("Invertir desde StringUtils:", StringUtils.invertir("typescript"));

// 18. Importaciones de funciones asíncronas
import { obtenerDatos, procesarDatosAsync } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES ASÍNCRONAS ===");
// Nota: Estas funciones requieren un entorno que soporte fetch y async/await
// obtenerDatos("https://api.ejemplo.com").then(datos => console.log("Datos:", datos));
// procesarDatosAsync([1, 2, 3, 4, 5]).then(resultado => console.log("Resultado:", resultado));

// 19. Importaciones de funciones con parámetros rest
import { crearMensaje, combinarArrays } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES CON PARÁMETROS REST ===");
console.log("Mensaje creado:", crearMensaje("Hola", "mundo", "de", "TypeScript"));
console.log("Arrays combinados:", combinarArrays([1, 2], [3, 4], [5, 6]));

// 20. Importaciones de funciones con sobrecarga
import { procesar } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES CON SOBRECARGA ===");
console.log("Procesar string:", procesar("hola"));
console.log("Procesar number:", procesar(5));
console.log("Procesar boolean:", procesar(true));

// 21. Importaciones de funciones con tipos de retorno complejos
import { crearRespuesta } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES CON TIPOS DE RETORNO COMPLEJOS ===");
let respuesta = crearRespuesta({ mensaje: "Operación exitosa" }, true);
console.log("Respuesta:", respuesta);

// 22. Importaciones de funciones con validación
import { validarUsuario } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES CON VALIDACIÓN ===");
console.log("¿Usuario válido?:", validarUsuario(usuario));
console.log("¿Objeto inválido?:", validarUsuario({ nombre: "Juan" }));

// 23. Importaciones de funciones con manejo de errores
import { dividirSeguro } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE FUNCIONES CON MANEJO DE ERRORES ===");
let resultado1 = dividirSeguro(10, 2);
let resultado2 = dividirSeguro(10, 0);

console.log("División exitosa:", resultado1);
console.log("División con error:", resultado2);

// 24. Importaciones dinámicas (requieren async/await)
console.log("\n=== IMPORTACIONES DINÁMICAS ===");
// Nota: Las importaciones dinámicas requieren async/await
// async function cargarModulo() {
//     const modulo = await import('./01-exportaciones');
//     console.log("Suma desde módulo dinámico:", modulo.sumar(5, 3));
// }
// cargarModulo();

// 25. Importaciones con destructuring
// CONFIGURACION ya importado anteriormente

console.log("\n=== IMPORTACIONES CON DESTRUCTURING ===");
console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("PI:", PI);
console.log("Configuración:", CONFIGURACION);

// 26. Importaciones de tipos solo para tipado
import type { Usuario as UsuarioType, Producto as ProductoType } from './01-exportaciones';

console.log("\n=== IMPORTACIONES DE TIPOS SOLO PARA TIPADO ===");
// Estos tipos se usan solo para tipado, no para ejecución
let usuarioTipado: UsuarioType = {
    id: 1,
    nombre: "María",
    email: "maria@email.com",
    activo: true
};

let productoTipado: ProductoType = {
    id: 2,
    nombre: "Mouse",
    precio: 25.99,
    categoria: "Accesorios",
    disponible: true
};

console.log("Usuario tipado:", usuarioTipado);
console.log("Producto tipado:", productoTipado);

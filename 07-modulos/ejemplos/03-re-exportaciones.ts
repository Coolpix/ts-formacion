// Ejemplos de re-exportaciones en TypeScript

// 1. Re-exportación simple
export { sumar, restar, multiplicar, dividir } from './01-exportaciones';
export type { Usuario, Producto, Estado, Prioridad } from './01-exportaciones';
export { Calculadora } from './01-exportaciones';

// 2. Re-exportación con alias
export { sumar as suma, restar as resta, multiplicar as multiplicacion, dividir as division } from './01-exportaciones';
export type { Usuario as UsuarioType, Producto as ProductoType } from './01-exportaciones';

// 3. Re-exportación de todo
export * from './01-exportaciones';

// 4. Re-exportación por defecto
export { default as Utilidades } from './01-exportaciones';

// 5. Re-exportación de todo con exportación por defecto
export * from './01-exportaciones';
export { default } from './01-exportaciones';

// 6. Re-exportación de funciones genéricas
export { crearArray, filtrarArray, mapearArray } from './01-exportaciones';

// 7. Re-exportación de interfaces genéricas
export type { Repository, Cache } from './01-exportaciones';

// 8. Re-exportación de clases genéricas
export { GenericRepository } from './01-exportaciones';

// 9. Re-exportación de tipos condicionales
export type { EsString, EsNumber, EsArray } from './01-exportaciones';

// 10. Re-exportación de utilidades de tipos
export type { Partial, Required, Readonly } from './01-exportaciones';

// 11. Re-exportación de funciones asíncronas
export { obtenerDatos, procesarDatosAsync } from './01-exportaciones';

// 12. Re-exportación de funciones con parámetros rest
export { crearMensaje, combinarArrays } from './01-exportaciones';

// 13. Re-exportación de funciones con sobrecarga
export { procesar } from './01-exportaciones';

// 14. Re-exportación de funciones con tipos de retorno complejos
export { crearRespuesta } from './01-exportaciones';

// 15. Re-exportación de funciones con validación
export { validarUsuario } from './01-exportaciones';

// 16. Re-exportación de funciones con manejo de errores
export { dividirSeguro } from './01-exportaciones';

// 17. Re-exportación de constantes
export { PI, E, GRAVEDAD } from './01-exportaciones';

// 18. Re-exportación de objetos
export { CONFIGURACION, MENSAJES } from './01-exportaciones';

// 19. Re-exportación de enums
export { DiaSemana, EstadoPedido } from './01-exportaciones';

// 20. Re-exportación de todo con alias
export * as Utils from './01-exportaciones';

// 21. Re-exportación de todo con alias específico
export * as MathUtils from './01-exportaciones';
export * as StringUtils from './01-exportaciones';

// 22. Re-exportación de todo con alias genérico
export * as GenericUtils from './01-exportaciones';

// 23. Re-exportación de todo con alias de tipos
export * as Types from './01-exportaciones';

// 24. Re-exportación de todo con alias de interfaces
export * as Interfaces from './01-exportaciones';

// 25. Re-exportación de todo con alias de clases
export * as Classes from './01-exportaciones';

// 26. Re-exportación de todo con alias de funciones
export * as Functions from './01-exportaciones';

// 27. Re-exportación de todo con alias de constantes
export * as Constants from './01-exportaciones';

// 28. Re-exportación de todo con alias de objetos
export * as Objects from './01-exportaciones';

// 29. Re-exportación de todo con alias de enums
export * as Enums from './01-exportaciones';

// 30. Re-exportación de todo con alias de namespaces
export * as Namespaces from './01-exportaciones';

// 31. Re-exportación de todo con alias de funciones genéricas
export * as GenericFunctions from './01-exportaciones';

// 32. Re-exportación de todo con alias de interfaces genéricas
export * as GenericInterfaces from './01-exportaciones';

// 33. Re-exportación de todo con alias de clases genéricas
export * as GenericClasses from './01-exportaciones';

// 34. Re-exportación de todo con alias de tipos condicionales
export * as ConditionalTypes from './01-exportaciones';

// 35. Re-exportación de todo con alias de utilidades de tipos
export * as TypeUtilities from './01-exportaciones';

// 36. Re-exportación de todo con alias de funciones asíncronas
export * as AsyncFunctions from './01-exportaciones';

// 37. Re-exportación de todo con alias de funciones con parámetros rest
export * as RestFunctions from './01-exportaciones';

// 38. Re-exportación de todo con alias de funciones con sobrecarga
export * as OverloadedFunctions from './01-exportaciones';

// 39. Re-exportación de todo con alias de funciones con tipos de retorno complejos
export * as ComplexReturnFunctions from './01-exportaciones';

// 40. Re-exportación de todo con alias de funciones con validación
export * as ValidationFunctions from './01-exportaciones';

// 41. Re-exportación de todo con alias de funciones con manejo de errores
export * as ErrorHandlingFunctions from './01-exportaciones';
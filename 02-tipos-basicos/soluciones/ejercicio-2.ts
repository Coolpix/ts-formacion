// Solución del Ejercicio 2: Enums y Union Types

// 1. Definición de enums
enum DiaSemana {
    Lunes = "lunes",
    Martes = "martes", 
    Miercoles = "miércoles",
    Jueves = "jueves",
    Viernes = "viernes",
    Sabado = "sábado",
    Domingo = "domingo"
}

enum Prioridad {
    Baja = 1,
    Media = 2,
    Alta = 3,
    Critica = 4
}

// 2. Union types
type EstadoUsuario = "activo" | "inactivo" | "suspendido";
type TipoArchivo = "imagen" | "documento" | "video" | "audio";
type ID = string | number;

// 3. Función para verificar si es día laboral
function esDiaLaboral(dia: DiaSemana): boolean {
    const diasLaborales: DiaSemana[] = [
        DiaSemana.Lunes,
        DiaSemana.Martes,
        DiaSemana.Miercoles,
        DiaSemana.Jueves,
        DiaSemana.Viernes
    ];
    
    return diasLaborales.includes(dia);
}

// 4. Función para obtener mensaje descriptivo de prioridad
function obtenerMensajePrioridad(prioridad: Prioridad): string {
    switch (prioridad) {
        case Prioridad.Baja:
            return "Prioridad baja - Puede esperar";
        case Prioridad.Media:
            return "Prioridad media - Atender pronto";
        case Prioridad.Alta:
            return "Prioridad alta - Atender con urgencia";
        case Prioridad.Critica:
            return "Prioridad crítica - Atender inmediatamente";
        default:
            return "Prioridad desconocida";
    }
}

// 5. Función para obtener color asociado al estado
function obtenerColorEstado(estado: EstadoUsuario): string {
    switch (estado) {
        case "activo":
            return "verde";
        case "inactivo":
            return "amarillo";
        case "suspendido":
            return "rojo";
        default:
            return "gris";
    }
}

// 6. Interface Tarea usando todos los tipos definidos
interface Tarea {
    id: ID;
    titulo: string;
    dia: DiaSemana;
    prioridad: Prioridad;
    estado: EstadoUsuario;
    archivos: TipoArchivo[];
}

// 7. Función para crear una tarea
function crearTarea(
    id: ID,
    titulo: string,
    dia: DiaSemana,
    prioridad: Prioridad,
    estado: EstadoUsuario,
    archivos: TipoArchivo[]
): Tarea {
    return {
        id,
        titulo,
        dia,
        prioridad,
        estado,
        archivos
    };
}

// 8. Función para mostrar información de una tarea
function mostrarTarea(tarea: Tarea): void {
    console.log(`\n=== TAREA: ${tarea.titulo} ===`);
    console.log(`ID: ${tarea.id}`);
    console.log(`Día: ${tarea.dia} ${esDiaLaboral(tarea.dia) ? '(Laboral)' : '(No laboral)'}`);
    console.log(`Prioridad: ${obtenerMensajePrioridad(tarea.prioridad)}`);
    console.log(`Estado: ${tarea.estado} (Color: ${obtenerColorEstado(tarea.estado)})`);
    console.log(`Archivos: ${tarea.archivos.join(", ")}`);
}

// 9. Función para filtrar tareas por prioridad
function filtrarTareasPorPrioridad(tareas: Tarea[], prioridadMinima: Prioridad): Tarea[] {
    return tareas.filter(tarea => tarea.prioridad >= prioridadMinima);
}

// 10. Función para obtener estadísticas de tareas
function obtenerEstadisticasTareas(tareas: Tarea[]): void {
    const totalTareas = tareas.length;
    const tareasActivas = tareas.filter(t => t.estado === "activo").length;
    const tareasAltaPrioridad = tareas.filter(t => t.prioridad >= Prioridad.Alta).length;
    const diasLaborales = tareas.filter(t => esDiaLaboral(t.dia)).length;
    
    console.log(`\n=== ESTADÍSTICAS DE TAREAS ===`);
    console.log(`Total de tareas: ${totalTareas}`);
    console.log(`Tareas activas: ${tareasActivas}`);
    console.log(`Tareas de alta prioridad: ${tareasAltaPrioridad}`);
    console.log(`Tareas en días laborales: ${diasLaborales}`);
}

// Ejemplos de uso
console.log("=== EJEMPLOS DE ENUMS Y UNION TYPES ===");

// Crear algunas tareas de ejemplo
let tarea1: Tarea = crearTarea(
    "TASK-001",
    "Revisar documentación",
    DiaSemana.Lunes,
    Prioridad.Media,
    "activo",
    ["documento", "imagen"]
);

let tarea2: Tarea = crearTarea(
    2,
    "Corregir bug crítico",
    DiaSemana.Martes,
    Prioridad.Critica,
    "activo",
    ["documento", "video"]
);

let tarea3: Tarea = crearTarea(
    "TASK-003",
    "Actualizar base de datos",
    DiaSemana.Sabado,
    Prioridad.Baja,
    "inactivo",
    ["documento"]
);

// Mostrar las tareas
mostrarTarea(tarea1);
mostrarTarea(tarea2);
mostrarTarea(tarea3);

// Filtrar tareas de alta prioridad
let tareasAltaPrioridad = filtrarTareasPorPrioridad([tarea1, tarea2, tarea3], Prioridad.Alta);
console.log(`\nTareas de alta prioridad: ${tareasAltaPrioridad.length}`);

// Mostrar estadísticas
obtenerEstadisticasTareas([tarea1, tarea2, tarea3]);

// Ejemplos adicionales de uso de enums y union types
console.log("\n=== EJEMPLOS ADICIONALES ===");

// Trabajar con días de la semana
let diasSemana: DiaSemana[] = [
    DiaSemana.Lunes,
    DiaSemana.Martes,
    DiaSemana.Miercoles,
    DiaSemana.Jueves,
    DiaSemana.Viernes,
    DiaSemana.Sabado,
    DiaSemana.Domingo
];

console.log("Días de la semana:");
diasSemana.forEach(dia => {
    console.log(`- ${dia}: ${esDiaLaboral(dia) ? 'Laboral' : 'No laboral'}`);
});

// Trabajar con diferentes tipos de ID
let ids: ID[] = ["USER-001", 123, "TASK-456", 789];
console.log("\nIDs mixtos:", ids);

// Trabajar con tipos de archivo
let archivosProyecto: TipoArchivo[] = ["documento", "imagen", "video", "audio"];
console.log("Tipos de archivo en el proyecto:", archivosProyecto);

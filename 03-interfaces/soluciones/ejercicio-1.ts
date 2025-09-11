// Solución del Ejercicio 1: Interfaces Básicas - Sistema de Biblioteca

// 1. Definición de interfaces
interface Libro {
    id: number;
    titulo: string;
    autor: string;
    isbn: string;
    disponible: boolean;
    fechaPublicacion: Date;
    genero?: string;
}

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    telefono?: string;
    fechaRegistro: Date;
    librosPrestados: number[];
}

interface Prestamo {
    id: number;
    libroId: number;
    usuarioId: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    devuelto: boolean;
}

// 2. Sistema de gestión de biblioteca
class SistemaBiblioteca {
    private libros: Libro[] = [];
    private usuarios: Usuario[] = [];
    private prestamos: Prestamo[] = [];
    private siguienteIdLibro: number = 1;
    private siguienteIdUsuario: number = 1;
    private siguienteIdPrestamo: number = 1;

    // Crear un nuevo libro
    crearLibro(titulo: string, autor: string, isbn: string, fechaPublicacion: Date, genero?: string): Libro {
        const libro: Libro = {
            id: this.siguienteIdLibro++,
            titulo,
            autor,
            isbn,
            disponible: true,
            fechaPublicacion,
            genero
        };
        
        this.libros.push(libro);
        console.log(`Libro creado: ${titulo} por ${autor}`);
        return libro;
    }

    // Crear un nuevo usuario
    crearUsuario(nombre: string, email: string, telefono?: string): Usuario {
        const usuario: Usuario = {
            id: this.siguienteIdUsuario++,
            nombre,
            email,
            telefono,
            fechaRegistro: new Date(),
            librosPrestados: []
        };
        
        this.usuarios.push(usuario);
        console.log(`Usuario creado: ${nombre} (${email})`);
        return usuario;
    }

    // Realizar un préstamo
    realizarPrestamo(libroId: number, usuarioId: number): Prestamo | null {
        const libro = this.libros.find(l => l.id === libroId);
        const usuario = this.usuarios.find(u => u.id === usuarioId);

        if (!libro) {
            console.log(`Error: Libro con ID ${libroId} no encontrado`);
            return null;
        }

        if (!usuario) {
            console.log(`Error: Usuario con ID ${usuarioId} no encontrado`);
            return null;
        }

        if (!libro.disponible) {
            console.log(`Error: El libro "${libro.titulo}" no está disponible`);
            return null;
        }

        const fechaPrestamo = new Date();
        const fechaDevolucion = new Date();
        fechaDevolucion.setDate(fechaDevolucion.getDate() + 14); // 14 días de préstamo

        const prestamo: Prestamo = {
            id: this.siguienteIdPrestamo++,
            libroId,
            usuarioId,
            fechaPrestamo,
            fechaDevolucion,
            devuelto: false
        };

        this.prestamos.push(prestamo);
        libro.disponible = false;
        usuario.librosPrestados.push(libroId);

        console.log(`Préstamo realizado: "${libro.titulo}" prestado a ${usuario.nombre}`);
        return prestamo;
    }

    // Devolver un libro
    devolverLibro(prestamoId: number): boolean {
        const prestamo = this.prestamos.find(p => p.id === prestamoId);
        
        if (!prestamo) {
            console.log(`Error: Préstamo con ID ${prestamoId} no encontrado`);
            return false;
        }

        if (prestamo.devuelto) {
            console.log(`Error: El préstamo ya fue devuelto`);
            return false;
        }

        const libro = this.libros.find(l => l.id === prestamo.libroId);
        const usuario = this.usuarios.find(u => u.id === prestamo.usuarioId);

        if (libro && usuario) {
            prestamo.devuelto = true;
            libro.disponible = true;
            usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== prestamo.libroId);
            
            console.log(`Libro devuelto: "${libro.titulo}" por ${usuario.nombre}`);
            return true;
        }

        return false;
    }

    // Buscar libros por autor
    buscarLibrosPorAutor(autor: string): Libro[] {
        const librosEncontrados = this.libros.filter(libro => 
            libro.autor.toLowerCase().includes(autor.toLowerCase())
        );
        
        console.log(`Libros encontrados para "${autor}": ${librosEncontrados.length}`);
        return librosEncontrados;
    }

    // Mostrar libros prestados por un usuario
    mostrarLibrosPrestados(usuarioId: number): Libro[] {
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        
        if (!usuario) {
            console.log(`Error: Usuario con ID ${usuarioId} no encontrado`);
            return [];
        }

        const librosPrestados = this.libros.filter(libro => 
            usuario.librosPrestados.includes(libro.id)
        );

        console.log(`Libros prestados por ${usuario.nombre}: ${librosPrestados.length}`);
        return librosPrestados;
    }

    // Obtener información de un libro
    obtenerLibro(id: number): Libro | undefined {
        return this.libros.find(l => l.id === id);
    }

    // Obtener información de un usuario
    obtenerUsuario(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.id === id);
    }

    // Listar todos los libros
    listarLibros(): Libro[] {
        return [...this.libros];
    }

    // Listar todos los usuarios
    listarUsuarios(): Usuario[] {
        return [...this.usuarios];
    }

    // Obtener préstamos activos
    obtenerPrestamosActivos(): Prestamo[] {
        return this.prestamos.filter(p => !p.devuelto);
    }
}

// 3. Ejemplos de uso
console.log("=== SISTEMA DE BIBLIOTECA ===\n");

const biblioteca = new SistemaBiblioteca();

// Crear algunos libros
const libro1 = biblioteca.crearLibro(
    "El Quijote",
    "Miguel de Cervantes",
    "978-84-376-0494-7",
    new Date("1605-01-01"),
    "Novela"
);

const libro2 = biblioteca.crearLibro(
    "Cien años de soledad",
    "Gabriel García Márquez",
    "978-84-376-0495-4",
    new Date("1967-01-01"),
    "Realismo mágico"
);

const libro3 = biblioteca.crearLibro(
    "1984",
    "George Orwell",
    "978-84-376-0496-1",
    new Date("1949-01-01"),
    "Ciencia ficción"
);

// Crear algunos usuarios
const usuario1 = biblioteca.crearUsuario(
    "Juan Pérez",
    "juan@email.com",
    "+34 123 456 789"
);

const usuario2 = biblioteca.crearUsuario(
    "María García",
    "maria@email.com"
);

// Realizar préstamos
console.log("\n=== REALIZANDO PRÉSTAMOS ===");
const prestamo1 = biblioteca.realizarPrestamo(libro1.id, usuario1.id);
const prestamo2 = biblioteca.realizarPrestamo(libro2.id, usuario2.id);

// Intentar prestar un libro ya prestado
const prestamo3 = biblioteca.realizarPrestamo(libro1.id, usuario2.id);

// Buscar libros por autor
console.log("\n=== BÚSQUEDA POR AUTOR ===");
const librosCervantes = biblioteca.buscarLibrosPorAutor("Cervantes");
const librosGarcia = biblioteca.buscarLibrosPorAutor("García");

// Mostrar libros prestados
console.log("\n=== LIBROS PRESTADOS ===");
const librosPrestadosUsuario1 = biblioteca.mostrarLibrosPrestados(usuario1.id);
const librosPrestadosUsuario2 = biblioteca.mostrarLibrosPrestados(usuario2.id);

// Devolver un libro
console.log("\n=== DEVOLVIENDO LIBROS ===");
if (prestamo1) {
    biblioteca.devolverLibro(prestamo1.id);
}

// Mostrar estado actual
console.log("\n=== ESTADO ACTUAL ===");
console.log("Libros disponibles:", biblioteca.listarLibros().filter(l => l.disponible).length);
console.log("Préstamos activos:", biblioteca.obtenerPrestamosActivos().length);

// Mostrar información detallada
console.log("\n=== INFORMACIÓN DETALLADA ===");
const libroEncontrado = biblioteca.obtenerLibro(libro1.id);
if (libroEncontrado) {
    console.log(`Libro: ${libroEncontrado.titulo} - Disponible: ${libroEncontrado.disponible}`);
}

const usuarioEncontrado = biblioteca.obtenerUsuario(usuario1.id);
if (usuarioEncontrado) {
    console.log(`Usuario: ${usuarioEncontrado.nombre} - Libros prestados: ${usuarioEncontrado.librosPrestados.length}`);
}

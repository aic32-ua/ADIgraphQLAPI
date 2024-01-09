export class Usuario {
    id?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    password?: string;
}

export class Autor {
    id?: number;
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
    nacionalidad?: string;
    libros?: Libro[] = [];
}

export class Libro {
    id?: number;
    titulo?: string;
    autorId?: number;
}

const autoresObj = {
    1: {
        id: 1,
        nombre: 'J.K.',
        apellido: 'Rowling',
        fechaNacimiento: new Date('1965-07-31'),
        nacionalidad: 'British',
    },
    2: {
        id: 2,
        nombre: 'George R.R.',
        apellido: 'Martin',
        fechaNacimiento: new Date('1948-09-20'),
        nacionalidad: 'American',
    },
    3: {
        id: 3,
        nombre: 'Agatha',
        apellido: 'Christie',
        fechaNacimiento: new Date('1890-09-15'),
        nacionalidad: 'British',
    },
    4: {
        id: 4,
        nombre: 'Gabriel',
        apellido: 'García Márquez',
        fechaNacimiento: new Date('1927-03-06'),
        nacionalidad: 'Colombian',
    },
    5: {
        id: 5,
        nombre: 'Miguel de',
        apellido: 'Cervantes',
        fechaNacimiento: new Date('1547-09-29'),
        nacionalidad: 'Spanish',
    },
    6: {
        id: 6,
        nombre: 'Haruki',
        apellido: 'Murakami',
        fechaNacimiento: new Date('1949-01-12'),
        nacionalidad: 'Japanese',
    },
    7: {
        id: 7,
        nombre: 'Jane',
        apellido: 'Austen',
        fechaNacimiento: new Date('1775-12-16'),
        nacionalidad: 'British',
    },
    8: {
        id: 8,
        nombre: 'Isabel',
        apellido: 'Allende',
        fechaNacimiento: new Date('1942-08-02'),
        nacionalidad: 'Chilean',
    },
    9: {
        id: 9,
        nombre: 'Khaled',
        apellido: 'Hosseini',
        fechaNacimiento: new Date('1965-03-04'),
        nacionalidad: 'Afghan',
    },
    10: {
        id: 10,
        nombre: 'Leo',
        apellido: 'Tolstoy',
        fechaNacimiento: new Date('1828-09-09'),
        nacionalidad: 'Russian',
    },
};
export var autores: Map<number, Autor> = new Map(Object.entries(autoresObj).map(([id, autor]) => [parseInt(id), autor]));

const librosObj = {
    1: {
        id: 1,
        titulo: 'Harry Potter y la camara secreta',
        autorId: 1,
    },
    2: {
        id: 2,
        titulo: 'Juego de tronos',
        autorId: 2,
    },
    3: {
        id: 3,
        titulo: 'Canción de hielo y fuego',
        autorId: 2,
    },
    4: {
        id: 4,
        titulo: 'Asesinato en el Orient Express',
        autorId: 3,
    },
    5: {
        id: 5,
        titulo: 'Y no quedó ninguno',
        autorId: 3,
    },
    6: {
        id: 6,
        titulo: 'Muerte en el Nilo',
        autorId: 3,
    },
    7: {
        id: 7,
        titulo: 'Cien años de soledad',
        autorId: 4,
    },
    8: {
        id: 8,
        titulo: 'La Galatea',
        autorId: 5,
    },
    9: {
        id: 9,
        titulo: 'Don Quijote de la Mancha',
        autorId: 5,
    },
    10: {
        id: 10,
        titulo: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autorId: 5,
    },
    11: {
        id: 11,
        titulo: 'El señor de los anillos',
        autorId: 2,
    },
    12: {
        id: 12,
        titulo: 'Guerra y paz',
        autorId: 10,
    },
    13: {
        id: 13,
        titulo: 'Anna Karenina',
        autorId: 10,
    },
    14: {
        id: 14,
        titulo: 'Northanger Abbey',
        autorId: 7,
    },
}
  
export var libros: Map<number, Libro> = new Map(Object.entries(librosObj).map(([id, libro]) => [parseInt(id), libro]));



export var usuarios: Usuario[] = [
    {
        id: 1,
        nombre: "John",
        apellido: "Doe",
        email: "john.doe@example.com",
        password: "password123"
    },
    {
        id: 2,
        nombre: "Jane",
        apellido: "Smith",
        email: "jane.smith@example.com",
        password: "securepass456"
    },
    {
        id: 3,
        nombre: "Bob",
        apellido: "Johnson",
        email: "bob.johnson@example.com",
        password: "mysecretpass"
    },
    {
        id: 4,
        nombre: "Alice",
        apellido: "Williams",
        email: "alice.williams@example.com",
        password: "pass1234"
    },
    {
        id: 5,
        nombre: "Eva",
        apellido: "Miller",
        email: "eva.miller@example.com",
        password: "strongpassword789"
    }
];
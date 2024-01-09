import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { libros, autores, Autor, Libro } from './datos';

// Necesario plugin de apollo graphql en vs code o equivalente en otros ides
const typeDefs = `#graphql
    # comentario

    # Date solo es un nombre
    scalar Date

    input Filtro {
        resultados: Int
    }

    type Libro {
        id: ID!
        titulo: String
        autor: Autor
    }

    type Autor {
        id: ID!
        nombre: String
        apellido: String
        fechaNacimiento: Date
        libros: [Libro]
    }

    type Query {
        hola: String
        libros(filtro: Filtro): [Libro]
        libro(id: ID): Libro
        autores: [Autor]
        autor(id: ID): Autor
    }

    type Mutation {
        crearLibro(titulo: String, autor: ID): Libro
        crearAutor(nombre: String, apellido: String, fechaNacimiento: Date): Autor
        borrarLibro(id: ID): String
        borrarAutor(id: ID): String
    }
`;

const resolvers = {
    Query: {
        hola: () => "hola",
        libros: (_: any, args: any) => {
            const results = args.filtro?.resultados;
            if(results)
                return Array.from(libros.values()).slice(0, results);
            
            return Array.from(libros.values());
        },
        autores: () => Array.from(autores.values()),
        libro: (_: any, args: any) => libros.get(Number(args.id)),
        autor: (_: any, args: any) => autores.get(Number(args.id))
    },
    Mutation: {
        crearLibro: (_: any, args: any) => {
            const libro: Libro = new Libro();
            libro.titulo = args.titulo;
            libro.autorId = Number(args.autor);
            libro.id = libros.size + 1;

            console.log(libro);

            libros.set(libro.id, libro);
            return libro;
        },
        crearAutor: (_: any, args: any) => {
            const autor: Autor = new Autor();
            autor.nombre = args.nombre;
            autor.apellido = args.apellido;
            autor.fechaNacimiento = args.fechaNacimiento;
            autor.id = autores.size + 1;

            autores.set(autor.id, autor);
            return autor;
        },
        borrarLibro: (_: any, args: any) => {
            const libro = libros.get(Number(args.id));
            libros.delete(Number(args.id));
            return "Borrado";
        },
        borrarAutor: (_: any, args: any) => {
            const autor = autores.get(Number(args.id));
            autores.delete(Number(args.id));
            return "Borrado";
        },
    },
    Autor: {
        libros: (autor: Autor) => Array.from(libros.values()).filter(libro => libro.autorId === autor.id),
    },
    Libro: {
        autor: (libro: Libro) => Array.from(autores.values()).find(autor => autor.id === libro.autorId),
    },
};

const app = express();
const PORT = 3000;


const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
    app.use('/graphql', express.json(), expressMiddleware(server));
    
    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
});
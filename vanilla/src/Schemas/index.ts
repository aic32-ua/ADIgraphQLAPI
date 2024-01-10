import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLError, buildSchema} from 'graphql';
import {UsuarioType} from './TypeDefs/UsuarioType';
import {AutorType} from './TypeDefs/AutorType';
import {usuarios, autores, libros, Libro} from '../datos';
import { LibroType } from './TypeDefs/LibroType';

var nextLibroId = libros.size + 1;
var nextAutorId = autores.size + 1;

//ejemplo autorizacion simplificado
function authorized(context: any): boolean{
    return context.req.headers['authorization'];
}

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        autores:{
            type: new GraphQLList(AutorType),
            resolve(parent, args, context){
                if(!authorized(context)){
                    return null
                }

                return Array.from(autores.values());
            }
        },
        autor:{
            type: AutorType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                return autores.get(args.id);
            }
        },
        libros:{
            type: new GraphQLList(LibroType),
            resolve(parent, args){
                return Array.from(libros.values());
            }
        },
        libro:{
            type: LibroType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                return libros.get(args.id);
            }
        },
    }
});




export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        crearLibro: {
            type: LibroType,
            args: {
                titulo: {type: GraphQLString},
                autor: {type: GraphQLInt}
            },
            resolve: (parent, args, context) => {
                if(!authorized(context)){
                    return null
                }

                const libro = new Libro();
                libro.titulo = args.titulo;
                libro.autorId = Number(args.autor);
                libro.id = nextLibroId;
                
                libros.set(libro.id, libro);
                nextLibroId++;

                return libro;
            }
        },
        borrarLibro: {
            type: GraphQLString,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args, context) => {
                if(!authorized(context)){
                    return null
                }

                if(libros.delete(args.id)){
                    return "Libro borrado";
                }

                return null;
            }
        },
        crearAutor: {
            type: AutorType,
            args: {
                nombre: {type: GraphQLString},
                apellido: {type: GraphQLString},
                fechaNacimiento: {type: GraphQLString},
                nacionalidad: {type: GraphQLString}
            },
            resolve: (parent, args, context) => {
                if(!authorized(context)){
                    return null
                }

                const autor = {
                    nombre: args.nombre,
                    apellido: args.apellido,
                    fechaNacimiento: args.fechaNacimiento,
                    nacionalidad: args.nacionalidad,
                    id: nextAutorId
                };

                autores.set(autor.id, autor);
                nextAutorId++;

                return autor;
            }
        },
        borrarAutor: {
            type: GraphQLString,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args, context) => {
                if(!authorized(context)){
                    return null
                }

                if(autores.delete(args.id)){
                    return "Autor borrado";
                }

                return null;
            }
        },
    }
});
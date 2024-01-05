import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLError} from 'graphql';
import {UsuarioType} from './TypeDefs/UsuarioType';
import {AutorType} from './TypeDefs/AutorType';
import {usuarios, autores, libros} from '../datos';

var nextUsuarioId = usuarios.length + 1;


export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        autores:{
            type: new GraphQLList(AutorType),
            resolve(parent, args){
                var result = Array.from(autores.values());
                result.forEach(autor => {
                    autor.libros = Array.from(libros.values()).filter(libro => libro.autorId === autor.id);
                });
                return result;
            }
        }
    }
})
export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        crearUsuario:{
            type: UsuarioType,
            args: {
                nombre: {type: GraphQLString},
                apellido: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parent, args){
                usuarios.push({id: nextUsuarioId, nombre: args.nombre, apellido: args.apellido, email: args.email, password: args.password});
                
                nextUsuarioId++;

                return args;
            }
        },
        borrarUsuario:{
            type: UsuarioType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                const deleteIndex = usuarios.findIndex(usuario => usuario.id === args.id);

                if(deleteIndex === -1){
                    throw new GraphQLError(`No existe el usuario con id ${args.id}`);
                }

                usuarios.splice(deleteIndex, 1);
                return {};
            }
        },
    }
});
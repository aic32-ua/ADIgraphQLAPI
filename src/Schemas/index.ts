import graphql, { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNullableType, GraphQLError} from 'graphql';
import {UsuarioType} from './TypeDefs/UsuarioType';
import {usuarios} from '../datos';

var nextUsuarioId = usuarios.length + 1;


export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        todosUsuarios:{
            type: new GraphQLList(UsuarioType),
            args: {
                id: {type: GraphQLInt},
                nombre: {type: GraphQLString},
                apellido: {type: GraphQLString}
            },
            resolve(parent, args){
                return usuarios;
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
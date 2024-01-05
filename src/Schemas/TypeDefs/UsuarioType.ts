import { GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';


export const UsuarioType = new GraphQLObjectType({
    name: 'Usuario',
    fields: () => ({
        id: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        apellido: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});
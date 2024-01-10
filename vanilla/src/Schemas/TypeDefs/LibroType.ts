import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { AutorType } from "./AutorType";
import { Libro, autores } from "../../datos";

export const LibroType = new GraphQLObjectType({
    name: 'Libro',
    fields: () => ({
        id: {type: GraphQLInt},
        titulo: {type: GraphQLString},
        autor: {
            type: AutorType,
            resolve: (parent: Libro) => {
                if(!parent.autorId) return null;
                return autores.get(parent.autorId);
            }
        }
    })
});
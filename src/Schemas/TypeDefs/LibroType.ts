import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { AutorType } from "./AutorType";

export const LibroType = new GraphQLObjectType({
    name: 'Libro',
    fields: () => ({
        id: {type: GraphQLInt},
        titulo: {type: GraphQLString},
        autorId: {type: GraphQLInt}
    })
});
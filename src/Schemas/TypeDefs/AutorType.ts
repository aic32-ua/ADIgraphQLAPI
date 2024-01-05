import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLScalarType, Kind, GraphQLList} from 'graphql';
import { LibroType } from './LibroType';

export const DateType = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: any): string {
        if (!(value instanceof Date)) {
            throw new TypeError('Field error: value is not an instance of Date');
        }

        return value.toISOString();
    },
    parseValue(value: unknown): Date | null {
        if (typeof value !== 'string') {
            throw new TypeError('Field error: value is not a valid string');
        }
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
            throw new TypeError('Field error: value is not a valid string literal');
        }
    
        return new Date(ast.value);
    }
});


export const AutorType = new GraphQLObjectType({
    name: 'Autor',
    fields: () => ({
        id: {type: GraphQLInt},
        nombre: {type: GraphQLString},
        apellido: {type: GraphQLString},
        fechaNacimiento: {type: DateType},
        nacionalidad: {type: GraphQLString},
        libros: {type: new GraphQLList(LibroType)}
    })
});
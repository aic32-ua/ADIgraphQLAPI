import express from 'express';
import { GraphQLSchema} from 'graphql';
import {createHandler} from 'graphql-http/lib/use/express';
import {RootQuery, Mutation} from './Schemas';
import expressPlayground from 'graphql-playground-middleware-express';
import { libros } from './datos';

const app = express();
const PORT = 3000;

//query son GETs, mutation son POSTs UPDATEs DELETEs
const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});
app.use('/graphql', createHandler({ schema, context: {libros: libros}}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
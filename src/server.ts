import express from 'express';
import {  ApolloServer } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const APP = express();
const SERVER: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export default (): void => {


    SERVER.applyMiddleware({app: APP, path: '/'});
    APP.listen(
        { port: 3000 },
        (): void => console.log(`\n 🚀 running on port :: 3000`));

}

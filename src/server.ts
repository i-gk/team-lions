import express from 'express';
import {  ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const APP = express();
const SERVER: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export default async (): Promise<void> => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/devtest', { useNewUrlParser: true, useUnifiedTopology: true })

        SERVER.applyMiddleware({app: APP, path: '/'});
        APP.listen(
            { port: 3000 },
            (): void => console.log(`\n 🚀 running on port :: 3000`));
    } catch (e) {
        console.error('Failed to start the server ', e)
    }

}

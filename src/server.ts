import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 3000;
const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
const MONGO_USER = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PSWD;
const MONGO_IP = process.env.MONGO_IP;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const APP = express();
const SERVER: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IS_DEVELOPMENT
});

export default async (): Promise<void> => {
  try {
    await mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    SERVER.applyMiddleware({ app: APP, path: "/" });
    APP.listen({ port: PORT }, (): void =>
      console.log(`\n 🚀 running on port :: ${PORT}`)
    );
  } catch (e) {
    console.error("Failed to start the server ", e);
  }
};

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import http from 'http';

import { resolvers } from "./resolvers";
import gql from "graphql-tag";
import { readFileSync } from "fs";
import { resolve } from "path";


const app: any = express();
const httpServer = http.createServer(app);
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql(
  readFileSync(resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server: any = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const runServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) || 5000 },
  });
  console.log(`🚀  Server ready at1: ${url}`);
};

runServer();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const resolvers_1 = require("./resolvers");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const fs_1 = require("fs");
const path_1 = require("path");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = (0, graphql_tag_1.default)((0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
}));
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
    introspection: true
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const runServer = async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: Number(process.env.PORT) || 5000 },
    });
    console.log(`🚀  Server ready at1: ${url}`);
};
runServer();

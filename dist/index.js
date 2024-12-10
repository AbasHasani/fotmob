"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// Type defs
const schemas_1 = require("./schemas");
// Resolvers
const resolvers_1 = require("./resolvers");
// Routes
const match_1 = __importDefault(require("./routes/match"));
const live_score_1 = __importDefault(require("./routes/live-score"));
const team_1 = __importDefault(require("./routes/team"));
const player_1 = __importDefault(require("./routes/player"));
const news_1 = __importDefault(require("./routes/news"));
const goal_1 = require("./api/goal");
const server = new server_1.ApolloServer({
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
const app = (0, express_1.default)();
const runServer = async () => {
    // const { url } = await startStandaloneServer(server, {
    //   context: async () => {
    //     const { cache } = server;
    //     return {
    //       dataSources: {
    //         moviesAPI: new MoviesAPI({ cache }),
    //       },
    //     };
    //   },
    //   listen: { port: Number(process.env.PORT) || 5000 },
    // });
    // console.log(`🚀  Server ready at1: ${url}`);
    await server.start();
    // Attach Apollo Server to a specific route
    app.use("/graphql", (0, cors_1.default)(), // Enable CORS
    body_parser_1.default.json(), // Parse JSON requests
    //@ts-ignore
    (0, express4_1.expressMiddleware)(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    goalAPI: new goal_1.GoalAPI({ cache }),
                },
            };
        },
    }));
    // app.use(express.json());
    // Define other Express routes
    app.use("/match", match_1.default);
    app.use("/live-score", live_score_1.default);
    app.use("/player", player_1.default);
    app.use("/team", team_1.default);
    app.use("/news", news_1.default);
    // Start the Express server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`GraphQL endpoint is available at http://localhost:${PORT}/graphql`);
    });
};
runServer();

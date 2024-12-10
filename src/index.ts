import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// Type defs
import { typeDefs } from "./schemas";
// Resolvers
import { resolvers } from "./resolvers";
// Routes
import matchRoute from "./routes/match";
import liveScore from "./routes/live-score";
import team from "./routes/team";
import player from "./routes/player";
import news from "./routes/news";

import { GoalAPI } from "./api/goal";

const server: any = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

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
  app.use(
    "/graphql",
    cors(), // Enable CORS
    bodyParser.json(), // Parse JSON requests
    //@ts-ignore
    expressMiddleware(server, {
      context: async () => {
        const { cache } = server;
        return {
          dataSources: {
            goalAPI: new GoalAPI({ cache }),
          },
        };
      },
    })
  );
  // app.use(express.json());
  // Define other Express routes
  app.use("/match", matchRoute);
  app.use("/live-score", liveScore);
  app.use("/player", player);
  app.use("/team", team);
  app.use("/news", news);
  // Start the Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(
      `GraphQL endpoint is available at http://localhost:${PORT}/graphql`
    );
  });
};

runServer();

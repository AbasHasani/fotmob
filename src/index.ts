import express from "express";

const app = express();

app.get("/", (req: any, res: any) => res.send("Hello world"));

app.listen(4000, () => console.log("Server started at: http://localhost:4000"));

export default app;

import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.sendStatus(200);
});

app.get("/.well-known/apollo/server-health", (_, res) => {
  res.sendStatus(200);
});

app.get("/400-error", (_, res) => {
  res.status(400);
  res.send("Throwing 400 error");
});

app.get("/401-error", (_, res) => {
  res.status(401);
  res.send("Throwing 401 error");
});

app.get("/500-error", () => {
  throw new Error("Throwing 500 error");
});

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000");
});

import express from "express";

const app = express();

app.get("/", (_, res) => {
  console.log("GET /");
  res.sendStatus(200);
});

app.get("/.well-known/apollo/server-health", (_, res) => {
  res.sendStatus(200);
});

app.post("/sign-in-example", (_, res) => {
  const val = Math.random() - 0.05;
  if (val < 0.45) {
    res.send(`val: ${val}`).sendStatus(200);
  } else if (val >= 0.45 && val < 0.6) {
    res.status(400);
    res.send(`Throwing 400 error: ${val}`);
  } else if (val >= 0.6 && val < 0.8) {
    res.status(401);
    res.send(`Throwing 401 error: ${val}`);
  } else {
    throw new Error(`Throwing 500 error: ${val}`);
  }
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

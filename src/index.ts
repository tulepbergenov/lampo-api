import express from "express";

const expressApp = express();

const PORT = 3080;

expressApp.get("/hello", (_, res) => {
  res.send("Hello World!");
});

expressApp.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}`);
});

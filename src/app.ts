import express = require("express");
import * as StatusController from "./controllers/status";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", StatusController.defaultRest);
app.listen(port, () => {
  console.log(`Server run at localhost:${port}`);
});

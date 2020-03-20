"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const StatusController = require("./controllers/status");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", StatusController.defaultRest);
app.listen(port, () => {
    console.log(`Server run at localhost:${port}`);
});
//# sourceMappingURL=app.js.map
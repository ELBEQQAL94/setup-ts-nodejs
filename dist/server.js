"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
const server = app_1.default.listen(port, () => console.log("server running..."));
exports.default = server;
//# sourceMappingURL=server.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./api/user.controller");
const app_1 = require("./app");
const constants_1 = require("./config/constants");
const server = new app_1.default([user_controller_1.default], constants_1.HTTP_PORT);
server.listen();
//# sourceMappingURL=server.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor(controllers, port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/api/v1', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map
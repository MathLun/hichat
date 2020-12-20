"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes = void 0;
const express_1 = require("express");
exports.useRoutes = express_1.Router();
exports.useRoutes.route('/')
    .get()
    .post();
exports.useRoutes.route('/:id')
    .get()
    .put()
    .delete();
//# sourceMappingURL=routes.js.map
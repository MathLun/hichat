"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserContoller {
    constructor() {
        this.path = '/users';
        this.router = express_1.Router();
        this.users = [
            {
                firstName: 'matheus',
                lastName: 'Luna',
                email: 'matheus86luna@hotmail.com',
                password: 'Zurik21$$'
            }
        ];
        this.createUser = (req, res, next) => {
            const user = req.body;
            this.users.push(user);
            res.send(user);
        };
        this.getAllUsers = (req, res, next) => {
            res.json(this.users);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.createUser);
    }
    getOneUser() {
    }
    getCurrentUser() {
    }
    updateUserName() {
    }
    deleteUser() {
    }
}
exports.default = new UserContoller;
//# sourceMappingURL=user.controller.js.map
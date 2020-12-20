import { Request, Response, NextFunction, Router } from 'express';
import { IUser } from '../db/interfaces/user.interface';

class UserContoller {
    public path = '/users';
    public router: Router = Router();

    private users: IUser[] = [
        { 
            firstName: 'matheus',
            lastName: 'Luna',
            email: 'matheus86luna@hotmail.com',
            password: 'Zurik21$$'
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.createUser);
    }

    createUser = (req: Request, res: Response, next: NextFunction) => {
        const user: IUser = req.body;
        this.users.push(user);
        res.send(user);
    }

    getAllUsers = (req: Request, res: Response, next: NextFunction) => {
        res.json(this.users);
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

export default new UserContoller;
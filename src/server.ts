import UserController from './api/user.controller';
import App from './app';
import { HTTP_PORT } from './config/constants';

const server = new App([ UserController ], HTTP_PORT);
server.listen();

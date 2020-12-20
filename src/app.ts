import "dotenv/config";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Application } from 'express';

class App {
    
    public app: Application;
    public port: number;

    constructor(controllers: any, port: number) {
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

export default App;
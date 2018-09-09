
import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"

import { Routes } from "./routes/vehicleRoutes"

class App {
    public app: express.Application
    public route: Routes = new Routes()
    public mongoUrl: string = "mongodb://localhost/vehicleDb"

    constructor() {
        this.app = express()
        this.config()
        this.mongoSetup()
        this.route.routes(this.app)
    }

    private config(): void {
        this.app.use(bodyParser.json())

        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise
        mongoose.connect(this.mongoUrl)
    }
}

export default new App().app
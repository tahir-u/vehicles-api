
import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"

import { Routes } from "./routes/vehicleRoutes"
import { VehicleSchema } from "./models/vehicleModel"

let data = require("../data/vehicles.json")

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

    private refreshData(mongooseConnection): void {
        let db = mongooseConnection.connection

        db.on("error", console.error.bind(console, "Connection error"))
        db.once("open", () => {
            let Vehicle = mongoose.model("Vehicle", VehicleSchema)

            // Drop any existing records
            Vehicle.collection.deleteMany({}, (error) => {
                if (error) {
                    console.log(error)
                }
            })

            // Insert the original data
            Vehicle.collection.insertMany(data, (error) => {
                if (error) {
                    console.log(error)
                }
            })
        })
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })

        this.refreshData(mongoose)
    }
}

export default new App().app

import * as mongoose from "mongoose"
import { Request, Response } from "express"

import { VehicleSchema } from "../models/vehicleModel"

const Vehicle = mongoose.model("Vehicle", VehicleSchema)

export class VehicleController {
    public addNewVehicle(req: Request, res: Response) {
        let newVehicle = new Vehicle(req.body)

        newVehicle.save((error, vehicle) => {
            if (error) {
                res.send(error)
            }
            res.json(vehicle)
        })
    }

    public getVehicles(req: Request, res: Response) {
        Vehicle.find({}, (error, vehicle) => {
            if (error) {
                res.send(error)
            }
            res.json(vehicle)
        })
    }

    public getVehicleWithId(req: Request, res: Response) {
        Vehicle.findById(req.params.id, (error, vehicle) => {
            if (error) {
                res.send(error)
            }
            res.json(vehicle)
        })
    }

    public updateVehicle(req: Request, res: Response) {
        Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, vehicle) => {
            if (error) {
                res.send(error)
            }
            res.json(vehicle)
        })
    }

    public deleteVehicle(req: Request, res: Response) {
        Vehicle.remove({ _id: req.params.id }, (error) => {
            if (error) {
                res.send(error)
            }
            res.json({ message: "Successfully deleted vehicle" })
        })
    }
}
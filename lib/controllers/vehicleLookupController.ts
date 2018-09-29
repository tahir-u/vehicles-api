import * as mongoose from "mongoose"
import { Request, Response } from "express"

import { VehicleSchema } from "../models/vehicleModel"

const Vehicle = mongoose.model("Vehicle", VehicleSchema)

export class VehicleLookupController {
	public getVehicleWithMake(req: Request, res: Response) {
		Vehicle.find({ make: { $regex: req.params.make, $options: 'i' } }, (error, vehicles) => {
			if (error) {
				res.send(error)
			}
			res.json(vehicles)
		})
	}

	public getVehicleWithModel(req: Request, res: Response) {
		Vehicle.find({ model: { $regex: req.params.model, $options: 'i' } }, (error, vehicles) => {
			if (error) {
				res.send(error)
			}
			res.json(vehicles)
		})
	}

	public getVehicleWithColor(req: Request, res: Response) {
		Vehicle.find({ color: { $regex: req.params.color, $options: 'i' } }, (error, vehicles) => {
			if (error) {
				res.send(error)
			}
			res.json(vehicles)
		})
	}

	public getVehicleWithYear(req: Request, res: Response) {
		Vehicle.find({ year: parseInt(req.params.year) }, (error, vehicles) => {
			if (error) {
				res.send(error)
			}
			res.json(vehicles)
		})
	}
}
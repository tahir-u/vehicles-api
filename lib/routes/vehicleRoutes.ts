
import { Request, Response } from "express"

import { VehicleController } from "../controllers/vehicleController"

export class Routes {
    public vehicleController: VehicleController = new VehicleController()

    public routes(app): void {

        app.route("/v1/vehicle")
            // Get all vehicles
            .get(this.vehicleController.getVehicles)

            // Create a new vehicle
            .post(this.vehicleController.addNewVehicle)

        app.route("/v1/vehicle/:id")
            // Get a single vehicle's details
            .get(this.vehicleController.getVehicleWithId)

            // Update a single vehicle
            .put(this.vehicleController.updateVehicle)

            // Delete a single vehicle
            .delete(this.vehicleController.deleteVehicle)
    }
}
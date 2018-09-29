
import { Request, Response } from "express"

import { VehicleController } from "../controllers/vehicleController"
import { VehicleLookupController } from "../controllers/vehicleLookupController"

export class Routes {
    public vehicleController: VehicleController = new VehicleController()
    public vehicleLookupController: VehicleLookupController = new VehicleLookupController()

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

        app.route('/v1/vehicle/make/:make')
            // Get the vehicles that match a certain make
            .get(this.vehicleLookupController.getVehicleWithMake)

        app.route('/v1/vehicle/model/:model')
            // Get the vehicles that match a certain model
            .get(this.vehicleLookupController.getVehicleWithModel)

        app.route('/v1/vehicle/color/:color')
            // Get the vehicles that match a certain color
            .get(this.vehicleLookupController.getVehicleWithColor)

        app.route('/v1/vehicle/year/:year')
            // Get all vehicles that match a certain year
            .get(this.vehicleLookupController.getVehicleWithYear)
    }
}
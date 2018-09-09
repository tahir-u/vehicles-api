
import { Request, Response } from "express"

export class Routes {
    public routes(app): void {
        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request successful"
                })
            })

        app.route("/vehicle")
            // Get all vehicles
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "Get request successful"
                })
            })

            // Create a new vehicle
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: "POST request successful"
                })
            })

        app.route("/vehicle/:id")
            // Get a single vehicle's details
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request successful"
                })
            })

            // Update a single vehicle
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: "PUT request successful"
                })
            })

            // Delete a single vehicle
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    message: "DELETE request successful"
                })
            })
    }
}
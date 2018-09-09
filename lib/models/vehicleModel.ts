
import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const VehicleSchema = new Schema({
    id: {
        type: Number,
        required: "Enter an ID"
    },
    vin: {
        type: String,
        required: "Enter a VIN"
    },
    color: {
        type: String,
        required: "Enter a color"
    },
    make: {
        type: String,
        required: "Enter a make"
    },
    model: {
        type: String,
        required: "Enter a model"
    },
    year: {
        type: Number,
        required: "Enter a year"
    },
    value: {
        type: Number,
        required: "Enter a value"
    }
})
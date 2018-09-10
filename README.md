
### Vehicles API

#### Prerequisites
1. Install MongoDB and (optionally) Postman
2. Install the `typescript` and `ts-node` NPM packages globally, using the following:
```
npm install -g typescript ts-node
```
3. Install the necessary project dependencies by using `npm install` in this directory

#### Overview
This NodeJS, Express, and MongoDB driven Web API exposes a collection of Vehicle objects that can be operated on via normal RESTful operations

#### Routes
To access the routes available with this Web API, run `npm run dev` to run the Express server locally. Once the server comes up, navigate to `http://localhost:3000/v1/vehicle` to view the data that was loaded from the `vehicles.json` file in `data/`.

The other routes available for this Web API are:
* `/v1/vehicle/:id` (`GET`): View a specific vehicle, indexed by its ID
* `/v1/vehicle/:id` (`POST`): Update a specific vehicle's information, indexed by its ID
* `/v1/vehicle/:id` (`DELETE`): Delete a specific vehicle, indexed by its ID
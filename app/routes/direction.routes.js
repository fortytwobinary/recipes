// ****************************************************************************
// Copyright 2021 David L. Whitehurst
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//
// ****************************************************************************

module.exports = app => {
    const directions = require("../controllers/direction.controller.js");

    // Create a new Direction
    app.post("/v1/recipes/directions", directions.create);

    // Retrieve all Directions
    app.get("/v1/recipes/directions", directions.findAll);

    // Retrieve a single Direction with directionId
    app.get("/v1/recipes/directions/:directionId", directions.findOne);

    // Update a Direction with directionId
    app.put("/v1/recipes/directions/:directionId", directions.update);

    // Delete a Direction with directionId
    app.delete("/v1/recipes/directions/:directionId", directions.delete);

    // Delete all Directions
    app.delete("/v1/recipes/directions", directions.deleteAll);
};

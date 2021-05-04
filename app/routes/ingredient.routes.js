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
    const ingredients = require("../controllers/ingredient.controller.js");

    // Create a new Ingredient
    app.post("/v1/recipes/ingredients", ingredients.create);

    // Retrieve all Ingredients
    app.get("/v1/recipes/ingredients", ingredients.findAll);

    // Retrieve a single Ingredient with ingredientId
    app.get("/v1/recipes/ingredients/:ingredientId", ingredients.findOne);

    // Update an Ingredient with ingredientId
    app.put("/v1/recipes/ingredients/:ingredientId", ingredients.update);

    // Delete an Ingredient with ingredientId
    app.delete("/v1/recipes/ingredients/:ingredientId", ingredients.delete);

    // Delete all Ingredients
    app.delete("/v1/recipes/ingredients", ingredients.deleteAll);
};

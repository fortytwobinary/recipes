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
  const categories = require("../controllers/category.controller.js");

  // Create a new Category
  app.post("/v1/recipes/categories", categories.create);

  // Retrieve all Categories
  app.get("/v1/recipes/categories", categories.findAll);

  // Retrieve a single Category with categoryId
  app.get("/v1/recipes/categories/:recipeCategoryId", categories.findOne);

  // Update a Category with categoryId
  app.put("/v1/recipes/categories/:recipeCategoryId", categories.update);

  // Delete a Category with categoryId
  app.delete("/v1/recipes/categories/:recipeCategoryId", categories.delete);

  // Delete all Categories
  app.delete("/v1/recipes/categories", categories.deleteAll);
};

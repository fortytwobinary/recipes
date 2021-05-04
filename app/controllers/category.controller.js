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

const Category = require("../models/category.model.js");

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  //console.log(req.body);

  // Create a Category
  const category = new Category({
    category: req.body.category
  });

  // Save Category in the database
  Category.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    else {
      res.status(201); // created (success)
      res.send(''); // empty body
    }
  });
};

// Retrieve all categories from the database.
exports.findAll = (req, res) => {
  Category.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.send(data);
  });
};

// Find a single category with a recipe_category_Id
exports.findOne = (req, res) => {
  Category.findById(req.params.categoryId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found category with id ${req.params.categoryId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving category with id " + req.params.categoryId
        });
      }
    } else res.send(data);
  });
};

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Category.updateById(
    req.params.categoryId,
    new Category(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found category with id ${req.params.categoryId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating category with id " + req.params.categoryId
          });
        }
      } else {
        res.status(204); // no content (success)
        res.send(''); // empty body
      }
    }
  );
};

// Delete a category with the specified recipeCategoryId in the request
exports.delete = (req, res) => {
  Category.remove(req.params.categoryId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found category with id ${req.params.categoryId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete category with id " + req.params.categoryId
        });
      }
    } else {
      res.status(204); // no content (success)
      res.send(''); // empty body
    }
  });
};

// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Category.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    else {
      res.status(204); // no content (success)
      res.send(''); // empty body
    }
  });
};

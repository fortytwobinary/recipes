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

const Ingredient = require("../models/ingredient.model.js");

// Create and Save a new Ingredient
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    //console.log(req.body);

    // Create a Ingredient
    const ingredient = new Ingredient({
        ingredient: req.body.ingredient
    });

    // Save Ingredient in the database
    Ingredient.create(ingredient, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Ingredient."
            });
        else {
            res.status(201); // created (success)
            res.send(''); // empty body
        }
    });
};

// Retrieve all ingredients from the database.
exports.findAll = (req, res) => {
    Ingredient.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ingredients."
            });
        else res.send(data);
    });
};

// Find a single ingredient with a ingredient_Id
exports.findOne = (req, res) => {
    Ingredient.findById(req.params.ingredientId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ingredient with id ${req.params.ingredientId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ingredient with id " + req.params.ingredientId
                });
            }
        } else res.send(data);
    });
};

// Update a ingredient identified by the ingredientId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Ingredient.updateById(
        req.params.ingredientId,
        new Ingredient(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ingredient with id ${req.params.ingredientId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ingredient with id " + req.params.ingredientId
                    });
                }
            } else {
                res.status(204); // no content (success)
                res.send(''); // empty body
            }
        }
    );
};

// Delete a ingredient with the specified ingredientId in the request
exports.delete = (req, res) => {
    Ingredient.remove(req.params.ingredientId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ingredient with id ${req.params.ingredientId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ingredient with id " + req.params.ingredientId
                });
            }
        } else {
            res.status(204); // no content (success)
            res.send(''); // empty body
        }
    });
};

// Delete all ingredients from the database.
exports.deleteAll = (req, res) => {
    Ingredient.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ingredients."
            });
        else {
            res.status(204); // no content (success)
            res.send(''); // empty body
        }
    });
};

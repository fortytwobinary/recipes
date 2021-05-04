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

const Direction = require("../models/direction.model.js");

// Create and Save a new Direction
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    //console.log(req.body);

    // Create a Direction
    const direction = new Direction({
        direction: req.body.direction
    });

    // Save Direction in the database
    Direction.create(direction, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Direction."
            });
        else {
            res.status(201); // created (success)
            res.send(''); // empty body
        }
    });
};

// Retrieve all directions from the database.
exports.findAll = (req, res) => {
    Direction.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving directions."
            });
        else res.send(data);
    });
};

// Find a single directions with a directionId
exports.findOne = (req, res) => {
    Direction.findById(req.params.directionId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found direction with id ${req.params.directionId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving direction with id " + req.params.directionId
                });
            }
        } else res.send(data);
    });
};

// Update a direction identified by the directionId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Direction.updateById(
        req.params.directionId,
        new Direction(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found direction with id ${req.params.directionId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating direction with id " + req.params.directionId
                    });
                }
            } else {
                res.status(204); // no content (success)
                res.send(''); // empty body
            }
        }
    );
};

// Delete a direction with the specified directionId in the request
exports.delete = (req, res) => {
    Direction.remove(req.params.directionId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found direction with id ${req.params.directionId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete direction with id " + req.params.directionId
                });
            }
        } else {
            res.status(204); // no content (success)
            res.send(''); // empty body
        }
    });
};

// Delete all directions from the database.
exports.deleteAll = (req, res) => {
    Direction.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all directions."
            });
        else {
            res.status(204); // no content (success)
            res.send(''); // empty body
        }
    });
};

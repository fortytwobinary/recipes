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

const sql = require("./_db.js");

// constructor
const Direction = function(direction) {
    this.direction = direction.direction;
};

Direction.create = (newDirection, result) => {
    sql.query("INSERT INTO directions SET ?", newDirection, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Direction: ", { id: res.insertId, ...newDirection });
        result(null, { id: res.insertId, ...newDirection });
    });
};

Direction.findById = (directionId, result) => {
    sql.query(`SELECT * FROM directions WHERE direction_id = ${directionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found direction: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Direction with the id
        result({ kind: "not_found" }, null);
    });
};

Direction.getAll = result => {
    sql.query("SELECT * FROM directions", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("directions: ", res);
        result(null, res);
    });
};

Direction.updateById = (id, direction, result) => {
    sql.query(
        "UPDATE directions SET direction = ? WHERE direction_id = ?",
        [direction.direction],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found direction with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated direction: ", { id: id, ...direction });
            result(null, { id: id, ...direction });
        }
    );
};

Direction.remove = (id, result) => {
    sql.query("DELETE FROM directions WHERE direction_id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found direction with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted direction with id: ", id);
        result(null, res);
    });
};

Direction.removeAll = result => {
    sql.query("DELETE FROM directions", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} directions`);
        result(null, res);
    });
};

module.exports = Direction;

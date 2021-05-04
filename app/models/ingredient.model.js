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
const Ingredient = function(ingredient) {
    this.ingredient = ingredient.ingredient;
};

Ingredient.create = (newIngredient, result) => {
    sql.query("INSERT INTO ingredients SET ?", newIngredient, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Ingredient: ", { id: res.insertId, ...newIngredient });
        result(null, { id: res.insertId, ...newIngredient });
    });
};

Ingredient.findById = (ingredientId, result) => {
    sql.query(`SELECT * FROM ingredients WHERE ingredient_id = ${ingredientId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found ingredient: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found ingredient with the id
        result({ kind: "not_found" }, null);
    });
};

Ingredient.getAll = result => {
    sql.query("SELECT * FROM ingredients", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("ingredients: ", res);
        result(null, res);
    });
};

Ingredient.updateById = (id, ingredient, result) => {
    sql.query(
        "UPDATE ingredients SET ingredient_name = ? WHERE ingredient_id = ?",
        [ingredient.ingredient],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found ingredient with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated ingredient: ", { id: id, ...ingredient });
            result(null, { id: id, ...ingredient });
        }
    );
};

Ingredient.remove = (id, result) => {
    sql.query("DELETE FROM ingredients WHERE ingredient_id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found ingredient with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted ingredient with id: ", id);
        result(null, res);
    });
};

Ingredient.removeAll = result => {
    sql.query("DELETE FROM ingredients", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} ingredients`);
        result(null, res);
    });
};

module.exports = Ingredient;

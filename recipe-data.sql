-- data for testing and development

use recipes;
-- insert into recipes (name, description) values ('Caprese Salad','A very simple tomato and mozarella salad for two');

-- insert into measurement_qty (qty) values ('4-1/4');
-- insert into measurement_qty (qty) values ('2-1/8');

-- insert into measurement_units (unit) value ('m-obj');
-- insert into measurement_units (unit) value ('cup');
-- insert into measurement_units (unit) value ('tbsp');
-- insert into measurement_units (unit) value ('tsp');

-- insert into ingredients (ingredient_name) values ('Tomato');
-- insert into ingredients (ingredient_name) values ('Mozzarella Cheese');
-- insert into ingredients (ingredient_name) values ('Olive Oil');
-- insert into ingredients (ingredient_name) values ('Basil');

-- tomato
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,1,1,1,60
        );

-- cheese
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,1,1,1,60
        );

-- oil
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,1,1,1,60
        );

-- basil
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,1,1,1,60
        );

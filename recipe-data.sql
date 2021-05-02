-- data for testing and development

use recipes;
insert into recipes (name, recipe_category_id, description) values ('Caprese Salad', 16, 'A very simple tomato and mozarella salad for two');

insert into measurement_qty (qty) values ('4-1/4');
insert into measurement_qty (qty) values ('2-1/8');

insert into measurement_units (unit) value ('m-obj');
insert into measurement_units (unit) value ('cup');
insert into measurement_units (unit) value ('tbsp');
insert into measurement_units (unit) value ('tsp');

insert into ingredients (ingredient_name) values ('Tomato');
insert into ingredients (ingredient_name) values ('Mozzarella Cheese');
insert into ingredients (ingredient_name) values ('Olive Oil');
insert into ingredients (ingredient_name) values ('Basil');

-- tomato
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,1,1,1,524
        );

-- cheese
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,2,2,2,281
        );

-- oil
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,3,3,1,60
        );

-- basil
insert into recipe_ingredients (
    recipe_id,
    ingredient_id,
    measurement_unit_id,
    measurement_qty_id,
    weight_grams) values
        (
            1,4,3,1,11
        );

-- directions
insert into directions (direction) values ('Slice tomatoes and mozzarella');
insert into directions (direction) values ('Drizzle with olive oil');
insert into directions (direction) values ('Slice fresh basil or sprinkle pre-dried on top');

-- directions for recipe
insert into recipe_directions (recipe_id, direction_id, sequence) values (1,1,1);
insert into recipe_directions (recipe_id, direction_id, sequence) values (1,2,2);
insert into recipe_directions (recipe_id, direction_id, sequence) values (1,3,3);

-- insert ref data categories
insert into recipe_categories (category) values ('Appetizers & Snacks');
insert into recipe_categories (category) values ('Barbeque');
insert into recipe_categories (category) values ('Beverages');
insert into recipe_categories (category) values ('Breads');
insert into recipe_categories (category) values ('Cakes');
insert into recipe_categories (category) values ('Candy');
insert into recipe_categories (category) values ('Canning and Freezing');
insert into recipe_categories (category) values ('Cookies');
insert into recipe_categories (category) values ('Desserts');
insert into recipe_categories (category) values ('Eggs & Cheese');
insert into recipe_categories (category) values ('Fish & Seafood');
insert into recipe_categories (category) values ('Meat');
insert into recipe_categories (category) values ('Pies');
insert into recipe_categories (category) values ('Poultry');
insert into recipe_categories (category) values ('Rice, Pasta & Cereal');
insert into recipe_categories (category) values ('Salads & Dressings');
insert into recipe_categories (category) values ('Sauces & Relishes');
insert into recipe_categories (category) values ('Soups & Stews');
insert into recipe_categories (category) values ('Vegetables');

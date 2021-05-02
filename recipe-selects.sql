-- list of ingredients per recipe_id
select
        b.qty,
        c.unit,
        a.ingredient_name,
        ri.weight_grams `gm`
from
        recipe_ingredients ri,
        ingredients a,
        measurement_qty b,
        measurement_units c
where
        ri.recipe_id = 1 and
        ri.ingredient_id = a.ingredient_id and
        ri.measurement_qty_id = b.measurement_qty_id and
        ri.measurement_unit_id = c.measurement_unit_id

-- list of directions per recipe_id
select
    rd.sequence,
    d.direction
from
    recipe_directions rd,
    directions d
where
        rd.recipe_id = 1 and
        rd.direction_id = d.direction_id
order by rd.sequence
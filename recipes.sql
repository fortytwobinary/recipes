/* Create fresh new recipes database */
DROP DATABASE IF EXISTS `recipes`;

CREATE DATABASE `recipes`;

USE `recipes`;

/*
 * RECIPES
 */
CREATE TABLE `recipes` (
  `recipe_id`         int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `name`              varchar(40)       NOT NULL,
  `description`       varchar(2048)       NOT NULL,
  PRIMARY KEY (`id`)
);

/*
 * INGREDIENTS
 */
CREATE TABLE `ingredients` (
  `ingredient_id`       int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `ingredient_name`     varchar(128)      NOT NULL,
  PRIMARY KEY (`ingredient_id`)
);

/*
 * MEASUREMENT_UNITS
 */
CREATE TABLE `measurement_units` (
  `measurement_unit_id`     int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `unit`  varchar(128)      NOT NULL,
  PRIMARY KEY (`measurement_unit_id`)
);

/*
 * MEASUREMENT_QTY
 */
CREATE TABLE `measurement_qty` (
  `measurement_qty_id`    int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `qty`                   varchar(128)      NOT NULL,
  PRIMARY KEY (`measurement_qty_id`)
);

/*
 * DIRECTIONS
 */
CREATE TABLE `directions` (
  `direction_id`     int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `direction`        varchar(128)      NOT NULL,
  PRIMARY KEY (`direction_id`)
);

/*
 * RECIPE_INGREDIENTS
 */
CREATE TABLE `recipe_ingredients` (
  `recipe_id`           int(11) unsigned  NOT NULL,
  `ingredient_id`       int(11) unsigned  NOT NULL,
  `measurement_unit_id` int(11) unsigned  NOT NULL,
  `measurement_qty_id`  int(11) unsigned  NOT NULL,
  `weight_grams`        int unsigned
);

/*
 * RECIPE_DIRECTIONS
 */
CREATE TABLE `recipe_directions` (
  `recipe_id`     int(11) unsigned  NOT NULL,
  `direction_id`  int(11) unsigned  NOT NULL
);



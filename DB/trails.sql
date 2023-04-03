-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trailsDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `trailsDB` ;

-- -----------------------------------------------------
-- Schema trailsDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trailsDB` DEFAULT CHARACTER SET utf8 ;
USE `trailsDB` ;

-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trail` ;

CREATE TABLE IF NOT EXISTS `trail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `image_url` VARCHAR(2000) NULL,
  `description` TEXT NULL,
  `trail_length` DOUBLE NULL,
  `elevation_gain` INT NULL,
  `route_type` VARCHAR(45) NULL,
  `date_hiked` DATETIME NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trails_location_idx` (`location_id` ASC),
  CONSTRAINT `fk_trails_location`
    FOREIGN KEY (`location_id`)
    REFERENCES `location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS trails@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'trails'@'localhost' IDENTIFIED BY 'trails';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'trails'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `location`
-- -----------------------------------------------------
START TRANSACTION;
USE `trailsDB`;
INSERT INTO `location` (`id`, `city`) VALUES (1, 'Antioch');

COMMIT;


-- -----------------------------------------------------
-- Data for table `trail`
-- -----------------------------------------------------
START TRANSACTION;
USE `trailsDB`;
INSERT INTO `trail` (`id`, `name`, `image_url`, `description`, `trail_length`, `elevation_gain`, `route_type`, `date_hiked`, `location_id`) VALUES (1, 'Contra Loma Shore Loop', 'https://static-maps.alltrails.com/production/at-map/58735442/v1-trail-us-california-contra-loma-shore-loop-at-map-58735442-1665888499-300w250h-en-US-i-1-style_3.png', 'Try this 2.0-mile loop trail near Antioch, California. Generally considered an easy route, it takes an average of 40 min to complete. This is a popular trail for hiking, mountain biking, and running, but you can still enjoy some solitude during quieter times of day. Dogs are welcome and may be off-leash in some areas.', 2, 91, 'Loop', '2023-03-31', 1);

COMMIT;


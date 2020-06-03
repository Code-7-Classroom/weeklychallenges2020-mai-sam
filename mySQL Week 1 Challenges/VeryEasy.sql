CREATE DATABASE samCars;

USE samCars;

CREATE TABLE favCars(
Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
make VARCHAR (255),
model VARCHAR (255),
year INT
);

INSERT INTO favCars (make, model, year)
VALUES ('Nissan', 'GT-R', 2020),
('Toyota', 'Supra', 2007),
('Tesla', 'Model X', 2019);

SELECT * FROM favCars;

INSERT INTO favCars (make, model, year)
VALUES ('Mitsubishi', 'Eclipse', 1996),
('Acura', 'Integra Type-R', 2001)
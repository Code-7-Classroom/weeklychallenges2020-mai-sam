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




-- Write a query to add in three cars at once Write a query to add in prices and colors for each of these cars
INSERT INTO favCars (carMake, carModel, carYear)
VALUES ('Honda', 'Civic', "2010"),
("Honda", "Accord", "2011"),
("Toyota", "Camry", "2012");






-- Write a query to add in prices and colors
ALTER TABLE favCars 
ADD (carPrice INT,
	carColor VARCHAR(255));
    
UPDATE favCars
SET carPrice = 16000, carColor = 'White'
WHERE carID = 1;
UPDATE favCars
SET carPrice = 20600, carColor = 'Red'
WHERE carID = 2;
UPDATE favCars
SET carPrice = 90000, carColor = 'Green'
WHERE carID = 3;
UPDATE favCars
SET carPrice = 45000, carColor = 'Black'
WHERE carID = 4;
UPDATE favCars
SET carPrice = 35000, carColor = 'Yellow'
WHERE carID = 5;
UPDATE favCars
SET carPrice = 90000, carColor = 'Blue'
WHERE carID = 6;
UPDATE favCars
SET carPrice = 10000, carColor = 'Pink'
WHERE carID = 7;
UPDATE favCars
SET carPrice = 400, carColor = 'Orange'
WHERE carID = 8;
UPDATE favCars
SET carPrice = 230000, carColor = 'Purple'
WHERE carID = 9;

-- Write a query to put the Make and Model together in one column
SELECT CONCAT(carMake, " ", carModel) AS carMakeAndModel FROM favCars;

-- Create a new query that adds an additional column to the results to show how many cars have the same Make.
SELECT 
    carMake, 
    COUNT(carMake)
FROM
    favCars
GROUP BY carMake
HAVING COUNT(carMake) > 1;

SELECT * FROM favCars;
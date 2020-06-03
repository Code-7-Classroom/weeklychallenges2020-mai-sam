CREATE DATABASE samMovies;

USE samMovies;

CREATE TABLE favMovies(
title VARCHAR (255),
releasedate VARCHAR (255),
rating varchar (255),
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO favMovies (title, releaseDate, rating)
VALUES ('Toy Story', 'November 22, 1995', 'PG'),
('Spider-Man: Into the Spiderverse', 'December 14, 2018', 'PG'),
('Get Out', 'February 24, 2017', 'R'),
('Spirited Away', 'August 31, 2002', 'PG'),
('The Wolf on Wall Street ', 'December 25, 2013', 'R'),
('The Dark Knight', 'July 18, 2008', 'R'),
('Inception', 'July 13, 2010', 'R'),
('Avengers: Infinity War', 'April 27, 2018', 'PG-13'),
('Kill Bill Vol 1', 'October 10, 2003', 'R'),
('Scott Pilgram vs. The World', 'August 13, 2010', 'PG-13');

SELECT * FROM favMovies;

INSERT INTO favMovies (title, releaseDate, rating)
Values ('Parasite', 'October 5, 2019', 'R'),
('Superbad', 'August 17,2007', 'R');

SELECT title, releaseDate FROM favMovies WHERE title LIKE "%s%" ORDER BY releaseDate ASC;

ALTER TABLE favMovies
ADD COLUMN directorFirstName VARCHAR(255), 
ADD COLUMN directorLastName VARCHAR(255);

UPDATE favMovies
SET directorFirstName = 'Josh', directorLastName = 'Lasseter'
WHERE ID = 1;
UPDATE favMovies
SET directorFirstName = 'Peter',directorLastName = 'Ramsey'
WHERE ID = 2;
UPDATE favMovies
SET directorFirstName = 'Jordan', directorLastName = 'Peele'
WHERE ID = 3;
UPDATE favMovies
SET directorFirstName = 'Hayao', directorLastName = 'Miyazaki'
WHERE ID = 4;
UPDATE favMovies
SET directorFirstName = 'Martin', directorLastName = 'Scorsese'
WHERE ID = 5;
UPDATE favMovies
SET directorFirstName = 'Christopher', directorLastName = 'Nolan'
WHERE ID = 6;
UPDATE favMovies
SET directorFirstName = 'Christopher', directorLastName = 'Nolan'
WHERE ID = 7;
UPDATE favMovies
SET directorFirstName = 'Joe', directorLastName = 'Russo'
WHERE ID = 8;
UPDATE favMovies
SET directorFirstName = 'Quentin', directorLastName = 'Tarintino'
WHERE ID = 9;
UPDATE favMovies
SET directorFirstName = 'Edgar', directorLastName = 'Wright'
WHERE ID = 10;
UPDATE favMovies
SET directorFirstName = 'Bong', directorLastName = 'Joon-Ho'
WHERE ID = 11;
UPDATE favMovies
SET directorFirstName = 'Greg', directorLastName = 'Mottola'
WHERE ID = 12;

SELECT CONCAT(directorFirstName, ' ', directorLastName) AS director FROM favMovies;

SELECT * FROM favMovies ORDER BY directorLastName ASC;

SELECT directorLastName
FROM favMovies
WHERE directorLastName
REGEXP '^[.*[abcdefghijklmnopqABCDEFGHIJKLMNOPQ].*$]' 
AND directorLastName
NOT REGEXP '^[.*[rstuvwxyzRSTUVWXYZ].*$]'

LIMIT 3;



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
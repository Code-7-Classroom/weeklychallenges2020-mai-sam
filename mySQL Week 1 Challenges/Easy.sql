CREATE DATABASE samBooks;

USE samBooks;

CREATE TABLE favBooks(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
publishDate VARCHAR(255),
authorFirstName VARCHAR(255),
authorLastName VARCHAR(255)
);

INSERT INTO favBooks(title, publishDate, authorFirstName, authorLastName)
VALUES('Naruto, Vol 1: Uzumaki Naruto', 'July 9, 2003', 'Masashi', 'Kishimoto'),
('Naruto, Vol 2: The Worse Client', 'November 19, 2003', 'Masashi', 'Kishimoto'),
('Naruto, Vol 3: Dreams', 'March 4, 2004', 'Masashi', 'Kishimoto'),
('Naruto, Vol 4: Hero\'s Bridge,' 'August 3, 2004', 'Masashi', 'Kishimoto'),
('Naruto, Vol 5: The Challengers', 'December 7, 2004', 'Masashi', 'Kishimoto');


INSERT INTO favBooks(title, publishDate, authorFirstName, authorLastName)
VALUES ('One Piece, Vol 1: Romance Dawn', 'June 1, 2003', 'Eiichiro', 'Oda'),
('Bleach, Vol 1: The Death and the Strawberry', 'May 19, 2004', 'Tite', 'Kubo');


DELETE FROM favBooks ORDER BY publishDate ASC LIMIT 1;
SELECT COUNT(1) FROM favBooks;


SELECT * FROM favBooks;


SELECT COUNT(*) FROM favBooks;
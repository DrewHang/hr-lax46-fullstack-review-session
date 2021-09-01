/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS hrlax46students;

CREATE DATABASE hrlax46students;

USE hrlax46students;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Andrew");
INSERT INTO students (id, name) VALUES (2, "Andy");
INSERT INTO students (id, name) VALUES (3, "Bradley");
INSERT INTO students (id, name) VALUES (4, "Cassandra");
INSERT INTO students (id, name) VALUES (5, "Jeff");
INSERT INTO students (id, name) VALUES (6, "Daniel");
INSERT INTO students (id, name) VALUES (7, "Gabrielle");
INSERT INTO students (id, name) VALUES (8, "Walter");
INSERT INTO students (id, name) VALUES (9, "Lawrence");
INSERT INTO students (id, name) VALUES (10, "Nicholas");
INSERT INTO students (id, name) VALUES (11, "Pritam");
INSERT INTO students (id, name) VALUES (12, "Richard");
INSERT INTO students (id, name) VALUES (13, "William");

INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-U029M89M09G-250a4804eb47-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://ca.slack-edge.com/T2SV1LBC6-U0296GHHSEB-c93660cbaa56-512");
INSERT INTO images (id, imgurl) VALUES (3, "https://ca.slack-edge.com/T2SV1LBC6-U029EFN245C-e3afbbcf261f-512");
INSERT INTO images (id, imgurl) VALUES (4, "https://ca.slack-edge.com/T2SV1LBC6-U02406C06JK-4c4073e919a8-512");
INSERT INTO images (id, imgurl) VALUES (5, "https://ca.slack-edge.com/T2SV1LBC6-U029TDXCQJY-3f0712f1f8bf-512");
INSERT INTO images (id, imgurl) VALUES (6, "https://ca.slack-edge.com/T2SV1LBC6-U029ZSXSEGZ-cf6ff5da705d-512");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-U029MDZ774K-0283cd14c13d-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://ca.slack-edge.com/T2SV1LBC6-U029M89441Y-8e98330bf99e-512");
INSERT INTO images (id, imgurl) VALUES (9, "https://ca.slack-edge.com/T2SV1LBC6-U02AATAGCPJ-ed8792551431-512");
INSERT INTO images (id, imgurl) VALUES (10, "https://ca.slack-edge.com/T2SV1LBC6-U029EFNL0AJ-27124a075328-512");
INSERT INTO images (id, imgurl) VALUES (11, "https://ca.slack-edge.com/T2SV1LBC6-U029MDZPP6F-8dd6135683a1-512");
INSERT INTO images (id, imgurl) VALUES (12, "https://ca.slack-edge.com/T2SV1LBC6-U029EFMRPSA-ea53c3fbedbe-512");
INSERT INTO images (id, imgurl) VALUES (13, "https://ca.slack-edge.com/T2SV1LBC6-U029J78GEFP-07756b559ac1-512");

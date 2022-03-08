--
-- File generated with SQLiteStudio v3.3.3 on mar mar 8 21:44:50 2022
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: exam
DROP TABLE IF EXISTS exam;
CREATE TABLE exam (code VARCHAR (10) NOT NULL UNIQUE, name VARCHAR (100) NOT NULL, cfu INTEGER NOT NULL, date DATE, score NUMERIC, PRIMARY KEY (code));
INSERT INTO exam (code, name, cfu, date, score) VALUES ('02LSEOV', 'Computer architectures', 10, '2022-01-01', 18);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01NYHOV', 'System and device programming', 10, '2022-02-01', 21);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01TXYOV', 'Web Applications I', 6, '2022-03-01', 24);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('04GSPOV', 'Software engineering', 8, '2021-01-01', 27);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01TYMOV', 'Information systems security', 6, '2021-02-01', 30);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01OTWOV', 'Computer network technologies and services', 6, '2021-03-01', 18);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01SQJOV', 'Data Science and Database Technology', 8, '2021-04-01', 21);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01TXSOV', 'Web Applications II', 6, '2021-05-01', 24);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01PFPOV', 'Mobile application development', 6, '2020-06-01', 27);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01TXZOV', 'Distributed systems programming', 6, '2020-09-01', 30);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('02JSKOV', 'Human Computer Interaction', 6, '2020-10-01', 28);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01QYDOV', 'Big data: architectures and data analytics', 6, '2020-11-01', 25);
INSERT INTO exam (code, name, cfu, date, score) VALUES ('01TYDOV', 'Cloud Computing', 6, '2021-07-15', 24);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;

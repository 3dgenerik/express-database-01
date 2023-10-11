GENERAL COMMANDS:

#connect to database
\c <my_database>

#close db live
\q

#list all tables
\dt

#ADMIN USER
psql -U postgres

#list all users
SELECT rolname FROM pg_roles;

#NOVI USERNAME AND PASSWORD
CREATE ROLE <novi_user> WITH LOGIN PASSWORD 'novasifra';
GRANT ALL PRIVILEGES ON SCHEMA public TO novikorisnik;

#PONOVO STARTOVATI SERVER
pg_ctl start -D "C:\Program Files\PostgreSQL\16\data"

#LOGOVATI SE KAO NOVI USER I KONEKTOVATI SE SA BAZOM
psql -U novi_user -d database_name


CREATE NEW USER WWITH ALL PRIVILEGES
CREATE USER full_stack_user WITH PASSWORD 'password123';
CREATE DATABASE full_stack_dev;
\c full_stack_dev
GRANT ALL PRIVILEGES ON DATABASE full_stack_dev TO full_stack_user;


WORKING WITH TABLES IN DATABASE:

#create database
CREATE DATABASE my_database;

#create table
CREATE TABLE plants (id SERIAL PRIMARY KEY, name VARCHAR(100), description TEXT, individuals INTEGER, sighting_date DATE);
CREATE TABLE plants (id SERIAL PRIMARY KEY, region_id REFERENCES regions(id), user_id REFERENCES users(id), salary REAL CHECK(salary > 0));

#izbrisati tabelu 
DROP TABLE table_name

#promeniti naziv kolone
ALTER TABLE plants RENAME COLUMN dexcription TO description;


#dodati kolonu
ALTER TABLE my_table ADD COLUMN new_column integer;

CRUD:

#CREATE
INSERT INTO plants (name, description, individuals, sighting_date) VALUES ('Dandelion', 'Fuzzy yellow flowers', 5, '2021-01-01')

#READ ALL
SELECT * FROM table_name;
SELECT name FROM table_name;
SELECT name, description FROM table_name;
SELECT * FROM table_name WHERE name = 'name';
SELECT * FROM table_name WHERE id > 3;
SELECT * FROM table_name WHERE name LIKE '%A%;

#UPDATE
UPDATE table_name SET individuals = 8 WHERE id = 1;
UPDATE table_name SET individuals = 8 WHERE name LIKE '%Q%';

#DELETE
DELETE FROM table_name WHERE id=1;
DELETE FROM table_name WHERE name LIKE '%Q%';

WHERE (filter)

LIMITS
SELECT * FROM plants LIMIT 5;

BETWEEN
SELECT * FROM plants WHERE sighting_date BETWEEN '2021-01-01' AND '2021-01-12';

LIKE
SELECT name, description FROM plants WHERE name LIKE '%lion%';

IS NULL or IS NOT NULL
SELECT * FROM plants WHERE sighting_date IS NULL;
SELECT name, description FROM plants WHERE individuals IS NOT NULL;

FOREIGN KEY (povezati foreign key jedne tabele sa primary key druge tabele)
ALTER TABLE plants ADD FOREIGN KEY (region_id) REFERENCES regions(id);

COUNT(*)
SELECT COUNT(*) FROM plants WHERE sighting BETWEEN '2021-01-01' AND '2024-01-01';
SELECT count(*) FROM plants;
// print 3









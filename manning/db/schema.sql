DROP DATABASE if exists client_db;
CREATE DATABASE client_db;
USE client_db;
CREATE TABLE users (
    id AUTOINCREMENT PRIMARY KEY,
    email varchar(255) NOT NULL,
    user_name varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL,
);

CREATE TABLE gallery (
    id AUTOINCREMENT PRIMARY KEY,
    img_url varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM users;
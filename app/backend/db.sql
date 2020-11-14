CREATE DATABASE BusinessCard;
USE BusinessCard;
CREATE TABLE Card (
    id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(50),
    youtube VARCHAR(2000),
    instagram VARCHAR(2000),
    twitter VARCHAR(2000),
    facebook VARCHAR(2000),
    description TEXT
);
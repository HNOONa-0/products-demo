CREATE or REPLACE DATABASE products;
-- make sure to use test for the rest of the code
use products;
-- id is auto incremented, with each new entry. making sure that id is unique.
-- it's also the primary key
-- not nul so the field cant be empty
CREATE TABLE products (
    sku VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) not null,
    price DECIMAL(10, 2) not null
);
CREATE or REPLACE DATABASE products;
-- make sure to use test for the rest of the code
use products;
-- id is auto incremented, with each new entry. making sure that id is unique.
-- it's also the primary key
-- not nul so the field cant be empty
CREATE TABLE products (
    sku VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) not null,
    price DECIMAL(50, 2) not null,
    type VARCHAR(50) not null
);

CREATE TABLE books (
    sku VARCHAR(50) PRIMARY KEY,
    weight DECIMAL(50, 2) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

CREATE TABLE furnitures (
    sku VARCHAR(50) PRIMARY KEY,
    height DECIMAL(50, 2) not null,
    width DECIMAL(50, 2) not null,
    length DECIMAL(50, 2) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

CREATE TABLE dvds (
    sku VARCHAR(50) PRIMARY KEY,
    size DECIMAL(50, 2) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

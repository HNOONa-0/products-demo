use 4415656_products;

CREATE OR REPLACE TABLE products (
    sku VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) not null,
    price INT(50) not null,
    type VARCHAR(50) not null
);

CREATE OR REPLACE TABLE books (
    sku VARCHAR(50) PRIMARY KEY,
    weight INT(50) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

CREATE OR REPLACE TABLE furnitures (
    sku VARCHAR(50) PRIMARY KEY,
    height INT(50) not null,
    width INT(50) not null,
    length INT(50) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

CREATE OR REPLACE TABLE dvds (
    sku VARCHAR(50) PRIMARY KEY,
    size INT(50) not null,
    FOREIGN KEY (sku) REFERENCES products(sku)
);

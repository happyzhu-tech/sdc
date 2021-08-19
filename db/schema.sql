-- SELECT 'CREATE DATABASE overview'
-- WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'overview')\gexec

-- \c overview;

-- DROP TABLE product CASCADE;
-- DROP TABLE IF EXISTS product;

-- CREATE TABLE IF NOT EXISTS product (
--   id INTEGER NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   slogan VARCHAR(500),
--   description VARCHAR(500),
--   category VARCHAR(25) NOT NULL,
--   default_price VARCHAR(25) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- \copy product FROM '/Users/jiaqianzhu/Desktop/SDC_database/product.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX product_name ON product(name);
-- CREATE INDEX product_slogan ON product(slogan);
-- CREATE INDEX product_description ON product(description);
-- CREATE INDEX product_category ON product(category);
-- CREATE INDEX product_default_price ON product(default_price);

-- DROP TABLE IF EXISTS related;

-- CREATE TABLE IF NOT EXISTS related (
--   id INTEGER NOT NULL,
--   productId INTEGER NOT NULL,
--   related_productId INTEGER NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES product (id)
-- );

-- \copy related FROM '/Users/jiaqianzhu/Desktop/SDC_database/related.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX related_productId ON related(productId);
-- CREATE INDEX related_related_productId ON related(related_productId);

-- DROP TABLE IF EXISTS features;
-- CREATE TABLE IF NOT EXISTS features (
--   id INTEGER NOT NULL,
--   productId INTEGER NOT NULL,
--   feature VARCHAR(25),
--   value VARCHAR(50),
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES product (id)
-- );

-- \copy features FROM '/Users/jiaqianzhu/Desktop/SDC_database/features.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX features_productId ON features(productId);
-- CREATE INDEX features_feature ON features(feature);
-- CREATE INDEX features_value ON features(value);

-- DROP TABLE styles CASCADE;
-- DROP TABLE IF EXISTS styles;

-- CREATE TABLE IF NOT EXISTS styles (
--   id INTEGER NOT NULL,
--   productId INTEGER NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   sale_price VARCHAR(25),
--   original_price VARCHAR(25) NOT NULL,
--   default_style INTEGER NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES product (id)
-- );

-- \copy styles FROM '/Users/jiaqianzhu/Desktop/SDC_database/styles.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX styles_productId ON styles(productId);
-- CREATE INDEX styles_name ON styles(name);
-- CREATE INDEX styles_sale_price ON styles(sale_price);
-- CREATE INDEX styles_original_price ON styles(original_price);
-- CREATE INDEX styles_default_style ON styles(default_style);

-- DROP TABLE IF EXISTS photos;

-- CREATE TABLE IF NOT EXISTS photos (
--   id INTEGER NOT NULL,
--   styleId INTEGER NOT NULL,
--   url TEXT NOT NULL,
--   thumbnail_url TEXT NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (styleId) REFERENCES styles (id)
-- );

-- \copy photos FROM '/Users/jiaqianzhu/Desktop/SDC_database/photos.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX photos_styleId ON photos(styleId);
-- CREATE INDEX photos_url ON photos(url);
-- CREATE INDEX photos_thumbnail_url ON photos(thumbnail_url);

-- DROP TABLE skus CASCADE;
-- DROP TABLE IF EXISTS skus;

-- CREATE TABLE IF NOT EXISTS skus (
--   id INTEGER NOT NULL,
--   styleId INTEGER NOT NULL,
--   size VARCHAR(10) NOT NULL,
--   quantity INTEGER NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (styleId) REFERENCES styles (id)
-- );

-- \copy skus FROM '/Users/jiaqianzhu/Desktop/SDC_database/skus.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX skus_styleId ON skus(styleId);
-- CREATE INDEX skus_size ON skus(size);
-- CREATE INDEX skus_quantity ON skus(quantity);

-- DROP TABLE IF EXISTS cart;

-- CREATE TABLE cart (
--   id SERIAL,
--   skuId INTEGER NOT NULL,
--   count INTEGER NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (skuId) REFERENCES skus (id)
-- );

-- DROP MATERIALIZED VIEW IF EXISTS product_styles_photos;

-- CREATE MATERIALIZED VIEW product_styles_photos AS
-- SELECT product.id as product_id, styles.id as style_id, styles.name, styles.sale_price, styles.original_price, styles.default_style, photos.url, photos.thumbnail_url
-- FROM product
-- INNER JOIN styles
-- ON styles.productId = product.id
-- INNER JOIN photos
-- ON styles.id = photos.styleId
-- ORDER BY product.id, styles.id, photos.id;

/* Create database and tables by running:
  \i schema.sql
  within the postgres database
*/
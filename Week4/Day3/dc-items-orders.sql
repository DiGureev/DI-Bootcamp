-- create table orders(
-- id serial primary key,
-- 	customer_name varchar
-- );

-- create table items (
-- item_id serial primary key,
-- 	item varchar(150) unique,
-- 	price int,
-- 	order_id int,
-- 	foreign key(order_id) references orders(id)
-- )

-- insert into orders(customer_name)
-- values
-- ('Simon'),
-- ('Lily'),
-- ('Lea'),
-- ('Bob')
-- ;

-- insert into items(item, price, order_id)
-- values
-- ('table', 120, (select id from orders where customer_name = 'Lily'))

-- insert into items(item, price, order_id)
-- values
-- ('Shoes', 100, (select id from orders where customer_name = 'Lily')),
-- ('T-short', 80, (select id from orders where customer_name = 'Lily')),
-- ('Notebook', 60, (select id from orders where customer_name = 'Bob')),
-- ('Pencil', 20, (select id from orders where customer_name = 'Bob')),
-- ('iPhone', 3000, (select id from orders where customer_name = 'Bob')),
-- ('iPhone case', 50, (select id from orders where customer_name = 'Simon')),
-- ('Copybook', 10, (select id from orders where customer_name = 'Lea'))

-- select sum(price) from items where order_id = (select id from orders where customer_name = 'Lily')

CREATE or REPLACE function get_sum(name varchar) RETURNS int AS $price$
BEGIN
 RETURN(SELECT SUM(price) FROM items WHERE order_id = (SELECT ID FROM orders WHERE orders.customer_name = name))
END;

$price$ LANGUAGE sql;


-- ERROR:  syntax error at or near "RETURN"
-- LINE 40:  RETURN(SELECT SUM(price) FROM items WHERE order_id = (SELEC...
--           ^ 

-- SQL state: 42601
-- Character: 1242
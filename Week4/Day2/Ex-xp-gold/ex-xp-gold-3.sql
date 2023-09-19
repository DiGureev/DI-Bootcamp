-- create table purchases(
-- id serial primary key,
-- 	customer_id integer,
-- 	foreign key(customer_id) references customers(id),
-- 	item_id integer,
-- 	foreign key(item_id) references items(id),
-- 	quantity_purchased integer
-- )
-- ;

-- insert into purchases (customer_id, item_id, quantity_purchased)
-- values
-- (
-- 	(select id from customers where id = 5),
-- 	(select id from items where id = 2),
-- 	10
-- )
-- ;

-- insert into purchases (customer_id, item_id, quantity_purchased)
-- values
-- (
-- 	(select id from customers where id = 1),
-- 	(select id from items where id = 1),
-- 	2
-- )
-- ;

-- delete from purchases where id = 3;

-- insert into purchases (customer_id, item_id, quantity_purchased)
-- values
-- (
-- 	(select id from customers where id = 3),
-- 	(select id from items where id = 3),
-- 	1
-- )
-- ;

-- select * from purchases 
-- inner join customers
-- on purchases.customer_id = customers.id;

-- select * from purchases where customer_id = 5;

-- select * from purchases 
-- left join items
-- on purchases.item_id = items.id
-- where items.item in ('Large desk', 'Small desk');

-- select customers.first_name, customers.last_name, items.item from customers 
-- inner join purchases
-- on purchases.customer_id = customers.id
-- inner join items
-- on purchases.item_id = items.id;

-- insert into purchases (customer_id, item_id, quantity_purchased)
-- values
-- (
-- 	(select id from customers where id = 3),
-- 	(select id from items where id = null ),
-- 	1
-- )
-- ;

select * from purchases;
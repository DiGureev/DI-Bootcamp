-- select name from language;

-- select film.title, film.description, language.name from film
-- inner join language
-- on film.language_id = language.language_id;

-- create table new_film (
-- id serial primary key,
-- 	name varchar (100)
-- );

-- insert into new_film (name)
-- values
-- ('Harry Potter');

-- insert into new_film (name)
-- values
-- ('Harry Potter');

-- insert into new_film (name)
-- values
-- ('Love in Paris');

-- create table customer_review (
-- review_id serial primary key,
-- 	film_id integer,
-- 	language_id integer,
-- 	foreign key (film_id) references new_film(id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	foreign key (language_id) references language(language_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	title varchar(100),
-- 	score smallint check (score < 11) not null,
-- 	review_text text,
-- 	last_update date
-- );

-- insert into customer_review(film_id, language_id, title, score, review_text, last_update)
-- values
-- (
-- 	(select id from new_film where name = 'Harry Potter'),
-- 	(select language_id from language where language_id = 1),
-- 	'Some good title',
-- 	8,
-- 	'Some good review',
-- 	'2023-09-01'
-- );

-- insert into customer_review(film_id, language_id, title, score, review_text, last_update)
-- values
-- (
-- 	(select id from new_film where name = 'Love in Paris'),
-- 	(select language_id from language where language_id = 5),
-- 	'Some good title',
-- 	8,
-- 	'Some good review',
-- 	'2023-03-07'
-- );

-- delete from new_film where name = 'Love in Paris';

-- update film 
-- set language_id = 5
-- where film_id in (1,2,3,4);

-- drop table customer_review;

-- select count(*) from rental where return_date is null;

-- select rental.return_date, payment.amount from rental 
-- full join payment
-- on rental.customer_id = payment.customer_id
-- where rental.return_date is null
-- order by payment.amount desc
-- limit 30;


-- select film.title, film.fulltext from film
-- inner join film_actor
-- on film.film_id = film_actor.film_id
-- inner join actor
-- on film_actor.actor_id = actor.actor_id
-- where actor.first_name = 'Penelope' and actor.last_name = 'Monroe'
-- and film.fulltext::text  like '%sumo%';

-- select film.title from film
-- inner join film_actor
-- on film.film_id = film_actor.film_id
-- where film.length < 60 and film.rating = 'R'
-- and film.fulltext::text  like '%documentari%';


-- select film.title, customer.customer_id, customer.first_name, customer.last_name, payment.amount, rental.return_date from customer
-- full join payment
-- on payment.customer_id = customer.customer_id
-- full join rental
-- on customer.customer_id = rental.customer_id
-- full join inventory
-- on inventory.inventory_id = rental.inventory_id
-- full join film
-- on inventory.film_id = film.film_id
-- where customer.first_name ='Matthew' and customer.last_name ='Mahan'
-- and payment.amount > 4.0
-- and rental.return_date between '2005-07-28' and '2005-08-01'
-- ;

select film.title, film.description, film.replacement_cost from customer
full join payment
on payment.customer_id = customer.customer_id
full join rental
on customer.customer_id = rental.customer_id
full join inventory
on inventory.inventory_id = rental.inventory_id
full join film
on inventory.film_id = film.film_id
where customer.first_name ='Matthew' and customer.last_name ='Mahan'
and (film.description ilike '%boat%' or film.title ilike '%boat%')

group by film.title, film.description, film.replacement_cost
order by film.replacement_cost desc
limit 1;


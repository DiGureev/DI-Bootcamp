-- select * from customer;
-- select (first_name, last_name) as full_name from customer;
-- select distinct create_date from customer;
-- select * from customer order by first_name desc;
-- select film_id, title, description, release_year, rental_rate from film order by rental_rate;

-- select customer.first_name, customer.last_name, address.address from customer
-- right join address
-- on customer.customer_id = address.address_id
-- where district = 'Texas';

-- select * from film where film_id in (15,150);

-- select film_id, title, description, length, rental_rate from film where title='Harry Potter';

-- select film_id, title, description, length, rental_rate from film where title like 'Ha%';

-- select title, replacement_cost from film order by replacement_cost limit 10;

-- select title, replacement_cost from film order by replacement_cost offset 10 FETCH NEXT 10 ROWS ONLY;

-- select customer.first_name, customer.last_name, payment.amount, payment.payment_date from customer
-- right join payment
-- on customer.customer_id = payment.customer_id;

-- select film.title, inventory.film_id from film
-- full join inventory
-- on film.film_id = inventory.film_id
-- where inventory.film_id is null
-- order by film.film_id;

-- select city.city, country.country from city
-- inner join country
-- on city.country_id = country.country_id;

-- select customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id from customer
-- right join payment
-- on customer.customer_id = payment.customer_id
-- order by staff_id;

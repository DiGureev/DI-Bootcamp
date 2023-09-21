-- select f.title, r.return_date, c.first_name, c.last_name
-- from (film f JOIN inventory i ON f.film_id = i.film_id)
-- inner join rental r
-- on r.inventory_id = i.inventory_id
-- inner join customer c
-- on r.customer_id = c.customer_id
-- where r.return_date is null
-- group by f.title, r.return_date, c.first_name, c.last_name;

-- select f.title from 
-- (film f join film_actor fa on f.film_id = fa.film_id)
-- join actor a
-- on a.actor_id = fa.actor_id
-- where fulltext::text ilike '%action%'
-- and a.first_name = 'Joe' and a.last_name = 'Swank';

-- select s.store_id, c.city, co.country
-- from (store s join address a on s.address_id = a.address_id)
-- join city c
-- on a.city_id = c.city_id
-- join country co
-- on c.country_id = co.country_id;

-- select i.store_id, sum(f.length) from (inventory i inner join film f on i.film_id = f.film_id)
-- inner join rental r
-- on i.inventory_id = r.inventory_id
-- group by i.store_id;

select i.store_id, sum(f.length)/60/24 from (inventory i inner join film f on i.film_id = f.film_id)
inner join rental r
on i.inventory_id = r.inventory_id
where r.return_date is not null
group by i.store_id;


-- select cu.first_name, cu.last_name, c.city, co.country
-- from (customer cu join address a on cu.address_id = a.address_id)
-- join city c
-- on a.city_id = c.city_id
-- join country co
-- on c.country_id = co.country_id
-- where country in ('Canada', 'Australia');


-- select sum(film.length)/60/24 from (film join film_category on film.film_id = film_category.film_id)
-- join category
-- on category.category_id = film_category.category_id
-- where category.name != 'Horror'
-- and (film.title not ilike '%beast%monster%ghost%dead%zombie%undead%' or film.description not ilike '%beast%monster%ghost%dead%zombie%undead%')
-- ;



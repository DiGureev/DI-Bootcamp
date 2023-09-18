-- create table house_expenses(
-- 	id serial primary key,
-- 	date_paid date,
-- 	electricity float,
-- 	water float,
-- 	paid_by varchar(50)
-- );

-- insert into house_expenses (date_paid, electricity, water, paid_by)
-- values
-- ('2023-01-01', 55.5, 66.6, 'Adam'),
-- ('2023-01-02', 55.5, 66.6, 'Tom'),
-- ('2023-01-03', 55.5, 66.6, 'Adam'),
-- ('2023-01-04', 55.5, 66.6, 'Tom'),
-- ('2023-01-05', 55.5, 66.6, 'Adam')
-- ;

-- select * from house_expenses;

-- select * from house_expenses where id in (1,2);
-- select electricity from house_expenses;
-- select id,electricity, water from house_expenses where id > 4;

-- select max(water) as max_water from house_expenses;
-- select min(electricity) from house_expenses;
-- select avg(electricity) from house_expenses where paid_by != 'Tom';

-- select paid_by, count(electricity) as cou, max(electricity) as max from house_expenses
-- group by paid_by;

-- select paid_by, sum(electricity + water) as total from house_expenses
-- group by paid_by;

-- select paid_by, max(electricity + water) as max_amount from house_expenses
-- group by paid_by;

-- update house_expenses set electricity = 33, water = 24 where paid_by = 'Tom';

-- update house_expenses set electricity = 0 where paid_by = 'Adam';

-- select * from house_expenses order by id;

-- delete from house_expenses where water < 30;

-- delete from house_expenses where date_paid < '2023-01-03'

-- select * from house_expenses order by id;
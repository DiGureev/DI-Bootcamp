-- create table students(
-- id serial primary key,
-- 	first_name varchar,
-- 	second_name varchar,
-- 	birth_date date
-- )
-- ;

-- alter table students rename column second_name to last_name;

-- insert into students (first_name, last_name, birth_date)
-- values
-- ('Marc','Benichou', '1991-11-02'),
-- ('Yoan','Cohen', '2010-12-03'),
-- ('Lea','Benichou', '1987-07-27'),
-- ('Amelia ','Dux', '1996-04-07'),
-- ('David ','Grez', '2003-06-14'),
-- ('Omer ','Simpson', '1980-10-03')
-- ;

-- insert into students (first_name, last_name, birth_date)
-- values
-- ('Diana','Gureev', '1991-12-27');

-- select * from students;
-- select * from students where last_name='Benichou' and first_name='Marc';
-- select * from students where last_name='Benichou' or first_name='Marc';
-- select * from students where first_name like '%a%';
-- select * from students where first_name like 'A%';
-- select * from students where first_name like '%a';
-- select * from students where first_name like '_%a%';
-- select * from students where id in (1,3);


-- Part 1

-- create table customer (
-- id serial primary key,
-- 	first_name varchar,
-- 	last_name varchar NOT NULL
-- );

-- create table customer_profile (
-- id serial primary key,
-- 	isLoggedIn boolean DEFAULT false,
-- 	customer_id integer,
	
-- 	foreign key(customer_id) references customer(id)
-- );

-- insert into customer(first_name, last_name)
-- values
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- insert into customer_profile(isLoggedIn, customer_id)
-- values
-- (True, (select id from customer where name = 'John' )),
-- (False, (select id from customer where name = 'Jerome' ))
-- ;

-- select customer.first_name from customer
-- inner join customer_profile
-- on customer.id = customer_profile.customer_id 
-- where customer_profile.isLoggedIn = True

-- select customer.first_name, customer_profile.isLoggedIn from customer
-- full join customer_profile
-- on customer.id = customer_profile.customer_id 

-- select count(customer.first_name) from customer
-- full join customer_profile
-- on customer.id = customer_profile.customer_id 
-- where customer_profile.isLoggedIn = False


-- Part 2
-- create table Book(
-- book_id SERIAL PRIMARY KEY,
--     title varchar NOT NULL, 
--     author varchar NOT NULL
-- );

-- insert into Book(title, author)
-- values
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- create table Student (
-- student_id SERIAL PRIMARY KEY,
--     name varchar NOT NULL UNIQUE, 
--     age integer (check age < 15)
-- );

-- insert into Student (name, age)
-- values
-- ('John', '12'),
-- ('Lera', '11'),
-- ('Patrick', '10'),
-- ('Bob', '14');


-- create table library(
-- book_fk_id int,
-- 	student_fk_id int,
-- 	borrowed_date date,
-- 	foreign key(book_fk_id) references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	foreign key(student_fk_id) references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE

-- );

-- insert into library(book_fk_id, student_fk_id, borrowed_date)
-- values
-- (
-- 	(select book_id from book where title = 'Alice In Wonderland'),
-- 	(select student_id from student where name = 'John'),
-- 	'2022-02-15'
-- ),
-- (
-- 	(select book_id from book where title = 'To kill a mockingbird'),
-- 	(select student_id from student where name = 'Bob'),
-- 	'2021-03-03'
-- ),
-- (
-- 	(select book_id from book where title = 'Alice In Wonderland'),
-- 	(select student_id from student where name = 'Lera'),
-- 	'2021-05-23'
-- ),
-- (
-- 	(select book_id from book where title = 'Harry Potter'),
-- 	(select student_id from student where name = 'Bob'),
-- 	'2021-08-12'
-- );

-- select * from library;

-- select student.name, book.title from student
-- inner join library
-- on student.student_id = library.student_fk_id
-- inner join book
-- on book.book_id = library.book_fk_id;

-- select avg(student.age) from student
-- inner join library
-- on student.student_id = library.student_fk_id
-- inner join book
-- on book.book_id = library.book_fk_id
-- where book.title = 'Alice In Wonderland';

delete from student where name = 'John';
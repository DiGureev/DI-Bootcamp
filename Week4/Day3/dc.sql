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
-- select * from students
-- update students
-- set birth_date ='1998-11-02' where last_name = 'Benichou';

-- update students
-- set last_name = 'Guez' where last_name = 'Grez';

-- delete from students where first_name='Lea' and last_name = 'Benichou';

-- select count(*) from students;

-- select count(birth_date) from students where birth_date > '2000-01-01';

-- alter table students
-- add math_grade integer;

-- update students
-- set math_grade= 80 where id = 1;

-- update students
-- set math_grade = 90 where id in (2,4);

-- update students
-- set math_grade = 40 where id = 6;

-- select count(*) from students where math_grade > 83;

-- insert into students
-- values(11, 'Omer', 'Simpson', null, 70);

-- update students
-- set math_grade = 40 where id in (3,5,7);

-- select count(math_grade) from students group by last_name;

-- select math_grade as total_grade from students;

-- select sum(math_grade) from students;
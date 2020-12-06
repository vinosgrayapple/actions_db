INSERT INTO users(fname,lname,email,phone) VALUES ('Наталья', 'Богоявленскя','n.bogoyavlenskaya@artwinery.com.ua','+380664935171'); 

UPDATE users
SET phone = '+380664935171'
WHERE lname='Богоявленскя';

SELECT * from users;
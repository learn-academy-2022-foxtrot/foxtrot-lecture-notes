# DATABASES AND POSTGRES INTRO NOTES

class Student
  def initialize(name, cohort)
    @name = name
    @cohort = cohort
  end
end

Student.new('Kyle', 'Foxtrot')


# DATABASES
- a way of storing data in organized way
- postgresql  - relational database. Rows and columns


# Postgresql

- talks to db
- it is open-source
- object-relational database managment system
- takes an OOP approach to programming
 - `psql` to enter console
 - \l  to list dbs


SELECT name, continent
FROM country

SELECT name, continent, population
FROM country
LIMIT 10

*** WHERE is a comparison operator ***
SELECT name, continent, population
FROM country
WHERE continent = 'North America'

SELECT name, continent, population
FROM country
WHERE continent != 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America'

*** LIKE used in WHERE clause to search for specified pattern in a column ***
*** Using % called wildcard will be used in conjunction with LIKE ***
Using LIKE and wildcard to get back all the Americas:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'

10 most recently independent countries:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10 

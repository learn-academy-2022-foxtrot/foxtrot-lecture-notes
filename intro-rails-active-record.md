# Intro to Ruby on Rails

MVC - Model View Controller

View - React, HTML, CSS
Model - Database layer
Controllers - Switchboard that connects the view and model together

Together - MVC creates a full stack application

Rails is open source and is a server side web application framework

Convention over configuration

"Rails magic" - Rails does some of the heavy lifting

To build a rails app:
`$ rails new app_name -d postgresql -T`

Create a database `$ rails db:create`

# Rails Tour
- Gemfile
- MVC
  - app/controllers
  - app/models
  - app/views
- config/routes
- db: stands for database
- README


To run the server: `$ rails server` or `$ rails s`

# Active Record
- ORM: Object Relational Mapping (translates Ruby and SQL)

During development - Database lives on your machine
Rails app - collection of folders and files that can be accessed on GitHub
During production - Database will exist on a separate server


# Model
Model class defines the structure of the database

- Generate command
   - creates files and folder in a rails app the rails way
   - Utilizes Active Record data types: https://dev.to/asyraf/rails-activerecord-data-types-32ip
   

- Class name has to be in PascalCase and singular

`$ rails generate model Schedule day:string date:date event:string`

- To create a table in our database we need to migrate our table

`$ rails db:migrate`

# Schema
- READ ONLY FILE!!
- Great reference to check database is setup correctly


# Interacting with Data in Rails Console

`$ rails c`


```ruby
> Schedule.all 
# => [] Shows all instances in database


# Create
> Schedule.create(day: 'Thursday', date: '2022-10-06', event: 'Office hours')
> Schedule.create(day: 'Thursday', date: '2022-10-06', event: 'White boarding practice')
> Schedule.create(day: 'Friday', date: '2022-10-07', event: 'Week 5 assessment')

> Schedule.all 
```

# CRUD
Create: create method passing key value pairs
Read:
  - .all returns all instances in the database
  - .first gives the first instance in the database
  - .last gives the last instance
  - .find(1) return the instance based on primary key
  - .where(event: 'Office hours') will find based on key value pair, returns a set of all instances that matches it

```ruby
> Schedule.where(day: 'Thursday')
```

Update:
- Store instance to be updated in variable

```ruby
> assessments = Schedule.last
> assessments.update(event: 'Super awesome assessment')
> assessments
# show updated event
```

  - The variable is only available until we exit out of the console.  Any modifications to the data itself though will persist.

  ** The syllabus has a different approach to update that will also work! ** 
```ruby
> office_hours = Schedule.find 1
> office_hours.event = 'Super awesome office hours!'
> office_hours.save
> office_hours
```

Delete:
- Store instance to be deleted in variable

```ruby
> white_boarding = Schedule.find(2)
> white_boarding.destroy
> Schedule.all
# shows instance no longer is there
```
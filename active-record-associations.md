## RAILS ASSOCIATIONS

# Core Concepts
- Relationships between tables
- has_many belongs_to
- Every table has a primate key - id:numbers
- Foreign key - reference to another table's primary key

# Setup
- rails new associations -d postgresql -T
- rails db:create

# Databases
- rails g model Cohort name:string year:string
- rails g model Student name:string cohort_id:integer


# Model Classes
- app/models/cohort.rb
    class Cohort < ApplicationRecord
        has_many :students
    end

- app/models/student.rb
class Student < ApplicationRecord
    belongs_to :cohort
end


 Cohort.create(name:"Foxtrot", year:"2022")
 foxtrot = Cohort.find(1)
 foxtrot.students.create(name:"Nico")
# Ruby Classes and Objects 10/3/2022

# Classes and methods can be predefined by the langauge

# Keyword class and keyword end define the scope of our class
# PascalCase - the naming convention for classes, class names are typically singular

# class Hulu
# end

# Classes will not do anything on their own
# Classes must be instantiated

# p Hulu.new
#<Hulu:0x000000015b927ed8>
# Unique instance of my class


# Need to be able to define data and to update that data: getter and setters
# Setter method that takes in information and assigns it to a variable that belongs to the class, in JavaScript - this, in Ruby - @ instance variable

# class Hulu
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end
#
# severance = Hulu.new
# p severance.set_show_data
# Error: wrong number of arguments (given 0, expected 1)
# p severance.set_show_data('Severance')
#<Hulu:0x000000012f05f1d8 @title="Severance">
# p severance
# p severance.set_show_data('Severance', '40min')
# p severance
#<Hulu:0x0000000152852cc8 @title="Severance", @run_time="40min">


# Getter methods:
# class Hulu
#
#   def set_show_data(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#
#   def get_title
#     @title
#   end
#
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
#
# end

# severance = Hulu.new
# severance.set_show_data('Severance', '40min')
# p severance.title <-- undefined method `title'
# p severance.get_title <--"Severance"
# p severance.get_show_data
# => "The show Severance is 40min long."
# p severance


# Initialize is a method that is called by .new and will act as a setter method to instatiate data
# class Hulu
#   # refactor our setter to be initialize
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#
#   def get_title
#     @title
#   end
#
#   def get_show_data
#     "The show #{@title} is #{@run_time} long."
#   end
#
# end
# # severance = Hulu.new
# # => (given 0, expected 2)
# severance = Hulu.new('Severance', '40min')
# p severance


# Setter methods that perform logic
# class Hulu
#   # setter method:
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watch = false
#   end
#
#   # getter method:
#   def get_title
#     @title
#   end
#
#   # getter method:
#   def get_show_data
#     if @watch
#       "You have watched the show #{@title} is #{@run_time} long."
#     else
#       "You have not watched the show #{@title} is #{@run_time} long."
#     end
#   end
#
#   # setter method:
#   def been_watched
#     @watch = true
#   end
# end
#
# severance = Hulu.new('Severance', '40min')
# #<Hulu:0x000000013e0e5968 @title="Severance", @run_time="40min", @watch=false>
# p severance.get_show_data
# severance.been_watched
# p severance.get_show_data


# Ruby helper methods - methods that create more methods
# attr_accessor - takes a symbol of an instance variable, when you see a symbol think: "the thing called..."

class Hulu
  # attr_accessor creates a getter and a setter method for the instance variables it gets passed
  attr_accessor :title, :run_time, :watch
  # setter method:
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watch = false
  end

  # getter method:
  def get_show_data
    if @watch
      "You have watched the show #{@title} is #{@run_time} long."
    else
      "You have not watched the show #{@title} is #{@run_time} long."
    end
  end

end

severance = Hulu.new('Severance', '40min')
#<Hulu:0x000000013e0e5968 @title="Severance", @run_time="40min", @watch=false>
p severance.get_show_data
severance.watch = true
p severance.get_show_data

p severance.title
severance.title = 'Severance Two Electric Boogaloo'
p severance.title

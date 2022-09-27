# Ruby Conditonals and Methods

# def - keyword in Ruby short for define
# every def has an end

# def greeter
#   'Hello world!'
# end

# p greeter

# implicit return - returns the last line of every method unless otherwise stated

def greeter name
  "Hello #{name}!"
end

p greeter 'Lyssa'

#____________________

# Methods with Multiple Arguements

def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7)
p multiply(6, 10)
p multiply(33, 75)
p multiply(2, 8)

#____________________

# Methods with Conditional Logic

# Every `def` has an `end`
# Every `if` needs an `end`
  # two different ends means two different execution layers of code

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater!"
  elsif num1 < num2
    "#{num2} is greater!"
  else
    "#{num1} and #{num2} are equal"
  end
end

p greater_num(22, 27)
p greater_num(30, 27)
p greater_num(22, 22)


#____________________

# Getting User Input

# gets - stops the execution of program and waits for you to type something

# my_name = gets
# p my_name  # => "Elyse\n"

# .chomp - removes the \n line break character

# my_name = gets.chomp
# p my_name # => "Elyse"

puts 'Please enter your name'
user_name = gets.chomp
p user_name
puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age

def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}!  #{age} is old enough to vote!"
  else
    "Hi #{name}!  #{age} is NOT old enough to vote!"
  end
end

p can_you_vote(user_name, user_age)
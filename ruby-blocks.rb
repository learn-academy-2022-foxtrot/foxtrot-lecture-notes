# RUBY BLOCKS AND ITERABLES

#What is iteration - repeating process over and over until condition is met

# While - start point and end point , condition starts and true and eventually becomes false

num = 1

while num <=10
    p num
end

#Methods
    # - many methods for iteration
    # - methods can take an anonymous function, which is a BLOCK
    # - Blocks can be defined 2 ways: 
    #     - keywords do and end 
    #     - {}

# TIMES 
 
5.times do
    p 'hello world'
end

5.times { p 'hello world'}  #one liner only uses {}

num = 10
num.times do
    p 'hello foxtrot'
end

#-------------------

# EACH - works on a list of items - aka an array.  

nums = [3, 4, 5, 6]

nums.each do |value|  #we can pass a parameter using the pipes!
    p value
end


nums.each do |value|  
    p value * 3
end

p nums
# ---------------------

#RANGES  
# list of values = > give start and end points separated by 2 dots.  It fills in the content

 1..10

a_range = 1..10

p a_range


a_range.each do |value|
    p value + 5
end

another_range = 'a'..'f'
another_range.each do |val|
    p val
end

p a_range.to_a

#---------------

# MAP - iterator returns an array of the same length of the array you're acting on

nums = 1..10
mapped = nums.map do |num|
    num * 3
end

p mapped


mapped = nums.map do |num|
    if num % 2 == 0
        'even'
    else
        num
    end
end


mapped = nums.map do |num|
    if num.odd?
        'odd'
    else
        num
    end
end

p mapped


def even_or_odd(array)
    array.map do |num|
        if num.even?
            'even'
        elsif num.odd?
            'odd'
        else
            'what did you type?'
        end
    end
end

# p even_or_odd (1..10)


# SELECT 

# -like filter in js
# -built in if statement
# -returns subset 


def only_evens(array)
    array.select do |value|
        value.even?
    end
end

p only_evens(1..10)


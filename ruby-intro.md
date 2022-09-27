# Ruby intro notes 

'Matz' - developed ruby
MINASWAN - Matz is nice and so we are nice

# Ruby
-Dynamically-typed - what is stored in a variable can be be any data type
-Interpreted language - read line by line and passed to an interpreter and then passed to machine code
-Scripting language - code is executed (runs line by line) at run time
- Open-source - free and available to anyone
- Object-oriented - everything is an object, objects are instances of class.

Ojbected-Oriented Programming (OOP) 

irb - interactive ruby

# DATA TYPES
- Integers - numbers (math operation)
- Float - decimal, Have to use float if you expect decimals/fractions
- Strings - single quotes, unless using quotes in the string (ie apostrophe)
- Booleans
- Nil - equal to nothing (like null in js)
-Symbol - unique identifiers to a key-value pair


# VARIABLES
- variables don't need declaration (ie let , const, var)
- snake_case   my_cohort_fancy_foxtrot (naming convention)
- string interpolation - "#{variable}"

## METHODS
 .length
 .upcase
 .capitalize (yay!)
 .reverse
 .delete('t')

 - when passing argument use parentheses, otherwise parentheses not needed
 - methods with a question mark return a Boolean value (ie my_cohort.include?('t'))

 # ARRAYS
 - zero-indexed
 - also have a bunch of methods!

 -MUTATORS
  - assign new value using bracket notation
  - shovel operator <<  works likes push() in js  - push value to end of the arry

  # comment out code using pound sign

# Print to console
puts - short for 'put string'; stringifiies your output (shows the content- whatever is between the strings)

p - raw output - helps you know what data type your dealing with.

```ruby
3.0.0 :011 > dog
 => "big dog" 
3.0.0 :012 > dog.delete(2)
(irb):12:in `delete': no implicit conversion of Integer into String (TypeError)
        from (irb):12:in `<main>'                                    
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                                                               
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :013 > dog.split
 => ["big", "dog"] 
3.0.0 :014 > dog
 => "big dog" 
3.0.0 :015 > "foxtrot" * 5
 => "foxtrotfoxtrotfoxtrotfoxtrotfoxtrot" 
3.0.0 :016 > my_cohort
 => "Foxtrot" 
3.0.0 :017 > my_cohort.include?('o')
 => true 
3.0.0 :018 > my_cohort.class
 => String 
3.0.0 :019 > 9.class
 => Integer 
3.0.0 :020 > 9.0.class
 => Float 
3.0.0 :021 > nil.class
 => NilClass 
3.0.0 :022 > 
3.0.0 :023 > my_cohort = 'Delta'
 => "Delta" 
3.0.0 :024 > my_cohort
 => "Delta" 
3.0.0 :025 > my_cohort.upcase
 => "DELTA" 
3.0.0 :026 > my_cohort
 => "Delta" 
3.0.0 :027 > my_cohort.upcase! 
 => "DELTA" 
3.0.0 :028 > my_cohort
 => "DELTA" 
3.0.0 :029 > my_array = [5, 4, 3, 2, 1]
 => [5, 4, 3, 2, 1] 
3.0.0 :030 > my_array[0]
 => 5 
3.0.0 :031 > my_array.first
 => 5 
3.0.0 :032 > my_array.last
 => 1 
3.0.0 :033 > my_array.second
(irb):33:in `<main>': undefined method `second' for [5, 4, 3, 2, 1]:Array (NoMethodError)                                                           
Did you mean?  send                                                      
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                                               
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                                                        
3.0.0 :034 > my_array.reverse
 => [1, 2, 3, 4, 5] 
3.0.0 :035 > my_array
 => [5, 4, 3, 2, 1] 
3.0.0 :036 > 
3.0.0 :037 > 
3.0.0 :038 > my_array[0] = 10
 => 10 
3.0.0 :039 > my_array
 => [10, 4, 3, 2, 1] 
3.0.0 :040 > my_array << 8
 => [10, 4, 3, 2, 1, 8] 
3.0.0 :041 > my_array
 => [10, 4, 3, 2, 1, 8] 
3.0.0 :042 > my_array >> 15
(irb):42:in `<main>': undefined method `>>' for [10, 4, 3, 2, 1, 8]:Array (NoMethodError)             
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>' 
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                          
3.0.0 :043 > my_array.first = 15
(irb):43:in `<main>': undefined method `first=' for [10, 4, 3, 2, 1, 8]:Array (NoMethodError)                                    
Did you mean?  first                                  
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                            
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
        from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                                     
3.0.0 :044 > my_array[0] = 15
 => 15 
3.0.0 :045 > my_array
 => [15, 4, 3, 2, 1, 8] 
3.0.0 :046 > exit
```

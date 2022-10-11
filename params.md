
## Params
Parameters are content added to the url. It is a way of passing in information to the controller method.

# Hard Coded Tacos

Create a instance variable with a hard coded value
```ruby
    def tacos
    @my_taco = 'al pastor'
    end
```
Create the view called tacos.html.erb

```html
<h1> We like Tacos!</h1>


<h2> I like <%= @my_taco %> tacos!!!</h2>
```
Create the route
```ruby
get '/tacos' => 'home#tacos'
```

The browser will render our data.

# Tacos as Params
Create a instance variable that looks for a value from params
```ruby
    def tacos
    @my_taco = params[:my_taco]
    end
```

Pass params to the url by assigning my_taco to a value

http://localhost:3000/tacos?my_taco=fish

The browser will render our data.

# Tacos as Params with Routes
Update the route to expect a param
```ruby
get '/tacos/:my_taco' => 'home#tacos'
```

http://localhost:3000/tacos/fish

The browser will render our data.

# Multiple Params
Create two instance variables that looks for values from params
```ruby
    def numbers
        @num1 = params[:num1]
        @num2 = params[:num2]
    end
```

Create a route that expects two params
```ruby
  get '/numbers/:num1/:num2' => 'home#numbers'
  ```

In the browser pass two params
http://localhost:3000/numbers/72/15

Parameters are a hash, we can see how they are stored in the Rails log in the terminal:

Started GET "/numbers/72/15" for ::1 at 2022-10-11 13:54:07 -0700
Processing by HomeController#numbers as HTML
  Parameters: {"num1"=>"72", "num2"=>"15"}
Can perform logic on the instance variables

update numbers method in home controller
```ruby
    def numbers
        @num1 = params[:num1]
        @num2 = params[:num2]
         if @num1.to_i < @num2.to_i
            @output = 'YOU WIN!'
         else
            @output = 'I win!'
         end
    end
```
 

Update the view

numbers.html.erb
```html
<h1>Numbers!</h1>
<br>
<h3>This is number 1: <%= @num1 %></h3>
<h3>This is number 2: <%= @num2 %></h3>
<br>
<h2><%= @output %></h2>
```

<!-- --------------FILES------------------->
# FILES

# app/controllers/home_controller.rb

class HomeController < ApplicationController

  <!-- define a method that takes in a parameter and sets it to an instance variable --> -->
    def tacos
        #in this case, the param is coming from URL
        @my_taco = params[:my_taco]
    end

    
<!-- define a method that takes in 2 parameters and set each to an instance variable --> 
      def numbers
        @num1 = params[:num1]
        @num2 = params[:num2]
         if @num1.to_i < @num2.to_i
            @output = 'YOU WIN!'
         else
            @output = 'I win!'
         end
      end

# app/views/home/tacos.html.erb

<h1>  We like Tacos!</h1>

<!-- #  we use ERB to display the value passed in the params from the URL -->

<h2> I like <%= @my_taco %> tacos!!!</h2>

# app/views/home/how_many.html.erb

<h1>How many tacos do you have??</h1>
 <!-- we use ERB to display the value passed in the params from the URL -->
    <h3>This is number 1: <%= @num1 %></h3>
    <h3>This is number 2: <%= @num2 %></h3>
    <br>
    <h2><%= @output %></h2>


# config/routes.rb

Rails.application.routes.draw do
  get '/tacos/:my_taco' => 'home#tacos'
  get '/numbers/:num1/:num2' => 'home#numbers'
end
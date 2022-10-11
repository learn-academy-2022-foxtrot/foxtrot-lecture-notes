# Rails Routes Views and Controllers

MVC - Model, View, Controller

Views - What can be seen by the user
Controllers - Coordinates the interaction between the user, the views, and the model
Routes - How our user gets somewhere where they can see something

## Controller

- Is a class that has multiple methods called by the route

URL - Uniform Resource Locater

- URL sends a GET request to server and controller sends 200 status code and html

/controllers/home_controller.rb
```ruby
class HomeController < ApplicationController
  def greeter
    render html: 'Hi!'
  end

  def joke
    render html: 'Two SQL tables are sitting at a bar.  A query walks in and asks, may I join you?'
  end

  # Controller method will automatically render view if no other render is specified
  def foxtrot
    @foxtrot = "The amazing people of Foxtrot 2022!"
    @students = ["Joseph", "Zack", "Ari", "Jeremy", "Goran", "...etc"]
  end

  def landing
    
  end
end
```


## Routes
/config/routes.rb
```ruby
Rails.application.routes.draw do
  
  # HTTP verb, url (location), hash rocket, controller, method
  # get '/name_of_route' => 'name_of_controller#name_of_method'

  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/foxtrot' => 'home#foxtrot'
  get '/landing' => 'home#landing'
  # Root to will make this your landing page but has to be after get request for that method.
  root to: 'home#landing'
end
```

- ERB: Embedded Ruby - views can Ruby values in them and even evaluate Ruby logic


- Create method in Controller
- Add route for method
- Create view if necessary

- View files must be in the folder named the same as the Controller and named by the method name.

/views/home/foxtrot.html.erb
```ruby
<h1>Hello!</h1>
<h2>Foxtrot is a pretty awesome group!</h2>

<p> <%= @foxtrot %> </p>
<ul>
  <% @students.each do |student| %>
    <li> <%= student %> </li>
  <% end %>
</ul>
```

/views/home/landing.html.erb
```ruby
<h1>Welcome to this App!</h1>
<%= link_to 'Greeter', '/greeter' %>
<%= link_to 'Joke', '/joke' %>
<%= link_to 'Foxtrot', '/foxtrot' %>
```
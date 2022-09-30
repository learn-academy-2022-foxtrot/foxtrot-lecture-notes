#  RUBY HASHES


foxtrotter = { first_name: "Christian", last_name: "Macias", title: "Dragon" }
p foxtrotter
# {:first_name=>"Christian", :last_name=>"Macias", :title=>"Dragon"}


people = Hash.new
p people
# {}

#Manipulating Hashes

# C - create
# R - read (return data)
# U update
# D -delete

# READ
#  return all the data in the hash


foxtrotter = { first_name: "Christian", last_name: "Macias", title: "Dragon" }
p foxtrotter[:first_name]



# ADD content to hash

foxtrotter[:son]="Gabriel"
p foxtrotter


people[:name] = "Athian"
p people


#Update the content in the Hash
# to update the value se can assign the key to a new value

foxtrotter[:title] = "Flower"
p foxtrotter
#{:first_name=>"Christian", :last_name=>"Macias", :title=>"Flower", :son=>"Gabriel"}

foxtrotter[:clown] = foxtrotter.delete(:title)
p foxtrotter

#{:first_name=>"Christian", :last_name=>"Macias", :son=>"Gabriel", :clown=>"Flower"}

# DELETE
 foxtrotter.delete(:last_name)
#  p foxtrotter
 
#  output  {:first_name=>"Christian", :son=>"Gabriel", :clown=>"Flower"}

#Enumerables and Duck Typing

#modules - way of grouping together similary properties.  
#a main module is enumerables - iterable - hashes, arrays and ranges

# Duck typing
    # walks like a duck and quacks like a duck, it's a duck

    # MAP

    characters = {yoda: 'Baby Yoda', superssaiyan: 'Goku',  superhero: 'ironman'}

    characters.each do |key, value|
        #  p "#{value} is a #{key}"
    end

    # "Baby Yoda is a yoda"
    # "Goku is a superssaiyan"
    # "ironman is a superhero"

    def character_roles hash
        hash.map do |key, value|
         "#{value} is a #{key}."
        end
    end

    p character_roles(characters)

    # ["Baby Yoda is a yoda.", "Goku is a superssaiyan.", "ironman is a superhero."]
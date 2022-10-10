# Active Record Validations and Model Specs

Validations - Active Record statements that are added to the model class

- Run each time you create or update an instance
- Ensure the data that is getting passed in is what we are expecting

## Setup
$ rails new validations -d postgresql -T 
$ cd validations 
$ rails db:create

Installed RSpec gem:
$ bundle add rspec-rails

Generated a spec folder to hold our RSpec tests
$ rails generate rspec:install

Generate a Model
$ rails g model Animal name:string amount:integer

I want to check that Active Record will reject an instance that does not provide data on a specific column.

spec/models/animal_spec.rb

require 'rails_helper'

```ruby
RSpec.describe Animal, type: :model do
  it "is valid with valid attributes" do
    animal = Animal.create(name:'Hazel', amount:1)
    expect(animal).to be_valid
  end

  it "is not valid without a name" do
    animal = Animal.create(amount:2)
    expect(animal.errors[:name]).to_not be_empty
  end
end
  ```
Good Fail!

Update model to have validations:

/app/models/animal.rb

```ruby
class Animal < ApplicationRecord
  validates :name, presence: true
end
```

Make sure the new instance has an amount

spec/models/animal_spec.rb

```ruby
 it "is not valid without an amount" do
    animal = Animal.create(name: "Hazel")
    expect(animal.errors[:amount]).to_not be_empty
  end
  ```

Good fail!

Update model to have validations:

/app/models/animal.rb

```ruby
class Animal < ApplicationRecord
  validates :name, :amount, presence: true
end
```

Use the length property to make sure name is within a certain range of characters

spec/models/animal_spec.rb

  ```ruby
  it "is not valid if name is outside 3-20" do
    animal = Animal.create(name: 'Z', amount:1)
    expect(animal.errors[:name]).to_not be_empty
  end
  ```

  Good Fail!

  Update model with length validation

  ```ruby
  class Animal < ApplicationRecord
    validates :name, :amount, presence: true
    validates :name, length: { in: 3..20 }
  end
  ```

Final Result:

spec/models/animal_spec.rb

require 'rails_helper'

```ruby
RSpec.describe Animal, type: :model do
  it "is valid with valid attributes" do
    animal = Animal.create(name:'Hazel', amount:1)
    expect(animal).to be_valid
  end

  it "is not valid without a name" do
    animal = Animal.create(amount:2)
    expect(animal.errors[:name]).to_not be_empty
  end

  it "is not valid without an amount" do
    animal = Animal.create(name: "Hazel")
    expect(animal.errors[:amount]).to_not be_empty
  end

  it "is not valid if name is outside 3-20" do
    animal = Animal.create(name: 'Z', amount:1)
    expect(animal.errors[:name]).to_not be_empty
  end
end
```

models/animal.rb

```ruby

class Animal < ApplicationRecord
    validates :name, :amount, presence: true
    validates :name, length: { in: 3..20 }
end
```


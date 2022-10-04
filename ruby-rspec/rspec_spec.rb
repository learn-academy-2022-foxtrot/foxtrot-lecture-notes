# RSpec Tests

# RSpec is a domain specific language specialized for testing Ruby code

# RSpec is a Ruby gem - package manager for Ruby

# imports rspec tools
require 'rspec'
# require the file that contains the code
require_relative 'rspec.rb'

#  TDD - Test Driven Development

# Red - Green - Refactor


describe 'Book' do
  it 'has to be real' do
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do
    my_book = Book.new
    my_book.title = 'Intro to Ruby on Rails'
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'Intro to Ruby on Rails'
  end

  it 'has an author' do
    my_book = Book.new
    expect(my_book.author).to be_a String
    expect(my_book.author).to eq 'anonymous'
    intro_to_rails = Book.new 'Trish'
    expect(intro_to_rails.author).to eq 'Trish'
  end

  it 'can report the current page' do
    my_book = Book.new
    expect(my_book.page).to be_a Integer
    expect(my_book.page).to eq 1
  end

  it 'can read pages' do
    my_book = Book.new
    expect{ my_book.read 10 }.to change { my_book.page }.from(1).to(11)
  end
end


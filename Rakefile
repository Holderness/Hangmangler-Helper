require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'games_db'
})

require 'sinatra/activerecord/rake'

namespace :db do 
	desc 'populate databse with words'
  task :words do

    require './models/wordbank'

    animals = ["Amur Leopard", "Black Rhino", "Cross River Gorilla", "Hawksbill Turtle", "Javan Rhino", "Leatherback Turtle", "Mountain Gorilla", "Saola", "South China Tiger", "Sumatran Elephant ", "Sumatran Orangutan", "Sumatran Rhino", "Sumatran Tiger", "Vaquita", "Western Lowland Gorilla", "Yangtze Finless Porpoise", "African Wild Dog", "Amur Tiger", "Asian Elephant", "Bengal Tiger", "Black Spider Monkey", "Black-footed Ferret", "Blue Whale", "Bluefin Tuna", "Bonobo", "Bornean Orangutan", "Borneo Pygmy Elephant", "Chimpanzee", "Eastern Lowland Gorilla", "Fin Whale", "Galápagos Penguin", "Ganges River Dolphin", "Giant Panda", "Green Turtle", "Hector's Dolphin", "Humphead Wrasse", "Indian Elephant", "Indochinese Tiger", "Indus River Dolphin", "Loggerhead Turtle", "Malayan Tiger", "North Atlantic Right Whale", "Orangutan", "Sea Lions", "Sei Whale", "Snow Leopard", "Sri Lankan Elephant", "Tiger", "Whale", "African Elephant"]

    animals.each do |animal|
      WordBank.create({word: animal})
    end
  end
end
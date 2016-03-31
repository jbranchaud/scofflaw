# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Generic Seeds

## AmountTypes
AmountType.all.destroy_all

puts 'Creating Amount Types:'
amount_types = ['none', 'ounce', 'to taste', 'dash', 'wedge', 'slice', 'twist'].map do |name|
  amount_type = AmountType.create!(name: name)
  puts "- Creating #{amount_type.name}"
  amount_type
end
puts ''


# Development Seeds
if Rails.env.development?

  ## Users
  User.all.destroy_all

  puts 'Creating Users:'
  user1 = FactoryGirl.create :user, email: 'lizlemon@nbc.com'
  puts "- Creating #{user1.email}"
  user2 = FactoryGirl.create :user, email: 'kennethpacell@nbc.com'
  puts "- Creating #{user2.email}"
  user3 = FactoryGirl.create :user, email: 'tracyjordan@nbc.com'
  puts "- Creating #{user3.email}"
  puts ''


  ## Ingredient Types
  IngredientType.all.destroy_all

  puts 'Creating Ingredient Types:'
  ingredient_types = %w[Fruit Liquor Bitters].map do |name|
    ingredient_type = IngredientType.create!(name: name)
    puts "- Creating #{ingredient_type.name}"
    ingredient_type
  end
  puts ''


  ## Ingredients
  Ingredient.all.destroy_all

  puts 'Creating Ingredients:'
  %w[Lemon Lime Orange].each do |name|
    ingredient = Ingredient.create!(name: name, ingredient_type: ingredient_types[0])
    puts "- Creating #{ingredient.name} for #{ingredient_types[0].name}"
  end

  ["Gin", "Bourbon", "Vodka", "Scotch", "St. Germain", "Triple Sec"].each do |name|
    ingredient = Ingredient.create!(name: name, ingredient_type: ingredient_types[1])
    puts "- Creating #{ingredient.name} for #{ingredient_types[1].name}"
  end

  ingredient1 = Ingredient.create!(name: "Orange Bitters", description: "a cocktail flavoring made from the peels of Seville oranges, cardamom, caraway seed, coriander and burnt sugar in an alcohol base", ingredient_type: ingredient_types[2])
  puts "- Creating #{ingredient1.name} for #{ingredient_types[2].name}"
  ingredient2 = Ingredient.create!(name: "Angostura Bitters", description: "a concentrated bitters made of water, 44.7% ethanol, gentian, herbs and spices", ingredient_type: ingredient_types[2])
  puts "- Creating #{ingredient2.name} for #{ingredient_types[2].name}"

  puts ''


  ## Recipes
  Recipe.all.destroy_all

  puts 'Creating Recipes:'
  recipe1 = FactoryGirl.create :recipe,
    name: 'Old Fashioned',
    description: 'a cocktail made by muddling sugar with bitters, then adding alcohol, such as whiskey or brandy, and a twist of citrus rind'
  puts "- Creating #{recipe1.name}"

  recipe2 = FactoryGirl.create :recipe,
    name: 'Sazerac',
    description: 'a local New Orleans variation of a Cognac or whiskey cocktail, named for the Sazerac de Forge et Fils brand of Cognac brandy that served as its original main ingredient'
  puts "- Creating #{recipe2.name}"

  recipe3 = FactoryGirl.create :recipe,
    name: 'French 75',
    description: 'a cocktail made from gin, Champagne, lemon juice, and sugar'
  puts "- Creating #{recipe3.name}"

  recipe4 = FactoryGirl.create :recipe,
    name: 'Moscow Mule',
    description: 'a mule made with a high-quality vodka, a spicy ginger beer, and lime juice, garnished with a slice or wedge of lime'
  puts "- Creating #{recipe4.name}"
  puts ''
end

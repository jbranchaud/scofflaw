# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Generic Seeds

## AmountTypes
puts 'Creating Amount Types:'
amount_types = ['none', 'ounce', 'to taste', 'dash', 'wedge', 'slice', 'twist'].map do |name|
  amount_type = AmountType.find_or_create_by!(name: name)
  puts "- Creating #{amount_type.name}"
  amount_type
end
puts ''


# Development Seeds
if Rails.env.development?

  IngredientAmount.all.destroy_all
  Recipe.all.destroy_all
  Ingredient.all.destroy_all
  IngredientType.all.destroy_all
  User.all.destroy_all

  ## Users
  puts 'Creating Users:'
  user1 = FactoryGirl.create :user, email: 'lizlemon@nbc.com'
  puts "- Creating #{user1.email}"
  user2 = FactoryGirl.create :user, email: 'kennethpacell@nbc.com'
  puts "- Creating #{user2.email}"
  user3 = FactoryGirl.create :user, email: 'tracyjordan@nbc.com'
  puts "- Creating #{user3.email}"
  puts ''


  ## Ingredient Types
  puts 'Creating Ingredient Types:'
  ingredient_types = %w[Fruit Liquor Bitters].map do |name|
    ingredient_type = IngredientType.create!(name: name)
    puts "- Creating #{ingredient_type.name}"
    ingredient_type
  end
  puts ''


  ## Ingredients
  puts 'Creating Ingredients:'
  fruits = %w[Lemon Lime Orange].map do |name|
    ingredient = Ingredient.create!(name: name, ingredient_type: ingredient_types[0])
    puts "- Creating #{ingredient.name} for #{ingredient_types[0].name}"
    ingredient
  end

  liquors = ["Gin", "Bourbon", "Vodka", "Scotch", "St. Germain", "Triple Sec"].map do |name|
    ingredient = Ingredient.create!(name: name, ingredient_type: ingredient_types[1])
    puts "- Creating #{ingredient.name} for #{ingredient_types[1].name}"
    ingredient
  end

  ingredient1 = Ingredient.create!(name: "Orange Bitters", description: "a cocktail flavoring made from the peels of Seville oranges, cardamom, caraway seed, coriander and burnt sugar in an alcohol base", ingredient_type: ingredient_types[2])
  puts "- Creating #{ingredient1.name} for #{ingredient_types[2].name}"
  ingredient2 = Ingredient.create!(name: "Angostura Bitters", description: "a concentrated bitters made of water, 44.7% ethanol, gentian, herbs and spices", ingredient_type: ingredient_types[2])
  puts "- Creating #{ingredient2.name} for #{ingredient_types[2].name}"

  puts ''


  ## Recipes
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


  ## Ingredient Amounts
  puts 'Creating IngredientAmounts'
  # Old Fashioned
  old_fashioned_ingredient1 =
    FactoryGirl.create :ingredient_amount,
      recipe: recipe1,
      ingredient: liquors[1],
      amount: 3,
      amount_type: amount_types[1]
  puts "- Creating #{old_fashioned_ingredient1}"
  old_fashioned_ingredient2 =
    FactoryGirl.create :ingredient_amount,
      recipe: recipe1,
      ingredient: fruits[2],
      amount: 2,
      amount_type: amount_types[5]
  puts "- Creating #{old_fashioned_ingredient2}"
  old_fashioned_ingredient3 =
    FactoryGirl.create :ingredient_amount,
      recipe: recipe1,
      ingredient: ingredient1,
      amount: 2,
      amount_type: amount_types[3]
  puts "- Creating #{old_fashioned_ingredient3}"
end

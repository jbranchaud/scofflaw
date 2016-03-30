# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
  ingredient_type1 = IngredientType.create!(name: 'Fruit')
  puts "- Creating #{ingredient_type1.name}"
  ingredient_type2 = IngredientType.create!(name: 'Liquor')
  puts "- Creating #{ingredient_type2.name}"
  ingredient_type3 = IngredientType.create!(name: 'Bitters')
  puts "- Creating #{ingredient_type3.name}"
  puts ''


  ## Ingredients
  Ingredient.all.destroy_all

  puts 'Creating Ingredients:'
  %w[Lemon Lime Orange].each do |name|
    ingredient = Ingredient.create!(name: name, ingredient_type: ingredient_type1)
    puts "- Creating #{ingredient.name} for #{ingredient_type1.name}"
  end
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

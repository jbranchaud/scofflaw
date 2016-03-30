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

  FactoryGirl.create :user, email: 'lizlemon@nbc.com'
  FactoryGirl.create :user, email: 'kennethpacell@nbc.com'
  FactoryGirl.create :user, email: 'tracyjordan@nbc.com'


  ## Recipes
  Recipe.all.destroy_all

  FactoryGirl.create :recipe,
    name: 'Old Fashioned',
    description: 'a cocktail made by muddling sugar with bitters, then adding alcohol, such as whiskey or brandy, and a twist of citrus rind'

  FactoryGirl.create :recipe,
    name: 'Sazerac',
    description: 'a local New Orleans variation of a Cognac or whiskey cocktail, named for the Sazerac de Forge et Fils brand of Cognac brandy that served as its original main ingredient'

  FactoryGirl.create :recipe,
    name: 'French 75',
    description: 'a cocktail made from gin, Champagne, lemon juice, and sugar'

  FactoryGirl.create :recipe,
    name: 'Moscow Mule',
    description: 'a mule made with a high-quality vodka, a spicy ginger beer, and lime juice, garnished with a slice or wedge of lime'
end

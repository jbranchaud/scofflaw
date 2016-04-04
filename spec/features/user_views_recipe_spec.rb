require "rails_helper"

feature "user views recipe" do
  let(:recipes_page) { Pages::Recipes.new }
  let(:show_recipe) { Pages::ShowRecipe.new }
  let(:user) {}

  before do
    user = FactoryGirl.create(:user)

    liquor = IngredientType.find_or_create_by!(name: 'Liquor')
    fruit = IngredientType.find_or_create_by!(name: 'Fruit')
    garnish = IngredientType.find_or_create_by!(name: 'Garnish')
    bitters = IngredientType.find_or_create_by!(name: 'Bitters')

    bourbon = Ingredient.create!(name: 'Bourbon', ingredient_type: liquor)
    orange = Ingredient.create!(name: 'Orange slice', ingredient_type: fruit)
    cherry = Ingredient.create!(name: 'Maraschino cherry', ingredient_type: fruit)
    orange_peel = Ingredient.create!(name: 'Orange peel', ingredient_type: garnish)
    orange_bitters = Ingredient.create!(name: 'Orange bitters', ingredient_type: bitters)

    ounce = AmountType.find_or_create_by!(name: 'ounce')
    dash = AmountType.find_or_create_by!(name: 'dash')
    none = AmountType.find_or_create_by!(name: 'none')

    recipe = Recipe.create!(
      name: 'Old Fashioned',
      description: 'That classic whiskey cocktail'
    )
    recipe.ingredient_amounts.create!(
      ingredient: bourbon,
      amount: 3,
      amount_type: ounce
    )
    recipe.ingredient_amounts.create!(
      ingredient: orange,
      amount: 2,
      amount_type: none
    )
    recipe.ingredient_amounts.create!(
      ingredient: cherry,
      amount: 2,
      amount_type: none
    )
    recipe.ingredient_amounts.create!(
      ingredient: orange_peel,
      amount: 1,
      amount_type: none
    )
    recipe.ingredient_amounts.create!(
      ingredient: orange_bitters,
      amount: 2,
      amount_type: dash
    )
  end

  scenario 'user views details of existing recipe' do
    visit recipes_path

    expect(recipes_page).to be_on_page
    expect(recipes_page).to have_recipe('Old Fashioned')

    recipes_page.click_on_recipe('Old Fashioned')

    expect(show_recipe).to be_on_page('Old Fashioned')
    expect(show_recipe).to have_description('That classic whiskey cocktail')
    expect(show_recipe).to have_ingredient('3 ounces Bourbon')
    expect(show_recipe).to have_ingredient('2 dashes Orange bitters')
    expect(show_recipe).to have_ingredient('2 Orange slices')
    expect(show_recipe).to have_ingredient('2 Maraschino cherries')
    expect(show_recipe).to have_ingredient('1 Orange peel')
  end
end

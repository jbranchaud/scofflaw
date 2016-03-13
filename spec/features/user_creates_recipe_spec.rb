require 'rails_helper'

describe 'User creates a recipe', :js do
  let(:navigation) { Pages::Navigation.new }
  let(:recipes_page) { Pages::Recipes.new }
  let(:new_recipe_page) { Pages::NewRecipe.new }
  let(:user) {}

  before do
    user = FactoryGirl.create(:user)
  end

  context 'with all recipe fields' do
    it 'creates the recipe' do
      visit recipes_path

      expect(recipes_page).to be_on_page
      navigation.click_new_recipe

      expect(new_recipe_page).to be_on_page
      new_recipe_page.fill_in_recipe_info(
        name: 'Old Fashioned',
        description: 'the classic whiskey cocktail'
      )

      new_recipe_page.add_ingredient(
        ingredient_type: 'liquor',
        name: 'bourbon',
        amount: '3',
        amount_type: 'ounce'
      )
      new_recipe_page.click_add_ingredient
      expect(new_recipe_page).to have_ingredient('3 ounces bourbon')

      new_recipe_page.click_create_recipe

      expect(recipes_page).to be_on_page
    end
  end

  context 'without the name field' do
    it 'displays an error message' do
      visit recipes_path

      expect(recipes_page).to be_on_page
      navigation.click_new_recipe

      expect(new_recipe_page).to be_on_page
      new_recipe_page.fill_in_recipe_info(
        name: '',
        description: 'the classic whiskey cocktail'
      )
      new_recipe_page.click_create_recipe

      expect(new_recipe_page).to be_on_page
      expect(new_recipe_page).to have_content("Name can't be blank")
    end
  end
end

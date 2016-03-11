require 'rails_helper'

describe 'User creates a recipe', :js do
  context 'with all recipe fields' do
    let(:navigation) { Pages::Navigation.new }
    let(:recipes_page) { Pages::Recipes.new }
    let(:new_recipe_page) { Pages::NewRecipe.new }

    it 'creates the recipe' do
      user = FactoryGirl.create(:user)

      visit recipes_path

      expect(recipes_page).to be_on_page
      navigation.click_new_recipe

      expect(new_recipe_page).to be_on_page
      new_recipe_page.fill_in_recipe_info(
        name: 'Old Fashioned',
        description: 'the classic whiskey cocktail'
      )
      new_recipe_page.click_create_recipe

      expect(recipes_page).to be_on_page
    end
  end
end

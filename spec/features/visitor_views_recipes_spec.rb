require 'rails_helper'

describe 'Visitor views recipes' do
  let(:navigation) { Pages::Navigation.new }
  let(:recipes_page) { Pages::Recipes.new }

  # TODO: remove need to put visit '/' everywhere before interacting with the
  # nav bar
  context 'when there are recipes' do
    scenario 'the names of the recipes are displayed' do
      FactoryGirl.create(:recipe, name: 'Sazerac')
      FactoryGirl.create(:recipe, name: 'Old Fashioned')

      visit '/'
      navigation.click_recipes

      expect(recipes_page).to be_on_page
      expect(recipes_page).to have_recipe('Sazerac')
      expect(recipes_page).to have_recipe('Old Fashioned')
    end
  end

  context 'when there are no recipes' do
    scenario 'a No Recipes message is displayed' do
      visit '/'
      navigation.click_recipes

      expect(recipes_page).to be_on_page
      expect(recipes_page).to have_no_recipes
    end
  end
end

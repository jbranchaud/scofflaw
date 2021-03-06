require 'rails_helper'

describe 'Visitor views recipes' do
  context 'when there are recipes' do
    scenario 'the names of the recipes are displayed' do
      FactoryGirl.create(:recipe, name: 'Sazerac')
      FactoryGirl.create(:recipe, name: 'Old Fashioned')

      visit recipes_path

      expect(page).to have_content 'Sazerac'
      expect(page).to have_content 'Old Fashioned'
    end
  end

  context 'when there are no recipes' do
    scenario 'a No Recipes message is displayed' do
      visit recipes_path

      expect(page).to have_content 'There are no recipes yet'
    end
  end
end

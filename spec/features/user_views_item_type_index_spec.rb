require 'rails_helper'

feature 'User views ingredient type index' do
  context 'when there are ingredient types' do
    before do
      IngredientType.create!(name: 'garnish')
      IngredientType.create!(name: 'liquor')
    end

    scenario 'sees all ingredient types' do
      visit ingredient_types_path

      expect(page).to have_content 'garnish'
      expect(page).to have_content 'liquor'
    end
  end

  context 'when there are no ingredient types' do
    scenario 'sees a message for no ingredient types' do
      visit ingredient_types_path

      expect(page).to have_content 'No ingredient types have been created yet...'
    end
  end
end

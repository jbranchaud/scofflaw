require 'rails_helper'

feature 'User views item type index' do
  context 'when there are item types' do
    before do
      ItemType.create!(name: 'garnish')
      ItemType.create!(name: 'liquor')
    end

    scenario 'sees all item types' do
      visit item_types_path

      expect(page).to have_content 'garnish'
      expect(page).to have_content 'liquor'
    end
  end

  context 'when there are no item types' do
    scenario 'sees a message for no item types' do
      visit item_types_path

      expect(page).to have_content 'No item types have been created yet...'
    end
  end
end

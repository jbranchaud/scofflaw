require 'rails_helper'

feature 'User creates an ingredient type' do
  context 'using the Rails form' do
    context 'with valid input' do
      scenario 'a new ingredient type is created' do
        visit new_ingredient_type_path

        within '#rails-form' do
          fill_in 'Name', with: 'Bitters'
          click_on 'Submit'
        end

        expect(current_path).to eq ingredient_types_path
        expect(page).to have_content 'Bitters'
      end
    end

    context 'with the name field left blank' do
      scenario 'an error is displayed' do
        visit new_ingredient_type_path

        within '#rails-form' do
          fill_in 'Name', with: ''
          click_on 'Submit'
        end

        expect(page).to have_content "Name can't be blank"
      end
    end
  end

  context 'using the React form', js: true do
    context 'with valid input' do
      scenario 'a new ingredient type is created' do
        visit new_ingredient_type_path

        within '#react-form' do
          fill_in 'Name', with: 'Bitters'
          click_on 'Submit'
        end

        expect(page).to have_content 'Bitters'
        expect(IngredientType.first.name).to eq 'Bitters'
      end
    end

    context 'with the name field left blank' do
      scenario 'an error is displayed' do
        visit new_ingredient_type_path

        within '#react-form' do
          fill_in 'Name', with: ''
          click_on 'Submit'
        end

        expect(page).to have_content "Name can't be blank"
      end
    end
  end
end

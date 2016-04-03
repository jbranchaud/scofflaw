module Pages
  class NewRecipe
    include Capybara::DSL

    def on_page?
      has_selector?('div#new_recipe')
    end

    def fill_in_recipe_info(name:, description:)
      fill_in 'Name', with: name
      fill_in 'Description', with: description
    end

    def fill_in_ingredient_amount(amount)
      within '#ingredients' do
        fill_in 'Amount', with: amount
      end
    end

    def click_add_ingredient
      within '#ingredients' do
        click_on 'Add Ingredient'
      end
    end

    def has_ingredient?(name)
      within '#ingredient_list' do
        has_selector?('li', text: name)
      end
    end

    def click_create_recipe
      click_on 'Create Recipe'
    end
  end
end

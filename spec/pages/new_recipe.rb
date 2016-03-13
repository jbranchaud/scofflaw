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

    def add_ingredient(ingredient_type:,
      name:,
      amount:,
      amount_type:)
      within '#ingredients' do
        select ingredient_type, from: 'ingredient_type'
        select name, from: 'name'
        fill_in 'Amount', with: amount
        select amount_type, from: 'amount_type'
      end
    end

    def click_create_recipe
      click_on 'Create Recipe'
    end
  end
end

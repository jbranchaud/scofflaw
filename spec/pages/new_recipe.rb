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

    def click_create_recipe
      click_on 'Create Recipe'
    end
  end
end

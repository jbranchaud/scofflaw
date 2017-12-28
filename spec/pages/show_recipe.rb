module Pages
  class ShowRecipe
    include Capybara::DSL

    def on_page?(recipe_name)
      has_selector?('h1', text: recipe_name)
    end

    def has_description?(description)
      has_selector?('h3', text: description)
    end

    def has_ingredient?(ingredient_display)
      has_selector?('li', text: ingredient_display)
    end

    def click_on_edit
      click_on 'Edit'
    end
  end
end

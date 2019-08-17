module Pages
  class Recipes
    include Capybara::DSL

    def on_page?
      has_selector?('h1', text: 'Recipes')
    end

    def has_no_recipes?
      has_selector?('div', text: 'There are no recipes yet')
    end

    def has_recipe?(name)
      within 'ul' do
        has_selector?('li', text: name)
      end
    end

    def click_on_recipe(name)
      within 'ul' do
        click_on name
      end
    end
  end
end

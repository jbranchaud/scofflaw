module Pages
  class Recipes
    include Capybara::DSL

    def on_page?
      has_selector?('h1', text: 'Recipes')
    end
  end
end

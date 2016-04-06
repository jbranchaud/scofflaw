module Pages
  class Navigation
    include Capybara::DSL

    def has_user_signed_in?(email:)
      has_content?(email)
    end

    def click_recipes
      within 'nav' do
        click_on 'Recipes'
      end
    end

    def click_new_recipe
      within 'nav' do
        click_on 'New Recipe'
      end
    end
  end
end

module Pages
  class Navigation
    include Capybara::DSL

    def user_signs_in(user:, password: 'password')
      visit '/'
      click_on 'Log In'

      fill_in 'Email', with: user.email
      fill_in 'Password', with: password
      click_on 'Log in'
    end

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

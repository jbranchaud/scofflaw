module Pages
  class Navigation
    include Capybara::DSL

    def has_user_signed_in?(email:)
      has_content?(email)
    end

    def click_new_recipe
      click_on 'New Recipe'
    end
  end
end

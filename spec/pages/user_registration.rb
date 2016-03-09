module Pages
  class UserRegistration
    include Capybara::DSL

    def on_page?
      has_selector?('h2', text: 'Sign up')
    end

    def fill_in_user_info(email:, password:, password_confirmation:)
      fill_in 'Email', with: 'lizlemon@nbc.com'
      fill_in 'Password', with: 'cheesyblasters'
      fill_in 'Password confirmation', with: 'cheesyblasters'
    end

    def click_sign_up
      click_on 'Sign up'
    end
  end
end

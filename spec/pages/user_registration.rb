module Pages
  class UserRegistration
    include Capybara::DSL

    def on_page?
      has_selector?('h2', text: 'Sign up')
    end

    def fill_in_user_info(email:, password:, password_confirmation:)
      fill_in 'Email', with: email
      fill_in 'Password', with: password
      fill_in 'Password confirmation', with: password_confirmation
    end

    def click_sign_up
      click_on 'Sign up'
    end
  end
end

module Pages
  class Navigation
    include Capybara::DSL

    def has_user_signed_in?(email:)
      has_content?(email)
    end
  end
end

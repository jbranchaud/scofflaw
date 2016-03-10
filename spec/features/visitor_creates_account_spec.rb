require 'rails_helper'

describe 'Visitor creates account' do
  let(:user_registration_page) { Pages::UserRegistration.new }
  let(:recipes_index) { Pages::Recipes.new }
  let(:navigation) { Pages::Navigation.new }

  context 'when a valid email and password are provided' do
    scenario 'the account is created' do
      visit root_path
      click_on 'Sign Up'

      expect(user_registration_page).to be_on_page

      user_registration_page.fill_in_user_info(
        email: 'lizlemon@nbc.com',
        password: 'cheesyblasters',
        password_confirmation: 'cheesyblasters',
      )
      user_registration_page.click_sign_up

      expect(recipes_index).to be_on_page
      expect(navigation).to have_user_signed_in(email: 'lizlemon@nbc.com')
    end
  end

  context 'when an unavailable email is provided' do
    before do
      FactoryGirl.create(:user, email: 'jackdonaghy@nbc.com')
    end

    scenario 'an Email Taken message is displayed' do
      visit root_path
      click_on 'Sign Up'
      expect(page).to have_selector('h2', text: 'Sign up')

      expect(user_registration_page).to be_on_page

      user_registration_page.fill_in_user_info(
        email: 'jackdonaghy@nbc.com',
        password: 'reganomics',
        password_confirmation: 'reganomics'
      )
      user_registration_page.click_sign_up

      expect(user_registration_page).to be_on_page
      expect(page).to have_selector('div#error_explanation', text: 'Email has already been taken')
    end
  end

  context 'when the fields are left blank' do
    scenario 'a Fields Cannot Be Blank message is displayed' do
      visit root_path
      click_on 'Sign Up'
      expect(page).to have_selector('h2', text: 'Sign up')

      fill_in 'Email', with: 'kennethparcell@nbc.com'
      fill_in 'Password', with: ''
      fill_in 'Password confirmation', with: ''

      click_on 'Sign up'

      expect(page).to have_selector('h2', text: 'Sign up')
      expect(page).to have_selector('div#error_explanation', text: "Password can't be blank")
    end
  end
end

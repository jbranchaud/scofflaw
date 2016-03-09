require 'rails_helper'

describe 'Visitor signs in' do
  before do
    FactoryGirl.create(:user, email: 'lizlemon@nbc.com', password: 'cheesyblasters')
  end

  context 'when a valid email and password are provided' do
    scenario 'the visitor is signed in to their account' do
      visit root_path
      click_on 'Log In'
      expect(page).to have_selector('h2', text: 'Log in')

      fill_in 'Email', with: 'lizlemon@nbc.com'
      fill_in 'Password', with: 'cheesyblasters'
      click_on 'Log in'

      expect(page).to have_selector('h1', text: 'Recipes')
      expect(page).to have_content('Hi, lizlemon@nbc.com')
    end
  end

  context 'when an invalid email and password are provided' do
    scenario 'the visitor sees a Failed To Log In message' do
      visit root_path
      click_on 'Log In'
      expect(page).to have_selector('h2', text: 'Log in')

      fill_in 'Email', with: 'lizlemon@nbc.com'
      fill_in 'Password', with: 'password'
      click_on 'Log in'

      expect(page).to have_selector('h2', text: 'Log in')
      expect(page).to have_selector('.alert', text: "Invalid email or password")
    end
  end
end

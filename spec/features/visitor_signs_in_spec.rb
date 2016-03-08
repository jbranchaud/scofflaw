require 'rails_helper'

describe 'Visitor signs in' do
  context 'when a valid email and password are provided' do
    before do
      FactoryGirl.create(:user, email: 'lizlemon@nbc.com', password: 'password')
    end

    scenario 'the visitor is signed in to their account' do
      visit root_path
      click_on 'Log In'
      expect(page).to have_selector('h2', text: 'Log in')

      fill_in 'Email', with: 'lizlemon@nbc.com'
      fill_in 'Password', with: 'password'
      click_on 'Log in'

      expect(page).to have_selector('h1', text: 'Recipes')
      expect(page).to have_content('Hi, lizlemon@nbc.com')
    end
  end
end

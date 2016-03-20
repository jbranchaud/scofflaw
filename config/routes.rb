Rails.application.routes.draw do
  devise_for :users
  root to: 'recipes#index'

  resources :recipes, only: [:new, :create, :index]
  resources :ingredient_types, only: [:new, :create, :index] do
    collection do
      post :react_create
    end
  end
end

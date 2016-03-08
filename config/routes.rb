Rails.application.routes.draw do
  devise_for :users
  root to: 'recipes#index'

  resources :recipes, only: [:index]
  resources :item_types, only: [:new, :create, :index] do
    collection do
      post :react_create
    end
  end
end

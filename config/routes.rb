Rails.application.routes.draw do
  resources :item_types, only: [:new, :create, :index] do
    collection do
      post :react_create
    end
  end
end

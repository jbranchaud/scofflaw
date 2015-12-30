Rails.application.routes.draw do
  resources :item_types, only: [:new, :create, :index]
end

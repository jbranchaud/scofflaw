Rails.application.routes.draw do
  resources :item_types, only: [:index]
end

Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :favorites, only: [:create, :destroy]

  get '/favorites' => "static_pages#favorites"
  get '/searches' => "static_pages#root"
end

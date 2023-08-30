Rails.application.routes.draw do
  # root "posts#index"

  # Change route to /api/v1
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end

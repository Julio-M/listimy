Rails.application.routes.draw do
  
  resources :bookings, path:'/bookings'
  resources :reviews
  resources :services
  resources :categories
  resources :freelancers
  resources :users 

  # Routing logic: fallback requests for React Router.

  #users start
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'
  patch '/update-profile', to: 'users#update'
  

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  #users end

  #freelancers start
  post "/signup-freelancer", to: "freelancers#create"
  get '/me-freelancer', to: 'freelancers#show'
  # patch '/me-freelancer', to: 'freelancers#update'
  
  post '/show-freelancer', to: 'sessions#create_view_freelancer'
  post '/login-freelancer', to: 'sessions#create_freelancer'
  delete '/logout-freelancer', to: 'sessions#destroy_freelancer'
  #freelancers end

  #services start

  post '/service-create', to: 'services#create'
  delete '/services/:id', to: 'services#destroy'

  #services end

  #bookings start#
  get '/bookings/users/:id', to: 'bookings#show_user_booking'
  get '/bookings/freelancers/:id', to: 'bookings#show_freelancer_booking'

  delete '/bookings/:id', to: 'bookings#destroy'
  #bookings end#

  #reviews start
  post '/reviews-create', to: 'reviews#create'
  get '/reviews/freelancers/:id', to: 'reviews#show_rew_free'

  delete '/reviews/:id', to: 'reviews#destroy'
  #reviews end


  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

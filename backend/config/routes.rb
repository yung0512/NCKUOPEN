# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  # for admin api
  scope :admin, module: :admin, defaults: { format: :json } do
    devise_for :admin_user, { sessions: :sessions }

    get '/orders', to: 'orders#index'
  end

  # for register api
  post 'login' => 'authentication#login'
  post 'logout' => 'authentication#logout'
  post 'sign_up' => 'authentication#sign_up'

  # orders api
  resources :orders, only: [:create]

  # Defines the root path route ("/"), this is just check if the VPS backend is work.
  root 'application#index'
end

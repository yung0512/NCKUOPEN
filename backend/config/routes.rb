# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # for admin api
  scope :admin, module: :admin, defaults: { format: :json } do
    devise_for :admin_user, { sessions: :sessions }
  end

  # for register api
  post 'login' => 'authentication#login'
  post 'logout' => 'authentication#logout'

  # Defines the root path route ("/"), this is just check if the VPS backend is work.
  root 'application#index'
end

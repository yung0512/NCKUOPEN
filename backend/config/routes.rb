# frozen_string_literal: true

Rails.application.routes.draw do
  # for admin api
  scope :admin, module: :admin, defaults: { format: :json } do
    devise_for :admin_user, { sessions: :sessions }
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/"), this is just check if the VPS backend is work.
  root 'application#index'
end

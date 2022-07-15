# frozen_string_literal: true

module Admin
  # override devise session controller
  class SessionsController < Devise::SessionsController
    def create
      user = AdminUser.find_by_email(params[:email])

      if user && user&.valid_password?(params[:password])
        @current_user = user

        # return jwt token if is valid password
        render json: { token: user.generate_jwt, success: true }
      else
        render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
      end
    end
  end
end

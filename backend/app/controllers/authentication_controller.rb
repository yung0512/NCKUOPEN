# frozen_string_literal: true

# for registration page user authenticate
# use auth_token to verfiy frontend request
class AuthenticationController < ApplicationController
  def login
    if valid_user?
      render(json: { message: 'ok', auth_token: @user.auth_token }, status: 200)
    else
      render(json: { message: 'invalid user email or password' }, status: 401)
    end
  end

  def logout
    current_user.regenerate_auth_token
    render(json: { message: 'you have been logged out' }, status: 200)
  end

  def sign_up
    user_params = params.permit(:email, :name, :mobile)
    @user = User.create(user_params, password: 123_456)

    login
  end

  private

  def valid_user?
    @user = User.find_by(email: params[:email])
    return false if @user.blank?

    @user.valid_password?(params[:password])
    # valid_password? 是 Devise 提供的
  end
end

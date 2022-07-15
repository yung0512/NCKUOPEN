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
    @user = User.find_by(email: user_params[:email])

    if @user.present?
      login
    else

      # 目前報名聯絡人是無需註冊，所以直接登入不用密碼
      @user = User.new(user_params.merge(password: '123456'))
      if @user.save
        login
      else
        render(json: { message: 'login fail' }, status: 401)
      end
    end
  end

  private

  def valid_user?
    @user = User.find_by(email: params[:email])
    return false if @user.blank?

    # 這裡暫時寫死密碼
    @user.valid_password?('123456')
    # valid_password? 是 Devise 提供的
  end
end

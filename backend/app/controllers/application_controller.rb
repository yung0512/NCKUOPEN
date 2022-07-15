# frozen_string_literal: true

# base app controller
class ApplicationController < ActionController::API
  def index
    render(json: { success: true })
  end

  def authenticate_user_token
    user = User.find_by(auth_token: params['auth_token'])
    return render(json: { message: 'invalid token' }, status: 401) if user.nil?

    sign_in(user, store: false)
    # store false would not store user session
  end
end

# frozen_string_literal: true

module Admin
  # base controller for admin
  class AppController < ApplicationController
    private

    def authenticate_user
      return unless request.headers['Authorization'].present?

      authenticate_or_request_with_http_token do |token|
        jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first

        @current_user_id = jwt_payload['id']
      rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
        head :unauthorized
      end
    end
  end
end

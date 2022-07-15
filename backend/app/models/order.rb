# frozen_string_literal: true

class Order < ApplicationRecord
  belongs_to :user
  belongs_to :competition
  has_many :order_games, dependent: :destroy, inverse_of: :order
end

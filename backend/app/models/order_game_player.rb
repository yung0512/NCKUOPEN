# frozen_string_literal: true

class OrderGamePlayer < ApplicationRecord
  belongs_to :order_game
  belongs_to :player
end

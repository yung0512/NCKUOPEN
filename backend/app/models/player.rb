# frozen_string_literal: true

class Player < ApplicationRecord
  has_many :order_game_players
  has_many :order_games, through: :order_game_players
end

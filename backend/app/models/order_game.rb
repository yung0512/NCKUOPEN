# frozen_string_literal: true

class OrderGame < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  belongs_to :order
  has_many :order_game_players
  has_many :players, through: :order_game_players
  belongs_to_active_hash :group_type, class_name: 'KeyValues::GroupType'
  belongs_to_active_hash :game_type, class_name: 'KeyValues::GameType'
end

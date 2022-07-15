# frozen_string_literal: true

# player in an ordergame relation table between ordergame and player
class CreateOrderGamePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :order_game_players do |t|
      t.references :order_game, null: false
      t.references :player, null: false
      t.timestamps
    end
  end
end

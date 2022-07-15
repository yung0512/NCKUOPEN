# frozen_string_literal: true

# order detail
class CreateOrderGames < ActiveRecord::Migration[7.0]
  def change
    create_table :order_games do |t|
      t.references :order, null: false
      t.timestamps
    end
  end
end

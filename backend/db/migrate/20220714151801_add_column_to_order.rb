# frozen_string_literal: true

# add new column to order
class AddColumnToOrder < ActiveRecord::Migration[7.0]
  def change
    add_reference :order_games, :group_type, null: false
    add_reference :order_games, :game_type, null: false
    change_column :competitions, :start_at, :date, null: false
    change_column :competitions, :end_at, :date, null: false
  end
end

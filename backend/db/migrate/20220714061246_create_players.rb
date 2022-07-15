# frozen_string_literal: true

# create players
class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.string :identification_code, null: false
      t.string :mobile, null: false
      t.date :birthday, null: false
      t.timestamps
    end
  end
end

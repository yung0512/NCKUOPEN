# frozen_string_literal: true

# user registration order
class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :competition, null: false
      t.references :user, null: false
      t.timestamps
    end
  end
end

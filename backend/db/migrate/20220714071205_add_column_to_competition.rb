# frozen_string_literal: true

# add new column to competition
class AddColumnToCompetition < ActiveRecord::Migration[7.0]
  def change
    add_column :competitions, :status, :string, default: 'pending', null: false
  end
end

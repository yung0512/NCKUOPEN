# frozen_string_literal: true

# create table: competitions
class CreateCompetitions < ActiveRecord::Migration[7.0]
  def change
    create_table :competitions do |t|
      t.string :title
      t.datetime :start_at
      t.timestamps
    end
  end
end

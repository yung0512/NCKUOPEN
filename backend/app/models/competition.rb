# frozen_string_literal: true

class Competition < ApplicationRecord
  attr_accessible :title, :start_at, :end_at
  has_many :orders, dependent: :destroy
end

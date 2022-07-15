# frozen_string_literal: true

class Competition < ApplicationRecord
  has_many :orders, dependent: :destroy

  validates :status, inclusion: { in: %w[pending in_progress finished] }

  scope :active, -> { where(status: 'in_progress').first }
end

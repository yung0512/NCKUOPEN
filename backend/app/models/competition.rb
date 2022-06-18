# frozen_string_literal: true

class Competition < ApplicationRecord
  # security (i.e. attr_accessible) ...........................................
  attr_accessible :title, :start_at, :end_at
end

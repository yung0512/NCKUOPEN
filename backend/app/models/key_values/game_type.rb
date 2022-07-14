# frozen_string_literal: true

module KeyValues
  class GameType < KeyValue
    belongs_to :game_type_group, foreign_key: :group_id, class_name: 'KeyValues::GameTypeGroup'
  end
end

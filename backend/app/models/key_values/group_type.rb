# frozen_string_literal: true

module KeyValues
  # GameType is a KeyValue model that represents the game type.
  class GroupType < KeyValue
    self.data = [
      { id: 1, name: '一般組', value: 'normal' },
      { id: 2, name: '青年組', value: 'midlife' },
      { id: 3, name: '壯年組', value: 'mature' },
      { id: 4, name: '校內組', value: 'intramural' },
    ]
  end
end

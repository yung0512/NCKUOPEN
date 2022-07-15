# frozen_string_literal: true

module KeyValues
  # GameType is a KeyValue model that represents the game type.
  class GameType < KeyValue
    self.data = [
      { id: 1, name: '男子單打', value: 'men_single' },
      { id: 2, name: '女子單打', value: 'women_single' },
      { id: 3, name: '男子雙打', value: 'men_double' },
      { id: 4, name: '女子雙打', value: 'women_double' },
      { id: 5, name: '混合雙打', value: 'mix_double' }
    ]
  end
end

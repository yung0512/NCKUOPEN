# frozen_string_literal: true

class BuildOrderGames
  def initialize(order)
    @order = order
  end

  def execute(order_games)
    order_games.each do |order_game|
      group_type = KeyValues::GroupType.find_by(value: order_game[:group_type])
      game_type = KeyValues::GameType.find_by(value: order_game[:game_type])

      new_order_game = @order.order_games.new(
        group_type: group_type,
        game_type: game_type
      )

      order_game[:player].each do |player|
        new_player = Player.find_or_initialize_by(identification_code: player[:identification_code])
        new_player.update(player.except(:identification_code).permit(:name, :email, :mobile, :birthday))
        new_order_game.players << new_player
      end
    end

    @order.save
  end
end

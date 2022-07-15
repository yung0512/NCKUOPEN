# frozen_string_literal: true

module Admin
  # admin order page
  class OrdersController < Admin::AppController
    def index
      render(json: { orders: orders_info })
    end

    private

    def params
      @params ||= params.permit(:per, :page)
    end

    def orders
      @orders ||= Order.includes(:user, :competition, { order_games: :players }).order(id: :asc).page(params[:page]).per(10)
    end

    def orders_info
      @orders_info ||= orders.map do |order|
        {
          id: order.id,
          user_name: order.user.name,
          order_games: order.order_games.map do |order_game|
            {
              group_type: order_game.group_type.name,
              game_type: order_game.game_type.name,
              players: order_game.players.map do |player|
                {
                  name: player.name,
                  email: player.email,
                  mobile: player.mobile,
                  birthday: player.birthday
                }
              end
            }
          end
        }
      end
    end
  end
end

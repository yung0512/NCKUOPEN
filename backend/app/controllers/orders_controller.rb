# frozen_string_literal: true

# dealing with orders action
class OrdersController < ApplicationController
  before_action :authenticate_user_token

  def create
    @order = Order.new(order_params)
    @order.user = current_user
    @order.competition = Competition.active
    BuildOrderGames.new(@order).execute(order_game_params)

    render(json: { success: true })
  end

  private

  def order_game_params
    @order_game_params ||= params.require(:order_games)
  end

  def order_params
    @order_params ||= params.permit(:affliate_unit)
  end
end

import React from "react"

import { userSelector } from "@redux/selectors/registrationSelectors"
import { actions as registrationActions } from "@redux/slices/registrationSlice"
import styles from "@styles/components/UserBlock.module.scss"
import { Order } from "@redux/slices/admin/orderSlice"

interface OrderBlockProps {
  order: Order
}

const OrderBlock = (props: OrderBlockProps) => {
  const { order } = props
  return (
    <div>
      <div>
        <h3>訂單編號：{order.id}</h3>
        <h4>聯絡人:{order.userName}</h4>
        {order.orderGames.map((game, index) => (
          <div key={index.toString()}>
            <div>項目：{game.groupType + game.gameType}</div>
            <div>
              {game.players.map((p, index2) => (
                <div key={index2.toString()}>
                  <div>選手{index2 + 1}</div>
                  <div>{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderBlock

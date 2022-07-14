import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  registrationSelector,
  userSelector,
} from "@redux/selectors/registrationSelectors"
import styles from "@styles/components/OrderGameTable.module.scss"
import {
  groupOptions,
  gameTypeOptions,
} from "@components/pages/registration/OrderGameInputBlock"

const OrderGameTable = () => {
  const user = useSelector(userSelector)
  const registration = useSelector(registrationSelector)
  const { orderGames, currentRegisterStatus } = registration
  const filterOrderGames = orderGames
    .filter((game) => String(game.gameType).includes(currentRegisterStatus))
    .map((game) => {
      return game.player.map((player) => ({
        group: groupOptions.find((o) => o.value === game.groupType)?.label,
        gameType:
          String(groupOptions.find((o) => o.value === game.groupType)?.label) +
          String(gameTypeOptions.find((o) => o.value === game.gameType)?.label),
        name: player.name,
      }))
    })
    .flat()

  return (
    <div className={styles["order-game-table"]}>
      <h1>OrderGameTable</h1>
      {registration.currentRegisterStatus}
      <table>
        <thead>
          <tr>
            <td>組別</td>
            <td>項目</td>
            <td>姓名</td>
          </tr>
        </thead>
        <tbody>
          {filterOrderGames.map((game, index) => (
            <tr key={game.name.toString()}>
              <td>{game.group}</td>
              <td>{game.gameType}</td>
              <td>{game.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderGameTable

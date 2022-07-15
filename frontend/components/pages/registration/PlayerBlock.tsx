import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import DatePicker from "react-datepicker"
import moment from "moment"

import {
  registrationSelector,
  userSelector,
} from "@redux/selectors/registrationSelectors"
import {
  actions as registrationActions,
  Player,
} from "@redux/slices/registrationSlice"
import style from "@styles/components/PlayerBlock.module.scss"

interface PlayerBlockProps {
  player: Player
  setPlayer: (player: Player) => void
}

const PlayerBlock = (props: PlayerBlockProps) => {
  const { player, setPlayer } = props
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const registration = useSelector(registrationSelector)
  const [date, setDate] = useState(new Date())

  const onDatePickerChange = (date: Date) => {
    setDate(date)
    const newPlayer: Player = {
      ...player,
      birthday: moment(date).format("YYYY-MM-DD"),
    }
    setPlayer(newPlayer)
  }

  return (
    <div className={style["player-block"]}>
      <div>
        <label htmlFor="player-name">姓名</label>
        <input
          id="player-name"
          placeholder="選手姓名"
          value={player?.name}
          onChange={(e) => {
            const newPlayer = {
              ...player,
              name: e.target.value,
            }
            setPlayer(newPlayer)
          }}
        />
      </div>
      <div>
        <label htmlFor="player-code">身份證字號</label>
        <input
          id="player-code"
          placeholder="選手身份證字號"
          value={player?.identificationCode}
          onChange={(e) => {
            const newPlayer = {
              ...player,
              identificationCode: e.target.value,
            }
            setPlayer(newPlayer)
          }}
        />
      </div>
      <div>
        <label htmlFor="player-birth">生日</label>
        <DatePicker
          selected={date}
          dateFormat="yyyy/MM/dd"
          onChange={onDatePickerChange}
          value={player?.birthday.toString()}
        />
      </div>
    </div>
  )
}

export default PlayerBlock

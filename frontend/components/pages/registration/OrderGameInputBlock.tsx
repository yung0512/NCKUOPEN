import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Select from "react-select"

import styles from "@styles/components/UserBlock.module.scss"
import {
  registrationSelector,
  userSelector,
} from "@redux/selectors/registrationSelectors"
import {
  defaultPlayer,
  Player,
  RegisterStatus,
} from "@redux/slices/registrationSlice"
import {
  OrderGameGroupOptionType,
  OrderGameTypeOptionType,
} from "types/registration"
import { OptionType } from "types/types"
import { actions as registrationActions } from "@redux/slices/registrationSlice"
import PlayerBlock from "@components/pages/registration/PlayerBlock"

export const groupOptions = [
  { label: "一般組", value: OrderGameGroupOptionType.NORMAL },
  { label: "校內組", value: OrderGameGroupOptionType.INTRAMURAL },
  { label: "青年組", value: OrderGameGroupOptionType.MIDLIFE },
  { label: "壯年組", value: OrderGameGroupOptionType.MATURE },
]

export const gameTypeOptions = [
  { label: "女子單打", value: OrderGameTypeOptionType.WOMEN_SINGLE },
  { label: "男子單打", value: OrderGameTypeOptionType.MEN_SINGLE },
  { label: "女子雙打", value: OrderGameTypeOptionType.WOMEN_DOUBLE },
  { label: "男子雙打", value: OrderGameTypeOptionType.MEN_DOUBLE },
  { label: "混合雙打", value: OrderGameTypeOptionType.MIX_DOUBLE },
]

const OrderGameInputBlock = () => {
  const user = useSelector(userSelector)
  const registration = useSelector(registrationSelector)
  const dispatch = useDispatch()
  const [gameOptions, setGameOptions] = useState<OptionType[]>([])
  const { currentRegisterStatus, editingOrderGame } = registration

  const createPlayerNumber = () => {
    switch (currentRegisterStatus) {
      case RegisterStatus.CREATE_DOUBLE:
        return 2
      case RegisterStatus.CREATE_GROUP:
        return 8
      case RegisterStatus.CREATE_SINGLE:
        return 1
      default:
        return 0
    }
  }

  const [playerInfos, setPlayerInfos] = useState<Player[]>(
    Array(createPlayerNumber()).fill(defaultPlayer)
  )

  const createGameOptions = (group?: { label: string; value: string }) => {
    if (group) {
      const newGameOptions = gameTypeOptions
        .filter((option) => option.value.includes(currentRegisterStatus))
        .map((option) => {
          return {
            label: group.label + option.label,
            value: option.value,
          }
        })
      return setGameOptions(newGameOptions)
    }

    setGameOptions([])
  }

  const onSelectGroupOption = (o: OptionType | null) => {
    if (o) {
      createGameOptions(o)
      dispatch(
        registrationActions.setEditingOrderGame({
          groupType: o.value as OrderGameGroupOptionType,
        })
      )
    }
  }

  const onSelectGameTypeOption = (o: OptionType | null) => {
    if (o) {
      dispatch(
        registrationActions.setEditingOrderGame({
          gameType: o.value as OrderGameTypeOptionType,
        })
      )
    }
  }

  const onEditPlayer = (index: number) => (player: Player) => {
    const newPlayerInfos = [...playerInfos]
    newPlayerInfos[index] = player
    setPlayerInfos(newPlayerInfos)
    dispatch(registrationActions.setEditingOrderGamePlayer(playerInfos))
  }

  const onAddPlayer = () => {
    dispatch(registrationActions.setOrderGames(editingOrderGame))
    dispatch(registrationActions.resetEditingOrderGame())
    setPlayerInfos(Array(createPlayerNumber()).fill(defaultPlayer))
  }

  useEffect(() => {
    setPlayerInfos(Array(createPlayerNumber()).fill(defaultPlayer))
  }, [currentRegisterStatus])

  return (
    <div className={styles["user-block"]}>
      <h1>OrderGameInputBlock</h1>
      <div>
        <div>
          <label>組別</label>
          <Select
            isMulti={false}
            id="group-type"
            options={groupOptions}
            onChange={onSelectGroupOption}
            placeholder="請選擇組別"
          />
        </div>
        <div>
          <label>項目</label>
          <Select
            id="game-type"
            options={gameOptions}
            defaultValue={gameOptions[0]}
            onChange={onSelectGameTypeOption}
            placeholder="請選擇項目"
          />
        </div>
      </div>
      <div>
        {playerInfos.map((_, index) => (
          <PlayerBlock
            key={index.toString()}
            player={playerInfos[index]}
            setPlayer={onEditPlayer(index)}
          />
        ))}
        <button onClick={onAddPlayer}>新增</button>
      </div>
    </div>
  )
}

export default OrderGameInputBlock

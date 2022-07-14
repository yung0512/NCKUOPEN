import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { registrationSelector } from "@redux/selectors/registrationSelectors"
import { RegisterStatus } from "@redux/slices/registrationSlice"
import styles from "@styles/components/RegistrationNav.module.scss"
import {
  createOrder,
  registerUser,
} from "@redux/actions/registration/registrationActions"
import { Dispatch } from "@redux/store"
import { actions as registrationActions } from "@redux/slices/registrationSlice"

const RegistrationNav = () => {
  const registration = useSelector(registrationSelector)
  const dispatch = useDispatch<Dispatch>()
  const { currentRegisterStatus } = registration

  const registrationStatuses =
    currentRegisterStatus === RegisterStatus.NOT_REGISTER
      ? [
          {
            status: "註冊",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.NOT_REGISTER,
            onClick: () => {
              dispatch(registerUser)
            },
          },
        ]
      : [
          {
            status: "報名中",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.REGISTERED,
            onClick: () => {
              dispatch(registerUser)
            },
          },
          {
            status: "單打建檔",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.CREATE_SINGLE,
            onClick: () => {
              dispatch(
                registrationActions.setCurrentRegisterStatus(
                  RegisterStatus.CREATE_SINGLE
                )
              )
            },
          },
          {
            status: "雙打建檔",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.CREATE_DOUBLE,
            onClick: () => {
              dispatch(
                registrationActions.setCurrentRegisterStatus(
                  RegisterStatus.CREATE_DOUBLE
                )
              )
            },
          },
          {
            status: "團體建檔",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.CREATE_GROUP,
            onClick: () => {
              dispatch(
                registrationActions.setCurrentRegisterStatus(
                  RegisterStatus.CREATE_GROUP
                )
              )
            },
          },
          {
            status: "組數統計",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.GAMES_COUNT,
            onClick: () => {
              console.log("組數統計")
            },
          },
          {
            status: "報名完成",
            isCurrentStatus:
              currentRegisterStatus === RegisterStatus.COMPLETE_REGISTER,
            onClick: () => {
              dispatch(createOrder)
            },
          },
        ]

  return (
    <div className={styles["registration-nav"]}>
      <h1>報名頁</h1>
      <div className={styles["status-block__container"]}>
        {registrationStatuses.map((statusItem, index) => {
          return (
            <div className={styles["status-block"]} key={statusItem.status}>
              <div
                className={styles["status-block__item"]}
                onClick={statusItem.onClick}
              >
                <span>{statusItem.status}</span>
              </div>
              {index !== registrationStatuses.length - 1 && <span>&rarr;</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RegistrationNav

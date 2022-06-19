import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { registrationSelector } from "../../../redux/selectors/registrationSelectors"
import { RegisterStatus } from "../../../redux/slices/registrationSlice"
import styles from "../../../styles/components/RegistrationNav.module.scss"
import { registerUser } from "../../../redux/actions/registration/registrationActions"
import { Dispatch } from "../../../redux/store"

const RegistrationNav = () => {
  const registration = useSelector(registrationSelector)
  const dispatch = useDispatch<Dispatch>()
  const { currentRegisterStatus } = registration

  const registrationStatuses =
    currentRegisterStatus === RegisterStatus.NOT_REGISTER
      ? [
          {
            status: "註冊",
            isCurrentStatus: false,
            onClick: () => {
              dispatch(registerUser)
            },
          },
        ]
      : [
          {
            status: "報名中",
            isCurrentStatus: false,
            onClick: () => {
              dispatch(registerUser)
            },
          },
          {
            status: "單打建檔",
            isCurrentStatus: false,
            onClick: () => {
              console.log("單打建檔")
            },
          },
          {
            status: "雙打建檔",
            isCurrentStatus: false,
            onClick: () => {
              console.log("雙打建檔")
            },
          },
          {
            status: "團體建檔",
            isCurrentStatus: false,
            onClick: () => {
              console.log("團體建檔")
            },
          },
          {
            status: "組數統計",
            isCurrentStatus: false,
            onClick: () => {
              console.log("組數統計")
            },
          },
          {
            status: "報名完成",
            isCurrentStatus: false,
            onClick: () => {
              console.log("報名完成")
            },
          },
        ]

  const handleStatusClick = (status: string) => {}

  console.log(registration.currentRegisterStatus)
  return (
    <div className={styles["registration-nav"]}>
      <h1>報名頁</h1>
      <div className={styles["status-block__container"]}>
        {registrationStatuses.map((statusItem, index) => {
          return (
            <div className={styles["status-block"]} key={statusItem.status}>
              <div
                className={styles["status-block__item"]}
                onClick={() => {
                  handleStatusClick(statusItem.status)
                }}
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

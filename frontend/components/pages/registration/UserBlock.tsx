import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { userSelector } from "@redux/selectors/registrationSelectors"
import { actions as registrationActions } from "@redux/slices/registrationSlice"
import styles from "@styles/components/UserBlock.module.scss"

const UserBlock = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const { isRegistered } = user

  return (
    <div className={styles["user-block"]}>
      <h1>Registration Form</h1>
      <div className={styles["user-block__content"]}>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_name">
            聯絡人
          </label>
          <input
            type="text"
            placeholder="請輸入姓名"
            id="user_name"
            value={user.name}
            onChange={(e) => {
              dispatch(registrationActions.setUser({ name: e.target.value }))
            }}
            disabled={isRegistered}
          />
        </div>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_mobile">
            聯絡電話
          </label>
          <input
            type="phone"
            placeholder="請輸入手機"
            id="user_mobile"
            value={user.mobile}
            onChange={(e) => {
              dispatch(registrationActions.setUser({ mobile: e.target.value }))
            }}
            disabled={isRegistered}
          />
        </div>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_email">
            Email
          </label>
          <input
            type="email"
            placeholder="請輸入信箱"
            id="user_email"
            value={user.email}
            onChange={(e) => {
              dispatch(registrationActions.setUser({ email: e.target.value }))
            }}
            disabled={isRegistered}
          />
        </div>
      </div>
    </div>
  )
}

export default UserBlock

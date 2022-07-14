import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { userSelector } from "@redux/selectors/registrationSelectors"
import styles from "@styles/components/UserBlock.module.scss"

const UserBlock = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  return (
    <div className={styles["user-block"]}>
      <h1>Registration Form</h1>
      <div className={styles["user-block__content"]}>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_name">
            聯絡人
          </label>
          <input type="text" placeholder="請輸入姓名" id="user_name" />
        </div>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_mobile">
            聯絡電話
          </label>
          <input type="phone" placeholder="請輸入手機" id="user_mobile" />
        </div>
        <div className={styles["input_group"]}>
          <label className="input_label" htmlFor="user_email">
            Email
          </label>
          <input type="email" placeholder="請輸入信箱" id="user_email" />
        </div>
      </div>
    </div>
  )
}

export default UserBlock

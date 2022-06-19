import { NextPage } from "next"
import { useSelector, useDispatch } from "react-redux"

import { registrationSelector } from "../redux/selectors/registrationSelectors"
import UserBlock from "../components/pages/registration/UserBlock"
import RegistrationNav from "../components/pages/registration/RegistrationNav"
import styles from "../styles/pages/Registration.module.scss"

const RegistrationPage: NextPage = () => {
  const registrationInfo = useSelector(registrationSelector)

  console.log(registrationInfo)
  return (
    <div className={styles["registration"]}>
      <h1>報名頁</h1>
      <UserBlock />
      <RegistrationNav />
    </div>
  )
}

export default RegistrationPage

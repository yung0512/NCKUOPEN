import { NextPage } from "next"
import { useSelector, useDispatch } from "react-redux"

import { registrationSelector } from "@redux/selectors/registrationSelectors"
import UserBlock from "@components/pages/registration/UserBlock"
import RegistrationNav from "@components/pages/registration/RegistrationNav"
import styles from "@styles/pages/Registration.module.scss"
import OrderGameInputBlock from "@components/pages/registration/OrderGameInputBlock"
import OrderGameTable from "@components/pages/registration/OrderGameTable"
import { RegisterStatus } from "@redux/slices/registrationSlice"
import PlayerBlock from "@components/pages/registration/PlayerBlock"

const showOrderGameTableStatuses = [
  RegisterStatus.CREATE_DOUBLE,
  RegisterStatus.CREATE_GROUP,
  RegisterStatus.CREATE_SINGLE,
]

const RegistrationPage: NextPage = () => {
  const registrationInfo = useSelector(registrationSelector)
  const { currentRegisterStatus } = registrationInfo
  const showOrderGameTable = showOrderGameTableStatuses.includes(
    currentRegisterStatus
  )

  return (
    <div className={styles["registration"]}>
      <h1>報名頁</h1>
      <UserBlock />
      <RegistrationNav />
      {showOrderGameTable && <OrderGameInputBlock />}
      {showOrderGameTable && <OrderGameTable />}
    </div>
  )
}

export default RegistrationPage

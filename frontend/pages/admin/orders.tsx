import { useEffect } from "react"
import { useSelector } from "react-redux"
import type { NextPage } from "next"

import { fetchOrders } from "@redux/actions/admin/orderActions"
import { adminOrderSelector } from "@redux/selectors/admin/orderSelectors"
import { useAppDispatch } from "@redux/store"
import OrderBlock from "@components/pages/admin/order/OrderBlock"

const Orders: NextPage = () => {
  const dispatch = useAppDispatch()
  const { orders } = useSelector(adminOrderSelector)
  console.log(orders)

  useEffect(() => {
    dispatch(fetchOrders(1, 10))
  }, [])

  return (
    <>
      {orders.map((order) => (
        <OrderBlock order={order} />
      ))}
    </>
  )
}

export default Orders

import { useState, useEffect } from "react"
import { cartState } from "../../atom"
import { useRecoilValue } from "recoil"
import CartEmpty from "./CartEmpty"
import CartNotEmpty from "./CartNotEmpty/CartNotEmpty"

const Cart = () => {
  const items = useRecoilValue(cartState)
  const [itemList, setItemList] = useState(items)

  useEffect(() => {
    setItemList(items)
  }, [items])
  return (
    <div className="py-4 px-40">{itemList.length !== 0 ? <CartNotEmpty /> : <CartEmpty />}</div>
  )
}

export default Cart

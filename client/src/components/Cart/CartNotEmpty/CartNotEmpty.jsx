import { useState } from "react"
import { cartState, billState } from "../../../atom"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Bill from "./Bill"
import CartItem from "./CartItem"

const CartNotEmpty = () => {
  return (
    <>
      <h2 className="text-2xl">Your Cart</h2>
      <div className="flex gap-16">
        <div className="flex flex-col gap-2 divide-y-2 divide-dashed divide-yellow-600 w-3/5 py-2">
          <CartItems />
        </div>
        <div className="w-2/5">
          <Bill />
        </div>
      </div>
    </>
  )
}

export default CartNotEmpty

function CartItems() {
  const [items, setItems] = useRecoilState(cartState)

  const deleteItem = (slug) => {
    const newCartItems = items.filter((item) => item.slug !== slug)
    setItems(newCartItems)
  }

  return items.map((item, index) => {
    return <CartItem key={index} {...item} deleteItem={deleteItem} />
  })
}

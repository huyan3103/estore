import { atom } from "recoil"

export const cartState = atom({
  key: "cartList",
  default: [],
})

export const billState = atom({
  key: "billState",
  default: 0,
})

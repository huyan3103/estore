import { selector } from "recoil"
import axios from "axios"

export const itemsListState = selector({
  key: "itemsListState",
  get: async () => {
    const items = await axios.get("http://localhost:5000/api/product")
    return items
  },
})

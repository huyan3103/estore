import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { itemsListState } from "../../selector"
import Item from "../Item/Item"

const ListItem = () => {
  const [products, setProducts] = useState([])
  const items = useRecoilValue(itemsListState)
  useEffect(() => {
    setProducts(items.data)
  }, [])
  return (
    <>
      {products.map((product) => {
        return <Item key={product._id} product={product} />
      })}
    </>
  )
}

export default ListItem

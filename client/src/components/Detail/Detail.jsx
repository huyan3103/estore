import UpperDetail from "./UpperDetail"
import LowerDetail from "./LowerDetail"
import { bao_hanh, doi_tra } from "./cotent"
import { useParams } from "react-router-dom"
import { itemsListState } from "../../selector"
import { useRecoilValue } from "recoil"

const Detail = () => {
  const { slug } = useParams()
  const itemList = useRecoilValue(itemsListState)
  const itemDetail = itemList.find((item) => item.slug == slug)
  return (
    <div className="w-full py-6">
      <UpperDetail itemDetail={itemDetail} />
      <hr></hr>
      <LowerDetail />
    </div>
  )
}

const formatPrice = (money) => {
  let price = money.split("")
  let length
  if (money.length / 3 > 2 && money.length % 3 !== 0) length = money.length / 3
  else if (money.length / 3 > 2 && money.length % 3 === 0) length = money.length / 3 - 1
  else if (money.length / 3 > 1) length = 1
  else length = 0
  for (let i = 1; i <= length; i++) {
    if (i === 1) price.splice(i * -3, 0, ".")
    else price.splice(i * -4 + 1, 0, ".")
  }
  price = price.join("")
  return price
}

export default Detail

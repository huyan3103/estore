import "./Item.css"
import { useHistory } from "react-router-dom"

const Item = (props) => {
  const history = useHistory()
  const { name, price, descripton, img, slug } = props.product

  function seeDetail() {
    history.push(`/product/${slug}`)
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

  return (
    <div className="item">
      <div className="item-img">
        <img alt="laptop" src={img[0]}></img>
      </div>
      <div className="item-info">
        <div>
          <a href="/">{name}</a>
        </div>
        <div>
          <p>{descripton}</p>
          <p>{formatPrice(price)}đ</p>
        </div>
      </div>
      <button type="button" onClick={seeDetail}>
        Click me
      </button>
    </div>
  )
}

export default Item

import "./cart.css"
import { useState, useEffect } from "react"
import { cartState, billState } from "../../state"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { useHistory } from "react-router-dom"

const Cart = () => {
  const items = useRecoilValue(cartState)
  const [itemList, setItemList] = useState(items)

  useEffect(() => {
    setItemList(items)
  }, [items])
  return <div className="cart">{itemList.length !== 0 ? <CartNotEmpty /> : <CartEmpty />}</div>
}

export default Cart

function CartNotEmpty() {
  return (
    <>
      <h3>Your Cart</h3>
      <div className="cart1">
        <div className="cart-items">
          <CartItems />
        </div>
        <div className="bill1">
          <Bill />
        </div>
      </div>
    </>
  )
}

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

function CartItem(props) {
  const { name, sku, imgURL, deleteItem, slug, price } = props
  const [quantity, setQuantity] = useState(1)
  const setBillState = useSetRecoilState(billState)

  const incre = () => {
    setQuantity((prevState) => prevState + 1)
    setBillState((prevPrice) => prevPrice + parseInt(price))
  }

  const decre = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1)
      setBillState((prevPrice) => prevPrice - parseInt(price))
    }
  }

  const remove = () => {
    deleteItem(slug)
    setBillState((prevPrice) => prevPrice - quantity * parseInt(price))
  }

  return (
    <div className="cart-list">
      <div className="cart-item-img">
        <img src={imgURL} alt=""></img>
      </div>
      <div className="cart-item-infor">
        <div className="cart-item-name-id">
          <h3>{name}</h3>
          <p>SKU:{sku}</p>
        </div>
        <div className="cart-item-btn">
          <button type="button" onClick={decre}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={incre}>
            +
          </button>
        </div>
        <div>
          <p>{formatPrice(price)} VNĐ</p>
          <button type="button" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

function Bill() {
  const billPrice = useRecoilValue(billState)

  return (
    <div className="bill">
      <h4>Bill</h4>
      <div className="line1"></div>
      <div className="bill-discount">
        <h4>Add Discount Code</h4>
        <input type="text" autoComplete="off"></input>
        <button type="button">Apply</button>
      </div>
      <div className="billtemp1">
        <div>
          <h4>Order</h4>
          <p>{formatPrice(billPrice.toString())}</p>
        </div>
        <div>
          <h4>Discount</h4>
          <p>Price</p>
        </div>
      </div>
      <div className="temp-total-price">
        <h3>Temp Price</h3>
        <p>Price</p>
      </div>
      <div className="bill-btn">
        <button type="button" className="continute">
          Continute
        </button>
      </div>
    </div>
  )
}

function CartEmpty() {
  const history = useHistory()
  const handleBack = () => {
    history.push("/")
  }
  return (
    <div>
      <h2>Your Cart</h2>
      <p>Your Cart Is Empty</p>
      <button type="button" onClick={handleBack}>
        Back to store
      </button>
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

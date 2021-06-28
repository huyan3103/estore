import "./Detail.css"
import { bao_hanh, doi_tra } from "./cotent"
import { cartState, billState } from "../../state"
import { useState, useEffect } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"

const Detail = () => {
  const [data, setData] = useState()
  const { slug } = useParams()
  useEffect(() => {
    async function getDataItem() {
      const products = await axios.get(`http://localhost:5000/api/product/${slug}`)
      setData(products.data)
    }
    getDataItem()
  }, [])
  return (
    <>
      {data && <DetailUp data={data} />}
      <DetailDown />
    </>
  )
}

function DetailUp(props) {
  const { name, img, description, slug, price } = props.data
  const [image, setImage] = useState(img[0])
  const history = useHistory()
  const setBillPrice = useSetRecoilState(billState)
  const [cartItems, setCartItems] = useRecoilState(cartState)

  const updateCart = () => {
    const checkItemIndex = cartItems.findIndex((item) => item.slug === slug)
    if (checkItemIndex === -1) {
      setCartItems([...cartItems, { name, imgURL: img[0], slug, price }])
      setBillPrice((prevPrice) => prevPrice + parseInt(price))
    }
  }

  const buyItem = () => {
    updateCart()
    history.push("/cart")
  }

  return (
    <div className="detail">
      <div className="detail-image">
        <div className="detail-image-display">
          <img src={image} alt=""></img>
        </div>
        <div className="detail-image-list">
          {img.map((image, index) => {
            return (
              <img key={index} src={image} alt="" onMouseOver={(e) => setImage(e.target.src)}></img>
            )
          })}
        </div>
      </div>
      <div className="detail-infor">
        <h2>{name}</h2>
        <div className="detail-brand-sku">
          <span>Brand:</span>
          <span
            style={{
              border: "0.5px solid black",
            }}
          ></span>
          <span>SKU:</span>
        </div>
        <span className="detail-price">{formatPrice(price)}đ</span>
        <div className="detail-description">
          <pre>{description}</pre>
        </div>
        <div className="buy-cart">
          <button type="buttom" onClick={buyItem}>
            Buy
          </button>
          <button type="button" onClick={updateCart}>
            Cart
          </button>
        </div>
      </div>
    </div>
  )
}

function DetailDown() {
  return (
    <div>
      <div className="smt-1">
        <div className="refund">
          <h3>Refund</h3>
          <pre>{doi_tra}</pre>
        </div>
        <div className="guarantee">
          <h3>Guarantee</h3>
          <pre>{bao_hanh}</pre>
        </div>
      </div>
      <div className="stm-2">
        <div>
          <h3>Specifications</h3>
        </div>
      </div>
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

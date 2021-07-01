import { bao_hanh, doi_tra } from "./cotent"
import { cartState, billState } from "../../state"
import { useState, useEffect, useRef } from "react"
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
    <div className="w-full px-52">
      {data && <DetailUp data={data} />}
      {/* <DetailDown /> */}
    </div>
  )
}

function DetailUp(props) {
  const { name, img, description, slug, price } = props.data
  const [image, setImage] = useState(img[0])
  const history = useHistory()
  const setBillPrice = useSetRecoilState(billState)
  const [cartItems, setCartItems] = useRecoilState(cartState)
  const selectSize = useRef()

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
    <div className="mt-8 flex gap-16">
      <div style={{ height: "500px", width: "500px" }}>
        <img className="h-full w-full" src={img[0]}></img>
      </div>
      <div>
        <h4>GIÀY NMD_R1 PRIMEBLUE</h4>
        <p>Status: New Arrival</p>
        <p>490.000 VND</p>
        <div>
          <p>Select size</p>
          <button type="button" className="border h-10 w-64 group">
            <span className="flex pl-2 items-center w-full">
              <span className="">35</span>
              <span ref={selectSize} className="ml-auto mr-2 transform transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </button>
          <div className="w-64 h-10 border grid grid-cols-4 gap-8">
            <button className="h-10 w-10 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
            <button className="h-8 w-8 border">1</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// function DetailDown() {
//   return (
//     <div>
//       <div className="smt-1">
//         <div className="refund">
//           <h3>Refund</h3>
//           <pre>{doi_tra}</pre>
//         </div>
//         <div className="guarantee">
//           <h3>Guarantee</h3>
//           <pre>{bao_hanh}</pre>
//         </div>
//       </div>
//       <div className="stm-2">
//         <div>
//           <h3>Specifications</h3>
//         </div>
//       </div>
//     </div>
//   )
// }

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

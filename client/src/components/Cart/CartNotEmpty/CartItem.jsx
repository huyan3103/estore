import { useState } from "react"
import { billState } from "../../../atom"
import { useSetRecoilState } from "recoil"

function CartItem(props) {
  const { name, sku, imgURL, deleteItem, slug, price } = props
  const [quantity, setQuantity] = useState(1)
  const setBillState = useSetRecoilState(billState)
  const [isSizeOpen, setIsSizeOpen] = useState(false)
  const [isQuantityOpen, setIsQuantityOPen] = useState(false)

  const changeQuantity = (e) => {
    let newMoney
    if (parseInt(e.target.value) !== quantity)
      newMoney = (parseInt(e.target.value) - quantity) * price
    setQuantity(parseInt(e.target.value))
    setBillState((prevPrice) => prevPrice + newMoney)
    setIsQuantityOPen(false)
  }

  const remove = () => {
    deleteItem(slug)
    setBillState((prevPrice) => prevPrice - quantity * parseInt(price))
  }

  return (
    <div className="flex gap-4 p-4 pl-0">
      <div className="h-48 w-48">
        <img className="h-full w-full" src={imgURL} alt=""></img>
      </div>
      <div className="flex">
        <div className="py-3">
          <p className="text-2xl">{name}</p>
          <p className="text-lg mt-2">SKU:{sku}</p>
          <p className="text-md mt-2">Color</p>
          <div className="mt-6 flex gap-4">
            <div className="relative">
              <button
                className="w-36 py-2 border border-gray-900"
                onClick={() => setIsSizeOpen((prevState) => !prevState)}
              >
                <span className="font-semibold">1</span>
              </button>
              {isSizeOpen && (
                <div className="absolute border-2 border-gray-500 w-48 grid grid-cols-4 gap-1 p-1 bg-white mt-1">
                  <button className="border border-gray-900 h-10">1</button>
                  <button className="border border-gray-900 h-10">1</button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="w-36 py-2 border border-gray-900"
                onClick={() => setIsQuantityOPen((prevState) => !prevState)}
              >
                <span className="font-semibold">{quantity}</span>
              </button>
              {isQuantityOpen && (
                <div className="absolute border-2 border-gray-500 w-48 grid grid-cols-4 gap-1 p-1 bg-white mt-1">
                  {[...Array(12)].map((value, index) => (
                    <button
                      key={index}
                      className="border border-gray-900 h-10"
                      value={index + 1}
                      onClick={changeQuantity}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 w-48">
        <p className="font-black text-xl mt-6">
          {parseFloat(price * quantity).toLocaleString("vn-VN")}
          <sup>đ</sup>
        </p>
        <div className="mt-10 flex flex-col gap-2">
          <button type="button" className="border border-gray-900 w-full h-10 ">
            Favorite
          </button>
          <button type="button" onClick={remove} className="border border-gray-900 w-full h-10">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

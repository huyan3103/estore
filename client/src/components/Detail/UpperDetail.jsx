import { useState } from "react"
import { useHistory } from "react-router-dom"
import { billState, cartState } from "../../atom"
import { useRecoilState, useSetRecoilState } from "recoil"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Navigation } from "swiper/core"

SwiperCore.use([Navigation])

function UpeerDetail(props) {
  const { name, img, description, slug, price } = props.itemDetail
  const [image, setImage] = useState(img[0])
  const history = useHistory()
  const setBillPrice = useSetRecoilState(billState)
  const [cartItems, setCartItems] = useRecoilState(cartState)
  const [size, setSize] = useState("")
  const [isSizeOpen, setIsSizeOpen] = useState(false)

  const updateCart = () => {
    const checkItemIndex = cartItems.findIndex((item) => item.slug === slug)
    if (checkItemIndex === -1) {
      setCartItems([...cartItems, { name, imgURL: img[0], slug, price }])
      setBillPrice((prevPrice) => prevPrice + parseInt(price))
    }
  }

  const handleSelectSize = (e) => {
    setSize(e.target.value)
    setIsSizeOpen(false)
  }

  const buyItem = () => {
    updateCart()
    history.push("/cart")
  }

  return (
    <div className="flex gap-12 flex-col md:flex-row px-52">
      <div style={{ height: "550px", width: "550px" }}>
        <img className="h-full w-full" src={image}></img>
        <Swiper navigation={true} slidesPerView={4} spaceBetween={10} className="mt-8">
          {img.map((value) => (
            <SwiperSlide>
              <img
                src={value}
                alt=""
                style={{ height: "130px", width: "100%" }}
                onClick={() => setImage(value)}
                className="cursor-pointer"
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex-1">
        <h4 className="text-4xl font-semibold py-2">GIÀY NMD_R1 PRIMEBLUE</h4>
        <p className="text-lg py-2 ">Status: New Arrival</p>
        <p className="text-xl pt-1 pb-2 font-black">490.000 VND</p>
        <p className="font-semibold leading-6">
          Sử dụng các đường chỉ 6 màu trên lá cờ Pride Flag, đại diện cho những đường “biên giới”
          giữa các giới tính. “Borderless” mang ý nghĩa của sự giao thoa nhằm xoá nhoà các đường
          “biên giới”, hướng đến tình yêu bao dung cho tất cả mọi người. Urbas Borderless sở hữu
          quai dán tiện lợi trên nền chất liệu da chính cao cấp Cachemera Soft Nappa, bề mặt da nhăn
          tạo cảm giác tự nhiên, nhã nhặn. Các mảng da Suede khác màu tạo điểm nhấn cùng phom dáng
          mới có phần “mũm mĩm” hứa hẹn tạo cảm giác êm chân và thoải mái khi mang. Tất cả yếu tố
          trên đã tạo nên một phiên bản kỉ niệm Pride Month 2021 vừa đặc biệt lại không kém phần ý
          nghĩa với thông điệp Love for all, all for love hướng đến những bạn bên ngoài cộng đồng
          LGBT cũng như ý đồ xoá bỏ lằn ranh giữa cộng đồng LGBT và những người dị tính.
        </p>
        <div className="mt-4 flex gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Select size</p>
            <button
              type="button"
              className="border h-10 w-64 group border-gray-800"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
            >
              <span className="flex pl-2 items-center w-full">
                <span className="">{size}</span>
                <span className="ml-auto mr-2 transform transition duration-300">
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
            {isSizeOpen && (
              <div className="w-64 h-max border grid grid-cols-4 gap-3 p-2 mt-20 border-gray-900 absolute z-50 bg-white">
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="34"
                  onClick={handleSelectSize}
                >
                  34
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="35"
                  onClick={handleSelectSize}
                >
                  35
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="36"
                  onClick={handleSelectSize}
                >
                  36
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="37"
                  onClick={handleSelectSize}
                >
                  37
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="38"
                  onClick={handleSelectSize}
                >
                  38
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="39"
                  onClick={handleSelectSize}
                >
                  39
                </button>
                <button
                  className="border border-gray-900 px-4 py-2"
                  value="40"
                  onClick={handleSelectSize}
                >
                  40
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center pt-8 text-lg underline cursor-pointer">
            <p>Size Chart</p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-8">
            <button
              className="w-96 h-16 text-xl font-black text-white"
              style={{ backgroundColor: "#e81313" }}
              onClick={updateCart}
            >
              Add to Cart
            </button>
            <button className="bg-gray-900 h-16 flex-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <button
            className="bg-gray-900 text-white my-4 w-full h-16 text-xl font-black"
            onClick={buyItem}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpeerDetail

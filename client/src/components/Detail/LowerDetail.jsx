import { itemsListState } from "../../selector"
import { useRecoilValue } from "recoil"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Navigation, Autoplay } from "swiper/core"

SwiperCore.use([Navigation, Autoplay])

function LowerDetail() {
  const items = useRecoilValue(itemsListState)

  return (
    <div className="px-16 pt-4">
      <h2 className="text-4xl mb-4 text-center">May you like it</h2>
      <Swiper
        navigation={true}
        className="border"
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
      >
        {items.map((item) => (
          <SwiperSlide>
            <img src={item.img[0]} alt="" className="w-full" style={{ height: "240px" }}></img>

            <div className="text-center">
              <h5 className="text-md">{item.name}</h5>
              <p>New Arrival</p>
              <p>490.000 VND</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LowerDetail

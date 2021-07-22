import { billState } from "../../../atom"
import { useRecoilValue } from "recoil"

function Bill() {
  const billPrice = useRecoilValue(billState)

  return (
    <div className="border border-gray-900 px-2 pt-2 pb-3 mr-4">
      <h2 className="text-3xl border-b border-gray-900 py-2">Bill</h2>
      <div className="pt-2 pb-8 border-b border-gray-900">
        <p className="text-xl py-2">Add Discount Code</p>
        <input
          className="border border-gray-900 p-1 text-xl"
          type="text"
          autoComplete="off"
        ></input>
        <button type="button" className="ml-2 border border-gray-900 py-1 px-3 text-xl">
          Apply
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex">
          <h4 className="text-xl">Temp price</h4>
          <p className="ml-auto mr-2 text-xl">
            {billPrice.toLocaleString("vn-VN")}
            <sup>đ</sup>
          </p>
        </div>
        <div className="flex pb-2">
          <h4 className="text-xl">Discount</h4>
          <p className="text-xl ml-auto mr-2">
            -{parseInt(100000).toLocaleString("vn-Vn")}
            <sup>đ</sup>
          </p>
        </div>
        <div className="flex border-t border-gray-900 pt-3 pb-2">
          <h4 className="text-xl">Total</h4>
          <p className="ml-auto mr-2 text-xl">
            {parseInt(900000).toLocaleString("vn-VN")}
            <sup>đ</sup>
          </p>
        </div>
      </div>
      <div className="text-center px-10 mt-4">
        <button
          type="button"
          className="continute"
          className="border border-gray-900 w-full py-3 text-lg"
        >
          Continute
        </button>
      </div>
    </div>
  )
}

export default Bill

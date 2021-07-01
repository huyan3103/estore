import { useHistory } from "react-router-dom"

const Items = (props) => {
  const { slug } = props
  const history = useHistory()

  return (
    <div
      className="group mx-auto border p-2 cursor-pointer"
      onClick={() => history.push(`/product/${slug}`)}
    >
      <div className="h-88 w-88 relative">
        <img
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4395e9a7-0d32-422e-8e13-91b075699d09/air-zoom-pegasus-38-running-shoe-Hmsj6Q.png"
          alt=""
          className="w-full h-full"
        ></img>
        <div
          className="animate-opacity bg-yellow-500 font-semibold text-white absolute bottom-0 left-2/4 w-32 h-14 border flex items-center justify-center"
          style={{ marginLeft: "-64px" }}
        >
          Buy
        </div>
      </div>
      <div className="text-center font-semibold mt-4">
        <h3>Nike Air Zoom Pegasus 38</h3>
        <p>Red</p>
        <p>
          3,519,000<sup>₫</sup>
        </p>
      </div>
    </div>
  )
}

export default Items

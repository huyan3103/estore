import { useHistory } from "react-router-dom"

const Items = (props) => {
  const { slug } = props
  const history = useHistory()

  const hanldeClick = () => {
    history.push(`/product/${slug}`)
  }

  return (
    <div className="group mx-auto border p-2 cursor-pointer" onClick={hanldeClick}>
      <div className="h-88 w-88 relative">
        <img
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4395e9a7-0d32-422e-8e13-91b075699d09/air-zoom-pegasus-38-running-shoe-Hmsj6Q.png"
          alt=""
          className="w-full h-full"
        ></img>
      </div>
      <div className="text-center font-semibold mt-3">
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

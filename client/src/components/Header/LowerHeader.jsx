import { Link } from "react-router-dom"
const LowerHeader = () => {
  return (
    <>
      <div className="ml-8 cursor-pointer w-max">
        <Link to="/" className="text-2xl">
          Store
        </Link>
      </div>
      <div className="ml-auto mr-8"></div>
    </>
  )
}

export default LowerHeader

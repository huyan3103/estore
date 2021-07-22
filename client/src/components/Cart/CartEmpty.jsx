import { useHistory } from "react-router-dom"

const CartEmpty = () => {
  const history = useHistory()
  const handleBack = () => {
    history.push("/")
  }
  return (
    <div className="text-center py-20">
      <h2 className="text-5xl px-4 py-6">Cart Is Empty</h2>
      <p className="mb-12 text-lg">You haven't bought anything yet</p>
      <button
        type="button"
        onClick={handleBack}
        className="text-xl px-16 py-4 bg-black text-white rounded-sm"
      >
        Back to store
      </button>
    </div>
  )
}

export default CartEmpty

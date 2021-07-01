import UpperHeader from "./UpperHeader"
import LowerHeader from "./LowerHeader"

const Header = () => {
  return (
    <header className="flex flex-col border-b border-gray-300 shadow">
      <div className="bg-gray-900 flex justify-end p-1">
        <UpperHeader />
      </div>
      <div className="py-4">
        <LowerHeader />
      </div>
    </header>
  )
}

export default Header

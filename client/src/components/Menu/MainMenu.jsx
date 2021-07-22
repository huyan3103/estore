import Items from "../Items/Items"
import { itemsListState } from "../../selector"
import { useRecoilValue } from "recoil"

const MainMenu = () => {
  const itemsList = useRecoilValue(itemsListState)
  return (
    <div className="px-12 py-4 w-full">
      {/* <div className="flex justify-center h-64 w-96">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        ></img>
      </div> */}
      <div className="grid grid-cols-3 gap-8">
        {itemsList.map((item) => (
          <Items key={item._id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default MainMenu

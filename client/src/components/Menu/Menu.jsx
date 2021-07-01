import MainMenu from "./MainMenu"
import SideMenu from "./SideMenu"

const Menu = () => {
  return (
    <div className="flex-1 flex">
      <SideMenu />
      <MainMenu />
    </div>
  )
}

export default Menu

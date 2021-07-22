import MainMenu from "./MainMenu"
import SideMenu from "./SideMenu"

const Menu = () => {
  return (
    <div className="flex-1 flex h-full">
      <SideMenu />
      <MainMenu />
    </div>
  )
}

export default Menu

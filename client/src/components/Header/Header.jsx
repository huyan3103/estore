import "./Header.css"
import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  return (
    <header>
      <div className="header-name" onClick={() => history.push("/")}>
        Store
      </div>
      <div className="header-item">
        <ul className="header-list-item">
          <li onClick={() => history.push("/login")}>Log in</li>
          <li onClick={() => history.push("/cart")}>Cart</li>
        </ul>
      </div>
    </header>
  )
}

export default Header

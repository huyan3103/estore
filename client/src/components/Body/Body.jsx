import "./Body.css"
import ListItem from "../ListItem/ListItem"

const Body = () => {
  return (
    <div className="body">
      <div className="body2">
        <div className="side-menu">
          <SideMenu />
        </div>
        <div className="list-item">
          <ListItem />
        </div>
      </div>
    </div>
  )
}

export default Body

function SideMenu() {
  return (
    <>
      <div>
        <h3>Status</h3>
        <ul>
          <li>Sale off</li>
          <li>Best seller</li>
          <li>New Arrival</li>
        </ul>
      </div>
      <div>
        <h3>Brand</h3>
        <ul>
          <li>Adidas</li>
          <li>Nike</li>
          <li>Uniqlo</li>
        </ul>
      </div>
      <div>
        <h3>Price</h3>
        <ul>
          <li>100k - 200k</li>
          <li>{">"}500k</li>
        </ul>
      </div>
    </>
  )
}

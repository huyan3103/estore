import React from "react"

const SideMenu = () => {
  return (
    <aside className="h-full min-w-xs border p-8">
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
    </aside>
  )
}

export default SideMenu

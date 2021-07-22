import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Detail from "./components/Detail/Detail"
import Cart from "./components/Cart/Cart"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-white">
        <Header />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/product/:slug" component={Detail} />
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App

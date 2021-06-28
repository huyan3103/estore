import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import Detail from "./components/Detail/Detail"
import Cart from "./components/Cart/Cart"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/product/:slug" component={Detail} />
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

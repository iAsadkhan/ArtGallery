import './App.css';
import Header from "./header"
import {Switch, Route} from "react-router-dom"
import Cart from "./pages/cart"
import Photos from "./pages/photos"

function App() {    
  return (
      <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Photos />
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
      </div>
  )
}
export default App;

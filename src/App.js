import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from "./components/balance/balance";
import Nav from "./components/nav/nav";
import Transaction from "./components/transaction/transcation";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route path="/balance" component={Balance}></Route>
        <Route path="/transaction" component={Transaction}></Route>
      </Router>
    </div>
  );
}

export default App;

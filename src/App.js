import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import BuyorSell from './components/buyorsell/buyorsell';
import HomePage from './components/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route path="/balance" component={Balance}></Route>
        <Route exact={true} path="/">
          <Login />
        </Route>
        <Route path="/buyorsell" component={BuyorSell}></Route>
        <Route path="/home" component={HomePage}></Route>
      </Router>
    </div>
  );
}

export default App;

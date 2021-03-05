  
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';
import Exchange from './components/exchange/exchange';
import Nav from './components/nav/nav';
import BuyorSell from './components/buyorsell/buyorsell';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>

        <Route path="/Balance" component={Balance}></Route>
      
        <Route path="/Exchange">
          <Exchange />
        </Route>

        <Route path="/balance" component={Balance}></Route>
        <Route exact={true} path='/'>
            <Login />
          </Route>
        <Route path="/buyorsell" component={BuyorSell}></Route>

      </Router>

    </div>
  );
}

export default App;
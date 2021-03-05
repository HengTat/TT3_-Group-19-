  
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';
import Exchange from './components/exchange/exchange';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import BuyorSell from './components/buyorsell/buyorsell';
<<<<<<< HEAD
import HomePage from './components/home/home';
import Transcationlist from './components/transaction/transcation';
=======
import Login from './components/login/login';
>>>>>>> zhafbranch

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
        <Route exact={true} path="/">
          <Login />
        </Route>
        <Route path="/buyorsell" component={BuyorSell}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/transcation" component={Transcationlist}></Route>
      </Router>

    </div>
  );
}

export default App;
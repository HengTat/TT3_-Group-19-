import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';

import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route path="/balance" component={Balance}></Route>
        <Route exact={true} path='/'>
            <Login />
          </Route>
      </Router>
    </div>
  );
}

export default App;

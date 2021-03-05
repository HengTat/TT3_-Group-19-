import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route path="/balance" component={Balance}></Route>
      </Router>
    </div>
  );
}

export default App;

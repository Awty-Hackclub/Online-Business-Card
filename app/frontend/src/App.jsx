import './App.css';
import HomeApp from './Routes/HomeApp'
import Card from './Routes/Card'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/card">card</Link></li>
      </ul>
        <Switch>
          <Route exact path="/">
            <HomeApp/>
          </Route>
          <Route exact path="/card">
            <Card/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

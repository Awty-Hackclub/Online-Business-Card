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

import './App.css';
import Home from './components/Home'
import Temperature from './components/Temperature'
import Mass from './components/Mass'
import Time from './components/Time'
import Area from './components/Area'
import Volume from './components/Volume'
import Speed from './components/Speed'
import Currency from './components/Currency'
import Numberconvert from './components/Numberconvert'
import Length from './components/Length'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Temperature">
          <Temperature  name="Temperature"/>
        </Route>
        <Route exact path="/Mass">
          < Mass  name="Mass"/>
        </Route>
        <Route exact path="/Length">
          < Length  name="Length"/>
        </Route>
        <Route exact path="/Area">
          < Area name="Area" />
        </Route>
        <Route exact path="/Volume">
          < Volume  name="Volume"/>
        </Route>
        <Route exact path="/Time">
          < Time name="Time" />
        </Route>
        <Route exact path="/Speed">
          < Speed  name="Speed"/>
        </Route>
        <Route exact path="/Currency">
          < Currency name="Currency" />
        </Route>
        <Route exact path="/Number">
          < Numberconvert name="Number" />
        </Route>

      </Switch>
    </Router >
  );
}

export default App;

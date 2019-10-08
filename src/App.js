import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/coffeeFacts';
import Contact from './components/contact';
import Menu from './components/menu';
import Giphy from './components/giphy';
import CupOf from './components/cupof';


const App = () => (
  <div className="div-wrap">
<Router>
    <Menu />
  <Switch>
    <Route exact path='/' component={Giphy} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/coffee' component={About} />
    <Route exact path='/cupOf' component={CupOf} />
  </Switch>
</Router>
</div>
);

export default App;
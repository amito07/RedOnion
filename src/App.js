import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NavbarUp from './Components/NavbarUp';
function App() {
  return (
    <Router>
      <NavbarUp/>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

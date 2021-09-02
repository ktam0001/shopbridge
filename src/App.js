// import Home from "./components/Home";
// import About from './components/About';
import AddItem from "./components/AddItem";
import React from 'react';
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path = '/' component = {AddItem}/>
      </Switch>
    </React.Fragment>
  );
}

//<Route exact path = '/additem' component = {AddItem} />
//<Route exact path = '/about' component = {About} />
export default App;

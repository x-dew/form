import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='home'>
          <ul className='steps'>
            <li className='step-link'>
              <Link to="/Home">STEP 1</Link>
            </li>
            <li className='step-link'>
              <Link to="/entrance">STEP 2</Link>
            </li>
            <li className='step-link'>
              <Link to="/register">STEP 3</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/Home'>
          </Route>
          <Route path='/register'>
          </Route>
          <Route path='/entrance'>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

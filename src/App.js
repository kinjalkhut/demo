import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import matchDetails from './matchDetails'
import { Button } from 'reactstrap';
import {Provider} from 'react-redux';
import {store} from './redux/store'

function App() {
  return (
   <Provider store={store}>
    <Router>
          <Route  path="/" component={matchDetails}>
          </Route>
         
    </Router>
    </Provider>
  );
}

export default App;

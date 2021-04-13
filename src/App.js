import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>

          </Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/" exact>
            <EmailList />
          </Route>
        </div>

        <SendMail />


      </div>
    </Router>

  );
}

export default App;

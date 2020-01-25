import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Login from './login/login'; 
import Home from './Home/home'; 
import Messenger from './Messenger/Messenger';

function App() {
    return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/messenger' exact component={Messenger} />
      </Switch>

    </Router>  
  ); 
}

export default App;
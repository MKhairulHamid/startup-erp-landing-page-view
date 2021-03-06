import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import './App.sass';

const App = () => {
    
    return(
      <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
}

export default App;

import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";


const App = ():JSX.Element => {
  return (
    <div>
        <Switch>
            <Route component={SignIn} path={'/signin'}/>
            <Route component={Home} path={'/'}/>
        </Switch>
    </div>
  );
};

export default App;

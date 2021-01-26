import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Faisal from './Faisal';
import Ruksar from './Ruksar';


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Faisal" exact component={Faisal} />
          <Route path="/Ruksar" exact component={Ruksar} />

        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;

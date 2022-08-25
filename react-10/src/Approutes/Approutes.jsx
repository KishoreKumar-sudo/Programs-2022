import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Message from '../Message/Message';
import Todo from '../Todo/Todo';

function Approutes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" name="Message" component={Message}></Route> */}
        <Route path="/" name="Todo" component={Todo}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Approutes
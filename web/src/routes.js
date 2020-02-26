import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Form from "./pages/Form";
import Result from "./pages/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/resultado" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

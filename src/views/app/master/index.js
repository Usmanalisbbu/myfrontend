import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Master = React.lazy(() =>
  import(/* webpackChunkName: "second" */ "./master")
);
const MasterMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/`} />
      <Route
        path={`${match.url}/masters`}
        render={(props) => <Master {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default MasterMenu;

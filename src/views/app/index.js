import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-home" */ "./home")
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ "./second-menu")
);
const MasterMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ "./master")
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
              <Route
                path={`${match.url}/home`}
                render={(props) => <Gogo {...props} />}
              />
              <Route
                path={`${match.url}/second-menu`}
                render={(props) => <SecondMenu {...props} />}
              />
              <Route
                path={`${match.url}/`}
                render={(props) => <MasterMenu {...props} />}
              />

              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));

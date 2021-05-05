import React, { Suspense } from "react";
import Loader from 'components/Common/Loader';
import NotFound from 'components/Common/NotFound';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import RouteElement from 'components/Common/RouteElement';
import routes from 'routes';
import 'rsuite/dist/styles/rsuite-default.css';
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Router history={createBrowserHistory()}>
          <Switch>
            {routes.map(({ path, exact, ...rest }, index) => (
              <Route key={`route_${index}`} path={path} exact={exact}>
                <RouteElement {...rest} />
              </Route>
            ))}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default App;

import React, { Suspense } from "react";
import Loader from 'components/Common/Loader';
import NotFound from 'components/Common/NotFound';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import RouteElement from 'components/Common/RouteElement';
import routes from 'routes';
const HomePage = React.lazy(() => import('containers/Home'));
class App extends React.Component {
  render() {
    console.log('createBrowserHistory()', createBrowserHistory())
    return (
      <Suspense fallback={<Loader />}>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* {routes.map(({ path, exact, ...rest }, index) => (
              <Route key={`route_${index}`} path={path} exact={exact}>
                <RouteElement {...rest} />
              </Route>
            ))} */}
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default App;

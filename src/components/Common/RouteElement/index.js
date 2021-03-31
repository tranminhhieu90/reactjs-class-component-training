import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Loader from '../Loader';

class RouteElement extends React.Component {

  render() {
    const { component: Component } = this.props;
    return <Component />;
  }
}

export default compose(connect(), withRouter)(RouteElement);

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import Loader from '../Loader';
import MainLayout from '../Layout';

class RouteElement extends React.Component {

  render() {
    const { component: Component } = this.props;
    return (
      <MainLayout>
        <Component />
      </MainLayout>
    );
  }
}

export default compose(connect(), withRouter)(RouteElement);

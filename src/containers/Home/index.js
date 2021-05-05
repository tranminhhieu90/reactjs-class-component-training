import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchPatients } from 'containers/patient/actions';
import Carousel from 'components/Home/Carousel'
export class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <Carousel />
      </div>
    );
  }
}

export default compose(connect())(Home);


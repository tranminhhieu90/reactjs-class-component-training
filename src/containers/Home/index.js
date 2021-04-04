import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './index.less';
import { fetchPatients } from 'containers/patient/actions'
export class Home extends Component {
  constructor(props) {
    super(props)
  }

  onGetUser = () => {
    const { dispatch } = this.props
    dispatch({ type: 'FETCH_USER', payload: { userId: 'dsdsds' } })
  }

  onGetPatient = () => {
    const { dispatch } = this.props
    dispatch(fetchPatients(['hieu', 'dao']))
  }

  render() {
    return (
      <div >
        <button onClick={this.onGetUser}>get user</button>
        <button onClick={this.onGetPatient}>get patient</button>
      </div>
    );
  }
}

export default compose(connect())(Home);


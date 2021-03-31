import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './index.less';

export class NotFound extends Component {
  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <div className="not-found">
        <h1 style={{ textAlign: 'center' }}>404 Not Found</h1>
        <button appearance="ghost" onClick={this.handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
}

export default compose(withRouter)(NotFound);

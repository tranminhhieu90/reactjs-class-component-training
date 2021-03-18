import React from "react";
import { connect } from 'react-redux'
import { setLocale } from './appReducer/actions';
class App extends React.Component {


  handleChangeLanguage = () => {
    let { dispatch } = this.props;
    dispatch(setLocale('vn'))
  }

  render() {
    const { appState } = this.props
    console.log('appState', appState)
    return (
      <div className="App" >
        <div>
          <button onClick={this.handleChangeLanguage}>change language</button>
        </div>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  console.log('state', state)
  return {
    appState: state.appReducer
  }
}

export default connect(mapStatetoProps)(App);

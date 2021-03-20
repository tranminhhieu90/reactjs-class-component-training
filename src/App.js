import React from "react";
import { connect } from 'react-redux'
import { setLocale } from './appReducer/actions';
import { createStructuredSelector } from 'reselect';
import { selectLocaleSelector } from 'appReducer/selector';
class App extends React.Component {


  handleChangeLanguage = () => {
    let { dispatch } = this.props;
    dispatch(setLocale('vn'))
  }

  render() {
    const { locale } = this.props
    console.log('locale', locale)
    return (
      <div className="App" >
        <div>
          <button onClick={this.handleChangeLanguage}>change language</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  locale: selectLocaleSelector,
});

export default connect(mapStateToProps)(App);

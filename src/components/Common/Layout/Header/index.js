import React, { Component } from 'react';
import './index.scss';
import { LEFT_MENU, RIGHT_MENU } from './constant';
import Logo from 'assets/image/logo.png';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: null
    }
  }

  handleOnMouseEnter = (menu) => {
    this.setState({
      activeMenu: menu.code
    })
  }

  render() {
    const { activeMenu } = this.state;
    return (
      <div className="header">
        <div className="header-menu-left">
          {LEFT_MENU.map((menu) => {
            return (
              <div className="header-menu-item"
                onMouseEnter={() => this.handleOnMouseEnter(menu)}
              >
                {menu.title}
                {activeMenu === menu.code && (
                  <div className='header-sub-menu'>
                    {menu.subMenu.map(subMenu => {
                      return <li><a>{subMenu}</a></li>
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="header-logo">
          <img src={Logo}></img>
        </div>
        <div className="header-menu-right">
          {RIGHT_MENU.map((menu) => {
            return (
              <div className="header-menu-item"
                onMouseEnter={() => this.handleOnMouseEnter(menu)}>
                {menu.title}
                {activeMenu === menu.code && (
                  <div className='header-sub-menu'>
                    {menu.subMenu.map(subMenu => {
                      return <li><a>{subMenu}</a></li>
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div >
    )
  }
}

export default Header;
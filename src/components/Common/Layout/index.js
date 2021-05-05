import React, { Component } from 'react';
import { Container, Content, Footer } from 'rsuite';
import Header from '../Layout/Header'

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Container >
        <Header />
        <Content className="main-container">{children}</Content>
        <Footer className="footer">
          Footer
        </Footer>
      </Container>
    );
  }
}

export default MainLayout;
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const authButton = this.props.isSignedIn ?
      <Button
        className="ml-auto"
        variant="outline-light"
        onClick={this.props.handleSignOutClick}
      >
        Выход
      </Button> :
      <Button
        className="ml-auto"
        variant="outline-light"
        onClick={this.props.handleAuthClick}
      >
        Вход
      </Button>;

    return (
      <Navbar
        bg="primary"
        variant="dark"
      >
        <Container>
          {authButton}
        </Container>
      </Navbar>
    )
  }
}

import React from 'react';
import { Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap'

export default class Header extends React.Component {
  render() {
    const signOut = (
      <DropdownButton
        alignRight
        title="Профиль"
        className="ml-auto"
        variant="outline-light"
      >
        <Dropdown.Item as="button" disabled>
          { this.props.fullName }
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item
          onClick={this.props.handleSignOutClick}
          as="button"
        >
          Выход
        </Dropdown.Item>
      </DropdownButton>
    );

    const signIn = (
      <Button
        className="ml-auto"
        variant="outline-light"
        onClick={this.props.handleAuthClick}
      >
        Вход
      </Button>
    );

    return (
      <Navbar
        bg="primary"
        variant="dark"
      >
        <Navbar.Brand>
          Not Gmail
        </Navbar.Brand>
        {this.props.isSignedIn ? signOut : signIn}
      </Navbar>
    )
  }
}

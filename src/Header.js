import React from 'react';
import PropTypes from 'prop-types'
import { Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap'

class Header extends React.Component {
  static propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    fullName: PropTypes.string,
    handleAuthClick: PropTypes.func.isRequired,
    handleSignOutClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isSignedIn: false,
    fullName: 'Неизвестно',
    handleAuthClick: () => {},
    handleSignOutClick: () => {},
  }

  render() {
    const {
      isSignedIn,
      fullName,
      handleSignOutClick,
      handleAuthClick
    } = this.props;

    const signOut = (
      <DropdownButton
        alignRight
        title="Профиль"
        className="ml-auto"
        variant="outline-light"
      >
        <Dropdown.Item as="button" disabled>
          {fullName}
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item
          onClick={handleSignOutClick}
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
        onClick={handleAuthClick}
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
        {isSignedIn ? signOut : signIn}
      </Navbar>
    )
  }
}

export default Header;

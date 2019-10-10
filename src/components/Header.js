import React from 'react';
import PropTypes from 'prop-types'
import { Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap'

class Header extends React.Component {
  static propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    fullName: PropTypes.string,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isSignedIn: false,
    fullName: 'Неизвестно',
    handleLogin: () => {
    },
    handleLogout: () => {
    },
  }

  render() {
    const {
      isSignedIn,
      fullName,
      handleLogout,
      handleLogin
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
          onClick={handleLogout}
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
        onClick={handleLogin}
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

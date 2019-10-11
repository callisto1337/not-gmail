import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';

function Header(props) {
  const {
    fullName,
    handleLogout,
  } = props;

  return (
    <Navbar
      bg="primary"
      variant="dark"
    >
      <Navbar.Brand>
        Not Gmail
      </Navbar.Brand>
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
    </Navbar>
  );
}

Header.propTypes = {
  fullName: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  fullName: 'Неизвестно',
  handleLogout: () => {
  },
};

export default Header;

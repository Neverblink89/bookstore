import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Bookstore</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

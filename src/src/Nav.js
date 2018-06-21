import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import emotion from 'react-emotion';

function handleSelect(selectedKey) {
  // alert(`selected ${selectedKey}`);
}

const NavComp = () => (
  <div style={{ display: 'flex' }}>
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect} style={{ margin: '0 auto' }}>
      <NavItem eventKey={1} href="/home">
        Home
      </NavItem>
      <NavItem eventKey={2} title="Item">
        Menu
      </NavItem>
      <NavItem eventKey={3} disabled>
        Contact
      </NavItem>
    </Nav>
  </div>
);

export default NavComp;


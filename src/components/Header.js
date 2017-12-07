import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() { 
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>SmartGrow</Link></li>
            <li><Link to='/greenhouse'>Greenhouse</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
 
export default Header;
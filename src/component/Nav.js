import React from 'react';
import './New.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='navbar-tab'>
       <Link to='/about'>
        <li>About</li>
       </Link>
       <Link to='/popchart'>
        <li>PopChart</li>
       </Link>
       <Link to='/tablechart'>
        <li>TableChart</li>
       </Link>
      </ul>
    </nav>
  );
}


export default Nav;

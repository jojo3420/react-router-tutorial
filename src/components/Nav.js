import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/*<li><Link to="/profile/jojo">jojo Profile</Link></li>*/}
        {/*<li><Link to="/profile/hong">hong Profile</Link></li>*/}
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/queryString?age=20&gender=true">QueryString TEST</Link></li>
        <li><Link to="/history/test">history api test</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

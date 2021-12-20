import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

function Profiles(props) {
  return (
    <div>
      <h3>profiles</h3>
      <ul>
        <li>
          <Link to="/profiles/jojo">Jojo Profile</Link>
        </li>
        <li>
          <Link to="/profiles/hong">Hong Profile</Link>
        </li>
      </ul>
      <Route path="/profiles" exact={true}
             render={() => <div>프로필을 선택 하세요.</div>} />
      <Route path="/profiles/:userId" component={Profile} />

    </div>
  );
}

export default Profiles;

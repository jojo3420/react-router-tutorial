import React from 'react';
import qs from 'qs';


function QueryStringTest({ location }) {
  const queryStr = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log({queryStr});
  return (
    <div>
      <h4>QueryString TEST</h4>
      <input type="number" value={parseInt(queryStr.age, 10)} />
      <p>{queryStr.gender === 'true' ? '남성' : '여성'}</p>
    </div>
  );
}

export default QueryStringTest;

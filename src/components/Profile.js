import React from 'react';

const profiles = {
  jojo: {
    id: 1,
    username: 'parkjihoon',
    desc: '리액트 재미있다.'
  },
  hong: {
    id: 2,
    username: '미스터 홍',
    desc: '아무거나 잘 먹습니다.'
  }
}

function Profile({ match }) {
  const { userId } = match.params;
  const profile  =profiles[userId];

  return (
    <div>
      <h3>Profile</h3>
      <div>{profile.username}</div>
      <div>{profile.desc}</div>
    </div>
  );
}

export default Profile;

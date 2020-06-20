import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterTest({ location, match, history }) {
  let unblock = null;
  console.log({ location, match, history });

  const handleGoBack = () => {
    history.goBack();
  }
  const handleGoHome = () => {
    history.push('/');
  }


  useEffect(() => {
    unblock = history.block('정말 떠나실 건가요?');

    //clean up
    return () => {
      if (unblock) {
        unblock();
      }
    }
  }, [])

  return (
    <div>
      <h4>withRouter api test</h4>
      <p>Route 로 사용되지 않는 컴포넌트에서 라우터 api 제공</p>
      <button onClick={handleGoBack}>go back</button>
      <button onClick={handleGoHome}>go home</button>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={9}
        readOnly={true}
      />
    </div>
  );
}

export default withRouter(WithRouterTest);

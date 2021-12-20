import React from 'react';
import Router from './Router';
// import {BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import WithRouterTest from "./components/WithRouterTest";


function App() {
  return (
    <>
      <h1>React router tutorial project</h1>
      <Nav />
      <Router />
      <hr/>
      {/*<WithRouterTest />*/}
    </>
  );
}

export default App;

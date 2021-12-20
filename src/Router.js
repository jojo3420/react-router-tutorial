import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Profile from 'components/Profile';
import Profiles from './components/Profiles';
import QueryStringTest from "./components/QueryStringTest";
import HistoryApiTest from './components/HistoryApiTest';



function Router(props) {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path={['/about', '/info']} component={About}/>
      {/*<Route path="/profile/:userId" component={Profile}/>*/}
      <Route path="/profiles" component={Profiles}/>
      <Route path="/queryString" component={QueryStringTest}/>
      <Route path="/history/test" component={HistoryApiTest} />
      <Route render={({ location }) => {
        return (
          <div>
            <h4>PAGE NOT FOUND</h4>
            <p>{location.pathname}</p>
          </div>
        )
      }} />
    </Switch>
  );
}

export default Router;

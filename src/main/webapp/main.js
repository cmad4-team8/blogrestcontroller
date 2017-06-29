import React from 'react'
import ReactDOM from 'react-dom';
import NavBar from './v2_app/NavigationPage.jsx'


ReactDOM.render(<NavBar />, document.getElementById('app'));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app.jsx';
import { DisplayMain } from './app/DisplayMain.jsx'
import { TitleBarPage } from './app/TitleBarPage.jsx'
import RegisterUser from './app/NewUser.jsx'
import NewPageTest from './app/NewPageTest.jsx'

import { BrowserRouter,
         HashRouter as Router,
         Route, IndexRoute,
         hashHistory, browserHistory,
         createMemoryHistory, Switch
       } from 'react-router-dom'

//ReactDOM.render(<NavigationPage />, document.getElementById('navigation'));

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
       <Switch>
          <Route    path = "/blogrestcontroller/main" component = {DisplayMain} />
          <Route    path = "/blogrestcontroller/signup" component = {NewPageTest} />
          <Route    path = "/blogrestcontroller" component = {App} />
       </Switch>
   </BrowserRouter>,
    document.getElementById('app'));
    */

/*
// working example
import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample
ReactDOM.render(<BasicExample />, document.getElementById('app'));
*/
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';
import BlogComments from './comments.jsx';
import * as utils from './utils.js'

class UserLogout extends React.Component {

    constructor(props, context) {
        super(props, context);
    }
    componentWillMount()
    {
      utils.removeBrowserCookie("Authorization");
      utils.removeBrowserCookie("userId");
      this.props.callback(null);
      this.context.router.history.push("/");
    }
    render() {
        return (
                <div>
                    <h1>You have Successfully Logged out !!!</h1>
                </div>
           );
    }
}
UserLogout.PropTypes = {
     id: PropTypes.number.isRequired,

}

UserLogout.contextTypes = {
        router: React.PropTypes.func.isRequired
};

export default UserLogout;
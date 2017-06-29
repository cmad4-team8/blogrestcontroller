import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';
import BlogComments from './comments.jsx';

class BlogDetail extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleFetch=this.handleFetch.bind(this);
        this.state = {
            post: []
        };
    }
    componentWillMount()
    {
      this.handleFetch();
    }
    handleFetch() {
           console.log(this.props);
        console.log(this.context.router);
        console.log(this.props.location);
           axios.get(this.props.url + this.context.router.route.match.params.id)
                    .then(res => this.setState({ post: res.data }));
        }
    render() {
        return (
                <div>
                  <tr key={this.state.post.pid}><td><h1>{this.state.post.title}</h1>
                   <br/><h3>{this.state.post.published_content}</h3><br/><h4>  Published on: {this.state.post.postDate}</h4>
                   </td></tr>
                   <div><form><h1>Comments:</h1><br />
                   <BlogComments postid={this.state.post.pid}/></form></div>
                  </div>
           );
    }
}
BlogDetail.PropTypes = {
     id: PropTypes.number.isRequired,

}

BlogDetail.contextTypes = {
        router: React.PropTypes.func.isRequired
};

export default BlogDetail;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';

class MyBlogs extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleFetch=this.handleFetch.bind(this);
        this.state = {
            login_id: '',
            posts: []
        };
	}
	componentWillMount()
    {
       //this.handleSubmit();
       this.setState({ login_id:  this.context.router.route.match.params.user})
       console.log("local login_id = ", this.state.login_id);
       console.log("router context login_id = ", this.context.router.route.match.params.user);
       this.handleFetch();

    }
	handleFetch() {
		var str="pagenum=1"
		var user="&user="
		console.log(this.context.router);
       	axios.get('/blogrestcontroller/blog/post/query?'+str+user+this.context.router.route.match.params.user)
            .then(res => this.setState({ posts: res.data }));
    }
                          //<Link to="/post/${post.id}" key={post.id} id={post.pid} >{post.title}</Link>
	render(){
        console.log("DisplayMain rendered with url:" + this.props.utl)
        return (
            <div>
				<ul>
                  {this.state.posts.map(post =>
                      <li key={post.pid}>
                      <Link to={"/blog/"+post.pid} key={post.id} id={post.pid} >
						<h1>{post.title}
                          </h1></Link>  <a href="#">Edit</a><h4>  Published on: {post.postDate}</h4>
						</li>
                  )}
				</ul>
            </div>
        );
     }
}

MyBlogs.contextTypes = {
        router: React.PropTypes.func.isRequired
};

export default MyBlogs
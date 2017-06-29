import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';

class DisplayMain extends Component {
	constructor(props) {
		super(props);
		this.handleFetch=this.handleFetch.bind(this);
        this.state = {
            posts: []
        };
	}
	componentWillMount()
    {
       //this.handleSubmit();
       this.handleFetch();

    }
	handleFetch() {
		var str="pagenum=1"
       	axios.get('blog/post/query?'+str)
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
                          </h1></Link><h4>  Published on: {post.postDate}</h4>
						</li>
                  )}
				</ul>
            </div>
        );
     }
}

export default DisplayMain

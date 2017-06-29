import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
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
           axios.get(this.props.url + this.props.params.id)
                    .then(res => this.setState({ post: res.data }));
        }
    render() {
        console.log("Blog Details called with blog_id:" + '{this.props}');
        return (
                <div>
                  <tr key={this.state.post.pid}><td><h1>{this.state.post.title}</h1>
                   <br/><h3>{this.state.post.published_content}</h3><br/><h4>  Published on: {this.state.post.postDate}</h4>
                   </td></tr>
                  </div>
           );
    }
}
BlogDetail.PropTypes = {
     postid: PropTypes.number.isRequired,

}

export default BlogDetail;
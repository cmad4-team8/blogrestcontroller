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
           axios.get('blog/post/'+this.props.postid)
                    .then(res => this.setState({ post: res.data }));
        }
    render() {
        console.log("Blog Details called with blog_id:" + this.props.postid);
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
class DisplayMain extends React.Component {
       constructor(props) {
           super(props); 
         //this.handleSubmit=this.handleSubmit.bind(this);
         //this.DisplayTable=this.DisplayTable.bind(this);
         this.handleClick=this.handleClick.bind(this);
         this.handleFetch=this.handleFetch.bind(this);
         this.onBackButtonEvent=this.onBackButtonEvent.bind(this);

         this.state = {
            posts: [],
            blog_id: 0
            };
       }

    componentWillMount()
    {
      //this.handleSubmit();
      this.handleFetch();

    }
    onBackButtonEvent(e) {
      e.preventDefault();
     window.history.back();
    }

    componentDidMount() {
      window.onpopstate = this.onBackButtonEvent;
    }
     
    handleFetch() {
       //alert("Trying Fetch to get the data");
       var str="pagenum=1"
       axios.get('blog/post/query?'+str)
                .then(res => this.setState({ posts: res.data }));
    }
  
    handleClick (value) {
        //alert("Handle click is called with>>>>" + value);
        console.log("Handle click is called with>>>>" + value );
        //this.state.blog_id = parseInt(value);
        this.setState({blog_id: parseInt(value)});
    }

     /*{this.state.posts.map(post =>
                                <li key={post.pid}>{post.title}</li>
                              )}*/


    render(){
        console.log("DisplayMain rendered with blog_id:" + this.state.blog_id)
        return (
            <div>
                  {this.state.blog_id == 0 && this.state.posts.map(post =>
                      <tr key={post.pid}><td><h1>
                          <a href="#" key={post.id} id={post.pid} onClick={() => this.handleClick(post.pid)}>{post.title}</a>
                          </h1><h4>  Published on: {post.postDate}</h4>
                          </td></tr>
                  )}
                  {this.state.blog_id != 0 && <BlogDetail postid={this.state.blog_id}/>}
            </div>
        );
     }

}

DisplayMain.PropTypes = {
     url: PropTypes.string.isRequired,
  
}

/*module.exports = {
    DisplayMain: DisplayMain,
    DisplayBlog: DisplayBlog
}*/
export default DisplayMain

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class DisplayMain extends React.Component {
       constructor(props) {
           super(props); 
         //this.handleSubmit=this.handleSubmit.bind(this);
         //this.DisplayTable=this.DisplayTable.bind(this);
         this.handleClick=this.handleClick.bind(this);
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
       //alert("Trying Fetch to get the data");
       var str="pagenum=1"
       axios.get('blog/post/query?'+str)
                .then(res => this.setState({ posts: res.data }));
    }
  
    handleClick (value) {
        alert("Handle click is called with>>>>" + value);
        //console.log("Handle click is called with>>>>" + value );
    }

     /*{this.state.posts.map(post =>
                                <li key={post.pid}>{post.title}</li>
                              )}*/


    render(){
    
        return (
            <div>
                  {this.state.posts.map(post =>
                      <tr key={post.pid}><td><h1>
                          <a href="#" key={post.id} id={post.pid} onClick={() => this.handleClick(post.pid)}>{post.title}</a>
                          </h1><h4>  Published on: {post.postDate}</h4>
                          </td></tr>
                  )}
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

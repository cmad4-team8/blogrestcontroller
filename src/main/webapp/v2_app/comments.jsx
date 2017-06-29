import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';

class BlogComments extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleFetch=this.handleFetch.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            comments: [],
            post_id: 0,
            login_id: '',
            cmtstr: ''
        };
    }
    _SendNewComment(form) {
               var commentData = {
                    "login_id" : form.login_id,
                    "p_id": this.state.post_id,
                    "comment": form.cmtstr

               };


               $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: 'comment/create',
                        contentType: "application/json; charset=utf-8",
                        cache: false,
                        success: function(data) {
                            //this.props.login_id= form.loginName;
                            //this.setState({data: data}); // Notice this
                            console.log(JSON.parse(data));
                        }.bind(this),
                        error: function(xhr, status, err) {
                                console.log(status);
                                console.log(JSON.parse(data));
                                //console.error(this.props.url, status, err.toString());
                        }.bind(this),

                        data: JSON.stringify(ommentData)
               });

           }
    componentWillMount()
    {
      this.setState({ posts_id:  this.context.router.route.match.params.id})
      this.handleFetch();
    }
    handleSubmit() {
        console.log("New Comment details");
        console.log(this.state);
    }
    handleFetch() {
           console.log(this.props);
        console.log(this.context.router);
        console.log(this.props.location);
        var str="pagenum=1"
        var post_id="&post=";

           axios.get('comment/query?' +str+post_id+this.state.post_id)
                    .then(res => this.setState({ comments: res.data }));
        }
    updateFormData(formData) {
           console.log(formData);
           console.log(this.props.url);
           this._SendNewComment(formData);
         }
     handleChange(event, attribute) {
             var newState = this.state;
             newState[attribute] = event.target.value;
             this.setState(newState);
             console.log(this.state);
          }
    render() {
        return (
                <div>
                   {this.state.comments.map(cmt =>
                                        <li key={cmt.c_id}>
                  						<h3>{cmt.comment}
                                            </h3><h4>  Posted by: {cmt.login_id}</h4>
                  						</li>
                                    )}
                   <form onSubmit={this.handleSubmit} >
                     <div>

                        <div>
                            <input type="text"
                                placeholder="Your name"
                                value={this.state.login_id}
                                onChange={(event) => this.handleChange(event, 'login_id')}/>
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Say something..."
                                value ={this.state.cmtstr}
                                onChange={(event) => this.handleChange(event, 'cmtstr')}/>
                        </div>

                        <div className="form-group">
                                    <button type="submit"
                                        className="btn btn-success">
                                     Submit
                                    </button>
                        </div>
                      </div>
                    </form>
                  </div>
           );
    }
}
BlogComments.PropTypes = {
     postid: PropTypes.number.isRequired,

}

BlogComments.contextTypes = {
        router: React.PropTypes.func.isRequired
};

export default BlogComments;
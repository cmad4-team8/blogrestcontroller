import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import {ControlLabel}from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import * as utils from './utils.js'

class BlogComments extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            comments: [],
            post_id: 0,
            login_id: '',
            cmtstr: ''
        };
        this.handleFetch=this.handleFetch.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentWillMount()
    {
      this.setState({ posts_id:  this.context.router.route.match.params.id})
      this.setState({ login_id: utils.getSignedInUser()});
      this.setState({ cmtstr: null});
      this.handleFetch();
    }
    _SendCommentDeatils(form) {
               var cmtdata = {
                       "login_id" : form.login_id,
                       "p_id": form.p_id,
                       "comment": form.cmtstr
               };

               $.ajax({
                        type: 'POST',
                        url: '/blogrestcontroller/blog/comment/create',
                        contentType: "application/json; charset=utf-8",
                        cache: false,
                        success: function(data, status, xhr) {
                            console.log("Comment posted Success");
                            this.setState({data: data}); // Notice this
                            this.handleFetch();
                        }.bind(this),
                        error: function(xhr, status, err) {
                                console.log("comment post Failure");
                                console.log(status);
                                console.log(JSON.parse(data));
                                console.error(this.props.url, status, err.toString());
                        }.bind(this),

                        data: JSON.stringify(cmtdata)
               });
           }
    handleSubmit(event) {
        event.preventDefault();
        console.log("New Comment details");
        console.log(this.state);

                  var formData = { login_id: this.state.login_id,
                                   p_id: this.context.router.route.match.params.id,
                                   cmtstr: this.state.cmtstr};

                      //this.props.updateFormData(formData);
                      this.updateFormData(formData);
                      this.setState({
                          cmtstr: "",
                      });
    }
    handleFetch() {
           console.log(this.props);
        console.log(this.context.router);
        console.log(this.props.location);
        var str="pagenum=1"
        var postid="&post=";

           axios.get('comment/query?' +str+postid+this.context.router.route.match.params.id)
                    .then(res => this.setState({ comments: res.data }));
        }
    updateFormData(formData) {
           console.log(formData);
           console.log(this.props.url);
           this._SendCommentDeatils(formData);
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
                   { this.state.login_id &&
                       <div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Say something..."
                                value ={this.state.cmtstr}
                                onChange={(event) => this.handleChange(event, 'cmtstr')}/>
                        </div>

                        <div className="form-group">
                                    <button onClick={this.handleSubmit}
                                        className="btn btn-success">
                                     Comment
                                 </button>
                        </div>
                        </div>
                    }
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
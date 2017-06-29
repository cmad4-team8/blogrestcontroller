
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter, Router, Link, IndexLink} from 'react-router-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import * as utils from './utils.js'

class RegisterUser extends Component {
	constructor(props,context) {
		super(props,context);
       this.state = {
              firstName:"",
              lastName:"",
              loginName: "",
              password: "",
              cpassword:"",
              userHint:"",
              doB:"",
              emailId:"",
              checked:false,
              url:'',
              error: false
       }
       /* we have to bind this */
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleCancel = this.handleCancel.bind(this);

	}
	 _renderError() {
      if (this.state.error) {
          return (
                <div className="alert alert-danger">
                {this.state.error}
                </div>
        );
      }
   }

       _validateInput() {
          if (this.state.login === '') {
              this.setState({error: "Login name can not be empty"});
          } else if (this.state.password === '') {
               this.setState({error: "Please enter valid password"});
          } else if (this.state.cpassword !== this.state.password) {
               this.setState({error: "rentered password didn't match"});
          } else {
               this.setState({error: false});
               return true;
          }

       }

	componentWillMount()
    {
       //this.handleSubmit();

    }
	handleSubmit() {
	    console.log("Handle Submit is called");
	    event.preventDefault();

                   var formData = {
                       "login_id" : this.state.loginName,
                       "pwd": this.state.password,
                       "cpwd":this.state.cpassword,
                       "hint":this.state.userHint,
                       "f_name":this.state.firstName,
                       "l_name":this.state.lastName,
                       "email":this.state.emailId,
                       "dob":this.state.doB
                    };

                    if (this._validateInput()) {

                        $.ajax({
                            url: '/blogrestcontroller/rest/user/signup',
                            type: 'post',
                            contentType: "application/json; charset=utf-8",
                            cache: false,
                            success: function(data, status, xhr) {
                            utils.addToBrowserCookie("userId", formData.login_id);
                                this.props.callback(formData.login_id);
                                var jwtToken = xhr.getResponseHeader("Authorization");
                                utils.addToBrowserCookie("Authorization", jwtToken);
                                this.context.router.history.push('/');
                            }.bind(this),
                            error: function(xhr, status, err) {
                                    console.error(this.props.url, status, err.toString());
                            }.bind(this),
                            data: JSON.stringify(formData)
                       });
                      this.setState({
                          firstName:"",
                          lastName:"",
                          loginName: "",
                          password: "",
                          cpassword:"",
                          userHint:"",
                          doB:"",
                          emailId:"",
                          userConsent:false,
                      });
                  }
    }
    handleCancel() {
    	    console.log("Handle Cancel is called");
        }

    handleChange(event, attribute) {
            var newState = this.state;
            newState[attribute] = event.target.value;
            this.setState(newState);
            console.log(this.state);
         }

          updateFormData(formData) {
           console.log(formData);
           this._SendLoginDeatils(formData);

         }

         toggleValue(event) {
             var state = this.state[event.target.id];
         }

	render() {
            var hideStyle = {
              display: "none"
            };

            return (
                <div >
                <h2>Blogger Signup</h2>
                                <div className="form-group">
                                  <input className="form-control"
                                     type="text"
                                     placeholder="First Name"
                                     value={this.state.firstName}
                                     onChange={(event) => this.handleChange(event, 'firstName')} required />
                                </div>

                                <div className="form-group">
                                  <input className="form-control"
                                     type="text"
                                     placeholder="Last Name"
                                     value={this.state.lastName}
                                     onChange={(event) => this.handleChange(event, 'lastName')} />
                                </div>
                                <div className="form-group">
                                  <input className="form-control"
                                     type="text"
                                     placeholder="user name"
                                     value={this.state.loginName}
                                     onChange={(event) => this.handleChange(event, 'loginName')} required/>
                                </div>
                                <div className="form-group">
                                  <input className="form-control"
                                     type="password"
                                     placeholder="password"
                                     value={this.state.password}
                                     onChange={(event) => this.handleChange(event, 'password')} required/>
                              </div>
                              <div className="form-group">
                                  <input className="form-control"
                                     type="password"
                                     placeholder="confirm password"
                                     value={this.state.cpassword}
                                     onChange={(event) => this.handleChange(event, 'cpassword')} required/>
                            </div>
                             <div className="form-group">
                                     <input className="form-control"
                                     type="text"
                                     placeholder="password hint"
                                     value={this.state.userHint}
                                     onChange={(event) => this.handleChange(event, 'userHint')} required/>

                              </div>

                              <div className="form-group">
                                  <input className="form-control"
                                     type="date"
                                     placeholder="Date of Birth"
                                     value={this.state.doB}
                                     onChange={(event) => this.handleChange(event, 'doB')}/>
                              </div>

                              <div className="form-group">
                                  <input className="form-control"
                                     type="email"
                                     placeholder="Email"
                                     value={this.state.emailId}
                                     onChange={(event) => this.handleChange(event, 'emailId')} required/>
                              </div>
                               <div className="form-group">
                                     <label>
                                     Agree terms and conditions:
                                     <input
                                        name="userConsent"
                                        type="checkbox"
                                        checked={this.state.userConsent}
                                        onClick={(event) => { this.setState({ checked: !this.state.checked }); }}
                                        onChange={(event) => this.handleChange(event, 'userConsent')} />
                                     </label>

                               </div>
                               <div className="form-group">
                                                 <button onClick={this.handleSubmit}
                                                     className="btn btn-success">
                                                  Submit
                                                 </button>
                                              </div>

              </div>
            );
        }
}

RegisterUser.PropTypes = {
     firstName: PropTypes.string.isRequired,
     lastName: PropTypes.string.isRequired,
     loginName: PropTypes.string.isRequired,
     password: PropTypes.string.isRequired,
     cpassword: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired
}

RegisterUser.contextTypes = {
        router: React.PropTypes.func.isRequired
};

export default RegisterUser


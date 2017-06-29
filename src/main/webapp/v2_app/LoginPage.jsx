import React, { Component } from 'react';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import {ControlLabel}from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import * as utils from './utils.js'

class LoginPage extends React.Component {

       constructor(props,context) {
           super(props,context);
           this.state = {
               loginName: '', password: '',
               url: ' ', error: false
           }
           /* we have to bind this */
           this.handleSubmit = this.handleSubmit.bind(this);
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
          if (this.state.loginName === '') {
              this.setState({error: "Login name can not be empty"});
          } else if (this.state.password === '') {
               this.setState({error: "Please enter valid password"});
          } else {
               this.setState({error: false});
               return true;
          }

       }
       
       _SendLoginDeatils(form) {
           var logindata = {
                "login_id" : form.loginName,
                "pwd": form.password
            
           };

           $.ajax({
                    type: 'POST',
                    url: this.props.url,
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data, status, xhr) {
                        console.log("Login Success");
                        utils.addToBrowserCookie("userId", logindata.login_id);
                        this.props.callback(logindata.login_id);
                        var jwtToken = xhr.getResponseHeader("Authorization");
                        utils.addToBrowserCookie("Authorization", jwtToken);
                        console.log("Updated Utils");
                        //this.props.login_id= logindata.loginName;
                        this.context.router.history.push('/'+logindata.login_id+'/blogs');
                        this.setState({data: data}); // Notice this
                        console.log(JSON.parse(data));

                    }.bind(this),
                    error: function(xhr, status, err) {
                            console.log("Login Failure");
                            console.log(status);
                            console.log(JSON.parse(data));
                            console.error(this.props.url, status, err.toString());
                    }.bind(this),

                    data: JSON.stringify(logindata)
           });
       }

       handleSubmit(event) {
           event.preventDefault();

          var formData = { loginName: this.state.loginName,
                           password: this.state.password};

          if (this._validateInput()) {
              //this.props.updateFormData(formData);
              this.updateFormData(formData);
              this.setState({
                  loginName: "", 
                  password:  ""
              });
          }
       }
     
     handleChange(event, attribute) {
        var newState = this.state;
        newState[attribute] = event.target.value;
        this.setState(newState);
        console.log(this.state);
     }

      updateFormData(formData) {
       console.log(formData);
       console.log(this.props.url);
       this._SendLoginDeatils(formData);
     }

     

    render(){

        var errorMessage = this._renderError();
        console.log(this.props);

        return (
         <div >
              <Jumbotron >
         <h1><justify> User Login</justify></h1>
                {errorMessage}
          <div style={{width: 300, paddingLeft:100}}>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input className="form-control"
                     type="text"
                     placeholder="user name"
                     value={this.state.loginName}
                     onChange={(event) => this.handleChange(event, 'loginName')} />
                </div>

                <div className="form-group">
                  <input className="form-control"
                     type="password"
                     placeholder="password"
                     value={this.state.password}
                     onChange={(event) => this.handleChange(event, 'password')}/>
              </div>
              <div className="form-group">
                  <button type="submit"
                      className="btn btn-success">
                   Submit
                  </button>
               </div>
           </form>
         </div>
          </Jumbotron>
       </div>
      );
    }
   
}

LoginPage.PropTypes = {
     loginName: PropTypes.string.isRequired,
     password: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired

}
LoginPage.contextTypes = {
        router: React.PropTypes.func.isRequired
};
export default LoginPage;



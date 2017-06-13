import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import {ControlLabel}from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

class LoginPage extends React.Component {

       constructor(props) {
           super(props);
           this.state = {
               loginName: '', password: '', error: false
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
                    url: 'rest/user/login',
                    dataType: 'json',
                    type: 'post',
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {
                        this.setState({data: data}); // Notice this
                    }.bind(this),
                    error: function(xhr, status, err) {
                            console.error(this.prop.url, status, err.toString());
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
       alert('Loging user '+formData.loginName);
       this._SendLoginDeatils(formData);
     }

     

    render(){

        var errorMessage = this._renderError();

        return (
         <div style={{paddingLeft:250 , paddingRight:250}} id='login-blogger'>
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
                      ref="submit"
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
export default LoginPage;


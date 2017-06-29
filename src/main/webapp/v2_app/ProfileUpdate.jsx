import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import {ControlLabel}from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

class ProfileUpdate extends React.Component {

       constructor(props) {
           super(props);
           this.state = {
                  firstName:"",
                  lastName:"",
                  loginName: "", 
                  doB:"",
                  emailId:"",
                  url: "",
                  error: false
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
       
       handleSubmit(event) {
           event.preventDefault();

           var formData = { 
               "f_name":this.state.firstName,
               "l_name":this.state.lastName,
               "email":this.state.emailId,
               "Date":this.state.doB
            };

            if (this._validateInput()) {

                $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    type: 'post',
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {
                        this.setState({data: data}); // Notice this
                    }.bind(this),
                    error: function(xhr, status, err) {
                            console.error(this.props.url, status, err.toString());
                    }.bind(this),
                    data: JSON.stringify(formData)
               });
              this.setState({
                  firstName:"",
                  lastName:"",
                  doB:"",
                  emailId:"",
              });
          }
       }

     _SendLoginDeatils(form) {
           var logindata = {
                "f_name":this.state.firstName,
               "l_name":this.state.lastName,
               "email":this.state.emailId,
               "dob":this.state.doB
           };

         
           $.ajax({
                    url: this.prop.url,
                    dataType: 'json',
                    type: 'put',
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

     toggleValue(event) {
         var state = this.state[event.target.id];
     }

    render(){

        var errorMessage = this._renderError();

        return (
         <div  >
         <h1 style={{paddingLeft:50}}><justify>User Profile Update</justify></h1>
                {errorMessage}
          <div style={{width: 300, paddingLeft:100}}>
            <form onSubmit={this.handleSubmit} >
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
                  <button type="submit"
                      className="btn btn-success">
                   Submit
                  </button>
               </div>
           </form>
         </div>
       </div>
      );
    }
   
}

 ProfileUpdate.PropTypes = {
     firstName: PropTypes.string.isRequired,
     lastName: PropTypes.string.isRequired,
     loginName: PropTypes.string.isRequired,
     password: PropTypes.string.isRequired,
     cpassword: PropTypes.string.isRequired
}

export default  ProfileUpdate;
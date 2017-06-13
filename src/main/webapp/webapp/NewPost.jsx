import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl } from  'react-bootstrap';
import {ControlLabel, Input}from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';

class NewPost extends React.Component {

       constructor(props) {
           super(props);
           this.state = {
               postTitle: '', postData: '', error: false
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
          if (this.state.postTitle === '') {
              this.setState({error: "Please add post title"});
          } else if (this.state.postData === '') {
               this.setState({error: "Empty post"});
          } else {
               this.setState({error: false});
               return true;
          }

       }
       
       _SendLoginDeatils(form) {
           var logindata = {
                "login_id" : form.postTitle,
                "pwd": form.postData
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

          var formData = { postTitle: this.state.postTitle,
                           postData: this.state.postData};

          if (this._validateInput()) {
              //this.props.updateFormData(formData);
              this.updateFormData(formData);
              this.setState({
                  postTitle: "", 
                  postData:  ""
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
       alert('submitted for '+formData.postTitle);
       this._SendLoginDeatils(formData);
     }

     

    render(){

        var errorMessage = this._renderError();

        return (
         <div className="login jumbotron center-block" style={{paddingLeft:100 , paddingRight:250}} id='login-blogger-post'>
         <h1 style={{paddingLeft:100}}>New blog post</h1>
                {errorMessage}
          <div style={{width: 200, paddingLeft:100}}>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input className="form-control"
                     style={{width:300, height:50}}
                     type="text"
                     placeholder="new post title"
                     value={this.state.firstName}
                     onChange={(event) => this.handleChange(event, 'postTitle')} />
                </div>

                <div className="form-group" style={{color:"#101F"}}>
                  
                    <textarea   className="form-control"
                        value={this.state.value} 
                        rows="10"
                        onChange={(event) => this.handleChange(event, 'postData')} />
                 
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
         
       </div>
      );
    }
   
}

NewPost.PropTypes = {
     postTitle: PropTypes.string.isRequired,
     postData: PropTypes.string.isRequired

}
export default NewPost;



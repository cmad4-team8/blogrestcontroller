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
               postTitle: '', postData: '',
               status: '',
               url: '', error: false
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
       // for save status : 0
       // save and publish status : 1

       _SendLoginDeatils(form) {
           var blogpost = {
                "title" : form.postTitle,
                "saved_content": form.postData,
                "status": 0
           };

         
           $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    type: 'post',
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {
                        this.setState({data: data}); // Notice this
                        console.log(JSON.parse(data));
                    }.bind(this),
                    error: function(xhr, status, err) {
                            console.log(JSON.parse(data)); 
                            console.error(this.props.url, status, err.toString());
                    }.bind(this),
                    data: JSON.stringify(blogpost)
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
     postData: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired

}
export default NewPost;



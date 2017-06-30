import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonGroup, Glyphicon,Jumbotron, Table, Row, Col, Form, FormGroup,FormControl, Modal } from  'react-bootstrap';
import {ControlLabel, Input} from  'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import * as utils from './utils.js'


class NewPost extends React.Component {

       constructor(props,context) {
           super(props,context);
           this.state = {
               postTitle: '', postData: '',
               user: '', postDate: '',
               saved_content:'',
               publish_content:'',
               poststatus: '',
               url: '', error: false
           }
           /* we have to bind this */
           this.handleSubmit = this.handleSubmit.bind(this);
           this.handlePublish = this.handlePublish.bind(this);
           this.handleSave = this.handleSave.bind(this);
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
                "saved_content": this.state.saved_content,
                "published_content": this.state.publish_content,
                "status": this.state.poststatus,
                "login_id": utils.getSignedInUser(),
                "postDate": new Date
           };

         
           $.ajax({
                  
                    dataType: 'json',
                    type: 'POST',
                    url: this.props.url,
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {

                        this.setState({data: data}); // Notice this
                        console.log(data);
                        this.context.router.history.push('/');
                    }.bind(this),
                    error: function(xhr, status, err) {
                           if(xhr.status == 404) {
                              alert("Invalid user : "+this.props.login_id);
                           } else {
                            console.log(xhr); 
                            console.log(status, err);
                            console.error(this.props.url, status, err.toString());
                           }
                    }.bind(this),
                    data: JSON.stringify(blogpost)
           });
           
       }

       handleSave(event) {
           this.setState({
               poststatus : 0,
               saved_content : this.state.postData,
               publish_content : "",
           });
       }
       handlePublish(event){
       
           this.setState({
              poststatus : 1,
              saved_content : "",
              publish_content : this.state.postData
           });
       }
       handleSubmit(event) {
           event.preventDefault();
          
          var formData = { postTitle: this.state.postTitle,
                           postData: this.state.postData};
  
          if (this._validateInput()) {

              this.updateFormData(formData);
              this.setState({
                  postTitle: '', 
                  postData:  '',
                  publish_conent: "",
                  saved_content: "",
                  postDate: "",
                  user: "'"

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
       this._SendLoginDeatils(formData);
     }

     

    render(){
        var textareaStyle = {
      padding: '10px 8px',
      border: '1px solid rgba(39,41,43,.15)',
      borderRadius: 4,
      fontSize: 20,
      width: 500
      };
        var errorMessage = this._renderError();

        return (
         <div className="login jumbotron center-block" >
         <h1 style={{paddingLeft:100}}>New blog post</h1>
                {errorMessage}



          <div style={{width: 200, paddingLeft:100}}>
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input className="form-control"
                     style={{width:400, height:50}}
                     type="text"
                     placeholder="new post title"
                     value={this.state.postTitle}
                     onChange={(event) => this.handleChange(event, 'postTitle')} />
                </div>

                <div className="form-group" style={{color:"#101F"}}>
                  
                    <textarea   className="form-control"
                        value={this.state.postData} 
                        rows="10"
                        style={textareaStyle}
                        placeholder="blog text"
                        onChange={(event) => this.handleChange(event, 'postData')} />
                 
                </div>
                <div className="form-group">
                  <button type="submit"
                      className="btn btn-success" onClick={this.handleSave}>
                    Save
                  </button>
                </div>

                <div className="form-group">
                  <button type="submit"
                      className="btn btn-success" onClick={this.handlePublish}>
                    Publish
                  </button>
                </div>

           </form>
         </div>
         
       </div>
      );
    }
   
}

NewPost.PropTypes = {
     url: PropTypes.string.isRequired,
     login_id : PropTypes.string.isRequired


}

NewPost.contextTypes = {
        router: React.PropTypes.func.isRequired
};
export default NewPost;



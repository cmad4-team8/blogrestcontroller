import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DisplayMain extends React.Component {   
       constructor(props) {
           super(props);
           this.state ={
               updatedRecords: [],
               pagenum : 1
           }
         
         this.handleSubmit=this.handleSubmit.bind(this);
       }


       handleSubmit(){
        
           var getdata={
               "pagenum" : this.state.pagenum
           }
          var  str="pagenum=1"

          var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                 //console.log(this)
                 console.log(this.responseXML);
                } else {
                     console.log(this.responseXML);
                }
         };
    xmlhttp.open("GET", "blog/post/query?"+str, true);
    xmlhttp.send();
           /*$.ajax({
                    dataType: 'json',
                    type: 'GET',
                    url: this.props.url,
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {

                        this.setState({data: data}); // Notice this
                        console.log(JSON.parse(records));
                        header=xhr;
                        alert("HEAD: " + header, xhr)
                    }.bind(this),
                    error: function(xhr, status, err, data) {
                           if(xhr.status == 404) {
                              alert("Invalid user : "+this.props.login_id);
                           } else {
                             console.log(xhr); 
                             console.log(status, err);
                             console.error(this.props.url, status, err.toString());
                           }
                           alert("HEAD AND Tail: " + header + "+++" + xhr + "++")
                           this.setState({getrecords: xhr});
                    }.bind(this),
                    data: JSON.stringify(getdata)
        
            });*/
          
       }

    render(){
    
        return (
            <div>
                 <button type="submit"
                      ref="submit"
                      className="btn btn-success" onClick={this.handleSubmit}>
                    Query
                  </button> 
            </div>
        );

    }

}

DisplayMain.PropTypes = {
     url: PropTypes.string.isRequired,
  
}

export default DisplayMain
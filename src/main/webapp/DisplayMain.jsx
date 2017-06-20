import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DisplayMain extends React.Component {   
       constructor(props) {
           super(props); 
         this.handleSubmit=this.handleSubmit.bind(this);
         this.DisplayTable=this.DisplayTable.bind(this);
       }

    componentWillMount()
    {
      this.handleSubmit();

    }
      
    handleSubmit() {
          var  str="pagenum=1"
          var data={};     
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "blog/post/query?"+str, true);
          xhr.send(null); 

        xhr.onreadystatechange = function(e) {
             if (xhr.readyState == 4) {
                  if (!xhr.responseType || xhr.responseType === "text") {
                     data = xhr.responseText;
                     this.DisplayTable(data)
                  } else if (xhr.responseType === "document") {
                             data = xhr.responseXML;
                             this.DisplayTable(data)
                  } else {
                         data = xhr.response;
                         this.DisplayTable(data)
                         
                  }
                    
              }
        }.bind(this)
       
    }

    DisplayTable(data){
        //alert("display is called with>>>" + data + "JSON"+ JSON.stringify(data));
        var post = JSON.parse(data);
        var display='<h1/>';
        var i=0;
        
        $('#table-main-page').append('<tr><td> <blockquote><h1>'+post[i].title+'</h1><footer>'+ post[i].published_content+ '<br>' + post[i].postDate + '</footer></blockquote></td></tr>')
        for (i = 1; i < post.length; i++) {
            $('#table-main-page').append('<tr><td> <blockquote><h1>'+post[i].title+'</h1><footer>'+ post[i].published_content+ '<br>' + post[i].postDate + '</footer></blockquote></td></tr>')
            //$('#row-id').append('<div class="col-sm-4"><h3>'+ post[i].status +'</h3><p>' +post[i].published_content+ '</p></div>');
        }
        alert("THis target" + display)
        this.setState({
             page: display
        });
         $("#table-main-page").show();
    }


    render(){
    
        return (
            <div>
            </div>
        );
     }

}

DisplayMain.PropTypes = {
     url: PropTypes.string.isRequired,
  
}

export default DisplayMain
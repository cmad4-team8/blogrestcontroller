import React from 'react';
import ReactDOM from 'react-dom';

// import  JSX files 

import LoginPage from './LoginPage.jsx';
import NavigationPage from './NavigationPage.jsx';
import RegisterUser from './RegistrationPage.jsx';
import NewPost from './NewPost.jsx';
import ProfileUpdate from './ProfileUpdate.jsx'
import DisplayMain from './DisplayMain.jsx'



// react calls

ReactDOM.render(<NavigationPage />, document.getElementById('navigation'));
ReactDOM.render(<LoginPage url={'rest/user/login'} />, document.getElementById('loginPage'));
ReactDOM.render(<RegisterUser url={'rest/user/signup'} />, document.getElementById('registrationPage'));
ReactDOM.render(<NewPost url={'blog/post/create'} login_id={''} />, document.getElementById('newpostPage'));
ReactDOM.render(<ProfileUpdate url={'rest/user/prof_update'} />, document.getElementById('updateprofile'));
ReactDOM.render(<DisplayMain url={'blog/post/query'} />, document.getElementById('blogrecords'));



// Jquey


$(document).ready(function(){ 
     $("#user-login").click(function(){
       $("#register-blogger").hide();
       $("#login-blogger").show();
        $("#update-profile-blogger").hide();
       $("#login-blogger-post").hide();
       $("#navsearch").hide()
   
     });

     $("#main-home").click(function(){
       
       //$( "div[class='container']" ).hide();
       $("#login-blogger").hide();
       $("#register-blogger").hide();
       $("#login-blogger-post").hide();
        $("#update-profile-blogger").hide();
        $("#navsearch").hide()

     });

     $("#user-register").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").show();
         $("#update-profile-blogger").hide();
        $("#login-blogger-post").hide();
        $("#navsearch").hide();

     });

    $("#new-blog-post").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").hide();
         $("#update-profile-blogger").hide();
        $("#login-blogger-post").show();
        $("#navsearch").hide();
    });
   
    $("#updateProfile").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").hide();
        $("#login-blogger-post").hide();
        //alert("update profile")
        $("#update-profile-blogger").show();
        $("#navsearch").hide();
    });

 
   /* function GetAllBlogsOnLoad(){
        alert("Get all records")
           var posts={
               "postid": ""
           }
           $.ajaxSetup({async: false});
           $.ajax({
                  
                    dataType: 'json',
                    type: 'GET',
                    url: 'rest/post/query',
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    success: function(data) {
                        console.log(JSON.parse(data));
                        header=xhr;
                        alert("HEAD: " + header, xhr)
                    }.bind(this),
                    error: function(xhr, status, err) {
                           if(xhr.status == 404) {
                              alert("Invalid user : "+this.props.login_id);
                           } else {
                            console.log(xhr); 
                            console.log(status, err);
                            console.error(this.props.url, status, err.toString());
                           }
                           header=xhr;
                           alert("HEAD AND Tail: " + header + "+++" + xhr)
                           this.state.getrecords = header;
                           alert("This state" + this.state.getrecords )
                    }.bind(this),
                    data: JSON.stringify(posts)
            });  

    };

     for(var i=0;i<=10;i++) {
            var tv='How to write Blogs and jist on it'
            $('#table-main-page').append('<tr><td> <blockquote>'+tv + i +'<footer>'+ i + '</footer></blockquote></td></tr>');
            $('#row-id').append('<div class="col-sm-4"><h3>'+ i +'</h3><p>' + tv + '</p></div>');
     }*/
 });



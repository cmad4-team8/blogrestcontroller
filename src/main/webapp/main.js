import React from 'react';
import ReactDOM from 'react-dom';

// import  JSX files 

import LoginPage from './LoginPage.jsx';
import NavigationPage from './NavigationPage.jsx';
import RegisterUser from './RegistrationPage.jsx';
import NewPost from './NewPost.jsx';
import ProfileUpdate from './ProfileUpdate.jsx'
import Print from './MyModal.jsx'



// react calls

ReactDOM.render(<NavigationPage />, document.getElementById('navigation'));
ReactDOM.render(<LoginPage url={'rest/user/login'} />, document.getElementById('loginPage'));
ReactDOM.render(<RegisterUser url={'rest/user/signup'} />, document.getElementById('registrationPage'));
ReactDOM.render(<NewPost url={'blog/post/create'} login_id={'hi'} />, document.getElementById('newpostPage'));
ReactDOM.render(<ProfileUpdate url={'rest/user/prof_update'} />, document.getElementById('updateprofile'));
//ReactDOM.render(<Print text={"Test this"}/>, document.getElementById('modalid'));
// Jquey


$(document).ready(function(){ 
     $("#user-login").click(function(){
       $("#register-blogger").hide();
       $("#login-blogger").show();
        $("#update-profile-blogger").hide();
       $("#login-blogger-post").hide();
     });

     $("#main-home").click(function(){
       //$( "div[class='container']" ).hide();
       $("#login-blogger").hide();
       $("#register-blogger").hide();
       $("#login-blogger-post").hide();
        $("#update-profile-blogger").hide();

     });

     $("#user-register").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").show();
         $("#update-profile-blogger").hide();
        $("#login-blogger-post").hide();

     });

    $("#new-blog-post").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").hide();
         $("#update-profile-blogger").hide();
        $("#login-blogger-post").show();
    });
   
    $("#updateProfile").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").hide();
        $("#login-blogger-post").hide();
        //alert("update profile")
        $("#update-profile-blogger").show();
    });


 });



import React from 'react';
import ReactDOM from 'react-dom';

// import  JSX files 

import LoginPage from './LoginPage.jsx';
import NavigationPage from './NavigationPage.jsx';
import RegisterUser from './RegistrationPage.jsx';
import NewPost from './NewPost.jsx';
import ProfileUpdate from './ProfileUpdate.jsx'



// react calls

ReactDOM.render(<NavigationPage />, document.getElementById('navigation'));
ReactDOM.render(<LoginPage />, document.getElementById('loginPage'));
ReactDOM.render(<RegisterUser />, document.getElementById('registrationPage'));
ReactDOM.render(<NewPost />, document.getElementById('newpostPage'));
ReactDOM.render(<ProfileUpdate />, document.getElementById('updateprofile'))

// Jquey


$(document).ready(function(){ 
     $("#user-login").click(function(){
       $("#register-blogger").hide();
       $("#login-blogger").show();
       $("#login-blogger-post").hide();
     });

     $("#main-home").click(function(){
       //$( "div[class='container']" ).hide();
       $("#login-blogger").hide();
       $("#register-blogger").hide();
       $("#login-blogger-post").hide();

     });

     $("#user-register").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").show();
        $("#login-blogger-post").hide();

     });

    $("#new-blog-post").click(function(){
        $("#login-blogger").hide();
        $("#register-blogger").hide();
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


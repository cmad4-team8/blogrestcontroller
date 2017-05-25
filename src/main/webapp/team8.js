
function validate_user(user_name, user_password){
          
            $.ajax({type: "POST",
                    url: "",
                    dataType: 'json',
                    async: false,
                    data: '{"userName": "' + user_name + '", "password" : "' + user_password + '"}',
                    success: function(data, textStatus, JqXHR) {
                        alert('User: '+ data.user + 'authenticated: '+ data.authenticated);

                    }

                });
        
    }

function send_register_data(FirstName, LastName, UserId, PasswordEntered, PasswordRepeated, Hint, DOB, EmailId, Agreement){

                                alert("Registering user  " + FirstName)
                        
            $.ajax({type: "POST",
                    url: "",
                    dataType: 'json',
                    async: false,
                    data: '{ "userFirstName": "' + FirstName + '",\
                             "userLastName":  "' + LastName + '",\
                             "userLoginId": "' + UserId + '",\
                             "userPassword" : "' + PasswordEntered + '",\
                             "userConfirmPassword": "' + PasswordRepeated + '",\
                             "userHint": "' + Hint + '",\
                             "userDob" : "' + DOB + '",\
                             "userEmailId": "' + EmailId + '",\
                             "userAgree": "' + Agreement + '" \
                            }',
            
                    success: function(data, textStatus, JqXHR) {
                        alert('User: '+ data.user + 'Registered successfully');
                    }
                    
            });
}


$(document).ready(function(){  

   $("#blogMainPage_sub1").show();

    $("#signupBtnM").click(function(){
        $("#signupForm").show();
        $("#LoginSuccess").hide();
        $("#headline").hide(); 
        $("#loginForm").hide();
        $("#blogMainPage_sub1").hide();
        
    });
    
    $("#MainLink").click(function(){
        $("#headline").show();
        $("#loginForm").hide();
         $("#signupForm").hide();
         $("#forgotpassForm").hide();
         $("#blogMainPage_sub1").hide();
         
    });

    $("#signinBtnM").click(function(){
       $("#loginForm").show();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#forgotpassForm").hide();  
       $("#LoginSuccess").hide()

       $("#blogMainPage_sub1").hide();
      
    });

    $("#forgotpBtn").click(function(){
        $("#forgotpassForm").show();

       $("#loginForm").hide();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#LoginSuccess").hide();
       $("#blogMainPage_sub1").hide();
       
        
    });

    /* sign in user */

    $("#signinBtn").click(function(){

                alert("Processing Login");
                var uname = $("#userid").val();
                var passwd = $("#passwd").val();
                $("#loginForm").hide();
               
              $("#blogMainPage_sub1").hide();
              var logindata = {
                  "user" : uname,
                  "passowrd" : passwd
              };
              $.ajax({
                  url: 'rest/user/login',
                  type : 'post',
                  dataType: 'json',
                  contentType: "application/json; charset=utf-8",
                  success : function(data) {
                      $("#LoginSuccess").show();
                  },
                  data : JSON.stringify(logindata)

              });
               /* validate_user(uname, passwd);*/
    });

    /* register user, val() not value */


    $("#registerBtn").click(function(){
        var FirstName = $("#ufname").val();
        var LastName  = $("#ulname").val();
        var UserId    = $("#ucuid").val();
        var PasswordEntered = $("#ucpass").val();
        var PasswordRepeated = $("#ucfpass").val();
        var Hint = $("#uhint").val();
        var DOB = $("#udob").val();
        var EmailId = $("#uemail").val();
        var Agreement = $("#uagree").val();
        send_register_data(FirstName, LastName, UserId, PasswordEntered, PasswordRepeated, Hint, DOB, EmailId, Agreement);


    });

/* 
  populate blog on page load */

$(function() {
    for(i=0;i<=50;i++) {   
      $('#TableMain').append('<tr><td><a href="#">How to write Blogs and jist on it' + i + '</td></tr>');
    }
});

/*  populate blog entries on headline click */

    $("#MainLink").on('click', function() {
   
         $("#blogMainPage_sub1").show();
         for(i=0;i<=50;i++) {   
             tv='How to write Blogs and jist on it'
            $('#TableMain').append('<tr><td>'+tv + i + '</td></tr>');
        }
    });

    $("#blogSearch").click(function(){


    });

}); /* end of doc ready */







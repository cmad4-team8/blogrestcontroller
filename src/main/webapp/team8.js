
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
                    url: "rest/user/signup",
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



// document ready 
$(document).ready(function(){

     $("#main-home").click(function(){
         $( "div[class='container']" ).hide();
         $("#blogger-main").show();

         for(i=0;i<=10;i++) {   
             tv='How to write Blogs and jist on it'
            $('#table-main-page').append('<tr><td> <blockquote>'+tv + i +'<footer>'+ i + '</footer></blockquote></td></tr>');
            $('#row-id').append('<div class="col-sm-4"><h3>'+ i +'</h3><p>' + tv + '</p></div>');
         }
  
      });

    // login

    $("#login-id").click(function(){
        $( "div[class='container']" ).hide();
        $("#login-blogger").show();
     });
   
    $("#sign-in-btn").click(function(){

        var uname = $("#userid").val();
        var passwd = $("#passwd").val();
        $("#loginForm").hide();     
        $("#blogMainPage_sub1").hide();
        $("#LoginFailed").hide();
        $("#LoginSuccess").hide();
        alert(uname + passwd);
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

              }).fail(function() {
                   alert( "error" );
                   $("#LoginFailed").show();
             });

        
    });

    // login end

    $("#register-id").click(function(){
        $( "div[class='container']" ).hide();
        $("#register-blogger").show();
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

    $("#forgot-pass-btn").click(function(){
        $( "div[class='container']" ).hide();
        $("#forgot-password").show();
       
    });

   // search
   $("#search-btn-id").click(function(){
      alert("searching for  "+ $("#search-item").val())
      $( "div[class='container']" ).hide();
      $("#blogger-main").show();
   });

   //  new blog selected
   $("#newblog-id").click(function(){
      // if user loged in then allow else ask user to log
       alert("please login to create new blog")
       //$("#login-blogger").show();
       $( "div[class='container']" ).hide();
    if(0){
         $("#login-blogger").show();
    } else {
       $("#user-id").show();
       $("#new-post-blogger").show();
   }
       
   });

}); // ready end 




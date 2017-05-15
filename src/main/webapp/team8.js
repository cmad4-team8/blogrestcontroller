

$(document).ready(function(){       
    $("#signupBtnM").click(function(){
        $("#signupForm").show();
        $("#headline").hide(); 
      
             
    });
    
    $("#MainLink").click(function(){
        $("#headline").show();
        $("#loginForm").hide();
         $("#signupForm").hide();
         $("#forgotpassForm").hide();
         
    });

    $("#signinBtnM").click(function(){
       $("#loginForm").show();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#forgotpassForm").hide();  
       $("#LoginSuccess").hide()

       
      
    });

    $("#forgotpBtn").click(function(){
        $("#forgotpassForm").show();

       $("#loginForm").hide();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#LoginSuccess").hide();
       
        
    });

    $("#signinBtn").click(function(){

                alert("Processing Login");
                var uname = $("#userid").val();
                var passwd = $("#passwd").val();
                $("#loginForm").hide()
                $("#LoginSuccess").show();
              

                validate_user(uname, passwd);
                
    });

}); /* end of doc ready */

function validate_user(user_name, user_password){
          
            $.ajax(
                {
                    type: "POST",
                    url: "TODO",
                    dataType: 'json',
                    async: false,
                    data: '{"userName": "' + user_name + '", "password" : "' + user_password + '"}',
                    success: function(data, textStatus, JqXHR) {
                        alert('User: '+ data.user + 'authenticated: '+ data.authenticated);

                    }

                }
            );
        
    }
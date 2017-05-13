/*$(document).ready(function() {
	$("#addLink").click(function(e) {
		$("#addForm").show();
	});
	$("#addBtn").click(function() {
		$("#addForm").hide();
		var isbn = $("#isbn").val();
		var title = $("#title").val();
		var book = {
			"isbn" : isbn,
			"title" : title
		};
		$.ajax({
			url : 'rest/library/book',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				$("#addResult").show();
			},
			data : JSON.stringify(book)
		});
	});

}); */

$(document).ready(function(){       
    $("#signupBtnM").click(function(){
        $("#signupForm").show();
        $("#headline").hide(); 
        /*$('div:not(#signupForm)').hide();*/
             
    });
    
    $("#MainLink").click(function(){
        $("#headline").show();
        $("#loginForm").hide();
         $("#signupForm").hide();
         $("#forgotpassForm").hide();
         //$('div:not(#headline)').hide();
         
    });

    $("#signinBtnM").click(function(){
       $("#loginForm").show();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#forgotpassForm").hide();  
       $("#LoginSuccess").hide()
       //$('div:not(#loginForm)').hide();
       
      
    });

    $("#forgotpBtn").click(function(){
        $("#forgotpassForm").show();

       $("#loginForm").hide();
       $("#headline").hide();
       $("#signupForm").hide();
       $("#LoginSuccess").hide();
       //$('div:not(#forgotpassForm').hide();
        
    });

    $("#signinBtn").click(function(){

                alert("Processing Login");
                var uname = $("#userid").val();
                var passwd = $("#passwd").val();
                $("#loginForm").hide()
                $("#LoginSuccess").show();
                //$('div:not(#LoginSuccess)').hide();

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
            )

        
  }
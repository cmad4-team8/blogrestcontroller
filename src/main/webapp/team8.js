

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

    // login end

    $("#register-id").click(function(){
        $( "div[class='container']" ).hide();
        $("#register-blogger").show();
    
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




     /*$("#register-blogger").hide();
         $("#blogger-main").show();
         $("#login-blogger").hide();
         $("#main-page-blogger").hide();
         $("#new-post-blogger").hide();
         $("#register-blogger").hide();
         $("#blogger-main").show();
         $("#login-blogger").hide();
         $("#main-page-blogger").hide();
         $("#new-post-blogger").hide();*/
         

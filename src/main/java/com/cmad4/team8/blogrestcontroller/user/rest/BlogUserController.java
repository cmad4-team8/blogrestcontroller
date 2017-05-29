package com.cmad4.team8.blogrestcontroller.user.rest;

import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.service.Usercontroller;
import com.cmad4.team8.blogrestcontroller.user.api.IncorrectLoginException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundExcption;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
public class BlogUserController {
	private static Blogger_Interface bi = new Usercontroller();

	public BlogUserController() {
		// TODO Auto-generated constructor stub
	}
	
	@POST
	@Path("/signup")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response signup(Blogger b)
	{
		bi.signup(b);
		return Response.ok().build();
	}
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response signin(@FormParam("login") String login, @FormParam("password") String password)
	{
		try {
			System.out.println("user_name: " + login + "   pwd: " + password); 
			if (!validateuser(login,password))
			{
				return Response.status(Status.FORBIDDEN.getStatusCode())
          .entity("Access Denied for this functionality!!!").build();
			}
			//String token = issueToken(login);
			//return Response.ok().header(AUTHORIZATION, "Bearer " + token).build();
			//System.out.println("Token issued: " + token);
			return Response.ok().build();
		} catch (UserNotFoundExcption e) {
			System.out.println("User Not found Exception for user " + login);
			return Response.status(UNAUTHORIZED).build();
		} catch (IncorrectLoginException e) {
			// TODO: handle exception
			System.out.println("Incorrect Login Exception for user " + login);
			return Response.status(UNAUTHORIZED).build();
		}  catch (Exception e) {
			System.out.println("General Exception for user " + login);
			return Response.status(UNAUTHORIZED).build();
		}
		
	}
/*
	private String issueToken(String login) {
        Key key = keyGenerator.generateKey();
        String jwtToken = Jwts.builder()
                .setSubject(login)
                .setIssuer("/brc/rest/login")
                .setIssuedAt(new Date())
                .setExpiration(toDate(LocalDateTime.now().plusMinutes(15L)))
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        return jwtToken;
    }

	private Date toDate(LocalDateTime localDateTime) {
		// TODO Auto-generated method stub
		return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
	}
*/
	private boolean validateuser(String username, String pwd) {
		// TODO Auto-generated method stub
		
			Blogger b = bi.rtrvProfile(username);
			if (b == null)
			{
				throw new UserNotFoundException();
			} else if (pwd.compareTo(b.getPwd()) != 0){
				throw new IncorrectLoginException();
			}
			return true;
	}

}

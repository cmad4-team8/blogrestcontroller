package com.cmad4.team8.blogrestcontroller.user.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.service.Usercontroller;

@Path("/user")
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

}

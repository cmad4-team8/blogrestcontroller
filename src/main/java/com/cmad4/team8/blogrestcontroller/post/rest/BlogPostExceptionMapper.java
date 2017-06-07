package com.cmad4.team8.blogrestcontroller.post.rest;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

import com.cmad4.team8.blogrestcontroller.post.api.PostNotFoundException;


public class BlogPostExceptionMapper implements ExceptionMapper<Throwable> {

	@Override
	public Response toResponse(Throwable t) {
		// TODO Auto-generated method stub
		t.printStackTrace();
		if (t instanceof PostNotFoundException)
			return Response.status(404).build();
		
		return Response.status(500).build();
	}

}

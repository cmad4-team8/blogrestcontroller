package com.cmad4.team8.blogrestcontroller.post.rest;

import java.util.List;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cmad4.team8.blogrestcontroller.authentication.JWTTokenNeeded;
import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;

import com.cmad4.team8.blogrestcontroller.post.api.CommentNotFoundException;
import com.cmad4.team8.blogrestcontroller.post.api.Comments_Interface;
import com.cmad4.team8.blogrestcontroller.post.api.InvalidCommentException;


import com.cmad4.team8.blogrestcontroller.post.api.comments;
import com.cmad4.team8.blogrestcontroller.post.service.CommentsController;


@Path("/comment")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
public class BlogCommentController {

	private static Comments_Interface ci = new CommentsController();
	
	public BlogCommentController() {
		// TODO Auto-generated constructor stub
	}
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@JWTTokenNeeded
	public Response create(comments c) throws InvalidCommentException, CommentGeneralException
	{
		ci.Create(c);
		return Response.ok().build();
	}
	
	@GET
	@Path("/{c_id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response read(@PathParam("c_id")int c_id) throws CommentNotFoundException, CommentGeneralException
	{
		comments c = ci.read(c_id);
		return Response.ok().entity(c).build();
	}
	
	@GET
    @Path("/query")
    public Response read(@QueryParam("user") String login_id,
    		@QueryParam("pagenum") int pageNum, 
    		@QueryParam("post") int p_id) throws CommentNotFoundException, CommentGeneralException
    {
    	List<comments> cmt_list;
    	GenericEntity<List<comments>> postentities;
    	if (login_id != null) {
    	    cmt_list = ci.readallbyuser(login_id, pageNum);
    	} else {
    		cmt_list = ci.readallbypost(p_id, pageNum);
    	}
    	postentities = new GenericEntity<List<comments>>(cmt_list){
    		
    	};
    	return Response.ok().entity(postentities).build();	
    }

	@DELETE
	@Path("/{c_id}")
	public Response removeComment(@PathParam("c_id")int c_id) throws CommentNotFoundException, CommentGeneralException
	{
		ci.removeCmt(c_id);
		return Response.ok().build();
	}

}

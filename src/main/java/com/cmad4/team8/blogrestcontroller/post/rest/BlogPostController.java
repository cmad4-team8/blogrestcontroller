package com.cmad4.team8.blogrestcontroller.post.rest;

import java.util.List;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.cmad4.team8.blogrestcontroller.authentication.JWTTokenNeeded;
import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;

import com.cmad4.team8.blogrestcontroller.post.api.InvalidPostException;
import com.cmad4.team8.blogrestcontroller.post.api.PostNotFoundException;
import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.post.api.Posts_interface;
import com.cmad4.team8.blogrestcontroller.post.service.PostController;




@Path("/post")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
public class BlogPostController {
	
	private Posts_interface pi;

	public BlogPostController() {
		super();
		// TODO Auto-generated constructor stub
		
		this.pi = new PostController();
	}
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@JWTTokenNeeded
	public Response create(Posts p) throws InvalidPostException, PostsException
	{
		Posts q = pi.saveandpublish(p);
		return Response.ok().entity(q).build();
	}
	
	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@JWTTokenNeeded
	public Response saveandpublish(Posts p) throws InvalidPostException, PostsException
	{
		Posts q = pi.saveandpublish(p);
		return Response.ok().entity(q).build();
	}
	
	@GET
	@Path("/{postid}")
	public Response read(@PathParam("postid")Long postid) throws PostNotFoundException, PostsException
	{
		Posts p = pi.read(postid);
		return Response.ok().entity(p).build();
	}
	
    @GET
    @Path("/query")
    public Response read(@QueryParam("user") String login_id,
    		@QueryParam("pagenum") int pageNum) throws PostNotFoundException, PostsException
    {
    	List<Posts> blog_list;
    	GenericEntity<List<Posts>> postentities;
    	if (login_id == null) {
    		blog_list = pi.readAllPosts(pageNum);
    	} else {
    	    blog_list = pi.readByUserId(login_id, pageNum);
    	}
    	
    	postentities = new GenericEntity<List<Posts>>(blog_list){
    		
    	};
    	
    	return Response.ok().entity(postentities).build();
    	
    }
    
    @DELETE
    @Path("/{postid}")
    public Response removePost(@PathParam("postid")Long postid) throws PostNotFoundException, PostsException
    {
    	pi.deletePost(postid);
    	return Response.ok().build();
    }
	

}

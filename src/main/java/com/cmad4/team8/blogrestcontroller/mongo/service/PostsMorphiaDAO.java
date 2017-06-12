package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.post.api.comments;

public class PostsMorphiaDAO extends BasicDAO<Posts, Long> implements PostsMorphiaDAO_Interface{
	private CustomSequence_Interface cus_int;
	
	public PostsMorphiaDAO(Class<Posts> entityClass, Datastore ds) {
		super(entityClass, ds);
		cus_int = new CustomSequencesDAO(CustomSequences.class, ds);
		// TODO Auto-generated constructor stub
	}

	@Override
	public Posts saveandpublish(Posts blog) {
		// TODO Auto-generated method stub
		Posts ret_post;
		if (this.get(blog.getPid()) == null) {
			ret_post = this.createnewpost(blog);
		} else {
			this.getDatastore().merge(blog);
			ret_post = blog;
		}
		return ret_post;
	}

	@Override
	public Posts createnewpost(Posts blog) {
		// TODO Auto-generated method stub
		blog.setPid(cus_int.getNextSequence("Posts"));
		this.save(blog);
		return blog;
	}

	@Override
	public Posts read(Long p_id) {
		// TODO Auto-generated method stub
		Posts ps = this.get(p_id);
		return ps;
	}

	@Override
	public List<Posts> readAllPosts(int pageNum) {
		// TODO Auto-generated method stub
		//List<Posts> all_post = this.getDatastore().find(arg0)
		Query<Posts> query = this.getDatastore().find(Posts.class);
		query.or(query.criteria("status").equal("1"));
		
		List<Posts> user_id_posts = query.asList();
		
		return user_id_posts;
		
	}

	@Override
	public List<Posts> readByUserId(String login_id, int pageNum) {
		// TODO Auto-generated method stub
		Query<Posts> query = this.getDatastore().find(Posts.class);
		query.or(query.criteria("login_id").equal(login_id),query.criteria("status").equal("1"));
		
		List<Posts> user_id_posts = query.asList();
		
		return user_id_posts;
	}

	@Override
	public void deletePost(Long p_id) {
		// TODO Auto-generated method stub
		this.deletePostwithComments(p_id, null);
		cus_int.update_freelist("Posts", p_id, false);
		
	}
	
	
	public void deletePostwithComments(Long p_id, CommentsMorphiaDAO_Interface ci)
	{
		if (ci == null) {
			ci = new CommentsMorphiaDAO(comments.class, this.getDatastore());
		}
		ci.delete_cmts_by_Post(p_id);
		this.deleteById(p_id);
	}
	
	@Override
	public void deletePostbyUserId (String login_id) {
		
		
		CommentsMorphiaDAO_Interface ci = new CommentsMorphiaDAO(comments.class, this.getDatastore());
		Query<Posts> query = this.getDatastore().find(Posts.class);
		query.or(query.criteria("login_id").equal(login_id));
		
		List<Posts> post_by_userID  = query.asList();
		
		for (Posts p : post_by_userID) {
			Long p_id = p.getPid();
			this.deletePostwithComments(p_id, ci);
			cus_int.update_freelist("Posts", p_id, false);
		}
		
		//this.deleteByQuery(query);
	}
	
}

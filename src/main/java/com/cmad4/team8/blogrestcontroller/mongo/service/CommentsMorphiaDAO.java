package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;

import com.cmad4.team8.blogrestcontroller.post.api.Comments;

public class CommentsMorphiaDAO extends BasicDAO<Comments, Long> implements CommentsMorphiaDAO_Interface {
	private CustomSequence_Interface cus_int;

	public CommentsMorphiaDAO(Class<Comments> entityClass, Datastore ds) {
		super(entityClass, ds);
		// TODO Auto-generated constructor stub
		cus_int = new CustomSequencesDAO(CustomSequences.class, ds);
	}

	@Override
	public void Create(Comments c) {
		// TODO Auto-generated method stub
		c.setC_id(cus_int.getNextSequence("Comments"));
		this.save(c);
		
	}

	@Override
	public Comments read(Long c_id) {
		// TODO Auto-generated method stub
		Comments c = this.get(c_id);
		return c;
	}

	@Override
	public List<Comments> read_all_by_post(Long p_id, int pagenum) {
		// TODO Auto-generated method stub
		Query<Comments> query = this.getDatastore().find(Comments.class);
		query.or(query.criteria("p_id").equal(p_id));
		
		List<Comments> post_id_cmts = query.asList();
		
		return post_id_cmts;
		
	}

	@Override
	public List<Comments> read_all_by_user(String login_id, int pagenum) {
		// TODO Auto-generated method stub
		Query<Comments> query = this.getDatastore().find(Comments.class);
		query.or(query.criteria("login_id").equal(login_id));
		
		List<Comments> user_id_cmts = query.asList();
		
		return user_id_cmts;
		
	}

	@Override
	public void delete(Long c_id) {
		// TODO Auto-generated method stub
		this.deleteById(c_id);
		cus_int.update_freelist("Comments", c_id, false);
	}
	
	@Override
	public void delete_cmts_by_Post(Long p_id) {
		Query<Comments> query = this.getDatastore().find(Comments.class);
		query.or(query.criteria("p_id").equal(p_id));
		List<Comments> user_id_cmts = query.asList();
		this.deleteByQuery(query);
		
		for (Comments c : user_id_cmts) {
			cus_int.update_freelist("Comments",c.getC_id(), false);
		}
	}
	
	@Override
	public void delete_cmts_by_UserId(String login_id) {
		Query<Comments> query = this.getDatastore().find(Comments.class);
		query.or(query.criteria("login_id").equal(login_id));
		
		this.deleteByQuery(query);
		
	}

}

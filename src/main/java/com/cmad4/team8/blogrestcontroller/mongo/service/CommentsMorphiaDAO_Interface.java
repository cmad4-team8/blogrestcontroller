package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.util.List;

import org.mongodb.morphia.dao.DAO;

import com.cmad4.team8.blogrestcontroller.post.api.comments;

public interface CommentsMorphiaDAO_Interface extends DAO<comments, Long> {

	public void Create (comments c);
	public comments read (Long c_id);
	public List<comments> read_all_by_post(Long p_id, int pagenum);
	public List<comments> read_all_by_user(String login_id, int pagenum);
	public void delete(Long c_id);
	void delete_cmts_by_Post(Long p_id);
	void delete_cmts_by_UserId(String login_id);
}

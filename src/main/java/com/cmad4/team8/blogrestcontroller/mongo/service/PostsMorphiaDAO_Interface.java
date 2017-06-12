package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.util.List;

import org.mongodb.morphia.dao.DAO;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;

public interface PostsMorphiaDAO_Interface extends DAO<Posts, Long> {
	
	public Posts saveandpublish(Posts blog);
	
	public Posts createnewpost (Posts blog);

    public Posts read(Long p_id);

    public List<Posts> readAllPosts(int pageNum);

    public List<Posts> readByUserId(String login_id, int pageNum);

    public void deletePost(Long p_id);

	void deletePostbyUserId(String login_id);

}

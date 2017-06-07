package com.cmad4.team8.blogrestcontroller.post.data;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;



public interface PostDAO {
	public Posts saveandpublish(Posts blog);
	
	public void createnewpost (Posts blog);

    public Posts read(int p_id);

    public List<Posts> readAllPosts(int pageNum);

    public List<Posts> readByUserId(String login_id, int pageNum);

    public void deletePost(int p_id);

}

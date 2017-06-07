package com.cmad4.team8.blogrestcontroller.post.data;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.post.api.comments;

public interface CommentsDAO {

	public void create (comments c);
	public comments read (int c_id);
	public List<comments> read_all_by_post(int p_id, int pagenum);
	public List<comments> read_all_by_user(String login_id, int pagenum);
	public void delete(int c_id);
	
}

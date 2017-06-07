package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;

public interface Comments_Interface {
	
	public void Create(comments c) throws InvalidCommentException, CommentGeneralException;
	public comments read(int c_id) throws CommentNotFoundException, CommentGeneralException;
	public List<comments> readallbypost(int p_id, int pagenum) throws CommentNotFoundException, CommentGeneralException;
	public List<comments> readallbyuser(String login_id, int pagenum) throws CommentNotFoundException, CommentGeneralException;

}

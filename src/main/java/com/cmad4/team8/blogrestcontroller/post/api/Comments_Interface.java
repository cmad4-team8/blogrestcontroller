package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;

public interface Comments_Interface {
	
	public void Create(Comments c) throws InvalidCommentException, CommentGeneralException;
	public Comments read(Long c_id) throws CommentNotFoundException, CommentGeneralException;
	public List<Comments> readallbypost(Long p_id, int pagenum) throws CommentNotFoundException, CommentGeneralException;
	public List<Comments> readallbyuser(String login_id, int pagenum) throws CommentNotFoundException, CommentGeneralException;
	public void removeCmt(Long c_id) throws CommentNotFoundException, CommentGeneralException;

}

package com.cmad4.team8.blogrestcontroller.post.service;

import java.net.UnknownHostException;
import java.util.List;

import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;
import com.cmad4.team8.blogrestcontroller.mongo.service.BRControllerMongoService;
import com.cmad4.team8.blogrestcontroller.mongo.service.CommentsMorphiaDAO;
import com.cmad4.team8.blogrestcontroller.mongo.service.CommentsMorphiaDAO_Interface;

import com.cmad4.team8.blogrestcontroller.post.api.CommentNotFoundException;
import com.cmad4.team8.blogrestcontroller.post.api.Comments_Interface;
import com.cmad4.team8.blogrestcontroller.post.api.InvalidCommentException;

import com.cmad4.team8.blogrestcontroller.post.api.comments;


public class CommentsController implements Comments_Interface {

	private BRControllerMongoService morphia;
	private CommentsMorphiaDAO_Interface dao;
	
	public CommentsController() {
		// TODO Auto-generated constructor stub
		try {
			this.morphia = new BRControllerMongoService();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.dao = new CommentsMorphiaDAO(comments.class, this.morphia.getDatastore());
	}

	@Override
	public void Create(comments c) throws InvalidCommentException, CommentGeneralException {
		// TODO Auto-generated method stub
		if (c==null) {
			throw new InvalidCommentException();
		}
		dao.Create(c);

	}

	@Override
	public comments read(Long c_id) throws CommentNotFoundException, CommentGeneralException {
		// TODO Auto-generated method stub
		comments c = dao.read(c_id);
		if (c == null) {
			throw new CommentNotFoundException();
		}
		return c;
	}

	@Override
	public List<comments> readallbypost(Long p_id, int pagenum) throws CommentNotFoundException, CommentGeneralException {
		// TODO Auto-generated method stub
		List<comments> c_list = dao.read_all_by_post(p_id, pagenum);
		
		if (c_list == null) {
			throw new CommentNotFoundException();
		}
		return c_list;
	}

	@Override
	public List<comments> readallbyuser(String login_id, int pagenum) throws CommentNotFoundException, CommentGeneralException {
		// TODO Auto-generated method stub
		List<comments> c_list = dao.read_all_by_user(login_id, pagenum);
		
		if (c_list == null) {
			throw new CommentNotFoundException();
		}
		return c_list;
	}

	@Override
	public void removeCmt(Long c_id) throws CommentNotFoundException, CommentGeneralException {
		// TODO Auto-generated method stub
		comments c = dao.read(c_id);
		if (c == null) {
			throw new CommentNotFoundException();
		}
		dao.delete(c_id);
		
	}

}

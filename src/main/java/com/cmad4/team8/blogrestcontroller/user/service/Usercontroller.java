package com.cmad4.team8.blogrestcontroller.user.service;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.api.DuplicateUserException;
import com.cmad4.team8.blogrestcontroller.user.api.InvalidUserException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundException;
import com.cmad4.team8.blogrestcontroller.user.data.BloggerDAO;
import com.cmad4.team8.blogrestcontroller.user.data.JPABloggerDAO;

public class Usercontroller implements Blogger_Interface {

	private BloggerDAO dao = new JPABloggerDAO();
	
	public Usercontroller() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void signup(Blogger user) throws InvalidUserException, DuplicateUserException, BloggerException {
		// TODO Auto-generated method stub
		if (user == null) {
			throw new InvalidUserException();
		}
		if (dao.rtrvProfile(user.getLogin_id()) != null) {
			throw new DuplicateUserException();
		}
		dao.signup(user);
	}

	@Override
	public Blogger rtrvProfile(String user) throws UserNotFoundException, BloggerException {
		// TODO Auto-generated method stub
		Blogger b = dao.rtrvProfile(user);
		return b;
	}

	@Override
	public void update(Blogger user) throws UserNotFoundException, BloggerException {
		// TODO Auto-generated method stub
		if (dao.rtrvProfile(user.getLogin_id()) == null) {
			throw new UserNotFoundException();
		}
		dao.update(user);
	}

}

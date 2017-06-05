package com.cmad4.team8.blogrestcontroller.user.api;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

public interface Blogger_Interface {
	public void signup(Blogger user) throws InvalidUserException, DuplicateUserException, BloggerException;
	public Blogger rtrvProfile(String user) throws UserNotFoundException, BloggerException;
	public void update(Blogger user) throws BloggerException;

}

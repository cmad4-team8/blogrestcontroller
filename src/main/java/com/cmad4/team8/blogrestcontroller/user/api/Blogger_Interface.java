package com.cmad4.team8.blogrestcontroller.user.api;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

public interface Blogger_Interface {
	public void signup(Blogger user) throws InvalidUserException, DuplicateUserException, BloggerException;
	public void login(String user, String pwd) throws IncorrectLoginException, UserNotFoundExcption, BloggerException;
	public void logout(String user) throws UserNotLoggedException, UserNotFoundException, BloggerException;
	public Blogger rtrvProfile(String user) throws UserNotFoundException, BloggerException;

}

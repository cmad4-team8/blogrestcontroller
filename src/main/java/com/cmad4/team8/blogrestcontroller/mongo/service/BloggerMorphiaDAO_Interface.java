package com.cmad4.team8.blogrestcontroller.mongo.service;

import org.mongodb.morphia.dao.DAO;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.DuplicateUserException;
import com.cmad4.team8.blogrestcontroller.user.api.InvalidUserException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundException;

public interface BloggerMorphiaDAO_Interface extends DAO<Blogger, String> {
	public void signup(Blogger user) throws InvalidUserException, DuplicateUserException, BloggerException;
	public Blogger rtrvProfile(String user) throws UserNotFoundException, BloggerException;
	public void update(Blogger user) throws UserNotFoundException, BloggerException;
	public void remove(String user) throws UserNotFoundException, BloggerException;
}

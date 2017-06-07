package com.cmad4.team8.blogrestcontroller.post.api;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;

public class PostNotFoundException extends PostsException {

	public PostNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PostNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public PostNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public PostNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public PostNotFoundException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}

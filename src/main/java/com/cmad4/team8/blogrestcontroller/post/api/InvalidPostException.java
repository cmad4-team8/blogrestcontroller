package com.cmad4.team8.blogrestcontroller.post.api;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;

public class InvalidPostException extends PostsException {

	public InvalidPostException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InvalidPostException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public InvalidPostException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public InvalidPostException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public InvalidPostException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}

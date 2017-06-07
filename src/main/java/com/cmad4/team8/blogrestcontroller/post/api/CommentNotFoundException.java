package com.cmad4.team8.blogrestcontroller.post.api;

import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;

@SuppressWarnings("serial")
public class CommentNotFoundException extends CommentGeneralException {

	public CommentNotFoundException() {
		// TODO Auto-generated constructor stub
	}

	public CommentNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public CommentNotFoundException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public CommentNotFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public CommentNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

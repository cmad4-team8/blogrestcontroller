package com.cmad4.team8.blogrestcontroller.post.api;

import com.cmad4.team8.blogrestcontroller.exceptions.CommentGeneralException;

@SuppressWarnings("serial")
public class InvalidCommentException extends CommentGeneralException {

	public InvalidCommentException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InvalidCommentException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public InvalidCommentException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public InvalidCommentException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public InvalidCommentException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

}

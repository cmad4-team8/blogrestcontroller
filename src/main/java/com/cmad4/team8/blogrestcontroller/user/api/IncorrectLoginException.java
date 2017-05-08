package com.cmad4.team8.blogrestcontroller.user.api;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

@SuppressWarnings("serial")
public class IncorrectLoginException extends BloggerException {

	public IncorrectLoginException() {
		// TODO Auto-generated constructor stub
	}

	public IncorrectLoginException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public IncorrectLoginException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public IncorrectLoginException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public IncorrectLoginException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

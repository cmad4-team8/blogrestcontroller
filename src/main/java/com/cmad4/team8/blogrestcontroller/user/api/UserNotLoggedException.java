package com.cmad4.team8.blogrestcontroller.user.api;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

@SuppressWarnings("serial")
public class UserNotLoggedException extends BloggerException {

	public UserNotLoggedException() {
		// TODO Auto-generated constructor stub
	}

	public UserNotLoggedException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public UserNotLoggedException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public UserNotLoggedException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public UserNotLoggedException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

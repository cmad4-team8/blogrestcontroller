package com.cmad4.team8.blogrestcontroller.user.api;

import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

@SuppressWarnings("serial")
public class UserNotFoundExcption extends BloggerException {

	public UserNotFoundExcption() {
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundExcption(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundExcption(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundExcption(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public UserNotFoundExcption(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

}

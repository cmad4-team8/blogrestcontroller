package com.cmad4.team8.blogrestcontroller.user.api;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Act_Blogger {
	@Id
	private String token;
	private String login_id;
	
	public String getLogin_id() {
		return login_id;
	}
	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Act_Blogger(String login_id, String token) {
		super();
		this.login_id = login_id;
		this.token = token;
	}
	
	public Act_Blogger() {
		// TODO Auto-generated constructor stub
	}

}

package com.cmad4.team8.blogrestcontroller.user.rest;

public class UserCredentials {
	private String login_id;
	private String pwd;
	public UserCredentials(String login_id, String passwoed) {
		super();
		this.login_id = login_id;
		this.pwd = passwoed;
	}
	public UserCredentials() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getLogin_id() {
		return login_id;
	}
	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String passwoed) {
		this.pwd = passwoed;
	}
	

}

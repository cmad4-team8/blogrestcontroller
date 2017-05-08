package com.cmad4.team8.blogrestcontroller.post.api;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class comments {
	@Id
	@GeneratedValue
	private int c_id;
	private String login_id;
	private int p_id;
	private String comment;

	public comments() {
		// TODO Auto-generated constructor stub
	}

	public comments(int c_id, String login_id, int p_id, String comment) {
		super();
		this.c_id = c_id;
		this.login_id = login_id;
		this.p_id = p_id;
		this.comment = comment;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public int getP_id() {
		return p_id;
	}

	public void setP_id(int p_id) {
		this.p_id = p_id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}

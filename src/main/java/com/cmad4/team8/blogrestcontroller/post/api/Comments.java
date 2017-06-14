package com.cmad4.team8.blogrestcontroller.post.api;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class Comments {
	@Id
	private Long c_id;
	private String login_id;
	private Long p_id;
	private String comment;

	public Comments() {
		// TODO Auto-generated constructor stub
	}

	public Comments(Long c_id, String login_id, Long p_id, String comment) {
		super();
		this.c_id = c_id;
		this.login_id = login_id;
		this.p_id = p_id;
		this.comment = comment;
	}

	public Long getC_id() {
		return c_id;
	}

	public void setC_id(Long c_id) {
		this.c_id = c_id;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public Long getP_id() {
		return p_id;
	}

	public void setP_id(Long p_id) {
		this.p_id = p_id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}

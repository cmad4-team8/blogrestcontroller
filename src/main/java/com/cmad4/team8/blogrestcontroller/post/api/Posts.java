package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.Date;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;



@Entity
public class Posts {

	@Id
	private Long p_id;
	private String title;
	private String login_id;
	private Date postDate;
	private int status;
	private String saved_content;
	private String published_content;
	
	public Posts() {
		// TODO Auto-generated constructor stub
	}

	public Posts(Long pid, String title, String login_id, Date postDate, int status, String saved_content,
			String published_content) {
		super();
		this.p_id = pid;
		this.title = title;
		this.login_id = login_id;
		this.postDate = postDate;
		this.status = status;
		this.saved_content = saved_content;
		this.published_content = published_content;
	}

	public Long getPid() {
		return p_id;
	}

	public void setPid(Long pid) {
		this.p_id = pid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public Date getPostDate() {
		return postDate;
	}

	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getSaved_content() {
		return saved_content;
	}

	public void setSaved_content(String saved_content) {
		this.saved_content = saved_content;
	}

	public String getPublished_content() {
		return published_content;
	}

	public void setPublished_content(String published_content) {
		this.published_content = published_content;
	}
	
}

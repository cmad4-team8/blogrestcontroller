package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Posts {

	@Id
	@GeneratedValue
	private int p_id;
	private String title;
	private String login_id;
	private Date postDate;
	private int status;
	private String saved_content;
	private String published_content;
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name = "p_id")
	private List<comments> cmts;
	
	public Posts() {
		// TODO Auto-generated constructor stub
	}

	public Posts(int pid, String title, String login_id, Date postDate, int status, String saved_content,
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

	public int getPid() {
		return p_id;
	}

	public void setPid(int pid) {
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

	public List<comments> getCmts() {
		return cmts;
	}

	public void setCmts(List<comments> cmts) {
		this.cmts = cmts;
	}

	
}

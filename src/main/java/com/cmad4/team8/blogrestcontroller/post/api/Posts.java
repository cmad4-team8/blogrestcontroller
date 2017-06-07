package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;



@Entity(name = "Posts")
@NamedQueries({ 
	@NamedQuery(name = "Posts.getallposts", query = "SELECT b FROM Posts b"),
    @NamedQuery(name = "Posts.del_blog_comments", query = "DELETE FROM comments c WHERE c.p_id = :p_id"),
    @NamedQuery(name = "Posts.find_blogs_by_user", query = "SELECT b FROM Posts b WHERE b.login_id = :login_id") })
public class Posts {

	@Id
	@GeneratedValue
	private int p_id;
	private String title;
	private String login_id;
	private Date postDate;
	private int status;
	//@JsonProperty(access = Access.WRITE_ONLY)
	@JsonIgnore
	private String saved_content;
	//@JsonProperty(access = Access.WRITE_ONLY)
	@JsonIgnore
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

	@JsonIgnore
	public String getSaved_content() {
		return saved_content;
	}

	@JsonProperty
	public void setSaved_content(String saved_content) {
		this.saved_content = saved_content;
	}

	@JsonIgnore
	public String getPublished_content() {
		return published_content;
	}

	@JsonProperty
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

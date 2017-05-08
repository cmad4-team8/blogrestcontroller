package com.cmad4.team8.blogrestcontroller.user.api;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.post.api.comments;

@Entity
public class Blogger {
	@Id
	private String login_id;
	private String pwd;
	private String hint;
	private String f_name;
	private String l_name;
	private String email;
	private Date dob;
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name = "login_id")
	private Set<Posts> blogs;
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name = "login_id")
	private Set<comments> cmts;

	public String getLogin_id() {
		return login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getHint() {
		return hint;
	}

	public void setHint(String hint) {
		this.hint = hint;
	}

	public String getF_name() {
		return f_name;
	}

	public void setF_name(String f_name) {
		this.f_name = f_name;
	}

	public String getL_name() {
		return l_name;
	}

	public void setL_name(String l_name) {
		this.l_name = l_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Blogger(String login_id, String pwd, String hint, String f_name, String l_name, String email, Date dob,
			Set<Posts> blogs) {
		super();
		this.login_id = login_id;
		this.pwd = pwd;
		this.hint = hint;
		this.f_name = f_name;
		this.l_name = l_name;
		this.email = email;
		this.dob = dob;
		this.setBlogs(blogs);
	}

	public Blogger() {
		// TODO Auto-generated constructor stub
	}

	public Set<Posts> getBlogs() {
		return blogs;
	}

	public void setBlogs(Set<Posts> blogs) {
		this.blogs = blogs;
	}

	public Set<comments> getCmts() {
		return cmts;
	}

	public void setCmts(Set<comments> cmts) {
		this.cmts = cmts;
	}

}

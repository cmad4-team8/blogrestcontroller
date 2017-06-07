package com.cmad4.team8.blogrestcontroller.post.service;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;
import com.cmad4.team8.blogrestcontroller.post.api.InvalidPostException;
import com.cmad4.team8.blogrestcontroller.post.api.PostNotFoundException;
import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.post.api.Posts_interface;
import com.cmad4.team8.blogrestcontroller.post.data.JPAPost;
import com.cmad4.team8.blogrestcontroller.post.data.PostDAO;

public class PostController implements Posts_interface {

	private PostDAO dao = new JPAPost();
	
	public PostController() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public Posts saveandpublish(Posts updatedBlog) throws InvalidPostException, PostsException {
		// TODO Auto-generated method stub
		if (updatedBlog == null) {
			throw new InvalidPostException();
		}
		System.out.println("PostID before create/update post is " + updatedBlog.getPid());
		if (dao.read(updatedBlog.getPid()) != null) {
			//TODO: call update function of DAO
			if (dao.saveandpublish(updatedBlog) == null) {
				throw new PostsException();
			}
			System.out.println("PostID after Updating new post is " + updatedBlog.getPid());
		} else {
			//TODO: call create function of DAO
			dao.createnewpost(updatedBlog);
			System.out.println("PostID after creating new post is " + updatedBlog.getPid());
		}
		
		return updatedBlog;
	}

	@Override
	public void deletePost(int id) throws PostNotFoundException, PostsException {
		// TODO Auto-generated method stub
		if (dao.read(id) == null) {
			throw new PostNotFoundException();
		}
		dao.deletePost(id);

	}

	@Override
	public List<Posts> readAllPosts(int pageNum) throws PostNotFoundException, PostsException {
		// TODO Auto-generated method stub
		List<Posts> blogs = dao.readAllPosts(pageNum);
		if (blogs == null) {
			throw new PostNotFoundException();
		}
		return blogs;
	}

	@Override
	public Posts read(int blogId) throws PostNotFoundException, PostsException {
		// TODO Auto-generated method stub
		Posts blog = dao.read(blogId);
		if (blog == null) {
			throw new PostNotFoundException();
		}
		return blog;
	}

	@Override
	public List<Posts> readByUserId(String userId, int pageNum) throws PostNotFoundException, PostsException {
		// TODO Auto-generated method stub
		System.out.println("Username to lookfor " + userId);
		List<Posts> blog = dao.readByUserId(userId, pageNum);
		if (blog == null) {
			throw new PostNotFoundException();
		}
		return blog;
	}

}

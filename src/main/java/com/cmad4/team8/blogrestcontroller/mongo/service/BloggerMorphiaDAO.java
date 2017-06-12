package com.cmad4.team8.blogrestcontroller.mongo.service;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger;


public class BloggerMorphiaDAO extends BasicDAO<Blogger, String> implements BloggerMorphiaDAO_Interface {

	public BloggerMorphiaDAO(Class<Blogger> entityClass, Datastore ds) {
		super(entityClass, ds);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void signup(Blogger user)  {
		// TODO Auto-generated method stub
		if(user != null) {
			if (this.get(user.getLogin_id()) == null) {
				this.save(user);
			} else {
				System.out.println("User Already Exists !!!");
			}
		} else {
			System.out.println("Invalid User Details Provided !!!");
		}
		
	}

	@Override
	public Blogger rtrvProfile(String user)  {
		// TODO Auto-generated method stub
		Blogger b = null;
		if (user != null) {
			b = this.get(user);
		} else {
			System.out.println("User Name invalid !!!");
		}
		return b;
	}

	@Override
	public void update(Blogger user)  {
		if (this.get(user.getLogin_id()) != null) {
			this.getDatastore().merge(user);
		} else {
			this.save(user);
		}		
	}

	@Override
	public void remove(String user)  {
		// TODO Auto-generated method stub
		PostsMorphiaDAO_Interface pi = new PostsMorphiaDAO(Posts.class, this.getDatastore());
		if (user != null) {
			if (this.get(user) != null) {
				pi.deletePostbyUserId(user);
				this.deleteById(user);
			} else {
				System.out.println("Couldnt find User to Delete");
			}
		} else {
			System.out.println("Received Invalid User");
		}
		
	}



}

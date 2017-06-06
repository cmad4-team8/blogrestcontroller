package com.cmad4.team8.blogrestcontroller.post.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;

public class JPAPost implements PostDAO {
	
	static private EntityManagerFactory factory = Persistence.createEntityManagerFactory("com.cmad4.team8.blogrestcontroller");

	public JPAPost() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void saveandpublish(Posts blog) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(blog);
		em.getTransaction().commit();
		em.close();
	}

	@Override
	public Posts read(int p_id) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        Posts blog = em.find(Posts.class, p_id);
        em.getTransaction().commit();
        em.close();
        return blog;
	}

	@Override
	public List<Posts> readAllPosts(int pageNum) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        List<Posts> blogs = em.createQuery("Posts.getallposts",Posts.class).getResultList();
        em.getTransaction().commit();
        em.close();
        return blogs;
	}

	@Override
	public List<Posts> readByUserId(String userId, int pageNum) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        List<Posts> blogs = em.createQuery("Posts.find_blogs_by_user",Posts.class).getResultList();
        em.getTransaction().commit();
        em.close();
        return blogs;
		
	}

	@Override
	public void deletePost(int p_id) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        Posts blog = em.find(Posts.class, p_id);
        em.remove(blog);
        //TODO: Delete all comments associated to the blog
        em.getTransaction().commit();
        em.close();

	}

}

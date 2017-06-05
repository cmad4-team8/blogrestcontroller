package com.cmad4.team8.blogrestcontroller.user.data;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;

public class JPABloggerDAO implements BloggerDAO {
	
	static private EntityManagerFactory factory = Persistence.createEntityManagerFactory("com.cmad4.team8.blogrestcontroller");

	/*private void create_Active_blogger_entry (Blogger user, EntityManager em)
	{
		Act_Blogger login_user = new Act_Blogger();
		login_user.setLogin_id(user.getLogin_id());
		login_user.setToken(create_JWTToken());
		em.persist(login_user);
	}
	private String create_JWTToken() 
	{
		return null;
	}*/
	public JPABloggerDAO() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void signup(Blogger user) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(user);
		//create_Active_blogger_entry(user,em);
		em.getTransaction().commit();
		em.close();
	}

	@Override
	public Blogger rtrvProfile(String login_id) {
		// TODO Auto-generated method stub
		System.out.println("Username to look for: " + login_id);
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		Blogger b = em.find(Blogger.class, login_id);
		em.getTransaction().commit();
		em.close();
		return b;
		
		//return null;
	}

	@Override
	public void update(Blogger user) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        Blogger b = em.find(Blogger.class, user.getLogin_id());
        b.setEmail(user.getEmail());
        b.setF_name(user.getF_name());
        b.setL_name(user.getL_name());
        em.getTransaction().commit();
        em.close();
	}
	
	

}

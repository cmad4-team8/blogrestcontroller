package com.cmad4.team8.blogrestcontroller.post.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.cmad4.team8.blogrestcontroller.post.api.comments;

public class JPAComments implements CommentsDAO {
	static private EntityManagerFactory factory = Persistence.createEntityManagerFactory("com.cmad4.team8.blogrestcontroller");

	public JPAComments() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void create(comments c) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(c);
		em.getTransaction().commit();
		em.close();

	}

	@Override
	public comments read(int c_id) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        comments cmt = em.find(comments.class, c_id);
        em.getTransaction().commit();
        em.close();
        return cmt;
	}

	@Override
	public List<comments> read_all_by_post(int p_id, int pagenum) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        List<comments> cmts = em.createNamedQuery("comments.getallcommentsforpost",comments.class).setParameter("p_id",p_id).getResultList();
        em.getTransaction().commit();
        em.close();
        return cmts;
		
	}

	@Override
	public List<comments> read_all_by_user(String login_id, int pagenum) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        List<comments> cmts = em.createNamedQuery("comments.getallcommentsbyuser",comments.class).setParameter("login_id", login_id).getResultList();
        em.getTransaction().commit();
        em.close();
        return cmts;
	}

	@Override
	public void delete(int c_id) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
        em.getTransaction().begin();
        comments cmt = em.find(comments.class, c_id);
        em.remove(cmt);
        //TODO: Delete all comments associated to the blog
        em.getTransaction().commit();
        em.close();

	}

}

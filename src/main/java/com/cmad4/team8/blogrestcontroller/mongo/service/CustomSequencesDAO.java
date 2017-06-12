package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.util.Set;

import org.mongodb.morphia.Datastore;

import org.mongodb.morphia.dao.BasicDAO;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;

public class CustomSequencesDAO extends BasicDAO<CustomSequences, String> implements CustomSequence_Interface {

	public CustomSequencesDAO(Class<CustomSequences> entityClass, Datastore ds) {
		super(entityClass, ds);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void create(CustomSequences cus) throws PostsException {
		// TODO Auto-generated method stub
		if (cus == null) {
			throw new PostsException();
		}
		this.save(cus);
	}

	@Override
	public CustomSequences update(String seqName, CustomSequences new_cus) {
		// TODO Auto-generated method stub
		CustomSequences cus = this.get(seqName);
		if (cus != null) {
			this.getDatastore().merge(new_cus);	
		}
		
		return cus;
	}

	@Override
	public Long getNextSequence(String seqName) {
		// TODO Auto-generated method stub
		Long seqID = 0L;
		CustomSequences cus = this.get(seqName);
		if (cus == null) {
			cus = new CustomSequences();
			cus.setCollection(seqName);
			cus.setSeq(1L);
			seqID = cus.getSeq();
			cus.incrSeq();
			this.save(cus);
		} else {
			seqID = cus.getSeq();
			if (seqID == 0) {
				Set<Free_ID_List> free_id = cus.getFreed_id();
				
				Free_ID_List tmp = null;
				
				for(Free_ID_List f_id : free_id) {
					tmp = f_id;
					seqID = tmp.getId();
					break;
					
				}
				if (tmp != null) {
				    free_id.remove(tmp);
				}
				cus.setFreed_id(free_id);
				
			} else {
				cus.incrSeq();
			}
			this.update(seqName,cus);
		}
		
		return seqID;
	}

	@Override
	public CustomSequences update_freelist(String seqName, Long free_id, boolean removeID) {
		// TODO Auto-generated method stub
		CustomSequences cus = this.get(seqName);
		Free_ID_List tmp = null;
		if (cus != null) {
			Set<Free_ID_List> exs_list = cus.getFreed_id();
			
			if (removeID == true) {
				for(Free_ID_List f_id : exs_list) {
					tmp = f_id;
					if (tmp.getId() == free_id)
					break;
					
				}

				if (tmp != null) {
					exs_list.remove(free_id);
				}

			} else {
				if (tmp == null) {
				  tmp = new Free_ID_List();
				  tmp.setId(free_id);
				  exs_list.add(tmp);
				}
			}
			cus.setFreed_id(exs_list);
			this.getDatastore().merge(cus);
		}
		return cus;
	}

}

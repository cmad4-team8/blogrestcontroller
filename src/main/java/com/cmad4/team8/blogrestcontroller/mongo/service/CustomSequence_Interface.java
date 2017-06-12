package com.cmad4.team8.blogrestcontroller.mongo.service;

import org.mongodb.morphia.dao.DAO;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;



public interface CustomSequence_Interface extends DAO<CustomSequences, String>{
	public void create(CustomSequences cus) throws PostsException;
	public CustomSequences update (String seqName, CustomSequences new_cus);
	public Long getNextSequence (String seqName);
	public CustomSequences update_freelist (String seqName, Long free_id, boolean add_remove);

}

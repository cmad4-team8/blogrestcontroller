package com.cmad4.team8.blogrestcontroller.mongo.service;


import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Null;

import org.mongodb.morphia.annotations.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customSequences")
public class CustomSequences {

	@Id
    private String collection;
    private Long seq;
    @Null
    private Set<Free_ID_List> freed_id;
	public CustomSequences() {
		// TODO Auto-generated constructor stub
		freed_id = new HashSet<Free_ID_List>();
	}
	
	
	public CustomSequences(String collection, Long seq, Set<Free_ID_List> freed_id) {
		super();
		this.collection = collection;
		this.seq = seq;
		this.freed_id = freed_id;
	}


	public String getCollection() {
		return collection;
	}
	public void setCollection(String collection) {
		this.collection = collection;
	}
	public Long getSeq() {
		return seq;
	}
	public void setSeq(Long seq) {
		this.seq = seq;
	}
	public Set<Free_ID_List> getFreed_id() {
		return freed_id;
	}
	public void setFreed_id(Set<Free_ID_List> freed_id) {
		this.freed_id = freed_id;
	}
	public void incrSeq() {
		this.seq++;
	}
	
}

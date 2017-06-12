package com.cmad4.team8.blogrestcontroller.mongo.service;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

@Entity
public class Free_ID_List {

	@Id
	private Long id;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Free_ID_List() {
		// TODO Auto-generated constructor stub
	}

}

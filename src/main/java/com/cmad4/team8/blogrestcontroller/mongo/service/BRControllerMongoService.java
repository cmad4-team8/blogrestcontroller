package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.net.UnknownHostException;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
 
import com.mongodb.MongoClient;

public class BRControllerMongoService {

	private Morphia morphia;
	private Datastore datastore;
	
	public BRControllerMongoService() throws UnknownHostException {
		// TODO Auto-generated constructor stub
		MongoClient mongoClient = new MongoClient("localhost:27017");
		
		//create a new morphia instance
		this.morphia = new Morphia(); 
		String databaseName = "blogrestcontroller";
		this.datastore = morphia.createDatastore(mongoClient, databaseName);
	}

	public Morphia getMorphia() {
		return morphia;
	}

	public void setMorphia(Morphia morphia) {
		this.morphia = morphia;
	}

	public Datastore getDatastore() {
		return datastore;
	}

	public void setDatastore(Datastore datastore) {
		this.datastore = datastore;
	}

	
}

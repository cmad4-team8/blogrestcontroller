package com.cmad4.team8.blogrestcontroller.mongo.service;

import java.net.UnknownHostException;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;


import com.mongodb.MongoClient;

public class BRControllerMongoService {

	private Morphia morphia;
	private Datastore datastore;
	private int port;
	private String host;
	
	public BRControllerMongoService() throws UnknownHostException {
		// TODO Auto-generated constructor stub
		host = System.getenv("db.host.name");
		if (host == null) {
			//default server
			host = "localhost";
		}
		String port_Str = System.getenv("db.host.port");
		if (port_Str != null) { 
			port = Integer.parseInt(port_Str);
		} else {
			port = 27017;
		}
		if (port == 0) {
			//default port
			port =27017;
		}
		System.out.println("Mongo DB Details " + host + ":" + port);
		MongoClient mongoClient = new MongoClient(host,port);
		
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

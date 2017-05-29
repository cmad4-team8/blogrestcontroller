package com.cmad4.team8.blogrestcontroller.authentication;

import java.security.Key;

import javax.crypto.spec.SecretKeySpec;

public class SimpleKeyGenerator implements KeyGenerator {

	public SimpleKeyGenerator() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Key generateKey() {
		// TODO Auto-generated method stub
		String keyString = "simplekey";
        Key key = new SecretKeySpec(keyString.getBytes(), 0, keyString.getBytes().length, "DES");
        return key;
	}

}

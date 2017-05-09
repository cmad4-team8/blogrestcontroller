package com.cmad4.team8.blogrestcontroller;

import static org.junit.Assert.*;

import java.sql.Date;

import org.junit.Test;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.api.DuplicateUserException;
import com.cmad4.team8.blogrestcontroller.user.service.Usercontroller;
import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

public class UserSignupTest {

	String user = "usr2";
	String f_name = "Praveen";
	String l_name = "Kumar";
	String hint = "company";
	String pwd = "cisco@123";
	String email = "pravsp@cisco.com";
	@SuppressWarnings("deprecation")
	Date dob = new Date(1999, 6, 17);
	@Test
	public void test() {
		Blogger_Interface bi = new Usercontroller();
		//Blogger b = new Blogger(user,pwd,hint,f_name,l_name,email,dob,null);
		Blogger b = new Blogger();
		b.setLogin_id(user);
		b.setPwd(pwd);
		b.setF_name(f_name);
		b.setL_name(l_name);
		b.setHint(hint);
		b.setEmail(email);
		b.setDob(dob);
		
		try {
			bi.signup(b);
		}catch (DuplicateUserException e) {
			// TODO: handle exception
			fail("Not yet implemented");
		}catch (BloggerException e) {
			// TODO: handle exception
			fail("Not yet implemented");
		}
		
	}

}

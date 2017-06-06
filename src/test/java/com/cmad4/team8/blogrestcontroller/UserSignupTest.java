package com.cmad4.team8.blogrestcontroller;

import static org.junit.Assert.*;

import java.sql.Date;
import org.junit.runners.MethodSorters;
import org.junit.FixMethodOrder;
import org.junit.Test;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.api.DuplicateUserException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundException;
import com.cmad4.team8.blogrestcontroller.user.service.Usercontroller;
import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

//@RunWith(HttpJUnitRunner.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UserSignupTest {

	String user = "usr2";
	String f_name = "Praveen";
	String l_name = "Kumar";
	String hint = "company";
	String pwd = "cisco@123";
	String email = "pravsp@cisco.com";
	@SuppressWarnings("deprecation")
	Date dob = new Date(1999, 6, 17);
	
	String InvalidUser = "user1";
	Blogger_Interface bi = new Usercontroller();
	
	
	@Test
	public void _1_AddUser() {
		
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
	
	
	@Test 
	public void _2_findInvalidUser() {
		try {
			Blogger b= bi.rtrvProfile(InvalidUser);
			if (b != null) {
				fail ("valid entry found for invalid user");
			}
		}catch (UserNotFoundException e) {
			// TODO: handle exception
			System.out.println("User not found as expected");
		}catch (BloggerException e) {
			System.out.println("Unexpected Generic blogger exception received");
			fail("Unexpected exception received");
		}
		
	}
	
	@Test
	public void _3_Retrive_User() {
		try {
			Blogger b = bi.rtrvProfile(user);
			if (b==null) {
				fail("Valid user not found");
			}
		} catch (Exception e) {
			// TODO: handle exception
			fail("Exception not expected");
		}
	}
	
	@Test
	public void _4_RemoveUser() {
		try {
			bi.remove(user);
		}catch (UserNotFoundException e) {
			// TODO: handle exception
			System.out.println("User not found exception");
			fail("Not able to remove user");
		}catch (BloggerException e) {
			// TODO: handle exception
			fail("Not yet implemented");
		}
	}

}

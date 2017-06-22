package com.cmad4.team8.blogrestcontroller;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.List;

import org.junit.runners.MethodSorters;
import org.junit.FixMethodOrder;
import org.junit.Test;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger;
import com.cmad4.team8.blogrestcontroller.user.api.Blogger_Interface;
import com.cmad4.team8.blogrestcontroller.user.api.DuplicateUserException;
import com.cmad4.team8.blogrestcontroller.user.api.UserNotFoundException;
import com.cmad4.team8.blogrestcontroller.user.service.Usercontroller;
import com.google.gson.Gson;
import com.cmad4.team8.blogrestcontroller.exceptions.BloggerException;

import com.cmad4.team8.blogrestcontroller.post.api.Posts;
import com.cmad4.team8.blogrestcontroller.post.api.Posts_interface;
import com.cmad4.team8.blogrestcontroller.post.service.PostController;



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
	
	
	
	private Blogger_Interface bi;
	private Posts_interface pi;
	
	String InvalidUser = "user1";
	

	public UserSignupTest() {
		super();
		// TODO Auto-generated constructor stub
		
		this.bi = new Usercontroller();
		this.pi = new PostController();
	}

	@Test
	public void _1_AddUser() {
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
	public void _4_PostCreateandUpdate() {
		
		try {
			Posts Test_Post = new Posts();
			Test_Post.setLogin_id(user);
			Test_Post.setPostDate(dob);
			Test_Post.setStatus(0);
			Test_Post.setTitle("Junit Test Blog Creation");
			Test_Post.setSaved_content("This is the test content of the blog from Junit and will be deleted at the end of the JUNIT test cases");
			pi.saveandpublish(Test_Post).getPid();
			System.out.println("post id after creating posts is " + Test_Post.getPid());
			
			//Now test the updatepart
			Test_Post.setStatus(1);
			Test_Post.setSaved_content("This is the test content of the Published blog from Junit and will be deleted at the end of the JUNIT test cases");
			Test_Post.setPublished_content(Test_Post.getSaved_content());
			//assert ("post id befor posting to post interface is " + Test_Post.getPid()) != null;
			System.out.println("post id befor posting to post interface is " + Test_Post.getPid());
			Posts ret_post = pi.saveandpublish(Test_Post);
			System.out.println("post id after posting to post interface is " + ret_post.getPid());
		} catch (Exception e) {
			fail("Exception while creating post is not expected");
		}
	}
	
	@Test
	public void _5_PostPublish() {
		try {
			Posts Test_Post = new Posts();
			Test_Post.setLogin_id(user);
			Test_Post.setPostDate(dob);
			Test_Post.setStatus(1);
			Test_Post.setTitle("Junit Test 2nd Blog Creation");
			Test_Post.setSaved_content("This 2nd blog created for JUNIT testing and is mainly used to verify the retrieval of multiple posts");
			Test_Post.setPublished_content("This 2nd blog created for JUNIT testing and is mainly used to verify the retrieval of multiple posts");
			Posts ret_post = pi.saveandpublish(Test_Post);
			System.out.println("post id after creating posts is " + ret_post.getPid());
			
			pi.deletePost(ret_post.getPid());
		} catch (Exception e) {
			fail("Exception while Updating post is not expected");
		}
	}
	
	@Test
	public void _6_PostRetrieveUsrID() {
		try {
			List<Posts> post_list = pi.readByUserId(user, 1);
			if (post_list == null) {
				fail("The comments we added is not retrieved");
			} else {
			
				Gson gson = new Gson();
				// convert your list to json
				String rtvBlogList = gson.toJson(post_list);
				// print your generated json
				System.out.println("rtrieved blog list: ");
				System.out.println(rtvBlogList);
			}
		} catch (Exception e) {
			// TODO: handle exception
			fail("Exception while retrieving the post");
		}
	}
	@Test
	public void _7_PostRetrieveall() {
		try {
			List<Posts> post_list = pi.readAllPosts(1);
			if (post_list == null) {
				fail("The comments we added is not retrieved");
			} else {
			
				Gson gson = new Gson();
				// convert your list to json
				String rtvBlogList = gson.toJson(post_list);
				// print your generated json
				System.out.println("rtrieved blog list: ");
				System.out.println(rtvBlogList);
			}
		} catch (Exception e) {
			// TODO: handle exception
			fail("Exception while retrieving the post");
		}
	}
	@Test
	public void _9_RemoveUser() {
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

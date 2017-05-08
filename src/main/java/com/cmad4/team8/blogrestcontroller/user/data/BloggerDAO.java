package com.cmad4.team8.blogrestcontroller.user.data;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;

public interface BloggerDAO {
	public void signup(Blogger user);
	public void login(String user, String pwd);
	public void logout(String user);
	public Blogger rtrvProfile(String user);

}

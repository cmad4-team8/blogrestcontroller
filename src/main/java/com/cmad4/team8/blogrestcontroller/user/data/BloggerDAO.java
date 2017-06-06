package com.cmad4.team8.blogrestcontroller.user.data;

import com.cmad4.team8.blogrestcontroller.user.api.Blogger;

public interface BloggerDAO {
	public void signup(Blogger user);
	public Blogger rtrvProfile(String login_id);
	public void update(Blogger user);

}

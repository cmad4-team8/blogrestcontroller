package com.cmad4.team8.blogrestcontroller.post.api;

import java.util.List;

import com.cmad4.team8.blogrestcontroller.exceptions.PostsException;



public interface Posts_interface {

    public Posts save(Posts updatedBlog) throws InvalidPostException, PostsException;
    public void saveandpublish(Posts updatedBlog) throws InvalidPostException, PostsException;

    public void deletePost(long id) throws PostNotFoundException, PostsException;

    public List<Posts> readAllPosts(int pageNum) throws PostNotFoundException, PostsException;

    public Posts read(long blogId) throws PostNotFoundException, PostsException;

    public List<Posts> readByUserId(String userId, int pageNum) throws PostNotFoundException, PostsException;
    
    public void delete(long id);

}

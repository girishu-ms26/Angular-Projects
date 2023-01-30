package org.zenroom.dao;

import org.zenroom.model.User;

public interface UserDao {
	User getUser(String username,String password);
	
	
}

package org.zenroom.services;

import org.zenroom.model.User;

public interface UserService {
	boolean isAdminAuthenticated(String username,String password);
	static User getUser(String username, String password) {
		
		return null;
	}
}

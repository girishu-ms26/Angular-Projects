package org.zenroom.services;

import org.zenroom.dao.UserDao;
import org.zenroom.dao.UserDaoImpl;
import org.zenroom.model.User;

public class UserServiceImpl implements UserService {
	private UserDao dao=new UserDaoImpl();
	
	@Override
	public boolean isAdminAuthenticated(String username, String password) {
		boolean isAuthenticated=false;
		User user=dao.getUser(username, password);
		
		if(user!=null )
		{
			if(user.getUsername()!= null && user.getPassword()!=null)
			isAuthenticated=true;
		}
		return isAuthenticated;
	}

	

}

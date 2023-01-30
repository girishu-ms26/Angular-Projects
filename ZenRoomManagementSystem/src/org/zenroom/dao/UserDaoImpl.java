package org.zenroom.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

import org.zenroom.model.User;
import org.zenroom.util.DbUtil;

public class UserDaoImpl implements UserDao {

	
	@Override
	public User getUser(String username, String password) {
		Connection con =null;
		PreparedStatement pst = null;
		ResultSet rs = null;
		User user = null;
		try {
			Properties dbProperties=DbUtil.getProperties("C:\\Users\\HP\\Documents\\workspace-spring-tool-suite-4-4.8.1.RELEASE\\ZenRoomManagementSystem\\resources\\db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String pwd=dbProperties.getProperty("db.password");
			con = DbUtil.getConnection(driver, url, user1, pwd);
			if(con!=null) {
				pst = con.prepareStatement("select * from users where username=? and password=?");
				pst.setString(1, username);
				pst.setString(2, password);
				rs=pst.executeQuery();
				
				rs.next();
				user=new User();
	
				user.setUsername(rs.getString(1));
				user.setPassword(rs.getString(2));
				
				con.close();
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return user;
	}


	

}


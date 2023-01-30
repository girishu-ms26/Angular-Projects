package org.zenroom.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;


import org.zenroom.model.Contact;
import org.zenroom.util.DbUtil;

public class ContactDaoImpl implements ContactDao {

	@Override
	public List<Contact> getMsg() {
		
			Connection con = null;
			Statement st=null;
			ResultSet rs = null;
			List<Contact> msg = new ArrayList<>();
			System.out.println(msg);
			try {
				Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
				String driver=dbProperties.getProperty("db.driver");
				String url=dbProperties.getProperty("db.url");
				String user1=dbProperties.getProperty("db.username");
				String password=dbProperties.getProperty("db.password");
				con=DbUtil.getConnection(driver, url, user1, password);
				st=con.createStatement();
				rs=st.executeQuery("select * from contact");
				while(rs.next())
				{
					msg.add(new Contact(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5)));
				}
				
				con.close();
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			return msg;
			
		}

	@Override
	public Contact get(String phone_number) {
		Connection con=null;
		PreparedStatement pst=null;
		ResultSet rs=null;
		Contact c=null;
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			pst=con.prepareStatement("select * from contact where phone_number=?");
			pst.setString(1, phone_number);
			rs=pst.executeQuery();
			rs.next();
			c=new Contact(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5));
			con.close();
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		return c;
	}

	

	@Override
	public void addMsg(Contact c) {

		String first_name = c.getFirst_name();
		String last_name = c.getLast_name();
		String phone_number = c.getPhone_number();
		String email = c.getEmail();
		String message = c.getMessage();
		
		Connection con = null;
		PreparedStatement ps = null;
		
		
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			ps = con.prepareStatement("insert into contact values (?,?,?,?,?)");
			ps.setString(1,first_name);
			ps.setString(2,last_name);
			ps.setString(3,phone_number);
			ps.setString(4,email );
			ps.setString(5, message);
			ps.executeUpdate();
			
			con.close();
			
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public Contact update(String phone_number, Contact c) {
		
		return null;
	}

	

}

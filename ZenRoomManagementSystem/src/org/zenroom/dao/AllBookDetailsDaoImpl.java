package org.zenroom.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.zenroom.model.AllBookDetails;

import org.zenroom.util.DbUtil;

public class AllBookDetailsDaoImpl implements AllBookDetailsDao {

	@Override
	public List<AllBookDetails> getGuests() {
		Connection con = null;
		Statement st=null;
		ResultSet rs = null;
		List<AllBookDetails> guests = new ArrayList<>();
		System.out.println(guests);
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			st=con.createStatement();
			rs=st.executeQuery("select booking.first_name,booking.last_name,booking.number_of_guest,booking.arrival,booking.departure, contact.phone_number,contact.email,contact.message\r\n"
					+ "from booking, contact\r\n"
					+ "where booking.phone_number = contact.phone_number");
			while(rs.next())
			{
				guests.add(new AllBookDetails(rs.getString(1), rs.getString(2), rs.getInt(3), rs.getString(4), rs.getString(5), rs.getString(6),rs.getString(7),rs.getString(8)));
			}
			
			con.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return guests;
		
	}
	}



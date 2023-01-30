package org.zenroom.dao;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.zenroom.model.Booking;
import org.zenroom.util.DbUtil;

public class BookingDaoImpl implements BookingDao {

	@Override
	public List<Booking> getGuest() {
		Connection con = null;
		Statement st=null;
		ResultSet rs = null;
		List<Booking> guest = new ArrayList<>();
		System.out.println(guest);
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			st=con.createStatement();
			rs=st.executeQuery("select * from booking");
			while(rs.next())
			{
				guest.add(new Booking(rs.getString(1), rs.getString(2), rs.getInt(3), rs.getString(4), rs.getString(5), rs.getString(6)));
			}
			
			con.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return guest;
		
	}


	@Override
	public Booking get(String phone_number) {
		Connection con=null;
		PreparedStatement pst=null;
		ResultSet rs=null;
		Booking b=null;
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			pst=con.prepareStatement("select * from booking where phone_number=?");
			pst.setString(1, phone_number);
			rs=pst.executeQuery();
			rs.next();
			b=new Booking(rs.getString(1), rs.getString(2), rs.getInt(3), rs.getString(4), rs.getString(5), rs.getString(6));
			con.close();
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		return b;
	}

	@Override
	public Booking update(String phone_number, Booking b) {
		Booking b1 = get( phone_number);
		b1.setFirst_name(b.getFirst_name());
		b1.setLast_name(b.getLast_name());
		b1.setNumber_of_guest(b.getNumber_of_guest());
		b1.setPhone_number(b.getPhone_number());
		b1.setArrival(b.getArrival());
		b1.setDeparture(b.getDeparture());
		Connection con = null;
		PreparedStatement pst = null;
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			pst = con.prepareStatement("update booking set first_name=?, last_name=?,number_of_guest=?, arrival=?, departure() =? where phone_number=? ");
			pst.setString(1,b1.getFirst_name());
			pst.setString(2, b1.getLast_name());
			pst.setInt(3,b1.getNumber_of_guest());
			pst.setString(4,b1.getPhone_number());
			pst.setString(5, b1.getArrival());
			pst.setString(6, b1.getDeparture());
			int i=pst.executeUpdate();
			if(i>0)
			{
					System.out.println("updated");
			}
			
		} catch (Exception e2) {
			e2.printStackTrace();
		}
		
		return b1;
		
	}

	@Override
	public void addGuest(Booking b) {
		
		String first_name = b.getFirst_name();
		String last_name = b.getLast_name();
		int number_of_guest = b.getNumber_of_guest();
		String phone_number = b.getPhone_number();
		String arrival = b.getArrival();
		String departure = b.getDeparture();
		
		Connection con = null;
		PreparedStatement ps = null;
		
		
		try {
			Properties dbProperties=DbUtil.getProperties("C:/Users/HP/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/ZenRoomManagementSystem/resources/db.properties");
			String driver=dbProperties.getProperty("db.driver");
			String url=dbProperties.getProperty("db.url");
			String user1=dbProperties.getProperty("db.username");
			String password=dbProperties.getProperty("db.password");
			con=DbUtil.getConnection(driver, url, user1, password);
			ps = con.prepareStatement("insert into booking values (?,?,?,?,?,?)");
			ps.setString(1,first_name);
			ps.setString(2,last_name);
			ps.setInt(3,number_of_guest);
			ps.setString(4,phone_number);
			ps.setString(5,arrival );
			ps.setString(6, departure);
			ps.executeUpdate();
			
			con.close();
			
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		
	
	
		
		
	}	
	}


	
	
	



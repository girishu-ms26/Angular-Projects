package org.zenroom.util;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class DbUtil {
	public static Connection getConnection(String driver,String url,String username,String password) {
		Connection con=null;
		try {
			Class.forName(driver);
			con=DriverManager.getConnection(url,username,password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}
	public static Properties getProperties(String fileName)
	{
		Properties properties=null;
		try {
			FileInputStream fis=new FileInputStream(fileName);
			properties=new Properties();
			properties.load(fis);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return properties;
	}
}

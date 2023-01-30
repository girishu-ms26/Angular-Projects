package org.zenroom.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.zenroom.dao.BookingDao;
import org.zenroom.dao.BookingDaoImpl;
import org.zenroom.model.Booking;



@WebServlet("/Booking")
public class BookingController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	BookingDao rs=new BookingDaoImpl();
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String first_name = request.getParameter("fname");
		String last_name = request.getParameter("lname");
		int number_of_guest =Integer.parseInt(request.getParameter("guest"));
		String phone_number=request.getParameter("phonenumber");
		String arrival =request.getParameter("arrival");
		String departure =request.getParameter("departure");
		Booking b=new Booking(first_name, last_name, number_of_guest, phone_number, arrival, departure);
		
		rs.addGuest(b);
		RequestDispatcher rd=request.getRequestDispatcher("index.jsp");
		
		rd.forward(request, response);
	}
	}



package org.zenroom.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.zenroom.model.Booking;
import org.zenroom.services.BookingService;
import org.zenroom.services.BookingServiceImpl;


@WebServlet("/UpdateGuest")
public class UpdateGuestController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	BookingService bookingService = new BookingServiceImpl();

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw =response.getWriter();
		String phone_number=request.getParameter("phone_number");
		Booking b = bookingService.getGuest(phone_number); 
		request.setAttribute("booking", b);
		RequestDispatcher rd = request.getRequestDispatcher("booking.jsp");
		rd.forward(request, response);
	}

	
	
}

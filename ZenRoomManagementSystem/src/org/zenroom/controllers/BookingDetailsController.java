package org.zenroom.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.zenroom.dao.BookingDao;
import org.zenroom.dao.BookingDaoImpl;
import org.zenroom.model.Booking;
import org.zenroom.services.BookingService;
import org.zenroom.services.BookingServiceImpl;


@WebServlet("/BookingDetails")
public class BookingDetailsController<booking> extends HttpServlet {
	private static final long serialVersionUID = 1L;

	BookingService bookingService = new BookingServiceImpl();
	BookingDao bs = new BookingDaoImpl();
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		String first_name = request.getParameter("first_name");
		String last_name = request.getParameter("last_name");
		int number_of_guest = Integer.parseInt(request.getParameter("number_of_guest"));
		String phone_number=request.getParameter("phone_number");
		String arrival =request.getParameter("arrival");
		String departure =request.getParameter("departure");
		Booking b = new Booking(first_name,last_name, number_of_guest, phone_number, arrival, departure);
		Booking b1 = bookingService.updateGuest(phone_number, b);
		
			List<Booking> bookingList = bs.getGuest();
			request.setAttribute("book", bookingList);
			RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
			rd.forward(request, response);
	}

}

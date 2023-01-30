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
import javax.servlet.http.HttpSession;

import org.zenroom.model.AllBookDetails;
import org.zenroom.model.Booking;
import org.zenroom.model.Contact;
import org.zenroom.model.User;
import org.zenroom.services.AllBookDetailsService;
import org.zenroom.services.AllBookDetailsServiceImpl;
import org.zenroom.services.BookingService;
import org.zenroom.services.BookingServiceImpl;
import org.zenroom.services.ContactService;
import org.zenroom.services.ContactServiceImpl;
import org.zenroom.services.UserService;
import org.zenroom.services.UserServiceImpl;


@WebServlet("/adminlogin")
public class AdminLoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	UserService userService=new UserServiceImpl();
	AllBookDetailsService allBookDetailsService = new AllBookDetailsServiceImpl();
	BookingService bookingService = new BookingServiceImpl();
	ContactService contactService = new ContactServiceImpl();
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		boolean b=userService.isAdminAuthenticated(username, password);
		if(b) {
			HttpSession session=request.getSession();
			User user=new User();
			user.setUsername(username);
			user.setPassword(password);
		    user.setType("Admin");
			session.setAttribute("user", user);
			List<AllBookDetails> guests = allBookDetailsService.getGuests();
			List<Booking> guest = bookingService.getGuest();
			List<Contact> msg = contactService.getMsg();
			request.setAttribute("book", msg);
			request.setAttribute("book", guest);
			request.setAttribute("book", guests);
			RequestDispatcher rd=request.getRequestDispatcher("home.jsp");
			rd.forward(request, response);
			
		}
		else
		{
			RequestDispatcher rd=request.getRequestDispatcher("booking.jsp");
			request.setAttribute("msg", "invalid Credentials");
			rd.forward(request, response);
		}
	}

}

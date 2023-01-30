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

import org.zenroom.dao.AllBookDetailsDao;
import org.zenroom.dao.AllBookDetailsDaoImpl;
import org.zenroom.model.AllBookDetails;
import org.zenroom.services.AllBookDetailsService ;
import org.zenroom.services.AllBookDetailsServiceImpl;


@WebServlet("/AllBookDetails")
public class AllBookDetailsController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	AllBookDetailsService AllBookDetailsService = new AllBookDetailsServiceImpl();
	AllBookDetailsDao as = new AllBookDetailsDaoImpl();
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		String first_name = request.getParameter("first_name");
		String last_name = request.getParameter("last_name");
		int number_of_guest = Integer.parseInt(request.getParameter("number_of_guest"));
		String phone_number=request.getParameter("phone_number");
		String arrival =request.getParameter("arrival");
		String departure =request.getParameter("departure");
		String email =request.getParameter("email");
		String message =request.getParameter("message");
		AllBookDetails a = new AllBookDetails(first_name,last_name, number_of_guest, phone_number, arrival, departure, email, message);
		
		
			List<AllBookDetails> allBookDetailsList = as.getGuests();
			request.setAttribute("book", allBookDetailsList);
			RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
			rd.forward(request, response);
	}



	}



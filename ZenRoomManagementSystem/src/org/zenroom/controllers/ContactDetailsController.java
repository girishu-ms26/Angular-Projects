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

import org.zenroom.dao.ContactDao;
import org.zenroom.dao.ContactDaoImpl;
import org.zenroom.model.Contact;
import org.zenroom.services.ContactService;
import org.zenroom.services.ContactServiceImpl;


@WebServlet("/ContactDetails")
public class ContactDetailsController extends HttpServlet {
	private static final long serialVersionUID = 1L;


		ContactService contactService = new ContactServiceImpl();
		ContactDao bs = new ContactDaoImpl();
		protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			PrintWriter pw = response.getWriter();
			String first_name = request.getParameter("first_name");
			String last_name = request.getParameter("last_name");
			String phone_number=request.getParameter("phone_number");
			String email=request.getParameter("email");
			String message =request.getParameter("message");
			Contact c = new Contact(first_name,last_name, phone_number, email, message);
			Contact c1 = contactService.updateMsg(phone_number, c);
			
				List<Contact> bookingList = bs.getMsg();
				request.setAttribute("book", bookingList);
				RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
				rd.forward(request, response);
		}

	

	}



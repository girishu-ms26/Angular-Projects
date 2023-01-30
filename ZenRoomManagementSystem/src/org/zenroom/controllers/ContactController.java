package org.zenroom.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.zenroom.dao.ContactDao;
import org.zenroom.dao.ContactDaoImpl;
import org.zenroom.model.Contact;


@WebServlet("/Contact")
public class ContactController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    ContactDao rs = new ContactDaoImpl();
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		String first_name=request.getParameter("first_name");
		String last_name=request.getParameter("last_name");
		String phone_number=request.getParameter("phone_number");
		String email = request.getParameter("email");
		String message = request.getParameter("message");
		Contact c = new Contact(first_name, last_name, phone_number, email, message);
		rs.addMsg(c);
		RequestDispatcher rd=request.getRequestDispatcher("index.jsp");
		
		rd.forward(request, response);
	} 

}
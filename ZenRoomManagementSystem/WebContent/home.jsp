<%@page import = "org.zenroom.model.AllBookDetails"%>

<%@page import="java.util.List"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Booking Details</title>
<link href="css/index.css" rel="stylesheet" type="text/css">
<style type="text/css">
.content-table {
	border-collapse: collapse;
	margin: auto;
	min-width: 400px;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
	box-shadow: 0 0 2rem rgba(0,0,0,0.15);
}

.content-table tr th {
	font-size: 2rem;
	background: rgba(236, 166, 34, 0.2);
	top-margin: 10rem;
	padding: 1.5rem 1.5rem;
	font-weight: bold;
}

.content-table tr td {
	font-size: 1.7rem;
	padding: 1.5rem 1.5rem;
	text-align: center;
}

.content-table tbody tr {
	border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
	background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type(even) {
	border-bottom: 2px solid  rgba(236, 166, 34, 0.2);
}
</style>
</head>

<body>
	<h1 class="heading">
		<span>B</span> <span>o</span> <span>o</span> <span>k</span> <span>i</span>
		<span>n</span> <span>g</span>  <span>D</span> <span>e</span>
		<span>t</span> <span>a</span> <span>i</span> <span>l</span> <span>s</span>
		</h1>
		<table class="content-table">
		<tr>
			<th>First_Name</th>
			<th>Last_Name</th>
			<th>Number_of_Guest</th>
			<th>Phone_Number</th>
			<th>Arrival</th>
			<th>Departure</th>
			<th>Email</th>
			<th>Message</th>
			
		</tr>
		<%
		if(request.getAttribute("book")!=null){
			List<AllBookDetails> guest = (List<AllBookDetails>) request.getAttribute("book");
			for(AllBookDetails a : guest) {
		%>	
		<tr>
		<td><%=a.getFirst_name() %>
		<td><%=a.getLast_name() %>
		<td><%=a.getNumber_of_guest() %>
		<td><%=a.getPhone_number() %>
		<td><%=a.getArrival() %>
		<td><%=a.getDeparture() %>
		<td><%=a.getEmail() %>
		<td><%=a.getMessage() %>
		
		</td>
		<%
		}
		}else {
		%>
		
		<%
		}
		%>
		
		</table>
		
	
</body>
</html>
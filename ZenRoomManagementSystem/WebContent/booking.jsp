<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Booking</title>
<link href="css/index.css"  rel="stylesheet" type="text/css">
</head>
<body>
	<section class="booking" id="booking">
		<h1 class="heading">
			<span>B</span> <span>o</span> <span>o</span> <span>k</span> <span
				class="space"></span> <span>i</span> <span>n</span> <span>g</span>
		</h1>
		<div class="row">

			<div class="image">
				<img src=".\images\image.svg" alt="">
			</div>

			<form action="Booking" method="post"
				onsubmit=" return validates()">

				<div class="inputBox">
					<h3>First Name</h3>
					<input type="text" id="fname" name="fname" value="${booking.fname}"
						placeholder="enter your fname" required>
				</div>
				<div class="inputBox">
					<h3>Last Name</h3>
					<input type="text" id="lname" name="lname" value="${booking.Lname}"
						placeholder="enter your lname" required>
				</div>
				<div class="inputBox">
					<h3>Number of guest</h3>
					<input type="number" id="guest" name="guest" value="${booking.guest}"
						placeholder="enter number of guests" required>
				</div>
				<div class="inputBox">
					<h3>Phone Number</h3>
					<input type="number" id="phonenumber" name="phonenumber" value="${booking.phonenumber}"
						placeholder="enter your number " required>
				</div>
				
				<div class="inputBox">
					<h3>Arrival</h3>
					<input type="date" id="arrivaldate" name="arrival" value="${booking.arrival}"required>
				</div>
				<div class="inputBox">
					<h3>Departure</h3>
					<input type="date" id="departuredate" name="departure" value="${booking.departure}"required>
				</div>
				<input type="submit" value="Book">
			</form>

		</div>
	</section>
	<script src="/script.jsp" ></script>
</body>
</html>

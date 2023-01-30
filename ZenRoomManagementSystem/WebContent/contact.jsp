<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Contact Us</title>
<link href="css/index.css"  rel="stylesheet" type="text/css">
</head>
<body>
	<section class="contact" id="contact">

		<h1 class="heading">
			<span>c</span> <span>o</span> <span>n</span> <span>t</span> <span>a</span>
			<span>c</span> <span>t</span>
		</h1>

		<div class="row">

			<div class="image">
				<img src=".\images\contact.svg" alt="">
			</div>

			<form action="Contact" method="post">
				<div class="inputBox">
					<input type="text" placeholder="First Name"  name = "first_name" value="${contact.first_name}"required> 
					<input type="text" placeholder="Last Name" name="last_name" value="${contact.last_name}" required>
				</div>
				<div class="inputBox">
					<input type="number" placeholder="phone number" name="phone_number" value="${contact.phone_number}" required> 
					<input type="email" placeholder="email" name="email" value="${contact.email}" required>
				</div>
				<textarea placeholder="message" name="message" id="" cols="30" rows="10"required></textarea>
				<input type="submit" value="send message" id="submit" />
			</form>

		</div>

	</section>

</body>
</html>
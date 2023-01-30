<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>AdminLogin</title>
<link href="css/index.css"  rel="stylesheet" type="text/css">
</head>
<body>
 <div class="login-form-container">

        <i class="fas fa-times" id="form-close"></i>
    

            <form id="form_id" method="post" name="myform" action="adminlogin">
                <h3>Admin login</h3>
                <label>User Name :</label>
                <input type="text" name="username" id="username"/>
                <label>Password :</label>
                <input type="password" name="password" id="password"/>
                <input type="submit" value="Login" id="submit" >
                <p>forget password? <a href="#">click here</a></p>
                </form>

        
    </div>
</body>
</html>
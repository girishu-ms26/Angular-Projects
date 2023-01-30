package org.zenroom.model;

public class Contact {

	private String first_name;
	private String last_name;
	private String phone_number;
	private String email;
	private String message;
	
	public Contact() {
		
	}

	public Contact(String first_name, String last_name, String phone_number, String email, String message) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone_number = phone_number;
		this.email = email;
		this.message = message;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Contact [first_name=" + first_name + ", last_name=" + last_name + ", phone_number=" + phone_number
				+ ", email=" + email + ", message=" + message + "]";
	}
	
	
}

package org.zenroom.model;



public class AllBookDetails {
	private String first_name;
	private String last_name;
	private int number_of_guest;
	private String phone_number;
	private String arrival ;
	private String departure;
	private String email;
	private String message;
	
	public AllBookDetails() {
		
	}

	public AllBookDetails(String first_name, String last_name, int number_of_guest, String phone_number, String arrival,
			String departure, String email, String message) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.number_of_guest = number_of_guest;
		this.phone_number = phone_number;
		this.arrival = arrival;
		this.departure = departure;
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

	public int getNumber_of_guest() {
		return number_of_guest;
	}

	public void setNumber_of_guest(int number_of_guest) {
		this.number_of_guest = number_of_guest;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getArrival() {
		return arrival;
	}

	public void setArrival(String arrival) {
		this.arrival = arrival;
	}

	public String getDeparture() {
		return departure;
	}

	public void setDeparture(String departure) {
		this.departure = departure;
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
		return "AllBookDetails [first_name=" + first_name + ", last_name=" + last_name + ", number_of_guest="
				+ number_of_guest + ", phone_number=" + phone_number + ", arrival=" + arrival + ", departure="
				+ departure + ", email=" + email + ", message=" + message + "]";
	}

	
	
	

}

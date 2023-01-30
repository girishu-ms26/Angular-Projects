package org.zenroom.services;

import java.util.List;

import org.zenroom.model.Booking;

public interface BookingService {

	List<Booking> getGuest();
	Booking updateGuest(String phone_number,Booking b);
	Booking getGuest(String phone_number);
	Boolean deleteGuest(String phone_number);


	

}

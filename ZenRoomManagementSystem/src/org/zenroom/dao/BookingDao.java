package org.zenroom.dao;

import java.util.List;

import org.zenroom.model.Booking;

public interface BookingDao {

	List<Booking> getGuest();
	Booking get(String phone_number);
	Booking update(String phone_number, Booking b);
	void addGuest(Booking b);

}

package org.zenroom.services;

import java.util.List;

import org.zenroom.dao.BookingDao;
import org.zenroom.dao.BookingDaoImpl;
import org.zenroom.model.Booking;

public class BookingServiceImpl implements BookingService {
	BookingDao bookingDao = new BookingDaoImpl();
	@Override
	public List<Booking> getGuest() {
		List<Booking> guest = bookingDao.getGuest();
		return guest;
	}

	@Override
	public Booking getGuest(String phone_number) {
		Booking b =bookingDao.get(phone_number);
		return b;
	}

	@Override
	public Booking updateGuest(String phone_number, Booking b) {
	    Booking b1 =bookingDao.update(phone_number,b);
		return b1;
	}

	@Override
	public Boolean deleteGuest(String phone_number) {
		// TODO Auto-generated method stub
		return null;
	}

}

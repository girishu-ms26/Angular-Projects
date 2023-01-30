package org.zenroom.services;

import java.util.List;

import org.zenroom.dao.AllBookDetailsDao;
import org.zenroom.dao.AllBookDetailsDaoImpl;

import org.zenroom.model.AllBookDetails;


public class AllBookDetailsServiceImpl implements AllBookDetailsService {
	AllBookDetailsDao allBookDetailsDao = new AllBookDetailsDaoImpl();
	@Override
	public List<AllBookDetails> getGuests() {
		List<AllBookDetails> guests = allBookDetailsDao.getGuests();
		return guests;
	}

}

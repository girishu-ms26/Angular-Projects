package org.zenroom.services;

import java.util.List;

import org.zenroom.dao.ContactDao;
import org.zenroom.dao.ContactDaoImpl;
import org.zenroom.model.Booking;
import org.zenroom.model.Contact;

public class ContactServiceImpl implements ContactService {
  ContactDao contactDao = new ContactDaoImpl();
	@Override
	public List<Contact> getMsg() {
		List<Contact> msg = contactDao.getMsg();
		return msg;
		
	}
	@Override
	public Contact getMsg(String phone_number) {
		Contact c =contactDao.get(phone_number);
		return c;
	}

	@Override
	public Boolean deleteMsg(String phone_number) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Contact updateMsg(String phone_number, Contact c) {
		 Contact c1 =contactDao.update(phone_number,c);
			return c1;
	}

}

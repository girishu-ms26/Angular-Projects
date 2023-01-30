package org.zenroom.services;

import java.util.List;


import org.zenroom.model.Contact;

public interface ContactService {
	List<Contact> getMsg();
	Contact getMsg(String phone_number);
	Boolean deleteMsg(String phone_number);
	Contact updateMsg(String phone_number, Contact c);


}

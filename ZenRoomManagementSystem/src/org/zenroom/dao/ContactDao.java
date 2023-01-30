package org.zenroom.dao;

import java.util.List;


import org.zenroom.model.Contact;

public interface ContactDao {

	List<Contact> getMsg();
	Contact get(String phone_number);
	void addMsg(Contact c);
	Contact update(String phone_number, Contact c);
	

}

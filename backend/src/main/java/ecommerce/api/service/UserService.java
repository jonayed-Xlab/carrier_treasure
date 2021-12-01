package ecommerce.api.service;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ecommerce.api.model.User;
import ecommerce.api.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public User submitToBD(User user) {
		return userRepository.save(user);
	}
	
	public ArrayList<User> retriveFromBD(){
		ArrayList<User> userList = userRepository.findAll();
		Collections.sort(userList,(a,b)->b.getId()-a.getId());
		return userList;
	}
	
	public long totalUser() {
		return userRepository.count();
	}
}

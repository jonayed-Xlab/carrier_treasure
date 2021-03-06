package ecommerce.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.api.model.User;
import ecommerce.api.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping
	public User submitUser(@RequestBody User user) {
		return userService.submitToBD(user);
	}
	
	@GetMapping
	public ArrayList<User> retriveUser(){
		return userService.retriveFromBD();
	}
	
	@GetMapping("/total")
	public long getTotalUser() {
		return userService.totalUser();
	}
}

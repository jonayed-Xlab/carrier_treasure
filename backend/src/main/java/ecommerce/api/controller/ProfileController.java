package ecommerce.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.api.model.Profile;
import ecommerce.api.service.ProfileService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/profile")
public class ProfileController {
	@Autowired
	ProfileService profileService;
	
	@PostMapping("")
	public Profile submitUserOrder(@RequestBody Profile profile) {
		return profileService.sumitToDB(profile);
	}
	
	@GetMapping("")
	public ArrayList<Profile> getProfile(){
		return profileService.retriveProfileFromDB();}
}

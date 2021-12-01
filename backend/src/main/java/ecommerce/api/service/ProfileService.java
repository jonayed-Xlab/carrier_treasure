package ecommerce.api.service;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.api.model.Profile;
import ecommerce.api.repository.ProfileRepository;
@Service
public class ProfileService {
	@Autowired
	ProfileRepository profileRepository;

	public Profile sumitToDB(Profile profile) {
	
		
		return profileRepository.save(profile);
	}
	
	public ArrayList<Profile> retriveProfileFromDB(){
		ArrayList<Profile> productlist = profileRepository.findAll();
		
		return productlist;
		
	}

	

}

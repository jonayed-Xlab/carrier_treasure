package ecommerce.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ecommerce.api.model.FeedBack;
import ecommerce.api.service.FeedbackService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	
	@PostMapping("")
	public FeedBack submitUserFeedback(@RequestBody FeedBack feedback) {
		return feedbackService.submitFeedbackToDB(feedback);
	}
	
	@GetMapping("")
	public ArrayList<FeedBack> getAllFeedback(){
		return feedbackService.retriveFeedbackFromDB();
	}
}

package ecommerce.api.service;
import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.api.model.FeedBack;
import ecommerce.api.repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository feedbackRepository;
		
	public FeedBack submitFeedbackToDB(FeedBack feedback) {
		return feedbackRepository.save(feedback);
	}
	
	public ArrayList<FeedBack> retriveFeedbackFromDB(){
		ArrayList<FeedBack> feedbacklist = feedbackRepository.findAll();
		Collections.sort(feedbacklist,(a,b)->b.getId()-a.getId());
		return feedbacklist;
		
	}
}

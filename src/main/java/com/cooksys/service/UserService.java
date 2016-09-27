package com.cooksys.service;

import static org.mockito.Matchers.anyBoolean;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.SavedFlight;
import com.cooksys.entity.SavedItinerary;
import com.cooksys.entity.User;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.SavedFlightRepository;
import com.cooksys.repository.SavedItineraryRepository;
import com.cooksys.repository.UserRepository;

@Service
public class UserService {
	
@Autowired
UserRepository userRepository;
@Autowired
SavedFlightRepository savedFlightRepository;
@Autowired
SavedItineraryRepository savedItineraryRepository;

	public User checkUser(String username, String password) {
		
		
		return userRepository.findByUsername(username);
	}

	public Long newUser(User user) {
		User a=userRepository.findByUsername(user.getUsername());
		if(a==null){
			userRepository.saveAndFlush(user);
			return userRepository.findByUsername(user.getUsername()).getId() ;
		}
		return (long) 0;
	}

	public List<User> getAllUsers() {
	return userRepository.findAll();
	}

	public List<SavedItinerary> getuserItinerary(String username) {
		return userRepository.findByUsername(username).getItinerary();
		
	}

	public List<SavedItinerary> newItinerary(SavedItinerary savedItinerary,Long id) {
			User user=userRepository.findOne(id);
			if(user!=null){
			List<SavedItinerary> sI= user.getItinerary();
			for(SavedFlight flight:savedItinerary.getFlights()){
				savedFlightRepository.save(flight);
			}
			savedItineraryRepository.save(savedItinerary);
			sI.add(savedItinerary);
			user.setItinerary(sI);
			
			userRepository.save(user);
			return user.getItinerary();
			}
			else{
				return null;
			}
		
	}

//	public Long getOneItinerary(Long id1, Long id2) {
//		User user=userRepository.findOne(id);
//		if(user!=null){
//		user.getItinerary()
//		return id;
//		}
//		else{
//			return (long) 0;
//		}
//	}
	

	

}

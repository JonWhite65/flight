package com.cooksys.service;

import static org.mockito.Matchers.anyBoolean;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.SavedItinerary;
import com.cooksys.entity.User;
import com.cooksys.repository.UserRepository;

@Service
public class UserService {
	
@Autowired
UserRepository userRepository;

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
	

	

}

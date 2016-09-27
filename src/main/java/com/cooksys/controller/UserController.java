package com.cooksys.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.entity.SavedItinerary;
import com.cooksys.entity.User;
import com.cooksys.service.LocationService;
import com.cooksys.service.UserService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.DELETE})
@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	@RequestMapping(value = "/itineraries/{username}" ,method = RequestMethod.GET)
	public List<SavedItinerary> getSavedItinerary(@PathVariable("username") String username){

		return userService.getuserItinerary(username);
	}
	@RequestMapping(value = "/{username}/{password}",method = RequestMethod.GET)
	public User checkLogin(@PathVariable("username") String username,@PathVariable("password") String password){
		return userService.checkUser(username,password);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Long newUser(@RequestBody User user){
		return userService.newUser(user);
	}
	@RequestMapping(value="/{id1}/itineraries",method=RequestMethod.PUT)
	public List<SavedItinerary> newIteneraries(@PathVariable("id1") Long id1,@RequestBody SavedItinerary savedItinerary){
		return userService.newItinerary(savedItinerary,id1);
	}
}

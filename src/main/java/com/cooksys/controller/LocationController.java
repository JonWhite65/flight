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

import com.cooksys.entity.Location;
import com.cooksys.entity.User;
import com.cooksys.service.LocationService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.DELETE})
@RestController
@RequestMapping("location")
public class LocationController {
	
	@Autowired
	private LocationService locationService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Location> get() {
		return locationService.getAll();
	}
	@RequestMapping(method = RequestMethod.PUT)
	public void put(@RequestBody Location location) {
		locationService.put(location);
	}

	@RequestMapping("/{id}")
	public Location get(@PathVariable("id") long id) {
		return locationService.get(id);
	}
	
	@RequestMapping("/name")
	public Location get(@RequestParam("name") String cityName)
	{
		return locationService.get(cityName);
	}

}

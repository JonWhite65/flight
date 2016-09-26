package com.cooksys.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.pojo.Flight;
import com.cooksys.service.FlightService;
import com.cooksys.service.LocationService;

@CrossOrigin(methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.DELETE})
@RestController
@RequestMapping("flights")
public class FlightsController {
	
	@Autowired
	LocationService locationService;
	
	@Autowired
	FlightService flightService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ArrayList<Flight> getFlightList()
	{
		return flightService.getDailyFlightList();
		
	}
	@RequestMapping(value = "/{location}/{destination}", method = RequestMethod.GET)
	public List<List> getPossible(@PathVariable("location") String location,@PathVariable("destination") String destination)
	{
		return flightService.allPossibleIteneraries(location,destination);
	}
}

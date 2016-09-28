package com.cooksys.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.entity.SavedFlight;
import com.cooksys.entity.SavedItinerary;
import com.cooksys.pojo.Flight;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;

	private ArrayList<Flight> flightList = new ArrayList<>();

	public ArrayList<Flight> getDailyFlightList() {
		return flightList;
	}

	// The fixedDelay parameter determines how often a new day is generated as
	// expressed in milliseconds
	@Scheduled(fixedDelay = 5000)
	private void refreshFlights() {
		flightList = generator.generateNewFlightList();
		Collections.sort(flightList);
	}
	public List<SavedItinerary> allPossibleIteneraries(String location, String destination) {  
	    ArrayList<String> a = new ArrayList<String>(); 
	    a.add(location);
	    List<List> list= explore(a, new ArrayList<Flight>(), (long) -1, location, destination, new ArrayList<List>()); 
	  return compareAndSort(list,location,destination);
	} 
	
	  private List<SavedItinerary> compareAndSort(List<List> list,String location, String destination) {
		  List<SavedItinerary> saved= new ArrayList<SavedItinerary>();
		  if(!(list==null)){
		  for(List<Flight> list1:list){
			SavedItinerary sI=new SavedItinerary(new ArrayList<SavedFlight>());
			sI.setOrigin(location);
			sI.setDestination(destination);
			for(Flight flight:list1){
				SavedFlight sF= new SavedFlight(flight);
				sF.setLayover(sF.getOffset()-(sI.getTotalFlightTime()+sI.getTotalLayover()));
				sI.setTotalLayover(flight.getOffset()-sI.getTotalFlightTime());
				sI.setTotalFlightTime(flight.getFlightTime()+sI.getTotalFlightTime());
				List<SavedFlight> flights=sI.getFlights();
				flights.add(sF);
				sI.setFlights(flights);
				
			}
			sI.setTotalLayover(sI.getTotalLayover()-sI.getFlights().get(0).getOffset());
			saved.add(sI);
		}
		  }
		  Collections.sort(saved);
		  return saved;
	}

	private List<List> explore(ArrayList<String> citiesBeen, ArrayList<Flight> currentFlightList, long time, 
	      String location, String destination, ArrayList<List> returnList) {  
	    if (location.equals(destination)) { 
	      returnList.add(currentFlightList); 
	      return returnList; 
	    } 
	    List<Flight> possibleFlights = new ArrayList<Flight>(); 
	    for (Flight flight : flightList) { 
	       
	      if (flight.getOrigin().equals(location) && flight.getOffset() > time 
	          && !citiesBeen.contains(flight.getDestination())) { 
	        
	        possibleFlights.add(flight); 
	      } 
	    } 
	    if (possibleFlights.isEmpty()) { 
	      return null; 
	    } 
	    for (Flight flight : possibleFlights) { 
	      ArrayList<String> citiesUpdate = new ArrayList<String>(); 
	      citiesUpdate.addAll(citiesBeen); 
	      citiesUpdate.add(location); 
	      ArrayList<Flight> flightListUpdate = new ArrayList<Flight>(); 
	      flightListUpdate.addAll(currentFlightList); 
	      flightListUpdate.add(flight); 
	      long timeUpdate = flight.getOffset() + flight.getFlightTime(); 
	      List<List> a = explore(citiesUpdate, flightListUpdate, timeUpdate, flight.getDestination(), destination, 
	          returnList); 

	     
	    } 
	 
	    return returnList; 
	 
	  } 


}

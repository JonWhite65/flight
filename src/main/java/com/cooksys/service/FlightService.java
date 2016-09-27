package com.cooksys.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
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
	@Scheduled(fixedDelay = 50000)
	private void refreshFlights() {
		flightList = generator.generateNewFlightList();
		Collections.sort(flightList);
	}

	public List<List> allPossibleIteneraries(String location, String destination) {
		System.out.println("1");
		ArrayList<String> a = new ArrayList<String>();
		a.add(location);
		return explore(a, new ArrayList<Flight>(), (long) -1, location, destination, new ArrayList<List>());
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

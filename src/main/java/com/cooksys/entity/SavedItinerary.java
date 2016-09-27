package com.cooksys.entity;

import java.util.List;

import javax.persistence.*;

import com.cooksys.pojo.Flight;

@Entity
public class SavedItinerary implements Comparable {
	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Flights")
	private List<SavedFlight> flights;
	
	private Long totalLayover=(long)0;
	private Long totalFlightTime=(long)0;
	private String origin;
	private String destination;

	public Long getTotalLayover() {
		return totalLayover;
	}

	public void setTotalLayover(Long totalLayover) {
		this.totalLayover = totalLayover;
	}

	public Long getTotalFlightTime() {
		return totalFlightTime;
	}

	public void setTotalFlightTime(Long totalFlightTime) {
		this.totalFlightTime = totalFlightTime;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public SavedItinerary() {
	}

	public SavedItinerary(List<SavedFlight> flights) {
		super();
		this.flights = flights;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<SavedFlight> getFlights() {
		return flights;
	}

	public void setFlights(List<SavedFlight> flights) {
		this.flights = flights;
	}
	@Override
	public int compareTo(Object comp) {
		SavedItinerary a=(SavedItinerary)comp;
		long compare1= a.getTotalFlightTime();
		long compare2=a.getTotalLayover();
		int compare=(int)(compare1+compare2);
		
		return  ((int) (this.getTotalFlightTime()+this.getTotalLayover()))-compare;
	}
}

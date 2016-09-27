package com.cooksys.entity;

import java.util.List;

import javax.persistence.*;

@Entity
public class SavedItinerary {
	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Flights")
	private List<SavedFlight> flights;
	
	private Long totalLayover;
	private Long totalFlightTime;
	private String origin;
	private String destination;

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

}

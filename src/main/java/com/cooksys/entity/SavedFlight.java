package com.cooksys.entity;

import javax.persistence.*;

import com.cooksys.pojo.Flight;

@Entity
public class SavedFlight {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "Origin")
	private String origin;
	@Column(name = "Destination")
	private String destination;
	@Column(name = "FlightTime")
	private long flightTime;
	@Column(name = "takeoff_offset")
	private long offset;
	@Column(name="layover")
	private long layover;

	public long getLayover() {
		return layover;
	}

	public void setLayover(long layover) {
		this.layover = layover;
	}

	public SavedFlight(Flight flight) {
		this.origin = flight.getOrigin();
		this.destination = flight.getDestination();
		this.flightTime =flight.getFlightTime();
		this.offset = flight.getOffset();
	}

	public SavedFlight(String origin, String destination, long flightTime, long offset) {
		super();
		this.origin = origin;
		this.destination = destination;
		this.flightTime = flightTime;
		this.offset = offset;
	}
	public SavedFlight(){}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public long getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(long flightTime) {
		this.flightTime = flightTime;
	}

	public long getOffset() {
		return offset;
	}

	public void setOffset(long offset) {
		this.offset = offset;
	}

}

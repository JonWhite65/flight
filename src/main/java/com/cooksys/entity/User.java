package com.cooksys.entity;

import java.util.List;

import javax.persistence.*;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;

	@Column
	private String username;
	@Column
	private String password;
	@OneToMany(cascade = { CascadeType.ALL })
	@JoinColumn
	private List<SavedItinerary> itinerary;
	public User(String username, String password, List<SavedItinerary> itinerary) {
		super();
		this.username = username;
		this.password = password;
		this.itinerary = itinerary;
	}
	public User() {
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<SavedItinerary> getItinerary() {
		return itinerary;
	}
	public void setItinerary(List<SavedItinerary> itinerary) {
		this.itinerary = itinerary;
	}

}

package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.SavedFlight;

public interface SavedFlightRepository extends JpaRepository<SavedFlight,Long>{

	

}

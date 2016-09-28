package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {

	public User findById(Long userId);
	public User findByUsername(String username);
	

}

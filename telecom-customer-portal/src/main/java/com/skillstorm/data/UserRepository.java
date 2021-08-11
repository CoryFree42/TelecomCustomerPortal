package com.skillstorm.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	//additional CRUD methods
	
}

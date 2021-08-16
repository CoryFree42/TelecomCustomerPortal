package com.skillstorm.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	//additional CRUD methods
	//public List<User> findByName(String name);
	
	//@Query("select count(*) from User user where user.email=?1 and user.password=?2")
	//Integer getValidUser(String email, String password);
	
}

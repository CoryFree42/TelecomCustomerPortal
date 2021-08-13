package com.skillstorm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.models.User;
import com.skillstorm.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillController {
	
	@Autowired
	BillService service;
	
	@GetMapping
	public ResponseEntity<Double> getBill(@Valid @RequestBody User user){
		return new ResponseEntity<>(service.getBill(user), HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Double> getBill(@Valid @RequestBody User user, @PathVariable int id){
		return new ResponseEntity<>(service.getBill(user, id), HttpStatus.ACCEPTED);
	}
}

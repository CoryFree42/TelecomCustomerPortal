package com.skillstorm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.data.DeviceRepository;
import com.skillstorm.models.Device;

@RestController
@RequestMapping("/devices")
public class DeviceController {

	@Autowired
	private DeviceRepository repository;
	//private UserService service; //inject UserService here instead
	
	@PostMapping("/device")
	public ResponseEntity<Device> save(@RequestBody @Valid Device device) {
		                                   //Body             Entity
		return new ResponseEntity<>(repository.save(device), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Device>> findAll(){
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}
	
	@PutMapping("/device/{id}")
	public ResponseEntity<Void> update(@RequestBody @Valid Device device, @PathVariable("id") String id) {
		repository.save(device);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		//if(device.getPhoneNumber() == id && repository.findById(device.getPhoneNumber()).isPresent()) {
		//	repository.save(device);
		//	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		//}
		//return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/device/{id}")
	public ResponseEntity<Device> findById(@PathVariable String id) {
		java.util.Optional<Device> optional = repository.findById(id);
		return optional.isPresent()? ResponseEntity.ok(optional.get()) : ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/device/{id}")
	public void deleteById(@PathVariable String id) {
		//java.util.Optional<User> optional = repository.findById(id);
		repository.deleteById(id);
	}
	
}

package com.skillstorm.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.data.UserRepository;
import com.skillstorm.models.User;
import com.skillstorm.service.UserService;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository repository;
	//private UserService service; //inject UserService here instead
	
	
	//@RequestMapping(method = RequestMethod.POST, value = "/user" )
	//@ResponseBody ///whatever is returned is written directly to http response body
	@PostMapping("/user")
	public ResponseEntity<User> save(@RequestBody @Valid User user) {
		                                   //Body             Entity
		return new ResponseEntity<>(repository.save(user), HttpStatus.CREATED);
	}
	
	//@RequestMapping(method = RequestMethod.GET, value = "/user")
	//@ResponseBody
	@GetMapping
	public ResponseEntity<List<User>> findAll(){
		return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
	}
	
	//PUT localhost:9001/users/user/id  -  update at id
	@PutMapping("/user/{id}")
	public ResponseEntity<Void> update(@RequestBody @Valid User user, @PathVariable("id") Integer id) {
		if(user.getUserID() == id && repository.findById(user.getUserID()).isPresent()) {
			repository.save(user);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> findById(@PathVariable Integer id) {
		java.util.Optional<User> optional = repository.findById(id);
		return optional.isPresent()? ResponseEntity.ok(optional.get()) : ResponseEntity.badRequest().build();
	}
	
}
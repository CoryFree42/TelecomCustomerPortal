package com.skillstorm.frontcontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FrontController{
	
	@GetMapping(value = "*")
	private void getRequest(){

//		switch("") {
//		case"":
//			break;
//		}
	}

}

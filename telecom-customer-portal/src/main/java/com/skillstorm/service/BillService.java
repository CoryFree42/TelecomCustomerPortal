package com.skillstorm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.data.DeviceRepository;
import com.skillstorm.models.User;

@Service
public class BillService {
	@Autowired
	DeviceRepository repository;
	
public double getBill(User user) {
		
		Double total = 0.0;
		total += repository.getBill(user.getUserID(), 1);
		System.out.println(total);
		total += repository.getBill(user.getUserID(), 2);
		System.out.println(total);
		total += repository.getBill(user.getUserID(), 3);
		System.out.println(total);

		return total;
	}
	
	public double getBill(int planID) {
		return 0;
	}
}

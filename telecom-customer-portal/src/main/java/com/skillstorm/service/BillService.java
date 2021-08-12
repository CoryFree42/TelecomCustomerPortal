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
		
		repository.countDevices(user.getUserID(), 1);
		repository.countDevices(user.getUserID(), 2);
		repository.countDevices(user.getUserID(), 3);

		return 0;
	}
	
	public double getBill(int planID) {
		return 0;
	}
}

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
		Double plan1 = repository.getBill(user.getUserID(), 1);
		Double plan2 = repository.getBill(user.getUserID(), 2);
		Double plan3 = repository.getBill(user.getUserID(), 3);
        if(plan1 != null) total+= plan1;
        if(plan2 != null) total+= plan2;
        if(plan3 != null) total+= plan3;
		
		return total;
	}
	
	public double getBill(int planID) {
		return 0;
	}
	
}
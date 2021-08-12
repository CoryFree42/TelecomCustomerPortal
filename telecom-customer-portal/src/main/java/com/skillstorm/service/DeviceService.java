package com.skillstorm.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.data.DeviceRepository;
import com.skillstorm.models.Device;

@Service
public class DeviceService {

	@Autowired
	DeviceRepository repository;
	
	public Device saveDevice(Device device) {
		return repository.save(device);
	}
	public void updateDevice(Device device) {
		repository.save(device);
	}
	
	public void deleteDevice(String id) {
		repository.deleteById(id);
	}
	
	public Optional<Device> getDevice(String id) {
		return repository.findById(id);
	}
	
	public List<Device> getDevices(){
		return repository.findAll();
		
	}
	
	
}

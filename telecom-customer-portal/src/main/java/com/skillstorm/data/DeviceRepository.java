package com.skillstorm.data;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Device;

@Repository
public interface DeviceRepository extends JpaRepository<Device, String>{

}

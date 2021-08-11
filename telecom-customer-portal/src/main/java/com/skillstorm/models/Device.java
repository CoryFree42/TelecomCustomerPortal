package com.skillstorm.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="devices")
public class Device {
	
	@Id //primary key
	@Column(name="phoneNumber")
	String phoneNumber;
	
	@Column(name="userID")
	@NotBlank
	int userID;
	
	@Column(name="dataPlanID")
	@NotBlank
	int dataPlanID;
	
	@Column(name="deviceName")
	@NotBlank
	String deviceName;
	
	@Column(name="deviceDescription")
	@NotBlank
	String deviceDescription;

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public int getDataPlanID() {
		return dataPlanID;
	}

	public void setDataPlanID(int dataPlanID) {
		this.dataPlanID = dataPlanID;
	}

	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}

	public String getDeviceDescription() {
		return deviceDescription;
	}

	public void setDeviceDescription(String deviceDescription) {
		this.deviceDescription = deviceDescription;
	}

	@Override
	public String toString() {
		return "Device [phoneNumber=" + phoneNumber + ", userID=" + userID + ", dataPlanID=" + dataPlanID
				+ ", deviceName=" + deviceName + ", deviceDescription=" + deviceDescription + "]";
	}
	
	
}

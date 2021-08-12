package com.skillstorm.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name = "users")
public class User {

	@Id //primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //value is generated by database
	@Column(name="userID")
	private int userID;
	
	@Column(name="firstName")
	@NotBlank
	private String firstName;
	
	@Column(name="lastName")
	@NotBlank
	private String lastName;
	
	@Column(name="email")
	@NotBlank
	@Email
	private String email;
	
	@Column(name="password")
	@NotBlank
	private String password;
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL)
	private Set<Device> devices;
	
	public User() {
		super();
	}
	
	
	public User(int userID, @NotBlank String firstName, @NotBlank String lastName, @NotBlank @Email String email,
			@NotBlank String password) {
		super();
		this.userID = userID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}



	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public Set<Device> getDevices() {
		return devices;
	}



	public void setDevices(Set<Device> devices) {
		this.devices = devices;
	}



	@Override
	public String toString() {
		return "User [userID=" + userID + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + "]";
	}
}

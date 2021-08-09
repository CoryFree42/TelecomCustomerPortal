create table user(
    userID int not null auto_increment,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    primary key (userID)
);

CREATE TABLE devices (
  userID INT NOT NULL,
  deviceID INT NOT NULL AUTO_INCREMENT, 
  deviceName VARCHAR(45) NOT NULL,
  phoneNumber VARCHAR(45) NOT NULL,
  deviceDescription VARCHAR(45) NOT NULL,
  PRIMARY KEY (`deviceID`)
);
  
CREATE TABLE dataplans (
  userID INT NULL,
  dataPlanID INT NOT NULL AUTO_INCREMENT,
  numberOfDevices INT NOT NULL DEFAULT 0,
  planDescription VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dataPlanID`)
);

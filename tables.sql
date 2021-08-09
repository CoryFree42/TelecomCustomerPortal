CREATE TABLE users(
    userID INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY (`userID`)
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

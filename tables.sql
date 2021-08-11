CREATE TABLE users(
    userID INT NOT NULL AUTO_INCREMENT,
    dataPlanID INT NOT NULL,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY (`userID`),
    FOREIGN KEY (`dataPlanID`)
    REFERENCES data_plans(dataPlanID)
);

CREATE TABLE devices (
  deviceID INT NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  deviceName VARCHAR(45) NOT NULL,
  phoneNumber VARCHAR(45) NOT NULL,
  deviceDescription VARCHAR(45) NOT NULL,
  PRIMARY KEY (`deviceID`),
  FOREIGN KEY (`userID`)
  REFERENCES users(userID)
);
  
CREATE TABLE data_plans (
  userID INT NULL,
  dataPlanID INT NOT NULL AUTO_INCREMENT,
  numberOfDevices INT NOT NULL DEFAULT 0,
  planDescription VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dataPlanID`)
);

create table user(
    userID int not null auto_increment,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null,
    primary key (userID)
);
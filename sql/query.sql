USE web_chat;
CREATE TABLE customer(
	id         INT PRIMARY KEY AUTO_INCREMENT,
	image      VARCHAR(1024),
	name       VARCHAR(64),
	birthday   VARCHAR(64),
	gender     VARCHAR(64),
	job        VARCHAR(64),
	createDate datetime default now(),
	isDelete   int default 0
)DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;

  insert into customer values
  (1, 'https://placeimg.com/64/64/1', '홍길동', '123456', 'man', 'student'),
  (2, 'https://placeimg.com/64/64/2', '이순신', '123456', 'man', 'design'),
  (3, 'https://placeimg.com/64/64/3', '이성계', '123456', 'man', 'programer');
  
	ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'ps123!@#';
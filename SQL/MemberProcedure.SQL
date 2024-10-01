DROP PROCEDURE IF EXISTS `aws0822`.`proctest1`;
DELIMITER $$
CREATE PROCEDURE `aws0822`.`proctest1`(
param_name varchar(20)
)
begin
	declare i int;  -- 변수선언 타입과 같이
	set i:=1;   -- 변수에 초기값 담기

	while i<=100 do

	insert into member(memberid,memberpwd,membername,membergender,memberbirth,memberaddr,memberphone,memberemail,memberhobby)
	values(concat(param_name,i),'1234','홍길동','M',19990101,'대전','01047478585','hong@naver.com','축구');
 	set i = i + 1 ;
	end while;  -- 반복문 끝
end $$
DELIMITER ;
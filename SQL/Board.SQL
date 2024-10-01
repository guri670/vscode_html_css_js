-- 게시판 테이블 생성하기 (10.01)
-- 글번호, 제목, 내용, 글쓴이 , 추천수, 조회수, 파일이름, 작성일자, 삭제여부, ip, 회원번호

create table BOARD(
bidx int not null AUTO_INCREMENT primary key,
subject varchar(100) NOT null,
contents text not null,
writer varchar(100) not null,
filename varchar(100) null,
recom int null,
viewcnt int null,
writeday datetime default now(),
delyn char(1) default 'N',
ip varchar(30) null,
midx int not null
);

-- 외래키(foreign key 제약조건(constraint) 추가) ERD(관계 설정)
alter table board
add CONSTRAINT bidx_midx_fk foreign key(midx) references member(midx); -- 제약조건

insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('글제목','글내용','글작성자',0,0,null,'211.111.222.330',1);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('글제목2','글내용2','글작성자2',0,0,null,'211.111.222.330',2);

select *from board;
select *from member;
-- 추천수 칼럼 기본값 주기
alter table board
modify recom int default 0;

-- 조회수 칼럼 기본값 주기
alter table board
modify viewcnt int default 0;

-- join 공통된 칼럼으로 묶어서 하나의 테이블로 합치는 방법
-- 형식
select *from 테이블1 inner join 테이블2 on 테이블1.pk칼럼 = 테이블2.fk칼럼

-- 회원 아이디가 lee 인 사람의 제목을 출력하세요
select *from board A inner join member B on B.midx = A.midx ; -- join으로 midx가 연결된 걸 볼 수 있다.
select A.subject from board A inner join member B on B.midx = A.midx where B.memberid = 'lee';

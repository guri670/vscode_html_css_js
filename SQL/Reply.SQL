-- reply(댓글) create 테이블 만들기

create table REPLY(
ridx int not null primary key auto_increment,
rsubject varchar(100) null,
rcontents varchar(4000) not null,
rwriter varchar(100) null,
writeday datetime default now(),
delyn char(1) default 'N',
rip varchar(20),
midx int not null,
bidx int not null
);


-- midx fk(외래키) 설정
alter table REPLY
add constraint member_reply_midx_FK foreign key(midx) references member(midx);

alter table REPLY
drop foreign key member_reply_midx;

-- bidx fk(외래키) 설정
alter table REPLY
add constraint board_reply_bidx_FK foreign key(bidx) references board(bidx);

-- 게시글 3번글에 대해서 회원번호 103번인 사람이 궁금이라는 제목으로
-- 알려주세요 라는 내용을 작성하고 닉네임은 삼삼이라고 작성하는 구문을 입력하세요

select *from reply ;

insert into REPLY(rsubject,rcontents,rwriter,rip,midx,bidx)
values('궁금','알려주세요','삼삼','111.222.333.444',97,3)

-- 댓글 테이블 샘플데이터 입력
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('궁금증', '궁금하니','댓글작성자7', 7,4);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('????', '뭐시','댓글작성자10', 10,5);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('안녕', '하세요','댓글작성자11', 11,6);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('반갑', '습니다','댓글작성자13', 13,10);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('굿', '뱃','댓글작성자14', 14,1);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('배드', '굿','댓글작성자2', 2,2);
insert into reply(rsubject,rcontents,rwriter,midx,bidx)
values('심플', '하게살기','댓글작성자3', 3,3);

select *from member;
select *from board;
select *from reply;


-- 다르빗슈라는 작성자가 쓴 게시글의 댓글을 쓴 사람들의 아이디를 출력해주세요(3개의 테이블이 join)
1. board 테이블과 reply 테이블을 조인해서 합친후 member 테이블도 조인하여 3개의 테이블을 조인 한다.
select *from board A
join reply B on A.bidx = b.bidx
join member C on c.midx = b.midx

2. where조건식을 적용한다.
where A. writer = '다르빗슈'

3. 사람들의 아이디를 출력하는 구문을 적용한다
select C.memberid

4. 검증
select C.memberid from board A
join reply B on A.bidx = B.bidx
join member C on C.midx = B.midx
where A. writer = '다르빗슈';

update reply set rsubject = '악플' where ridx=7;

-- 댓글 중 악플이라고 쓰여있는 게시글을 모두 찾아서 출력하고
-- 댓글을 쓴 사람의 게시글 번호(bidx)와 이름(membername)과 연락처(memberphone)를 출력해보세요

1. 댓글(reply), 게시글(board), 이름과 연락처(member) 를 조인한다.
2. where 조건식을 적용한다.
3. 출력하고자하는 구문을 적용한다.

select A.bidx, membername, memberphone from Board A
join reply B on A.bidx = B.bidx
join member C on C.midx = B.midx
where B. rsubject in ('악플');
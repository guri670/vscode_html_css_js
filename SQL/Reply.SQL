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

insert into REPLY(rsubject,rcontents,rwriter,rip,midx,bidx)
values('궁금','알려주세요','삼삼','111.222.333.444',97,3)
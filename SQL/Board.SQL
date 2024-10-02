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
values('글제목','글내용','글작성자',null,0,0,'211.111.222.330',1);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('글제목2','글내용2','글작성자2',null,0,0,'211.111.222.330',2);

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

-- member 테이블 데이터 수정하기 update(DML)
-- 형식 update 테이블이름 set 칼럼 1 = '값, 칼럼2 = '값' where midx = 값
-- where 조건을 사용하지 않으면 데이터 전체가 업데이트 될 수 있으니 주의해야함.

-- 회원번호가 홀수인 사람들의 사는 지역을 모두 서울로 변경하세요 (mod 사용)
select 3 mod 2 from dual; -- mod 나머지 연산자

update member SET memberaddr = "서울" where midx mod 2 = 1;
select * from member;

-- 회원번호가 3의 배수인 사람들은 성별을 여성으로 변경 하고 취미는 야구라고 변경하세요.
update member SET membergender = 'F' ,memberhobby = '야구' where midx mod 3 = 0;

update member SET memberbirth = '19920428', memberemail = 'hong@google.com' where midx mod 4 = 0;

update member set membername = '이몽룡', memberbirth = '19970524' where midx mod 6 = 0;

update member SET membername = '이춘향', memberbirth = '19991022' where midx mod 8 =0;

-- 1. 계획 잡기
-- 2. 레퍼런스 찾기
-- 3. 테스트해보기
-- 4. 실행하기
-- 5. 확인하기

select *from board;
select *from member;

-- board 샘플 데이터 입력하기
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('안녕하세요','내용입니다','다르빗슈',null,0,0,null,107);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('질문 있습니다','뭘 준비해야할까요','주니어',null,0,0,null,110);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('오늘 점심 뭐먹지','날도 추운데 따뜻한거 먹을까?','중국집단무지도둑',null,0,0,null,18);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('잘 놀다갑니다','꺼억','이케아연필도둑',null,0,0,null,71);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('개발자 고민있어요','언어는 어떤걸 선택할까요','코린이',null,0,0,null,95);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('어제 저녁 잘못먹었나','속이 안좋네','밥',null,0,0,null,67);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('날씨 개춥네요','벌써 가을인가','춘식',null,0,0,null,23);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('졸려','zzz','맘보',null,0,0,null,15);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('1111','2222','333',null,0,0,null,41);
insert into board(subject,contents,writer,filename,recom,viewcnt,ip,midx)
values('ㅋㅋㅋㅋ','뭐요','뻘글',null,0,0,null,55);

-- 게시글을 최근 등록된 순서대로 나열하세요
select *from board order by bidx desc;

-- 3번째 게시글을 쓴 사람의 회원이름을 출력하시오
-- join 을 사용할것 (1. 조인 되었는지 먼저 확인하기.) 회원이름 = membername, 게시글 = bidx
-- 연결되었는지 확인했으면 나머지 조건을 채워넣기
select *from member A inner join board B on B.midx = A.midx;
select a.membername from member A inner join board B on B.midx = a.midx where bidx = 3;

-- 아이디가 test13인 사람이 쓴 글의 게시글을 모두 출력해주세요
select * from member A inner join board B on B.midx = A.midx where memberid = 'test13';

-- 대전에 사는 사람들이 쓴 글의 게시물 수를 출력해주세요
select count(*) from member A inner join board B on B.midx = A.midx where memberaddr = '대전';

-- 8번 게시물의 조회수를 +1 추가해주세요
update board set viewcnt = viewcnt+1 where bidx = 8;
select *from board;

-- Outer Join : 기준점이 되는 모든 데이터들은 나타내주고 다른 테이블의 데이터는 공통적인 컬럼으로 묶여있는 데이터만 추출한다

-- left outer join형식
-- select *from 테이블 A left outer join 테이블 B on A.pk = B.pk

-- 회원중에 게시글을 쓴 수를 모두 출력하세요 (게시글을 쓰지 않았으면 0 )
select *from member A left outer join board B on A.midx = B.midx ;

select A.midx ,count(B.bidx)
from member A
	left outer join board B
	on a.midx = b.midx
group by A.midx
order by midx asc;

-- 회원들 중에 사는 지역별로 게시물을 쓴 사람들의 인원수를 출력하세요
select A.memberaddr , count(B.bidx)
from member A
left outer join board B
on A.midx = b.midx
group by A.memberaddr;

-- 트럼프인 사람이 쓴 글이 ip가 있으면 ip 있음 이라고 출력하고 아이피가 없으면 ip없음 이라고 출력하세요
select A.membername = '트럼프', memberip from member.A
left outer join board.B
on A.midx = B.midx
where memberip = null

if(memberip = not null)

select*from member;


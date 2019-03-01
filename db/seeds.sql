create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
    );
create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users(id)
    );
insert into users (username, password, profile_pic)
    values ('Ben', '123', 'pic goes here');
insert into posts ( title, img, content)
    values ('title', 'image here', 'content of the post goes here')
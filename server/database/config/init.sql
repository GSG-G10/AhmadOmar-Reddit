BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    image TEXT,
    user_id INTEGER REFERENCES users(id),
    community VARCHAR(100) NOT NULL,
    votes INTEGER,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    post_id INTEGER NOT NULL REFERENCES posts(id),
    votes INTEGER
);

INSERT INTO users (username, email_address, password) VALUES
('ahmadomar', 'ahmad@gmail.com', 'abcd123'),
('aomar', 'ahmadomar@gmail.com', '123abcd');

INSERT INTO posts (title, content, image, user_id, community, votes) VALUES
('Why are you still awake?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis lacus in leo facilisis, et ullamcorper elit pulvinar. Quisque feugiat sed urna quis pharetra. Proin sed enim at magna vehicula pretium et sit amet turpis. Etiam scelerisque urna tortor, at aliquet est ultricies nec.','https://i.redd.it/c712p0whceu41.png', 1, 'AskReddit', 997),
('My modest Pop!_OS set up (which I am actually very proud of)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis lacus in leo facilisis, et ullamcorper elit pulvinar. Quisque feugiat sed urna quis pharetra. Proin sed enim at magna vehicula pretium et sit amet turpis. Etiam scelerisque urna tortor, at aliquet est ultricies nec.','https://hsm.utimaco.com/wp-content/uploads/2017/09/2.2.8-random-number-generation-RNG.jpg', 2, 'AskReddit', 110);

INSERT INTO comments (content, user_id, post_id, votes) VALUES
('It’s 3.30pm, the real question should be why am I still in bed?', 2, 1, 16895),
('Comment content test', 2, 2, 16895);

COMMIT;
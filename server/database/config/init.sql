BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    votes INTEGER
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    comment_id INTEGER REFERENCES comments(id),
    user_id INTEGER REFERENCES users(id),
    community VARCHAR(100) NOT NULL,
    votes INTEGER,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (username, email_address, password) VALUES
('ahmadomar', 'ahmad@gmail.com', 'abcd123'),
('aomar', 'ahmadomar@gmail.com', '123abcd');

INSERT INTO comments (content, user_id, votes) VALUES
('It’s 3.30pm, the real question should be why am I still in bed?', 2, 16895);

INSERT INTO posts (title, content, comment_id, user_id, community, votes) VALUES
('Why are you still awake?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis lacus in leo facilisis, et ullamcorper elit pulvinar. Quisque feugiat sed urna quis pharetra. Proin sed enim at magna vehicula pretium et sit amet turpis. Etiam scelerisque urna tortor, at aliquet est ultricies nec.', 1, 1, 'r/AskReddit', 997);




COMMIT;
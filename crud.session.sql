CREATE TABLE things (
   id serial PRIMARY KEY,
   updated_at timestamp NOT NULL DEFAULT current_timestamp,
   created_at timestamp NOT NULL DEFAULT current_timestamp,
   body text NOT NULL CHECK (body != '')
);

CREATE TABLE things (
   id serial PRIMARY KEY,
   updated_at timestamp NOT NULL DEFAULT current_timestamp,
   created_at timestamp NOT NULL DEFAULT current_timestamp,
   body text NOT NULL CHECK (body != '')
);
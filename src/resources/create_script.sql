CREATE SEQUENCE hibernate_sequence
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;

CREATE TABLE room
(
 id     		 BIGINT NOT NULL,
 name   		 CHARACTER VARYING(255) NOT NULL,
 description CHARACTER  VARYING(255) NOT NULL,
 price   		 NUMERIC(19, 2)         NOT NULL,
 CONSTRAINT  user_pkey PRIMARY KEY (id)
);

CREATE TABLE users
(
 id     		 BIGINT NOT NULL,
 name   		 CHARACTER VARYING(255) NOT NULL,
 surname     TEXT,
 CONSTRAINT  pk_user PRIMARY KEY (id)
);

CREATE TABLE reservation
(
 id 			   BIGINT NOT NULL,
 room_id 		 BIGINT NOT NULL,
 user_id 		 BIGINT NOT NULL,
 validfrom   TIMESTAMP WITHOUT TIME ZONE NOT NULL,
 validto     TIMESTAMP WITHOUT TIME ZONE NOT NULL,

 CONSTRAINT  pk_reservation
 PRIMARY KEY (id),

 CONSTRAINT  fk_reservation_room
 FOREIGN KEY (room_id)
 REFERENCES  room (id)
 MATCH SIMPLE
 ON UPDATE NO ACTION ON DELETE NO ACTION,

 CONSTRAINT fk_reservation_user
 FOREIGN KEY (user_id)
 REFERENCES "users" (id)
 MATCH SIMPLE
 ON UPDATE NO ACTION ON DELETE NO ACTION
);

INSERT INTO users (id, name, surname) VALUES (1, 'Jakub', 'Krupski');
INSERT INTO users (id, name, surname) VALUES (2, 'Krzysztof', 'Kowal');
INSERT INTO users (id, name, surname) VALUES (3, 'Dariusz', 'Kowalski');


INSERT INTO room  VALUES (1, 'Duzy', 'opis krotki', 200);
INSERT INTO room  VALUES (2, 'Maly', 'opis dlugi', 300);


INSERT INTO reservation (id, room_id, user_id, validfrom, validto) values (1, 1, 1, '2015-11-22', '2015-11-25');
INSERT INTO reservation (id, room_id, user_id, validfrom, validto) values (2, 1, 1, '2015-11-26', '2015-11-29');
INSERT INTO reservation (id, room_id, user_id, validfrom, validto) values (3, 1, 1, '2015-12-02', '2015-12-06');
INSERT INTO reservation (id, room_id, user_id, validfrom, validto) values (4, 2, 1, '2015-11-22', '2015-11-23');
INSERT INTO reservation (id, room_id, user_id, validfrom, validto) values (5, 2, 1, '2015-11-28', '2015-11-29');
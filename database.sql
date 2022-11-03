CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL  
);

DROP TABLE "category";

CREATE TABLE "giphy" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(255),
	"category_id" INT REFERENCES "category"
);
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


INSERT INTO "giphy" ("url","category_id")
VALUES ('https://media2.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=ecf05e47z3ixnlm98ojxc61gr7ur56jo2elgwn0mo2u9u1mc&rid=giphy.gif&ct=g',1);
--SELECT "category"
--FROM 
--JOIN "giphy"
--ON "category"."id" = "giphy"."category_id";

DROP TABLE "giphy";


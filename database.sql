/**
 * Stanislav Malik
 * 2021
 * sql for create table and trigger for salon-vivien.sk
 */

/* table dress */
CREATE TABLE dress (
    dress_i int(11) NOT NULL,
    name varchar(25)  NOT NULL,
    size varchar(25) DEFAULT NULL,
    color varchar(50)  DEFAULT NULL,
    description text  DEFAULT NULL,
    price float NOT NULL DEFAULT 0,
    photo text COLLATE NOT NULL,
    category int(11) NOT NULL,
    ordering int(11) NOT NULL
);

ALTER TABLE dress ADD PRIMARY KEY (dress_id);

/* trigger for add ordering with insert */
create or replace trigger addOrdering
before insert on dress
for each row
begin
    declare maxOrder INTEGER;

    select max(ordering) into maxOrder from dress where category = NEW.category;
    set NEW.ordering = maxOrder + 1;
end;
